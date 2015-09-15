System.register("pages/list", ["ionic/ionic", "../sink-page"], function (_export) {
  "use strict";

  var IonicApp, IonicView, SinkPage, __decorate, __metadata, ListPage;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicIonic) {
      IonicApp = _ionicIonic.IonicApp;
      IonicView = _ionicIonic.IonicView;
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

      ListPage = (function (_SinkPage) {
        _inherits(ListPage, _SinkPage);

        function ListPage(app) {
          _classCallCheck(this, ListPage);

          _get(Object.getPrototypeOf(ListPage.prototype), "constructor", this).call(this, app);
        }

        return ListPage;
      })(SinkPage);

      _export("ListPage", ListPage);

      _export("ListPage", ListPage = __decorate([IonicView({
        template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Lists</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Lists</h2>\n    <p>\n      Lists display data as rows in a table.\n    </p>\n    <p>\n      Lists are great for displaying sets of things like contacts,\n      songs, and documents.\n    </p>\n\n    <ion-list inset>\n\n      <ion-header>\n        List Header\n      </ion-header>\n\n      <ion-item>\n        <input control=\"email\" type=\"email\" placeholder=\"Your email\">\n      </ion-item>\n      <ion-item>\n        Item\n      </ion-item>\n      <ion-item>\n        Item\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n  "
      }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], ListPage));
    }
  };
});