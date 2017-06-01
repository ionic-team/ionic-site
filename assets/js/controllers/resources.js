IonicSiteModule
.controller('ResourceCenterCtrl', ['$scope', function($scope) {

  $resourceCenterItems = document.getElementById('resource-center-items').children;

  $scope.filter = function(category) {
    if ($scope.current == category) {
      $scope.current = null;
      return;
    }
    $scope.current = category;
  }
}]);
