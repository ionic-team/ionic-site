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
var core_1 = require('angular2/core');
var helpers = require('../../helpers');
var NavigationDetailsPage = (function () {
    function NavigationDetailsPage(nav, params) {
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
    }
    NavigationDetailsPage = __decorate([
        ionic_2.Page({
            templateUrl: 'navigation/basic/navigation-details.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_1.NavParams !== 'undefined' && ionic_1.NavParams) === 'function' && _b) || Object])
    ], NavigationDetailsPage);
    return NavigationDetailsPage;
    var _a, _b;
})();
var BasicPage = (function () {
    function BasicPage(nav) {
        this.nav = nav;
    }
    BasicPage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(NavigationDetailsPage, { name: item });
    };
    BasicPage = __decorate([
        ionic_2.Page({
            templateUrl: 'navigation/basic/navigation.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.NavController !== 'undefined' && ionic_1.NavController) === 'function' && _a) || Object])
    ], BasicPage);
    return BasicPage;
    var _a;
})();
exports.BasicPage = BasicPage;