IonicSiteModule
.controller('CreatorPricingCtrl', ['$scope', function($scope) {
  $scope.monthly = {
    pro: 29,
    agency: 99,
    business: 399
  };
  $scope.annually = {
    pro: 24,
    agency: 89,
    business: 359
  };
  $scope.setPeriod = function(period) {
    $scope.period = period;
  };
  $scope.setPeriod('annually');
}]);