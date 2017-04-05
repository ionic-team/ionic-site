IonicSiteModule
.controller('PricingReserveCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.launched = false;
  $scope.showSurvey = false;
  $scope.submitting = false;
  $scope.thanks = false;

  $scope.form = {};

  function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split('&').forEach(function(part) {
      var item = part.split('=');
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
        plan: params.p
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
}]);
