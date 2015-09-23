System.register("pages/button", ["ionic/ionic", "../sink-page"], function (_export) {
  "use strict";

  var IonicApp, IonicView, NavController, SinkPage, __decorate, __metadata, ButtonPage;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicIonic) {
      IonicApp = _ionicIonic.IonicApp;
      IonicView = _ionicIonic.IonicView;
      NavController = _ionicIonic.NavController;
    }, function (_sinkPage) {
      SinkPage = _sinkPage.SinkPage;
    }],
    execute: function () {
      __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function (o, d) {
              return d && d(o) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function (o, d) {
              return (d && d(target, key), void 0);
            }, void 0);
          case 4:
            return decorators.reduceRight(function (o, d) {
              return d && d(target, key, o) || o;
            }, desc);
        }
      };

      __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      ButtonPage = (function (_SinkPage) {
        _inherits(ButtonPage, _SinkPage);

        function ButtonPage(app, nav) {
          _classCallCheck(this, ButtonPage);

          _get(Object.getPrototypeOf(ButtonPage.prototype), "constructor", this).call(this, app);
          this.nav = nav;
        }

        _createClass(ButtonPage, [{
          key: "onButtonClick",
          value: function onButtonClick(event) {
            var _this = this;

            console.log('On button click', event);
            clearTimeout(this.clickTimeout);
            this.clicked = true;
            this.clickTimeout = setTimeout(function () {
              _this.clicked = false;
            }, 500);
          }
        }]);

        return ButtonPage;
      })(SinkPage);

      _export("ButtonPage", ButtonPage);

      _export("ButtonPage", ButtonPage = __decorate([IonicView({
        template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Buttons</ion-title></ion-navbar>\n\n  <ion-content padding>\n\n    <h2>Buttons</h2>\n    <p>\n      The faithful button. Not only our favorite place to click, but a true friend.\n    </p>\n    <p>\n      Buttons come in lots of different colors:\n    </p>\n    <p>\n      <div (click)=\"onButtonClick($event)\">\n        <button>Primary</button>\n        <button secondary>Secondary</button>\n        <button danger>Danger</button>\n        <button light>Light</button>\n        <button dark>Dark</button>\n      </div>\n    </p>\n    <p>\n      various shapes:\n    </p>\n    <p>\n      <div (click)=\"onButtonClick($event)\">\n        <button small>small</button>\n        <button dark>Medium</button>\n        <button secondary large>LARGE</button>\n      </div>\n    </p>\n    <p>\n      and with different embellishments:\n    </p>\n    <p>\n      <div (click)=\"onButtonClick($event)\">\n        <button outline>Outline</button>\n        <button dark clear>Clear</button>\n        <button danger block>Block</button>\n      </div>\n    </p>\n    </p>\n      <div *ng-if=\"clicked\">\n      <b>CLICKED</b>\n      </div>\n    </p>\n  </ion-content>\n  "
      }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof NavController !== 'undefined' && NavController || Object])], ButtonPage));
    }
  };
});