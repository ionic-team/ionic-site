const config    = require('../config');
const Sentry    = require('@sentry/node');

module.exports = function(req, res) {
  console.log(req.body);

  const scriptType = req.body.type === 'button' ? 'Button' : 'Form';
  let message = `Hubspot ${scriptType} Blocked`

  if (!!req.cookies['hubspotutk']) {
    message = `Hubspot ${scriptType} script slow to load.`
  }
  
  const x = Sentry.captureMessage(message)
  res.json({ ok: true, message: `Response ID ${x}` });
}