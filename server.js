var express        = require("express");
var app            = express();
var compress       = require('compression');
var analytics      = require('ionic-web-analytics');
// var cookieParser   = require('cookie-parser');
var processRequest = require('./server/processRequest');
var router         = require('./server/router');

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

app.set('trust proxy', true);
app.use(compress());
// app.use(cookieParser());
app.use(processRequest);
// app.use(router(app));

var checkRequest = function (req) {
  return !/.*(css\/|data\/|fonts\/|img\/|js\/|public_html\/|browserconfig\.xml|favicon\.ico|manifest\.json).*/.test(req.path);
}

app.use(analytics('ionic_framework', checkRequest, {
  batchSize: 500
}));

app.use(express.static(process.env.PWD + '/_site/', {
  maxage: 315360000000 // ten years
}));

app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/_site/404.html');
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
