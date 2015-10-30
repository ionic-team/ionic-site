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

var NavigationDetailsPage = function NavigationDetailsPage(nav, params, events) {
    _classCallCheck(this, NavigationDetailsPage);

    this.nav = nav;
    this.selection = { title: params.data.name };
    var navData = {
        'Angular': "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
        'CSS3': "The latest version of cascading stylesheets - the styling language of the web!",
        'HTML5': "The latest version of the web's markup language.",
        'Sass': "Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension."
    };
    var navIcons = {
        'Angular': 'ion-social-angular',
        'CSS3': 'ion-social-css3',
        'HTML5': 'ion-social-html5',
        'Sass': 'ion-social-sass'
    };
    this.selection['content'] = navData[this.selection.title];
    this.selection['icon'] = navIcons[this.selection.title];
};
NavigationDetailsPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'navigation/navigation-details.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _b || Object, typeof (_c = typeof _ionicIonic.Events !== 'undefined' && _ionicIonic.Events) === 'function' && _c || Object])], NavigationDetailsPage);
var NavigationPage = (function () {
    function NavigationPage(nav) {
        _classCallCheck(this, NavigationPage);

        this.nav = nav;
    }

    _createClass(NavigationPage, [{
        key: "openNavDetailsPage",
        value: function openNavDetailsPage(item) {
            this.nav.push(NavigationDetailsPage, { name: item });
        }
    }]);

    return NavigationPage;
})();
exports.NavigationPage = NavigationPage;
exports.NavigationPage = NavigationPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'navigation/navigation.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_d = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _d || Object])], NavigationPage);
var _a, _b, _c, _d;