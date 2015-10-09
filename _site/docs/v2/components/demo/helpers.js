System.register('helpers', ['actionSheet/actionSheet', 'buttons/buttons', 'cards/cards', 'forms/forms', 'icons/icons', 'lists/lists', 'menus/menus', 'modals/modals', 'navigation/navigation', 'popups/popups', 'slides/slides', 'tabs/tabs'], function (_export) {
    'use strict';

    var ActionSheetPage, ButtonsPage, BlockButtonsPage, ClearButtonsPage, FullButtonsPage, OutlineButtonsPage, RoundButtonsPage, FabPage, ButtonSizesPage, IconButtonsPage, ButtonsInComponentsPage, CardsPage, FormsPage, IconsPage, ListsPage, MenusPage, ModalsPage, NavigationPage, PopupsPage, SlidesPage, TabsPage;

    _export('toTitleCase', toTitleCase);

    _export('getPageFor', getPageFor);

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    function getPageFor(hash) {
        return ({
            'action-sheets': ActionSheetPage,
            'buttons': ButtonsPage,
            'block-buttons': BlockButtonsPage,
            'clear-buttons': ClearButtonsPage,
            'full-buttons': FullButtonsPage,
            'outline-buttons': OutlineButtonsPage,
            'round-buttons': RoundButtonsPage,
            'floating-action-buttons': FabPage,
            'buttons-in-components': ButtonsInComponentsPage,
            'button-sizes': ButtonSizesPage,
            'icon-buttons': IconButtonsPage,
            'cards': CardsPage,
            'forms': FormsPage,
            'icons': IconsPage,
            'lists': ListsPage,
            'menus': MenusPage,
            'modals': ModalsPage,
            'navigation': NavigationPage,
            'popups': PopupsPage,
            'slides': SlidesPage,
            'tabs': TabsPage
        })[hash];
    }

    return {
        setters: [function (_actionSheetActionSheet) {
            ActionSheetPage = _actionSheetActionSheet.ActionSheetPage;
        }, function (_buttonsButtons) {
            ButtonsPage = _buttonsButtons.ButtonsPage;
            BlockButtonsPage = _buttonsButtons.BlockButtonsPage;
            ClearButtonsPage = _buttonsButtons.ClearButtonsPage;
            FullButtonsPage = _buttonsButtons.FullButtonsPage;
            OutlineButtonsPage = _buttonsButtons.OutlineButtonsPage;
            RoundButtonsPage = _buttonsButtons.RoundButtonsPage;
            FabPage = _buttonsButtons.FabPage;
            ButtonSizesPage = _buttonsButtons.ButtonSizesPage;
            IconButtonsPage = _buttonsButtons.IconButtonsPage;
            ButtonsInComponentsPage = _buttonsButtons.ButtonsInComponentsPage;
        }, function (_cardsCards) {
            CardsPage = _cardsCards.CardsPage;
        }, function (_formsForms) {
            FormsPage = _formsForms.FormsPage;
        }, function (_iconsIcons) {
            IconsPage = _iconsIcons.IconsPage;
        }, function (_listsLists) {
            ListsPage = _listsLists.ListsPage;
        }, function (_menusMenus) {
            MenusPage = _menusMenus.MenusPage;
        }, function (_modalsModals) {
            ModalsPage = _modalsModals.ModalsPage;
        }, function (_navigationNavigation) {
            NavigationPage = _navigationNavigation.NavigationPage;
        }, function (_popupsPopups) {
            PopupsPage = _popupsPopups.PopupsPage;
        }, function (_slidesSlides) {
            SlidesPage = _slidesSlides.SlidesPage;
        }, function (_tabsTabs) {
            TabsPage = _tabsTabs.TabsPage;
        }],
        execute: function () {}
    };
});