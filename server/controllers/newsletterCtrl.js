const config    = require('../config');
const tools     = require('../tools');

module.exports = function(req, res) {

  var promises = [];
  var form = req.body;

  console.log(form);
  promises.push(new Promise((resolve, reject) => {
    tools.saveEmail({
      email:form.email,
      newsletter_subscriber: 'true'
    }).then((data, error) => {
      if (data.body.errors) {
        return reject(data.body.errors);
      }
      resolve(data.body);
    })
  }));

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(reflect)).then(values => {
    res.json({ ok: true, message: `${form.email} added to newsletter` });
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
