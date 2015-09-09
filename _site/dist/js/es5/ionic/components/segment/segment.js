System.register('ionic/components/segment/segment', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/view', 'angular2/forms', 'ionic/util', 'ionic/config/component'], function (_export) {
  'use strict';

  var Renderer, ElementRef, EventEmitter, Component, Directive, onInit, Ancestor, View, Control, NgControl, NgFormControl, ControlGroup, ControlDirective, dom, IonicComponent, SegmentControlValueAccessor, Segment, SegmentButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Forms) {
      Control = _angular2Forms.Control;
      NgControl = _angular2Forms.NgControl;
      NgFormControl = _angular2Forms.NgFormControl;
      ControlGroup = _angular2Forms.ControlGroup;
      ControlDirective = _angular2Forms.ControlDirective;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }, function (_ionicConfigComponent) {
      IonicComponent = _ionicConfigComponent.IonicComponent;
    }],
    execute: function () {
      SegmentControlValueAccessor = (function () {
        function SegmentControlValueAccessor(cd, renderer, elementRef, segment) {
          _classCallCheck(this, SegmentControlValueAccessor);

          this.onChange = function (_) {};
          this.onTouched = function (_) {};
          this.cd = cd;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.segment = segment;
          cd.valueAccessor = this;
        }

        _createClass(SegmentControlValueAccessor, [{
          key: 'writeValue',
          value: function writeValue(value) {
            this.value = !value ? '' : value;
            this.renderer.setElementProperty(this.elementRef.parentView.render, this.elementRef.boundElementIndex, 'value', this.value);
            this.segment.value = this.value;
            this.segment.selectFromValue(value);
          }
        }, {
          key: 'registerOnChange',
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: 'registerOnTouched',
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }]);

        return SegmentControlValueAccessor;
      })();

      _export('SegmentControlValueAccessor', SegmentControlValueAccessor);

      Object.defineProperty(SegmentControlValueAccessor, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'ion-segment',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()',
              '[value]': 'value',
              '[class.ng-untouched]': 'cd.control?.untouched == true',
              '[class.ng-touched]': 'cd.control?.touched == true',
              '[class.ng-pristine]': 'cd.control?.pristine == true',
              '[class.ng-dirty]': 'cd.control?.dirty == true',
              '[class.ng-valid]': 'cd.control?.valid == true',
              '[class.ng-invalid]': 'cd.control?.valid == false'
            }
          })];
        } });
      Object.defineProperty(SegmentControlValueAccessor, 'parameters', { get: function get() {
          return [[NgControl], [Renderer], [ElementRef], [Segment]];
        } });

      Segment = (function () {
        function Segment(cd, elementRef, renderer) {
          _classCallCheck(this, Segment);

          this.domElement = elementRef.domElement;
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.change = new EventEmitter('change');
          this.input = new EventEmitter('input');
          this.cd = cd;
          this.buttons = [];
        }

        _createClass(Segment, [{
          key: 'onInit',
          value: function onInit() {
            Segment.applyConfig(this);
          }
        }, {
          key: 'register',
          value: function register(segmentButton) {
            this.buttons.push(segmentButton);
            if (this.value == segmentButton.value) {
              this.selected(segmentButton);
            }
          }
        }, {
          key: 'selectFromValue',
          value: function selectFromValue(value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var button = _step.value;

                if (button.value === value) {
                  button.isActive = true;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'selected',
          value: function selected(segmentButton) {
            var _this = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var button = _step2.value;

                button.isActive = false;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            segmentButton.isActive = true;
            setTimeout(function () {
              _this.value = segmentButton.value;
              _this.cd.valueAccessor.writeValue(segmentButton.value);
              _this.selectFromValue(segmentButton.value);
              _this.cd.control.updateValue(segmentButton.value);
              _this.change.next();
            });
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-segment',
              appInjector: [NgControl],
              properties: ['value'],
              lifecycle: [onInit],
              host: {
                '(click)': 'buttonClicked($event)',
                '(change)': 'onChange($event)',
                '[value]': 'value',
                '[class.ng-untouched]': 'cd.control?.untouched == true',
                '[class.ng-touched]': 'cd.control?.touched == true',
                '[class.ng-pristine]': 'cd.control?.pristine == true',
                '[class.ng-dirty]': 'cd.control?.dirty == true',
                '[class.ng-valid]': 'cd.control?.valid == true',
                '[class.ng-invalid]': 'cd.control?.valid == false'
              }
            };
          }
        }]);

        return Segment;
      })();

      _export('Segment', Segment);

      Object.defineProperty(Segment, 'annotations', { get: function get() {
          return [new IonicComponent(Segment), new View({
            template: '<div class="ion-segment">\n    <content></content>\n  </div>\n  ',
            directives: [SegmentButton]
          })];
        } });
      Object.defineProperty(Segment, 'parameters', { get: function get() {
          return [[NgControl], [ElementRef], [Renderer]];
        } });

      SegmentButton = (function () {
        function SegmentButton(segment, elementRef) {
          _classCallCheck(this, SegmentButton);

          this.domElement = elementRef.domElement;
          this.segment = segment;
        }

        _createClass(SegmentButton, [{
          key: 'onInit',
          value: function onInit() {
            this.segment.register(this);
          }
        }, {
          key: 'buttonClicked',
          value: function buttonClicked(event) {
            this.segment.selected(this, event);
            event.preventDefault();
          }
        }]);

        return SegmentButton;
      })();

      _export('SegmentButton', SegmentButton);

      Object.defineProperty(SegmentButton, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'ion-segment-button',
            properties: ['value'],
            host: {
              '(click)': 'buttonClicked($event)',
              '[class.active]': 'isActive'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(SegmentButton, 'parameters', { get: function get() {
          return [[Segment, new Ancestor()], [ElementRef]];
        } });
    }
  };
});