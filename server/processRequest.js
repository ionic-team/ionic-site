var employees       = require('./data/employees');
var resources       = require('./data/resources');
var frameworkInfo   = require('./data/framework-info');
var redirects       = require('./data/redirects');
var trustedPartners = require('./data/trusted-partners');
var url             = require('url');
var followerCount   = null;
var tools           = require('./tools').getTwitterProfile().then(user => {
  followerCount = user ? user.followers_count : null
});

module.exports = function(req, res, next) {

  // redirect www
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, 'https://' + newHost + req.originalUrl);
  }

  // redirect entire old sections
  var parts = url.parse(req.url);


  if (parts.path.indexOf('/blog') == 0) {
    return res.redirect(301, 'https://blog.ionicframework.com' + req.url.replace(/^\/blog/, ''));
  } else if (
    req.headers.host.indexOf('pwasftw.com') !== -1 ||
    (req.headers.referer && req.headers.referer.indexOf('pwasftw.com') !== -1)
  ) {
    return res.redirect(301, 'https://ionicframework.com/pwa');
  } else if (parts.path.indexOf('/creator/') == 0) {
    return res.redirect(301, '/pro/creator' + req.url.replace(/^\/creator\//, ''));
  } else if (parts.path.indexOf('/products') == 0) {
    return res.redirect(301, '/pro' + req.url.replace(/^\/products/, ''));
  } else if (parts.path.indexOf('/img/products') == 0) {
    return res.redirect(301, '/img/pro' + req.url.replace(/^\/img\/pro/, ''));
  } else if (parts.path.indexOf('/tutorials') == 0) {
    return res.redirect(301, '/getting-started');
  } else if (parts.path.indexOf('/docs/v1/cli') == 0) {
    return res.redirect(301, '/docs/cli/');
  // } else if (parts.path.indexOf('/docs/pro') == 0) {
  //   return res.redirect(301, 'http://support.ionicjs.com');
  } else if (req.headers.host.indexOf('learn.') == 0) {
    return res.redirect(301, '/docs/');
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

  // don't index non production URLs, but favor HTTPS
  var protocol = 'https';
  if (req.hostname.indexOf('ionicframework.com') == -1) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    protocol = 'http';
  } else {
   // require https in prod
    let csp = 'default-src https: data: blob: \'unsafe-eval\' \'unsafe-inline\'; ';
    csp += 'frame-src \'self\' https://*;';
    res.setHeader('Content-Security-Policy', csp);
    res.setHeader('X-Content-Security-Policy', csp);
    res.setHeader('X-WebKit-CSP', csp);
  }

  // cache static files
  var staticURLS = ['/img/','/fonts/','/favicon.ico'];
  for (var i = 0; i <= staticURLS.length; i++) {
    if (req.url.indexOf(staticURLS[i]) === 0) {
      res.setHeader('Cache-Control', 'public, max-age=315360000000');
      res.setHeader('Expires', new Date(Date.now() + 315360000000).toUTCString());
      break;
    }
  }

  // Setting default Page Vars
  res.locals = Object.assign({}, res.locals, {
    header_style: 'transparent',
    id: req.originalUrl.split('/').join('-'),
    employees: shuffle(employees),
    resources: resources,
    followerCount: followerCount,
    pre_footer: true,
    protocol: protocol,
    domain: req.get('host'),
    url: req.originalUrl,
    dev: req.get('host').indexOf('localhost') === 0,
    trustedPartners: shuffle(trustedPartners),
    frameworkInfo: frameworkInfo
  });

  return next();
};

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
