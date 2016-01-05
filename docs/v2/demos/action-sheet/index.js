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
    function InitialPage(nav) {
        this.nav = nav;
    }
    InitialPage.prototype.present = function () {
        var actionSheet = ionic_1.ActionSheet.create({
            buttons: [
                {
                    text: 'Destructive',
                    style: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    };
    InitialPage = __decorate([
        ionic_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object])
    ], InitialPage);
    return InitialPage;
    var _a;
})();
exports.InitialPage = InitialPage;