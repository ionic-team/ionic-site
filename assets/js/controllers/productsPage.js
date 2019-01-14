IonicSiteModule
.controller('ProductsPageCtrl', ['$scope', '$timeout', 'ionicMetrics',
  function($scope, $timeout, ionicMetrics) {

  mixpanel.track('Products Page Load', {'test': 'ProductsTest - 5'});
  ionicMetrics.track('Products Page Load');

  $scope.gotoPricing = function(location) {
    mixpanel.track('Pricing Button Click',
      {'test': 'ProductsTest - 5', 'location': location});
    $timeout(function() {
      window.location = '/pro/pricing';
    }, 5);
  };

  $scope.gotoGettingStarted = function() {
    mixpanel.track('Community - Getting Started Click',
      {'test': 'ProductsTest - 5'});
    $timeout(function() {
      window.location = '/getting-started';
    }, 5);
  };

  $scope.trackOpenSurvey = function() {
    mixpanel.track('Professional - Im Interested Click',
      {'test': 'ProductsTest - 5'});
    c('Pricing', 'FormOpen');
  };

}]);
