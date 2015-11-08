"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

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

var ModalsInitialPage = (function () {
    function ModalsInitialPage(nav, modal) {
        _classCallCheck(this, ModalsInitialPage);

        this.nav = nav;
        this.modal = modal;
    }

    _createClass(ModalsInitialPage, [{
        key: "openModal",
        value: function openModal(characterNum) {
            this.modal.open(ModalsContentPage, characterNum);
        }
    }]);

    return ModalsInitialPage;
})();
ModalsInitialPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'modals/basic/template.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _b || Object])], ModalsInitialPage);
var ModalsContentPage = (function () {
    function ModalsContentPage(modal, platform) {
        _classCallCheck(this, ModalsContentPage);

        this.modal = modal;
        if (platform.is('android')) {
            this.currentPlatform = 'android';
        } else {
            this.currentPlatform = 'ios';
        }
        var characters = [{
            name: 'Gollum',
            quote: 'Sneaky little hobbitses!',
            image: 'img/avatar-gollum.jpg',
            items: [{ title: 'Race', note: 'Hobbit' }, { title: 'Culture', note: 'River Folk' }, { title: 'Alter Ego', note: 'Smeagol' }]
        }, {
            name: 'Frodo',
            quote: 'Go back, Sam! I\'m going to Mordor alone!',
            image: 'img/avatar-gollum.jpg',
            items: [{ title: 'Race', note: 'Hobbit' }, { title: 'Culture', note: 'Shire Folk' }, { title: 'Weapon', note: 'Sting' }]
        }, {
            name: 'Sam',
            quote: 'What we need is a few good taters.',
            image: 'img/avatar-gollum.jpg',
            items: [{ title: 'Race', note: 'Hobbit' }, { title: 'Culture', note: 'Shire Folk' }, { title: 'Alter Ego', note: 'Smeagol' }]
        }];
        this.character = characters[this.modal._defaults.charNum];
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
    templateUrl: 'modals/basic/modal-content.html',
    directives: [_angular2Angular2.NgFor, (0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_c = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _c || Object, typeof (_d = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _d || Object])], ModalsContentPage);
var BasicPage = (function () {
    function BasicPage(modal) {
        _classCallCheck(this, BasicPage);

        this.rootView = ModalsInitialPage;
        this.modal = modal;
    }

    _createClass(BasicPage, [{
        key: "onPageWillLeave",
        value: function onPageWillLeave() {
            var modal = this.modal.get();
            if (modal) {
                modal.close();
            }
        }
    }]);

    return BasicPage;
})();
exports.BasicPage = BasicPage;
exports.BasicPage = BasicPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-nav [root]="rootView"></ion-nav>'
}), __metadata('design:paramtypes', [typeof (_e = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _e || Object])], BasicPage);
var _a, _b, _c, _d, _e;