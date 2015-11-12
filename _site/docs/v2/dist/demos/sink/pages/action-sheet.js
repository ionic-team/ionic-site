"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ionicIonic = require('ionic/ionic');

var _sinkPage = require('../sink-page');

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
var ActionSheetPage = (function (_SinkPage) {
    _inherits(ActionSheetPage, _SinkPage);

    function ActionSheetPage(app, nav, actionSheet) {
        _classCallCheck(this, ActionSheetPage);

        _get(Object.getPrototypeOf(ActionSheetPage.prototype), "constructor", this).call(this, app);
        this.nav = nav;
        this.actionSheet = actionSheet;
    }

    _createClass(ActionSheetPage, [{
        key: "openMenu",
        value: function openMenu() {
            var _this = this;

            console.log('Opening ActionSheet');
            this.actionSheet.open({
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
            }).then(function (actionSheetRef) {
                _this.actionSheetRef = actionSheetRef;
            });
        }
    }]);

    return ActionSheetPage;
})(_sinkPage.SinkPage);
exports.ActionSheetPage = ActionSheetPage;
exports.ActionSheetPage = ActionSheetPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Action Sheet</ion-title></ion-navbar>\n\n  <ion-content padding>\n    <h2>Action Sheet</h2>\n    <p>\n      The Action Sheet, similar to Action Sheet's on iOS, is a slide-up prompt\n      that displays several options for the user to choose from before an action is performed.\n    </p>\n    <p>\n      Action Sheet's are great for prompting for dangerous actions (like deleting a photo album),\n      or showing a \"context menu\" with multiple actions the user can perform on something.\n    </p>\n    <button (click)=\"openMenu()\">Open Menu</button>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _c || Object])], ActionSheetPage);
var _a, _b, _c;