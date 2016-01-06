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
var common_1 = require('angular2/common');
var helpers = require('../../helpers');
var ModalsInitialPage = (function () {
    function ModalsInitialPage(nav) {
        this.nav = nav;
    }
    ModalsInitialPage.prototype.openModal = function (characterNum) {
        var myModal = ionic_1.Modal.create(ModalsContentPage, characterNum);
        this.nav.present(myModal);
    };
    ModalsInitialPage = __decorate([
        ionic_1.Page({
            templateUrl: 'modals/basic/template.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object])
    ], ModalsInitialPage);
    return ModalsInitialPage;
    var _a;
})();
var ModalsContentPage = (function () {
    function ModalsContentPage(platform, params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        if (platform.is('android')) {
            this.currentPlatform = 'android';
        }
        else {
            this.currentPlatform = 'ios';
        }
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    ModalsContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalsContentPage = __decorate([
        ionic_1.Page({
            templateUrl: 'modals/basic/modal-content.html',
            directives: [common_1.NgFor, core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object, (typeof (_b = typeof ionic_1.NavParams !== 'undefined' && ionic_1.NavParams) === 'function' && _b) || Object, (typeof (_c = typeof ionic_1.ViewController !== 'undefined' && ionic_1.ViewController) === 'function' && _c) || Object])
    ], ModalsContentPage);
    return ModalsContentPage;
    var _a, _b, _c;
})();
var BasicPage = (function () {
    function BasicPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.rootView = ModalsInitialPage;
    }
    BasicPage.prototype.onPageWillLeave = function () {
        this.viewCtrl.dismiss();
    };
    BasicPage = __decorate([
        ionic_1.Page({
            template: '<ion-nav [root]="rootView"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.ViewController !== 'undefined' && ionic_1.ViewController) === 'function' && _a) || Object])
    ], BasicPage);
    return BasicPage;
    var _a;
})();
exports.BasicPage = BasicPage;