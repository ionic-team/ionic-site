"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.appType = "Paid";
        this.safari = "Shared Links";
        this.weather = "sunny";
        this.apps = {
            "Paid": [
                {
                    name: 'Monopoly',
                    price: '$0.99'
                },
                {
                    name: 'Angry Birds',
                    price: '$2.99'
                }
            ],
            "Free": [
                {
                    name: 'Snapchat',
                    price: 'GET'
                },
                {
                    name: 'Instagram',
                    price: 'OPEN'
                }
            ],
            "Top": [
                {
                    name: 'Spotify',
                    price: 'OPEN'
                },
                {
                    name: 'Pandora',
                    price: 'GET'
                }
            ]
        };
        this.items = {
            "Bookmarks": [
                {
                    name: 'Favorites',
                    icon: 'ios-star-outline'
                },
                {
                    name: 'History',
                    icon: 'ios-clock-outline'
                }
            ],
            "Reading List": [
                {
                    name: 'Terms of Service',
                    icon: 'create'
                },
                {
                    name: 'User Guide',
                    icon: 'book'
                }
            ],
            "Shared Links": [
                {
                    name: 'Ionic Framework',
                    icon: 'ionic'
                },
                {
                    name: 'Learn Angular',
                    icon: 'logo-angular'
                }
            ]
        };
    }
    ApiDemoPage.prototype.getItems = function (type) {
        return this.apps[type];
    };
    ApiDemoPage.prototype.getSafariItems = function (type) {
        return this.items[type];
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoPage);
    return ApiDemoPage;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);