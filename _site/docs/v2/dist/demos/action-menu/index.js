System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, ActionMenu, __decorate, __metadata, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            ActionMenu = _ionicIonic.ActionMenu;
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

            IonicApp = (function () {
                function IonicApp(actionMenu) {
                    _classCallCheck(this, IonicApp);

                    this.actionMenu = actionMenu;
                }

                _createClass(IonicApp, [{
                    key: "openMenu",
                    value: function openMenu() {
                        var _this = this;

                        this.actionMenu.open({
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
                        }).then(function (actionMenuRef) {
                            _this.actionMenuRef = actionMenuRef;
                        });
                    }
                }]);

                return IonicApp;
            })();

            IonicApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof ActionMenu !== 'undefined' && ActionMenu || Object])], IonicApp);
        }
    };
});