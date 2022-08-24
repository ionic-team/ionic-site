const config    = require('../config');
const Hubspot = require('hubspot');
const hs = new Hubspot({ accessToken: config.HUBSPOT_ACCESS_TOKEN });

module.exports = async function(req, res) {

  const respond = found => {
    res.json({found});
  }

  try {
    const contact = await hs.contacts.getByToken(
      req.params.hsutk ||
      req.cookies['hubspotutk']
    );

    if (!contact || !contact['list-memberships']) return;

    let found = false;
    contact['list-memberships'].forEach(list => {
      if (list['static-list-id'] == req.params.listId) {
        found = true;
      }
    });
  
    respond(found);

  } catch (e) {
    console.error(e);
    respond(false);
  }
}
