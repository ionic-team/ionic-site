$(document).ready(function() {
  var $searchInput = $('.search-input');
  var $searchResultsDiv = $('#search-results');
  var activeSearchInputPos;

  // don't even try to load this on a non-docs page
  if (!$searchInput.length) return;

  setTimeout(function() {
    // check if there if there is recent search data in local storage
    var usingLocal = false;
    try {
      var localData = JSON.parse(localStorage.getItem('v2-search-index'));
      if (localData && (localData.ts + 86400000) > Date.now()) {
        searchReady(localData);
        usingLocal = true;
        return;
      }
    } catch (e) {}

    if (!usingLocal) {
      $.getJSON('/docs/data/index.json', function(requestData) {
        searchReady(requestData);
        setTimeout(function() {
          try {
            requestData.ts = Date.now();
            localStorage.setItem('v2-search-index', JSON.stringify(requestData));
          } catch (e) {}
        }, 100);
      });
    }
  }, 50);

  var debounce = function(fn) {
    var timeout;
    return function() {
      var args = Array.prototype.slice.call(arguments);
      var ctx = this;

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn.apply(ctx, args);
      }, 50);
    };
  };

  function searchReady(data) {
    if (!$searchInput.length) {
      return;
    }
    var idx = lunr.Index.load(data.index);

    $searchInput.closest('.search-bar').css({visibility: 'visible'});
    $searchInput.on('keyup', debounce(function(e) {
      // identify which input this is so we can position the input accordingly
      if (activeSearchInputPos) {
        $searchResultsDiv.removeClass(activeSearchInputPos);
      }
      if (e.target.dataset && e.target.dataset.searchpos) {
        activeSearchInputPos = e.target.dataset.searchpos;
        $searchResultsDiv.addClass(activeSearchInputPos);
      }

      var query = $(this).val();

      if (!query || query.length < 2 || query == 'Search') {
        hideResults();
        return;
      }

      var
      results = {
        api: {},
        native: {},
        other: {}
      },
      queryResult,
      queryResultId,
      queryData,
      queryResults = idx.search(query);

      // categorize results based on URL
      for (queryResultId in queryResults) {
        queryResult = queryResults[queryResultId];
        queryData = data.ref[ queryResult.ref ];

        // if this is the resources search, skip non-resources results
        if (activeSearchInputPos === 'resources') {
          if (queryData.p.indexOf('/resources/') != 0) {
            continue;
          } else {
            queryData.t = queryData.t.replace('Ionic 2 Resources | ', '');
          }
        }

        if (queryData.p.indexOf('/api/') === 0) {
          results.api[ queryResult.ref ] = queryData;
        } else if (queryData.p.indexOf('/native/') === 0) {
          results.native[ queryResult.ref ] = queryData;
        } else {
          results.other[ queryResult.ref ] = queryData;
        }
      }
      showResults(results);
    }));
  }

  function showResults(resultsData) {
    addResults('#results-api', resultsData.api, 42);
    addResults('#results-native', resultsData.native, 14);
    addResults('#results-other', resultsData.other, 14);

    clearTimeout(removeOverlay);
    $searchResultsDiv.addClass('ready');

    if (!$('#search-overlay').length) {
      $(document.body).append('<div id="search-overlay"></div>');
    }
  }

  function addResults(sectionId, data, limit) {
    var links = '';
    var section = $searchResultsDiv.find(sectionId + ' ul');
    var total = 0;

    for (var i in data) {
      links += '<li><a href="/docs' + data[i].p + '">';
      links += data[i].t + '</a></li>';
      total++;
      if (total >= limit) {
        break;
      }
    }

    section.html(links);
    window.requestAnimationFrame(function() {
      $searchResultsDiv.addClass('active');
    });
  }

  var removeOverlay;
  function hideResults() {
    $searchResultsDiv.removeClass('active');
    removeOverlay = setTimeout(function() {
      $('#search-overlay').remove();
      $searchResultsDiv.removeClass('ready');
    }, 200);
  }

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $searchInput.val('');
      hideResults();
    }
  });

  $searchInput.focus(function() {
    // do nothing
  });

  $searchInput.blur(function() {
    setTimeout(function() {
      hideResults();
    }, 300);
  });
});
