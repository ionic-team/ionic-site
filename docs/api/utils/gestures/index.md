---
layout: "api_0.9.0"
title: "Gestures"
header_sub_title: "Touch interaction for your apps"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>

Gestures
===

Ionic supports a wide range of gestures that can be listened for and acted upon in your own code. The great thing is they also support mouse events mapped to tap events for easy desktop testing.

We have ported over the wonderful [Hammer.js](http://eightmedia.github.io/hammer.js/) library and tweaked it to fit in nicely with Ionic.

## Ionic-Angular Support

To use the Gesture service in your Angular directives, just inject `Gesture`:

```javascript
angular.module('myModule', [])

.directive('myDirective', function(Gesture) {
  return {
    // Other directive stuff ...

    link: function($scope, $element, $attr) {
      var handleDrag = function(e) {
        // Access e.gesture for gesture related information
        console.log('Drag: ', e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.deltaX, e.gesture.deltaY);
      };
  
      Gesture.on('drag', handleDrag);

      $scope.$on('$destroy', function() {
        // Unbind drag gesture handler
        Gesture.off('drag', handleDrag);
      });
    }
  }
});
```
