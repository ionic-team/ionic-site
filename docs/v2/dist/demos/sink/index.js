"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _pagesButton = require('./pages/button');

var _pagesNav = require('./pages/nav');

var _pagesPullToRefresh = require('./pages/pull-to-refresh');

var _pagesList = require('./pages/list');

var _pagesListGroup = require('./pages/list-group');

var _pagesCard = require('./pages/card');

var _pagesForm = require('./pages/form');

var _pagesSegment = require('./pages/segment');

var _pagesSearchBar = require('./pages/search-bar');

var _pagesTableSearch = require('./pages/table-search');

var _pagesIonicons = require('./pages/ionicons');

var _pagesTabs = require('./pages/tabs');

var _pagesMenu = require('./pages/menu');

var _pagesAnimation = require('./pages/animation');

var _pagesSlides = require('./pages/slides');

var _pagesActionSheet = require('./pages/action-sheet');

var _pagesModal = require('./pages/modal');

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

var MyApp = (function () {
    function MyApp(app) {
        _classCallCheck(this, MyApp);

        this.app = app;
        this.components = [{ title: 'Navigation', component: _pagesNav.NavPage }, { title: 'Tabs', component: _pagesTabs.TabsPage }, { title: 'Buttons', component: _pagesButton.ButtonPage }, { title: 'Lists', component: _pagesList.ListPage }, { title: 'List Groups', component: _pagesListGroup.ListGroupPage }, { title: 'Modal', component: _pagesModal.ModalPage }, { title: 'Pull to Refresh', component: _pagesPullToRefresh.PullToRefreshPage }, { title: 'Cards', component: _pagesCard.CardPage }, { title: 'Forms', component: _pagesForm.FormPage }, { title: 'Segments', component: _pagesSegment.SegmentPage }, { title: 'Search Bar', component: _pagesSearchBar.SearchBarPage }, { title: 'Table Search', component: _pagesTableSearch.TableSearchPage }, { title: 'Icons', component: _pagesIonicons.IconsPage }, { title: 'Menu', component: _pagesMenu.MenuPage }, { title: 'Animation', component: _pagesAnimation.AnimationPage }, { title: 'Slides', component: _pagesSlides.SlidePage }, { title: 'Action Sheet', component: _pagesActionSheet.ActionSheetPage }];
    }

    _createClass(MyApp, [{
        key: "openPage",
        value: function openPage(menu, component) {
            menu.close();
            var nav = this.app.getComponent('myNav');
            nav.setViews([component.component]);
        }
    }]);

    return MyApp;
})();
MyApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html',
    routes: [{
        path: '/nav',
        component: _pagesNav.NavPage,
        root: true
    }, {
        path: '/buttons',
        component: _pagesButton.ButtonPage
    }, {
        path: '/lists',
        component: _pagesList.ListPage
    }, {
        path: '/list-groups',
        component: _pagesListGroup.ListGroupPage
    }, {
        path: '/modal',
        component: _pagesModal.ModalPage
    }, {
        path: '/ptr',
        component: _pagesPullToRefresh.PullToRefreshPage
    }, {
        path: '/cards',
        component: _pagesCard.CardPage
    }, {
        path: '/forms',
        component: _pagesForm.FormPage
    }, {
        path: '/segments',
        component: _pagesSegment.SegmentPage
    }, {
        path: '/table-search',
        component: _pagesTableSearch.TableSearchPage
    }, {
        path: '/icons',
        component: _pagesIonicons.IconsPage
    }, {
        path: '/menu',
        component: _pagesMenu.MenuPage
    }, {
        path: '/animation',
        component: _pagesAnimation.AnimationPage
    }, {
        path: '/slides',
        component: _pagesSlides.SlidePage
    }, {
        path: '/action-sheet',
        component: _pagesActionSheet.ActionSheetPage
    }]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object])], MyApp);
var _a;