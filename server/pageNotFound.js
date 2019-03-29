const url         = require('url');

send404 = res => {
    res.status(404);
    return res.render('404');

}

module.exports = {
  handleNotFound: function(req, res, next) {
    var parts = url.parse(req.url);
    let urlParts = req.path.split('/');

    // we don't need to worry about non-docs pages, just 404 it
    if (urlParts[1] === 'docs') {
      // native links might erroneosly contain capital letters
      if (req.path.includes('/native/') && /[A-Z]/.test(req.path)) {
        return res.redirect(301, req.path.toLowerCase() ) || true;

      // native links might erroneosly contain dashes
      } else if (req.path.includes('/native/') && req.path.includes('%20')) {
        return res.redirect(301, req.path.replace('%20', '-') ) || true;

        // remove erroneous double slashes 
        } else if (req.path.includes('//')) {
          return res.redirect(301, req.path.replace('//', '/') ) || true;

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

    console.error(`404 on request: path=${req.path} referer=${req.headers.referer}`);
    send404(res);
  }
}
