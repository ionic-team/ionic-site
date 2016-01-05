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
var helpers_1 = require('../../helpers');
var core_1 = require('angular2/core');
var BasicPage = (function () {
    function BasicPage(popup) {
        this.popup = popup;
    }
    BasicPage.prototype.doAlert = function () {
        this.popup.alert({
            title: "New Friend!",
            template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
            cssClass: 'my-alert'
        });
    };
    BasicPage.prototype.doPrompt = function () {
        this.popup.prompt({
            title: "New Album",
            template: "Enter a name for this new album you're so keen on adding",
            inputPlaceholder: "Title",
            okText: "Save"
        });
    };
    BasicPage.prototype.doConfirm = function () {
        this.popup.confirm({
            title: "Use this lightsaber?",
            template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
            cancelText: "Disagree",
            okText: "Agree"
        });
    };
    BasicPage.prototype.onPageWillLeave = function () {
        var popup = this.popup.get();
        // only try to close if there is an active popup
        if (popup) {
            popup.close();
        }
    };
    BasicPage = __decorate([
        ionic_1.Page({
            templateUrl: 'popups/basic/template.html',
            directives: [core_1.forwardRef(function () { return helpers_1.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Popup !== 'undefined' && ionic_1.Popup) === 'function' && _a) || Object])
    ], BasicPage);
    return BasicPage;
    var _a;
})();
exports.BasicPage = BasicPage;