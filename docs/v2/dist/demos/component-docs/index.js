System.register("index", ["ionic/ionic", "angular2/angular2"], function (_export) {
    "use strict";

    var App, ActionSheet, Animation, NgZone, __decorate, __metadata, DemoApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            ActionSheet = _ionicIonic.ActionSheet;
            Animation = _ionicIonic.Animation;
        }, function (_angular2Angular2) {
            NgZone = _angular2Angular2.NgZone;
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

            DemoApp = (function () {
                function DemoApp(actionSheet, zone) {
                    var _this = this;

                    _classCallCheck(this, DemoApp);

                    this.actionSheet = actionSheet;
                    this.component = {
                        title: 'Action Sheets'
                    };
                    window.onmessage = function (e) {
                        zone.run(function () {
                            if (e.data) {
                                var data = JSON.parse(e.data);
                                _this.component.title = toTitleCase(data.hash.replace('-', ' '));
                            }
                        });
                    };
                    this.setupAnimations();
                }

                _createClass(DemoApp, [{
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

                return DemoApp;
            })();

            DemoApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof ActionSheet !== 'undefined' && ActionSheet || Object, typeof NgZone !== 'undefined' && NgZone || Object])], DemoApp);
        }
    };
});