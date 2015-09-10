System.register("pages/slides", ["ionic/ionic", "../sink-page"], function (_export) {
  "use strict";

  var IonicApp, IonicView, SinkPage, __decorate, __metadata, SlidePage;

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

      SlidePage = (function (_SinkPage) {
        _inherits(SlidePage, _SinkPage);

        function SlidePage(app) {
          _classCallCheck(this, SlidePage);

          _get(Object.getPrototypeOf(SlidePage.prototype), "constructor", this).call(this, app);
        }

        return SlidePage;
      })(SinkPage);

      _export("SlidePage", SlidePage);

      _export("SlidePage", SlidePage = __decorate([IonicView({
        template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Slides</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Slides</h2>\n    <p>\n      Slides have a set of pages that can be swiped between.\n    </p>\n    <p>\n      Slides are perfect for making image slideshows,\n      swipe tutorials, or document viewers.\n    </p>\n    <ion-slides style=\"height: 300px\">\n      <ion-slide style=\"background-color: #387ef5\">\n        <h2 style=\"color: #fff\">Page 1</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: rgb(245, 255, 96)\">\n        <h2 style=\"color: #222;\"\">Page 2</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: pink\">\n        <h2>Page 3</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: red\">\n        <h2>Page 4</h2>\n      </ion-slide>\n      <ion-slide style=\"background-color: rgb(1, 157, 157)\">\n        <h2>Page 5</h2>\n      </ion-slide>\n      <ion-pager>\n      </ion-pager>\n    </ion-slides>\n  </ion-content>\n  <style>\n    .slide {\n      display: flex !important;\n      align-items: center;\n      justify-content: center;\n    }\n    .slide h2 {\n      color: #fff;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      font-size: 16px;\n    }\n  </style>\n  "
      }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], SlidePage));
    }
  };
});