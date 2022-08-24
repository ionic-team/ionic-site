const config    = require('../config');
const Sentry    = require('@sentry/node');

module.exports = async function(req, res) {
  const Hubspot = require('hubspot');
  const hs = new Hubspot({ accessToken: config.HUBSPOT_ACCESS_TOKEN });
  
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
    res.status(e.statusCode).json({ error: e.error });
  }
}
