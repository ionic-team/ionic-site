"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

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
var BasicPage = (function () {
    function BasicPage(actionSheet, platform) {
        _classCallCheck(this, BasicPage);

        this.actionSheet = actionSheet;
        this.platform = platform;
    }

    _createClass(BasicPage, [{
        key: "openMenu",
        value: function openMenu() {
            var _this = this;

            if (this.platform.is('android')) {
                var androidSheet = {
                    buttons: [{ text: 'Share', icon: 'share' }, { text: 'Play', icon: 'arrow-dropright-circle' }, { text: 'Favorite', icon: 'ion-md-heart-outline' }],
                    destructiveText: 'Delete',
                    titleText: 'Albums',
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
                buttons: [{ text: 'Share' }, { text: 'Play' }, { text: 'Favorite' }],
                destructiveText: 'Delete',
                titleText: 'Albums',
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
                console.log(actionSheetRef);
                _this.actionSheetRef = actionSheetRef;
            });
        }
    }, {
        key: "onPageWillLeave",
        value: function onPageWillLeave() {
            var actionSheet = this.actionSheet.get();
            if (actionSheet) {
                actionSheet.close();
            }
        }
    }]);

    return BasicPage;
})();
exports.BasicPage = BasicPage;
exports.BasicPage = BasicPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'action-sheets/basic/basic.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return _helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _b || Object])], BasicPage);
var _a, _b;