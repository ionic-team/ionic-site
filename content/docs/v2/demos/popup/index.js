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
    function InitialPage(popup) {
        this.popup = popup;
        this.confirmOpen = false;
        this.confirmResult = '';
    }
    InitialPage.prototype.doAlert = function () {
        this.popup.alert({
            title: "New Friend!",
            template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
            cssClass: 'my-alert'
        });
    };
    InitialPage.prototype.doPrompt = function () {
        this.popup.prompt({
            title: "New Album",
            template: "Enter a name for this new album you're so keen on adding",
            inputPlaceholder: "Title",
            okText: "Save"
        });
    };
    InitialPage.prototype.doConfirm = function () {
        this.confirmOpen = true;
        this.popup.confirm({
            title: "Use this lightsaber?",
            subTitle: "You can't exchange lightsabers",
            template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
            cancelText: "Disagree",
            okText: "Agree"
        });
    };
    InitialPage = __decorate([
        ionic_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_2.Popup !== 'undefined' && ionic_2.Popup) === 'function' && _a) || Object])
    ], InitialPage);
    return InitialPage;
    var _a;
})();
exports.InitialPage = InitialPage;