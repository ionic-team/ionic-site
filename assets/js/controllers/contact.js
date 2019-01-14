IonicSiteModule
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.employees = [
    {value: null, label: "Employees *"},
    {value: "1-19", label: "1-19"},
    {value: "20-99", label: "20-99"},
    {value: "100-249", label: "100-249"},
    {value: "250-499", label: "250-499"},
    {value: "500+", label: "500+"}
  ];

  $scope.form = {employees: $scope.employees[0]}

  $scope.selectFocus = function() {
    if (!$scope.employees[0].disabled) {
      $scope.employees[0].disabled = true;
      $scope.form.employees = $scope.employees[1];
    }
  }

  $scope.submit = function($event) {
    // ionicMetrics.track($scope.planOfInterest + ' Beta Sign Up Submit').then(function(data){
    //   $event.target.submit();
    // });

    $scope.formDisabled = true;

    $http.post('/contact', $scope.form).then(function(response) {
      if(!response.data.ok) {
        $scope.formDisabled = false;
      }
      $scope.status = response.data;
    })

    if($scope.successLink.length) {
      window.open($scope.successLink)
    }

    $event.preventDefault();
  }
}]);
