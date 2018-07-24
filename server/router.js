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
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
  //   res.sendFile('/css/styles.min.css', {root: './_site'});
  // })
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(_, res) {
  //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
  // });

  // normal pages
  .get('/', (_, res) => { res.render('index'); })
  .get('/home', (_, res) => { res.render('index'); })
  .get('/about', (_, res) => { res.render('about'); })
  .get('/articles/pwa-architects-guide', (_, res) => { res.render('articles/pwa-architects-guide'); })
  .get('/articles/pwa-architects-guide/preview', (_, res) => { res.render('articles/pwa-architects-guide-preview'); })
  .get('/books/hybrid-vs-native', (_, res) => { res.render('books/hybrid-vs-native'); })
  .get('/books/hybrid-vs-native/preview', (_, res) => { res.render('books/hybrid-vs-native-preview'); })
  .get('/contact', (_, res) => { res.render('contact'); })
  .get('/contributors', (_, res) => { res.render('contributors'); })
  .get('/demo', (_, res) => { res.render('demo'); })
  .get('/developers', (_, res) => { res.render('developers'); })
  .get('/enterprise', (_, res) => { res.render('enterprise/index'); })
  .get('/enterprise/identity-vault', (_, res) => { res.render('enterprise/identity-vault'); })
  .get('/enterprise/support', (_, res) => { res.render('enterprise/support'); })
  .get('/enterprise/training', (_, res) => { res.render('enterprise/training'); })
  .get('/framework', (_, res) => { res.render('framework'); })
  .get('/getting-started', (_, res) => { res.render('getting-started'); })
  .get('/go/pwa-architects-guide', (_, res) => { res.render('go/pwa-architects-guide'); })
  .get('/jobs', (_, res) => { res.render('jobs'); })
  .get('/press', (_, res) => { res.render('press'); })
  .get('/pro/pricing', (_, res) => { res.render('pro/pricing/table'); })
  // .get('/pro/pricing/table', (_, res) => { res.render('pro/pricing/table'); })
  // .get('/pricing/trial', (_, res) => { res.render('pricing/trial'); })
  .get('/privacy', (_, res) => { markdown(res, 'privacy-policy'); })
  .get('/pro', (_, res) => { res.render('pro/index'); })
  .get('/pro/contact', (_, res) => { res.render('pro/contact'); })
  .get('/pro/creator', (_, res) => { res.render('pro/creator/index'); })
  .get('/pro/creator/pricing', (_, res) => { res.render('pro/creator/pricing'); })
  .get('/pro/creator/support', (_, res) => { res.render('pro/creator/support'); })
  .get('/pro/deploy', (_, res) => { res.render('pro/deploy'); })
  .get('/pro/monitor', (_, res) => { res.render('pro/monitor'); })
  .get('/pro/package', (_, res) => { res.render('pro/package'); })
  .get('/pro/teams', (_, res) => { res.render('pro/teams'); })
  .get('/pro/view', (_, res) => { res.render('pro/view'); })
  .get('/pwa', (_, res) => { res.render('pwa/index'); })
  .get('/pwa/toolkit', (_, res) => { res.render('pwa/toolkit'); })
  .get('/sales', (_, res) => { res.render('sales'); })
  .get('/startups', (_, res) => { res.render('startups'); })
  .get('/strategysession', (_, res) => { res.render('strategysession'); })
  .get('/support', (_, res) => { res.render('support'); })
  .get('/support/request', (_, res) => { res.redirect(301, 'https://ionic.zendesk.com/hc/en-us/requests/new'); })
  .get('/survey/2017', (_, res) => { res.render('survey/2017'); })
  .get('/team', (_, res) => { res.render('team'); })
  .get('/tos', (_, res) => { markdown(res, 'tos'); })
  .get('/values', (_, res) => { res.render('values'); })

  // resource center
  .get('/resources', (_, res) => { res.render('resources/index', {currentCategory: 'featured'}); })
  .get('/resources/:category', (req, res) => {
    res.render('resources/category', {currentCategory: req.params.category}); })

  // press releases
  .get('/press/release/2017/dev-survey-says-the-web-is-wining-in-mobile-dev',
    (_, res) => { markdown(res, 'pr-170725-dev-survey-says-the-web-is-wi'); })
  .get('/press/release/2017/ionic-brings-powerful-app-development-suite-to-teams-and-enterprises',
    (_, res) => { markdown(res, 'pr-171206-ionic-brings-powerful-app-dev'); })

  // pages w/ POST handlers
  .get('/trusted-partners', (_, res) => { res.render('trusted-partners'); })
  .post('/trusted-partners', bp.urlencoded({extended: true}), es(),
    trustedPartnersCtrl)

  // JSON endpoints
  .post('/contact', bp.json(), es(), contactCtrl)
  .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
  .post('/api/v1/view/link', bp.json(), es(), viewCtrl)
};
