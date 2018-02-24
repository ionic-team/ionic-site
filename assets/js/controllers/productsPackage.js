IonicSiteModule
.controller('productsPackageCtrl', ['$scope', '$timeout', function($scope, $timeout) {

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

}])