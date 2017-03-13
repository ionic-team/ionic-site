var IonicSiteModule = angular.module('IonicSite', ['ngAnimate', 'ngSanitize', 'ionicate'])
.run(['$rootScope', function($rootScope) {
  $rootScope.surveyQuestions = {
    cover: {
      title: 'Help make Ionic better!',
      content: 'We\'ve got 3 quick questions to help us better understand your needs'
    },
    questions: [
      {
        title: 'What kind of developer are you?',
        tag: 'aboutyourself',
        options: [
          {title: 'Novice Developer', tag: 'novice', value: 'novice-dev'},
          {title: 'Expert Developer', tag: 'expert', value: 'expert-dev'},
          {title: 'Designer', tag: 'designer', value: 'designer'},
          {title: 'Product Manager', tag: 'pm', value: 'pm'},
          {title: 'Student', tag: 'student', value: 'student'},
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'What are you building?',
        tag: 'whatyoucreate',
        options: [
          {
            title: 'An app for my company',
            tag: 'appforcompany',
            value: 'for-company'
          },
          {
            title: 'A personal project',
            tag: 'appforpersonal',
            value: 'for-personal'
          },
          {
            title: 'An app for a client',
            tag: 'appforclient',
            value: 'for-client'
          },
          {
            title: 'An app for school',
            tag: 'appforschool',
            value: 'for-school'
          },
          {
            title: 'I\'m just evaluating',
            tag: 'appfornothing',
            value: 'for-nothing'
          },
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'How large is your Employer?',
        tag: 'howlargeco',
        options: [
          {title: 'Self-employed', tag: '1', value: '1'},
          {title: '2-10', tag: '2-10', value: '2-10'},
          {title: '11-50', tag: '11-50', value: '11-50'},
          {title: '51-500', tag: '51-500', value: '51-500'},
          {title: '500+', tag: '500-', value: '500-'}
        ],
        type: 'checkbox',
        limit: 1
      }
    ],
    done: {
      title: 'Thanks!',
      text: 'Keep building awesome apps 🎉'
    },
    contact: {
      ifHasValue: ['howlargeco.2-10', 'howlargeco.11-50', 'howlargeco.51-500', 'howlargeco.500-'],
      title: 'Time to chat?',
      message: "We're finalizing our premium product lineup. Can our product team speak with you live for feedback? Please <a href=\"https://calendly.com/ionic-research/ionic-pkg-research-v1/02-02-2017\" target=\"_blank\">choose a time here</a>."
    }
  };
}])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var navItemPos = $('#side-nav > ul > .active').length ?
                    $('#side-nav > ul > .active').offset().top : null;
  $sideNav = $('#side-nav');
  if ($sideNav[0].offsetHeight < navItemPos + 100) {
    $sideNav[0].scrollTop =  navItemPos - 300;
  }
}])
.controller('SassToggleCtrl', ['$scope', function($scope) {
  $scope.setSassPlatform = function(platform) {
    $scope.active = platform;
  };
}])
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
  // check scroll position on load
  fixyCheck();
}])
.controller('APIDemoCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var $platformPreview = $('#platform-preview');
  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.androidActive = false;
      $scope.windowsActive = false;
      $timeout(function() { $scope.iosActive = true; }, 30);
      return;
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $timeout(function() { $scope.windowsActive = true; }, 30);
      return;
    }
    $scope.iosActive = false;
    $scope.windowsActive = false;
    $timeout(function() { $scope.androidActive = true; }, 30);
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

}])

.controller('ResourcesCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {
    $scope.$evalAsync(function() {
      $scope.hash = window.location.hash.substr(2).split('?')[0];
    });
  });
}])

.controller('PromoReserveCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.launched = false;
  $scope.showSurvey = false;
  $scope.submitting = false;
  $scope.thanks = false;

  $scope.submit = function() {
    $scope.submitting = true;
    $http.post('http://survey.apis.ionicjs.com/reservespot/' + $scope.form.campaign, {
      email: $scope.form.email,
      meta: {
        name: $scope.form.name,
        phone: $scope.form.phone,
        company: $scope.form.company,
        role: $scope.form.role,
        companySize: $scope.form.companySize
      }
    }).then(function(res) {
      $scope.thanks = true;
      $scope.submitting = false;
      $scope.showSurvey = true;
    }, function(err) {
      $scope.submitting = false;
      var msg = 'Unable to reserve spot. Please contact help@ionic.io (see ' +
        'console for more info)';
      alert(msg);
      console.error(err);
      $scope.showSurvey = true;
    });
  };
}])

.controller('PricingPageCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $timeout(function() {
    $scope.showSurvey = true;
  }, 2000);

  $scope.finishedSurvey = function(results) {

    $http.post('http://survey.apis.ionicjs.com/survey/', {
      campaign: 'pricing_v1',
      results: results,
    }).then(function(resp) {
    }).catch(function(err) {
      console.error('Unable to save survey', err);
    });
  };

  $scope.closedSurvey = function() {
    $scope.showSurvey = false;
  };
}])

