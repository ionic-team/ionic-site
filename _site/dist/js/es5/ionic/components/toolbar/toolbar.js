System.register('ionic/components/toolbar/toolbar', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/view_ref', 'angular2/src/core/zone/ng_zone', 'ionic/platform/platform', '../../util/dom'], function (_export) {
  'use strict';

  var Component, Directive, View, ElementRef, ProtoViewRef, NgZone, Platform, dom, Toolbar, ToolbarTemplate;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerView_ref) {
      ProtoViewRef = _angular2SrcCoreCompilerView_ref.ProtoViewRef;
    }, function (_angular2SrcCoreZoneNg_zone) {
      NgZone = _angular2SrcCoreZoneNg_zone.NgZone;
    }, function (_ionicPlatformPlatform) {
      Platform = _ionicPlatformPlatform.Platform;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      Toolbar = (function () {
        function Toolbar(elementRef, ngZone) {
          _classCallCheck(this, Toolbar);

          this.domElement = elementRef.domElement;
          Toolbar.config.invoke(this);
        }

        _createClass(Toolbar, [{
          key: 'alignTitle',
          value: function alignTitle() {
            var _this = this;

            var toolbarEle = this.domElement;
            var innerTitleEle = this._innerTitleEle || (this._innerTitleEle = toolbarEle.querySelector('.toolbar-inner-title'));
            var titleEle = this._titleEle || (this._titleEle = innerTitleEle.querySelector('ion-title'));
            var style = this._style || (this._style = window.getComputedStyle(titleEle));
            var titleOffsetWidth = titleEle.offsetWidth;
            var titleOffsetLeft = titleEle.offsetLeft;
            var titleScrollWidth = titleEle.scrollWidth;
            var toolbarOffsetWidth = toolbarEle.offsetWidth;
            if (window.getComputedStyle(innerTitleEle).margin !== '0px') {
              this._showTitle();
              return;
            }
            if (style.textAlign !== 'center' || titleOffsetWidth < titleScrollWidth) {
              this._showTitle();
            } else {
              var rightMargin = toolbarOffsetWidth - (titleOffsetLeft + titleOffsetWidth);
              var centerMargin = titleOffsetLeft - rightMargin;
              innerTitleEle.style.margin = '0 ' + centerMargin + 'px 0 0';
              dom.raf(function () {
                if (titleEle.offsetWidth < titleEle.scrollWidth) {
                  innerTitleEle.style.margin = '';
                  innerTitleEle.style.textAlign = 'left';
                }
                _this._showTitle();
              });
            }
          }
        }, {
          key: '_showTitle',
          value: function _showTitle() {
            if (!this._shown) {
              this._shown = true;
              this._innerTitleEle.classList.remove('toolbar-title-hide');
            }
          }
        }]);

        return Toolbar;
      })();

      _export('Toolbar', Toolbar);

      Object.defineProperty(Toolbar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-toolbar' }), new View({
            template: '<div class="toolbar-inner"><content></content></div>',
            directives: []
          })];
        } });
      Object.defineProperty(Toolbar, 'parameters', { get: function get() {
          return [[ElementRef], [NgZone]];
        } });

      ToolbarTemplate = function ToolbarTemplate(item, protoViewRef) {
        _classCallCheck(this, ToolbarTemplate);

        item.addProtoViewRef('toolbar', protoViewRef);
      };

      _export('ToolbarTemplate', ToolbarTemplate);

      Object.defineProperty(ToolbarTemplate, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[toolbar]' })];
        } });
      Object.defineProperty(ToolbarTemplate, 'parameters', { get: function get() {
          return [[ViewItem], [ProtoViewRef]];
        } });
    }
  };
});