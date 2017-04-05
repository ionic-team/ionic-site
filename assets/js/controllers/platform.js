IonicSiteModule
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

}])
