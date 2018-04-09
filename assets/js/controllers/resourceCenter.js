IonicSiteModule
.controller('ResourcesCtrl', ['$scope', '$location',
  function($scope, $location) {

  $scope.hash = window.location.hash.replace(/[^\w\s]/gi, '');

  $scope.$watch('hash', function(newVal, oldVal) {
    window.history.pushState(null, null, '#' + newVal.replace(/[^\w\s]/gi, ''));
  });
}]);