.controller('PricingFormCtrl', ['$scope', '$http', '$timeout', 
  function($scope, $http, $timeout) {

  $scope.submit = function(form) {
    window.history.push('submitting');
    var cleanForm = {
      table: 'nick_sdlc_030917',
      data: JSON.parse(JSON.stringify(form))
    }
    cleanForm.data.unused_features = Object.keys(form.unused_features).join(', ');

    $http.post('https://apps.ionic.io/api/discovery', cleanForm).then(function(resp) {
      alert('Thanks!');
      $('#modal-close').click();
      window.history.push('submitted');
      $scope.form = {};
    }).catch(function(err) {
      window.history.push('submission error');
      console.error('Unable to save survey', err);
    });
  };
}])

.controller('PricingReserveCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.launched = false;
  $scope.showSurvey = false;
  $scope.submitting = false;
  $scope.thanks = false;

  $scope.form = {};

  function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  var params = getJsonFromUrl();

  $scope.submit = function() {
    $scope.submitting = true;
    $http.post('http://survey.apis.ionicjs.com/reservespot/v1pricing', {
      email: $scope.form.email,
      meta: {
        plan: params['p']
      }
    }).then(function(res) {
      $scope.thanks = true;
      $scope.submitting = false;
      $scope.showSurvey = true;
    }, function(err) {
      $scope.submitting = false;
      var msg = 'Unable to reserve spot. Please contact help@ionic.io (see ' +
        'console for more info)';
      alert(msg);
      console.error(err);
      $scope.showSurvey = true;
    });
  };
  $scope.submitContact = function() {
    $scope.submitting = true;
    $http.post('http://survey.apis.ionicjs.com/leadgen/v1pricing', {
      email: $scope.form.email,
      name: $scope.form.name,
      phone: $scope.form.phone,
      company: $scope.form.company,
      role: $scope.form.role
    }).then(function(res) {
      $scope.thanks = true;
      $scope.submitting = false;
      $scope.showSurvey = true;
    }, function(err) {
      $scope.submitting = false;
      var msg = 'Unable to reserve spot. Please contact help@ionic.io (see ' +
        'console for more info)';
      alert(msg);
      console.error(err);
      $scope.showSurvey = true;
    });
  };

  $scope.finishedSurvey = function(results) {

    $http.post('http://survey.apis.ionicjs.com/survey/', {
      email: $scope.form.email,
      campaign: 'pricing_v1',
      results: results,
    }).then(function(resp) {
    }).catch(function(err) {
      console.error('Unable to save survey', err);
    });
  };

  $scope.closedSurvey = function() {
    $scope.showSurvey = false;
  };
}])

