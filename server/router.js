var express    = require('express');
var ab         = require('express-ab')({ cookie: false });

module.exports = function router(app) {

  var abTestTest = ab.test('test-test', { id: 'qb8xNMK3RaCyLdJDq2V0tw' });

  return new express.Router()
  .get('/', abTestTest(null, 0.95), function(req, res) {
    res.sendFile('index.html',{root:'./_site'});
  })
  .get('/', abTestTest(null, 0.05), function(req, res) {
    res.sendFile('index-a.html',{root:'./_site'});
  });

};
