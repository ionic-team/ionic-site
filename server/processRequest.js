var parseUrl        = require('parseurl');
var config          = require('./config');

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

    ['.js', '.woff', '.woff2', '.svg', '/api/'].forEach(str => {
      if (req.url.indexOf(str) !== -1) {
        res.setHeader('Access-Control-Allow-Origin', '*')
      }
    });

    // cache static files
    var staticURLS = ['/img/','/fonts/','/favicon.ico'];
    for (var i = 0; i <= staticURLS.length; i++) {
      if (req.url.indexOf(staticURLS[i]) === 0) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
        break;
      }
    }

    return next();
  },

  loadLocalVars: async (req, res, next) => {
    // Setting default Page Vars
    res.locals = Object.assign({}, res.locals, {
      API_URL: config.API_URL,
      DASHBOARD_URL: config.DASHBOARD_URL,
      header_style: 'transparent',
      id: req.originalUrl.split('/').join('-'),
      pre_footer: true,
      Date: Date,
      now: new Date(),
      domain: req.get('host'),
      url: req.originalUrl,
      query: req.query,
      search: parseUrl(req).search,
      dev: req.get('host').indexOf('localhost') === 0
    });


    const linkParams = ';rel=preload;as=font;type=font/woff2;crossorigin=anonymous';
    let linkStr = `<https://ionicframework.com/fonts/eina/eina-01-regular.woff2>${linkParams}`;
    linkStr += `,<https://ionicframework.com/fonts/inter/Inter-variable-ASCII-subset.woff2>${linkParams}`;
    linkStr += `,<https://ionicframework.com/fonts/eina/eina-01-semibold.woff2>${linkParams}`;
    linkStr += `,<https://ionicframework.com/fonts/eina/eina-01-bold.woff2>${linkParams}`;
    linkStr += `,<https://ionicframework.com/fonts/ionicons.woff2?v=3.0.0-alpha.3>${linkParams}`;

    res.setHeader('Link', linkStr);

    return next();
  }
};
