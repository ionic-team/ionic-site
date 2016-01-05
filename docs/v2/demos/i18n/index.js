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
var MyApp = (function () {
    function MyApp(app, trans) {
        this.app = app;
        this.trans = trans;
        this.trans.translations('de', {
            'Location': 'lage'
        });
        console.log(this.trans.translate('Location'));
        console.log(this.trans.translate('Location', 'de'));
        //this.trans.setLanguage('de');
        console.log(this.trans.translate('Location'));
    }
    MyApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html',
            pipes: [ionic_2.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ionic_2.Translate !== 'undefined' && ionic_2.Translate) === 'function' && _b) || Object])
    ], MyApp);
    return MyApp;
    var _a, _b;
})();