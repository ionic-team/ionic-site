const config = require('./config');
const request   = require('request');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);
const twitter = require('twitter')({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

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

  getTwitterProfile: () => {
    if (!config.TWITTER_CONSUMER_KEY ||
      !config.TWITTER_CONSUMER_SECRET ||
      !config.TWITTER_ACCESS_TOKEN_KEY ||
      !config.TWITTER_ACCESS_TOKEN_SECRET) {

      console.warn('Twitter credentials not found. Ignoring profile request.');
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      twitter.get('users/show.json',{screen_name: 'ionicframework'}, (error, ionicframework) => {
        if(error) return reject( error );
        resolve(ionicframework); 
      });
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
        first_name: opts.first_name || null,
        last_name: opts.last_name || null
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
