System.register('ionic/components/item/item', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', './item-options', './item-swipe-buttons', '../../config/component', 'ionic/util'], function (_export) {
  'use strict';

  var Renderer, ElementRef, Component, Directive, View, ItemPrimaryOptions, ItemSecondaryOptions, ItemPrimarySwipeButtons, ItemSecondarySwipeButtons, IonicComponent, dom, Item, Slideable, ItemSlideGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_itemOptions) {
      ItemPrimaryOptions = _itemOptions.ItemPrimaryOptions;
      ItemSecondaryOptions = _itemOptions.ItemSecondaryOptions;
    }, function (_itemSwipeButtons) {
      ItemPrimarySwipeButtons = _itemSwipeButtons.ItemPrimarySwipeButtons;
      ItemSecondarySwipeButtons = _itemSwipeButtons.ItemSecondarySwipeButtons;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }],
    execute: function () {
      Item = (function () {
        function Item(elementRef) {
          _classCallCheck(this, Item);

          this._isOpen = false;
          this._isSlideActive = false;
          this._isTransitioning = false;
          this._transform = '';
          this.domElement = elementRef.domElement;
          this.swipeButtons = {};
          this.optionButtons = {};
        }

        _createClass(Item, [{
          key: 'onInit',
          value: function onInit() {
            Item.applyConfig(this);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-item',
              properties: []
            };
          }
        }]);

        return Item;
      })();

      _export('Item', Item);

      Object.defineProperty(Item, 'annotations', { get: function get() {
          return [new IonicComponent(Item), new View({ template: '\n    <!--\n    <content select="ion-primary-options"></content>\n    <content select="ion-primary-swipe-buttons"></content>\n    -->\n    <div class="item-content">\n      <div class="item-media">\n      </div>\n      <div class="item-accessory">\n        <!--<content select="ion-item-accessory"></content>-->\n      </div>\n      <div class="item-label">\n        <content></content>\n      </div>\n    </div>\n    <!--\n    <content select="ion-secondary-options"></content>\n    <content select="ion-secondary-swipe-buttons"></content>\n    -->\n  ' })];
        } });
      Object.defineProperty(Item, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      Slideable = (function () {
        function Slideable(slideElement) {
          _classCallCheck(this, Slideable);
        }

        _createClass(Slideable, [{
          key: 'onTransform',
          value: function onTransform(str) {}
        }, {
          key: 'onTransitionActive',
          value: function onTransitionActive(active) {}
        }, {
          key: 'onSlideActive',
          value: function onSlideActive(active) {}
        }, {
          key: 'transform',
          value: function transform(str) {
            if (arguments.length && str !== this._transform) {
              this.onTransform();
            }
          }
        }, {
          key: 'isTransitionActive',
          value: function isTransitionActive(active) {
            if (arguments.length && active !== this._isTransitionActive) {
              this._isTransitionActive = active;
              this.onSetTransitionActive(active);
            }
            return this._isTransitioning;
          }
        }, {
          key: 'isSlideActive',
          value: function isSlideActive(active) {
            if (arguments.length && active !== this._isSlideActive) {
              this._isSlideActive = active;
              this.onSetDragActive(active);
            }
            return this._isSlideActive;
          }
        }, {
          key: 'isOpen',
          value: (function (_isOpen) {
            function isOpen(_x) {
              return _isOpen.apply(this, arguments);
            }

            isOpen.toString = function () {
              return _isOpen.toString();
            };

            return isOpen;
          })(function (open) {
            var _this = this;

            if (arguments.length && open !== this._isOpen) {
              this.isTransitionActive(true);
              dom.raf(function () {
                _this.isOpen = isOpen;
                _this.onSetIsOpen(open);
              });
            }
          })
        }]);

        return Slideable;
      })();

      Object.defineProperty(Slideable, 'parameters', { get: function get() {
          return [[Element]];
        } });
      Object.defineProperty(Slideable.prototype.onTransform, 'parameters', { get: function get() {
          return [[String]];
        } });
      Object.defineProperty(Slideable.prototype.onTransitionActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.onSlideActive, 'parameters', { get: function get() {
          return [[boolean]];
        } });
      Object.defineProperty(Slideable.prototype.transform, 'parameters', { get: function get() {
          return [[String]];
        } });
      Object.defineProperty(Slideable.prototype.isTransitionActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.isSlideActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.isOpen, 'parameters', { get: function get() {
          return [[Boolean]];
        } });

      ItemSlideGesture = function ItemSlideGesture() {
        _classCallCheck(this, ItemSlideGesture);
      };
    }
  };
});