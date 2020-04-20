const config    = require('../config');
const Sentry    = require('@sentry/node');

module.exports = function(req, res) {
  console.log(req.body);
  const x = Sentry.captureMessage('Hubspot Form Blocked')
  res.json({ ok: true, message: `Response ID ${x}` });
}