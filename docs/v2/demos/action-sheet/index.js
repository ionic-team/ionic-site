var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = InitialPage;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
})();
var InitialPage = (function () {
    function InitialPage(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    }
    InitialPage.prototype.present = function () {
        if (this.platform.is('android')) {
            var androidSheet = {
                title: 'Albums',
                buttons: [
                    {
                        text: 'Delete',
                        style: 'destructive',
                        icon: 'md-trash',
                        handler: function () {
                            console.log('Destructive clicked');
                        }
                    },
                    { text: 'Share',
                        icon: 'share',
                        handler: function () {
                            console.log('Share clicked');
                        }
                    },
                    { text: 'Play',
                        icon: 'arrow-dropright-circle',
                        handler: function () {
                            console.log('Play clicked');
                        }
                    },
                    { text: 'Favorite',
                        icon: 'md-heart-outline',
                        handler: function () {
                            console.log('Favorite clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        icon: 'md-close',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ],
            };
        }
        var actionSheet = ionic_angular_1.ActionSheet.create(androidSheet || {
            buttons: [
                {
                    text: 'Delete',
                    style: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Share',
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    handler: function () {
                        console.log('Favorite clicked');
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
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.Platform !== 'undefined' && ionic_angular_1.Platform) === 'function' && _b) || Object])
    ], InitialPage);
    return InitialPage;
    var _a, _b;
})();
exports.InitialPage = InitialPage;