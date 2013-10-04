/*   DO NOT USE ANY OF THIS CODE, ITS ONLY FOR OUR DOCS PAGE   */

(function(){

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
  });

  var $fixedMenu = $('.fixed-menu');
  if($fixedMenu.length === 1) {
    $(document.body).scrollspy({ target: '.fixed-menu' });

    var fixedOrgTop = $fixedMenu.offset().top;
    var topPadding = 20;
    $fixedMenu.css({
      top: topPadding + 'px'
    });

    function windowScroll(e) {
      if(window.scrollY + topPadding > fixedOrgTop) {
        var w = $fixedMenu.width();
        $fixedMenu.css({
          position: 'fixed',
          width: w + 'px'
        });
      } else {
        $fixedMenu.css({
          position: 'static',
          width: 'auto'
        });
      }
    }
    $(window).scroll(windowScroll);
  }

})();
