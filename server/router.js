const express = require('express');
// const ab                   = require('express-ab');
const bp = require('body-parser');
const markdown = require('./markdown');
const es = require('express-sanitizer');

const { getPrismicAPI, getSingle, getPrismic, previewController } = require('./prismic');

const { getIntegrations, getIntegration } = require('./controllers/integrations');
const contactCtrl = require('./controllers/contactCtrl');
const hsblockedCtrl = require('./controllers/hsblockedCtrl');
const newsletterCtrl = require('./controllers/newsletterCtrl');
const trustedPartnersCtrl = require('./controllers/trustedPartnersCtrl');
const viewCtrl = require('./controllers/viewCtrl');

module.exports = {
  router: app => {

    // var abTestTest = ab.test('pricing-test', {id: 'MRClmJX_QEakg3kJs2jH9g'});

    app.options("/api/*", function(_, res){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST,OPTIONS');
      res.header('Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.removeHeader('Content-Security-Policy');
      res.removeHeader('X-Content-Security-Policy');
      res.removeHeader('X-WebKit-CSP');
      res.send(200);
    });

    return new express.Router()
    // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
    //   res.sendFile('/css/styles.min.css', {root: './_site'});
    // })
    // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
    //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
    // });

    // normal pages
    .get('/', (_, res) => res.render('index'))

    .get('/about', (_, res) => res.render('about'))
    .get('/advisory', (_, res) => res.render('products/advisory'))
    .get('/appflow', (_, res) => res.render('products/appflow'))

    .get('/books/evaluating-ionic-for-enterprise', (_, res) => res.render('books/evaluating-ionic-for-enterprise'))
    .get('/books/hybrid-v(s)?-native', (_, res) => res.render('books/hybrid-vs-native'))
    .get('/books/hybrid-vs-native/preview', (_, res) => res.render('books/hybrid-vs-native-preview'))
    .get('/books/rethinking-low-code', (_, res) => res.render('books/rethinking-low-code'))

    .get('/code-of-conduct', (_, res) => markdown(res, 'code-of-conduct'))
    .get('/community', (_, res) => res.render('community'))
    .get('/contact', (_, res) => res.render('contact'))
    .get('/contributors', (_, res) => res.render('contributors'))
    .get('/covid-19', (_, res) => markdown(res, 'corona'))
    .get('/creator', getPrismicAPI, (req, res, next) => getSingle(req, res, next, 'creator_x_promo', 'creator/index'))
    .get('/creator/pricing', (_, res) => res.render('creator/pricing'))
    .get('/creator/support', (_, res) => res.render('creator/support'))
    .get('/customers', (_, res) => res.render('enterprise/customers'))
    .get('/demo', (_, res) => res.render('demo'))
    .get('/developers', (_, res) => res.render('developers'))
    .get('/ds', (_, res) => res.render('ds'))

    .get('/enterprise', (_, res) => res.render('enterprise/index'))
    .get('/enterprise/auth-connect', (_, res) => res.render('enterprise/auth-connect'))
    .get('/enterprise/contact', (_, res) => res.render('enterprise/contact'))
    .get('/enterprise/identity-vault', (_, res) => res.render('enterprise/identity-vault'))
    .get('/enterprise/offline-storage', (_, res) => res.render('enterprise/offline-storage'))
    .get('/enterprise/platform', (_, res) => res.render('enterprise/platform'))

    .get('/enterprise/solutions', (_, res) => res.render('enterprise/solutions/index'))
    .get('/enterprise/solutions/cross-platform', (_, res) => res.render('enterprise/solutions/cross-platform'))
    .get('/enterprise/solutions/design-systems', (_, res) => res.render('enterprise/solutions/design-systems'))

    .get('/enterprise/strategy-session', (_, res) => res.render('enterprise/strategy-session'))
    .get('/enterprise/support', (_, res) => res.render('enterprise/support'))
    .get('/enterprise/training', (_, res) => res.render('enterprise/training'))
    .get('/enterprise/why-ionic', (_, res) => res.render('enterprise/why-ionic'))
    .get('/enterprise-license-agreement', (_, res) => markdown(res, 'enterprise-license-agreement'))
    .get('/framework', (_, res) => res.render('framework'))
    .get('/getting-started', (_, res) => res.render('getting-started'))

    .get('/go/pwa-architects-guide', (_, res) =>
      res.render('go/pwa-architects-guide/index'))
    .post('/go/pwa-architects-guide', (_, res) =>
      res.render('go/pwa-architects-guide/thank-you'))
    .get('/go/pwa-architects-guide/thank-you', (_, res) =>
      res.render('go/pwa-architects-guide/thank-you'))

    .get('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/index'))
    .post('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/thank-you'))
    .get('/go/why-hybrid/thank-you', (_, res) => res.render('go/why-hybrid/thank-you'))

    .get('/humans.txt', (_, res) => res.type('txt').render('humans'))

    .get('/integrations', (req, res, next) =>
      getIntegrations(req, res, next))
    .get('/integrations/category/:category', (req, res, next) =>
      getIntegrations(req, res, next, req.params.category))
    .get('/integrations/:integration', getPrismicAPI, (req, res, next) =>
      getIntegration(req, res, next, req.params.integration))

    .get('/jobs', (_, res) => res.render('jobs'))
    .get('/login', (_, res) => res.render('login'))
    .get('/logout', (_, res) => res.render('logout'))
    .get('/native', (_, res) => res.render('native'))
    .get('/press', (_, res) => res.render('press'))
    .get('/pricing', (_, res) => res.render('pricing/index'))
    .get('/pricing/compare', (_, res) => res.render('pricing/compare'))
    .get('/pricing/enterprise', (_, res) => res.render('pricing/enterprise'))
    .get('/privacy', (_, res) => markdown(res, 'privacy-policy'))

    .get('/pro/contact', (_, res) => res.render('pro/contact'))
    .get('/pro/deploy', (_, res) => res.render('pro/deploy'))
    .get('/pro/package', (_, res) => res.render('pro/package'))

    .get('/pwa', (_, res) => res.render('pwa/index'))
    .get('/pwa/toolkit', (_, res) => res.render('pwa/toolkit'))

    .get('/react', (_, res) => res.render('react'))

    .get('/resources', (_, res) =>
      res.render('resources/index', {currentCategory: 'featured'}))
    .get('/resources/:category', (req, res) =>
      res.render('resources/category', {currentCategory: req.params.category}))
    .get('/resources/articles/:article', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'article', req.params.article, 'resources/article'))
    .get('/resources/case-studies/:caseStudy', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'case_study', req.params['caseStudy'], 'resources/case-studies'))
    .get('/resources/customer-interviews/:customerInterview', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'customer_story', req.params['customerInterview'], 'resources/customer-stories'))
    .get('/resources/podcasts/:podcast', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'podcast', req.params.podcast, 'resources/podcasts'))
    .get('/resources/videos/:video', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'video', req.params.video, 'resources/videos'))
    .get('/resources/webinars/:webinar', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'webinar', req.params.webinar, 'resources/webinars'))
    .get('/resources/whitepapers/:whitepaper', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'whitepaper', req.params.whitepaper, 'resources/whitepapers'))

    .get('/sales', (_, res) => res.render('sales'))
    .get('/start', (_, res) => res.render('start'))
    .get('/startups', (_, res) => res.render('startups'))
    .get('/subscribe', (_, res) => res.render('subscribe'))
    .get('/support', (_, res) => res.render('support'))
    .get('/survey/2017', (_, res) => res.render('survey/2017'))
    .get('/survey/2018', (_, res) => res.render('survey/2018'))
    .get('/survey/2020', (_, res) => res.render('survey/2020'))
    .get('/team', (_, res) => res.render('team'))
    .get('/tos', (_, res) => markdown(res, 'tos'))
    .get('/translate', (_, res) => res.render('translate'))
    .get('/thank-you/:thankYou', getPrismicAPI, (req, res, next) =>
      getPrismic(req, res, next, 'thank_you', req.params['thankYou'], 'thank-you'))

    .get('/trusted-partners', (_, res) => res.render('trusted-partners'))
    .post('/trusted-partners',
      bp.urlencoded({extended: true}), es(), trustedPartnersCtrl)

    .get('/values', (_, res) => { res.render('values'); })
    .get('/what-is-ionic', (_, res) => res.render('what-is-ionic'))

    .get('/x', getPrismicAPI, (req, res, next) =>
      getSingle(req, res, next, 'ionic_x_preview', 'x/index'))
    .get('/x/love-letter', (_, res) => res.render('x/love-letter'))

    // press releases
    .get('/press/release/2017/dev-survey-says-the-web-is-wining-in-mobile-dev',
      (_, res) => markdown(res, 'pr-170725-dev-survey-says-the-web-is-wi'))
    .get('/press/release/2017/ionic-brings-powerful-app-development-suite-to-teams-and-enterprises',
      (_, res) => markdown(res, 'pr-171206-ionic-brings-powerful-app-dev'))
    .get('/press/release/2019/latest-version-of-ionic-provides-universal-design-system-for-enterprises',
      (_, res) => markdown(res, 'pr-1704222-latest-version-of-ionic-provides-universal-design-system-for-enterprises'))
    .get('/press/release/2019/ionic-framework-4-release',
      (_, res) => markdown(res, 'pr-ionic-framework-4-release'))
    .get('/press/release/2019/ionic-alan-announce-integration',
      (_, res) => markdown(res, 'pr-ionic-alan-announce-integration'))
    .get('/press/release/2020/ionic-achieves-record-revenue-growth-in-2019',
      (_, res) => markdown(res, 'pr-ionic-achieves-record-revenue-growth-in-2019'))
    .get('/press/release/2020/ionic-5-brings-major-design-updates',
      (_, res) => markdown(res, 'pr-ionic-5-brings-major-design-updates'))



    // JSON endpoints
    .post('/contact', bp.json(), es(), contactCtrl)
    .post('/api/v1/hsblocked', bp.json(), es(), hsblockedCtrl)
    .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
    .post('/api/v1/view/link', bp.json(), es(), viewCtrl)

    .get('/api/v1/wizard/*', (req, res) => res.redirect(`https://wizard-api.ionicframework.com${req.path}`))
    .post('/api/v1/wizard/*', (req, res) => res.redirect(307, `https://wizard-api.ionicframework.com${req.path}`))

    // Prismic Preview
    .get('/preview', previewController)

    // Well-Known URIs (RFC 8615)
    .get('/.well-known/openid-configuration', require('./well-known/openid-configuration'))
  }
};
