IonicSiteModule
.controller('PricingPageCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {

  mixpanel.track('Pricing Page Load', {'test': 'ProductsTest - 5'});

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
