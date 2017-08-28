const config = require('./config');
const request   = require('request');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);

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
    if (!config.SENDGRID_APIKEY) {
      console.warn('Sendgrid API keys not found, ignoring email request');
      return Promise.resolve()
    }
    var emailData = {
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: toEmails.map((email)=>{return {email: email}}),
          subject: subject
        }],
        from: {
          email: from, 
          name: fromName
        },
        content: [{
          type: 'text/plain',
          value: text
        }]
      }
    }
    return sg.API(emailData)
  },

  addContactList: (name) => {
    if (!config.SENDGRID_APIKEY) {
      console.warn('Sendgrid API keys not found, ignoring add contact request');
      return Promise.resolve()
    }
    var requestParams = {
      method: 'POST',
      path: '/v3/contactdb/lists',
      body: [{
        name: name
      }]
    }

    return sg.API(requestParams)
  },

  saveEmail: (opts) => {
    if (!config.SENDGRID_APIKEY) {
      console.warn('Sendgrid API keys not found, ignoring add contact request');
      return Promise.resolve()
    }
    var requestParams = {
      method: 'POST',
      path: '/v3/contactdb/recipients',
      body: [{
        email: opts.email,
        first_name: opts.first_name,
        last_name: opts.last_name
      }]
    }
    return sg.API(requestParams)
  },

  addEmailToList: (opts) => {
   
    var requestParams = {
      method: 'POST',
      path: `/v3/contactdb/lists/${opts.list_id}/recipients/${opts.user}`,
      body: {}
    }
    return sg.API(requestParams)
  }
};
