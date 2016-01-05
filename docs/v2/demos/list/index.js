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
var ApiDemoApp = (function () {
    function ApiDemoApp(app, platform) {
        this.app = app;
        this.platform = platform;
        this.rootPage = PageOne;
        this.pages = [
            { title: 'Basic List', component: PageOne },
            { title: 'Inset List', component: PageTwo },
            { title: 'No-lines List', component: PageThree },
            { title: 'List Headers', component: PageFour },
            { title: 'Sliding Items', component: PageFive },
        ];
    }
    ApiDemoApp.prototype.openPage = function (page) {
        this.app.getComponent('leftMenu').close();
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _b) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a, _b;
})();
var PageOne = (function () {
    function PageOne() {
    }
    PageOne = __decorate([
        ionic_1.Page({
            templateUrl: 'basic-list.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PageOne);
    return PageOne;
})();
exports.PageOne = PageOne;
var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        ionic_1.Page({
            templateUrl: 'inset-list.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PageTwo);
    return PageTwo;
})();
exports.PageTwo = PageTwo;
var PageThree = (function () {
    function PageThree() {
    }
    PageThree = __decorate([
        ionic_1.Page({
            templateUrl: 'no-lines-list.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PageThree);
    return PageThree;
})();
exports.PageThree = PageThree;
var PageFour = (function () {
    function PageFour() {
    }
    PageFour = __decorate([
        ionic_1.Page({
            templateUrl: 'list-headers.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PageFour);
    return PageFour;
})();
exports.PageFour = PageFour;
var PageFive = (function () {
    function PageFive() {
    }
    PageFive = __decorate([
        ionic_1.Page({
            templateUrl: 'sliding-items.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PageFive);
    return PageFive;
})();
exports.PageFive = PageFive;