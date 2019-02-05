require('dotenv').config({silent: true});

const express            = require('express');
const app                = express();
const compress           = require('compression');
const cookieParser       = require('cookie-parser');
const dateFilter         = require('nunjucks-date-filter');
const expressNunjucks    = require('express-nunjucks');
const proxy              = require('http-proxy-middleware');
const helmet             = require('helmet');
const Sentry             = require('@sentry/node');
const { handleNotFound } = require('./server/pageNotFound');
const processRequest     = require('./server/processRequest');
const { router }         = require('./server/router');
const tools              = require('./server/tools');

const prismicUtil = require('./server/prismic');

const { DOCS_URL, PORT, PROD, REDIS_URL, SENTRY_DSN, SENTRY_ENVIRONMENT } = require('./server/config');

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

process.env.PWD = process.cwd();

console.log('PWD', process.env.PWD);

const docsPath = /^\/docs(?!\/(v1|v3)).*$/;
const docsProxy = proxy({
  target: DOCS_URL,
  changeOrigin: true,
  onProxyRes: (proxyRes, req, res) => {
    if(proxyRes.statusCode === 404) {
      res.locals.proxy404 = true;
      if (handleNotFound(req, res)) {
        proxyRes.destroy();
        delete proxyRes;
      }
    }
  }
});

app.set('trust proxy', true);
// The Sentry request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
app.use(compress());
app.use(cookieParser());
app.use(helmet());
app.use(processRequest);
app.use(docsPath, docsProxy);
app.use(prismicUtil.middleware);

app.set('views', __dirname + '/server/pages');
expressNunjucks(app, {
  noCache: !PROD,
  autoescape: false,
  filters: {
    date: dateFilter
  }
});
app.enable('etag');

app.use(router(app));

app.use(express.static(process.env.PWD + '/_site/', {
  etag: true
}));

// The Sentry error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());

app.use(handleNotFound);

// bind the app to listen for connections on a specified port
app.listen(PORT, function() {
  // Render some console log output
  console.log('Listening on port ' + PORT);
  tools.bustCloudflareCache();
});
