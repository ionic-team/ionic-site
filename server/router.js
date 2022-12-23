const express = require('express');
// const ab                   = require('express-ab');
const bp = require('body-parser');
const markdown = require('./markdown');
const es = require('express-sanitizer');

const { previewController } = require('./prismic');

const contactCtrl = require('./controllers/contactCtrl');
const getformCtrl = require('./controllers/getformCtrl');
const hsblockedCtrl = require('./controllers/hsblockedCtrl');
const hsconvertedCtrl = require('./controllers/hsconvertedCtrl');
const newsletterCtrl = require('./controllers/newsletterCtrl');
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
    .get('/contributors', (_, res) => res.render('contributors'))
    .get('/covid-19', (_, res) => markdown(res, 'corona'))
    .get('/creator', (_, res) => res.render('creator/index'))
    .get('/creator/support', (_, res) => res.render('creator/support'))
    .get('/developers', (_, res) => res.render('developers'))
    .get('/ds', (_, res) => res.render('ds'))

    .get('/early-access', (_, res) => res.render('early-access'))

    .get('/enterprise/solutions', (_, res) => res.render('enterprise/solutions/index'))
    .get('/enterprise/solutions/cross-platform', (_, res) => res.render('enterprise/solutions/cross-platform'))

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

    .get('/ioniconf-2020', (_, res) => res.render('ioniconf-2020'))
    .get('/native', (_, res) => res.render('native'))

    .get('/pro/contact', (_, res) => res.render('pro/contact'))

    .get('/react', (_, res) => res.render('react'))

    .get('/start', (_, res) => res.render('start'))
    .get('/stencil-jamstack2021', (_, res) => res.render('stencil-jamstack2021'))
    .get('/subscribe', (_, res) => res.render('subscribe'))
    .get('/survey/2017', (_, res) => res.render('survey/2017'))
    .get('/survey/2018', (_, res) => res.render('survey/2018'))
    .get('/survey/2020', (_, res) => res.render('survey/2020'))
    .get('/translate', (_, res) => res.render('translate'))

    .get('/values', (_, res) => { res.render('values'); })
    .get('/verification/failed', (_, res) => res.render('verification/failed'))
    .get('/verification/success', (_, res) => res.render('verification/success'))
    .get('/vue', (_, res) => res.render('vue'))
    .get('/angular', (_, res) => res.render('angular'))

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
