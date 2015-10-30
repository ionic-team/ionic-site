"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
                return (d && d(target, key), void 0);
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

var IonicApp = (function () {
    function IonicApp(actionSheet) {
        _classCallCheck(this, IonicApp);

        this.actionSheet = actionSheet;
    }

    _createClass(IonicApp, [{
        key: "openMenu",
        value: function openMenu() {
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

    return IonicApp;
})();
IonicApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _a || Object])], IonicApp);
var _a;