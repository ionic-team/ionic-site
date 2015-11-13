angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.submitData = function(d) {
    $scope.modal.hide();
    $scope.userData = d;
  }

});
