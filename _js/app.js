var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
  .controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.test = function() {
      console.log($scope);
    };
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
    };

    var $androidIframe = $('iframe#demo-android');
    var $iosIframe = $('iframe#demo-ios');
    var $buttons = $('#components-buttons');
    var $cards = $('#components-cards');
    var $alerts = $('#components-alerts');
    var $forms = $('#components-forms');
    var $lists = $('#components-lists');

    $scope.setPlatform('ios');

    var $scrollspy = $('body').scrollspy({
      target: '#components-index'
    });
    $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);

    (function setSubSections() {
      var sections = {
        'components-buttons': null,
        'components-alerts': null,
        'components-cards': null,
        'components-forms': null,
        'components-lists': null
      };
      for (s in sections) {
        var subSections = document.getElementById(s).nextElementSibling.children;
        for (var i = subSections.length - 1; i >= 0; i--) {
          var subSectionName = subSections[i].children[0].href.split('#')[1];
          sections[subSectionName] = s;
        };
      };
      $scope.subSections = sections;
    }());


    function onScrollSpyChange(e) {

      if (e.target.id === 'components-index') {
        return;
      }
      var $hash;
      var $node;
      $hash = $('a[href^="#"]', e.target).attr('href').replace(/^#/, '');
      $node = $('#' + $hash);

      setActive($hash);

      if ($hash.indexOf('button') > -1) {
        $buttons.addClass('active');
      }
      if ($node.length) {
        $node.attr('id', '');
      }
      document.location.hash = $hash;
      $iosIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: $hash
      }), '*');
      $androidIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: $hash
      }), '*');

      if ($node.length) {
        return $node.attr('id', $hash);
      }
    }

    function setActive(hash) {
      // given a url hash, set the correct section to 'active'
      if (hash in $scope.subSections) {
        if ($scope.subSections[hash] === 'components-buttons') {
          $buttons.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-cards') {
          $cards.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-forms') {
          $forms.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-lists') {
          $lists.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-alerts') {
          $alerts.addClass('active');
        }
      }
    }

    (function setUpListeners() {

      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

      // Listen to message from child window
      eventer(messageEvent, function(e) {
        sendCurrentHash(e.data);
      }, false);

      // Listen for scroll events on iframe - don't allow them to bubble to parent
      $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
        ev.preventDefault();
      });

    })();

    function sendCurrentHash(platform) {
      // send the initial hash if possible
      if (platform === 'ios') {
        $iosIframe[0].contentWindow.postMessage(JSON.stringify({
          hash: window.location.hash
        }), '*');
        return;
      }
      $androidIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: window.location.hash
      }), '*');
    };

    // positioning the platform preview appropriately on scroll
    var $platformPreview = $('#platform-preview');
    var $window = $(window);

    $window.scroll(fixyCheck);

    function fixyCheck(a, b, c) {
      if ($window.scrollTop() > 78) {
        $platformPreview.addClass('fixey');
      } else {
        $platformPreview.removeClass('fixey');
      }
    }
  }])
  .controller('APIDemoCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    var $platformPreview = $('#platform-preview');

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
    };

    $scope.setPlatform('ios');

    // Listen for scroll events on iframe - don't allow them to bubble to parent
    $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
      ev.preventDefault();
    });

    var $window = $(window);
    $window.scroll(fixyCheck);

    function fixyCheck(a, b, c) {
      if ($window.scrollTop() > 78) {
        $platformPreview.addClass('fixey');
      } else {
        $platformPreview.removeClass('fixey');
      }
    }
  }])

  .controller('IoniconDocsCtrl', ['$scope', function($scope) {
    document.addEventListener("dataLoaded", function(data){
      $scope.$apply(function(){
        $scope.icons = data['detail'];
      });
    });
    $scope.getIcon = function(iconObj, platform){
      if (iconObj.key.icons.length === 1 || platform === 'ios') {
        return iconObj.key.icons[0]['name']
      }
      if (iconObj.key.icons.length === 2) {
        return iconObj.key.icons[1]['name']
      }
      
      return iconObj.key.icons[2]['name']
    }
  }])

  .directive('delayedPre', [function() {
    return {
      restrict: 'EA',
      compile: function(element, attributes){

          return {
              post: function(scope, element, attributes, controller, transcludeFn){
                var parent = element[0].parentNode;
                var wrapper = document.createElement('pre');
                parent.replaceChild(wrapper, element[0]);
                wrapper.appendChild(element[0]);
              }
          }
      },
    }
  }])

.directive('pre', [function() {
  return {
    restrict: 'E',
    terminal: true,
    priority: 1000
  }
}]);
