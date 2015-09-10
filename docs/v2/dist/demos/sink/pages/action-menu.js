System.register("pages/action-menu", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, NavController, ActionMenu, SinkPage, __decorate, __metadata, ActionMenuPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
            ActionMenu = _ionicIonic.ActionMenu;
        }, function (_sinkPage) {
            SinkPage = _sinkPage.SinkPage;
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

            ActionMenuPage = (function (_SinkPage) {
                _inherits(ActionMenuPage, _SinkPage);

                function ActionMenuPage(app, nav, actionMenu) {
                    _classCallCheck(this, ActionMenuPage);

                    _get(Object.getPrototypeOf(ActionMenuPage.prototype), "constructor", this).call(this, app);
                    this.nav = nav;
                    this.actionMenu = actionMenu;
                }

                _createClass(ActionMenuPage, [{
                    key: "openMenu",
                    value: function openMenu() {
                        var _this = this;

                        console.log('Opening ActionMenu');
                        this.actionMenu.open({
                            buttons: [{ text: 'Share This' }, { text: 'Move' }],
                            destructiveText: 'Delete',
                            titleText: 'Modify your album',
                            cancelText: 'Cancel',
                            cancel: function cancel() {
                                // add cancel code..
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

                return ActionMenuPage;
            })(SinkPage);

            _export("ActionMenuPage", ActionMenuPage);

            _export("ActionMenuPage", ActionMenuPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Action Menu</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Action Menu</h2>\n    <p>\n      The Action Menu, similar to Action Sheet's on iOS, is a slide-up prompt\n      that displays several options for the user to choose from before an action is performed.\n    </p>\n    <p>\n      Action Menu's are great for prompting for dangerous actions (like deleting a photo album),\n      or showing a \"context menu\" with multiple actions the user can perform on something.\n    </p>\n    <button (click)=\"openMenu()\">Open Menu</button>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof NavController !== 'undefined' && NavController || Object, typeof ActionMenu !== 'undefined' && ActionMenu || Object])], ActionMenuPage));
        }
    };
});