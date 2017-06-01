IonicSiteModule
.controller('EnterpriseCtrl', ['$scope', function($scope) {
  $scope.track = function(title) {
    mixpanel.track(title, {'test': 'Enterprise - 1'})
  }

  $scope.$watch('success', function(val) {
    if (val) {
      mixpanel.track('Form Success', {'test': 'Enterprise - 1'})
    } else {
      mixpanel.track('Page Init', {'test': 'Enterprise - 1'})
    }
  })

  $scope.submit = function($event) {
    mixpanel.track('Form Submit', {'test': 'Enterprise - 1'}, function(){
      $event.target.submit();
    })
    $event.preventDefault();
  }
  
}]);
