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
if (!window.localStorage) {
    Object.defineProperty(window, "localStorage", new (function () {
        var aKeys = [], oStorage = {};
        Object.defineProperty(oStorage, "getItem", {
            value: function (sKey) { return sKey ? this[sKey] : null; },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, "key", {
            value: function (nKeyId) { return aKeys[nKeyId]; },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, "setItem", {
            value: function (sKey, sValue) {
                if (!sKey) {
                    return;
                }
                document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, "length", {
            get: function () { return aKeys.length; },
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, "removeItem", {
            value: function (sKey) {
                if (!sKey) {
                    return;
                }
                document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        this.get = function () {
            var iThisIndx;
            for (var sKey in oStorage) {
                iThisIndx = aKeys.indexOf(sKey);
                if (iThisIndx === -1) {
                    oStorage.setItem(sKey, oStorage[sKey]);
                }
                else {
                    aKeys.splice(iThisIndx, 1);
                }
                delete oStorage[sKey];
            }
            for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) {
                oStorage.removeItem(aKeys[0]);
            }
            for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
                aCouple = aCouples[nIdx].split(/\s*=\s*/);
                if (aCouple.length > 1) {
                    oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
                    aKeys.push(iKey);
                }
            }
            return oStorage;
        };
        this.configurable = false;
        this.enumerable = true;
    })());
}
var CONFIG_DEMO = null;
if (window.localStorage.getItem('configDemo')) {
    CONFIG_DEMO = JSON.parse(window.localStorage.getItem('configDemo'));
}
var TabPage = (function () {
    function TabPage() {
        this.tabOne = ApiDemoPage;
    }
    TabPage = __decorate([
        core_1.Component({
            templateUrl: 'tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabPage);
    return TabPage;
}());
exports.TabPage = TabPage;
var ApiDemoPage = (function () {
    function ApiDemoPage(platform, nav) {
        this.platform = platform;
        this.nav = nav;
        if (window.localStorage.getItem('configDemo') !== null) {
            this.config = JSON.parse(window.localStorage.getItem('configDemo'));
        }
        else if (platform.is('ios')) {
            this.config = {
                'backButtonIcon': 'ios-arrow-back',
                'iconMode': 'ios',
                'tabsPlacement': 'bottom'
            };
        }
        else {
            this.config = {
                'backButtonIcon': 'md-arrow-back',
                'iconMode': 'md',
                'tabsPlacement': 'top'
            };
        }
        this.initialConfig = JSON.parse(JSON.stringify(this.config));
    }
    ApiDemoPage.prototype.load = function () {
        window.localStorage.setItem('configDemo', JSON.stringify(this.config));
        window.location.reload();
    };
    ApiDemoPage.prototype.push = function () {
        this.nav.push(PushPage);
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.Platform !== 'undefined' && ionic_angular_1.Platform) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _b) || Object])
    ], ApiDemoPage);
    return ApiDemoPage;
    var _a, _b;
}());
exports.ApiDemoPage = ApiDemoPage;
var PushPage = (function () {
    function PushPage(nav) {
        this.nav = nav;
    }
    PushPage.prototype.pop = function () {
        this.nav.pop();
    };
    PushPage = __decorate([
        core_1.Component({
            templateUrl: 'page.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], PushPage);
    return PushPage;
    var _a;
}());
exports.PushPage = PushPage;
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = TabPage;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root" #content></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp, null, CONFIG_DEMO);