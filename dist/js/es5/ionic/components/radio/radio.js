System.register('ionic/components/radio/radio', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/view', 'ionic/config/component'], function (_export) {
  'use strict';

  var ElementRef, Component, Directive, Ancestor, View, IonicDirective, IonicComponent, RadioGroup, RadioButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicConfigComponent) {
      IonicDirective = _ionicConfigComponent.IonicDirective;
      IonicComponent = _ionicConfigComponent.IonicComponent;
    }],
    execute: function () {
      RadioGroup = (function () {
        function RadioGroup(elementRef) {
          _classCallCheck(this, RadioGroup);

          this.domElement = elementRef.domElement;
          this.domElement.classList.add('list');
          this.buttons = [];
        }

        _createClass(RadioGroup, [{
          key: 'writeValue',
          value: function writeValue(value) {
            var _this = this;

            this.value = value;
            setTimeout(function () {
              _this.selectFromValue(value);
            });
          }
        }, {
          key: 'register',
          value: function register(radioButton) {
            var _this2 = this;

            this.buttons.push(radioButton);
            if (!this.value && this.buttons.length === 1) {
              setTimeout(function () {
                _this2.selected(radioButton);
              });
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
                  this.selected(button);
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
          value: function selected(radioButton) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var button = _step2.value;

                button.setActive(false);
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

            radioButton.setActive(true);
            this.value = radioButton.value;
            this.controlDirective._control().updateValue(this.value);
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-radio-group' };
          }
        }]);

        return RadioGroup;
      })();

      _export('RadioGroup', RadioGroup);

      Object.defineProperty(RadioGroup, 'annotations', { get: function get() {
          return [new IonicDirective(RadioGroup)];
        } });
      Object.defineProperty(RadioGroup, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      RadioButton = (function () {
        function RadioButton(group, elementRef) {
          _classCallCheck(this, RadioButton);

          this.domElement = elementRef.domElement;
          this.domElement.classList.add('item');
          this.domElement.setAttribute('aria-checked', true);
          this.group = group;
          group.register(this);
        }

        _createClass(RadioButton, [{
          key: 'setActive',
          value: function setActive(isActive) {
            if (isActive) {
              this.domElement.classList.add('active');
              this.domElement.setAttribute('aria-checked', true);
            } else {
              this.domElement.classList.remove('active');
              this.domElement.setAttribute('aria-checked', false);
            }
          }
        }, {
          key: 'buttonClicked',
          value: function buttonClicked(event) {
            this.group.selected(this, event);
            event.preventDefault();
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-radio',
              properties: ['value'],
              host: { '(^click)': 'buttonClicked($event)' }
            };
          }
        }]);

        return RadioButton;
      })();

      _export('RadioButton', RadioButton);

      Object.defineProperty(RadioButton, 'annotations', { get: function get() {
          return [new IonicComponent(RadioButton), new View({ template: '\n    <div class="item-content">\n\n      <div class="item-title">\n        <content></content>\n      </div>\n\n      <div class="item-media media-radio">\n        <icon class="radio-off"></icon>\n        <icon class="ion-ios-checkmark-empty radio-on"></icon>\n      </div>\n\n    </div>\n  ' })];
        } });
      Object.defineProperty(RadioButton, 'parameters', { get: function get() {
          return [[RadioGroup, new Ancestor()], [ElementRef]];
        } });
    }
  };
});