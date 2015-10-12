"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabOneCtrl = function TabOneCtrl(nav, view) {
    _classCallCheck(this, TabOneCtrl);

    this.nav = nav;
    this.view = view;
};
TabOneCtrl = __decorate([(0, _ionicIonic.Page)({
    template: 'Hello 1'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.ViewController !== 'undefined' && _ionicIonic.ViewController) === 'function' && _b || Object])], TabOneCtrl);
var TabsPage = function TabsPage(nav, params) {
    _classCallCheck(this, TabsPage);

    this.nav = nav;
};
exports.TabsPage = TabsPage;
exports.TabsPage = TabsPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'tabs/tabs.html'
}), __metadata('design:paramtypes', [typeof (_c = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _c || Object, typeof (_d = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _d || Object])], TabsPage);
var _a, _b, _c, _d;