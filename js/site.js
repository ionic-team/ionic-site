/*   
!! DO NOT USE ANY OF THIS CODE, ITS ONLY FOR OUR DOCS PAGE !!
 _             _      
(_)           (_)     
 _  ___  _ __  _  ___ 
| |/ _ \| '_ \| |/ __|
| | (_) | | | | | (__ 
|_|\___/|_| |_|_|\___|

*/

var ionicSite = (function(){

  /* Header menu toggle for mobile */
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
  });

  // Smooth Scrolling
  var smoothScrollingTo;
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          smoothScrollingTo = '#' + target.attr('id');
          $('html,body').animate({ scrollTop: target.offset().top }, 100, 'swing',
            function() {
              if(ionicSite.docContent) {
                ionicSite.previewSection(smoothScrollingTo);
              }
              smoothScrollingTo = undefined;
            });
          return false;
        }
      }
    });
  });

  // left menu toggles
  var menuTitleLinks = $('.menu-title').find('a');
  menuTitleLinks.click(function() {
    $('.left-menu').removeClass("active-menu")
    $(this).closest("ul").addClass("active-menu");
    return false;
  });

  // left menu link highlight
  $('.left-menu')
    .find('a[href="' + window.location.pathname + '"]')
    .closest('li')
    .addClass("active");

  return {

    fixedMenu: null,

    initDockedMenu: function() {
      /* Fixed left menu */
      var activeId;
      ionicSite.fixedMenu = $('.docked-menu');
      if(ionicSite.fixedMenu.length) {

        var targets = ionicSite.fixedMenu.find('.active-menu').find('a');
        targets.each(function() {
          var href = $(this).attr('href');
          if(href && href.indexOf('#') > -1) {
            href = href.split('#');
            href = "#" + href[ href.length - 1 ];
            $(this).attr('href', href);
          }
        });

        $(document.body).scrollspy({ target: '.docked-menu', offset: 300 });

        var fixedMenuTop = ionicSite.fixedMenu.offset().top;
        var menuTopPadding = 20;
        ionicSite.fixedMenu.css({
          top: menuTopPadding + 'px'
        });

        function docScroll() {
          var scrollTop = $(window).scrollTop();
          if(scrollTop + menuTopPadding > fixedMenuTop) {
            ionicSite.fixedMenu
              .css({
                width: ionicSite.fixedMenu.width() + 'px'
              })
              .addClass("fixed-menu");
          } else {
            ionicSite.fixedMenu
              .removeClass("fixed-menu")
              .css({
                width: 'auto'
              });
            if(scrollTop < 200) {
              $('.active').removeClass(".active");
            }
          }
        }
        $(window).resize(function(){
          ionicSite.fixedMenu
              .removeClass("fixed-menu")
              .css({
                width: 'auto'
              });
          docScroll();
        });
        $(window).scroll(docScroll);
      }
    },

    docContent: null,
    devicePreview: null,

    initDevicePreview: function() {
      /* Fixed device preview on the docs page */
      ionicSite.devicePreview = $('.device-preview');
      if(ionicSite.devicePreview.length) {
        ionicSite.docContent = $('.main-content');
        var orgDeviceTop = ionicSite.devicePreview.offset().top;

        function onScroll() {
          if($(window).scrollTop() > orgDeviceTop) {
            if( !ionicSite.devicePreview.hasClass('fixed-preview') ) {
              ionicSite.devicePreview
                .css({
                  left: Math.round(ionicSite.devicePreview.offset().left) + 'px'
                })
                .addClass("fixed-preview");
              }
          } else {
            if( ionicSite.devicePreview.hasClass('fixed-preview') ) {
              ionicSite.devicePreview
                .removeClass("fixed-preview")
                .css({
                  left: 'auto'
                });
            }
          }

        }
        $(window).resize(function(){
          ionicSite.devicePreview
              .removeClass("fixed-preview")
              .css({
                left: 'auto'
              });
          onScroll();
        });
        $(window).scroll(onScroll);
        onScroll();


        function scrollSpyChange(e) {
          if(smoothScrollingTo || !ionicSite.docContent) return;

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
            setTimeout(function(){
              ionicSite.previewSection(id);
            });
          }
        }
        ionicSite.fixedMenu.on('activate.bs.scrollspy', scrollSpyChange);

        var firstSection = ionicSite.docContent.find('.docs-section').first();
        if(firstSection.length) {
          ionicSite.previewSection( '#' + firstSection[0].id, true );
        }

      }
    },

    previewSection: function(id, doNotSetHistory) {
      var activeSection = $(id);
      if(!activeSection.length) return;

      var title = activeSection.find('h1,h2,h3').first();
      var newTitle = "Ionic Components";
      activeId = activeSection.attr('id');
      if(title.length) {
        newTitle = title.text() + " - " + newTitle;
      }
      document.title = newTitle;

      ionicSite.docContent.find('.active').removeClass('active');
      activeSection.addClass("active");

      if(!doNotSetHistory && window.history.replaceState) {
        window.history.replaceState({}, newTitle, "#" + activeId);
      }

      ionicSite.devicePreview.find('.active-preview').removeClass('active-preview');
      var docExample = activeSection.find('.doc-example');
      if( docExample.length ) {
        // this 
        var exampleId = 'example-' + activeId;
        var examplePreview = $('#' + exampleId);
        if(examplePreview.length) {
          // preview has already been added
          examplePreview.addClass('active-preview');
        } else if(ionicSite.devicePreview) {
          // create a new example preview
          ionicSite.devicePreview.append( '<div id="' + exampleId + '" class="ionic-body  ionic-pseudo">' + docExample.html() + '</div>' );
          setTimeout(function(){
            $('#' + exampleId)
              .addClass('active-preview')
              .find('a').click(function(){
                return false;
              });
          });
        }

      } else {
        if(!ionicSite.defaultScreen) {
          ionicSite.defaultScreen = ionicSite.devicePreview.find('.default-screen');
        }
        ionicSite.defaultScreen.addClass('active-preview');
      }
    }
  }

})();
