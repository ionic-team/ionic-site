const { 
  HUBSPOT_API_KEY
} = require('./config');

const Hubspot = require('hubspot');
const hs = new Hubspot({ apiKey: HUBSPOT_API_KEY });


module.exports = {
  getByToken: (htk) => {
    return hs.contacts.getByToken(htk);
  },
  getByEmail: (email) => {
    return hs.contacts.getByEmail(email);
  }
};