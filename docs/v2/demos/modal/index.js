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
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiDemoApp = function ApiDemoApp() {
    _classCallCheck(this, ApiDemoApp);

    this.rootPage = ModalFirstPage;
};
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [])], ApiDemoApp);
var ModalFirstPage = (function () {
    function ModalFirstPage(modal) {
        _classCallCheck(this, ModalFirstPage);

        this.modal = modal;
        this.myParam = '';
    }

    _createClass(ModalFirstPage, [{
        key: "openBasicModal",
        value: function openBasicModal() {
            this.modal.open(ModalContentPage);
        }
    }, {
        key: "openModalWithParams",
        value: function openModalWithParams() {
            this.modal.open(ModalContentPage, { 'myParam': this.myParam });
        }
    }, {
        key: "openCustomAnimationModal",
        value: function openCustomAnimationModal() {
            this.modal.open(ModalContentPage, {}, {
                enterAnimation: 'my-fade-in',
                leaveAnimation: 'my-fade-out',
                handle: 'my-awesome-modal'
            });
        }
    }]);

    return ModalFirstPage;
})();
exports.ModalFirstPage = ModalFirstPage;
exports.ModalFirstPage = ModalFirstPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _a || Object])], ModalFirstPage);
var ModalContentPage = (function () {
    function ModalContentPage(nav, modal, actionSheet, params) {
        _classCallCheck(this, ModalContentPage);

        this.nav = nav;
        this.modal = modal;
        this.actionSheet = actionSheet;
        this.myParam = params.get('myParam');
    }

    _createClass(ModalContentPage, [{
        key: "closeModal",
        value: function closeModal() {
            var modal = this.modal.get();
            if (modal) {
                modal.close();
            }
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

    return ModalContentPage;
})();
exports.ModalContentPage = ModalContentPage;
exports.ModalContentPage = ModalContentPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: "modal-content.html"
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _c || Object, typeof (_d = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _d || Object, typeof (_e = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _e || Object])], ModalContentPage);

var FadeIn = (function (_Animation) {
    _inherits(FadeIn, _Animation);

    function FadeIn(enteringView, leavingView) {
        _classCallCheck(this, FadeIn);

        _get(Object.getPrototypeOf(FadeIn.prototype), "constructor", this).call(this, enteringView.pageRef());
        this.easing('ease').duration(1000).fromTo('translateY', '0%', '0%').fadeIn().before.addClass('show-page');
    }

    return FadeIn;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-in', FadeIn);

var FadeOut = (function (_Animation2) {
    _inherits(FadeOut, _Animation2);

    function FadeOut(enteringView, leavingView) {
        _classCallCheck(this, FadeOut);

        _get(Object.getPrototypeOf(FadeOut.prototype), "constructor", this).call(this, leavingView.pageRef());
        this.easing('ease').duration(500).fadeOut().before.addClass('show-page');
    }

    return FadeOut;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-out', FadeOut);
var _a, _b, _c, _d, _e;