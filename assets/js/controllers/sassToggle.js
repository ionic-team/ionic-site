IonicSiteModule
.controller('SassToggleCtrl', ['$scope', function($scope) {
  $scope.setSassPlatform = function(platform) {
    $scope.active = platform;
  };
}]);
