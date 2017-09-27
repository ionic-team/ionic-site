const config    = require('../config');
const tools     = require('../tools');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);

const jsforce = require('jsforce');
var sfConn = new jsforce.Connection()

module.exports = function(req, res) {

  var promises = [];
  var form = req.body;

  var m = {
    to: [
      'perry@ionic.io'
    ],
    from: 'no-reply@ionic.io',
    name: 'Ionic View',
    subject: 'Download Ionic View',
    body: objToString(form)
  };

  // send email to sales team
  promises.push(new Promise((resolve, reject) => {
    tools.email(m.to, m.from, m.name, m.subject, m.body).then(function() {
      resolve();
    }, function(err) {
      reject();
    });
  }));

  // thank the user for contacting us
  promises.push(new Promise((resolve, reject) => {
    // server doesn't have API keys in local env, ignore
    if(!config.SENDGRID_APIKEY) {
      console.warn('Sendgrid API key not found. Ignoring email request.');
      return resolve(null);
    }
    var thankYouEmail = {
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: [{email:form.email}],
          subject: 'Download Ionic View!'
        }],
        from: {
          email: 'no-reply@ionicframework.com', 
          name: 'Ionic'
        },
        content: [{
          type: 'text/html',
          value: `Click the link below on your mobile device to open Ionic View or direct you to the app store appropriate for your device.          
https://ionicview.app.link/mORHDUyIMG
Cheers,
The Ionic Team`
        }],
        template_id: '32348fe7-9cce-425f-be4f-5691c0ca7df6',
      }
    }
    sg.API(thankYouEmail, (error, response) => {
      if (error) {
        reject(error)
        return console.error(error, response.body);
      }
      resolve(response)
    })
  }));

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(reflect)).then(values => {
    // send the user back to where they came from based on form_name
    // console.log('gets here')
    res.json({ ok: true, message: 'Message Sent' });
    // res.render('enterprise/index');
  });
}

function reflect(promise) {
  return promise.then(function(v) { return {v: v, status: 'resolved'};},
                      function(e) { return {e: e, status: 'rejected'};});
}

function objToString(obj) {
  var str = '';
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += cap(p) + ' :: ' + (obj[p].value ? obj[p].value : obj[p]) + '\n\r';
    }
  }
  return str;
};

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
