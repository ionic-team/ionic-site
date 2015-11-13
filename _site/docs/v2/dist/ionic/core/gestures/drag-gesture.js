System.register("ionic/core/gestures/drag-gesture", ["./gesture", "../../util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/core/gestures/drag-gesture";
  var Gesture,
      util,
      DragGesture;
  return {
    setters: [function($__m) {
      Gesture = $__m.Gesture;
    }, function($__m) {
      util = $__m;
    }],
    execute: function() {
      DragGesture = $__export("DragGesture", (function($__super) {
        var DragGesture = function DragGesture(element) {
          var opts = arguments[1] !== (void 0) ? arguments[1] : {};
          util.extend(this, {
            onDrag: opts.onDrag,
            onDragEnd: opts.onDragEnd,
            onDragStart: opts.onDragStart
          });
          $traceurRuntime.superConstructor(DragGesture).call(this, element, opts);
        };
        return ($traceurRuntime.createClass)(DragGesture, {listen: function() {
            var $__0 = this;
            $traceurRuntime.superGet(this, DragGesture.prototype, "listen").call(this);
            console.log('listening');
            this.hammertime.on('panstart', (function(ev) {
              console.log('panstart');
              if ($__0.onDragStart && $__0.onDragStart(ev) !== false) {
                $__0.dragging = true;
              }
            }));
            this.hammertime.on('panmove', (function(ev) {
              console.log('panmove');
              if (!$__0.dragging)
                return ;
              if ($__0.onDrag && $__0.onDrag(ev) === false) {
                $__0.dragging = false;
              }
            }));
            this.hammertime.on('panend', (function(ev) {
              console.log('panend');
              if (!$__0.dragging)
                return ;
              $__0.onDragEnd && $__0.onDragEnd(ev);
              $__0.dragging = false;
            }));
          }}, {}, $__super);
      }(Gesture)));
    }
  };
});
