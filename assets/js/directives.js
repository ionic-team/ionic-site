IonicSiteModule
.directive('tippy', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      pos: '@'
    },
    template: '<i class="ion-md-help"></i>' +
              '<div class="tip" ng-class="pos">' +
                '<ng-transclude></ng-transclude>' +
              '</div>',
  };
})
.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter, {'event': event});
        });
        event.preventDefault();
      }
    });
  };
})
// .directive('barChart', [function() {
//   return {
//     restrict: 'E',
//     scope: {
//       data: '='
//     },
//     compile: function(el, attrs) {
//       return {
//         post: function(scope, element, $attrs) {

//           if (!scope.data.data && !scope.categories) {
//             var data = Object.keys(scope.data).map(function(k) {
//               return {label: k, value: scope.data[k]};
//             }).sort(function(a, b) {
//               if(a.value < b.value) return 1;
//               if(a.value > b.value) return -1;
//               return 0;
//             });

//             var bars = ['data1'].concat(data.map(function(bar) {
//               return bar.value;
//             }));
//             var labels = data.map(function(bar) {
//               return bar.label;
//             });

//             var chart = c3.generate({
//               bindto: el[0],
//               data: {
//                 columns: [ bars ],
//                 type: 'bar',
//                 labels: {
//                   show: true,
//                   format: function(v) { return v + '%'; }
//                 },
//                 colors: {
//                   data1: '#4a8bfc'
//                 },
//               },
//               padding: {
//                 left: 250,
//               },
//               size: {
//                 height: 20 * labels.length
//               },
//               bar: {
//                 width: {
//                   ratio: 0.2 // this makes bar width 50% of length between ticks
//                 }
//               },
//               axis: {
//                 rotated: true,
//                 x: {
//                   type: 'category',
//                   categories: labels,
//                   tick: {
//                     multiline: false,
//                     outer: false
//                   },
//                   height: 50,
//                   width: 200
//                 },
//                 y: {
//                   show: false
//                 }
//               },
//               legend: {
//                 show: false
//               },
//               tooltip: {
//                 show: false
//               }
//             });
//             return;
//           }

//           var colors = {};
//           scope.data.data.forEach(function(bar, i) {
//             colors['data' + (i + 1)] = bar.color;
//           });
//           var columns = scope.data.data.map(function(k, i) {
//             return ['data' + (i + 1)].concat(k.values);
//           })
//           names = {};
//           scope.data.data.forEach(function(bar, i) {
//             names['data' + (i + 1)] = bar.name;
//           });

//           // console.log(colors, columns)

//           var chart = c3.generate({
//             bindto: el[0],
//             data: {
//               columns: columns,
//               type: 'bar',
//               labels: {
//                 show: true,
//                 format: function(v) { return v + '%'; }
//               },
//               colors: colors,
//               names: names
//             },
//             bar: {
//               width: {
//                 ratio: 0.8 // this makes bar width 50% of length between ticks
//               }
//             },
//             grid: {
//               y: {
//                 show: true
//               }
//             },
//             axis: {
//               x: {
//                 type: 'category',
//                 categories: scope.data.categories,
//                 tick: {
//                   multiline: false,
//                   outer: false
//                 },
//                 height: 50,
//                 width: 200
//               },
//               y: {
//                 tick: {
//                   format: function(v) { return v + '%'; }
//                 }
//               }
//             },
//             legend: {
//               show: true
//             },
//             tooltip: {
//               show: false
//             }
//           });
//         }
//       }
//     }
//   }
// }])

;
