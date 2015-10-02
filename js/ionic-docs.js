/*!
 * Ionic IO
 * Copyright 115 Drifty Co. http://drifty.com/
 */
(function() {
var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.test = function() {
    console.log($scope)
  }
}])
.controller('ComponentsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    var msg = JSON.stringify({platform: platform});
    $iframe[0].contentWindow.postMessage(msg, '*');
    if (platform == 'ios') {
      $scope.iosActive = true;
      $scope.androidActive = false;
      return;
    }
    $scope.iosActive = false;
    $scope.androidActive = true;
    $scope.demoURL = 'demo'; //TODO: set to android URL
  }
  var $iframe = $('#demo-device iframe');
  $scope.setPlatform('ios')




  var $scrollspy = $('body').scrollspy({target: '#components-index'});
  $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);




  function onScrollSpyChange(e) {
    if (e.target.id === 'components-index') {
      return;
    }
    var $hash, $node;
    $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
    $node = $('#' + $hash);
    if ($node.length) {
      $node.attr('id', '');
    }
    document.location.hash = $hash;
    $iframe[0].contentWindow.postMessage(JSON.stringify({hash: $hash}), '*');

    if ($node.length) {
      return $node.attr('id', $hash);
    }
  }

  // positioning the platform preview appropriately on scroll
  var $platformPreview = $('#platform-preview');
  var $window = $(window);
  var $body = $('body');

  $window.scroll(fixyCheck);
  function fixyCheck(a, b, c) {
    if ($('body').scrollTop() > 78) {
      $platformPreview.addClass('fixey')
    } else {
      $platformPreview.removeClass('fixey')
    }
  }
}]);

IonicDocsModule



})();
