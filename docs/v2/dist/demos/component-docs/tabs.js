System.register("tabs", ["ionic/ionic", "index", "helpers"], function (_export) {
    "use strict";

    var NavController, NavParams, IonicView, Events, MainPage, helpers, __decorate, __metadata, TabsPage, _a, _b, _c;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            IonicView = _ionicIonic.IonicView;
            Events = _ionicIonic.Events;
        }, function (_index) {
            MainPage = _index.MainPage;
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

            TabsPage = function TabsPage(nav, params, events) {
                var _this = this;

                _classCallCheck(this, TabsPage);

                this.nav = nav;
                window.onmessage = function (e) {
                    zone.run(function () {
                        if (e.data) {
                            var data = JSON.parse(e.data);
                            var componentTitle = helpers.toTitleCase(data.hash.replace('-', ' '));
                            console.log(componentTitle);
                            _this.nav.push(MainPage, { 'location': componentTitle });
                        }
                    });
                };
            };

            _export("TabsPage", TabsPage);

            _export("TabsPage", TabsPage = __decorate([IonicView({
                templateUrl: 'tabs.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof NavParams !== 'undefined' && NavParams) === 'function' && _b || Object, typeof (_c = typeof Events !== 'undefined' && Events) === 'function' && _c || Object])], TabsPage));
        }
    };
});