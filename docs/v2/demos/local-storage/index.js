var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var ionic_2 = require('ionic/ionic');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = InitialPage;
    }
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
})();
var InitialPage = (function () {
    function InitialPage() {
        this.local = new ionic_2.Storage(ionic_2.LocalStorage);
        this.myItem = {};
        this.delKey = '';
        this.localStorageDemo = '{}';
        window.localStorage.clear();
    }
    InitialPage.prototype.set = function () {
        this.local.set(this.myItem.key, this.myItem.value);
        this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
        this.myItem = {};
    };
    InitialPage.prototype.remove = function () {
        this.local.remove(this.delKey);
        this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
        this.delKey = '';
    };
    InitialPage = __decorate([
        ionic_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], InitialPage);
    return InitialPage;
})();
exports.InitialPage = InitialPage;