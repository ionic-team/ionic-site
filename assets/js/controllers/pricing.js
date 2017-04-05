IonicSiteModule
.controller('pricingCtrl', ['$scope', function($scope) {
  var initialSliderVals = {
    'push': {
      'val': 1000000,
      'cost': 0,
      'indieVal': 10000,
      'options': {
        'minLimit': 1000000,
        'ceil': 13500000,
        'step': 100000,
        'hidePointerLabels': true,
        'hideLimitLabels': true,
        'showSelectionBar': true,
        'onChange': function(sId, newVal) {
          $scope.sliders.push.displayVal = newVal;
          $scope.sliders.push.cost = (newVal - 1000000) / 1000 * 0.08;
          updateTotal();
        }
      }
    },
    'deploy': {
      'val': 100000,
      'cost': 0,
      'indieVal': 5000,
      'options': {
        'minLimit': 100000,
        'ceil': 1350000,
        'step': 10000,
        'hidePointerLabels': true,
        'hideLimitLabels': true,
        'showSelectionBar': true,
        'onChange': function(sId, newVal) {
          $scope.sliders.deploy.displayVal = newVal;
          $scope.sliders.deploy.cost = (newVal - 100000) / 1000 * 0.25;
          updateTotal();
        }
      }
    },
    'package': {
      'val': 500,
      'cost': 0,
      'indieVal': 100,
      'options': {
        'minLimit': 500,
        'ceil': 6700,
        'step': 100,
        'hidePointerLabels': true,
        'hideLimitLabels': true,
        'showSelectionBar': true,
        'onChange': function(sId, newVal) {
          $scope.sliders.package.displayVal = newVal;
          $scope.sliders.package.cost = (newVal - 500) / 100 * 0.40;
          updateTotal();
        }
      }
    }
    // 'users': {
    //   'val': 50000,
    //   'cost': 0,
    //   'indieVal': ,
    //   'options': {
    //     'minLimit': 50000,
    //     'ceil': 2050000,
    //     'step': 1000,
    //     'hidePointerLabels': true,
    //     'hideLimitLabels': true,
    //     'showSelectionBar': true,
    //     'onChange': function(sId, newVal) {
    //       $scope.sliders.users.cost = (newVal - 50000) / 1000 * 0.50;
    //       updateTotal();
    //     }
    //   }
    // }
  };

  $scope.sliders = initialSliderVals;

  function updateTotal() {
    var base = $scope.indie ? 0 : 20;
    $scope.total = $scope.sliders.push.cost + $scope.sliders.deploy.cost +
      $scope.sliders.package.cost + base;
  }

  $scope.$watch('indie', function(indiePlanSelected) {
    if (indiePlanSelected) {
      Object.keys($scope.sliders).forEach(function(key) {
        $scope.sliders[key].displayVal = $scope.sliders[key].indieVal;
      });
      $scope.total = 0;
      return;
    }

    Object.keys($scope.sliders).forEach(function(key) {
      $scope.sliders[key].displayVal = $scope.sliders[key].val;
    });
    updateTotal();
  });

  updateTotal();
}]);
