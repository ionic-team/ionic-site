"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toTitleCase = toTitleCase;
exports.hasScrollbar = hasScrollbar;
exports.getPageFor = getPageFor;
exports.debounce = debounce;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicIonic = require('ionic/ionic');

var _actionSheetsActionSheets = require('./action-sheets/action-sheets');

var actionSheets = _interopRequireWildcard(_actionSheetsActionSheets);

var _buttonsButtons = require('./buttons/buttons');

var buttons = _interopRequireWildcard(_buttonsButtons);

var _cardsCards = require('./cards/cards');

var cards = _interopRequireWildcard(_cardsCards);

var _labelsLabels = require('./labels/labels');

var labels = _interopRequireWildcard(_labelsLabels);

var _iconsIcons = require('./icons/icons');

var icons = _interopRequireWildcard(_iconsIcons);

var _inputsInputs = require('./inputs/inputs');

var inputs = _interopRequireWildcard(_inputsInputs);

var _listsLists = require('./lists/lists');

var lists = _interopRequireWildcard(_listsLists);

var _menusMenus = require('./menus/menus');

var menus = _interopRequireWildcard(_menusMenus);

var _modalsModals = require('./modals/modals');

var modals = _interopRequireWildcard(_modalsModals);

var _navigationNavigation = require('./navigation/navigation');

var navigation = _interopRequireWildcard(_navigationNavigation);

var _popupsPopups = require('./popups/popups');

var popups = _interopRequireWildcard(_popupsPopups);

var _slidesSlides = require('./slides/slides');

var slides = _interopRequireWildcard(_slidesSlides);

var _tabsTabs = require('./tabs/tabs');

var tabs = _interopRequireWildcard(_tabsTabs);

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

function hasScrollbar() {
    if (typeof window.top.innerWidth === 'number') {
        return window.top.innerWidth > window.top.document.documentElement.clientWidth;
    }
    // rootElem for quirksmode
    var rootElem = window.top.document.documentElement || window.top.document.body;
    // Check overflow style property on body for fauxscrollbars
    var overflowStyle;
    if (typeof rootElem.currentStyle !== 'undefined') {
        overflowStyle = rootElem.currentStyle.overflow;
    }
    overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;
    // Also need to check the Y axis overflow
    var overflowYStyle;
    if (typeof rootElem.currentStyle !== 'undefined') {
        overflowYStyle = rootElem.currentStyle.overflowY;
    }
    overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;
    var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
    var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
    var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';
    return contentOverflows && overflowShown || alwaysShowScroll;
}

function getPageFor(hash) {
    return ({
        'overview': actionSheets.BasicPage,
        'action-sheets': actionSheets.BasicPage,
        'buttons': buttons.BasicPage,
        'block-buttons': buttons.BlockPage,
        'clear-buttons': buttons.ClearPage,
        'full-buttons': buttons.FullPage,
        'outline-buttons': buttons.OutlinePage,
        'round-buttons': buttons.RoundPage,
        'floating-action-buttons': buttons.FabPage,
        'buttons-in-components': buttons.ComponentsPage,
        'button-sizes': buttons.SizesPage,
        'icon-buttons': buttons.IconsPage,
        'cards': cards.BasicPage,
        'card-header': cards.HeaderPage,
        'card-list': cards.ListPage,
        'card-image': cards.ImagePage,
        'card-background': cards.BackgroundPage,
        'advanced-cards': cards.AdvancedSocialPage,
        'card-advanced-map': cards.AdvancedMapPage,
        'card-advanced-social': cards.AdvancedSocialPage,
        'card-advanced-weather': cards.AdvancedWeatherPage,
        'checkbox': inputs.CheckboxPage,
        'radio': inputs.RadioPage,
        'range': inputs.RangePage,
        'segment': inputs.SegmentPage,
        'select': inputs.SelectPage,
        'switch': inputs.SwitchPage,
        'search': inputs.SearchPage,
        'inputs': labels.BasicPage,
        'fixed-inline-labels': labels.FixedInlinePage,
        'floating-labels': labels.FloatingPage,
        'inline-labels': labels.InlinePage,
        'inset-labels': labels.InsetPage,
        'placeholder-labels': labels.PlaceholderPage,
        'stacked-labels': labels.StackedPage,
        'icons': icons.BasicPage,
        'lists': lists.BasicPage,
        'list-lines': lists.BasicPage,
        'list-no-lines': lists.NoLinesPage,
        'avatar-list': lists.AvatarPage,
        'icon-list': lists.IconPage,
        'inset-list': lists.InsetPage,
        'list-headers': lists.HeadersPage,
        'multiline-list': lists.MultilinePage,
        'thumbnail-list': lists.ThumbnailPage,
        'menus': menus.BasicPage,
        'modals': modals.BasicPage,
        'navigation': navigation.BasicPage,
        'popups': popups.BasicPage,
        'slides': slides.BasicPage,
        'tabs': tabs.BasicPage,
        'tabs-icon': tabs.IconPage,
        'tabs-icon-text': tabs.IconTextPage
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