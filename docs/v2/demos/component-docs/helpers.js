var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ionic_1 = require('ionic/ionic');
var actionSheets = require('./action-sheets/action-sheets');
var badges = require('./badge/badge');
var buttons = require('./buttons/buttons');
var cards = require('./cards/cards');
var grid = require('./grid/grid');
var labels = require('./labels/labels');
var icons = require('./icons/icons');
var inputs = require('./inputs/inputs');
var lists = require('./lists/lists');
var menus = require('./menus/menus');
var modals = require('./modals/modals');
var navigation = require('./navigation/navigation');
var alerts = require('./alerts/alerts');
var slides = require('./slides/slides');
var tabs = require('./tabs/tabs');
var AndroidAttribute = (function () {
    function AndroidAttribute(platform, elementRef, renderer) {
        this.isAndroid = platform.is('android');
        renderer.setElementAttribute(elementRef, 'primary', this.isAndroid ? true : null);
    }
    AndroidAttribute = __decorate([
        core_1.Directive({
            selector: '.android-attr',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object])
    ], AndroidAttribute);
    return AndroidAttribute;
    var _a, _b, _c;
})();
exports.AndroidAttribute = AndroidAttribute;
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
exports.toTitleCase = toTitleCase;
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
    return (contentOverflows && overflowShown) || (alwaysShowScroll);
}
exports.hasScrollbar = hasScrollbar;
function getPageFor(hash) {
    return {
        'overview': actionSheets.BasicPage,
        'action-sheets': actionSheets.BasicPage,
        'alert': alerts.BasicPage,
        'badges': badges.BasicPage,
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
        'searchbar': inputs.SearchPage,
        'toggle': inputs.TogglePage,
        'inputs': labels.BasicPage,
        'fixed-inline-labels': labels.FixedInlinePage,
        'floating-labels': labels.FloatingPage,
        'inline-labels': labels.InlinePage,
        'inset-labels': labels.InsetPage,
        'placeholder-labels': labels.PlaceholderPage,
        'stacked-labels': labels.StackedPage,
        'icons': icons.BasicPage,
        'grid': grid.BasicPage,
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
        'slides': slides.BasicPage,
        'tabs': tabs.BasicPage,
        'tabs-icon': tabs.IconPage,
        'tabs-icon-text': tabs.IconTextPage,
    }[hash];
}
exports.getPageFor = getPageFor;
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
exports.debounce = debounce;
;