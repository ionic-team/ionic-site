
const PrismicDOM = require('prismic-dom');

const { PRISMIC_ENDPOINT } = require('./config');

module.exports = {
  prismicMiddleware: function (req, res, next) {
    res.locals.ctx = {
      endpoint: PRISMIC_ENDPOINT,
      linkResolver: doc => {
      
        // Define the url depending on the document type
        if (doc.type === 'page') {
          return '/page/' + doc.uid;
        } else if (doc.type === 'blog_post') {
          return '/blog/' + doc.uid;
        }

        // Default to homepage
        return '/';
      },
    };
    // add PrismicDOM in locals to access them in templates.
    res.locals.PrismicDOM = PrismicDOM;
    next();
  }
}
