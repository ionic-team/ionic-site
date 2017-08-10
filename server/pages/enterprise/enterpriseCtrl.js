var config    = require('../../config');
var tools     = require('../../tools');
var Pipedrive = require('pipedrive');

var pipedrive = config.PIPEDRIVE_TOKEN ?
  new Pipedrive.Client(config.PIPEDRIVE_TOKEN, {strictMode: true}) : null;

module.exports = function(req, res) {

  var promises = [];

  var m = {
    to: [
      'brody@ionic.io', 'joe@ionic.io', 'matt@ionic.io', 'swami@ionic.io', 'andrew@ionic.io'
      // 'perry@ionic.io'
    ],
    from: 'sales@ionic.io',
    name: 'Ionic Enterprise',
    subject: 'Ionic Enterprise Sub. Entry',
    body: objToString(req.body)
  };

  // send email
  promises.push(new Promise((resolve, reject) => {
    tools.email(m.to, m.from, m.name, m.subject, m.body).then(function() {
      res.locals.notification = 'Message Sent';
      res.locals.notificationClass = 'success';
      resolve();
    }, function(err) {
      res.locals.notification = 'Unable to send message at this time';
      res.locals.notificationClass = 'error';
      reject();
    });
  }));

  

  if (pipedrive) {
    var asigneeId = 2392390; // brody

    // create a PD object w/ promised methods so we can chain these cleanly
    pd = {
      addOrg: (org) => {
        console.log('adding org')
        return new Promise((resolve, reject) => {
          pipedrive.Organizations.add({
            name: org.name,
            owner_id: org.owner_id,
            visible_to: 3
          }, (err, response) => {
	          if (err) {
              reject(err);
              return console.error(err);
            }
            // console.log(response);
	          resolve(response);
          });
        });
      },
      addPerson: (person) => {
        console.log('adding org')
        return new Promise((resolve, reject) => {
          pipedrive.Persons.add({
            name: person.name,
            owner_id: person.owner_id, // brody
            email: [person.email],
            phone: [person.phone],
            org_id: person.org_id,
            visible_to: 3 // everyone
          }, (err, response) => {
	          if (err) {
              reject(err);
              return console.error(err);
            }
            // console.log(response);
	          resolve(response)
          })
        })
      },
      addDeal: (deal) => {
        console.log('adding deal')
        return new Promise((resolve, reject) => {
          pipedrive.Deals.add({
            title: deal.title,
            user_id: deal.user_id, // brody
            person_id: deal.person_id,
            org_id: deal.org_id,
            '6205dc9bf717d81a22659121b0f4c5407dcb86eb': 'Website Enterprise Form',
            visible_to: 3
          }, (err, response) => {
	          if (err) {
              reject(err);
              return console.error(err);
            }
            // console.log(response);
	          resolve(response)
          })
        })
      },
      addNote: (note) => {
        console.log('adding note')
        return new Promise((resolve, reject) => {
          pipedrive.Notes.add({
            content: note.content,
            deal_id: note.deal_id,
            person_id: note.person_id,
            org_id: note.org_id
          }, (err, response) => {
	          if (err) {
              reject(err);
              return console.error(err);
            }
            // console.log(response);
	          resolve(response)
          })
        })
      }
    }

    // Make API Calls to Pipedrive
    promises.push(new Promise((resolve, reject) => {
      pd.addOrg({
        name: req.body.company,
        owner_id: asigneeId
      }).then((org) => pd.addPerson({
        name: req.body.first_name + ' ' + req.body.last_name,
        owner_id: asigneeId, // brody
        email: req.body.email,
        phone: req.body.phone,
        org_id: org.id
      })).then((person) => pd.addDeal({
        title: 'Enterprise Website Lead: ' + req.body.company,
        user_id: asigneeId, // brody
        person_id: person.id,
        org_id: person.org_id,
      })).then((deal) => pd.addNote({
        content: objToString(req.body).replace(/\n/g, ' | '),
        deal_id: deal.id,
        person_id: deal.person_id,
        org_id: deal.org_id
      })).then(resolve);
    }));

    promises.push(tools.saveEmail({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }).then((response)=>{
      return tools.addEmailToList({
        list_id: 1372369,
        user: response.body.persisted_recipients[0]
      })
    }));

    // relfect because we want to show the page even if one of the tasks error
    Promise.all(promises.map(reflect)).then(values => {
      res.render('enterprise/index');
    });
  }
}

function reflect(promise) {
  return promise.then(function(v) { return {v: v, status: 'resolved'};},
                      function(e) { return {e: e, status: 'rejected'};});
}

function objToString(obj) {
  var str = '';
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += cap(p) + ' :: ' + obj[p] + '\n\r';
    }
  }
  return str;
};

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
