IonicSiteModule
.controller('ViewCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.submit = function($event) {
    $scope.formDisabled = true;
    $scope.error = null;

    $http.post('/api/v1/view/link', {phone: $scope.phone}).then(function(response) {
      if(!response.data.ok) {
        $scope.error = response.data.message;
        $scope.formDisabled = false;
        return;
      }
      $scope.sent = true;
    }, function(err) {
      $scope.error = true;
      $scope.formDisabled = false;
    })

    $event.preventDefault();
  }
}]);
