IonicSiteModule
.controller('ViewCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.submit = function($event) {
    $scope.formDisabled = true;

    $http.post('/api/v1/view/link', $scope.form).then(function(response) {
      if(!response.data.ok) {
        $scope.formDisabled = false;
      }
      $scope.status = response.data;
    })

    $event.preventDefault();
  }
}]);
