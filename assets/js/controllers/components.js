IonicSiteModule
.controller('ComponentsCtrl', ['$scope', '$timeout',
                       function($scope, $timeout) {
  var $androidIframe = $('iframe#demo-android');
  var $iosIframe = $('iframe#demo-ios');
  var $windowsIframe = $('iframe#demo-windows');

  var sectionsWithChildrenSimple = ['buttons', 'cards', 'alerts', 'forms',
                                    'lists', 'tabs', 'toolbar'];
  var sectionsWithChildren = {};
  for (i in sectionsWithChildrenSimple) {
    var section = sectionsWithChildrenSimple[i];
    sectionsWithChildren[section] = $('#components-' + section);
  }

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

  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.androidActive = false;
      $scope.windowsActive = false;
      $timeout(function() {
        $scope.iosActive = true;
      }, 30);
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $timeout(function() {
        $scope.windowsActive = true;
      }, 30);
    } else {
      $scope.iosActive = false;
      $scope.windowsActive = false;
      $timeout(function() {
        $scope.androidActive = true;
      }, 30);
    }
  };

  $scope.setPlatform('ios');

  var $scrollspy = $('body').scrollspy({
    target: '#components-index'
  });

  $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);

  (function setSubSections() {
    var sections = {};
    for (s in sectionsWithChildren) {
      // skip loop if the property is from prototype
      if (!sectionsWithChildren.hasOwnProperty(s)) {
        continue;
      }
      var subSections = sectionsWithChildren[s][0].nextElementSibling.children;
      for (var i = subSections.length - 1; i >= 0; i--) {
        var subSectionName = subSections[i].children[0].href.split('#')[1];
        sections[subSectionName] = s;
      };
    };
    $scope.subSections = sections;
  }());

  var $hash;
  var $node;

  function onScrollSpyChange(e) {
    if (e.target.id === 'components-index') {
      return;
    }
    $hash = $('a[href^="#"]', e.target).attr('href').replace(/^#/, '');
    $node = $('#' + $hash);

    setActive($hash);

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
    if (hash in $scope.subSections &&
        $scope.subSections[hash] in sectionsWithChildren) {
      $timeout(function() {
        sectionsWithChildren[$scope.subSections[hash]].addClass('active');
      });
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
      return;
    }
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: window.location.hash
    }), '*');
  };

  $(document).ready(function() {
    $previousOffset = -1;
    $header = $('#components-header');

    var $sectionLabel = $header.find('h3');
    var $subSectionLabel = $header.find('h4');

    var $subSectionTop = $subSectionLabel.find('.top');
    var $subSectionMiddle = $subSectionLabel.find('.middle');
    var $subSectionBottom = $subSectionLabel.find('.bottom');

    var subSectionChangeQueue = [];
    var transitioning = false;
    var currentSubSection = null;

    function enqueueSubSectionChange(subSection, direction) {
      subSectionChangeQueue.push({
        subSection: subSection,
        direction: direction
      });

      resumeSubSectionTransition();
    }

    function transitionSubSection(subSection, previousContainer, nextContainer, callback) {
      previousContainer.text($subSectionMiddle.text()).addClass('middle').addClass('no-transition');
      $subSectionMiddle.text('');
      nextContainer.text(subSection);

      setTimeout(function() {
        previousContainer.removeClass('middle').removeClass('no-transition');
        nextContainer.addClass('middle');

        setTimeout(function() {
          previousContainer.text('');
          $subSectionMiddle.text(subSection);
          nextContainer.text('').removeClass('middle');

          setTimeout(function() {
            callback();
          }, 300);
        }, 300);
      }, 0);
    }

    function resumeSubSectionTransition() {
      if (transitioning || subSectionChangeQueue.length === 0) return;

      // Optimize by removing any lengthy intermediate transitions
      if (subSectionChangeQueue.length >= 2) {
        subSectionChangeQueue.splice(1, subSectionChangeQueue.length - 1);
      }

      var change = subSectionChangeQueue.shift();
      var subSection = change.subSection;

      if (subSection === currentSubSection) {
        resumeSubSectionTransition();

        return;
      }

      transitioning = true;
      currentSubSection = subSection;

      (function(callback) {
        if (change.direction < 0) {
          transitionSubSection(subSection, $subSectionTop, $subSectionBottom, callback);
        } else {
          transitionSubSection(subSection, $subSectionBottom, $subSectionTop, callback);
        }
      })(function() {
        transitioning = false;

        resumeSubSectionTransition();
      });
    }

    $componentsIndex = $('#components-index').on('activate.bs.scrollspy', function(event) {
      var target = $(event.target);

      if (target.get(0) === $componentsIndex.get(0)) {
        // If the target is the entire components index, ignore it.

        return;
      }

      if (!target.hasClass('nav-item-hidden')) {
        // A new section was entered, so clear the sub-section label
        $sectionLabel.text(target.text());
        $subSectionLabel.addClass('not-shown');

        $previousOffset = -1;
      } else {
        var offset = target.index();
        var direction = offset > $previousOffset ? -1 : 1; // -1 for down, 1 for up

        // It navigated to a sub-section, so determine the parent section as well
        $sectionLabel.text(target.parent().prev().text());
        $subSectionLabel.removeClass('not-shown');

        enqueueSubSectionChange(target.text(), direction);

        $previousOffset = offset;
      }
    });
  });

  // positioning the platform preview appropriately on scroll
  var $platformPreview = $('#platform-preview');
  var $window = $(window);
  $window.scroll(fixyCheck);
  var snapBarOffset = $(document.body).hasClass("has-snap") ? 38 : 0;

  function fixyCheck(a, b, c) {
    if ($window.scrollTop() > 78 + snapBarOffset) {
      $platformPreview.addClass('fixey');
    } else {
      $platformPreview.removeClass('fixey');
    }
  }
  // check scroll position on load
  fixyCheck();
}]);
