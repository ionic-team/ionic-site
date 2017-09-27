IonicSiteModule
.controller('ViewCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.submit = function($event) {
    $scope.formDisabled = true;

    $http.post('/api/v1/view/link', {email: $scope.email}).then(function(response) {
      if(!response.data.ok) {
        $scope.error = true;
        $scope.formDisabled = false;
      }
      $scope.sent = true;
    }, function(err) {
      $scope.error = true;
      $scope.formDisabled = false;
    })

    $event.preventDefault();
  }
}]);
