require('dotenv').config({silent: true});
  
const express      = require('express');
const compress     = require('compression');
const cookieParser = require('cookie-parser');
const dateFilter   = require('nunjucks-date-filter');
const nunjucks     = require('nunjucks');
const helmet       = require('helmet');
const path         = require('path');
const Sentry       = require('@sentry/node');
const throng       = require('throng');

const { createProxyMiddleware } = require('http-proxy-middleware');

const { handleNotFound } = require('./server/pageNotFound');
const { router }         = require('./server/router');
const tools              = require('./server/tools');
const { 
  checkForRedirects, 
  loadLocalVars
}                        = require('./server/processRequest');
const { 
  prismicMiddleware,
  announcementBarCronJob
}                        = require('./server/prismic');

const { 
  PORT, 
  PROD, 
  REDIS_URL, 
  SENTRY_DSN, 
  SENTRY_ENVIRONMENT,
  WEB_CONCURRENCY
} = require('./server/config');

// start up paralell servers in prod
throng({
  workers: WEB_CONCURRENCY,
  lifetime: Infinity
}, start)


function start() {
  const app = express();
  
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN, environment: SENTRY_ENVIRONMENT });
  }
  
  // rate limit POST requests
  if (REDIS_URL) {
    var redis   = require('redis').createClient(REDIS_URL);
    var limiter = require('express-limiter')(app, redis);
  
    // rate limit POST requests
    /*
    limiter({
      path: '*',
      method: 'post',
      lookup: ['headers.CF-Connecting-IP'],
      // 10 requests per hour
      total: 10,
      expire: 1000 * 60 * 60
    })
    */
  }
  
  app.set('trust proxy', true);
  // The Sentry request handler must be the first middleware on the app
  app.use(Sentry.Handlers.requestHandler());
  app.use(compress());
  app.use(cookieParser());
  app.use(helmet());
  app.enable('etag');
  
  app.use(checkForRedirects);

  // check if this is a valid static file
  app.use(express.static('dist', { etag: true }));
  // cache images and static assets for 1 week
  app.use(express.static('content', { maxAge: 1000 * 60 * 60 * 24 * 7 }));

  app.use(prismicMiddleware);
  app.use(loadLocalVars);
  announcementBarCronJob(app)

  if (!PROD) {
    // Proxy for oauth when in dev mode
    app.use('/oauth', createProxyMiddleware({ target: 'https://staging.ionicframework.com', changeOrigin: true, secure: false }));
  }
  
  nunjucks.configure('server/pages', {
    express: app,
    noCache: !PROD,
    autoescape: false
  }).addFilter('date', dateFilter);

  app.set('views', path.resolve(__dirname, '/server/pages'));
  app.set('view engine', 'html');
  
  app.use(router(app));
  
  // The Sentry error handler must be before any other error middleware
  app.use(Sentry.Handlers.errorHandler());
  
  app.use(handleNotFound);

  // bind the app to listen for connections on a specified port
  app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
    // 5 min delay for heroku rolling start to complete
    setTimeout(tools.bustCloudflareCache, 1000 * 60 * 5); 
  });
} // end start()
