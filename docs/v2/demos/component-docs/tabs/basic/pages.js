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
var core_1 = require('angular2/core');
var helpers = require('../../helpers');
var TabTextPage = (function () {
    function TabTextPage(platform) {
        this.platform = platform;
        this.isAndroid = platform.is('android');
    }
    TabTextPage = __decorate([
        ionic_1.Page({
            template: '' +
                '<ion-navbar *navbar hide-back-button [attr.primary]="isAndroid ? \'\' : null">' +
                '<ion-title>Tabs</ion-title>' +
                '</ion-navbar>' +
                '<ion-content>' +
                '</ion-content>',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], TabTextPage);
    return TabTextPage;
    var _a;
})();
var BasicPage = (function () {
    function BasicPage() {
        this.tabOne = TabTextPage;
        this.tabTwo = TabTextPage;
        this.tabThree = TabTextPage;
    }
    BasicPage = __decorate([
        ionic_1.Page({
            template: '<ion-tabbar class="tabs-basic">' +
                '<ion-tab tab-title="Music"></ion-tab>' +
                '<ion-tab tab-title="Movies"></ion-tab>' +
                '<ion-tab tab-title="Games"></ion-tab>' +
                '</ion-tabbar>',
        }), 
        __metadata('design:paramtypes', [])
    ], BasicPage);
    return BasicPage;
})();
exports.BasicPage = BasicPage;