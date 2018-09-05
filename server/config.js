module.exports = {

  // Services
  PORT: int(process.env.PORT) || 3000,
  PROD: bool(process.env.PROD) || false,

  // CloudFlare
  CF_EMAIL: process.env.CF_EMAIL || null,
  CF_TOKEN: process.env.CF_TOKEN || null,
  CF_ZONE: process.env.CF_ZONE || null,

  // Redis
  REDIS_URL: process.env.REDIS_URL || null,

  // Sendgrid Email
  SENDGRID_APIKEY: process.env.SENDGRID_APIKEY || '',

  // Pipedrive CRM
  PIPEDRIVE_TOKEN: process.env.PIPEDRIVE_TOKEN || null,

  // SALESFORCE CRM
  SALESFORCE_USER: process.env.SALESFORCE_USER || null,
  SALESFORCE_PASSWORD_TOKEN: process.env.SALESFORCE_PASSWORD_TOKEN || null,

  // Twilio text messaging
  TWILIO_SID: process.env.TWILIO_SID || null,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || null,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER || '(415) 214-8179',

  // Twitter
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY || null,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET || null,
  TWITTER_ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY || null,
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET || null,

  HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || null
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
