System.register("index", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var Directive, ElementRef, App, NavController, IonicView, __decorate, __metadata, AppPage, ParallaxEffect, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            NavController = _ionicIonic.NavController;
            IonicView = _ionicIonic.IonicView;
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

            AppPage = (function () {
                function AppPage(nav) {
                    _classCallCheck(this, AppPage);

                    this.nav = nav;
                }

                _createClass(AppPage, [{
                    key: "doLogin",
                    value: function doLogin() {}
                }]);

                return AppPage;
            })();

            AppPage = __decorate([IonicView({
                templateUrl: 'pages/app.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], AppPage);

            ParallaxEffect = (function () {
                function ParallaxEffect(elementRef) {
                    var _this = this;

                    _classCallCheck(this, ParallaxEffect);

                    this.ele = elementRef.nativeElement;
                    setTimeout(function () {
                        Object.observe(_this, function (changes) {
                            changes.forEach(function (change) {
                                if (change.name == 'parallax') {
                                    _this.parallaxItems();
                                }
                            });
                        });
                    });
                }

                _createClass(ParallaxEffect, [{
                    key: "parallaxItems",
                    value: function parallaxItems() {
                        var list = this.ele;
                        console.log('Moving items', this.parallax);
                        var x = Math.max(0, (1 - this.parallax) * 20);
                        var y = 0; //Math.max(0, (1 - this.parallax) * 10);
                        var scale = Math.min(1, 0.9 + 0.1 * this.parallax);
                        list.style['opacity'] = Math.min(this.parallax, 1);
                        list.style['transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ')';
                    }
                }]);

                return ParallaxEffect;
            })();

            _export("ParallaxEffect", ParallaxEffect);

            _export("ParallaxEffect", ParallaxEffect = __decorate([Directive({
                selector: '[parallax]',
                properties: ['parallax']
            }), __metadata('design:paramtypes', [typeof ElementRef !== 'undefined' && ElementRef || Object])], ParallaxEffect));
            /**
             * Main app entry point
             */

            IonicApp = (function () {
                function IonicApp() {
                    _classCallCheck(this, IonicApp);

                    this.rootView = AppPage;
                    this.menuOpenAmount = 0;
                }

                _createClass(IonicApp, [{
                    key: "onMenuOpening",
                    value: function onMenuOpening(amt) {
                        this.menuOpenAmount = amt;
                    }
                }]);

                return IonicApp;
            })();

            IonicApp = __decorate([App({
                directives: [ParallaxEffect],
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});