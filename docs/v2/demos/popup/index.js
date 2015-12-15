"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

    this.rootPage = InitialPage;
};
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [])], ApiDemoApp);
var InitialPage = (function () {
    function InitialPage(popup) {
        _classCallCheck(this, InitialPage);

        this.popup = popup;
        this.confirmOpen = false;
        this.confirmResult = '';
    }

    _createClass(InitialPage, [{
        key: "doAlert",
        value: function doAlert() {
            this.popup.alert({
                title: "New Friend!",
                template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
                cssClass: 'my-alert'
            });
        }
    }, {
        key: "doPrompt",
        value: function doPrompt() {
            this.popup.prompt({
                title: "New Album",
                template: "Enter a name for this new album you're so keen on adding",
                inputPlaceholder: "Title",
                okText: "Save"
            });
        }
    }, {
        key: "doConfirm",
        value: function doConfirm() {
            this.confirmOpen = true;
            this.popup.confirm({
                title: "Use this lightsaber?",
                subTitle: "You can't exchange lightsabers",
                template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
                cancelText: "Disagree",
                okText: "Agree"
            });
        }
    }]);

    return InitialPage;
})();
exports.InitialPage = InitialPage;
exports.InitialPage = InitialPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Popup !== 'undefined' && _ionicIonic.Popup) === 'function' && _a || Object])], InitialPage);
var _a;