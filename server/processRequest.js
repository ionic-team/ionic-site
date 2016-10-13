var redirects = require('./redirects');

module.exports = function(req, res, next) {

  // redirect www
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
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
      res.setHeader('Cache-Control', 'public, max-age=345600'); // 4 days
      res.setHeader('Expires', new Date(Date.now() + 345600000).toUTCString());
    }
  }

  return next();
}
