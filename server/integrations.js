const Prismic              = require('prismic-javascript');
const PrismicDOM           = require('prismic-dom');
const { PRISMIC_ENDPOINT } = require('./config');

module.exports = {
  getIntegrations:  function(req, res, categoryFilter) {
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
        name: 'Testing',
        slug: 'testing'
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
  },
  getIntegration: function (req, res, uid) {
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
}
