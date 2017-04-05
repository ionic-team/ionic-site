IonicSiteModule
.controller('trustedPartnersCtrl', ['$scope', '$sce', '$timeout' ,
function($scope, $sce, $timeout) {
  var mapsURL = 'https://maps.google.com/maps?ie=UTF8&gl=pl&t=m&z=10';
  mapsURL += '&iwloc=A&output=embed&q=';
  // cache static selectors
  var $modal = $('#tp-learn-more');
  var $modalBtn = $modal.find('a.btn.ionic');
  var $companyInfo = $modal.find('#company-info');
  var $features = $modal.find('.features');
  var $address = $modal.find('address');
  var $iframe = $modal.find('iframe');
  var $logo = $modal.find('.logo');
  var $caseStudies = $modal.find('#case-studies');
  var activePartnerInMapEl = null;

  $scope.learnMore = function(e) {

    if (typeof e === 'string') {
      var $modalInfo = $('#tp-list .' + e).find('.modal-info');
    } else if (!e || !e.target.parentElement) {
      return;
    } else {
      var $modalInfo = $(e.target).parent().find('.modal-info');
    }

    var $newAddress = $modalInfo.find('address');
    var $newCaseStudy = $modalInfo.find('.case-studies').html();
    $scope.hasCaseStudy = $newCaseStudy.length;
    $scope.selectedCompany = $modalInfo.data('name');

    $logo.removeClass().addClass('logo ' + $modalInfo.data('handle'));
    $companyInfo.html($modalInfo.find('.company-info').html());
    if ($scope.hasCaseStudy) {
      $caseStudies.html($modalInfo.find('.case-studies').html());
    }
    $features.html($modalInfo.find('.features').html());
    $address.html($newAddress.html());
    console.log($newAddress.html());
    $iframe.attr('src', mapsURL + $newAddress.html()
      .replace(/<\/?strong>/g, '')
      //.replace(/<strong>.+<\/strong>/g, '')
      .replace(/<br>/g, ',+')
      .replace(/(\r\n|\n|\r)/gm, ',+')
      .replace(/\s+/g, '+')
      .replace(' ', '+'));
    console.log($iframe.attr('src'));
    $scope.showContact = false;

    $timeout(function() {
      $modal.modal();
      $scope.selectedCompany = $modalInfo.data('name');
    });
  };

  $modal.on('hidden.bs.modal', function() {
    $companyInfo.html('');
    $features.html('');
    $address.html('');
    $iframe.attr('src', mapsURL);
    $scope.showContact = false;
  });
}])
