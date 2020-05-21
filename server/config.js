module.exports = {

  // Services
  PORT: int(process.env.PORT) || 3000,
  PROD: bool(process.env.PROD) || false,
  WEB_CONCURRENCY: int(process.env.WEB_CONCURRENCY) || 1,

  // Ionic API and Appflow dashboard
  API_URL: process.env.API_URL || 'https://api.ionicjs.com',
  DASHBOARD_URL: process.env.DASHBOARD_URL || 'https://dashboard.ionicframework.com',

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

  // Sentry error tracking
  SENTRY_DSN: process.env.SENTRY_DSN || null,
  SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT || null,

  // Twilio text messaging
  TWILIO_SID: process.env.TWILIO_SID || null,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || null,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER || '(415) 214-8179',

  // Twitter
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY || null,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET || null,
  TWITTER_ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY || null,
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET || null,

  HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || null,

  PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT || 
    'https://ionicframeworkcom.prismic.io/api/v2',
  PRISMIC_PREVIEW: bool(process.env.PRISMIC_PREVIEW) || false,

  RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET
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
