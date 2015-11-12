"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAppCmp = (function () {
    function MyAppCmp(modal, app, config, platform) {
        _classCallCheck(this, MyAppCmp);

        this.modal = modal;
        console.log('platforms', platform.platforms());
        console.log('mode', config.get('mode'));
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
MyAppCmp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.Config !== 'undefined' && _ionicIonic.Config) === 'function' && _c || Object, typeof (_d = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _d || Object])], MyAppCmp);
var ContactModal = (function () {
    function ContactModal() {
        _classCallCheck(this, ContactModal);

        console.log('ContactModal constructor');
        this.rootView = ModalFirstPage;
    }

    _createClass(ContactModal, [{
        key: "onViewLoaded",
        value: function onViewLoaded() {
            console.log('ContactModal onViewLoaded');
        }
    }, {
        key: "onViewWillEnter",
        value: function onViewWillEnter() {
            console.log('ContactModal onViewWillEnter');
        }
    }, {
        key: "onViewDidEnter",
        value: function onViewDidEnter() {
            console.log('ContactModal onViewDidEnter');
        }
    }, {
        key: "onViewWillLeave",
        value: function onViewWillLeave() {
            console.log('ContactModal onViewWillLeave');
        }
    }, {
        key: "onViewDidLeave",
        value: function onViewDidLeave() {
            console.log('ContactModal onViewDidLeave');
        }
    }, {
        key: "onViewWillUnload",
        value: function onViewWillUnload() {
            console.log('ContactModal onViewWillUnload');
        }
    }, {
        key: "onViewDidUnload",
        value: function onViewDidUnload() {
            console.log('ContactModal onViewDidUnload');
        }
    }]);

    return ContactModal;
})();
exports.ContactModal = ContactModal;
exports.ContactModal = ContactModal = __decorate([(0, _ionicIonic.IonicView)({
    template: '<ion-nav [root]="rootView"></ion-nav>'
}), __metadata('design:paramtypes', [])], ContactModal);
var ModalFirstPage = (function () {
    function ModalFirstPage(nav, modal, actionSheet) {
        _classCallCheck(this, ModalFirstPage);

        this.nav = nav;
        this.modal = modal;
        this.actionSheet = actionSheet;
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
        key: "openActionSheet",
        value: function openActionSheet() {
            var _this = this;

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
                _this.actionSheetRef = actionSheetRef;
            });
        }
    }]);

    return ModalFirstPage;
})();
exports.ModalFirstPage = ModalFirstPage;
exports.ModalFirstPage = ModalFirstPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n    <ion-navbar *navbar><ion-title>First Page Header</ion-title><ion-nav-items primary><button (click)=\"closeModal()\">Close</button></ion-nav-items></ion-navbar>\n    <ion-content padding>\n      <p>\n        <button (click)=\"push()\">Push (Go to 2nd)</button>\n      </p>\n      <p>\n        <button (click)=\"openActionSheet()\">Open Action Sheet</button>\n      </p>\n      <p>\n        <button (click)=\"closeByHandeModal()\">Close By Handle</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n    </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_e = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _e || Object, typeof (_f = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _f || Object, typeof (_g = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _g || Object])], ModalFirstPage);
var ModalSecondPage = function ModalSecondPage(nav, params) {
    _classCallCheck(this, ModalSecondPage);

    this.nav = nav;
    this.params = params;
    console.log('Second page params:', params);
};
exports.ModalSecondPage = ModalSecondPage;
exports.ModalSecondPage = ModalSecondPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n    <ion-navbar *navbar><ion-title>Second Page Header</ion-title></ion-navbar>\n    <ion-content padding>\n      <p>\n        <button (click)=\"nav.pop()\">Pop (Go back to 1st)</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n    </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_h = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _h || Object, typeof (_j = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _j || Object])], ModalSecondPage);

var FadeIn = (function (_Animation) {
    _inherits(FadeIn, _Animation);

    function FadeIn(element) {
        _classCallCheck(this, FadeIn);

        _get(Object.getPrototypeOf(FadeIn.prototype), "constructor", this).call(this, element);
        this.easing('ease').duration(450).fadeIn();
    }

    return FadeIn;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-in', FadeIn);

var FadeOut = (function (_Animation2) {
    _inherits(FadeOut, _Animation2);

    function FadeOut(element) {
        _classCallCheck(this, FadeOut);

        _get(Object.getPrototypeOf(FadeOut.prototype), "constructor", this).call(this, element);
        this.easing('ease').duration(250).fadeOut();
    }

    return FadeOut;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-out', FadeOut);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;