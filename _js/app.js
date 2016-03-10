var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.test = function() {
    console.log($scope);
  };
}])
.controller('ComponentsCtrl', ['$scope', '$timeout',
                                function($scope, $timeout) {
  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.iosActive = true;
      $scope.androidActive = false;
      $scope.windowsActive = false;
      $('#demo-device-android').css('display', 'none');
      $('#demo-device-ios').css('display', 'block');
      $('#demo-device-windows').css('display', 'none');
      return;
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $scope.windowsActive = true;
      $('#demo-device-android').css('display', 'none');
      $('#demo-device-ios').css('display', 'none');
      $('#demo-device-windows').css('display', 'block');
      return;
    }
    $scope.iosActive = false;
    $scope.androidActive = true;
    $scope.windowsActive = false;
    $('#demo-device-ios').css('display', 'none');
    $('#demo-device-android').css('display', 'block');
    $('#demo-device-windows').css('display', 'none');
  };
  var $androidIframe = $('iframe#demo-android');
  var $iosIframe = $('iframe#demo-ios');
  var $windowsIframe = $('iframe#demo-windows');
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
  var $hash;
  var $node;
  var updateIframe =  debounce(function() {
    $iosIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
    $windowsIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
  }, 500);
  function onScrollSpyChange(e) {
    if (e.target.id === 'components-index') {
      return;
    }
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
    updateIframe();
    if ($node.length) {
      return $node.attr('id', $hash);
    }
  }
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };
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
    var evMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var eventer = window[evMethod];
    var messageEvent = evMethod == 'attachEvent' ? 'onmessage' : 'message';
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
    } else if (platform === 'windows') {
      $windowsIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: window.location.hash
      }), '*');
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
      $scope.windowsActive = false;
      $('#demo-device-android').css('display', 'none');
      $('#demo-device-windows').css('display', 'none');
      $('#demo-device-ios').css('display', 'block');
      return;
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $scope.windowsActive = true;
      $('#demo-device-android').css('display', 'none');
      $('#demo-device-ios').css('display', 'none');
      $('#demo-device-windows').css('display', 'block');
      return;
    }
    $scope.iosActive = false;
    $scope.androidActive = true;
    $scope.windowsActive = false;
    $('#demo-device-ios').css('display', 'none');
    $('#demo-device-windows').css('display', 'none');
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
    console.log(iconObj);
    if (iconObj === undefined) {
      console.log('undefined');
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
