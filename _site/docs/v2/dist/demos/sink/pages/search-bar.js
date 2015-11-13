"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _angular2Angular2 = require('angular2/angular2');

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
var SearchBarPage = (function (_SinkPage) {
    _inherits(SearchBarPage, _SinkPage);

    function SearchBarPage(app, formBuilder) {
        _classCallCheck(this, SearchBarPage);

        _get(Object.getPrototypeOf(SearchBarPage.prototype), "constructor", this).call(this, app);
        //var fb = new FormBuilder();
        this.form = formBuilder.group({
            searchQuery: ['', _angular2Angular2.Validators.required]
        });
    }

    return SearchBarPage;
})(_sinkPage.SinkPage);
exports.SearchBarPage = SearchBarPage;
exports.SearchBarPage = SearchBarPage = __decorate([(0, _angular2Angular2.Component)({
    selector: 'ion-view',
    appInjector: [_angular2Angular2.FormBuilder]
}), (0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Search Bar</ion-title></ion-navbar>\n\n  <ion-content padding>\n    <h2>Search Bar</h2>\n    <p>\n      The Search Bar is a multi-function search component.\n    </p>\n    <p>\n      The bar can sit standalone as part of a form or header search,\n      or it can also handle and display a list of search results.\n    </p>\n\n    <form (submit)=\"doSubmit($event)\" [ng-form-model]=\"form\">\n      <ion-searchbar placeholder=\"Search\" ng-control=\"searchQuery\"></ion-searchbar>\n      <div>\n        Query: <b>{{form.controls.searchQuery.value}}</b>\n      </div>\n    </form>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _angular2Angular2.FormBuilder !== 'undefined' && _angular2Angular2.FormBuilder) === 'function' && _b || Object])], SearchBarPage);
var _a, _b;