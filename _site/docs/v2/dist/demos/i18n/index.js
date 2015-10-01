System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicApp, App, Translate, TranslatePipe, __decorate, __metadata, MyApp;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            App = _ionicIonic.App;
            Translate = _ionicIonic.Translate;
            TranslatePipe = _ionicIonic.TranslatePipe;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            MyApp = function MyApp(app, trans) {
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

            MyApp = __decorate([App({
                templateUrl: 'main.html',
                pipes: [TranslatePipe]
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof Translate !== 'undefined' && Translate || Object])], MyApp);
        }
    };
});