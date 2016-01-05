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
var TabIconTextPage = (function () {
    function TabIconTextPage(platform) {
        this.platform = platform;
        this.isAndroid = platform.is('android');
    }
    TabIconTextPage.prototype.onPageWillEnter = function () {
        console.log('enter');
        document.getElementById('md-tabs-icon-text').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    };
    TabIconTextPage = __decorate([
        ionic_1.Page({
            template: '' +
                '<ion-navbar *navbar hide-back-button [attr.royal]="isAndroid ? \'\' : null">' +
                '<ion-title>Tabs</ion-title>' +
                '</ion-navbar>' +
                '<ion-content>' +
                '</ion-content>',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], TabIconTextPage);
    return TabIconTextPage;
    var _a;
})();
var IconTextPage = (function () {
    function IconTextPage() {
        this.tabOne = TabIconTextPage;
        this.tabTwo = TabIconTextPage;
        this.tabThree = TabIconTextPage;
        this.tabFour = TabIconTextPage;
    }
    IconTextPage.prototype.onPageWillLeave = function () {
        document.getElementById('md-tabs-icon-text').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    };
    IconTextPage = __decorate([
        ionic_1.Page({
            template: '<ion-tabs class="tabs-icon-text">' +
                '<ion-tab tab-icon="water" tab-title="Water" [root]="tabOne"></ion-tab>' +
                '<ion-tab tab-icon="leaf" tab-title="Life" [root]="tabTwo"></ion-tab>' +
                '<ion-tab tab-icon="flame" tab-title="Fire" [root]="tabThree"></ion-tab>' +
                '<ion-tab tab-icon="magnet" tab-title="Force" [root]="tabFour"></ion-tab>' +
                '</ion-tabs>',
        }), 
        __metadata('design:paramtypes', [])
    ], IconTextPage);
    return IconTextPage;
})();
exports.IconTextPage = IconTextPage;