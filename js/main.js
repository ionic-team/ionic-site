/*   DO NOT USE ANY OF THIS CODE, ITS ONLY FOR OUR DOCS PAGE   */

(function(){

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
  });

  var $fixedMenu = $('.docked-menu');
  if($fixedMenu.length) {
    $(document.body).scrollspy({ target: '.docked-menu' });

    var fixedMenuTop = $fixedMenu.offset().top;
    var menuTopPadding = 20;
    $fixedMenu.css({
      top: menuTopPadding + 'px'
    });

    function docScroll(e) {
      if(window.scrollY + menuTopPadding > fixedMenuTop) {
        $fixedMenu
          .css({
            width: $fixedMenu.width() + 'px'
          })
          .addClass("fixed-menu");
      } else {
        $fixedMenu
          .removeClass("fixed-menu")
          .css({
            width: 'auto'
          });
      }
    }
    $(window).scroll(docScroll);
  }

  var $devicePreview = $('.device-preview');
  if($devicePreview.length) {

    var previewTop = $fixedMenu.offset().top;
    var previewTopPadding = 10;
    $devicePreview.css({
      top: previewTopPadding + 'px'
    });

    function previewScroll(e) {
      if(window.scrollY + previewTopPadding > previewTop) {
        $devicePreview
          .css({
            left: Math.round($devicePreview.offset().left + 'px'
          })
          .addClass("fixed-preview");
      } else {
        $devicePreview
          .removeClass("fixed-preview")
          .css({
            left: 0
          });
      }
    }
    $(window).scroll(previewScroll);

  }

})();
