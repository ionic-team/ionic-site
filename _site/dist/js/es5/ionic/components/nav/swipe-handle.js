System.register('ionic/components/nav/swipe-handle', ['angular2/src/core/annotations_impl/visibility', 'angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/di/annotations_impl', '../view/view-controller', './pane', 'ionic/gestures/gesture'], function (_export) {
  'use strict';

  var Parent, ElementRef, Directive, Optional, ViewController, Pane, Gesture, SwipeHandle;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_pane) {
      Pane = _pane.Pane;
    }, function (_ionicGesturesGesture) {
      Gesture = _ionicGesturesGesture.Gesture;
    }],
    execute: function () {
      SwipeHandle = (function () {
        function SwipeHandle(viewCtrl, pane, elementRef) {
          _classCallCheck(this, SwipeHandle);

          if (!viewCtrl || !pane) return;
          var self = this;
          self.pane = pane;
          self.viewCtrl = viewCtrl;
          var gesture = self.gesture = new Gesture(elementRef.domElement);
          gesture.listen();
          function dragHorizontal(ev) {
            self.onDragHorizontal(ev);
          }
          gesture.on('panend', function (ev) {
            self.onDragEnd(ev);
          });
          gesture.on('panleft', dragHorizontal);
          gesture.on('panright', dragHorizontal);
          self.startX = null;
          self.width = null;
        }

        _createClass(SwipeHandle, [{
          key: 'onDragEnd',
          value: function onDragEnd(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var progress = (ev.gesture.center.x - this.startX) / this.width;
            var completeSwipeBack = progress > 0.5;
            var playbackRate = 4;
            if (completeSwipeBack) {
              if (progress > 0.9) {
                playbackRate = 1;
              } else if (progress > 0.8) {
                playbackRate = 2;
              } else if (progress > 0.7) {
                playbackRate = 3;
              }
            } else {
              if (progress < 0.1) {
                playbackRate = 1;
              } else if (progress < 0.2) {
                playbackRate = 2;
              } else if (progress < 0.3) {
                playbackRate = 3;
              }
            }
            this.viewCtrl.swipeBackEnd(completeSwipeBack, progress, playbackRate);
            this.startX = null;
          }
        }, {
          key: 'onDragHorizontal',
          value: function onDragHorizontal(ev) {
            if (this.startX === null) {
              ev.preventDefault();
              ev.stopPropagation();
              this.startX = ev.gesture.center.x;
              this.width = this.pane.width() - this.startX;
              this.viewCtrl.swipeBackStart();
            }
            this.viewCtrl.swipeBackProgress((ev.gesture.center.x - this.startX) / this.width);
          }
        }, {
          key: 'showHandle',
          value: function showHandle() {
            return this.viewCtrl ? this.viewCtrl.swipeBackEnabled() : false;
          }
        }]);

        return SwipeHandle;
      })();

      _export('SwipeHandle', SwipeHandle);

      Object.defineProperty(SwipeHandle, 'annotations', { get: function get() {
          return [new Directive({
            selector: '.swipe-handle',
            host: { '[class.show-handle]': 'showHandle()' }
          })];
        } });
      Object.defineProperty(SwipeHandle, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [Pane, new Parent()], [ElementRef]];
        } });
    }
  };
});