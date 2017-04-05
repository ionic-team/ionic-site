const express    = require('express');
const ab         = require('express-ab');
const bp         = require('body-parser');

const trustedPartnersCtrl = require('./pages/trusted-partners/trustedPartnersCtrl');
const pricingCtrl = require('./pages/pricing/pricingCtrl');

module.exports = function router(app) {

  var abTestTest = ab.test('pricing-test', {id: 'MRClmJX_QEakg3kJs2jH9g'});

  return new express.Router()
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.min.css', {root: './_site'});
  // })
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
  // });

  .get('/', (req, res) => { res.render('index'); })
  .get('/about', (req, res) => { res.render('about'); })
  .get('/contact', (req, res) => { res.render('contact'); })
  .get('/developers', (req, res) => { res.render('developers'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/jobs', (req, res) => { res.render('jobs'); })
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/pricing', (req, res) => { res.render('products/pricing'); })
  .get('/products/contact', (req, res) => { res.render('products/contact'); })
  .get('/products/view', (req, res) => { res.render('products/view'); })
  .get('/support', (req, res) => { res.render('support'); })
  .get('/team', (req, res) => { res.render('team'); })
  .get('/values', (req, res) => { res.render('values'); })

  .get('/pricing', (req, res) => { res.render('pricing/index'); })
  .post('/pricing', bp.urlencoded({extended: true}), pricingCtrl)

  .get('/trusted-partners', (req, res) => {
    res.render('trusted-partners/index');
  })
  .post('/trusted-partners', bp.urlencoded({extended: true}),
    trustedPartnersCtrl);
};
