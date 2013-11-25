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
  $('.left-menu')
    .find('a[href="' + window.location.pathname + '"]')
    .closest('li')
    .addClass("active");


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
      $(window).scroll(docScroll);

      function scrollSpyChange(e) {
        if(smoothScrollingTo || !docContent) return;

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
            setTimeout(function(){
              previewSection(id);
            });
          } else {
            var activeSection = $(id);
            if(activeSection.length) {
              docContent.find('.active').removeClass('active');
              activeSection.addClass("active");
            }
          }
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
      $(window).resize(function(){
        devicePreview
            .removeClass("fixed-preview")
            .css({
              left: 'auto'
            });
        onScroll();
      });
      $(window).scroll(onScroll);
      onScroll();

      var firstSection = docContent.find('.docs-section').first();
      if(firstSection.length) {
        previewSection( '#' + firstSection[0].id, true );
      }

    }
  })();


  function previewSection(id, doNotSetHistory) {
    var activeSection = $(id);
    if(!activeSection.length || !devicePreview) return;

    var title = activeSection.find('h1,h2,h3').first();
    var newTitle = "Ionic Components";
    activeId = activeSection.attr('id');
    if(title.length) {
      newTitle = title.text() + " - " + newTitle;
    }
    document.title = newTitle;

    docContent.find('.active').removeClass('active');
    activeSection.addClass("active");

    // if(!doNotSetHistory && window.history.replaceState) {
    //   window.history.replaceState({}, newTitle, "#" + activeId);
    // }

    devicePreview.find('.active-preview').removeClass('active-preview');
    var docExample = activeSection.find('.doc-example');
    if( docExample.length ) {
      // this 
      var exampleId = 'example-' + activeId;
      var examplePreview = $('#' + exampleId);
      if(examplePreview.length) {
        // preview has already been added
        examplePreview.addClass('active-preview');
      } else if(devicePreview) {
        // create a new example preview
        devicePreview.append( '<div id="' + exampleId + '" class="ionic-body">' + docExample.html() + '</div>' );
        setTimeout(function(){
          $('#' + exampleId)
            .addClass('active-preview')
            .find('a').click(function(){
              return false;
            });
        });
      }

    } else {
      if(!defaultScreen) {
        defaultScreen = devicePreview.find('.default-screen');
      }
      defaultScreen.addClass('active-preview');
    }
  }

})();
