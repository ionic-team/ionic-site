require('dotenv').config({silent: true});

const express         = require('express');
const app             = express();
const compress        = require('compression');
const config          = require('./server/config');
const cookieParser    = require('cookie-parser');
const expressNunjucks = require('express-nunjucks');
const jobs            = require('./server/jobs');
const pageNotFound    = require('./server/pageNotFound');
const processRequest  = require('./server/processRequest');
const router          = require('./server/router');

process.env.PWD = process.cwd();

console.log('PWD', process.env.PWD);

app.set('trust proxy', true);
app.use(compress());
app.use(cookieParser());
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
  jobs.bustCache();
});
