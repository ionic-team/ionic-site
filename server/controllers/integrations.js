"use strict";
const Prismic              = require('prismic-javascript');
const PrismicDOM           = require('prismic-dom');
const { getAll }           = require('../prismic');
const { PRISMIC_ENDPOINT } = require('../config');

class IntegrationService {
  constructor() {
    this.lifeTime = 1000 * 60 * 15; // 15 mins in milliseconds
    this.integrations = [];
    this.lastRequest = null;
  }

  async getAllIntegrations() {
    const d = new Date();
    // if server was restarted or it's been a while, get new integrations
    if (
      this.integrations.length <= 0 ||
      this.lastRequest + this.lifeTime < d.getTime()
    ) {
      // console.log('getting new!');
      try {
        this.integrations = await getAll(
          'document.type', 'integration', '[my.integration.uid]'
        );
        this.lastRequest = d.getTime();
      } catch(e) {
        console.error(e);
      }
    }

    // either way, return what we got
    return this.integrations;
  }

  clear() {
    this.integrations = [];
  }
}

const is = new IntegrationService();

module.exports = {
  getIntegrations:  function(req, res, next, categoryFilter) {
    const categories = [
      {
        name: 'All',
        slug: 'all'
      },
      {
        name: 'Analytics',
        slug: 'analytics',
        description: 'Ionic provides integrations with your favorite app analytics solutions. View all the analytics solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Authentication',
        slug: 'authentication',
        description: 'Ionic provides integrations with authentication technology. View all the authentication solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'CMS',
        slug: 'cms',
        description: 'Ionic provides integrations for content management systems. View all the CMS\'s you can integrate into your Ionic development projects.'
      },
      {
        name: 'Databases',
        slug: 'databases',
        description: 'Ionic provides integrations with your favorite database development solutions. View all the database solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Device Plugins',
        slug: 'device-plugins',
        description: 'Ionic provides integrations with your favorite device plug ins. View all the plugins you can integrate in your Ionic development projects.'
      },
      {
        name: 'Development',
        slug: 'development',
        description: 'Ionic Integrates with your favorite development tools you know and love. View all the development platforms you can integrate in your Ionic development projects.'
      },
      {
        name: 'DevOps',
        slug: 'devops',
        description: 'Ionic provides integrations with your favorite devops solutions. View all the devops solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Hardware',
        slug: 'hardware',
        description: 'Ionic provides integrations with any mobile hardware technology you need. View all the hardware solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Messaging',
        slug: 'messaging',
        description: 'Ionic provides integrations with your favorite messing plug ins. View all the messaging solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Marketing',
        slug: 'marketing',
        description: 'Ionic provides integrations with your favorite mobile marketing solutions. View all the marketing solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Payments',
        slug: 'payments',
        description: 'Ionic provides integrations with your favorite mobile payment solutions. View all the payment solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Security',
        slug: 'security',
        description: 'Ionic provides integrations with your favorite security plug ins. View all the security solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Social',
        slug: 'social',
        description: 'Ionic provides integrations with your favorite social plug ins. View all the social plug ins you can integrate in your Ionic development projects.'
      },
      {
        name: 'Testing',
        slug: 'testing',
        description: 'Ionic provides integrations with your favorite app testing solutions. View all the app testing solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'UI',
        slug: 'ui',
        description: 'Ionic provides integrations with your favorite User Interface solutions. View all the User Interface solutions you can integrate in your Ionic development projects.'
      },
      {
        name: 'Voice',
        slug: 'voice',
        description: 'Ionic provides integrations with your favorite voice solutions. View all the voice solutions you can integrate in your Ionic development projects.'
      }
    ];

    if (req.query.clearCache === 'true') {
      is.clear();
    }

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
      is.getAllIntegrations().then(results => {

        // console.log(results)

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
            'logoUrl': o.data.logo.url,
            'showDetail': o.data['show_detail'],
            'ctaLink': o.data['cta_link'].url
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

          categoryFiltered.sort(function(a, b){
            if(a.uid < b.uid) { return -1; }
            if(a.uid > b.uid) { return 1; }
            return 0;
          })
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
        console.log(e)
        next()
      });
    });
  },
  getIntegration: function (req, res, next, uid) {
    const sender = send404;
    return new Promise((resolve, reject) => {
      Prismic.getApi(PRISMIC_ENDPOINT, {
        req: req
      })
      .then(api => api.getByUID('integration', uid))
      .then(response => {
        if ( !response ) throw('Integration not found');
        response.data.descriptionHTML = PrismicDOM.RichText.asHtml(response.data.description)
        return res.render('integrations/detail', {data: response.data})
      })
      .then(resolve)
      .catch(e => {
        console.log(e)
        next();
      });
    });
  }
}
