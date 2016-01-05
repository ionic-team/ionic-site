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
var helpers_1 = require('../../helpers');
var BasicPage = (function () {
    function BasicPage(platform, nav) {
        this.nav = nav;
        this.platform = platform;
    }
    BasicPage.prototype.openMenu = function () {
        var buttonHandler = function (index) {
            console.log('Button clicked', index);
            if (index == 1) {
                return false;
            }
            return true;
        };
        if (this.platform.is('android')) {
            var androidSheet = {
                title: 'Albums',
                buttons: [
                    { text: 'Share',
                        handler: buttonHandler,
                        icon: 'share'
                    },
                    { text: 'Play',
                        handler: buttonHandler,
                        icon: 'arrow-dropright-circle'
                    },
                    { text: 'Favorite',
                        handler: buttonHandler,
                        icon: 'ion-md-heart-outline'
                    },
                    {
                        text: 'Delete',
                        style: 'destructive',
                        handler: function () {
                            console.log('Destructive clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ],
            };
        }
        var actionSheet = ionic_1.ActionSheet.create(androidSheet || {
            buttons: [
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
                    text: 'Delete',
                    style: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
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
    BasicPage.prototype.onPageWillLeave = function () {
        actionSheet && actionSheet.dismiss();
    };
    BasicPage = __decorate([
        ionic_1.Page({
            templateUrl: 'action-sheets/basic/basic.html',
            directives: [core_1.forwardRef(function () { return helpers_1.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object, (typeof (_b = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _b) || Object])
    ], BasicPage);
    return BasicPage;
    var _a, _b;
})();
exports.BasicPage = BasicPage;