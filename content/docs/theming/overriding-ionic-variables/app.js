$(document).ready(function() {
  var debounce = function (fn) {
    var timeout;
    return function () {
      var args = Array.prototype.slice.call(arguments),
          ctx = this;

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, 50);
    }
  }

  // Controls the search of Sass Variables
  var searchSassInput = $('#search-sass-input');

  var searchSassResults = $('#search-sass-results');

  var commonWordEquivalents = {
    'bg': 'background',
    'colour': 'color'
  };

  setTimeout(function(){
    $.getJSON('sass.json', function (requestData) {
      addSassResults(requestData);
      searchSassReady(requestData);
    });
  }, 5);

  function searchSassReady(data) {
    if(!searchSassInput.length) return;

    searchSassInput.on('keyup', debounce(function () {
      var results = data,
          query = $(this).val();

      if (!query) {
        addSassResults(data);
        return;
      }

      query = query.split(" ");
      for (var i in query) {
        query[i] = matchEquivalentWords(query[i]);
        results = filterSassVariables(results, query[i]);
      }

      addSassResults(results);
    }));
  }

  // Check if this query matches one of the word equivalents
  // - meaning without the dash or a word abbreviation
  function matchEquivalentWords(query) {
    query = query.toLowerCase();
    if (commonWordEquivalents[query]) {
      query = commonWordEquivalents[query];
    }
    return query;
  }

  function filterSassVariables(data, query) {
    return data.filter(function(el) {
      var elName = el.name.toLowerCase();
      var elNameStripped = elName.replace(/-/g, '');
      return (elName.indexOf(query) > -1 || elNameStripped.indexOf(query) > -1);
    });
  }

  function sortSassResults(results) {
    return results.sort(function(a, b) {
      if (a.name.slice(1) < b.name.slice(1))
        return -1;
      if (a.name.slice(1) > b.name.slice(1))
        return 1;
      return 0;
    });
  }

  function addSassResults(results) {
    results = sortSassResults(results);
    searchSassResults.find("tr:gt(0)").remove();

    for(var i in results) {
      searchSassResults.append(
        '<tr class="ionic">' +
        '<td><code>' + results[i].name + '</code></td>' +
        '<td><code>' + results[i].defaultValue + '</code></td>' +
        '<td><a href="https://github.com/ionic-team/ionic/blob/master/' +
          results[i].file.replace('content/','') + '" data-toggle="tooltip" ' +
          'data-placement="right" title="' +
          results[i].file.replace('content/','') + '" target="_blank"><icon '+
          'class="ion-ios-document"></icon></a></td>' +
        '</tr>'
      );
    }

    $('[data-toggle="tooltip"]').tooltip();
  }
});
