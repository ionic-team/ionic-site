System.register('ionic/components/nav-bar/nav-bar', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/view_ref', 'angular2/src/core/zone/ng_zone', '../view/view-item', '../../util/dom'], function (_export) {
  'use strict';

  var Parent, Component, Directive, View, ElementRef, ProtoViewRef, NgZone, ViewItem, dom, Navbar, BackButton, BackButtonText, Title, NavbarItem, NavbarTemplate;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
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
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      Navbar = (function () {
        function Navbar(item, elementRef) {
          _classCallCheck(this, Navbar);

          this._ele = elementRef.domElement;
          this._itmEles = [];
          item.navbarView(this);
          this.bbDefault = 'Back';
          this.bbText = '';
        }

        _createClass(Navbar, [{
          key: 'element',
          value: function element() {
            return this._ele;
          }
        }, {
          key: 'backButtonElement',
          value: function backButtonElement() {
            if (arguments.length) {
              this._bbEle = arguments[0];
            }
            return this._bbEle;
          }
        }, {
          key: 'backButtonTextElement',
          value: function backButtonTextElement() {
            if (arguments.length) {
              this._bbTxEle = arguments[0];
            }
            return this._bbTxEle;
          }
        }, {
          key: 'titleElement',
          value: function titleElement() {
            if (arguments.length) {
              this._nbTlEle = arguments[0];
            }
            return this._nbTlEle;
          }
        }, {
          key: 'itemElements',
          value: function itemElements() {
            if (arguments.length) {
              this._itmEles.push(arguments[0]);
            }
            return this._itmEles;
          }
        }, {
          key: 'titleText',
          value: function titleText() {
            if (arguments.length) {
              this._ttTxt.push(arguments[0]);
            }
            return this._ttTxt;
          }
        }, {
          key: 'alignTitle',
          value: function alignTitle() {
            var navbarEle = this._ele;
            var titleEle = this._ttEle || (this._ttEle = navbarEle.querySelector('ion-title'));
            if (!titleEle) return;
            var titleStyle = this._ttStyle || (this._ttStyle = window.getComputedStyle(titleEle));
            if (titleStyle.textAlign !== 'center') return;
            var titleOffsetLeft = titleEle.offsetLeft;
            var titleOffsetRight = navbarEle.offsetWidth - (titleOffsetLeft + titleEle.offsetWidth);
            var marginLeft = 0;
            var marginRight = 0;
            if (titleOffsetLeft < titleOffsetRight) {
              marginLeft = titleOffsetRight - titleOffsetLeft + 5;
            } else if (titleOffsetLeft > titleOffsetRight) {
              marginRight = titleOffsetLeft - titleOffsetRight - 5;
            }
            var margin = '0 ' + marginRight + 'px 0 ' + marginLeft + 'px';
            if ((marginLeft || marginRight) && margin !== this._ttMargin) {
              var innerTitleEle = this._innerTtEle || (this._innerTtEle = navbarEle.querySelector('.navbar-inner-title'));
              innerTitleEle.style.margin = this._ttMargin = margin;
            }
          }
        }, {
          key: 'didEnter',
          value: function didEnter() {
            var _this = this;

            setTimeout(function () {
              var titleEle = _this._ttEle || (_this._ttEle = _this._ele.querySelector('ion-title'));
            }, 32);
          }
        }]);

        return Navbar;
      })();

      _export('Navbar', Navbar);

      Object.defineProperty(Navbar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-navbar' }), new View({
            template: '\n    <div class="navbar-inner">\n      <button class="back-button button">\n        <icon class="back-button-icon ion-ios-arrow-back"></icon>\n        <span class="back-button-text">\n          <span class="back-default" [inner-text]="bbDefault"></span>\n          <span class="back-title" [inner-text]="bbText"></span>\n        </span>\n      </button>\n      <div class="navbar-title">\n        <div class="navbar-inner-title">\n          <content select="ion-title"></content>\n        </div>\n      </div>\n      <div class="navbar-item navbar-primary-item">\n        <content select="[primary]"></content>\n      </div>\n      <div class="navbar-item navbar-secondary-item">\n        <content select="[secondary]"></content>\n      </div>\n    </div>\n  ',
            directives: [BackButton, BackButtonText, Title, NavbarItem]
          })];
        } });
      Object.defineProperty(Navbar, 'parameters', { get: function get() {
          return [[ViewItem], [ElementRef]];
        } });

      BackButton = (function () {
        function BackButton(navbar, item, elementRef) {
          _classCallCheck(this, BackButton);

          this.item = item;
          navbar.backButtonElement(elementRef.domElement);
        }

        _createClass(BackButton, [{
          key: 'goBack',
          value: function goBack(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.item.viewCtrl.pop();
          }
        }]);

        return BackButton;
      })();

      Object.defineProperty(BackButton, 'annotations', { get: function get() {
          return [new Directive({
            selector: '.back-button',
            host: { '(^click)': 'goBack($event)' }
          })];
        } });
      Object.defineProperty(BackButton, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ViewItem], [ElementRef]];
        } });

      BackButtonText = function BackButtonText(navbar, elementRef) {
        _classCallCheck(this, BackButtonText);

        navbar.backButtonTextElement(elementRef.domElement);
      };

      Object.defineProperty(BackButtonText, 'annotations', { get: function get() {
          return [new Directive({ selector: '.back-button-text' })];
        } });
      Object.defineProperty(BackButtonText, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      Title = function Title(navbar, elementRef) {
        _classCallCheck(this, Title);

        navbar.titleElement(elementRef.domElement);
      };

      Object.defineProperty(Title, 'annotations', { get: function get() {
          return [new Directive({ selector: '.navbar-title' })];
        } });
      Object.defineProperty(Title, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      NavbarItem = function NavbarItem(navbar, elementRef) {
        _classCallCheck(this, NavbarItem);

        navbar.itemElements(elementRef.domElement);
      };

      Object.defineProperty(NavbarItem, 'annotations', { get: function get() {
          return [new Directive({ selector: '.navbar-item' })];
        } });
      Object.defineProperty(NavbarItem, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      NavbarTemplate = function NavbarTemplate(item, protoViewRef) {
        _classCallCheck(this, NavbarTemplate);

        item.addProtoViewRef('navbar', protoViewRef);
      };

      _export('NavbarTemplate', NavbarTemplate);

      Object.defineProperty(NavbarTemplate, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[navbar]' })];
        } });
      Object.defineProperty(NavbarTemplate, 'parameters', { get: function get() {
          return [[ViewItem], [ProtoViewRef]];
        } });
    }
  };
});