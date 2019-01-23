System.register("ionic/core/gestures/edge-drag-gesture", ["./drag-gesture"], function($__export) {
  "use strict";
  var __moduleName = "ionic/core/gestures/edge-drag-gesture";
  var DragGesture,
      EdgeDragGesture;
  return {
    setters: [function($__m) {
      DragGesture = $__m.DragGesture;
    }],
    execute: function() {
      EdgeDragGesture = (function($__super) {
        var EdgeDragGesture = function EdgeDragGesture() {
          $traceurRuntime.superConstructor(EdgeDragGesture).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(EdgeDragGesture, {}, {}, $__super);
      }(DragGesture));
    }
  };
});
