IonicSiteModule
.controller('ProDocsCtrl', ['$scope', '$timeout', 'ionicMetrics',
  function($scope, $timeout, ionicMetrics) {
    $scope.sections = {
      intro: false,
      view: false,
      deploy: false,
      package: false,
      monitoring: false,
      devapp: false,
      advanced: false
    }

    $scope.toggle = function(section) {
      $scope.sections[section] = !$scope.sections[section];
      for(var i in $scope.sections) {
        if(i != section) {
          $scope.sections[i] = false;
        }
      }
    }
  }
]);
