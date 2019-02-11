const url         = require('url');
const fs          = require('fs');
const path        = require('path');
var v1Directories = getDirectories('_site/docs/v1');
var v3Directories = getDirectories('_site/docs/v3');

send404 = res => {
    res.status(404);
    return res.sendFile(__dirname.replace('/server', '') + '/_site/404.html');

}

module.exports = {
  handleNotFound: function(req, res, next) {
    var parts = url.parse(req.url);
    let urlParts = req.path.split('/');

    // we don't need to worry about non-docs pages, just 404 it
    if (urlParts[1] === 'docs') {
      // v2/v3 redirects
      if (v3Directories.indexOf(urlParts[2]) != -1) {
        return res.redirect(301, req.path.replace('/docs', '/docs/v3')) || true;

      // v1 pages
      } else if (v1Directories.indexOf(urlParts[2]) != -1) {
        return res.redirect(301, req.path.replace('/docs', '/docs/v1')) || true;

      // native links might erroneosly contain capital letters
      } else if (req.path.indexOf('/native/') && /[A-Z]/.test(req.path)) {
        return res.redirect(301, req.path.toLowerCase() ) || true;

      // native links might erroneosly contain dashes
      } else if (req.path.indexOf('/native/') && req.path.indexOf('%20')) {
        return res.redirect(301, req.path.replace('%20', '-') ) || true;

      } else if (urlParts[2].charAt(0) === '1') {
        // if v1 version is pruned, redirect to v1 latest
        urlParts[2] = '1.3.2';
        return res.redirect(301, urlParts.join('/')) || true;
      } else if (urlParts[2] === 'v2') {
        // update to new v2 location
        return res.redirect(301, req.path.replace('/docs/v2', '/docs')) || true;
      } else if (urlParts[2].charAt(0) === '2') {
        // if version is pruned, redirect to latest release
        urlParts[2] = '';
        return res.redirect(301, urlParts.join('/').replace('//', '/')) || true;
      } else if (urlParts[2] == 'resources') {
        // resources is now developer-resources
        return res.redirect(301, 
          req.path.replace('/resources', '/developer-resources')) || true;
      }
    }

    console.error(`404 on request: ${req.path}`);
    
    if(!res.locals.proxy404) { 
      send404(res);
    }
  }
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
  .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}
