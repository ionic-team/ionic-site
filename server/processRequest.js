var redirects = require('./redirects');
var url       = require('url');

module.exports = function(req, res, next) {

  // redirect www
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }

  // redirect entire old sections
  var parts = url.parse(req.url);

  if (parts.path.indexOf('/blog/') == 0) {
    return res.redirect(301, 'http://blog.ionic.io/' + req.url.replace(/^\/blog\//, ''));
  } else if (parts.path.indexOf('/creator/') == 0) {
    return res.redirect(301, 'https://creator.ionic.io/' + req.url.replace(/^\/creator\//, ''));
  } else if (parts.path.indexOf('/tutorials') == 0) {
    return res.redirect(301, 'http://ionicframework.com/getting-started');
  } else if (parts.path.indexOf('/jobs') == 0) {
    return res.redirect(301, 'http://ionic.io/jobs');
  } else if (req.headers.host.indexOf('learn.') == 0) {
    return res.redirect(301, 'http://ionicframework.com/docs/');
  }

  // handle redirects
  var uri = req.url.split(/[\?|#]/g);
  var requrl = uri[0];
  if (requrl.endsWith('/')) {
    requrl = requrl.slice(0, -1);
  }

  if (redirects[requrl]) {
    if (uri[1]) {
      return res.redirect(301, redirects[requrl] + '?' + uri[1]);
    }
    return res.redirect(301, redirects[requrl]);
  }

  // don't index non production URLs
  if (req.hostname.indexOf('ionicframework.com') == -1) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  }

  // cache static files
  var staticURLS = ['/img/','/css/','/js/','/fonts/','/favicon.ico'];
  for (var i = 0; i < staticURLS.length; i++) {
    if (req.url.indexOf(staticURLS[i]) === 0) {
      res.setHeader('Cache-Control', 'public, max-age=315360000000');
      res.setHeader('Expires', new Date(Date.now() + 315360000000).toUTCString());
    }
  }

  return next();
}
