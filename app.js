var express = require("express"),
    app = express(),
    url = require('url'),
    compress = require('compression'),
    processRequest = require('./server/processRequest');

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

app.use(function(req, res, next) {
  var parts = url.parse(req.url);

  if (parts.path.indexOf('/blog/') == 0) {
    res.redirect(301, 'http://blog.ionic.io/' + req.url.replace(/^\/blog\//, ''));
  } else if (parts.path.indexOf('/creator/') == 0) {
    res.redirect(301, 'https://creator.ionic.io/' + req.url.replace(/^\/creator\//, ''))
  } else if (parts.path.indexOf('/tutorials') == 0) {
    res.redirect(301, 'http://ionicframework.com/getting-started');
  } else if (parts.path.indexOf('/jobs') == 0) {
    res.redirect(301, 'http://ionic.io/jobs');
  } else if (req.headers.host.indexOf('learn.') == 0) {
    res.redirect(301, 'http://ionicframework.com/docs/');
  } else {
    next();
  }
});

app.set('trust proxy', true);
app.use(compress());
app.use(processRequest);

app.use(express.static(process.env.PWD));

app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/404.html');
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
