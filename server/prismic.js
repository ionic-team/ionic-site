const Cookies    = require('cookies');
const PrismicDOM = require('prismic-dom');
const Prismic    = require('prismic-javascript');

const { PRISMIC_ENDPOINT } = require('./config');

function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'webinar') {
    return '/resources/webinars/' + doc.uid;
  } else if (doc.type === 'case_study') {
    return '/resources/case-studies/' + doc.uid;
  } else if (doc.type === 'enterprise_blog_post') {
    return '/enterprise/blog/' + doc.uid;
}

// Default to homepage
return '/';
}

module.exports = {
  middleware: (req, res, next) => {
    res.locals.ctx = {
      endpoint: PRISMIC_ENDPOINT,
      linkResolver
    };
    // add PrismicDOM in locals to access them in templates.
    res.locals.PrismicDOM = PrismicDOM;
  
    // get Prismic API instance
    Prismic.api(PRISMIC_ENDPOINT, {
      req,
    }).then((api) => {
      req.prismic = { api };
      next();
    }).catch((error) => {
      next(error.message);
    });
  
  },
  
  previewController: (req, res) => {
    const { token } = req.query;
    if (token) {
      req.prismic.api.previewSession(token, linkResolver, '/').then((url) => {
        const cookies = new Cookies(req, res);
        cookies.set(
          Prismic.previewCookie, 
          token, 
          { maxAge: 30 * 60 * 1000, path: '/', httpOnly: false }
        );
        res.redirect(302, url);
      }).catch((err) => {
        res.status(500).send(`Error 500 in preview: ${err.message}`);
      });
    } else {
      res.send(400, 'Missing token from querystring');
    }
  },

  getPrismic: (req, res, type, uid, template) => {
    return new Promise((resolve, reject) => {
      req.prismic.api.getByUID(type, uid)
      .then(response => res.render(template, {data: response.data}))
      .then(resolve)
      .catch(e => {
        console.log(e)
        send404(res);
        reject(e);
      });
    });
  }
}