.controller('platformCtrl', ['$scope', '$window', '$timeout',
function($scope, $window, $timeout) {

  // Push Notifications Dots Animation
  $scope.dots = [
    { 'x': 366, 'y': 122 },
    { 'x': 707, 'y': 323 },
    { 'x': 262, 'y': 315 },
    { 'x': 672, 'y': 166 },
    { 'x': 393, 'y': 227 },
    { 'x': 104, 'y': 165 },
    { 'x': 166, 'y': 131 },
    { 'x': 471, 'y': 105 },
    { 'x':  95, 'y': 131 },
    { 'x':  43, 'y':  87 },
    { 'x': 148, 'y': 174 },
    { 'x': 200, 'y': 149 },
    { 'x': 191, 'y': 183 },
    { 'x': 122, 'y': 149 },
    { 'x': 174, 'y': 156 },
    { 'x': 139, 'y': 201 },
    { 'x': 139, 'y': 113 },
    { 'x': 209, 'y': 226 },
    { 'x': 209, 'y': 279 },
    { 'x': 209, 'y': 358 },
    { 'x': 253, 'y': 236 },
    { 'x': 244, 'y': 271 },
    { 'x': 226, 'y': 322 },
    { 'x': 288, 'y': 279 },
    { 'x': 366, 'y': 157 },
    { 'x': 349, 'y': 218 },
    { 'x': 401, 'y': 175 },
    { 'x': 401, 'y': 122 },
    { 'x': 393, 'y':  87 },
    { 'x': 410, 'y': 105 },
    { 'x': 418, 'y': 140 },
    { 'x': 437, 'y': 157 },
    { 'x': 366, 'y': 192 },
    { 'x': 427, 'y': 184 },
    { 'x': 454, 'y': 174 },
    { 'x': 436, 'y': 323 },
    { 'x': 410, 'y': 297 },
    { 'x': 480, 'y': 297 },
    { 'x': 480, 'y': 210 },
    { 'x': 541, 'y': 210 },
    { 'x': 611, 'y': 210 },
    { 'x': 620, 'y': 192 },
    { 'x': 471, 'y': 244 },
    { 'x': 437, 'y': 261 },
    { 'x': 445, 'y': 219 },
    { 'x': 436, 'y': 122 },
    { 'x': 497, 'y': 192 },
    { 'x': 497, 'y': 157 },
    { 'x': 523, 'y': 174 },
    { 'x': 541, 'y': 130 },
    { 'x': 428, 'y':  87 },
    { 'x': 471, 'y': 139 },
    { 'x': 567, 'y': 200 },
    { 'x': 584, 'y': 165 },
    { 'x': 628, 'y': 113 },
    { 'x': 689, 'y': 156 },
    { 'x': 655, 'y': 156 },
    { 'x': 636, 'y': 166 },
    { 'x': 647, 'y': 192 },
    { 'x': 681, 'y': 253 },
    { 'x': 646, 'y': 253 },
    { 'x': 619, 'y': 245 },
    { 'x': 602, 'y': 253 },
    { 'x': 637, 'y': 314 },
    { 'x': 681, 'y': 288 },
    { 'x': 759, 'y': 350 },
    { 'x': 689, 'y':  96 },
    { 'x': 400, 'y': 150 },
    { 'x': 611, 'y': 140 }
  ];

  function activateDot(i) {
    $timeout(function() {
      $scope.dots[i].status = 'active';
      $timeout(function() {
        $scope.dots[i].status = '';
        activateDot(i);
      }, 1500);
    }, Math.random() * $scope.dots.length * 500);
  };

  for (var i = 0; i < $scope.dots.length; i++) {
    activateDot(i);
  }

  // Native Packaging Animation
  var numOfDots = 10;
  var animationLenth = 2500; // ms
  var boxPause = 5; // how many dots worth is the gap
  var activationLength = animationLenth / numOfDots * 1.5; // ms
  var animationMultiplier = .01 * (numOfDots - boxPause) * animationLenth;

  $scope.circles = [];
  for (var i = 0; i < numOfDots; i++) {
    $scope.circles[i] = '';
  }

  function activateCircle(i, delay) {
    $timeout(function() {
      $scope.circles[i] = 'active';
      $timeout(function() {
        $scope.circles[i] = '';
        //activateCircle(i, animationLenth);
        // ^ I don't trust comp time not to ruin the timing over a few mins
        // using setInterval instead
      }, activationLength);
    }, delay);
  }
  function runPackageAnimation() {
    for (var i = 0; i < numOfDots; i++) {
      var d = i;
      if (i > numOfDots / 2 - 1) {
        d = d + boxPause;
      }
      activateCircle(i, d * animationMultiplier);
    }
    $timeout(function() {
      $scope.packageBoxStyle = 'active';
      $timeout(function() {
        $scope.packageBoxStyle = '';
      }, activationLength * (boxPause / 2));
    }, (numOfDots / 2 + 1) * animationMultiplier);
  };
  runPackageAnimation();
  setInterval(runPackageAnimation, animationLenth);

  // Live Updates Changes Animation
  var h = Math.max(document.documentElement.clientHeight,
                   window.innerHeight || 0);
  var hasStarted = false;
  var triggerOffset = 0;

  var $updates = document.getElementById('updates');
  var $auth = document.getElementById('authentication');
  $scope.updatesShown = false;

  $window.onscroll = function() {
    if (hasStarted) {
      return;
    }
    var scrollPos = document.body.scrollTop ||
                    document.documentElement.scrollTop ||
                    0;

    var updatesRect = $updates.getBoundingClientRect();
    if (h - updatesRect.bottom + triggerOffset > 0 && !$scope.updatesShown) {
      startUpdatesAnimation();
      hasStarted = true;
    };

    var authRect = $auth.getBoundingClientRect();
    if (h - authRect.bottom + 400 > 0 && !$scope.authShown) {
      $scope.authShown = true;
    };
  };

  $window.onscroll();

  var changeLength = 5000;

  function queueChat(change, delay) {
    $timeout(function() {
      $scope[change + 'Chat'] = 'load';
      $timeout(function() {
        $scope[change + 'Chat'] = 'dismiss';
      },changeLength);
    }, delay * 1000);
  };
  function queuePage(change, delay) {
    $timeout(function() {
      $scope[change + 'Page'] = 'load';
    }, delay * 1000);
  };
  function revertPages(delay) {
    $timeout(function() {
      revertPage('profile', 0.9);
      revertPage('likes', 0.6);
      revertPage('tabs', 0.3);
      revertPage('color', 0);
    }, delay * 1000);
  }
  function revertChats(delay) {
    $timeout(function() {
      revertChat('profile');
      revertChat('likes');
      revertChat('tabs');
      revertChat('color');
      revertChat('revert');
    }, delay * 1000);
  }
  function revertPage(change, delay) {
    $timeout(function() {
      $scope[change + 'Page'] = '';
    }, delay * 1000);
  };
  function revertChat(change) {
    $scope[change + 'Chat'] = '';
  };
  function queueChange(change, delay) {
    queueChat(change, delay);
    queuePage(change, delay + 1);
  }
  function startUpdatesAnimation() {
    queueChange('profile', 0);
    queueChange('likes', 5);
    queueChange('tabs', 10);
    queueChange('color', 15);
    queueChat('revert', 20);
    revertPages(22.5);
    revertChats(25);
    $timeout(startUpdatesAnimation, 25500);
  }

}]);
