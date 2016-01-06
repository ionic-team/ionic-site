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
var TabIconPage = (function () {
    function TabIconPage(platform) {
        this.platform = platform;
        this.isAndroid = platform.is('android');
    }
    TabIconPage.prototype.onPageWillEnter = function () {
        document.getElementById('md-tabs-icon').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    };
    TabIconPage = __decorate([
        ionic_1.Page({
            template: '' +
                '<ion-navbar *navbar hideBackButton [attr.danger]="isAndroid ? \'\' : null">' +
                '<ion-title>Tabs</ion-title>' +
                '</ion-navbar>' +
                '<ion-content>' +
                '</ion-content>',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], TabIconPage);
    return TabIconPage;
    var _a;
})();
var IconPage = (function () {
    function IconPage() {
        this.tabOne = TabIconPage;
        this.tabTwo = TabIconPage;
        this.tabThree = TabIconPage;
        this.tabFour = TabIconPage;
    }
    IconPage.prototype.onPageWillLeave = function () {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    };
    IconPage = __decorate([
        ionic_1.Page({
            template: '<ion-tabs class="tabs-icon">' +
                '<ion-tab tabIcon="contact" [root]="tabOne"></ion-tab>' +
                '<ion-tab tabIcon="compass" [root]="tabTwo"></ion-tab>' +
                '<ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>' +
                '<ion-tab tabIcon="settings" [root]="tabFour"></ion-tab>' +
                '</ion-tabs>',
        }), 
        __metadata('design:paramtypes', [])
    ], IconPage);
    return IconPage;
})();
exports.IconPage = IconPage;