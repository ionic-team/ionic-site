IonicSiteModule
.controller('pricingCtrl', ['$scope', 'ionicMetrics', function($scope, ionicMetrics) {
  ionicMetrics.track('Pricing Page Load');

  $scope.opening = function(openingWhat) {
    $scope.planOfInterest = openingWhat;
    ionicMetrics.track(openingWhat + ' Modal Open');
  }

  $scope.submit = function($event) {
    ionicMetrics.track($scope.planOfInterest + ' Beta Sign Up Submit').then(function(data){
      $event.target.submit();
    });

    $event.preventDefault();
  }
}]);
