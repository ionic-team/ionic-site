const config    = require('../config');
const tools     = require('../tools');

module.exports = function(req, res) {

  var promises = [];
  var email = req.sanitize(req.body.email);

  promises.push(new Promise((resolve, reject) => {
    tools.saveEmail({
      email: email,
      newsletter_subscriber: 'true'
    }).then((data, error) => {
      if (data.body.errors) {
        return reject(data.body.errors);
      }
      resolve(data.body);
    })
  }));

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(tools.reflect)).then(values => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({ ok: true, message: `${email} added to newsletter` });
  });
}



