var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/menu/menu-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/typography/typography.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/navigation/nav-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/components/navbar/navbar';
import * as import31 from 'ionic-angular/components/icon/icon';
import * as import32 from 'ionic-angular/components/button/button';
import * as import33 from 'ionic-angular/components/menu/menu-toggle';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/typography/typography';
import * as import37 from 'ionic-angular/components/content/content';
import * as import38 from '../../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import39 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import40 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import41 from '../../node_modules/ionic-angular/components/menu/menu-close.ngfactory';
import * as import42 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import43 from 'ionic-angular/platform/platform';
import * as import44 from 'ionic-angular/gestures/gesture-controller';
import * as import45 from 'ionic-angular/util/form';
import * as import46 from 'ionic-angular/navigation/nav-controller-base';
import * as import47 from '@angular/core/src/linker/component_factory_resolver';
import * as import48 from 'ionic-angular/transitions/transition-controller';
import * as import49 from 'ionic-angular/navigation/deep-linker';
import * as import50 from 'ionic-angular/components/item/item';
import * as import51 from 'ionic-angular/components/menu/menu-close';
import * as import52 from 'ionic-angular/components/list/list';
import * as import53 from 'ionic-angular/components/menu/menu';
import * as import54 from 'ionic-angular/components/nav/nav';
export var Wrapper_ApiDemoPage = (function () {
    function Wrapper_ApiDemoPage(p0) {
        this.changed = false;
        this.context = new import0.ApiDemoPage(p0);
    }
    Wrapper_ApiDemoPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ApiDemoPage;
}());
export var Wrapper_ApiDemoApp = (function () {
    function Wrapper_ApiDemoApp() {
        this.changed = false;
        this.context = new import0.ApiDemoApp();
    }
    Wrapper_ApiDemoApp.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ApiDemoApp;
}());
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage(this.parentInjector.get(import8.MenuController));
        this._appEl_0.initComponent(this._ApiDemoPage_0_4.context, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApiDemoPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import0.ApiDemoPage);
