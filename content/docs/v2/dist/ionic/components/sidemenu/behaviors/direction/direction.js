System.register("ionic/components/sidemenu/behaviors/direction/direction", ["../../sidemenu", "../../../../util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/sidemenu/behaviors/direction/direction";
  var sideMenuConfig,
      util;
  return {
    setters: [function($__m) {
      sideMenuConfig = $__m.sideMenuConfig;
    }, function($__m) {
      util = $__m;
    }],
    execute: function() {
      sideMenuConfig.when((function(instance) {
        return instance.side === 'bottom';
      })).mixin(function() {
        var $__0 = this;
        this.gesture.options({direction: Hammer.DIRECTION_VERTICAL});
        this.domElement.classList.add('bottom');
        util.extend(this.dragMethods, {
          getMenuStart: (function(drag, ev) {
            return $__0.isOpen ? -drag.height : 0;
          }),
          onDrag: (function(drag, ev) {
            drag.pos = util.clamp(0, -drag.menuStart + drag.pointerStart - ev.center.y, drag.height);
            $__0.domElement.style.transform = 'translate3d(0,' + (drag.height - drag.pos) + 'px,0)';
          }),
          onEnd: (function(drag, ev) {
            $__0.setOpen(drag.pos > drag.height / 2);
            $__0.domElement.style.transform = '';
          }),
          getEventPos: (function(ev) {
            return ev.center.y;
          })
        });
      });
      sideMenuConfig.when((function(instance) {
        return instance.side === 'left';
      })).mixin(function() {
        var $__0 = this;
        this.domElement.classList.add('left');
        util.extend(this.dragMethods, {
          canStart: (function(ev) {
            return $__0.isOpen || ev.center.x < $__0.dragThreshold;
          }),
          getMenuStart: (function(drag, ev) {
            return $__0.isOpen ? drag.width : 0;
          }),
          onDrag: (function(drag, ev) {
            drag.pos = util.clamp(0, drag.menuStart + ev.center.x - drag.pointerStart, drag.width);
            $__0.domElement.style.transform = 'translate3d(' + (-drag.width + drag.pos) + 'px, 0, 0)';
          }),
          onEnd: (function(drag, ev) {
            $__0.setOpen(drag.pos > drag.width / 2);
            $__0.domElement.style.transform = '';
          })
        });
      });
      sideMenuConfig.when((function(instance) {
        return instance.side === 'right';
      })).mixin(function() {
        var $__0 = this;
        this.domElement.classList.add('right');
        util.extend(this.dragMethods, {
          getMenuStart: (function(drag, ev) {
            return $__0.isOpen ? -drag.width : 0;
          }),
          onDrag: (function(drag, ev) {
            drag.pos = util.clamp(0, -drag.menuStart + drag.pointerStart - ev.center.x, drag.height);
            $__0.domElement.style.transform = 'translate3d(' + (drag.width - drag.pos) + 'px,0,0)';
          }),
          onEnd: (function(drag, ev) {
            $__0.setOpen(drag.pos > drag.width / 2);
            $__0.domElement.style.transform = '';
          })
        });
      });
      sideMenuConfig.when((function(instance) {
        return instance.side === 'top';
      })).mixin(function() {
        var $__0 = this;
        this.domElement.classList.add('top');
        util.extend(this.dragMethods, {
          getMenuStart: (function(drag, ev) {
            return $__0.isOpen ? drag.height : 0;
          }),
          onDrag: (function(drag, ev) {
            drag.pos = util.clamp(0, drag.menuStart + ev.center.y - drag.pointerStart, drag.height);
            $__0.domElement.style.transform = 'translate3d(0, ' + (-drag.height + drag.pos) + 'px, 0)';
          }),
          onEnd: (function(drag, ev) {
            $__0.setOpen(drag.pos > drag.height / 2);
            $__0.domElement.style.transform = '';
          }),
          getEventPos: (function(ev) {
            return ev.center.y;
          })
        });
      });
    }
  };
});
