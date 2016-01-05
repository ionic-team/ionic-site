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
var ionic_3 = require('ionic/ionic');
var FirstPage = (function () {
    function FirstPage(nav, app, config) {
        this.nav = nav;
        this.title = 'First Page';
        this.pushPage = SecondPage;
        this.pushData = {
            id: 420
        };
    }
    FirstPage.prototype.setPages = function () {
        var items = [
            ThirdPage
        ];
        this.nav.setPages(items);
    };
    FirstPage.prototype.push = function () {
        this.nav.push(SecondPage, { id: 8675309, myData: [1, 2, 3, 4] });
    };
    FirstPage = __decorate([
        ionic_2.IonicView({
            template: '' +
                '<ion-navbar *navbar primary>' +
                '<ion-title>{{title}}</ion-title>' +
                '</ion-navbar>' +
                '<ion-content padding>' +
                '<h1>{{title}}</h1>' +
                '<p><button id="from1To2" secondary (click)="push()">(Push) Go to Second Page</button></p>' +
                '<p><button secondary [nav-push]="pushPage" [nav-params]="pushData">(Nav-Push) Go to Second Page</button></p>' +
                '<p><button danger (click)="setPages()">(setPages) Go to Third Page</button></p>' +
                '</ion-content>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_2.IonicApp !== 'undefined' && ionic_2.IonicApp) === 'function' && _b) || Object, (typeof (_c = typeof ionic_2.Config !== 'undefined' && ionic_2.Config) === 'function' && _c) || Object])
    ], FirstPage);
    return FirstPage;
    var _a, _b, _c;
})();
var SecondPage = (function () {
    function SecondPage(nav, params) {
        this.nav = nav;
        this.params = params;
        console.log('Second page params:', params);
    }
    SecondPage.prototype.setPages = function () {
        var items = [
            FirstPage,
            ThirdPage
        ];
        this.nav.setPages(items);
    };
    SecondPage.prototype.pop = function () {
        this.nav.pop();
    };
    SecondPage.prototype.push = function () {
        this.nav.push(ThirdPage);
    };
    SecondPage = __decorate([
        ionic_2.IonicView({
            template: "\n    <ion-navbar secondary *navbar>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h1>Second page</h1>\n      <p><button (click)=\"pop()\">(Pop) Go back to First Page</button></p>\n      <p><button id=\"from2To1\" nav-pop>(NavPop) Go back to First Page</button></p>\n      <p><button danger id=\"from2To3\" (click)=\"push()\">(Push) Go to Third Page</button></p>\n      <p><button danger (click)=\"setPages()\">(setPages) Go to Third Page</button></p>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_3.NavParams !== 'undefined' && ionic_3.NavParams) === 'function' && _b) || Object])
    ], SecondPage);
    return SecondPage;
    var _a, _b;
})();
var ThirdPage = (function () {
    function ThirdPage(nav) {
        this.nav = nav;
    }
    ThirdPage.prototype.pop = function () {
        this.nav.pop();
    };
    ThirdPage = __decorate([
        ionic_2.IonicView({
            template: "\n    <ion-navbar danger *navbar>\n      <ion-title>Third Page Header</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p>\n        <button secondary id=\"from3To2\" (click)=\"pop()\">(Pop) Go back to Second Page</button>\n      </p>\n    </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object])
    ], ThirdPage);
    return ThirdPage;
    var _a;
})();
var DemoApp = (function () {
    function DemoApp() {
        this.root = FirstPage;
    }
    DemoApp = __decorate([
        ionic_1.App({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], DemoApp);
    return DemoApp;
})();