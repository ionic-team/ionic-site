/*
 _             _
(_)           (_)
 _  ___  _ __  _  ___
| |/ _ \| '_ \| |/ __|
| | (_) | | | | | (__
|_|\___/|_| |_|_|\___|

*/

var ionicSite = (function(){
  var smoothScrollingTo,
      fixedMenu,
      winHeight = $(window).height(),
      docContent = $('.main-content'),
      devicePreview,
      defaultScreen;

  window.rAF = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 16);
            };
  })();

  /* Header menu toggle for mobile */
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
  });

  // smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        smoothScrollingTo = '#' + target.attr('id');
        $('html,body').animate({ scrollTop: target.offset().top }, 100, 'swing',
          function() {
            if(docContent) {
              previewSection(smoothScrollingTo);
            }
            smoothScrollingTo = undefined;
          });
        return false;
      }
    }
  });

  // left menu link highlight
  var leftMenu = $('.left-menu');
  var activeLink = leftMenu.find('[href="' + window.location.pathname + '"]');
  activeLink.parents('li').addClass("active");

  leftMenu.find('.api-section').click(function(){
    if( $(this).attr('href') == '#' ) {
      $(this).closest('.left-menu').find("li").removeClass('active');
      $(this).closest('li').toggleClass('active');
      return false;
    }
  });


  /* Fixed left menu */
  (function() {
    var activeId;
    fixedMenu = $('.docked-menu');
    if(fixedMenu.length) {

      var targets = fixedMenu.find('.active-menu').find('a');
      targets.each(function() {
        var href = $(this).attr('href');
        if(href && href.indexOf('#') > -1) {
          href = href.split('#');
          href = "#" + href[ href.length - 1 ];
          $(this).attr('href', href);
        }
      });

      var scrollSpyOffset = 40;
      if( $(document.body).hasClass("device-preview-page") ) {
        scrollSpyOffset = 300;
      }

      $(document.body).scrollspy({ target: '.docked-menu', offset: scrollSpyOffset });

      var fixedMenuTop = fixedMenu.offset().top;
      var menuTopPadding = 20;
      fixedMenu.css({
        top: menuTopPadding + 'px'
      });

      function docScroll() {
        var win = $(window);
        var scrollTop = win.scrollTop();
        var winWidth = win.width();
        if(scrollTop + menuTopPadding > fixedMenuTop && winWidth >= 768) {
          // middle of the page
          if(!fixedMenu.hasClass("fixed-menu")) {
            fixedMenu
              .css({
                width: fixedMenu.width() + 'px',
                top: '20px'
              })
              .addClass("fixed-menu");
          }
        } else {
          // top of page
          if(fixedMenu.hasClass("fixed-menu")) {
            fixedMenu
              .removeClass("fixed-menu")
              .css({
                width: 'auto',
                top: '20px'
              });
          }
          if(scrollTop < 200) {
            $('.active').removeClass(".active");
          }
        }
      }
      $(window).resize(function() {
        //preFooterTop = $('.pre-footer').offset().top;
        winHeight = $(window).height();
        fixedMenu
            .removeClass("fixed-menu")
            .css({
              width: 'auto'
            });
        docScroll();
      });
      var docScrollGovernor;
      function governDocScroll(){
        clearTimeout(docScrollGovernor);
        docScrollGovernor = setTimeout(docScroll, 15);
      }
      $(window).scroll(governDocScroll);

      function scrollSpyChange(e) {
        if(smoothScrollingTo || !docContent) {
          window.history.replaceState && window.history.replaceState({}, smoothScrollingTo, smoothScrollingTo);
          return;
        }

        var id;
        if(e.target.children.length > 1) {
          // this is a top level nav link
          var activeSublinks = $(e.target).find('.active');
          if(!activeSublinks.length) {
            // no children are active for this top level link
            id = e.target.children[0].hash;
          }
        } else if(e.target.children.length === 1) {
          // this is a sub nav link
          id = e.target.children[0].hash;
        }

        if(id) {
          if(devicePreview) {
            window.rAF(function(){
              previewSection(id);
            });
          } else {
            var activeSection = $(id);
            if(activeSection.length) {
              window.rAF(function(){
                docContent.find('.active').removeClass('active');
                activeSection.addClass("active");
              });
            }
          }
          window.history.replaceState && window.history.replaceState({}, id, id);
        }
      }
      fixedMenu.on('activate.bs.scrollspy', scrollSpyChange);
    }
  })();

  // initDevicePreview
  (function() {
    /* Fixed device preview on the docs page */
    devicePreview = $('.device-preview');
    if(devicePreview.length) {
      var orgDeviceTop = devicePreview.offset().top;

      function onScroll() {
        if($(window).scrollTop() > orgDeviceTop) {
          if( !devicePreview.hasClass('fixed-preview') ) {
            devicePreview
              .css({
                left: Math.round(devicePreview.offset().left) + 'px'
              })
              .addClass("fixed-preview");
            }
        } else {
          if( devicePreview.hasClass('fixed-preview') ) {
            devicePreview
              .removeClass("fixed-preview")
              .css({
                left: 'auto'
              });
          }
        }

      }

      var scrollGovernor;
      function governScroll() {
        clearTimeout(scrollGovernor);
        scrollGovernor = setTimeout(onScroll, 15);
      }

      $(window).resize(function(){
        devicePreview
            .removeClass("fixed-preview")
            .css({
              left: 'auto'
            });
        onScroll();
      });
      $(window).scroll(governScroll);

      onScroll();

      var firstSection = docContent.find('.docs-section').first();
      if(firstSection.length) {
        previewSection( '#' + firstSection[0].id, true );
      }

      // manually add the activated CSS like how ionic does it
      devicePreview.on('mousedown', function(e){
        if(e.target.classList && e.target.classList.contains('button')) {
          e.target.classList.add('activated');
        }
      });

      devicePreview.on('mouseup', function(e){
        devicePreview.find('.activated').removeClass('activated');
      });

    }
  })();


  function previewSection(id) {
    var activeSection = $(id);
    if(!activeSection.length || !devicePreview) return;

    var title = activeSection.find('h1,h2,h3').first();
    var newTitle = "Ionic Components";
    activeId = activeSection.attr('id');
    if(title.length) {
      newTitle = title.text() + " - " + newTitle;
    }
    document.title = newTitle;

    docContent.find('.active:not(.tab-item)').removeClass('active');
    activeSection.addClass("active");

    devicePreview.find('.active-preview').removeClass('active-preview');
    var docExample = activeSection.find('.doc-example');
    if( docExample.length ) {
      // this
      var exampleId = 'example-' + activeId;
      var examplePreview = $('#' + exampleId);
      if(examplePreview.length) {
        // preview has already been added
        window.rAF(function(){
          examplePreview.addClass('active-preview');
        });
      } else if(devicePreview) {
        // create a new example preview
        devicePreview.append( '<div id="' + exampleId + '" class="ionic-body">' + docExample.html() + '</div>' );
        window.rAF(function(){
          $('#' + exampleId)
            .addClass('active-preview')
            .find('a').click(function(e){
              // Activates tabs in tab CSS demo.
              if ($(this).hasClass('tab-item')) {
                $(this).siblings('.tab-item').removeClass('active');
                $(this).addClass('active');
              }
              return false;
            });
        });
      }

    } else {
      window.rAF(function(){
        if(!defaultScreen) {
          defaultScreen = devicePreview.find('.default-screen');
        }
        defaultScreen.addClass('active-preview');
      });
    }
  }

})();

