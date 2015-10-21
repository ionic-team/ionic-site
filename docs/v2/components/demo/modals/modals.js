"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var ModalsFirstPage = (function () {
    function ModalsFirstPage(nav, modal, events) {
        _classCallCheck(this, ModalsFirstPage);

        this.nav = nav;
        this.modal = modal;
    }

    _createClass(ModalsFirstPage, [{
        key: "openModal",
        value: function openModal() {
            this.modal.open(ModalsContentPage);
        }
    }]);

    return ModalsFirstPage;
})();
ModalsFirstPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'modals/modals.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.Events !== 'undefined' && _ionicIonic.Events) === 'function' && _c || Object])], ModalsFirstPage);
var ModalsContentPage = (function () {
    function ModalsContentPage(modal, events) {
        _classCallCheck(this, ModalsContentPage);

        this.modal = modal;
    }

    _createClass(ModalsContentPage, [{
        key: "closeModal",
        value: function closeModal() {
            var modal = this.modal.get();
            if (modal) {
                modal.close();
            }
        }
    }]);

    return ModalsContentPage;
})();
ModalsContentPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'modals/modals-content.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_d = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _d || Object, typeof (_e = typeof _ionicIonic.Events !== 'undefined' && _ionicIonic.Events) === 'function' && _e || Object])], ModalsContentPage);
var ModalsPage = function ModalsPage() {
    _classCallCheck(this, ModalsPage);

    this.rootView = ModalsFirstPage;
};
exports.ModalsPage = ModalsPage;
exports.ModalsPage = ModalsPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-nav [root]="rootView"></ion-nav>'
}), __metadata('design:paramtypes', [])], ModalsPage);
var _a, _b, _c, _d, _e;