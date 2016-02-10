var express = require("express"),
    app = express(),
    url = require('url'),
    compress = require('compression');

process.env.PWD = process.cwd()

console.log('PWD', process.env.PWD);

app.use(function(req, res, next) {
  var parts = url.parse(req.url);

  if (parts.path.indexOf('/blog/') == 0) {
    res.redirect(301, 'http://blog.ionic.io/' + req.url.replace(/^\/blog\//, ''));
  } else if (parts.path.indexOf('/creator/') == 0) {
    res.redirect(301, 'https://creator.ionic.io/' + req.url.replace(/^\/creator\//, ''))
  } else {
    next();
  }
});

// don't index unless production
app.use(function(req, res, next) {
  if (req.hostname.indexOf('ionicframework.com') == -1) {
    res.setHeader('X-Robots-Tag:', 'noindex, nofollow');
  }
  return next();
});

function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }
  next();
};
app.set('trust proxy', true);
app.use(wwwRedirect);
app.use(compress());
app.use(function(req, res, next) {
  var staticURLS = ['/img/','/css/','/js/','/favicon.ico'];
  for (var i = 0; i < staticURLS.length; i++) {
    if (req.url.indexOf(staticURLS[i]) === 0) {
      res.setHeader('Cache-Control', 'public, max-age=345600'); // 4 days
      res.setHeader('Expires', new Date(Date.now() + 345600000).toUTCString());
    }
  }
  return next();
});

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
