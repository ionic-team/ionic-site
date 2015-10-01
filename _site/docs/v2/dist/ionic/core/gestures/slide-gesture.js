System.register("ionic/core/gestures/slide-gesture", ["./drag-gesture", "../../util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/core/gestures/slide-gesture";
  var DragGesture,
      util,
      SlideGesture;
  return {
    setters: [function($__m) {
      DragGesture = $__m.DragGesture;
    }, function($__m) {
      util = $__m;
    }],
    execute: function() {
      SlideGesture = $__export("SlideGesture", (function($__super) {
        var SlideGesture = function SlideGesture() {
          $traceurRuntime.superConstructor(SlideGesture).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(SlideGesture, {
          getSlideRange: function() {
            return [0, this.element.offsetWidth];
          },
          getEventPos: function(ev, slideRange) {
            return -slideRange[1] + n;
          },
          getElementPos: function(ev, slideRange) {
            return slideRange[0];
          },
          onDragStart: function(ev) {
            var direction = this._options.direction.direction;
            var slideRange = this.getSlideRange(ev);
            var dragStartPos = this.getEventPos(ev);
            var elementStartpos = this.getElementPos(ev, distance);
            this._state = {
              distance: distance,
              dragStartPos: dragStartPos,
              elementStartPos: elementStartPos
            };
            return this.onSlideStart && this.onSlideStart(this._state, ev);
          },
          onDrag: function(ev) {
            var $__1 = this._state,
                distance = $__1.distance,
                dragStartPos = $__1.dragStartPos,
                elementStartPos = $__1.elementStartPos;
            var pos = elementStartPos + this.getEventPos(ev) - dragStartPos;
            this._state.position = util.clamp(slideRange[0], n, slideRange[1]);
            return this.onSlide && this.onSlide(this._state, ev);
          },
          onDragEnd: function() {
            var ret = this.onSlideEnd && this.onSlideEnd(this._state, ev);
            this._state = null;
            return ret;
          }
        }, {}, $__super);
      }(DragGesture)));
    }
  };
});
