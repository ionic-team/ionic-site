(function() {
  var app = angular.module('it');

  app.filter('split', function() {
    return function(input, delimiter) {
      delimiter = delimiter || ',';
      return typeof input === 'string' ? input.split(delimiter) : input;
    };
  });

  app.filter('markdown', function(markdown) {
    return function(input) {
      if (input) {
        return markdown.toHTML(input);
      } else {
        return input;
      }
    }
  });

  app.filter('hideComments', function() {
    return function(input) {
      return input.replace(/lt;--.*?--gt;/g, '');
    }
  });
})();