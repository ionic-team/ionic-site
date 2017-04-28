module.exports = {

  // Services
  PORT: int(process.env.PORT) || 3000,
  PROD: bool(process.env.PROD) || false,

  // CloudFlare
  CF_EMAIL: process.env.CF_EMAIL || null,
  CF_TOKEN: process.env.CF_TOKEN || null,
  CF_ZONE: process.env.CF_ZONE || null,

  // Email
  SENDGRID_APIKEY: process.env.SENDGRID_APIKEY || '',

  // Pipedrive CRM
  PIPEDRIVE_TOKEN: process.env.PIPEDRIVE_TOKEN || null,
};

function bool(str) {
  if (str == void 0) {
    return false;
  }
  return str.toLowerCase() === 'true';
}

function int(str) {
  if (!str) {
    return 0;
  }
  return parseInt(str, 10);
}

function float(str) {
  if (!str) {
    return 0;
  }
  return parseFloat(str, 10);
}
