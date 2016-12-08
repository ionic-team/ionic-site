angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('popover.html', function(popover) {
    $scope.popover = popover;
  });

});
