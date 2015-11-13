"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ionicIonic = require('ionic/ionic');

var _sinkPage = require('../sink-page');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
  switch (arguments.length) {
    case 2:
      return decorators.reduceRight(function (o, d) {
        return d && d(o) || o;
      }, target);
    case 3:
      return decorators.reduceRight(function (o, d) {
        return d && d(target, key), void 0;
      }, void 0);
    case 4:
      return decorators.reduceRight(function (o, d) {
        return d && d(target, key, o) || o;
      }, desc);
  }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CardPage = (function (_SinkPage) {
  _inherits(CardPage, _SinkPage);

  function CardPage(app) {
    _classCallCheck(this, CardPage);

    _get(Object.getPrototypeOf(CardPage.prototype), "constructor", this).call(this, app);
  }

  return CardPage;
})(_sinkPage.SinkPage);
exports.CardPage = CardPage;
exports.CardPage = CardPage = __decorate([(0, _ionicIonic.IonicView)({
  template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Cards</ion-title></ion-navbar>\n\n  <ion-content padding>\n    <h2>Cards</h2>\n    <p>\n      Cards are an emerging UI concept where a bit of content is displayed\n      like it would be on an index card or a piece of paper.\n    </p>\n    <p>\n      Cards are great for displaying contextual information in a small space,\n      like a Tweet, todays weather report, or a photo.\n    </p>\n\n    <ion-card>\n\n      <ion-card-header>\n        Card Header\n      </ion-card-header>\n\n      <div>\n        <img src=\"http://i.imgur.com/7BEPcGo.jpg\">\n      </div>\n\n    </ion-card>\n\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object])], CardPage);
var _a;