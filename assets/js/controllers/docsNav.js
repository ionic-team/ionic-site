IonicSiteModule
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var navItemPos = $('#side-nav > ul > .active').length ?
                    $('#side-nav > ul > .active').offset().top : null;
  $sideNav = $('#side-nav');
  if ($sideNav[0].offsetHeight < navItemPos + 100) {
    $sideNav[0].scrollTop =  navItemPos - 300;
  }
}]);