var styles_ApiDemoPage = [];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import8.MenuController), new import22.ElementRef(this._el_4), this.parentInjector.get(import23.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import16.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import17.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n      Menu\n    ', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'padding', '');
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import19.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import19.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'h4', null);
        this._text_17 = this.renderer.createText(this._el_16, 'Active Menu: ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'b', null);
        this.renderer.setElementAttribute(this._el_18, 'color', 'primary');
        this._Typography_18_3 = new import20.Wrapper_Typography(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_18), this.renderer);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(null, '\n\n  ', null);
        this._el_21 = this.renderer.createElement(null, 'p', null);
        this._text_22 = this.renderer.createText(this._el_21, 'This page has two menus with different id\'s, but only one is active at a time.', null);
        this._text_23 = this.renderer.createText(null, '\n\n  ', null);
        this._el_24 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'block', '');
        this.renderer.setElementAttribute(this._el_24, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_24, 'ion-button', '');
        this._appEl_24 = new import3.AppElement(24, 14, this, this._el_24);
        var compView_24 = import13.viewFactory_Button0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Button_24_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_24), this.renderer);
        this._appEl_24.initComponent(this._Button_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, 'Make Menu 1 Active', null);
        compView_24.create(this._Button_24_4.context, [[].concat([this._text_25])], null);
        this._text_26 = this.renderer.createText(null, '\n\n  ', null);
        this._el_27 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'block', '');
        this.renderer.setElementAttribute(this._el_27, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_27, 'ion-button', '');
        this._appEl_27 = new import3.AppElement(27, 14, this, this._el_27);
        var compView_27 = import13.viewFactory_Button0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Button_27_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_27), this.renderer);
        this._appEl_27.initComponent(this._Button_27_4.context, [], compView_27);
        this._text_28 = this.renderer.createText(null, 'Make Menu 2 Active', null);
        compView_27.create(this._Button_27_4.context, [[].concat([this._text_28])], null);
        this._text_29 = this.renderer.createText(null, '\n\n  ', null);
        this._el_30 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_30, 'block', '');
        this.renderer.setElementAttribute(this._el_30, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_30, 'menuToggle', '');
        this._appEl_30 = new import3.AppElement(30, 14, this, this._el_30);
        var compView_30 = import13.viewFactory_Button0(this.viewUtils, this.injector(30), this._appEl_30);
        this._Button_30_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_30), this.renderer);
        this._MenuToggle_30_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import8.MenuController), new import22.ElementRef(this._el_30), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import30.Navbar, null));
        this._ToolbarItem_30_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_30), this.renderer, this.parentInjector.get(import26.Toolbar, null), this.parentInjector.get(import30.Navbar, null));
        this._query_Button_30_0 = new import16.QueryList();
        this._appEl_30.initComponent(this._Button_30_4.context, [], compView_30);
        this._text_31 = this.renderer.createText(null, 'Toggle Menu', null);
        compView_30.create(this._Button_30_4.context, [[].concat([this._text_31])], null);
        this._text_32 = this.renderer.createText(null, '\n\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_20,
                this._el_21,
                this._text_23,
                this._el_24,
                this._text_26,
                this._el_27,
                this._text_29,
                this._el_30,
                this._text_32
            ]),
            []
        ], null);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        this._expr_19 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import32.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import33.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import34.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import35.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import30.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import36.Typography) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Typography_18_3.context;
        }
        if (((token === import32.Button) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Button_24_4.context;
        }
        if (((token === import32.Button) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Button_27_4.context;
        }
        if (((token === import32.Button) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Button_30_4.context;
        }
        if (((token === import33.MenuToggle) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._MenuToggle_30_5.context;
        }
        if (((token === import34.ToolbarItem) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._ToolbarItem_30_6.context;
        }
        if (((token === import37.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = this.context.activeMenu;
        this._MenuToggle_4_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_6_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        var currVal_8 = 'primary';
        this._Typography_18_3.check_color(currVal_8, throwOnChange, false);
        this._Typography_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_11 = '';
        this._Button_24_4.check_block(currVal_11, throwOnChange, false);
        var currVal_12 = 'secondary';
        this._Button_24_4.check_color(currVal_12, throwOnChange, false);
        if (this._Button_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        var currVal_14 = '';
        this._Button_27_4.check_block(currVal_14, throwOnChange, false);
        var currVal_15 = 'danger';
        this._Button_27_4.check_color(currVal_15, throwOnChange, false);
        if (this._Button_27_4.detectChangesInternal(this, this._el_27, throwOnChange)) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        var currVal_17 = '';
        this._Button_30_4.check_block(currVal_17, throwOnChange, false);
        if (this._Button_30_4.detectChangesInternal(this, this._el_30, throwOnChange)) {
            this._appEl_30.componentView.markAsCheckOnce();
        }
        var currVal_18 = this.context.activeMenu;
        this._MenuToggle_30_5.check_menuToggle(currVal_18, throwOnChange, false);
        this._MenuToggle_30_5.detectChangesInternal(this, this._el_30, throwOnChange);
        this._ToolbarItem_30_6.detectChangesInternal(this, this._el_30, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_30_0.dirty) {
                this._query_Button_30_0.reset([this._Button_30_4.context]);
                this._ToolbarItem_30_6.context._buttons = this._query_Button_30_0;
                this._query_Button_30_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_24_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_27_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_30_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = import4.interpolate(1, '', ((this.context.activeMenu == 'menu1') ? 'Menu 1' : 'Menu 2'), '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_19, currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_19 = this._MenuToggle_30_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementProperty(this._el_30, 'hidden', currVal_19);
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.menu1Active() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.menu2Active() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_30_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new Wrapper_ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4.context, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApiDemoApp_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import0.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_0, 'id', 'menu1');
        this.renderer.setElementAttribute(this._el_0, 'role', 'navigation');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import38.viewFactory_Menu0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Menu_0_4 = new import38.Wrapper_Menu(this.parentInjector.get(import8.MenuController), new import22.ElementRef(this._el_0), this.parentInjector.get(import21.Config), this.parentInjector.get(import43.Platform), this.renderer, this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import44.GestureController));
        this._query_Content_0_0 = new import16.QueryList();
        this._appEl_0.initComponent(this._Menu_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_2_3 = new import11.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_4, 'color', 'secondary');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import11.viewFactory_Toolbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Toolbar_4_4 = new import11.Wrapper_Toolbar(this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Toolbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_6), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import30.Navbar, null));
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Menu 1', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Toolbar_4_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_5,
                this._el_6,
                this._text_8
            ])
        ], null);
        this._text_9 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-content', null);
        this._appEl_11 = new import3.AppElement(11, 0, this, this._el_11);
        var compView_11 = import19.viewFactory_Content0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Content_11_4 = new import19.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-list', null);
        this._List_13_3 = new import39.Wrapper_List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import44.GestureController));
        this._text_14 = this.renderer.createText(this._el_13, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_15, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_15, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_15, 'menuClose', 'menu1');
        this._appEl_15 = new import3.AppElement(15, 13, this, this._el_15);
        var compView_15 = import40.viewFactory_Item0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Item_15_4 = new import40.Wrapper_Item(this.parentInjector.get(import45.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_15), this.renderer);
        this._ItemContent_15_5 = new import40.Wrapper_ItemContent();
        this._MenuClose_15_6 = new import41.Wrapper_MenuClose(this.parentInjector.get(import8.MenuController));
        this._query_Label_15_0 = new import16.QueryList();
        this._query_Button_15_1 = new import16.QueryList();
        this._query_Icon_15_2 = new import16.QueryList();
        this._appEl_15.initComponent(this._Item_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n        Close Menu 1\n      ', null);
        this._query_Label_15_0.reset([]);
        this._Item_15_4.context.contentLabel = this._query_Label_15_0.first;
        compView_15.create(this._Item_15_4.context, [
            [],
            [],
            [].concat([this._text_16]),
            [],
            []
        ], null);
        this._text_17 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_18 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_18
            ]),
            []
        ], null);
        this._text_19 = this.renderer.createText(null, '\n\n', null);
        this._query_Content_0_0.reset([this._Content_11_4.context]);
        this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
        compView_0.create(this._Menu_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_10,
                this._el_11,
                this._text_19
            ])], null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_21 = this.renderer.createElement(parentRenderNode, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_21, 'id', 'menu2');
        this.renderer.setElementAttribute(this._el_21, 'role', 'navigation');
        this._appEl_21 = new import3.AppElement(21, null, this, this._el_21);
        var compView_21 = import38.viewFactory_Menu0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Menu_21_4 = new import38.Wrapper_Menu(this.parentInjector.get(import8.MenuController), new import22.ElementRef(this._el_21), this.parentInjector.get(import21.Config), this.parentInjector.get(import43.Platform), this.renderer, this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import44.GestureController));
        this._query_Content_21_0 = new import16.QueryList();
        this._appEl_21.initComponent(this._Menu_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n\n  ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_23_3 = new import11.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_23), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_24 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_25 = this.renderer.createElement(this._el_23, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_25, 'color', 'danger');
        this._appEl_25 = new import3.AppElement(25, 23, this, this._el_25);
        var compView_25 = import11.viewFactory_Toolbar0(this.viewUtils, this.injector(25), this._appEl_25);
        this._Toolbar_25_4 = new import11.Wrapper_Toolbar(this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_25), this.renderer);
        this._appEl_25.initComponent(this._Toolbar_25_4.context, [], compView_25);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        this._el_27 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_27 = new import3.AppElement(27, 25, this, this._el_27);
        var compView_27 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(27), this._appEl_27);
        this._ToolbarTitle_27_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_27), this.renderer, this._Toolbar_25_4.context, this.parentInjector.get(import30.Navbar, null));
        this._appEl_27.initComponent(this._ToolbarTitle_27_4.context, [], compView_27);
        this._text_28 = this.renderer.createText(null, 'Menu 2', null);
        compView_27.create(this._ToolbarTitle_27_4.context, [[].concat([this._text_28])], null);
        this._text_29 = this.renderer.createText(null, '\n    ', null);
        compView_25.create(this._Toolbar_25_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_26,
                this._el_27,
                this._text_29
            ])
        ], null);
        this._text_30 = this.renderer.createText(this._el_23, '\n  ', null);
        this._text_31 = this.renderer.createText(null, '\n\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-content', null);
        this._appEl_32 = new import3.AppElement(32, 21, this, this._el_32);
        var compView_32 = import19.viewFactory_Content0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Content_32_4 = new import19.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_32), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_32.initComponent(this._Content_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n    ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-list', null);
        this._List_34_3 = new import39.Wrapper_List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_34), this.renderer, this.parentInjector.get(import44.GestureController));
        this._text_35 = this.renderer.createText(this._el_34, '\n      ', null);
        this._el_36 = this.renderer.createElement(this._el_34, 'button', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_36, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_36, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_36, 'menuClose', 'menu2');
        this._appEl_36 = new import3.AppElement(36, 34, this, this._el_36);
        var compView_36 = import40.viewFactory_Item0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Item_36_4 = new import40.Wrapper_Item(this.parentInjector.get(import45.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_36), this.renderer);
        this._ItemContent_36_5 = new import40.Wrapper_ItemContent();
        this._MenuClose_36_6 = new import41.Wrapper_MenuClose(this.parentInjector.get(import8.MenuController));
        this._query_Label_36_0 = new import16.QueryList();
        this._query_Button_36_1 = new import16.QueryList();
        this._query_Icon_36_2 = new import16.QueryList();
        this._appEl_36.initComponent(this._Item_36_4.context, [], compView_36);
        this._text_37 = this.renderer.createText(null, '\n        Close Menu 2\n      ', null);
        this._query_Label_36_0.reset([]);
        this._Item_36_4.context.contentLabel = this._query_Label_36_0.first;
        compView_36.create(this._Item_36_4.context, [
            [],
            [],
            [].concat([this._text_37]),
            [],
            []
        ], null);
        this._text_38 = this.renderer.createText(this._el_34, '\n    ', null);
        this._text_39 = this.renderer.createText(null, '\n  ', null);
        compView_32.create(this._Content_32_4.context, [
            [],
            [].concat([
                this._text_33,
                this._el_34,
                this._text_39
            ]),
            []
        ], null);
        this._text_40 = this.renderer.createText(null, '\n\n', null);
        this._query_Content_21_0.reset([this._Content_32_4.context]);
        this._Menu_21_4.context.menuContent = this._query_Content_21_0.first;
        compView_21.create(this._Menu_21_4.context, [[].concat([
                this._text_22,
                this._el_23,
                this._text_31,
                this._el_32,
                this._text_40
            ])], null);
        this._text_41 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_42 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this.renderer.setElementAttribute(this._el_42, 'swipeBackEnabled', 'false');
        this._appEl_42 = new import3.AppElement(42, null, this, this._el_42);
        var compView_42 = import42.viewFactory_Nav0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Nav_42_4 = new import42.Wrapper_Nav(this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import46.NavControllerBase, null), this.parentInjector.get(import24.App), this.parentInjector.get(import21.Config), this.parentInjector.get(import27.Keyboard), new import22.ElementRef(this._el_42), this.parentInjector.get(import28.NgZone), this.renderer, this.parentInjector.get(import47.ComponentFactoryResolver), this.parentInjector.get(import44.GestureController), this.parentInjector.get(import48.TransitionController), this.parentInjector.get(import49.DeepLinker, null));
        this._appEl_42.initComponent(this._Nav_42_4.context, [], compView_42);
        compView_42.create(this._Nav_42_4.context, [], null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import26.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Toolbar_4_4.context;
        }
        if (((token === import26.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_2_3.context;
        }
        if (((token === import50.Item) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Item_15_4.context;
        }
        if (((token === import50.ItemContent) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._ItemContent_15_5.context;
        }
        if (((token === import51.MenuClose) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._MenuClose_15_6.context;
        }
        if (((token === import52.List) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._List_13_3.context;
        }
        if (((token === import37.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Content_11_4.context;
        }
        if (((token === import53.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Menu_0_4.context;
        }
        if (((token === import35.ToolbarTitle) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ToolbarTitle_27_4.context;
        }
        if (((token === import26.Toolbar) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Toolbar_25_4.context;
        }
        if (((token === import26.Header) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Header_23_3.context;
        }
        if (((token === import50.Item) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Item_36_4.context;
        }
        if (((token === import50.ItemContent) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._ItemContent_36_5.context;
        }
        if (((token === import51.MenuClose) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._MenuClose_36_6.context;
        }
        if (((token === import52.List) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._List_34_3.context;
        }
        if (((token === import37.Content) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Content_32_4.context;
        }
        if (((token === import53.Menu) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Menu_21_4.context;
        }
        if (((token === import54.Nav) && (42 === requestNodeIndex))) {
            return this._Nav_42_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._Nav_42_4.context;
        this._Menu_0_4.check_content(currVal_0, throwOnChange, false);
        var currVal_1 = 'menu1';
        this._Menu_0_4.check_id(currVal_1, throwOnChange, false);
        if (this._Menu_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_2 = 'secondary';
        this._Toolbar_4_4.check_color(currVal_2, throwOnChange, false);
        if (this._Toolbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        this._List_13_3.detectChangesInternal(this, this._el_13, throwOnChange);
        if (this._Item_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        this._ItemContent_15_5.detectChangesInternal(this, this._el_15, throwOnChange);
        var currVal_6 = 'menu1';
        this._MenuClose_15_6.check_menuClose(currVal_6, throwOnChange, false);
        this._MenuClose_15_6.detectChangesInternal(this, this._el_15, throwOnChange);
        var currVal_7 = this._Nav_42_4.context;
        this._Menu_21_4.check_content(currVal_7, throwOnChange, false);
        var currVal_8 = 'menu2';
        this._Menu_21_4.check_id(currVal_8, throwOnChange, false);
        if (this._Menu_21_4.detectChangesInternal(this, this._el_21, throwOnChange)) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        this._Header_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_9 = 'danger';
        this._Toolbar_25_4.check_color(currVal_9, throwOnChange, false);
        if (this._Toolbar_25_4.detectChangesInternal(this, this._el_25, throwOnChange)) {
            this._appEl_25.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_27_4.detectChangesInternal(this, this._el_27, throwOnChange)) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        if (this._Content_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._List_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        if (this._Item_36_4.detectChangesInternal(this, this._el_36, throwOnChange)) {
            this._appEl_36.componentView.markAsCheckOnce();
        }
        this._ItemContent_36_5.detectChangesInternal(this, this._el_36, throwOnChange);
        var currVal_13 = 'menu2';
        this._MenuClose_36_6.check_menuClose(currVal_13, throwOnChange, false);
        this._MenuClose_36_6.detectChangesInternal(this, this._el_36, throwOnChange);
        var currVal_14 = this.context.root;
        this._Nav_42_4.check_root(currVal_14, throwOnChange, false);
        var currVal_15 = 'false';
        this._Nav_42_4.check_swipeBackEnabled(currVal_15, throwOnChange, false);
        this._Nav_42_4.detectChangesInternal(this, this._el_42, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_15_1.dirty) {
                this._query_Button_15_1.reset([]);
                this._Item_15_4.context._buttons = this._query_Button_15_1;
                this._query_Button_15_1.notifyOnChanges();
            }
            if (this._query_Icon_15_2.dirty) {
                this._query_Icon_15_2.reset([]);
                this._Item_15_4.context._icons = this._query_Icon_15_2;
                this._query_Icon_15_2.notifyOnChanges();
            }
            if (this._query_Button_36_1.dirty) {
                this._query_Button_36_1.reset([]);
                this._Item_36_4.context._buttons = this._query_Button_36_1;
                this._query_Button_36_1.notifyOnChanges();
            }
            if (this._query_Icon_36_2.dirty) {
                this._query_Icon_36_2.reset([]);
                this._Item_36_4.context._icons = this._query_Icon_36_2;
                this._query_Icon_36_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_15_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_36_4.context.ngAfterContentInit();
            }
        }
        var currVal_3 = this._Toolbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_10 = this._Toolbar_25_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_25, 'statusbar-padding', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._Content_32_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_32, 'statusbar-padding', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_42_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoApp0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
        this._Menu_0_4.context.ngOnDestroy();
        this._Content_32_4.context.ngOnDestroy();
        this._Menu_21_4.context.ngOnDestroy();
    };
    _View_ApiDemoApp0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuClose_15_6.context.close() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoApp0.prototype._handle_click_36_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuClose_36_6.context.close() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
