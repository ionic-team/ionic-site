System.register('ionic/components/aside/aside', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', '../../config/component', './extensions/types', './extensions/gestures', 'ionic/util'], function (_export) {
  'use strict';

  var EventEmitter, ElementRef, onInit, View, IonicComponent, types, gestures, dom, Aside;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      EventEmitter = _angular2Angular2.EventEmitter;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }, function (_extensionsTypes) {
      types = _extensionsTypes;
    }, function (_extensionsGestures) {
      gestures = _extensionsGestures;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }],
    execute: function () {
      Aside = (function () {
        function Aside(elementRef) {
          var _this = this;

          _classCallCheck(this, Aside);

          this.domElement = elementRef.domElement;
          this.opening = new EventEmitter('opening');
          this.domElement.addEventListener('transitionend', function (ev) {
            _this.setChanging(false);
          });
        }

        _createClass(Aside, [{
          key: 'onInit',
          value: function onInit() {
            console.log('Aside content', this.content);
            this.contentElement = this.content instanceof Node ? this.content : this.content.domElement;
            Aside.applyConfig(this);
            this.gestureDelegate = Aside.getDelegate(this, 'gesture');
            this.typeDelegate = Aside.getDelegate(this, 'type');
          }
        }, {
          key: 'getContentElement',
          value: function getContentElement() {
            return this.contentElement;
          }
        }, {
          key: 'setOpenAmt',
          value: function setOpenAmt(v) {
            this.opening.next(v);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(transform) {
            this.typeDelegate.setTransform(transform);
          }
        }, {
          key: 'setSliding',
          value: function setSliding(isSliding) {
            if (isSliding !== this.isSliding) {
              this.typeDelegate.setSliding(isSliding);
            }
          }
        }, {
          key: 'setChanging',
          value: function setChanging(isChanging) {
            if (isChanging !== this.isChanging) {
              this.isChanging = isChanging;
              this.domElement.classList[isChanging ? 'add' : 'remove']('changing');
            }
          }
        }, {
          key: 'setOpen',
          value: function setOpen(isOpen) {
            var _this2 = this;

            if (isOpen !== this.isOpen) {
              this.isOpen = isOpen;
              this.setChanging(true);
              this.setOpenAmt(isOpen ? 1 : 0);
              return dom.rafPromise().then(function () {
                _this2.typeDelegate.setOpen(isOpen);
              });
            }
          }
        }, {
          key: 'open',
          value: function open() {
            return this.setOpen(true);
          }
        }, {
          key: 'close',
          value: function close() {
            return this.setOpen(false);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-aside',
              properties: ['content', 'dragThreshold'],
              defaultProperties: {
                'side': 'left',
                'type': 'reveal'
              },
              delegates: {
                gesture: [[function (instance) {
                  return instance.side == 'top';
                }, gestures.TopAsideGesture], [function (instance) {
                  return instance.side == 'bottom';
                }, gestures.BottomAsideGesture], [function (instance) {
                  return instance.side == 'right';
                }, gestures.RightAsideGesture], [function (instance) {
                  return instance.side == 'left';
                }, gestures.LeftAsideGesture]],
                type: [[function (instance) {
                  return instance.type == 'overlay';
                }, types.AsideTypeOverlay], [function (instance) {
                  return instance.type == 'reveal';
                }, types.AsideTypeReveal], [function (instance) {
                  return instance.type == 'push';
                }, types.AsideTypePush]]
              },
              events: ['opening']
            };
          }
        }]);

        return Aside;
      })();

      _export('Aside', Aside);

      Object.defineProperty(Aside, 'annotations', { get: function get() {
          return [new IonicComponent(Aside), new View({ template: '<content></content>' })];
        } });
      Object.defineProperty(Aside, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});