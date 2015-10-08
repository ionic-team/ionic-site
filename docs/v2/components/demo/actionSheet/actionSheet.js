System.register("actionSheet/actionSheet", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicPlatform, IonicView, ActionSheet, __decorate, __metadata, ActionSheetPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicPlatform = _ionicIonic.IonicPlatform;
            IonicView = _ionicIonic.IonicView;
            ActionSheet = _ionicIonic.ActionSheet;
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

            ActionSheetPage = (function () {
                function ActionSheetPage(actionSheet, platform) {
                    _classCallCheck(this, ActionSheetPage);

                    this.actionSheet = actionSheet;
                    this.platform = platform;
                }

                _createClass(ActionSheetPage, [{
                    key: "openMenu",
                    value: function openMenu() {
                        var _this = this;

                        if (this.platform.is('android')) {
                            var androidSheet = {
                                buttons: [{ text: 'Share', icon: 'share' }, { text: 'Play', icon: 'arrow-dropright-circle' }, { text: 'Favorite', icon: 'ion-md-heart-outline' }],
                                destructiveText: 'Delete',
                                titleText: 'Purchased',
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
                            };
                        }
                        this.actionSheet.open(androidSheet || {
                            buttons: [{ text: 'Share This' }, { text: 'Move' }],
                            destructiveText: 'Delete',
                            titleText: 'You Opened Action Sheet',
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
                            _this.actionSheetRef = actionSheetRef;
                        });
                    }
                }]);

                return ActionSheetPage;
            })();

            _export("ActionSheetPage", ActionSheetPage);

            _export("ActionSheetPage", ActionSheetPage = __decorate([IonicView({
                templateUrl: 'actionSheet/actionSheet.html'
            }), __metadata('design:paramtypes', [typeof ActionSheet !== 'undefined' && ActionSheet || Object, typeof IonicPlatform !== 'undefined' && IonicPlatform || Object])], ActionSheetPage));
        }
    };
});