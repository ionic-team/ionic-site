"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyApp = function MyApp(app, trans) {
    _classCallCheck(this, MyApp);

    this.app = app;
    this.trans = trans;
    this.trans.translations('de', {
        'Location': 'lage'
    });
    console.log(this.trans.translate('Location'));
    console.log(this.trans.translate('Location', 'de'));
    //this.trans.setLanguage('de');
    console.log(this.trans.translate('Location'));
};
MyApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html',
    pipes: [_ionicIonic.TranslatePipe]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Translate !== 'undefined' && _ionicIonic.Translate) === 'function' && _b || Object])], MyApp);
var _a, _b;