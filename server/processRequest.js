var employees       = require('./data/employees');
var resources       = require('./data/resources');
var frameworkInfo   = require('./data/framework-info');
var trustedPartners = require('./data/trusted-partners');
var followerCount   = null;
var tools           = require('./tools').getTwitterProfile().then(user => {
  followerCount = user ? user.followers_count : null
});

module.exports = {
  checkForRedirects: (req, res, next) => {
    var uri = req.url.split(/[\?|#]/g);
    var requrl = uri[0];
    if (requrl.endsWith('/')) {
      requrl = requrl.slice(0, -1);
    }
    res.locals.requrl = requrl;

    // don't index non production URLs, but favor HTTPS
    res.locals.protocol = 'https';
    if (
      req.hostname.indexOf('ionicframework.com') == -1 &&
      req.hostname.indexOf('ionic-site.herokuapp.com') == -1
    ) {
      res.setHeader('X-Robots-Tag', 'noindex, nofollow');
      res.locals.protocol = 'http';
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

    return next();
  },

  loadLocalVars: async (req, res, next) => {
    announcementBar = await req.prismic.api.getSingle('announcement_bar');
    
    // Setting default Page Vars
    res.locals = Object.assign({}, res.locals, {
      announcementBar,
      header_style: 'transparent',
      id: req.originalUrl.split('/').join('-'),
      employees: shuffle(employees),
      resources: resources,
      followerCount: followerCount,
      pre_footer: true,
      Date: Date,
      now: new Date(),
      domain: req.get('host'),
      url: req.originalUrl,
      dev: req.get('host').indexOf('localhost') === 0,
      trustedPartners: shuffle(trustedPartners),
      frameworkInfo: frameworkInfo
    });

    return next();
  }
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
