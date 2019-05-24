const config    = require('../config');
const {
  saveEmailSendGrid,
  saveEmailHubSpot,
  addEmailToPodcastList,
  reflect
}     = require('../tools');

module.exports = function(req, res) {

  const email = req.sanitize(req.body.email);
  const podcast = req.sanitize(req.body.podcast);

  const opts = {
    email: email,
    newsletter_subscriber: 'true'
  }

  const promises = [
    saveEmailSendGrid(opts),
    saveEmailHubSpot(opts)
  ]

  if (podcast) {
    promises.push(addEmailToPodcastList(email))
  }

  // relfect because we want to show the page even if one of the tasks error
  Promise.all(promises.map(reflect)).then(values => {
    res.header('Access-Control-Allow-Origin', '*');

    let csp = 'upgrade-insecure-requests; default-src https:';
    res.header('Content-Security-Policy', csp);
    res.header('X-Content-Security-Policy', csp);
    res.header('X-WebKit-CSP', csp);

    res.json({ ok: true, message: `${email} added to newsletter${podcast ? 
      ' and podcast list' : ''}` });
  });
}



