IonicSiteModule
.controller('PricingFormCtrl', ['$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {

  $scope.section = 1;
  $scope.form = {};

  $scope.nextSection = function(form) {
    $scope.section++;
    if ($scope.section == 3) {
      $scope.section++;
    }
    $scope.submit(form);
  };

  $scope.submit = function(form) {
    window.c('Pricing', 'FormStep', null, $scope.section);
    $(':focus').blur();
    console.info('SUBMITTING FORM');
    var cleanForm = {
      table: 'nick_sdlc_030917',
      data: JSON.parse(JSON.stringify(form))
    };

    if (form.unused_features) {
      cleanForm.data.unused_features = Object.keys(form.unused_features)
                                             .join(', ');
    }

    function trackMixpanel() {
      var step_descs = ['emailname', 'important', 'lesser'];
      mixpanel.track('Survey Checkpoint', {'test': 'ProductsTest - 5', 'step_desc': step_descs[$scope.section-2], 'step_order': $scope.section-1});
      if ($scope.section == 4) {
        mixpanel.track('Survey Finished', {'test': 'ProductsTest - 5'});
      }
    }

    if (form.uuid) {
      $http.patch('https://apps.ionic.io/api/discovery/' + form.uuid, cleanForm).then(function(resp) {

        trackMixpanel();

        if ($scope.section == 4) {
          // We're done with the form!!
          $scope.form = {};
          window.c('Pricing', 'FormSubmit');
        } else {
          // We're NOT done yet.
        }
      }).catch(function(err) {
        window.c('Pricing', 'FormError');
        console.error('Unable to save survey', err);
      });
    } else {
      if (!cleanForm.data.email) {
        alert('Please enter your email');
        return $scope.section--;
      }
      $http.post('https://apps.ionic.io/api/discovery', cleanForm).then(function(resp) {

        trackMixpanel();

        // We've only filled out Name & Email so far. Store the UUID for updating next time.
        form.uuid = resp.data.uuid;

        window.c('Pricing', 'FormSuccess');
        console.info('RESP', resp);

      }).catch(function(err) {
        window.c('Pricing', 'FormError');
        console.error('Unable to save survey', err);
      });
    }

  };
}]);
