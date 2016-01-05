var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var ionic_2 = require('ionic/ionic');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = ModalFirstPage;
    }
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
})();
var ModalFirstPage = (function () {
    function ModalFirstPage(modal) {
        this.modal = modal;
        this.myParam = '';
    }
    ModalFirstPage.prototype.openBasicModal = function () {
        this.modal.open(ModalContentPage);
    };
    ModalFirstPage.prototype.openModalWithParams = function () {
        this.modal.open(ModalContentPage, { 'myParam': this.myParam });
    };
    ModalFirstPage.prototype.openCustomAnimationModal = function () {
        this.modal.open(ModalContentPage, {}, {
            enterAnimation: 'my-fade-in',
            leaveAnimation: 'my-fade-out',
            handle: 'my-awesome-modal'
        });
    };
    ModalFirstPage = __decorate([
        ionic_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_2.Modal !== 'undefined' && ionic_2.Modal) === 'function' && _a) || Object])
    ], ModalFirstPage);
    return ModalFirstPage;
    var _a;
})();
exports.ModalFirstPage = ModalFirstPage;
var ModalContentPage = (function () {
    function ModalContentPage(nav, modal, actionSheet, params) {
        this.nav = nav;
        this.modal = modal;
        this.actionSheet = actionSheet;
        this.myParam = params.get('myParam');
    }
    ModalContentPage.prototype.closeModal = function () {
        var modal = this.modal.get();
        if (modal) {
            modal.close();
        }
    };
    ModalContentPage.prototype.openActionSheet = function () {
        var _this = this;
        this.actionSheet.open({
            buttons: [
                { text: 'Share This' },
                { text: 'Move' }
            ],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function () {
                console.log('Canceled');
            },
            destructiveButtonClicked: function () {
                console.log('Destructive clicked');
            },
            buttonClicked: function (index) {
                console.log('Button clicked', index);
                if (index == 1) {
                    return false;
                }
                return true;
            }
        }).then(function (actionSheetRef) {
            _this.actionSheetRef = actionSheetRef;
        });
    };
    ModalContentPage = __decorate([
        ionic_1.Page({
            templateUrl: "modal-content.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_2.NavController !== 'undefined' && ionic_2.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_2.Modal !== 'undefined' && ionic_2.Modal) === 'function' && _b) || Object, (typeof (_c = typeof ionic_2.ActionSheet !== 'undefined' && ionic_2.ActionSheet) === 'function' && _c) || Object, (typeof (_d = typeof ionic_2.NavParams !== 'undefined' && ionic_2.NavParams) === 'function' && _d) || Object])
    ], ModalContentPage);
    return ModalContentPage;
    var _a, _b, _c, _d;
})();
exports.ModalContentPage = ModalContentPage;
var FadeIn = (function (_super) {
    __extends(FadeIn, _super);
    function FadeIn(enteringView, leavingView) {
        _super.call(this, enteringView.pageRef());
        this
            .easing('ease')
            .duration(1000)
            .fromTo('translateY', '0%', '0%')
            .fadeIn()
            .before.addClass('show-page');
    }
    return FadeIn;
})(ionic_2.Animation);
ionic_2.Animation.register('my-fade-in', FadeIn);
var FadeOut = (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(enteringView, leavingView) {
        _super.call(this, leavingView.pageRef());
        this
            .easing('ease')
            .duration(500)
            .fadeOut()
            .before.addClass('show-page');
    }
    return FadeOut;
})(ionic_2.Animation);
ionic_2.Animation.register('my-fade-out', FadeOut);