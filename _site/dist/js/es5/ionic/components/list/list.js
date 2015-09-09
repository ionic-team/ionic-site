System.register('ionic/components/list/list', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'ionic/config/component', './virtual', 'ionic/util'], function (_export) {
  'use strict';

  var ElementRef, onInit, IonicDirective, ListVirtualScroll, util, List;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_ionicConfigComponent) {
      IonicDirective = _ionicConfigComponent.IonicDirective;
    }, function (_virtual) {
      ListVirtualScroll = _virtual.ListVirtualScroll;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      List = (function () {
        function List(elementRef) {
          _classCallCheck(this, List);

          this.domElement = elementRef.domElement;
        }

        _createClass(List, [{
          key: 'onInit',
          value: function onInit() {
            if (util.isDefined(this.virtual)) {
              console.log('Content', this.content);
              console.log('Virtual?', this.virtual);
              console.log('Items?', this.items.length, 'of \'em');
              this._initVirtualScrolling();
            }
          }
        }, {
          key: '_initVirtualScrolling',
          value: function _initVirtualScrolling() {
            if (!this.content) {
              return;
            }
            this._virtualScrollingManager = new ListVirtualScroll(this);
          }
        }, {
          key: 'setItemTemplate',
          value: function setItemTemplate(item) {
            this.itemTemplate = item;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-list',
              properties: ['items', 'virtual', 'content']
            };
          }
        }]);

        return List;
      })();

      _export('List', List);

      Object.defineProperty(List, 'annotations', { get: function get() {
          return [new IonicDirective(List)];
        } });
      Object.defineProperty(List, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});