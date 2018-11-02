const express              = require('express');
const ab                   = require('express-ab');
const bp                   = require('body-parser');
const { PRISMIC_ENDPOINT } = require('./config');
const markdown             = require('./markdown');
const es                   = require('express-sanitizer');
const { join }             = require('path');
const Prismic              = require('prismic-javascript');
const PrismicDOM           = require('prismic-dom');

const trustedPartnersCtrl = require('./controllers/trustedPartnersCtrl');
const contactCtrl = require('./controllers/contactCtrl');
const newsletterCtrl    = require('./controllers/newsletterCtrl');
const viewCtrl    = require('./controllers/viewCtrl');
// const integrations = require('./data/integrations');

function send404(res) {
  res.status(404).sendFile(join(__dirname, '/../_site/404.html'))
}

function getPrismic (req, res, type, uid, template) {
  return new Promise((resolve, reject) => {
    Prismic.getApi(PRISMIC_ENDPOINT, {
      req: req
    })
    .then(api => api.getByUID(type, uid))
    .then(response =>
      res.render(template, {data: response.data}))
    .then(resolve)
    .catch(e => {
      send404(res);
      reject(e);
    });
  });
}

function handleIntegrationsRequest(req, res, categoryFilter){
  const categories = [
    {
      name: 'All',
      slug: 'all'
    },
    {
      name: 'Analytics',
      slug: 'analytics'
    },
    {
      name: 'Authentication',
      slug: 'authentication'
    },
    {
      name: 'Databases',
      slug: 'databases'
    },
    {
      name: 'Device Plugins',
      slug: 'device-plugins'
    },
    {
      name: 'Development',
      slug: 'development'
    },
    {
      name: 'DevOps',
      slug: 'devops'
    },
    {
      name: 'Hardware',
      slug: 'hardware'
    },
    {
      name: 'Messaging',
      slug: 'messaging'
    },
    {
      name: 'Marketing',
      slug: 'marketing'
    },
    {
      name: 'Payments',
      slug: 'payments'
    },
    {
      name: 'Security',
      slug: 'security'
    },
    {
      name: 'Social',
      slug: 'social'
    },
    {
      name: 'UI',
      slug: 'ui'
    }
  ];

  function getIntegrationsInCategory (categorySlug, results) {
    const category = categories.find(o => o.slug === categorySlug);
    if (!category) return;
    const prettyName = category.name;
    return [].concat(
      results.filter(o => o.data['category-primary'] === prettyName),
      results.filter(o => o.data['category-secondary'] === prettyName),
      results.filter(o => o.data['category-tertiary'] === prettyName)
    );
  }

  return new Promise((resolve, reject) => {
    Prismic.getApi(PRISMIC_ENDPOINT, {
      req: req
    })
    .then(api => {
      return api.query([
        Prismic.Predicates.at('document.type', 'integration')
      ])
    })
    .then(response => {
      const results = response.results;

      // used to send down a full list of the integrations with abbreviated schema for client side search & filtering
      const data = results.map(o => {
        return {
          'uid': o.uid,
          'name': o.data.name,
          'premier': o.data.premier,
          'free': o.data.free,
          'featured-hero': o.data['featured-hero'],
          'featured-category': o.data['featured-category'],
          'category-primary': o.data['category-primary'],
          'category-secondary': o.data['category-secondary'],
          'category-tertiary': o.data['category-tertiary'],
          'logoUrl': o.data.logo.url
        }
      })

      // used for the 3 featured cards in the hero
      const heroFeatured = results.filter(o => o.data['featured-hero'] === 'Yes');

      // used to show list of categories with 4 featured cards when categoy filter is set to "All"
      let categoryFeatured = [];
      categories.map(category => {
        if (category.name === "All") return;

        // get integrations that are set to be featured in this category on the integrations page
        let featuredInCategory = [].concat(
          results.filter(o => o.data['featured-category'] === category.name)
        );

        // if there aren't enough, grab the next non-featured integrations so there arent empty spots on the integrations page
        if (featuredInCategory.length < 4){
          const restInCategory = getIntegrationsInCategory(category.slug, results).filter(o => o.data['featured-category'] !== category.name);
          featuredInCategory = featuredInCategory.concat(restInCategory.slice(0, (4 - featuredInCategory.length)));
        }

        categoryFeatured.push({
          category: category,
          integrations: featuredInCategory
        });
      });

      // used to show a list of all integrations in category when a category filter is selected
      const filter = categoryFilter ? categoryFilter : 'all'
      let categoryFiltered = [];
      if (categoryFilter) {
        categoryFiltered = getIntegrationsInCategory(categoryFilter, results);
      }

      res.render('integrations/index', {
        data: data,
        filters: categories,
        heroFeatured: heroFeatured,
        categoryFeatured: categoryFeatured,
        hasCategoryFilter: categoryFilter ? true : false,
        categoryFilter: categories.find(o => o.slug === filter),
        categoryFiltered: categoryFiltered
      })
    })
    .then(resolve)
    .catch(e => {
      send404(res);
      reject(e);
    });
  });
}

