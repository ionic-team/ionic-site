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
    var fixedOrgWidth = $fixedMenu.width();
    var topPadding = 20;

    function windowScroll(e) {
      if(window.scrollY + topPadding > fixedOrgTop) {
        $fixedMenu.css({
          position: 'fixed',
          top: topPadding + 'px',
          width: fixedOrgWidth + 'px'
        });
      } else {
        $fixedMenu.css({
          position: 'static',
          top: undefined,
          width: 'auto'
        });
      }
    }
    $(window).scroll(windowScroll);
  }

})();
