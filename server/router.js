const express  = require('express');
const ab       = require('express-ab');
const bp       = require('body-parser');
const markdown = require('./markdown');

const enterpriseCtrl = require('./pages/enterprise/enterpriseCtrl');
const pricingCtrl = require('./pages/pricing/pricingCtrl');
const salesCtrl = require('./pages/sales/salesCtrl');
const trustedPartnersCtrl = require('./pages/trusted-partners/trustedPartnersCtrl');

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
  .get('/about', (req, res) => { res.render('about'); })
  .get('/contact', (req, res) => { res.render('contact'); })
  .get('/developers', (req, res) => { res.render('developers'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/jobs', (req, res) => { res.render('jobs'); })
  .get('/press', (req, res) => { res.render('press'); })
  .get('/privacy', (req, res) => { markdown(res, 'privacy-policy'); })
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/contact', (req, res) => { res.render('products/contact'); })
  .get('/products/view', (req, res) => { res.render('products/view'); })
  .get('/support', (req, res) => { res.render('support'); })
  .get('/team', (req, res) => { res.render('team'); })
  .get('/tos', (req, res) => { markdown(res, 'tos'); })
  .get('/values', (req, res) => { res.render('values'); })

  // pages with post methods
  .get('/enterprise', (req, res) => { res.render('enterprise/index'); })
  .post('/enterprise', bp.urlencoded({extended: true}), enterpriseCtrl)
  .get('/pricing', (req, res) => { res.render('pricing/index'); })
  .post('/pricing', bp.urlencoded({extended: true}), pricingCtrl)
  .get('/sales', (req, res) => { res.render('sales/index'); })
  .post('/sales', bp.urlencoded({extended: true}), salesCtrl)
  .get('/trusted-partners', (req, res) => {
    res.render('trusted-partners/index');
  })
  .post('/trusted-partners', bp.urlencoded({extended: true}),
    trustedPartnersCtrl);
};
