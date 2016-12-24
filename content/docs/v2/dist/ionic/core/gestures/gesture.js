System.register("ionic/core/gestures/gesture", ["../../util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/core/gestures/gesture";
  var util,
      Gesture;
  return {
    setters: [function($__m) {
      util = $__m;
    }],
    execute: function() {
      Gesture = $__export("Gesture", (function() {
        var Gesture = function Gesture(element) {
          var opts = arguments[1] !== (void 0) ? arguments[1] : {};
          this.element = element;
          this._options = opts;
        };
        return ($traceurRuntime.createClass)(Gesture, {
          options: function() {
            var opts = arguments[0] !== (void 0) ? arguments[0] : {};
            util.extend(this._options, opts);
          },
          listen: function() {
            this.hammertime = Hammer(this.element, this._options);
          },
          unlisten: function() {
            this.hammertime.destroy();
            this.hammertime = null;
          },
          destroy: function() {
            this.hammertime.destroy();
          }
        }, {});
      }()));
    }
  };
});
