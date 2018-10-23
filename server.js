require('dotenv').config({silent: true});

const express         = require('express');
const app             = express();
const compress        = require('compression');
const cookieParser    = require('cookie-parser');
const dateFilter      = require('nunjucks-date-filter');
const expressNunjucks = require('express-nunjucks');
const helmet          = require('helmet');
const pageNotFound    = require('./server/pageNotFound');
const processRequest  = require('./server/processRequest');
const router          = require('./server/router');
const tools           = require('./server/tools');

const { prismicMiddleware } = require('./server/prismic');

const { PORT, PROD, REDIS_URL } = require('./server/config');

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

app.set('trust proxy', true);
app.use(compress());
app.use(cookieParser());
app.use(helmet());
app.use(prismicMiddleware);
app.use(processRequest);

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

app.use(pageNotFound);

// bind the app to listen for connections on a specified port
app.listen(PORT, function() {
  // Render some console log output
  console.log('Listening on port ' + PORT);
  tools.bustCloudflareCache();
});
