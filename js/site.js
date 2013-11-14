/*   
!! DO NOT USE ANY OF THIS CODE, ITS ONLY FOR OUR DOCS PAGE !!
 _             _      
(_)           (_)     
 _  ___  _ __  _  ___ 
| |/ _ \| '_ \| |/ __|
| | (_) | | | | | (__ 
|_|\___/|_| |_|_|\___|

*/

(function(){

  /* Header menu toggle for mobile */
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
  });


  /* Fixed left menu */
  var fixedMenu = $('.docked-menu');
  var activeId;
  if(fixedMenu.length) {
    $(document.body).scrollspy({ target: '.docked-menu', offset: 180 });

    var fixedMenuTop = fixedMenu.offset().top;
    var menuTopPadding = 20;
    fixedMenu.css({
      top: menuTopPadding + 'px'
    });

    function docScroll() {
      if(window.scrollY + menuTopPadding > fixedMenuTop) {
        fixedMenu
          .css({
            width: fixedMenu.width() + 'px'
          })
          .addClass("fixed-menu");
      } else {
        fixedMenu
          .removeClass("fixed-menu")
          .css({
            width: 'auto'
          });
        if(window.scrollY < 200) {
          $('.active').removeClass(".active");
        }
      }
    }
    $(window).resize(function(){
      fixedMenu
          .removeClass("fixed-menu")
          .css({
            width: 'auto'
          });
      docScroll();
    });
    $(window).scroll(docScroll);
  }

  /* Fixed device preview on the docs page */
  var devicePreview = $('.device-preview');
  if(devicePreview.length) {
    var docContent = $('.main-content');
    var orgDeviceTop = devicePreview.offset().top;
    var $defaultScreen = devicePreview.find('.default-screen');

    function onScroll() {
      if(window.scrollY > orgDeviceTop) {
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


    function scrollSpyChange(e) {
      if(smoothScrollingTo) return false;

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
          previewSection(id);
        });
      }
    }
    fixedMenu.on('activate.bs.scrollspy', scrollSpyChange);

    var defaultScreen = devicePreview.find('.default-screen');
    function previewSection(id) {
      var activeSection = $(id);
      if(!activeSection.length) return;

      var title = activeSection.find('h1,h2,h3').first();
      var newTitle = "Ionic Components";
      activeId = activeSection.attr('id');
      if(title.length) {
        newTitle = title.text() + " - " + newTitle;
      }
      document.title = newTitle;

      docContent.find('.active').removeClass('active');
      activeSection.addClass("active");

      if(window.history.replaceState) {
        window.history.replaceState({}, newTitle, "#" + activeId);
      }

      devicePreview.find('.active-preview').removeClass('active-preview');
      var docExample = activeSection.find('.doc-example');
      if( docExample.length ) {
        // this 
        var exampleId = 'example-' + activeId;
        var examplePreview = $('#' + exampleId);
        if(examplePreview.length) {
          // preview has already been added
          examplePreview.addClass('active-preview');
        } else {
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
        defaultScreen.addClass('active-preview');
      }
    }

  }

  // Smooth Scrolling
  var smoothScrollingTo;
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          smoothScrollingTo = '#' + target.attr('id');
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 
          1000, 'swing',
          function() {
            previewSection(smoothScrollingTo);
            smoothScrollingTo = undefined;
          });
          return false;
        }
      }
    });
  });

})();
