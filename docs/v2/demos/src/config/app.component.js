import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
if (!window.localStorage) {
    Object.defineProperty(window, 'localStorage', new (function () {
        var aKeys = [], oStorage = {};
        Object.defineProperty(oStorage, 'getItem', {
            value: function (sKey) { return sKey ? this[sKey] : null; },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, 'key', {
            value: function (nKeyId) { return aKeys[nKeyId]; },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, 'setItem', {
            value: function (sKey, sValue) {
                if (!sKey) {
                    return;
                }
                document.cookie = encodeURI(sKey) + '=' + encodeURI(sValue) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/';
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, 'length', {
            get: function () { return aKeys.length; },
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(oStorage, 'removeItem', {
            value: function (sKey) {
                if (!sKey) {
                    return;
                }
                document.cookie = encodeURI(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
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
                    oStorage[iKey = decodeURI(aCouple[0])] = decodeURI(aCouple[1]);
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
export var TabPage = (function () {
    function TabPage() {
        this.tabOne = ApiDemoPage;
    }
    TabPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    TabPage.ctorParameters = [];
    return TabPage;
}());
export var ApiDemoPage = (function () {
    function ApiDemoPage(platform, navCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
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
        else if (platform.is('windows')) {
            this.config = {
                'backButtonIcon': 'ios-arrow-back',
                'iconMode': 'ios',
                'tabsPlacement': 'top'
            };
        }
        else {
            this.config = {
                'backButtonIcon': 'md-arrow-back',
                'iconMode': 'md',
                'tabsPlacement': 'bottom'
            };
        }
        this.initialConfig = JSON.parse(JSON.stringify(this.config));
    }
    ApiDemoPage.prototype.load = function () {
        window.localStorage.setItem('configDemo', JSON.stringify(this.config));
        window.location.reload();
    };
    ApiDemoPage.prototype.push = function () {
        this.navCtrl.push(PushPage);
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: Platform, },
        { type: NavController, },
    ];
    return ApiDemoPage;
}());
export var PushPage = (function () {
    function PushPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PushPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    PushPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'push-page.html'
                },] },
    ];
    PushPage.ctorParameters = [
        { type: NavController, },
    ];
    return PushPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = TabPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root" #content></ion-nav>'
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
