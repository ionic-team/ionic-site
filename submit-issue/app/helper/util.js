angular.module('it').factory('util', (function(markdown) {

  var util = {
    getDataSnapshot: function($q, service, serviceFn, fnArgs) {
      if (!angular.isArray(fnArgs)) {
        fnArgs = [fnArgs];
      }
      var deferred = $q.defer();
      serviceFn.apply(service, fnArgs).once('value', function(snapshot) {
        deferred.resolve(snapshot.val());
      });
      return deferred.promise;
    },
    simpleCompile: function(string, obj, regex, propToPull) {
      return string.replace(regex || /{{(.*?)}}/g, function(match, propName) {
        if (obj[propName]) {
          if (propToPull) {
            return obj[propName][propToPull];
          } else {
            return obj[propName];
          }
        } else {
          return match;
        }
      });
    },
    hideCommentsAndHTMLize: function(input) {
      return util.htmlize(util.hideComments(input));
    },
    hideComments: function(input) {
      return input.replace(/<!--.*?-->/g, '');
    },
    htmlize: function(input) {
      return markdown.toHTML(input);
    }
  };
  return util;
}));