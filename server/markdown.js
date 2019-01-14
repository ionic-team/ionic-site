var fs       = require('fs');
var marked = require('marked');

module.exports = function(res, filename) {

  filename += '.md';

  return fs.readFile('./server/markdown/' + filename, 'utf8', function(err, data) {
    if (err) {
      res.status(500).render('_layouts/base', {
        markdown: '<h1>Unable to load ' + filename + '</h1>'
      });
      return;
    }

    if (res.req.url.indexOf('/press/release/') === 0) {
      res.locals.header_style = 'transparent light press-release';
      res.locals.press_breadcrumb = true;
      let title = filename.split('-');
      title.splice(0, 2);
      res.locals.title = title.join(' ').replace('.md','&hellip;');
    } 

    res.render('_layouts/base', {markdown: marked(data)});
  });
};
