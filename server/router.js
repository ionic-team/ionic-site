const express  = require('express');
const ab       = require('express-ab');
const bp       = require('body-parser');
const markdown = require('./markdown');
const es       = require('express-sanitizer');

const trustedPartnersCtrl = require('./controllers/trustedPartnersCtrl');
const contactCtrl = require('./controllers/contactCtrl');
const newsletterCtrl    = require('./controllers/newsletterCtrl');
const viewCtrl    = require('./controllers/viewCtrl');

module.exports = function router(app) {

  var abTestTest = ab.test('pricing-test', {id: 'MRClmJX_QEakg3kJs2jH9g'});

  return new express.Router()
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.min.css', {root: './_site'});
  // })
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
  // });

  // normal pages
  .get('/', (req, res) => { res.render('index'); })
  .get('/home', (req, res) => { res.render('index'); })
  .get('/about', (req, res) => { res.render('about'); })
  .get('/articles/pwa-architects-guide', (req, res) => { res.render('articles/pwa-architects-guide'); })
  .get('/articles/pwa-architects-guide/preview', (req, res) => { res.render('articles/pwa-architects-guide-preview'); })
  .get('/books/hybrid-vs-native', (req, res) => { res.render('books/hybrid-vs-native'); })
  .get('/books/hybrid-vs-native/preview', (req, res) => { res.render('books/hybrid-vs-native-preview'); })
  .get('/contact', (req, res) => { res.render('contact'); })
  .get('/contributors', (req, res) => { res.render('contributors'); })
  .get('/demo', (req, res) => { res.render('demo'); })
  .get('/developers', (req, res) => { res.render('developers'); })
  .get('/enterprise', (req, res) => { res.render('enterprise/index'); })
  .get('/enterprise/support', (req, res) => { res.render('enterprise/support'); })
  .get('/enterprise/training', (req, res) => { res.render('enterprise/training'); })
  .get('/framework', (req, res) => { res.render('framework'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/jobs', (req, res) => { res.render('jobs'); })
  .get('/press', (req, res) => { res.render('press'); })
  .get('/pro/pricing', (req, res) => { res.render('pro/pricing/table'); })
  // .get('/pro/pricing/table', (req, res) => { res.render('pro/pricing/table'); })
  // .get('/pricing/trial', (req, res) => { res.render('pricing/trial'); })
  .get('/privacy', (req, res) => { markdown(res, 'privacy-policy'); })
  .get('/pro', (req, res) => { res.render('pro/index'); })
  .get('/pro/contact', (req, res) => { res.render('pro/contact'); })
  .get('/pro/creator', (req, res) => { res.render('pro/creator/index'); })
  .get('/pro/creator/pricing', (req, res) => { res.render('pro/creator/pricing'); })
  .get('/pro/creator/support', (req, res) => { res.render('pro/creator/support'); })
  .get('/pro/deploy', (req, res) => { res.render('pro/deploy'); })
  .get('/pro/monitor', (req, res) => { res.render('pro/monitor'); })
  .get('/pro/package', (req, res) => { res.render('pro/package'); })
  .get('/pro/teams', (req, res) => { res.render('pro/teams'); })
  .get('/pro/view', (req, res) => { res.render('pro/view'); })
  .get('/pwa', (req, res) => { res.render('pwa'); })
  .get('/sales', (req, res) => { res.render('sales'); })
  .get('/startups', (req, res) => { res.render('startups'); })
  .get('/strategysession', (req, res) => { res.render('strategysession'); })
  .get('/support', (req, res) => { res.render('support'); })
  .get('/support/request', (req, res) => { res.redirect(301, 'https://ionic.zendesk.com/hc/en-us/requests/new'); })
  .get('/survey/2017', (req, res) => { res.render('survey/2017'); })
  .get('/team', (req, res) => { res.render('team'); })
  .get('/tos', (req, res) => { markdown(res, 'tos'); })
  .get('/values', (req, res) => { res.render('values'); })

  // resource center
  .get('/resources', (req, res) => { res.render('resources/index', {currentCategory: 'featured'}); })
  .get('/resources/:category', (req, res) => { res.render('resources/category', {currentCategory: req.params.category}); })

  // press releases
  .get('/press/release/2017/dev-survey-says-the-web-is-wining-in-mobile-dev',
    (req, res) => { markdown(res, 'pr-170725-dev-survey-says-the-web-is-wi'); })
  .get('/press/release/2017/ionic-brings-powerful-app-development-suite-to-teams-and-enterprises',
    (req, res) => { markdown(res, 'pr-171206-ionic-brings-powerful-app-dev'); })


  // pages w/ POST handlers
  .get('/trusted-partners', (req, res) => { res.render('trusted-partners'); })
  .post('/trusted-partners', bp.urlencoded({extended: true}), es(),
    trustedPartnersCtrl)

  // JSON endpoints
  .post('/contact', bp.json(), es(), contactCtrl)
  .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
  .post('/api/v1/view/link', bp.json(), es(), viewCtrl)
};
