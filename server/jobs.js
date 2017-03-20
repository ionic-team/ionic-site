const config = require('./config');
const request   = require('request')

module.exports = {
  bustCache: () => {
    if (!config.CF_EMAIL || !config.CF_TOKEN || !config.CF_ZONE) {
      return console.log('Insufficient credentials to bust CloudFlare cache');
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
    }
    
    request(options, (err, res, body) => {
      if (err) { 
        return console.error(
          new Error({
            error: err, 
            response: res,
            body: JSON.parse(body)
          })
        )
      }
      console.log('CloudFlare Cache busted', JSON.parse(body));
    });
  }
}
