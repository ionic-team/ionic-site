const config    = require('../config');
const Sentry    = require('@sentry/node');

module.exports = async function(req, res) {
  const Hubspot = require('hubspot');
  const hs = new Hubspot({ apiKey: config.HUBSPOT_API_KEY });
  
  try {
    const form = await hs.forms.getById(req.params.formId);
  
    res.json({ 
      id: form.guid,
      name: form.name,
      submitText: form.submitText,
      redirect: form.redirect,
      formFieldGroups: form.formFieldGroups
    });


  } catch (e) {
    res.json(e);
  }
}