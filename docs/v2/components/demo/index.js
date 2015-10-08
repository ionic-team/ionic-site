System.register("index", ["ionic/ionic", "actionSheet/actionSheet", "helpers"], function (_export) {
    "use strict";

    var App, IonicApp, IonicPlatform, ActionSheetPage, helpers, __decorate, __metadata, DemoApp, _a, _b;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicApp = _ionicIonic.IonicApp;
            IonicPlatform = _ionicIonic.IonicPlatform;
        }, function (_actionSheetActionSheet) {
            ActionSheetPage = _actionSheetActionSheet.ActionSheetPage;
        }, function (_helpers) {
            helpers = _helpers;
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

            DemoApp = function DemoApp(app, platform) {
                var _this = this;

                _classCallCheck(this, DemoApp);

                this.app = app;
                this.platform = platform;
                this.platform.ready().then(function () {
                    window.addEventListener('message', function (e) {
                        zone.run(function () {
                            if (e.data) {
                                var data = JSON.parse(e.data);
                                if (data.hash) {
                                    _this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
                                } else {
                                    _this.nextPage = ActionSheetPage;
                                }
                                var nav = _this.app.getComponent('nav');
                                nav.setRoot(_this.nextPage);
                            }
                        });
                    });
                    window.parent.postMessage(_this.platform.is('ios') ? "ios" : "android", "*");
                });
            };

            DemoApp = __decorate([App({
                template: '<ion-nav id="nav" [root]="rootPage"></ion-nav><ion-overlay></ion-overlay>'
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a || Object, typeof (_b = typeof IonicPlatform !== 'undefined' && IonicPlatform) === 'function' && _b || Object])], DemoApp);
        }
    };
});