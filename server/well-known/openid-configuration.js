const config = require('../config');

module.exports = function(req, res) {
  const site_url = `${req.protocol}://${req.hostname}`;
  res.json({
    issuer: site_url,
    authorization_endpoint: `${site_url}/oauth/authorize`,
    token_endpoint: `${config.API_URL}/oauth/token`,
    userinfo_endpoint: `${config.API_URL}/oauth/userinfo`,
    jwks_uri: 'https://api.ionicjs.com/oauth/keys',
    scopes_supported: ['openid', 'profile', 'email'],
    response_types_supported: ['token id_token'],
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256'],
    claims_supported: ['aud', 'email', 'email_verified', 'exp', 'iat', 'iss', 'name', 'picture', 'sub']
  });
};
