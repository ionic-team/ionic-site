require('dotenv').config({silent: true});

const express         = require('express');
const app             = express();
const compress        = require('compression');
const config          = require('./server/config');
const cookieParser    = require('cookie-parser');
const expressNunjucks = require('express-nunjucks');
const helmet          = require('helmet');
const pageNotFound    = require('./server/pageNotFound');
const processRequest  = require('./server/processRequest');
const router          = require('./server/router');
const tools           = require('./server/tools');

// rate limit POST requests
if (config.REDIS_URL) {
  var redis   = require('redis').createClient(config.REDIS_URL);
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
app.use(processRequest);

app.set('views', __dirname + '/server/pages');
expressNunjucks(app, {
  noCache: !config.PROD,
  autoescape: false
});
app.enable('etag');

app.use(router(app));

app.use(express.static(process.env.PWD + '/_site/', {
  etag: true
}));

app.use(pageNotFound);

// bind the app to listen for connections on a specified port
app.listen(config.PORT, function() {
  // Render some console log output
  console.log('Listening on port ' + config.PORT);
  tools.bustCloudflareCache();
});
