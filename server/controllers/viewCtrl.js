const config    = require('../config');
const tools     = require('../tools');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);
if(config.TWILIO_SID && config.TWILIO_AUTH_TOKEN) {
  var twilio = require('twilio')(config.TWILIO_SID, config.TWILIO_AUTH_TOKEN);
}

module.exports = function(req, res) {

  var promises = [];
  var phone = req.sanitize(req.body.phone);

//   promises.push(new Promise((resolve, reject) => {
//     // server doesn't have API keys in local env, ignore
//     if(!config.SENDGRID_APIKEY) {
//       console.warn('Sendgrid API key not found. Ignoring email request.');
//       return resolve(null);
//     }
//     var viewEmail = {
//       method: 'POST',
//       path: '/v3/mail/send',
//       body: {
//         personalizations: [{
//           to: [{
//             email:form.email,
//           }],
//           name: '',
//           subject: 'Download Ionic View!',
//           email: form.email
//         }],
//         from: {
//           email: 'no-reply@ionicframework.com',
//           name: 'Ionic'
//         },
//         content: [{
//           type: 'text/html',
//           value: `Click the link below on your mobile device to open Ionic View or direct you to the app store appropriate for your device.
// https://ionicview.app.link/mORHDUyIMG
// Cheers,
// The Ionic Team`
//         }],
//         template_id: '0d829c99-54dd-4b68-8ea4-439cbe8785d4',
//       }
//     }
//     sg.API(viewEmail, (error, response) => {
//       if (error) {
//         reject(error)
//         return console.error(error, response.body);
//       }
//       resolve(response)
//     })
//   }));

  promises.push(new Promise((resolve, reject) => {
    if (!twilio) {
      console.warn('Twilio credentials not found. Ignoring email request.');
      return resolve(null);
    }

    if (!(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(phone))) {
      console.error('Invalid phone number detected.');
      res.json({ ok: false, message: 'Invalid Phone Number' });
      return reject(null);
    }

    twilio.messages.create({
      to: phone,
      from: config.TWILIO_NUMBER,
      body: "Download Ionic View at https://ionicview.app.link/mORHDUyIMG",
    }, function(err, message) {
      if (err) {
        console.error(err)
        return reject(err);
      }
      resolve(message);
    });
  }));

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(reflect)).then(values => {
    res.json({ ok: true, message: 'Message Sent' });
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
