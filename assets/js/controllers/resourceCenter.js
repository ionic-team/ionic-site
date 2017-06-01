IonicSiteModule
.controller('ResourcesCtrl', ['$scope', '$location',
  function($scope, $location) {

  $scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {
    $scope.$evalAsync(function() {
      $scope.hash = window.location.hash.substr(2).split('?')[0];
    });
  });
}]);
