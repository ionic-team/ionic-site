$(document).ready(function() {
  var $searchInput = $('.search-input');
  var $searchResultsDiv = $('#search-results');
  var activeSearchInputPos;

  setTimeout(function() {
    // check if there if there is recent search data in local storage
    try {
      var localData = JSON.parse(localStorage.getItem('search-index'));
      if (localData && (localData.ts + 86400000) > Date.now()) {
        searchReady(localData);
        return;
      }
    } catch (e) {}

    $.getJSON('/docs/v2/data/index.json', function(requestData) {
      searchReady(requestData);
      setTimeout(function() {
        try {
          requestData.ts = Date.now();
          localStorage.setItem('search-index', JSON.stringify(requestData));
        } catch (e) {}
      }, 100);
    });

  }, 5);

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
    if (!$searchInput.length || $(window).width() < 768) {
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
        platform: {},
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
        if (queryData.p.indexOf('/api/') === 0) {
          results.api[ queryResult.ref ] = queryData;
        } else if (queryData.p.indexOf('/platform/') === 0) {
          results.platform[ queryResult.ref ] = queryData;
        } else {
          results.other[ queryResult.ref ] = queryData;
        }
      }
      showResults(results);
    }));
  }

  function showResults(resultsData) {
    addResults('#results-api', resultsData.api, 42);
    addResults('#results-platform', resultsData.platform, 14);
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
      links += '<li><a href="/docs/v2' + data[i].p + '">';
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
