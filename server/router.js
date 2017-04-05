const express    = require('express');
const ab         = require('express-ab');
const bodyParser = require('body-parser');


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

  .get('/', (req, res) => { res.render('index'); })
  .get('/developers', (req, res) => { res.render('developers'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/pricing', (req, res) => { res.render('products/pricing'); })
  .get('/products/contact', (req, res) => { res.render('products/contact'); })
  .get('/products/view', (req, res) => { res.render('products/view'); })
  .get('/support', (req, res) => { res.render('support'); })

  .get('/trusted-partners', (req, res) => {
    res.render('trusted-partners/index');
  })
  .post('/trusted-partners', bodyParser.urlencoded({extended: true}),
    trustedPartnersCtrl);
};
