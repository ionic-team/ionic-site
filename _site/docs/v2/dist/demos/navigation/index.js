"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstPage = (function () {
    function FirstPage(nav, app, config) {
        _classCallCheck(this, FirstPage);

        this.nav = nav;
        this.title = 'First Page';
        this.pushPage = SecondPage;
        this.pushData = {
            id: 420
        };
    }

    _createClass(FirstPage, [{
        key: "setViews",
        value: function setViews() {
            var items = [ThirdPage];
            this.nav.setViews(items);
        }
    }, {
        key: "push",
        value: function push() {
            this.nav.push(SecondPage, { id: 8675309, myData: [1, 2, 3, 4] });
        }
    }]);

    return FirstPage;
})();
FirstPage = __decorate([(0, _ionicIonic.IonicView)({
    template: '' + '<ion-navbar *navbar primary>' + '<ion-title>{{title}}</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<h1>{{title}}</h1>' + '<p><button id="from1To2" secondary (click)="push()">(Push) Go to Second Page</button></p>' + '<p><button secondary [nav-push]="pushPage" [nav-params]="pushData">(Nav-Push) Go to Second Page</button></p>' + '<p><button danger (click)="setViews()">(setViews) Go to Third Page</button></p>' + '</ion-content>'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.Config !== 'undefined' && _ionicIonic.Config) === 'function' && _c || Object])], FirstPage);
var SecondPage = (function () {
    function SecondPage(nav, params) {
        _classCallCheck(this, SecondPage);

        this.nav = nav;
        this.params = params;
        console.log('Second page params:', params);
    }

    _createClass(SecondPage, [{
        key: "setViews",
        value: function setViews() {
            var items = [FirstPage, ThirdPage];
            this.nav.setViews(items);
        }
    }, {
        key: "pop",
        value: function pop() {
            this.nav.pop();
        }
    }, {
        key: "push",
        value: function push() {
            this.nav.push(ThirdPage);
        }
    }]);

    return SecondPage;
})();
SecondPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n    <ion-navbar secondary *navbar>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h1>Second page</h1>\n      <p><button (click)=\"pop()\">(Pop) Go back to First Page</button></p>\n      <p><button id=\"from2To1\" nav-pop>(NavPop) Go back to First Page</button></p>\n      <p><button danger id=\"from2To3\" (click)=\"push()\">(Push) Go to Third Page</button></p>\n      <p><button danger (click)=\"setViews()\">(setViews) Go to Third Page</button></p>\n    </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_d = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _d || Object, typeof (_e = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _e || Object])], SecondPage);
var ThirdPage = (function () {
    function ThirdPage(nav) {
        _classCallCheck(this, ThirdPage);

        this.nav = nav;
    }

    _createClass(ThirdPage, [{
        key: "pop",
        value: function pop() {
            this.nav.pop();
        }
    }]);

    return ThirdPage;
})();
ThirdPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n    <ion-navbar danger *navbar>\n      <ion-title>Third Page Header</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p>\n        <button secondary id=\"from3To2\" (click)=\"pop()\">(Pop) Go back to Second Page</button>\n      </p>\n    </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_f = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _f || Object])], ThirdPage);
var DemoApp = function DemoApp() {
    _classCallCheck(this, DemoApp);

    this.root = FirstPage;
};
DemoApp = __decorate([(0, _ionicIonic.App)({
    template: '<ion-nav [root]="root"></ion-nav>'
}), __metadata('design:paramtypes', [])], DemoApp);
var _a, _b, _c, _d, _e, _f;