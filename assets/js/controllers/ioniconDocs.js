IonicSiteModule
.controller('IoniconDocsCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.icons = {};
  var $modal;

  $http.get('site_data.json').then(function(response) {
    $scope.icons = response.data;
  });

  $scope.$watch('icons', filterIcons);
  $scope.$watch('searchTerm', filterIcons);

  function filterIcons() {
    var filteredIcons = {};
    if (typeof $scope.searchTerm === 'undefined' || $scope.searchTerm == '') {
      $scope.filteredIcons = $scope.icons;
      return;
    }
    var filteredIcons = {};
    angular.forEach($scope.icons, function(value, key) {
      for (var i = 0; i < value.tags.length; i++) {
        if (value.tags[i].indexOf($scope.searchTerm) != -1) {
          this[key] = value;
          break;
        }
      }
    }, filteredIcons);
    $scope.filteredIcons = filteredIcons;
  }

  $scope.open = function(key) {
    $scope.selected = $scope.filteredIcons[key];
    $scope.selected.key = key;
    if ($modal === undefined) {
      $modal = $('#ionicons-modal').modal();
    } else {
      $modal.modal('show');
    }
  };

  $scope.getIcon = function(iconObj, platform) {
    //console.log(iconObj);
    if (iconObj === undefined) {
      //console.log('undefined');
      return;
    }
    if (iconObj.icons.length === 1 || platform === 'ios') {
      return iconObj.icons[0].name;
    }
    if (iconObj.icons.length === 2) {
      return iconObj.icons[1].name;
    }
    return iconObj.icons[2].name;
  };

}]);
