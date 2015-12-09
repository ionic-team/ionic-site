"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var ApiDemoApp = function ApiDemoApp() {
    _classCallCheck(this, ApiDemoApp);

    this.rootPage = InitialPage;
};
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [])], ApiDemoApp);
var InitialPage = (function () {
    function InitialPage() {
        _classCallCheck(this, InitialPage);

        this.local = new _ionicIonic.Storage(_ionicIonic.LocalStorage);
        this.myItem = {};
        this.delKey = '';
        this.localStorageDemo = '{}';
        window.localStorage.clear();
    }

    _createClass(InitialPage, [{
        key: "set",
        value: function set() {
            this.local.set(this.myItem.key, this.myItem.value);
            this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
            this.myItem = {};
        }
    }, {
        key: "remove",
        value: function remove() {
            this.local.remove(this.delKey);
            this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
            this.delKey = '';
        }
    }]);

    return InitialPage;
})();
exports.InitialPage = InitialPage;
exports.InitialPage = InitialPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [])], InitialPage);