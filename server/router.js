const express = require('express');
// const ab                   = require('express-ab');
const bp = require('body-parser');
const markdown = require('./markdown');
const es = require('express-sanitizer');

const { getPrismicAPI, getSingle, getPrismic, previewController } = require('./prismic');

const { getIntegrations, getIntegration } = require('./controllers/integrations');
const contactCtrl = require('./controllers/contactCtrl');
const getformCtrl = require('./controllers/getformCtrl');
const hsblockedCtrl = require('./controllers/hsblockedCtrl');
const hsconvertedCtrl = require('./controllers/hsconvertedCtrl');
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

    .get('/about', (_, res) => res.redirect('https://ionic.io/about'))
    .get('/advisory', (_, res) => res.render('products/advisory'))
    .get('/appflow', (_, res) => res.render('products/appflow'))

    .get('/books/evaluating-ionic-for-enterprise', (_, res) => res.redirect('https://go.ionicframework.com/enterprise-eval-guide'))
    .get('/books/hybrid-v(s)?-native', (_, res) => res.redirect('https://go.ionicframework.com/hybrid-vs-native-guide'))
    .get('/books/hybrid-vs-native/preview', (_, res) => res.redirect('https://go.ionicframework.com/hybrid-vs-native-guide'))
    .get('/books/rethinking-low-code', (_, res) => res.redirect('https://ionic.io'))

    .get('/code-of-conduct', (_, res) => res.redirect('https://ionic.io/code-of-conduct'))
    .get('/community', (_, res) => res.redirect('https://ionic.io/community'))
    .get('/contact', (_, res) => res.render('contact'))
    .get('/contributors', (_, res) => res.render('contributors'))
    .get('/covid-19', (_, res) => markdown(res, 'corona'))
    .get('/creator', (_, res) => res.render('creator/index'))
    .get('/creator/support', (_, res) => res.render('creator/support'))
    .get('/customers', (_, res) => res.redirect('https://ionic.io/customers'))
    .get('/demo', (_, res) => res.redirect('https://ionic.io/demo'))
    .get('/developers', (_, res) => res.render('developers'))
    .get('/ds', (_, res) => res.render('ds'))

    .get('/early-access', (_, res) => res.render('early-access'))
    .get('/enterprise', (_, res) => res.redirect('https://ionic.io/enterprise'))
    .get('/enterprise/auth-connect', (_, res) => res.redirect('https://ionic.io/products/auth-connect'))
    .get('/enterprise/contact', (_, res) => res.redirect('https://ionic.io/contact/sales'))
    .get('/enterprise/identity-vault', (_, res) => res.redirect('https://ionic.io/products/identity-vault'))
    .get('/enterprise/offline-storage', (_, res) => res.redirect('https://ionic.io/products/offline-storage'))
    .get('/enterprise/platform', (_, res) => res.render('enterprise/platform'))

    .get('/enterprise/solutions', (_, res) => res.render('enterprise/solutions/index'))
    .get('/enterprise/solutions/cross-platform', (_, res) => res.render('enterprise/solutions/cross-platform'))

    .get('/enterprise/support', (_, res) => res.redirect('https://ionic.io/enterprise/support'))
    .get('/enterprise/training', (_, res) => res.redirect('https://ionic.io/enterprise/training'))
    .get('/enterprise/why-ionic', (_, res) => res.redirect('https://ionic.io/why-ionic'))
    .get('/enterprise-license-agreement', (_, res) => res.redirect('https://ionic.io/enterprise-license-agreement'))
    .get('/framework', (_, res) => res.render('framework'))
    .get('/getting-started', (_, res) => res.render('getting-started'))
    .get('/getting-started-with-ionic-vue', (_, res) => res.render('getting-started-with-ionic-vue'))

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
      res.redirect('https://ionic.io/integrations'))
    .get('/integrations/category/:category', (req, res, next) =>
      res.redirect('https://ionic.io/integrations?filter=' + req.params.category))
    .get('/integrations/:integration', (req, res, next) =>
      res.redirect('https://ionic.io/integrations/' + req.params.integration))

    .get('/ioniconf-2020', (_, res) => res.render('ioniconf-2020'))
    .get('/jobs', (_, res) => res.render('jobs'))
    .get('/login', (_, res) => res.render('login'))
    .get('/logout', (_, res) => res.render('logout'))
    .get('/native', (_, res) => res.render('native'))
    .get('/press', (_, res) => res.redirect('https://ionic.io/about/press'))
    .get('/pricing', (_, res) => res.redirect('https://ionic.io/pricing'))
    .get('/pricing/compare', (_, res) => res.redirect('https://ionic.io/appflow/pricing'))
    .get('/pricing/enterprise', (_, res) => res.redirect('https://ionic.io/pricing'))
    .get('/privacy', (_, res) => res.redirect('https://ionic.io/privacy'))

    .get('/pro/contact', (_, res) => res.render('pro/contact'))
    .get('/pro/deploy', (_, res) => res.render('pro/deploy'))
    .get('/pro/package', (_, res) => res.render('pro/package'))

    .get('/pwa', (_, res) => res.redirect('https://ionic.io/pwa'))
    .get('/pwa/toolkit', (_, res) => res.redirect('https://ionicframework.com/pwa'))

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
    .get('/signup', (_, res) => res.render('signup'))
    .get('/soon', (_, res) => res.redirect('https://ionicframework.com/ioniconf'))
    .get('/start', (_, res) => res.render('start'))
    .get('/startups', (_, res) => res.redirect('https://ionic.io/startups'))
    .get('/stencil-jamstack2021', (_, res) => res.render('stencil-jamstack2021'))
    .get('/subscribe', (_, res) => res.render('subscribe'))
    .get('/support', (_, res) => res.redirect('https://ionic.io/support'))
    .get('/survey/2017', (_, res) => res.render('survey/2017'))
    .get('/survey/2018', (_, res) => res.render('survey/2018'))
    .get('/survey/2020', (_, res) => res.render('survey/2020'))
    .get('/team', (_, res) => res.redirect('https://ionic.io/about'))
    .get('/tos', (_, res) => res.redirect('https://ionic.io/tos'))
    .get('/translate', (_, res) => res.render('translate'))
    .get('/thank-you/:slug', (req, res) => res.redirect(`https://ionic.io/thank-you/${req.params['slug']}`))

    .get('/trusted-partners', (_, res) => res.render('trusted-partners'))
    .get('/values', (_, res) => { res.render('values'); })
    .get('/verification/failed', (_, res) => res.render('verification/failed'))
    .get('/verification/success', (_, res) => res.render('verification/success'))
    .get('/vue', (_, res) => res.render('vue'))
    .get('/angular', (_, res) => res.render('angular'))
    .get('/what-is-ionic', (_, res) => res.redirect('https://ionic.io/resources/articles/what-is-ionic'))

    .get('/press/release/:year/:uid', (req, res, next) =>
      res.redirect('https://ionic.io/about/press/release/' + req.params.uid))

    // JSON endpoints
    .post('/contact', bp.json(), es(), contactCtrl)
    .get('/api/v1/getform/:formId', bp.json(), es(), getformCtrl)
    .post('/api/v1/hsblocked', bp.json(), es(), hsblockedCtrl)
    .get('/api/v1/hsconverted/:listId/:hsutk?', bp.json(), es(), hsconvertedCtrl)
    .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
    .post('/api/v1/view/link', bp.json(), es(), viewCtrl)

    // Prismic Preview
    .get('/preview', previewController)

    // Well-Known URIs (RFC 8615)
    .get('/.well-known/openid-configuration', require('./well-known/openid-configuration'))
  }
};
