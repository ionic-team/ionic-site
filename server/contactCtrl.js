const config    = require('./config');
const tools     = require('./tools');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);

const jsforce = require('jsforce');
var sfConn = new jsforce.Connection({
  instanceUrl : config.SALESFORCE_INSTANCE_URL,
  accessToken : config.SALESFORCE_ACCESS_TOKEN
})

module.exports = function(req, res) {

  var promises = [];
  var form = req.body;

  var m = {
    to: [
      'brody@ionic.io', 'joe@ionic.io', 'matt@ionic.io', 'swami@ionic.io', 'andrew@ionic.io'
      // 'perry@ionic.io'
    ],
    from: 'sales@ionic.io',
    name: 'Ionic Sales',
    subject: 'Ionic Website Submission - ' + form.page,
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

  // add user to campaign monitor
  promises.push(new Promise((resolve, reject) => {
    if(!config.SALESFORCE_INSTANCE_URL || !config.SALESFORCE_ACCESS_TOKEN) {
      console.warn('Salesforce API credentials not found. Ignoring CRM request.');
      return resolve(null);
    }
    sfConn.sobject("Lead").create({
      email: form.email,
      firstname: form.first_name,
      lastname: form.last_name,
      title: form.title,
      company: form.company,
      leadsource: 'Ionicframework.com',
      Webpage__c: form.page,
      Lead_Capture_Message__c: form.message,
      NumberOfEmployees: form.Employees,
      Phone: form.phone
    }).then((ret, err) => {
      if (err || !ret.success) {
        reject(err)
        return console.error(err, ret);
      }
      sfConn.sobject("campaignMember").create({
        LeadId: ret.id, 
        Status: 'Responded',
        CampaignId: '701f40000008UYD'
      }).then((ret, err) => {
        if (err || !ret.success) {
          reject(err)
          return console.error(err, ret);
        }
        resolve(ret)
      })
    })
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
          subject: 'Thanks for reaching out!'
        }],
        from: {
          email: 'no-reply@ionicframework.com', 
          name: 'Ionic'
        },
        content: [{
          type: 'text/html',
          value: `We’ve received your info and a member of our sales team will get in touch soon.
Until then, feel free to visit our Resource Center for additional information on our business and enterprise offerings, including customer stories and product info.
Cheers,
The Ionic Team`
        }],
        template_id: 'd8f22fb4-d88b-4e82-8ffa-025cb8039447',
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
