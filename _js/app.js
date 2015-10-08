var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.test = function() {
    console.log($scope)
  }
}])
.controller('ComponentsCtrl', ['$scope', '$timeout', function($scope, $timeout) {



  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.iosActive = true;
      $scope.androidActive = false;
      $('#demo-device-android').css('display', 'none');
      $('#demo-device-ios').css('display', 'block');
      return;
    }
    $scope.iosActive = false;
    $scope.androidActive = true;
    $('#demo-device-ios').css('display', 'none');
    $('#demo-device-android').css('display', 'block');
  }

  var $androidIframe = $('iframe#demo-android');
  var $iosIframe = $('iframe#demo-ios');
  var $buttons = $("#components-buttons");

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

    if ($hash.indexOf('button') > -1) {
      $buttons.addClass('active');
    }
    if ($node.length) {
      $node.attr('id', '');
    }
    document.location.hash = $hash;
    $iosIframe[0].contentWindow.postMessage(JSON.stringify({hash: $hash}), '*');
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({hash: $hash}), '*');

    if ($node.length) {
      return $node.attr('id', $hash);
    }
  }

  (function setUpListeners() {

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
      sendCurrentHash(e.data);
    },false);


  })();

  function sendCurrentHash(platform) {
    // send the initial hash if possible
    if (platform === 'ios') {
      $iosIframe[0].contentWindow.postMessage(JSON.stringify({hash: window.location.hash}), '*');
      return;   
    }
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({hash: window.location.hash}), '*');      
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
