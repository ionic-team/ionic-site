System.register("index", ["ionic/ionic", "angular2/angular2", "navigation", "helpers"], function (_export) {
    "use strict";

    var App, IonicApp, ActionSheet, Animation, NavController, NavParams, IonicView, Events, NgZone, NavigationDetailsPage, helpers, __decorate, __metadata, MainPage, DemoApp, _a, _b, _c, _d, _e, _f;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicApp = _ionicIonic.IonicApp;
            ActionSheet = _ionicIonic.ActionSheet;
            Animation = _ionicIonic.Animation;
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            IonicView = _ionicIonic.IonicView;
            Events = _ionicIonic.Events;
        }, function (_angular2Angular2) {
            NgZone = _angular2Angular2.NgZone;
        }, function (_navigation) {
            NavigationDetailsPage = _navigation.NavigationDetailsPage;
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

            MainPage = (function () {
                function MainPage(app, nav, actionSheet, zone, params, events) {
                    var _this = this;

                    _classCallCheck(this, MainPage);

                    this.params = params;
                    this.nav = nav;
                    this.actionSheet = actionSheet;
                    this.navDetailsPage = NavigationDetailsPage;
                    this.component = { title: 'Tabs' };
                    this.setupAnimations();
                    window.addEventListener('message', function (e) {
                        zone.run(function () {
                            if (e.data) {
                                var data = JSON.parse(e.data);
                                _this.component.title = helpers.toTitleCase(data.hash.replace('-', ' '));
                            }
                        });
                    });
                    events.subscribe('page:locationChange', function (data) {
                        _this.component.title = data[0].componentName;
                    });
                }

                // **************************
                // Action Sheets
                // **************************

                _createClass(MainPage, [{
                    key: "openMenu",
                    value: function openMenu() {
                        var _this2 = this;

                        this.actionSheet.open({
                            buttons: [{ text: 'Share This' }, { text: 'Move' }],
                            destructiveText: 'Delete',
                            titleText: 'Modify your album',
                            cancelText: 'Cancel',
                            cancel: function cancel() {
                                console.log('Canceled');
                            },
                            destructiveButtonClicked: function destructiveButtonClicked() {
                                console.log('Destructive clicked');
                            },
                            buttonClicked: function buttonClicked(index) {
                                console.log('Button clicked', index);
                                if (index == 1) {
                                    return false;
                                }
                                return true;
                            }
                        }).then(function (actionSheetRef) {
                            _this2.actionSheetRef = actionSheetRef;
                        });
                    }

                    // **************************
                    // Navigation
                    // **************************
                }, {
                    key: "openNavDetailsPage",
                    value: function openNavDetailsPage(item) {
                        this.nav.push(NavigationDetailsPage, { name: item });
                    }

                    // **************************
                    // Animations
                    // **************************
                }, {
                    key: "setupAnimations",
                    value: function setupAnimations() {
                        this.animation = new Animation();
                        this.animation.duration(2000);
                        var ionitronSpin = new Animation(document.querySelector('#ionitron'));
                        ionitronSpin.from('transform', 'rotate(0deg)').to('transform', 'rotate(360deg)');
                        this.animation.add(ionitronSpin);
                    }
                }, {
                    key: "play",
                    value: function play() {
                        this.animation.play();
                    }
                }, {
                    key: "pause",
                    value: function pause() {
                        this.animation.pause();
                    }
                }]);

                return MainPage;
            })();

            MainPage = __decorate([IonicView({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a || Object, typeof (_b = typeof NavController !== 'undefined' && NavController) === 'function' && _b || Object, typeof (_c = typeof ActionSheet !== 'undefined' && ActionSheet) === 'function' && _c || Object, typeof (_d = typeof NgZone !== 'undefined' && NgZone) === 'function' && _d || Object, typeof (_e = typeof NavParams !== 'undefined' && NavParams) === 'function' && _e || Object, typeof (_f = typeof Events !== 'undefined' && Events) === 'function' && _f || Object])], MainPage);

            DemoApp = function DemoApp() {
                _classCallCheck(this, DemoApp);

                this.rootPage = MainPage;
            };

            DemoApp = __decorate([App({
                template: '<ion-nav [root]="rootPage"></ion-nav>'
            }), __metadata('design:paramtypes', [])], DemoApp);
        }
    };
});