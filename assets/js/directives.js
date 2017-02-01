IonicSiteModule
// .directive('delayedPre', [function() {
//   return {
//     restrict: 'EA',
//     compile: function(element, attributes) {
//
//       return {
//         post: function(scope, element, attributes, controller, transcludeFn) {
//           var parent = element[0].parentNode;
//           var wrapper = document.createElement('pre');
//           parent.replaceChild(wrapper, element[0]);
//           wrapper.appendChild(element[0]);
//         }
//       };
//     },
//   };
// }])
.directive('pre', [function() {
  return {
    restrict: 'E',
    terminal: window.isIoniconsPage ? false : true,
    priority: 1000
  };
}])
.directive('qtt', function() {
  return {
    restrict: 'E',
    template: '<button type="button" ' +
                      'class="btn btn-default question" ' +
                      'data-toggle="tooltip" ' +
                      'data-placement="right">' +
                '<i class="ion-ios-help"></i>' +
              '</button>',
    scope: {
      title: '@'
    },
    link: function($scope, $element, $attr) {
      var c = $element.children().first();
      c.tooltip({container: 'body', title: $scope.title});
    }
  };
});
