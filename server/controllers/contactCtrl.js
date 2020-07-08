const config    = require('../config');
const tools     = require('../tools');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);

module.exports = function(req, res) {
  var cleanForm = {}
  for (var p in req.body) {
    if (req.body.hasOwnProperty(p)) {
      clean[req.sanitize(p)] = req.sanitize(
        req.body[p].value ? req.body[p].value : req.body[p]
      );
    }
  }

  var promises = [];
  var form = cleanForm;

  var m = {
    to: [
      'brody@ionic.io',
      'joe@ionic.io',
      'matt@ionic.io',
      'swami@ionic.io',
      'andrew@ionic.io',
      'ryan@ionic.io',
      'perry@ionic.io',
      'stephen@ionic.io'
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

  // add user to SalesForce
  promises.push(tools.addSalesForceLead(form));

  // thank the user for contacting us
  if ( form.page != 'ebook-hybrid-v-native') {
    promises.push(tools.sendThankYouForContacting(form.email));
  }

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(reflect)).then(values => {
    // send the user back to where they came from based on form_name
    // console.log('gets here')
    let message = 'Thanks! We’ve received your info and a member of our team will get in touch soon.';
    if (req.body.page === 'ebook-hybrid-v-native') {
      message = 'Enjoy reading your copy of the eBook. It is on its way to your inbox!';
    }
    res.json({ ok: true, message: message });
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
