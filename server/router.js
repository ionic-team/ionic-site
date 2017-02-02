var express    = require('express');
var ab         = require('express-ab');

module.exports = function router(app) {

  var abTestTest = ab.test('pricing-test', {id: 'u8whhVtTT3G5S3S7MZkoOA'});

  return new express.Router()
  .get('/css/styles.min.css', abTestTest(null, 0.95), function(req, res) {
    res.sendFile('/css/styles.min.css', {root: './_site'});
  })
  .get('/css/styles.min.css', abTestTest(null, 0.05), function(req, res) {
    res.sendFile('/css/styles.test.min.css', {root: './_site'});
  });

};
