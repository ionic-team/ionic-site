IonicSiteModule
.controller('PromoReserveCtrl', ['$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {

  $scope.launched = false;
  $scope.showSurvey = false;
  $scope.submitting = false;
  $scope.thanks = false;

  $scope.submit = function() {
    $scope.submitting = true;
    $http.post('http://survey.apis.ionicjs.com/reservespot/' +
      $scope.form.campaign, {

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
}]);
