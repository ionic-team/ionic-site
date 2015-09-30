angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function ($scope, $ionicActionSheet) {

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  $scope.component = {
    title: 'Action Sheet',
  }

  window.onmessage = function(e){
    $scope.$apply(function() {
      $scope.component.title = toTitleCase(e.data.replace('-', ' '));
    });
  };

  $scope.showActionsheet = function () {

    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        {
          text: 'Share'
        },
        {
          text: 'Move'
        },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function () {
        console.log('CANCELLED');
      },
      buttonClicked: function (index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function () {
        console.log('DESTRUCT');
        return true;
      }
    });
  };


});