function handleIntegrationRequest (req, res, uid) {
  return new Promise((resolve, reject) => {
    Prismic.getApi(PRISMIC_ENDPOINT, {
      req: req
    })
    .then(api => api.getByUID('integration', uid))
    .then(response => {
      response.data.descriptionHTML = PrismicDOM.RichText.asHtml(response.data.description)
      return res.render('integrations/detail', {data: response.data})
    })
    .then(resolve)
    .catch(e => {
      send404(res);
      reject(e);
    });
  });
}

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
  .get('/', (_, res) => res.render('index'))
  .get('/home', (_, res) => res.render('index'))
  .get('/about', (_, res) => res.render('about'))

  .get('/articles/pwa-architects-guide', (_, res) =>
    res.render('articles/pwa-architects-guide'))
  .get('/articles/pwa-architects-guide/preview', (_, res) =>
    res.render('articles/pwa-architects-guide-preview'))

  .get('/articles/why-hybrid', (_, res) => res.render('articles/why-hybrid'))

  .get('/books/hybrid-vs-native', (_, res) =>
    res.render('books/hybrid-vs-native'))
  .get('/books/hybrid-vs-native/preview', (_, res) =>
    res.render('books/hybrid-vs-native-preview'))

  .get('/community', (_, res) => res.render('community'))
  .get('/contact', (_, res) => res.render('contact'))
  .get('/contributors', (_, res) => res.render('contributors'))
  .get('/demo', (_, res) => res.render('demo'))
  .get('/developers', (_, res) => res.render('developers'))
  .get('/enterprise', (_, res) => res.render('enterprise/index'))
  .get('/enterprise/identity-vault', (_, res) =>
    res.render('enterprise/identity-vault'))
  .get('/enterprise/support', (_, res) => res.render('enterprise/support'))
  .get('/enterprise/training', (_, res) => res.render('enterprise/training'))
  .get('/framework', (_, res) => res.render('framework'))
  .get('/getting-started', (_, res) => res.render('getting-started'))

  .get('/go/pwa-architects-guide', (_, res) =>
    res.render('go/pwa-architects-guide/index'))
  .post('/go/pwa-architects-guide', (_, res) =>
    res.render('go/pwa-architects-guide/thank-you'))
  .get('/go/pwa-architects-guide/thank-you', (_, res) =>
    res.render('go/pwa-architects-guide/thank-you'))

  .get('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/index'))
  .post('/go/why-hybrid', (_, res) => res.render('go/why-hybrid/thank-you'))
  .get('/go/why-hybrid/thank-you', (_, res) =>
    res.render('go/why-hybrid/thank-you'))

  .get('/integrations', (req, res) =>
    handleIntegrationsRequest(req, res))
  .get('/integrations/category/:category', (req, res) =>
    handleIntegrationsRequest(req, res, req.params.category))
  .get('/integrations/:integration', (req, res) =>
    handleIntegrationRequest(req, res, req.params.integration))

  .get('/jobs', (_, res) => res.render('jobs'))
  .get('/press', (_, res) => res.render('press'))
  .get('/pro/pricing', (_, res) => res.render('pro/pricing'))
  // .get('/pro/pricing/table', (_, res) => { res.render('pro/pricing/table'); })
  // .get('/pricing/trial', (_, res) => { res.render('pricing/trial'); })
  .get('/privacy', (_, res) => markdown(res, 'privacy-policy'))
  .get('/pro', (_, res) => res.render('pro/index'))
  .get('/pro/contact', (_, res) => res.render('pro/contact'))
  .get('/pro/creator', (_, res) => res.render('pro/creator/index'))
  .get('/pro/creator/pricing', (_, res) => res.render('pro/creator/pricing'))
  .get('/pro/creator/support', (_, res) => res.render('pro/creator/support'))
  .get('/pro/deploy', (_, res) => res.render('pro/deploy'))
  .get('/pro/monitor', (_, res) => res.render('pro/monitor'))
  .get('/pro/package', (_, res) => res.render('pro/package'))
  .get('/pro/teams', (_, res) => res.render('pro/teams'))
  .get('/pwa', (_, res) => res.render('pwa/index'))
  .get('/pwa/toolkit', (_, res) => res.render('pwa/toolkit'))

  .get('/resources', (_, res) =>
    res.render('resources/index', {currentCategory: 'featured'}))
  .get('/resources/:category', (req, res) =>
    res.render('resources/category', {currentCategory: req.params.category}))
<<<<<<< HEAD
  .get('/resources/webinars/:webinar', (req, res) =>
=======
  .get('/resources/case-studies/:caseStudy', (req, res) =>
    getPrismic(req, res, 'case_study', req.params['caseStudy'],
      'resources/case-studies'))
  .get('/resources/webinars/:webinar', (req, res) =>
>>>>>>> master
    getPrismic(req, res, 'webinar', req.params.webinar, 'resources/webinars'))

  .get('/sales', (_, res) => res.render('sales'))
  .get('/startups', (_, res) => res.render('startups'))
  .get('/strategysession', (_, res) => res.render('strategysession'))
  .get('/support', (_, res) => res.render('support'))
  .get('/survey/2017', (_, res) => res.render('survey/2017'))
  .get('/team', (_, res) => res.render('team'))
  .get('/tos', (_, res) => markdown(res, 'tos'))

  .get('/trusted-partners', (_, res) => res.render('trusted-partners'))
  .post('/trusted-partners',
    bp.urlencoded({extended: true}), es(), trustedPartnersCtrl)

  .get('/values', (_, res) => { res.render('values'); })
  .get('/what-is-ionic', (_, res) => res.render('what-is-ionic'))


  // press releases
  .get('/press/release/2017/dev-survey-says-the-web-is-wining-in-mobile-dev',
    (_, res) => markdown(res, 'pr-170725-dev-survey-says-the-web-is-wi'))
  .get('/press/release/2017/ionic-brings-powerful-app-development-suite-to-teams-and-enterprises',
    (_, res) => markdown(res, 'pr-171206-ionic-brings-powerful-app-dev'))

  // JSON endpoints
  .post('/contact', bp.json(), es(), contactCtrl)
  .post('/api/v1/newsletter', bp.json(), es(), newsletterCtrl)
  .post('/api/v1/view/link', bp.json(), es(), viewCtrl)

  // Prismic Preview
  .get('/preview', previewController)
};
