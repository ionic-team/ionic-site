const url         = require('url');
const fs          = require('fs');
const path        = require('path');
var v1Directories = getDirectories('_site/docs/v1');
var v3Directories = getDirectories('_site/docs/v3');

module.exports = function(req, res, next) {
  var parts = url.parse(req.url);
  let urlParts = req.path.split('/');

  // we don't need to worry about non-docs pages, just 404 it
  if (urlParts[1] === 'docs') {
    // redirect v1 docs
    if (v3Directories.indexOf(urlParts[2]) != -1) {
      return res.redirect(301, req.path.replace('/docs', '/docs/v3'));
    } else if (v1Directories.indexOf(urlParts[2]) != -1) {
      return res.redirect(301, req.path.replace('/docs', '/docs/v1'));
    } else if (urlParts[2].charAt(0) === '1') {
      // if v1 version is pruned, redirect to v1 latest
      urlParts[2] = '1.3.2';
      return res.redirect(301, urlParts.join('/'));
    } else if (urlParts[2] === 'v2') {
      // update to new v2 location
      return res.redirect(301, req.path.replace('/docs/v2', '/docs'));
    } else if (urlParts[2].charAt(0) === '2') {
      // if version is pruned, redirect to latest release
      urlParts[2] = '';
      return res.redirect(301, urlParts.join('/').replace('//', '/'));
    } else if (urlParts[2] == 'resources') {
      // resources is now developer-resources
      return res.redirect(301, 
        req.path.replace('/resources', '/developer-resources'));
    }
  }

  if(!res.locals.proxy404) {
    res.status(404);
    res.sendFile(__dirname.replace('/server', '') + '/_site/404.html');
  }
};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
  .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}
