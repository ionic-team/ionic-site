System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, IonicView, IonicApp, IonicConfig, IonicPlatform, Modal, ActionMenu, NavController, NavParams, Animation, __decorate, __metadata, MyAppCmp, ContactModal, ModalFirstPage, ModalSecondPage, FadeIn, FadeOut;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicView = _ionicIonic.IonicView;
            IonicApp = _ionicIonic.IonicApp;
            IonicConfig = _ionicIonic.IonicConfig;
            IonicPlatform = _ionicIonic.IonicPlatform;
            Modal = _ionicIonic.Modal;
            ActionMenu = _ionicIonic.ActionMenu;
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            Animation = _ionicIonic.Animation;
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

            MyAppCmp = (function () {
                function MyAppCmp(modal, app, config, platform) {
                    _classCallCheck(this, MyAppCmp);

                    this.modal = modal;
                    console.log('platforms', platform.platforms());
                    console.log('mode', config.setting('mode'));
                    console.log('core', platform.is('core'));
                    console.log('cordova', platform.is('cordova'));
                    console.log('mobile', platform.is('mobile'));
                    console.log('ipad', platform.is('ipad'));
                    console.log('iphone', platform.is('iphone'));
                    console.log('phablet', platform.is('phablet'));
                    console.log('tablet', platform.is('tablet'));
                    console.log('ios', platform.is('ios'));
                    console.log('android', platform.is('android'));
                    console.log('windows phone', platform.is('windowsphone'));
                    console.log('isRTL', app.isRTL());
                    platform.ready().then(function () {
                        console.log('platform.ready');
                    });
                }

                _createClass(MyAppCmp, [{
                    key: "openModal",
                    value: function openModal() {
                        this.modal.open(ContactModal, {
                            enterAnimation: 'my-fade-in',
                            leaveAnimation: 'my-fade-out',
                            handle: 'my-awesome-modal'
                        });
                    }
                }]);

                return MyAppCmp;
            })();

            MyAppCmp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof Modal !== 'undefined' && Modal || Object, typeof IonicApp !== 'undefined' && IonicApp || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object, typeof IonicPlatform !== 'undefined' && IonicPlatform || Object])], MyAppCmp);

            ContactModal = (function () {
                function ContactModal() {
                    _classCallCheck(this, ContactModal);

                    console.log('ContactModal constructor');
                    this.rootView = ModalFirstPage;
                }

                _createClass(ContactModal, [{
                    key: "viewLoaded",
                    value: function viewLoaded() {
                        console.log('ContactModal viewLoaded');
                    }
                }, {
                    key: "viewWillEnter",
                    value: function viewWillEnter() {
                        console.log('ContactModal viewWillEnter');
                    }
                }, {
                    key: "viewDidEnter",
                    value: function viewDidEnter() {
                        console.log('ContactModal viewDidEnter');
                    }
                }, {
                    key: "viewWillLeave",
                    value: function viewWillLeave() {
                        console.log('ContactModal viewWillLeave');
                    }
                }, {
                    key: "viewDidLeave",
                    value: function viewDidLeave() {
                        console.log('ContactModal viewDidLeave');
                    }
                }, {
                    key: "viewWillUnload",
                    value: function viewWillUnload() {
                        console.log('ContactModal viewWillUnload');
                    }
                }, {
                    key: "viewDidUnload",
                    value: function viewDidUnload() {
                        console.log('ContactModal viewDidUnload');
                    }
                }]);

                return ContactModal;
            })();

            _export("ContactModal", ContactModal);

            _export("ContactModal", ContactModal = __decorate([IonicView({
                template: '<ion-nav [root]="rootView"></ion-nav>'
            }), __metadata('design:paramtypes', [])], ContactModal));

            ModalFirstPage = (function () {
                function ModalFirstPage(nav, modal, actionMenu) {
                    _classCallCheck(this, ModalFirstPage);

                    this.nav = nav;
                    this.modal = modal;
                    this.actionMenu = actionMenu;
                }

                _createClass(ModalFirstPage, [{
                    key: "push",
                    value: function push() {
                        this.nav.push(ModalSecondPage, { id: 8675309, myData: [1, 2, 3, 4] }, { animation: 'ios' });
                    }
                }, {
                    key: "closeModal",
                    value: function closeModal() {
                        var modal = this.modal.get();
                        modal.close();
                    }
                }, {
                    key: "closeByHandeModal",
                    value: function closeByHandeModal() {
                        var modal = this.modal.get('my-awesome-modal');
                        modal.close();
                    }
                }, {
                    key: "openActionMenu",
                    value: function openActionMenu() {
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

                return ModalFirstPage;
            })();

            _export("ModalFirstPage", ModalFirstPage);

            _export("ModalFirstPage", ModalFirstPage = __decorate([IonicView({
                template: "\n    <ion-navbar *navbar><ion-title>First Page Header</ion-title><ion-nav-items primary><button id=\"e2eCloseMenu\" (click)=\"closeModal()\">Close</button></ion-nav-items></ion-navbar>\n    <ion-content class=\"padding\">\n      <p>\n        <button (click)=\"push()\">Push (Go to 2nd)</button>\n      </p>\n      <p>\n        <button (click)=\"openActionMenu()\">Open Action Menu</button>\n      </p>\n      <p>\n        <button (click)=\"closeByHandeModal()\">Close By Handle</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof Modal !== 'undefined' && Modal || Object, typeof ActionMenu !== 'undefined' && ActionMenu || Object])], ModalFirstPage));

            ModalSecondPage = function ModalSecondPage(nav, params) {
                _classCallCheck(this, ModalSecondPage);

                this.nav = nav;
                this.params = params;
                console.log('Second page params:', params);
            };

            _export("ModalSecondPage", ModalSecondPage);

            _export("ModalSecondPage", ModalSecondPage = __decorate([IonicView({
                template: "\n    <ion-navbar *navbar><ion-title>Second Page Header</ion-title></ion-navbar>\n    <ion-content class=\"padding\">\n      <p>\n        <button (click)=\"nav.pop()\">Pop (Go back to 1st)</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof NavParams !== 'undefined' && NavParams || Object])], ModalSecondPage));

            FadeIn = (function (_Animation) {
                _inherits(FadeIn, _Animation);

                function FadeIn(element) {
                    _classCallCheck(this, FadeIn);

                    _get(Object.getPrototypeOf(FadeIn.prototype), "constructor", this).call(this, element);
                    this.easing('ease').duration(450).fadeIn();
                }

                return FadeIn;
            })(Animation);

            Animation.register('my-fade-in', FadeIn);

            FadeOut = (function (_Animation2) {
                _inherits(FadeOut, _Animation2);

                function FadeOut(element) {
                    _classCallCheck(this, FadeOut);

                    _get(Object.getPrototypeOf(FadeOut.prototype), "constructor", this).call(this, element);
                    this.easing('ease').duration(250).fadeOut();
                }

                return FadeOut;
            })(Animation);

            Animation.register('my-fade-out', FadeOut);
        }
    };
});