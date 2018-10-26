
const PrismicDOM = require('prismic-dom');

const { PRISMIC_ENDPOINT } = require('./config');

module.exports = function (req, res, next) {
  res.locals.ctx = {
    endpoint: PRISMIC_ENDPOINT,
    linkResolver: doc => {
    
      // Define the url depending on the document type
      if (doc.type === 'webinar') {
        return '/resources/webinars/' + doc.uid;
      } else if (doc.type === 'enterprise_blog_post') {
        return '/enterprise/blog/' + doc.uid;
      }

      // Default to homepage
      return '/';
    },
  };
  // add PrismicDOM in locals to access them in templates.
  res.locals.PrismicDOM = PrismicDOM;
  next();

}
