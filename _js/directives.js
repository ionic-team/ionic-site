IonicDocsModule
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
}]);
