require('dotenv').config({silent: true});
  
const express            = require('express');
const compress           = require('compression');
const cookieParser       = require('cookie-parser');
const dateFilter         = require('nunjucks-date-filter');
const expressNunjucks    = require('express-nunjucks');
const helmet             = require('helmet');
const Sentry             = require('@sentry/node');
const throng             = require('throng');

const { handleNotFound } = require('./server/pageNotFound');
const { router }         = require('./server/router');
const tools              = require('./server/tools');
const { 
  checkForRedirects, 
  loadLocalVars
}                        = require('./server/processRequest');
const { 
  prismicMiddleware 
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
    limiter({
      path: '*',
      method: 'post',
      lookup: ['headers.CF-Connecting-IP'],
      // 10 requests per hour
      total: 10,
      expire: 1000 * 60 * 60
    })
  }
  
  app.set('trust proxy', true);
  // The Sentry request handler must be the first middleware on the app
  app.use(Sentry.Handlers.requestHandler());
  app.use(compress());
  app.use(cookieParser());
  app.use(helmet());
  app.enable('etag');
  
  app.use(checkForRedirects);
  app.use(prismicMiddleware);

  // check if this is a valid static file
  app.use(express.static(process.env.PWD + '/_site/', {
    etag: true
  }));

  app.use(loadLocalVars);
  
  app.set('views', __dirname + '/server/pages');
  expressNunjucks(app, {
    noCache: !PROD,
    autoescape: false,
    filters: {
      date: dateFilter
    }
  });
  
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
