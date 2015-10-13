'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.toTitleCase = toTitleCase;
exports.getPageFor = getPageFor;
exports.debounce = debounce;

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
        'cards': _cardsCards.CardsPage,
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