var express    = require('express');
var ab         = require('express-ab');

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
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/pricing', (req, res) => { res.render('products/pricing'); })
  .get('/products/view', (req, res) => { res.render('products/view'); });;
};