$(document).ready(function () {

  var searchInput = $('#search-input');

  if(!searchInput.length || $(window).width() < 768) return;

  var searchResultsDiv = $('#search-results');

  setTimeout(function(){
    // check if there if there is recent search data in local storage
    try {
      var localData = JSON.parse(localStorage.getItem('search-index'));
      if(localData && (localData.ts + 86400000) > Date.now()) {
        searchReady(localData);
        return;
      }
    } catch(e){}

    $.getJSON('/data/index.json', function (requestData) {
      searchReady(requestData);
      setTimeout(function(){
        try{
          requestData.ts = Date.now();
          localStorage.setItem('search-index', JSON.stringify(requestData))
        }catch(e){}
      }, 100);
    });

  }, 5);

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

  function searchReady(data) {
    var idx = lunr.Index.load(data.index);

    searchInput.closest('.search-bar').css({visibility: 'visible'});

    searchInput.on('keyup', debounce(function () {
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

      for(queryResultId in queryResults) {
        queryResult = queryResults[queryResultId];
        queryData = data.ref[ queryResult.ref ];

        if(queryData.l == 'docs_api') {
          results.api[ queryResult.ref ] = queryData;
        } else if(queryData.l == 'docs_css') {
          results.css[ queryResult.ref ] = queryData;
        } else {
          results.content[ queryResult.ref ] = queryData;
        }
      }

      showResults(results);
    }));

  }

  function showResults(resultsData) {
    addResults('#results-api', resultsData.api, 42);
    addResults('#results-css', resultsData.css, 14);
    addResults('#results-content', resultsData.content, 14);

    clearTimeout(removeOverlay);
    searchResultsDiv.show();

    if( !$('#search-overlay').length ) {
      $(document.body).append('<div id="search-overlay"></div>');
    }

    setTimeout(function(){
      $(document.body).addClass('search-open');
    }, 16);
  }

  function addResults(sectionId, data, limit) {
    var links = '';
    var section = searchResultsDiv.find(sectionId);
    var total = 0;

    for(var i in data) {
      links += '<li><a href="' + data[i].p + '">' + data[i].t + '</a></li>';
      total++;
      if(total >= limit) break;
    }

    section.html(links);
  }

  var removeOverlay;
  function hideResults(){
    $(document.body).removeClass('search-open');
    removeOverlay=setTimeout(function(){
      $('#search-overlay').remove();
      searchResultsDiv.hide();
    }, 200);
  }

  $(document).keyup(function(e) {
    if(e.keyCode == 27) {
      searchInput.val('');
      hideResults();
    }
  });

  searchInput.focus(function(){
    if( $(this).val() == 'Search' ) {
      $(this).val('');
    }
    $(this).closest('.search-bar').addClass('active');
  });

  searchInput.blur(function(){
    $(this).val('Search');
    $(this).closest('.search-bar').removeClass('active');
    setTimeout(function(){
      hideResults();
    }, 200);
  });

});
