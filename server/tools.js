const config = require('./config');
const request   = require('request');
const sendgrid = require('sendgrid')(config.SENDGRID_APIKEY);

module.exports = {
  bustCloudflareCache: () => {
    if (!config.CF_EMAIL || !config.CF_TOKEN || !config.CF_ZONE) {
      // return console.log('Insufficient credentials to bust CloudFlare cache');
      return; // silently fail to bust cache
    }

    let CFAPI = 'https://api.cloudflare.com';
    let options = {
      url: CFAPI + '/client/v4/zones/' + config.CF_ZONE + '/purge_cache',
      method: 'DELETE',
      headers: {
        'X-Auth-Email': config.CF_EMAIL,
        'X-Auth-Key': config.CF_TOKEN,
        'Content-Type': 'application/json'
      },
      body: '{"purge_everything":true}'
    };

    request(options, (err, res, body) => {
      if (err) {
        return console.error(
          new Error({
            error: err,
            response: res,
            body: JSON.parse(body)
          })
        );
      }
      console.log('CloudFlare Cache busted', JSON.parse(body));
    });
  },

  email: (toEmails, from, fromName, subject, text) => {
    var emailData = {
      to: toEmails,
      subject: subject,
      text: text,
      from: from,
      fromname: fromName
    };

    return new Promise((resolve, reject) => {
      sendgrid.send(emailData, function(err, result) {
        if (err) {
          // do you have an .env file?
          console.error('Sendgrid error:', err);
          reject(err);
          return;
        }
        console.log('Sent email', result);
        resolve(result);
      });
    });
  }
};
