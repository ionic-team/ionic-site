const express  = require('express');
const ab       = require('express-ab');
const bp       = require('body-parser');
const markdown = require('./markdown');

const contactCtrl = require('./contactCtrl');

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
  .get('/enterprise', (req, res) => { res.render('enterprise'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/jobs', (req, res) => { res.render('jobs'); })
  .get('/press', (req, res) => { res.render('press'); })
  .get('/pricing', (req, res) => { res.render('pricing'); })
  .get('/privacy', (req, res) => { markdown(res, 'privacy-policy'); })
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/contact', (req, res) => { res.render('products/contact'); })
  .get('/products/view', (req, res) => { res.render('products/view'); })
  .get('/resources', (req, res) => { res.render('resources'); })
  .get('/sales', (req, res) => { res.render('sales'); })
  .get('/support', (req, res) => { res.render('support'); })
  .get('/survey/2017', (req, res) => { res.render('survey/2017'); })
  .get('/team', (req, res) => { res.render('team'); })
  .get('/tos', (req, res) => { markdown(res, 'tos'); })
  .get('/trusted-partners', (req, res) => { res.render('trusted-partners'); })
  .get('/values', (req, res) => { res.render('values'); })

  .post('/contact', bp.json(), contactCtrl)
};
