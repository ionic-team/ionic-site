var fs       = require('fs');
var marked = require('marked');

module.exports = function(res, filename) {

  filename += '.md';

  fs.readFile('./server/markdown/' + filename, 'utf8', function(err, data) {
    if (err) {
      res.render('_layouts/base', {
        markdown: '<h1>Unable to load ' + filename + '</h1>'
      });
      return;
    }

    res.render('_layouts/base', {markdown: marked(data)});
  });
};
