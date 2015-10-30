"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../helpers');

var helpers = _interopRequireWildcard(_helpers);

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
var CheckboxPage = function CheckboxPage() {
    _classCallCheck(this, CheckboxPage);
};
exports.CheckboxPage = CheckboxPage;
exports.CheckboxPage = CheckboxPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/checkbox.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], CheckboxPage);
var RadioPage = function RadioPage() {
    _classCallCheck(this, RadioPage);
};
exports.RadioPage = RadioPage;
exports.RadioPage = RadioPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/radio.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], RadioPage);
var RangePage = function RangePage() {
    _classCallCheck(this, RangePage);
};
exports.RangePage = RangePage;
exports.RangePage = RangePage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/range.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], RangePage);
var SelectPage = function SelectPage() {
    _classCallCheck(this, SelectPage);
};
exports.SelectPage = SelectPage;
exports.SelectPage = SelectPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/select.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], SelectPage);
var SwitchPage = function SwitchPage() {
    _classCallCheck(this, SwitchPage);
};
exports.SwitchPage = SwitchPage;
exports.SwitchPage = SwitchPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/switch.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], SwitchPage);