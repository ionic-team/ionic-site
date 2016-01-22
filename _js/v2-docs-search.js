$(document).ready(function() {
  var searchInput = $('.search-input');

  var searchResultsDiv = $('#search-results');

  setTimeout(function() {
    // check if there if there is recent search data in local storage
    try {
      var localData = JSON.parse(localStorage.getItem('v2search-index'));
      if (localData && (localData.ts + 86400000) > Date.now()) {
        searchReady(localData);
        return;
      }
    } catch(e) {}

    $.getJSON('/docs/v2/data/v2-index.json', function(requestData) {
      searchReady(requestData);
      setTimeout(function() {
        try {
          requestData.ts = Date.now();
          localStorage.setItem('v2search-index', JSON.stringify(requestData));
        } catch(e) {}
      }, 100);
    });

  }, 5);

  var debounce = function(fn) {
    var timeout;
    return function() {
      var args = Array.prototype.slice.call(arguments),
          ctx = this;

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn.apply(ctx, args);
      }, 50);
    };
  }

  function searchReady(data) {
    if(!searchInput.length || $(window).width() < 768) return;
    var idx = lunr.Index.load(data.index);

    searchInput.closest('.search-bar').css({visibility: 'visible'});
    searchInput.on('keyup', debounce(function() {
      var query = $(this).val();

      if (!query || query.length < 2 || query == 'Search') {
        hideResults();
        return;
      }

      var
      results = {
        api: {},
        css: {},
        content: {}
      },
      queryResult,
      queryResultId,
      queryData,
      queryResults = idx.search(query);

      // categorize results based on URL
      console.log('search results', queryResults)
      for (queryResultId in queryResults) {
        queryResult = queryResults[queryResultId];
        queryData = data.ref[ queryResult.ref ];
        console.log(queryData);
        if (queryData.l == 'v2/docs_api') {
          results.api[ queryResult.ref ] = queryData;
        } else {
          results.content[ queryResult.ref ] = queryData;
        }
      }
      showResults(results);
    }));
  }

  function showResults(resultsData) {
    console.log('Got Results!', resultsData);
    addResults('#results-api', resultsData.api, 42);
    addResults('#results-css', resultsData.css, 14);
    addResults('#results-content', resultsData.content, 14);

    clearTimeout(removeOverlay);
    searchResultsDiv.show();

    if (!$('#search-overlay').length) {
      $(document.body).append('<div id="search-overlay"></div>');
    }

    setTimeout(function() {
      $(document.body).addClass('search-open');
    }, 16);
  }

  function addResults(sectionId, data, limit) {
    var links = '';
    var section = searchResultsDiv.find(sectionId);
    var total = 0;

    for (var i in data) {
      links += '<li><a href="' + data[i].p + '">' + data[i].t + '</a></li>';
      total++;
      if(total >= limit) break;
    }

    section.html(links);
  }

  var removeOverlay;
  function hideResults() {
    $(document.body).removeClass('search-open');
    removeOverlay = setTimeout(function() {
      $('#search-overlay').remove();
      searchResultsDiv.hide();
    }, 200);
  }

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      searchInput.val('');
      hideResults();
    }
  });

  searchInput.focus(function() {
    $(this).closest('.search-bar').addClass('active');
  });

  searchInput.blur(function() {
    $(this).closest('.search-bar').removeClass('active');
    setTimeout(function() {
      hideResults();
    }, 200);
  });
});
