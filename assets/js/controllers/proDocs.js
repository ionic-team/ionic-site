IonicSiteModule
.controller('ProDocsCtrl', ['$scope', '$timeout', 'ionicMetrics',
  function($scope, $timeout, ionicMetrics) {
    $scope.sections = {
      intro: false,
      view: false,
      deploy: false,
      package: false,
      monitoring: false,
      devapp: false,
      advanced: false
    }

    $scope.toggle = function(section) {
      $scope.sections[section] = !$scope.sections[section];
      for(var i in $scope.sections) {
        if(i != section) {
          $scope.sections[i] = false;
        }
      }
    }

    var linkData = {
      campaign: 'DevApp Docs',
      channel: 'ionic-site'
    };
    var linkOptions = {
      make_new_link: false // don't create a new deep link if one already exists (e.g. _branch_match_id is in the address bar)
    };

    $('#branch-sms-form').submit(function() {
      var phoneNumber = $('#branch-phone-no').val();
      console.log('Texting to', phoneNumber);
      branch.sendSMS(phoneNumber, linkData, linkOptions, function(err, data) {
        if(err) {
          console.log(err);
        } else {
          $('#branch-phone-no').val('');
        }
      });
      return false;
    });
  }
]);
