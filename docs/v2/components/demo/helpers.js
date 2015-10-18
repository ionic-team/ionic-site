"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toTitleCase = toTitleCase;
exports.getPageFor = getPageFor;
exports.debounce = debounce;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicIonic = require('ionic/ionic');

var _actionSheetActionSheet = require('./actionSheet/actionSheet');

var _buttonsButtons = require('./buttons/buttons');

var _cardsCards = require('./cards/cards');

var _formsForms = require('./forms/forms');

var _iconsIcons = require('./icons/icons');

var _listsLists = require('./lists/lists');

var _menusMenus = require('./menus/menus');

var _modalsModals = require('./modals/modals');

var _navigationNavigation = require('./navigation/navigation');

var _popupsPopups = require('./popups/popups');

var _slidesSlides = require('./slides/slides');

var _tabsTabs = require('./tabs/tabs');

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
var AndroidAttribute = function AndroidAttribute(platform, elementRef, renderer) {
    _classCallCheck(this, AndroidAttribute);

    this.isAndroid = platform.is('android');
    renderer.setElementAttribute(elementRef, 'primary', this.isAndroid ? true : null);
};
exports.AndroidAttribute = AndroidAttribute;
exports.AndroidAttribute = AndroidAttribute = __decorate([(0, _angular2Angular2.Directive)({
    selector: '.android-attr'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _a || Object, typeof (_b = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _b || Object, typeof (_c = typeof _angular2Angular2.Renderer !== 'undefined' && _angular2Angular2.Renderer) === 'function' && _c || Object])], AndroidAttribute);

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function getPageFor(hash) {
    return ({
        'action-sheets': _actionSheetActionSheet.ActionSheetPage,
        'buttons': _buttonsButtons.ButtonsPage,
        'block-buttons': _buttonsButtons.BlockButtonsPage,
        'clear-buttons': _buttonsButtons.ClearButtonsPage,
        'full-buttons': _buttonsButtons.FullButtonsPage,
        'outline-buttons': _buttonsButtons.OutlineButtonsPage,
        'round-buttons': _buttonsButtons.RoundButtonsPage,
        'floating-action-buttons': _buttonsButtons.FabPage,
        'buttons-in-components': _buttonsButtons.ButtonsInComponentsPage,
        'button-sizes': _buttonsButtons.ButtonSizesPage,
        'icon-buttons': _buttonsButtons.IconButtonsPage,
        'cards': _cardsCards.CardsBasicPage,
        'card-header': _cardsCards.CardsHeaderPage,
        'card-list': _cardsCards.CardsListPage,
        'card-image': _cardsCards.CardsImagePage,
        'forms': _formsForms.FormsPage,
        'fixed-inline-labels': _formsForms.FixedInlinePage,
        'floating-labels': _formsForms.FloatingPage,
        'inline-labels': _formsForms.InlinePage,
        'inset-labels': _formsForms.InsetPage,
        'placeholder-labels': _formsForms.PlaceholderPage,
        'stacked-labels': _formsForms.StackedPage,
        'icons': _iconsIcons.IconsPage,
        'lists': _listsLists.ListsPage,
        'menus': _menusMenus.MenusPage,
        'modals': _modalsModals.ModalsPage,
        'navigation': _navigationNavigation.NavigationPage,
        'popups': _popupsPopups.PopupsPage,
        'slides': _slidesSlides.SlidesPage,
        'tabs': _tabsTabs.TabsPage
    })[hash];
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

;
var _a, _b, _c;