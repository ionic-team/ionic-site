const config = require('./config');
const request   = require('request');
const sg = require('sendgrid')(config.SENDGRID_APIKEY);
const twitter = require('twitter')({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

const jsforce = require('jsforce');
var sfConn = new jsforce.Connection()

module.exports = {
  // CloudFlare
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

  // Twitter
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

  // Sendgrid
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
      method: 'PATCH',
      path: '/v3/contactdb/recipients',
      body: [{
        email: opts.email,
        first_name: opts.first_name || null,
        last_name: opts.last_name || null,
        newsletter_subscriber: opts.newsletter_subscriber || null
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
  },

  sendThankYouForContacting: (email) => {
    return new Promise((resolve, reject) => {
      // server doesn't have API keys in local env, ignore
      if(!config.SENDGRID_APIKEY) {
        console.warn('Sendgrid API key not found. Ignoring email request.');
        return resolve(null);
      }
      var thankYouEmail = {
        method: 'POST',
        path: '/v3/mail/send',
        body: {
          personalizations: [{
            to: [{email:email}],
            subject: 'Thanks for reaching out!'
          }],
          from: {
            email: 'no-reply@ionicframework.com',
            name: 'Ionic'
          },
          content: [{
            type: 'text/html',
            value: `We’ve received your info and a member of our sales team will get in touch soon.
  Until then, feel free to visit our Resource Center for additional information on our business and enterprise offerings, including customer stories and product info.
  Cheers,
  The Ionic Team`
          }],
          template_id: 'd8f22fb4-d88b-4e82-8ffa-025cb8039447',
        }
      }
      sg.API(thankYouEmail, (error, response) => {
        if (error) {
          reject(error)
          return console.error(error, response.body);
        }
        resolve(response)
      })
    })
  },

  // SalesForce
  addSalesForceLead: (form) => {
    return new Promise((resolve, reject) => {
      if(!config.SALESFORCE_USER || !config.SALESFORCE_PASSWORD_TOKEN) {
        console.warn('Salesforce API credentials not found. Ignoring CRM request.');
        return reject(null);
      }

      sfConn.login(config.SALESFORCE_USER, config.SALESFORCE_PASSWORD_TOKEN, function(err, userInfo) {
        console.log(err)
        if (err) { return reject(err); }
        sfConn.sobject("Lead").create({
          email: form.email,
          firstname: form.first_name,
          lastname: form.last_name,
          title: form.title,
          company: form.company,
          leadsource: 'Ionicframework.com',
          Webpage__c: form.page,
          Lead_Capture_Message__c: form.message,
          NumberOfEmployees: form.Employees,
          Phone: form.phone,
          Lead_Life_Stage__c: 'Marketing Qualified Lead'
        }).then((ret, err) => {
          if (err || !ret.success) {
            reject(err)
            return console.error(err, ret);
          }
          sfConn.sobject("campaignMember").create({
            LeadId: ret.id,
            Status: 'Responded',
            CampaignId: '701f40000008UYD'
          }).then((ret, err) => {
            if (err || !ret.success) {
              reject(err)
              return console.error(err, ret);
            }

            resolve(ret)
          })
        }).catch((err,ret)=> {
          reject(err)
          return console.error(err, ret);
        })
      })
    })
  }
};
