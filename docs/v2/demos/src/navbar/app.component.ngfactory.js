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
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import19 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/navigation/nav-controller';
import * as import25 from 'ionic-angular/components/toolbar/toolbar';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from 'ionic-angular/components/menu/menu-controller';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/icon/icon';
import * as import34 from 'ionic-angular/components/button/button';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import36 from 'ionic-angular/components/menu/menu-toggle';
import * as import37 from '@angular/common/src/directives/ng_if';
import * as import38 from 'ionic-angular/components/content/content';
import * as import39 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import40 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import41 from '../../node_modules/ionic-angular/components/segment/segment.ngfactory';
import * as import42 from 'ionic-angular/components/segment/segment';
import * as import43 from '@angular/forms/src/directives/ng_model';
import * as import44 from '@angular/forms/src/directives/ng_control';
import * as import45 from '@angular/forms/src/directives/ng_control_status';
import * as import46 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import47 from 'ionic-angular/components/searchbar/searchbar';
import * as import48 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import49 from 'ionic-angular/navigation/nav-controller-base';
import * as import50 from '@angular/core/src/linker/component_factory_resolver';
import * as import51 from 'ionic-angular/gestures/gesture-controller';
import * as import52 from 'ionic-angular/transitions/transition-controller';
import * as import53 from 'ionic-angular/navigation/deep-linker';
import * as import54 from 'ionic-angular/components/nav/nav';
export var Wrapper_ApiDemoPage = (function () {
    function Wrapper_ApiDemoPage() {
        this.changed = false;
        this.context = new import0.ApiDemoPage();
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
        this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage();
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
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import0.ApiDemoPage);
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
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_11, 'no-border-top', '');
        this._appEl_11 = new import3.AppElement(11, 9, this, this._el_11);
        var compView_11 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Toolbar_11_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_11), this.renderer);
        this._appEl_11.initComponent(this._Toolbar_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(13), this._appEl_13);
        this._ToolbarTitle_13_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_13), this.renderer, this._Toolbar_11_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_13.initComponent(this._ToolbarTitle_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Long title that never ends. It just goes on and on my friend.', null);
        compView_13.create(this._ToolbarTitle_13_4.context, [[].concat([this._text_14])], null);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Toolbar_11_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_15
            ])
        ], null);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_17, 'no-border-top', '');
        this._appEl_17 = new import3.AppElement(17, 9, this, this._el_17);
        var compView_17 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Toolbar_17_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_17), this.renderer);
        this._appEl_17.initComponent(this._Toolbar_17_4.context, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n    ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_19, 'start', '');
        this._ToolbarItem_19_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_19), this.renderer, this._Toolbar_17_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_19_0 = new import15.QueryList();
        this._text_20 = this.renderer.createText(this._el_19, '\n      ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_21, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_21, 'ion-button', '');
        this._appEl_21 = new import3.AppElement(21, 19, this, this._el_21);
        var compView_21 = import16.viewFactory_Button0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Button_21_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_21), this.renderer);
        this._appEl_21.initComponent(this._Button_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this._Icon_23_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Button_21_4.context, [[].concat([
                this._text_22,
                this._el_23,
                this._text_24
            ])], null);
        this._text_25 = this.renderer.createText(this._el_19, '\n      ', null);
        this._el_26 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this._appEl_26 = new import3.AppElement(26, 19, this, this._el_26);
        var compView_26 = import16.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n        ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_28, 'name', 'search');
        this.renderer.setElementAttribute(this._el_28, 'role', 'img');
        this._Icon_28_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_28), this.renderer);
        this._text_29 = this.renderer.createText(null, '\n      ', null);
        compView_26.create(this._Button_26_4.context, [[].concat([
                this._text_27,
                this._el_28,
                this._text_29
            ])], null);
        this._text_30 = this.renderer.createText(this._el_19, '\n    ', null);
        this._text_31 = this.renderer.createText(null, '\n    ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_32, 'end', '');
        this._ToolbarItem_32_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_32), this.renderer, this._Toolbar_17_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_32_0 = new import15.QueryList();
        this._text_33 = this.renderer.createText(this._el_32, '\n      ', null);
        this._el_34 = this.renderer.createElement(this._el_32, 'button', null);
        this.renderer.setElementAttribute(this._el_34, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_34, 'ion-button', '');
        this._appEl_34 = new import3.AppElement(34, 32, this, this._el_34);
        var compView_34 = import16.viewFactory_Button0(this.viewUtils, this.injector(34), this._appEl_34);
        this._Button_34_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_34), this.renderer);
        this._appEl_34.initComponent(this._Button_34_4.context, [], compView_34);
        this._text_35 = this.renderer.createText(null, '\n        ', null);
        this._el_36 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_36, 'name', 'more');
        this.renderer.setElementAttribute(this._el_36, 'role', 'img');
        this._Icon_36_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_36), this.renderer);
        this._text_37 = this.renderer.createText(null, '\n      ', null);
        compView_34.create(this._Button_34_4.context, [[].concat([
                this._text_35,
                this._el_36,
                this._text_37
            ])], null);
        this._text_38 = this.renderer.createText(this._el_32, '\n    ', null);
        this._text_39 = this.renderer.createText(null, '\n    ', null);
        this._el_40 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_40 = new import3.AppElement(40, 17, this, this._el_40);
        var compView_40 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(40), this._appEl_40);
        this._ToolbarTitle_40_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_40), this.renderer, this._Toolbar_17_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_40.initComponent(this._ToolbarTitle_40_4.context, [], compView_40);
        this._text_41 = this.renderer.createText(null, 'Default Buttons', null);
        compView_40.create(this._ToolbarTitle_40_4.context, [[].concat([this._text_41])], null);
        this._text_42 = this.renderer.createText(null, '\n  ', null);
        compView_17.create(this._Toolbar_17_4.context, [
            [],
            [].concat([this._el_19]),
            [].concat([this._el_32]),
            [].concat([
                this._text_18,
                this._text_31,
                this._text_39,
                this._el_40,
                this._text_42
            ])
        ], null);
        this._text_43 = this.renderer.createText(null, '\n\n  ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_44, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_44, 'no-border-top', '');
        this._appEl_44 = new import3.AppElement(44, 9, this, this._el_44);
        var compView_44 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(44), this._appEl_44);
        this._Toolbar_44_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_44), this.renderer);
        this._appEl_44.initComponent(this._Toolbar_44_4.context, [], compView_44);
        this._text_45 = this.renderer.createText(null, '\n    ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_46, 'start', '');
        this._ToolbarItem_46_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_46), this.renderer, this._Toolbar_44_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_46_0 = new import15.QueryList();
        this._text_47 = this.renderer.createText(this._el_46, '\n      ', null);
        this._el_48 = this.renderer.createElement(this._el_46, 'button', null);
        this.renderer.setElementAttribute(this._el_48, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_48, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_48, 'ion-button', '');
        this._appEl_48 = new import3.AppElement(48, 46, this, this._el_48);
        var compView_48 = import16.viewFactory_Button0(this.viewUtils, this.injector(48), this._appEl_48);
        this._Button_48_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_48), this.renderer);
        this._appEl_48.initComponent(this._Button_48_4.context, [], compView_48);
        this._text_49 = this.renderer.createText(null, '\n        ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_50, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_50, 'role', 'img');
        this._Icon_50_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_50), this.renderer);
        this._text_51 = this.renderer.createText(null, '\n      ', null);
        compView_48.create(this._Button_48_4.context, [[].concat([
                this._text_49,
                this._el_50,
                this._text_51
            ])], null);
        this._text_52 = this.renderer.createText(this._el_46, '\n      ', null);
        this._el_53 = this.renderer.createElement(this._el_46, 'button', null);
        this.renderer.setElementAttribute(this._el_53, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_53, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_53, 'ion-button', '');
        this._appEl_53 = new import3.AppElement(53, 46, this, this._el_53);
        var compView_53 = import16.viewFactory_Button0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Button_53_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_53), this.renderer);
        this._appEl_53.initComponent(this._Button_53_4.context, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n        ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_55, 'name', 'search');
        this.renderer.setElementAttribute(this._el_55, 'role', 'img');
        this._Icon_55_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_55), this.renderer);
        this._text_56 = this.renderer.createText(null, '\n      ', null);
        compView_53.create(this._Button_53_4.context, [[].concat([
                this._text_54,
                this._el_55,
                this._text_56
            ])], null);
        this._text_57 = this.renderer.createText(this._el_46, '\n    ', null);
        this._text_58 = this.renderer.createText(null, '\n    ', null);
        this._el_59 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_59, 'end', '');
        this._ToolbarItem_59_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_59), this.renderer, this._Toolbar_44_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_59_0 = new import15.QueryList();
        this._text_60 = this.renderer.createText(this._el_59, '\n      ', null);
        this._el_61 = this.renderer.createElement(this._el_59, 'button', null);
        this.renderer.setElementAttribute(this._el_61, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_61, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_61, 'ion-button', '');
        this._appEl_61 = new import3.AppElement(61, 59, this, this._el_61);
        var compView_61 = import16.viewFactory_Button0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Button_61_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_61), this.renderer);
        this._appEl_61.initComponent(this._Button_61_4.context, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n        ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_63, 'name', 'more');
        this.renderer.setElementAttribute(this._el_63, 'role', 'img');
        this._Icon_63_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_63), this.renderer);
        this._text_64 = this.renderer.createText(null, '\n      ', null);
        compView_61.create(this._Button_61_4.context, [[].concat([
                this._text_62,
                this._el_63,
                this._text_64
            ])], null);
        this._text_65 = this.renderer.createText(this._el_59, '\n    ', null);
        this._text_66 = this.renderer.createText(null, '\n    ', null);
        this._el_67 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_67 = new import3.AppElement(67, 44, this, this._el_67);
        var compView_67 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(67), this._appEl_67);
        this._ToolbarTitle_67_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_67), this.renderer, this._Toolbar_44_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_67.initComponent(this._ToolbarTitle_67_4.context, [], compView_67);
        this._text_68 = this.renderer.createText(null, 'Colored Buttons', null);
        compView_67.create(this._ToolbarTitle_67_4.context, [[].concat([this._text_68])], null);
        this._text_69 = this.renderer.createText(null, '\n  ', null);
        compView_44.create(this._Toolbar_44_4.context, [
            [],
            [].concat([this._el_46]),
            [].concat([this._el_59]),
            [].concat([
                this._text_45,
                this._text_58,
                this._text_66,
                this._el_67,
                this._text_69
            ])
        ], null);
        this._text_70 = this.renderer.createText(null, '\n\n  ', null);
        this._el_71 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_71, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_71, 'no-border-top', '');
        this._appEl_71 = new import3.AppElement(71, 9, this, this._el_71);
        var compView_71 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(71), this._appEl_71);
        this._Toolbar_71_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_71), this.renderer);
        this._appEl_71.initComponent(this._Toolbar_71_4.context, [], compView_71);
        this._text_72 = this.renderer.createText(null, '\n    ', null);
        this._el_73 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_73, 'start', '');
        this._ToolbarItem_73_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_73), this.renderer, this._Toolbar_71_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_73_0 = new import15.QueryList();
        this._text_74 = this.renderer.createText(this._el_73, '\n      ', null);
        this._el_75 = this.renderer.createElement(this._el_73, 'button', null);
        this.renderer.setElementAttribute(this._el_75, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_75, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_75, 'solid', '');
        this._appEl_75 = new import3.AppElement(75, 73, this, this._el_75);
        var compView_75 = import16.viewFactory_Button0(this.viewUtils, this.injector(75), this._appEl_75);
        this._Button_75_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_75), this.renderer);
        this._appEl_75.initComponent(this._Button_75_4.context, [], compView_75);
        this._text_76 = this.renderer.createText(null, '\n        ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_77, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_77, 'role', 'img');
        this._Icon_77_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_77), this.renderer);
        this._text_78 = this.renderer.createText(null, '\n      ', null);
        compView_75.create(this._Button_75_4.context, [[].concat([
                this._text_76,
                this._el_77,
                this._text_78
            ])], null);
        this._text_79 = this.renderer.createText(this._el_73, '\n    ', null);
        this._text_80 = this.renderer.createText(null, '\n    ', null);
        this._el_81 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_81 = new import3.AppElement(81, 71, this, this._el_81);
        var compView_81 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(81), this._appEl_81);
        this._ToolbarTitle_81_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_81), this.renderer, this._Toolbar_71_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_81.initComponent(this._ToolbarTitle_81_4.context, [], compView_81);
        this._text_82 = this.renderer.createText(null, 'Solid', null);
        compView_81.create(this._ToolbarTitle_81_4.context, [[].concat([this._text_82])], null);
        this._text_83 = this.renderer.createText(null, '\n    ', null);
        this._el_84 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_84, 'end', '');
        this._ToolbarItem_84_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_84), this.renderer, this._Toolbar_71_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_84_0 = new import15.QueryList();
        this._text_85 = this.renderer.createText(this._el_84, '\n      ', null);
        this._el_86 = this.renderer.createElement(this._el_84, 'button', null);
        this.renderer.setElementAttribute(this._el_86, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_86, 'icon-right', '');
        this.renderer.setElementAttribute(this._el_86, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_86, 'solid', '');
        this._appEl_86 = new import3.AppElement(86, 84, this, this._el_86);
        var compView_86 = import16.viewFactory_Button0(this.viewUtils, this.injector(86), this._appEl_86);
        this._Button_86_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_86), this.renderer);
        this._appEl_86.initComponent(this._Button_86_4.context, [], compView_86);
        this._text_87 = this.renderer.createText(null, '\n        Help\n        ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_88, 'name', 'help-circle');
        this.renderer.setElementAttribute(this._el_88, 'role', 'img');
        this._Icon_88_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_88), this.renderer);
        this._text_89 = this.renderer.createText(null, '\n      ', null);
        compView_86.create(this._Button_86_4.context, [[].concat([
                this._text_87,
                this._el_88,
                this._text_89
            ])], null);
        this._text_90 = this.renderer.createText(this._el_84, '\n    ', null);
        this._text_91 = this.renderer.createText(null, '\n  ', null);
        compView_71.create(this._Toolbar_71_4.context, [
            [],
            [].concat([this._el_73]),
            [].concat([this._el_84]),
            [].concat([
                this._text_72,
                this._text_80,
                this._el_81,
                this._text_83,
                this._text_91
            ])
        ], null);
        this._text_92 = this.renderer.createText(null, '\n\n  ', null);
        this._el_93 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_93, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_93, 'no-border-top', '');
        this._appEl_93 = new import3.AppElement(93, 9, this, this._el_93);
        var compView_93 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(93), this._appEl_93);
        this._Toolbar_93_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_93), this.renderer);
        this._appEl_93.initComponent(this._Toolbar_93_4.context, [], compView_93);
        this._text_94 = this.renderer.createText(null, '\n    ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_95, 'start', '');
        this._ToolbarItem_95_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_95), this.renderer, this._Toolbar_93_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_95_0 = new import15.QueryList();
        this._text_96 = this.renderer.createText(this._el_95, '\n      ', null);
        this._el_97 = this.renderer.createElement(this._el_95, 'button', null);
        this.renderer.setElementAttribute(this._el_97, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_97, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_97, 'outline', '');
        this._appEl_97 = new import3.AppElement(97, 95, this, this._el_97);
        var compView_97 = import16.viewFactory_Button0(this.viewUtils, this.injector(97), this._appEl_97);
        this._Button_97_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_97), this.renderer);
        this._appEl_97.initComponent(this._Button_97_4.context, [], compView_97);
        this._text_98 = this.renderer.createText(null, '\n        ', null);
        this._el_99 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_99, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_99, 'role', 'img');
        this._Icon_99_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_99), this.renderer);
        this._text_100 = this.renderer.createText(null, '\n      ', null);
        compView_97.create(this._Button_97_4.context, [[].concat([
                this._text_98,
                this._el_99,
                this._text_100
            ])], null);
        this._text_101 = this.renderer.createText(this._el_95, '\n    ', null);
        this._text_102 = this.renderer.createText(null, '\n    ', null);
        this._el_103 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_103, 'end', '');
        this._ToolbarItem_103_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_103), this.renderer, this._Toolbar_93_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_103_0 = new import15.QueryList();
        this._text_104 = this.renderer.createText(this._el_103, '\n      ', null);
        this._el_105 = this.renderer.createElement(this._el_103, 'button', null);
        this.renderer.setElementAttribute(this._el_105, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_105, 'icon-right', '');
        this.renderer.setElementAttribute(this._el_105, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_105, 'outline', '');
        this._appEl_105 = new import3.AppElement(105, 103, this, this._el_105);
        var compView_105 = import16.viewFactory_Button0(this.viewUtils, this.injector(105), this._appEl_105);
        this._Button_105_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_105), this.renderer);
        this._appEl_105.initComponent(this._Button_105_4.context, [], compView_105);
        this._text_106 = this.renderer.createText(null, '\n        Help\n        ', null);
        this._el_107 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_107, 'name', 'help-circle');
        this.renderer.setElementAttribute(this._el_107, 'role', 'img');
        this._Icon_107_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_107), this.renderer);
        this._text_108 = this.renderer.createText(null, '\n      ', null);
        compView_105.create(this._Button_105_4.context, [[].concat([
                this._text_106,
                this._el_107,
                this._text_108
            ])], null);
        this._text_109 = this.renderer.createText(this._el_103, '\n    ', null);
        this._text_110 = this.renderer.createText(null, '\n    ', null);
        this._el_111 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_111 = new import3.AppElement(111, 93, this, this._el_111);
        var compView_111 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(111), this._appEl_111);
        this._ToolbarTitle_111_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_111), this.renderer, this._Toolbar_93_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_111.initComponent(this._ToolbarTitle_111_4.context, [], compView_111);
        this._text_112 = this.renderer.createText(null, 'Outline', null);
        compView_111.create(this._ToolbarTitle_111_4.context, [[].concat([this._text_112])], null);
        this._text_113 = this.renderer.createText(null, '\n  ', null);
        compView_93.create(this._Toolbar_93_4.context, [
            [],
            [].concat([this._el_95]),
            [].concat([this._el_103]),
            [].concat([
                this._text_94,
                this._text_102,
                this._text_110,
                this._el_111,
                this._text_113
            ])
        ], null);
        this._text_114 = this.renderer.createText(null, '\n\n  ', null);
        this._el_115 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_115, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_115, 'no-border-top', '');
        this._appEl_115 = new import3.AppElement(115, 9, this, this._el_115);
        var compView_115 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(115), this._appEl_115);
        this._Toolbar_115_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_115), this.renderer);
        this._appEl_115.initComponent(this._Toolbar_115_4.context, [], compView_115);
        this._text_116 = this.renderer.createText(null, '\n    ', null);
        this._el_117 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_117, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_117, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_117, 'menuToggle', '');
        this._appEl_117 = new import3.AppElement(117, 115, this, this._el_117);
        var compView_117 = import16.viewFactory_Button0(this.viewUtils, this.injector(117), this._appEl_117);
        this._Button_117_4 = new import16.Wrapper_Button('', '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_117), this.renderer);
        this._MenuToggle_117_5 = new import18.Wrapper_MenuToggle(this.parentInjector.get(import30.MenuController), new import21.ElementRef(this._el_117), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import29.Navbar, null));
        this._ToolbarItem_117_6 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_117), this.renderer, this._Toolbar_115_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_117_0 = new import15.QueryList();
        this._appEl_117.initComponent(this._Button_117_4.context, [], compView_117);
        this._text_118 = this.renderer.createText(null, '\n      ', null);
        this._el_119 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_119, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_119, 'role', 'img');
        this._Icon_119_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_119), this.renderer);
        this._text_120 = this.renderer.createText(null, '\n    ', null);
        compView_117.create(this._Button_117_4.context, [[].concat([
                this._text_118,
                this._el_119,
                this._text_120
            ])], null);
        this._text_121 = this.renderer.createText(null, '\n    ', null);
        this._el_122 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_122 = new import3.AppElement(122, 115, this, this._el_122);
        var compView_122 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(122), this._appEl_122);
        this._ToolbarTitle_122_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_122), this.renderer, this._Toolbar_115_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_122.initComponent(this._ToolbarTitle_122_4.context, [], compView_122);
        this._text_123 = this.renderer.createText(null, 'Left Menu', null);
        compView_122.create(this._ToolbarTitle_122_4.context, [[].concat([this._text_123])], null);
        this._text_124 = this.renderer.createText(null, '\n  ', null);
        compView_115.create(this._Toolbar_115_4.context, [
            [].concat([this._el_117]),
            [],
            [],
            [].concat([
                this._text_116,
                this._text_121,
                this._el_122,
                this._text_124
            ])
        ], null);
        this._text_125 = this.renderer.createText(null, '\n\n  ', null);
        this._el_126 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_126, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_126, 'no-border-top', '');
        this._appEl_126 = new import3.AppElement(126, 9, this, this._el_126);
        var compView_126 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(126), this._appEl_126);
        this._Toolbar_126_4 = new import10.Wrapper_Toolbar(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_126), this.renderer);
        this._appEl_126.initComponent(this._Toolbar_126_4.context, [], compView_126);
        this._text_127 = this.renderer.createText(null, '\n    ', null);
        this._el_128 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_128 = new import3.AppElement(128, 126, this, this._el_128);
        var compView_128 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(128), this._appEl_128);
        this._ToolbarTitle_128_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_128), this.renderer, this._Toolbar_126_4.context, this.parentInjector.get(import29.Navbar, null));
        this._appEl_128.initComponent(this._ToolbarTitle_128_4.context, [], compView_128);
        this._text_129 = this.renderer.createText(null, 'Right Menu', null);
        compView_128.create(this._ToolbarTitle_128_4.context, [[].concat([this._text_129])], null);
        this._text_130 = this.renderer.createText(null, '\n    ', null);
        this._el_131 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_131, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_131, 'menuToggle', '');
        this.renderer.setElementAttribute(this._el_131, 'right', '');
        this._appEl_131 = new import3.AppElement(131, 126, this, this._el_131);
        var compView_131 = import16.viewFactory_Button0(this.viewUtils, this.injector(131), this._appEl_131);
        this._Button_131_4 = new import16.Wrapper_Button('', '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_131), this.renderer);
        this._MenuToggle_131_5 = new import18.Wrapper_MenuToggle(this.parentInjector.get(import30.MenuController), new import21.ElementRef(this._el_131), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import29.Navbar, null));
        this._ToolbarItem_131_6 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_131), this.renderer, this._Toolbar_126_4.context, this.parentInjector.get(import29.Navbar, null));
        this._query_Button_131_0 = new import15.QueryList();
        this._appEl_131.initComponent(this._Button_131_4.context, [], compView_131);
        this._text_132 = this.renderer.createText(null, '\n      ', null);
        this._el_133 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_133, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_133, 'role', 'img');
        this._Icon_133_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_133), this.renderer);
        this._text_134 = this.renderer.createText(null, '\n    ', null);
        compView_131.create(this._Button_131_4.context, [[].concat([
                this._text_132,
                this._el_133,
                this._text_134
            ])], null);
        this._text_135 = this.renderer.createText(null, '\n  ', null);
        compView_126.create(this._Toolbar_126_4.context, [
            [].concat([this._el_131]),
            [],
            [],
            [].concat([
                this._text_127,
                this._el_128,
                this._text_130,
                this._text_135
            ])
        ], null);
        this._text_136 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_137 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_137 = new import3.AppElement(137, 9, this, this._anchor_137);
        this._TemplateRef_137_5 = new import31.TemplateRef_(this._appEl_137, viewFactory_ApiDemoPage1);
        this._NgIf_137_6 = new import19.Wrapper_NgIf(this._appEl_137.vcRef, this._TemplateRef_137_5);
        this._text_138 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_139 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_139 = new import3.AppElement(139, 9, this, this._anchor_139);
        this._TemplateRef_139_5 = new import31.TemplateRef_(this._appEl_139, viewFactory_ApiDemoPage2);
        this._NgIf_139_6 = new import19.Wrapper_NgIf(this._appEl_139.vcRef, this._TemplateRef_139_5);
        this._text_140 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_141 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_141 = new import3.AppElement(141, 9, this, this._anchor_141);
        this._TemplateRef_141_5 = new import31.TemplateRef_(this._appEl_141, viewFactory_ApiDemoPage3);
        this._NgIf_141_6 = new import19.Wrapper_NgIf(this._appEl_141.vcRef, this._TemplateRef_141_5);
        this._text_142 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_143 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_143 = new import3.AppElement(143, 9, this, this._anchor_143);
        this._TemplateRef_143_5 = new import31.TemplateRef_(this._appEl_143, viewFactory_ApiDemoPage4);
        this._NgIf_143_6 = new import19.Wrapper_NgIf(this._appEl_143.vcRef, this._TemplateRef_143_5);
        this._text_144 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_16,
                this._el_17,
                this._text_43,
                this._el_44,
                this._text_70,
                this._el_71,
                this._text_92,
                this._el_93,
                this._text_114,
                this._el_115,
                this._text_125,
                this._el_126,
                this._text_136,
                this._appEl_137,
                this._text_138,
                this._appEl_139,
                this._text_140,
                this._appEl_141,
                this._text_142,
                this._appEl_143,
                this._text_144
            ]),
            []
        ], null);
        this._text_145 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_117, 'click', this.eventHandler(this._handle_click_117_0.bind(this)));
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_131, 'click', this.eventHandler(this._handle_click_131_0.bind(this)));
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
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
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._el_99,
            this._text_100,
            this._text_101,
            this._text_102,
            this._el_103,
            this._text_104,
            this._el_105,
            this._text_106,
            this._el_107,
            this._text_108,
            this._text_109,
            this._text_110,
            this._el_111,
            this._text_112,
            this._text_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._el_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._text_124,
            this._text_125,
            this._el_126,
            this._text_127,
            this._el_128,
            this._text_129,
            this._text_130,
            this._el_131,
            this._text_132,
            this._el_133,
            this._text_134,
            this._text_135,
            this._text_136,
            this._anchor_137,
            this._text_138,
            this._anchor_139,
            this._text_140,
            this._anchor_141,
            this._text_142,
            this._anchor_143,
            this._text_144,
            this._text_145
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import25.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import32.ToolbarTitle) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ToolbarTitle_13_4.context;
        }
        if (((token === import25.Toolbar) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Toolbar_11_4.context;
        }
        if (((token === import33.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3.context;
        }
        if (((token === import34.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_21_4.context;
        }
        if (((token === import33.Icon) && (28 === requestNodeIndex))) {
            return this._Icon_28_3.context;
        }
        if (((token === import34.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Button_26_4.context;
        }
        if (((token === import35.ToolbarItem) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ToolbarItem_19_3.context;
        }
        if (((token === import33.Icon) && (36 === requestNodeIndex))) {
            return this._Icon_36_3.context;
        }
        if (((token === import34.Button) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Button_34_4.context;
        }
        if (((token === import35.ToolbarItem) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ToolbarItem_32_3.context;
        }
        if (((token === import32.ToolbarTitle) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._ToolbarTitle_40_4.context;
        }
        if (((token === import25.Toolbar) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Toolbar_17_4.context;
        }
        if (((token === import33.Icon) && (50 === requestNodeIndex))) {
            return this._Icon_50_3.context;
        }
        if (((token === import34.Button) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Button_48_4.context;
        }
        if (((token === import33.Icon) && (55 === requestNodeIndex))) {
            return this._Icon_55_3.context;
        }
        if (((token === import34.Button) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Button_53_4.context;
        }
        if (((token === import35.ToolbarItem) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._ToolbarItem_46_3.context;
        }
        if (((token === import33.Icon) && (63 === requestNodeIndex))) {
            return this._Icon_63_3.context;
        }
        if (((token === import34.Button) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Button_61_4.context;
        }
        if (((token === import35.ToolbarItem) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._ToolbarItem_59_3.context;
        }
        if (((token === import32.ToolbarTitle) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ToolbarTitle_67_4.context;
        }
        if (((token === import25.Toolbar) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Toolbar_44_4.context;
        }
        if (((token === import33.Icon) && (77 === requestNodeIndex))) {
            return this._Icon_77_3.context;
        }
        if (((token === import34.Button) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Button_75_4.context;
        }
        if (((token === import35.ToolbarItem) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ToolbarItem_73_3.context;
        }
        if (((token === import32.ToolbarTitle) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._ToolbarTitle_81_4.context;
        }
        if (((token === import33.Icon) && (88 === requestNodeIndex))) {
            return this._Icon_88_3.context;
        }
        if (((token === import34.Button) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Button_86_4.context;
        }
        if (((token === import35.ToolbarItem) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._ToolbarItem_84_3.context;
        }
        if (((token === import25.Toolbar) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Toolbar_71_4.context;
        }
        if (((token === import33.Icon) && (99 === requestNodeIndex))) {
            return this._Icon_99_3.context;
        }
        if (((token === import34.Button) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._Button_97_4.context;
        }
        if (((token === import35.ToolbarItem) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 101)))) {
            return this._ToolbarItem_95_3.context;
        }
        if (((token === import33.Icon) && (107 === requestNodeIndex))) {
            return this._Icon_107_3.context;
        }
        if (((token === import34.Button) && ((105 <= requestNodeIndex) && (requestNodeIndex <= 108)))) {
            return this._Button_105_4.context;
        }
        if (((token === import35.ToolbarItem) && ((103 <= requestNodeIndex) && (requestNodeIndex <= 109)))) {
            return this._ToolbarItem_103_3.context;
        }
        if (((token === import32.ToolbarTitle) && ((111 <= requestNodeIndex) && (requestNodeIndex <= 112)))) {
            return this._ToolbarTitle_111_4.context;
        }
        if (((token === import25.Toolbar) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 113)))) {
            return this._Toolbar_93_4.context;
        }
        if (((token === import33.Icon) && (119 === requestNodeIndex))) {
            return this._Icon_119_3.context;
        }
        if (((token === import34.Button) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._Button_117_4.context;
        }
        if (((token === import36.MenuToggle) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._MenuToggle_117_5.context;
        }
        if (((token === import35.ToolbarItem) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._ToolbarItem_117_6.context;
        }
        if (((token === import32.ToolbarTitle) && ((122 <= requestNodeIndex) && (requestNodeIndex <= 123)))) {
            return this._ToolbarTitle_122_4.context;
        }
        if (((token === import25.Toolbar) && ((115 <= requestNodeIndex) && (requestNodeIndex <= 124)))) {
            return this._Toolbar_115_4.context;
        }
        if (((token === import32.ToolbarTitle) && ((128 <= requestNodeIndex) && (requestNodeIndex <= 129)))) {
            return this._ToolbarTitle_128_4.context;
        }
        if (((token === import33.Icon) && (133 === requestNodeIndex))) {
            return this._Icon_133_3.context;
        }
        if (((token === import34.Button) && ((131 <= requestNodeIndex) && (requestNodeIndex <= 134)))) {
            return this._Button_131_4.context;
        }
        if (((token === import36.MenuToggle) && ((131 <= requestNodeIndex) && (requestNodeIndex <= 134)))) {
            return this._MenuToggle_131_5.context;
        }
        if (((token === import35.ToolbarItem) && ((131 <= requestNodeIndex) && (requestNodeIndex <= 134)))) {
            return this._ToolbarItem_131_6.context;
        }
        if (((token === import25.Toolbar) && ((126 <= requestNodeIndex) && (requestNodeIndex <= 135)))) {
            return this._Toolbar_126_4.context;
        }
        if (((token === import31.TemplateRef) && (137 === requestNodeIndex))) {
            return this._TemplateRef_137_5;
        }
        if (((token === import37.NgIf) && (137 === requestNodeIndex))) {
            return this._NgIf_137_6.context;
        }
        if (((token === import31.TemplateRef) && (139 === requestNodeIndex))) {
            return this._TemplateRef_139_5;
        }
        if (((token === import37.NgIf) && (139 === requestNodeIndex))) {
            return this._NgIf_139_6.context;
        }
        if (((token === import31.TemplateRef) && (141 === requestNodeIndex))) {
            return this._TemplateRef_141_5;
        }
        if (((token === import37.NgIf) && (141 === requestNodeIndex))) {
            return this._NgIf_141_6.context;
        }
        if (((token === import31.TemplateRef) && (143 === requestNodeIndex))) {
            return this._TemplateRef_143_5;
        }
        if (((token === import37.NgIf) && (143 === requestNodeIndex))) {
            return this._NgIf_143_6.context;
        }
        if (((token === import38.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 144)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_13_4.detectChangesInternal(this, this._el_13, throwOnChange)) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_17_4.detectChangesInternal(this, this._el_17, throwOnChange)) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_19_3.detectChangesInternal(this, this._el_19, throwOnChange);
        if (this._Button_21_4.detectChangesInternal(this, this._el_21, throwOnChange)) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        var currVal_6 = 'contact';
        this._Icon_23_3.check_name(currVal_6, throwOnChange, false);
        this._Icon_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        if (this._Button_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        var currVal_8 = 'search';
        this._Icon_28_3.check_name(currVal_8, throwOnChange, false);
        this._Icon_28_3.detectChangesInternal(this, this._el_28, throwOnChange);
        this._ToolbarItem_32_3.detectChangesInternal(this, this._el_32, throwOnChange);
        if (this._Button_34_4.detectChangesInternal(this, this._el_34, throwOnChange)) {
            this._appEl_34.componentView.markAsCheckOnce();
        }
        var currVal_10 = 'more';
        this._Icon_36_3.check_name(currVal_10, throwOnChange, false);
        this._Icon_36_3.detectChangesInternal(this, this._el_36, throwOnChange);
        if (this._ToolbarTitle_40_4.detectChangesInternal(this, this._el_40, throwOnChange)) {
            this._appEl_40.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_44_4.detectChangesInternal(this, this._el_44, throwOnChange)) {
            this._appEl_44.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_46_3.detectChangesInternal(this, this._el_46, throwOnChange);
        var currVal_13 = 'danger';
        this._Button_48_4.check_color(currVal_13, throwOnChange, false);
        if (this._Button_48_4.detectChangesInternal(this, this._el_48, throwOnChange)) {
            this._appEl_48.componentView.markAsCheckOnce();
        }
        var currVal_14 = 'contact';
        this._Icon_50_3.check_name(currVal_14, throwOnChange, false);
        this._Icon_50_3.detectChangesInternal(this, this._el_50, throwOnChange);
        var currVal_16 = 'secondary';
        this._Button_53_4.check_color(currVal_16, throwOnChange, false);
        if (this._Button_53_4.detectChangesInternal(this, this._el_53, throwOnChange)) {
            this._appEl_53.componentView.markAsCheckOnce();
        }
        var currVal_17 = 'search';
        this._Icon_55_3.check_name(currVal_17, throwOnChange, false);
        this._Icon_55_3.detectChangesInternal(this, this._el_55, throwOnChange);
        this._ToolbarItem_59_3.detectChangesInternal(this, this._el_59, throwOnChange);
        var currVal_19 = 'dark';
        this._Button_61_4.check_color(currVal_19, throwOnChange, false);
        if (this._Button_61_4.detectChangesInternal(this, this._el_61, throwOnChange)) {
            this._appEl_61.componentView.markAsCheckOnce();
        }
        var currVal_20 = 'more';
        this._Icon_63_3.check_name(currVal_20, throwOnChange, false);
        this._Icon_63_3.detectChangesInternal(this, this._el_63, throwOnChange);
        if (this._ToolbarTitle_67_4.detectChangesInternal(this, this._el_67, throwOnChange)) {
            this._appEl_67.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_71_4.detectChangesInternal(this, this._el_71, throwOnChange)) {
            this._appEl_71.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_73_3.detectChangesInternal(this, this._el_73, throwOnChange);
        var currVal_23 = '';
        this._Button_75_4.check_solid(currVal_23, throwOnChange, false);
        if (this._Button_75_4.detectChangesInternal(this, this._el_75, throwOnChange)) {
            this._appEl_75.componentView.markAsCheckOnce();
        }
        var currVal_24 = 'contact';
        this._Icon_77_3.check_name(currVal_24, throwOnChange, false);
        this._Icon_77_3.detectChangesInternal(this, this._el_77, throwOnChange);
        if (this._ToolbarTitle_81_4.detectChangesInternal(this, this._el_81, throwOnChange)) {
            this._appEl_81.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_84_3.detectChangesInternal(this, this._el_84, throwOnChange);
        var currVal_26 = '';
        this._Button_86_4.check_solid(currVal_26, throwOnChange, false);
        var currVal_27 = 'secondary';
        this._Button_86_4.check_color(currVal_27, throwOnChange, false);
        if (this._Button_86_4.detectChangesInternal(this, this._el_86, throwOnChange)) {
            this._appEl_86.componentView.markAsCheckOnce();
        }
        var currVal_28 = 'help-circle';
        this._Icon_88_3.check_name(currVal_28, throwOnChange, false);
        this._Icon_88_3.detectChangesInternal(this, this._el_88, throwOnChange);
        if (this._Toolbar_93_4.detectChangesInternal(this, this._el_93, throwOnChange)) {
            this._appEl_93.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_95_3.detectChangesInternal(this, this._el_95, throwOnChange);
        var currVal_31 = '';
        this._Button_97_4.check_outline(currVal_31, throwOnChange, false);
        if (this._Button_97_4.detectChangesInternal(this, this._el_97, throwOnChange)) {
            this._appEl_97.componentView.markAsCheckOnce();
        }
        var currVal_32 = 'contact';
        this._Icon_99_3.check_name(currVal_32, throwOnChange, false);
        this._Icon_99_3.detectChangesInternal(this, this._el_99, throwOnChange);
        this._ToolbarItem_103_3.detectChangesInternal(this, this._el_103, throwOnChange);
        var currVal_34 = '';
        this._Button_105_4.check_outline(currVal_34, throwOnChange, false);
        var currVal_35 = 'secondary';
        this._Button_105_4.check_color(currVal_35, throwOnChange, false);
        if (this._Button_105_4.detectChangesInternal(this, this._el_105, throwOnChange)) {
            this._appEl_105.componentView.markAsCheckOnce();
        }
        var currVal_36 = 'help-circle';
        this._Icon_107_3.check_name(currVal_36, throwOnChange, false);
        this._Icon_107_3.detectChangesInternal(this, this._el_107, throwOnChange);
        if (this._ToolbarTitle_111_4.detectChangesInternal(this, this._el_111, throwOnChange)) {
            this._appEl_111.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_115_4.detectChangesInternal(this, this._el_115, throwOnChange)) {
            this._appEl_115.componentView.markAsCheckOnce();
        }
        if (this._Button_117_4.detectChangesInternal(this, this._el_117, throwOnChange)) {
            this._appEl_117.componentView.markAsCheckOnce();
        }
        var currVal_40 = '';
        this._MenuToggle_117_5.check_menuToggle(currVal_40, throwOnChange, false);
        this._MenuToggle_117_5.detectChangesInternal(this, this._el_117, throwOnChange);
        this._ToolbarItem_117_6.detectChangesInternal(this, this._el_117, throwOnChange);
        var currVal_42 = 'menu';
        this._Icon_119_3.check_name(currVal_42, throwOnChange, false);
        this._Icon_119_3.detectChangesInternal(this, this._el_119, throwOnChange);
        if (this._ToolbarTitle_122_4.detectChangesInternal(this, this._el_122, throwOnChange)) {
            this._appEl_122.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_126_4.detectChangesInternal(this, this._el_126, throwOnChange)) {
            this._appEl_126.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_128_4.detectChangesInternal(this, this._el_128, throwOnChange)) {
            this._appEl_128.componentView.markAsCheckOnce();
        }
        if (this._Button_131_4.detectChangesInternal(this, this._el_131, throwOnChange)) {
            this._appEl_131.componentView.markAsCheckOnce();
        }
        var currVal_46 = '';
        this._MenuToggle_131_5.check_menuToggle(currVal_46, throwOnChange, false);
        this._MenuToggle_131_5.detectChangesInternal(this, this._el_131, throwOnChange);
        this._ToolbarItem_131_6.detectChangesInternal(this, this._el_131, throwOnChange);
        var currVal_48 = 'menu';
        this._Icon_133_3.check_name(currVal_48, throwOnChange, false);
        this._Icon_133_3.detectChangesInternal(this, this._el_133, throwOnChange);
        var currVal_50 = (this.context.demo != 'Title');
        this._NgIf_137_6.check_ngIf(currVal_50, throwOnChange, false);
        this._NgIf_137_6.detectChangesInternal(this, this._anchor_137, throwOnChange);
        var currVal_51 = (this.context.demo != 'Title');
        this._NgIf_139_6.check_ngIf(currVal_51, throwOnChange, false);
        this._NgIf_139_6.detectChangesInternal(this, this._anchor_139, throwOnChange);
        var currVal_52 = (this.context.demo != 'Title');
        this._NgIf_141_6.check_ngIf(currVal_52, throwOnChange, false);
        this._NgIf_141_6.detectChangesInternal(this, this._anchor_141, throwOnChange);
        var currVal_53 = (this.context.demo != 'Title');
        this._NgIf_143_6.check_ngIf(currVal_53, throwOnChange, false);
        this._NgIf_143_6.detectChangesInternal(this, this._anchor_143, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_19_0.dirty) {
                this._query_Button_19_0.reset([
                    this._Button_21_4.context,
                    this._Button_26_4.context
                ]);
                this._ToolbarItem_19_3.context._buttons = this._query_Button_19_0;
                this._query_Button_19_0.notifyOnChanges();
            }
            if (this._query_Button_32_0.dirty) {
                this._query_Button_32_0.reset([this._Button_34_4.context]);
                this._ToolbarItem_32_3.context._buttons = this._query_Button_32_0;
                this._query_Button_32_0.notifyOnChanges();
            }
            if (this._query_Button_46_0.dirty) {
                this._query_Button_46_0.reset([
                    this._Button_48_4.context,
                    this._Button_53_4.context
                ]);
                this._ToolbarItem_46_3.context._buttons = this._query_Button_46_0;
                this._query_Button_46_0.notifyOnChanges();
            }
            if (this._query_Button_59_0.dirty) {
                this._query_Button_59_0.reset([this._Button_61_4.context]);
                this._ToolbarItem_59_3.context._buttons = this._query_Button_59_0;
                this._query_Button_59_0.notifyOnChanges();
            }
            if (this._query_Button_73_0.dirty) {
                this._query_Button_73_0.reset([this._Button_75_4.context]);
                this._ToolbarItem_73_3.context._buttons = this._query_Button_73_0;
                this._query_Button_73_0.notifyOnChanges();
            }
            if (this._query_Button_84_0.dirty) {
                this._query_Button_84_0.reset([this._Button_86_4.context]);
                this._ToolbarItem_84_3.context._buttons = this._query_Button_84_0;
                this._query_Button_84_0.notifyOnChanges();
            }
            if (this._query_Button_95_0.dirty) {
                this._query_Button_95_0.reset([this._Button_97_4.context]);
                this._ToolbarItem_95_3.context._buttons = this._query_Button_95_0;
                this._query_Button_95_0.notifyOnChanges();
            }
            if (this._query_Button_103_0.dirty) {
                this._query_Button_103_0.reset([this._Button_105_4.context]);
                this._ToolbarItem_103_3.context._buttons = this._query_Button_103_0;
                this._query_Button_103_0.notifyOnChanges();
            }
            if (this._query_Button_117_0.dirty) {
                this._query_Button_117_0.reset([this._Button_117_4.context]);
                this._ToolbarItem_117_6.context._buttons = this._query_Button_117_0;
                this._query_Button_117_0.notifyOnChanges();
            }
            if (this._query_Button_131_0.dirty) {
                this._query_Button_131_0.reset([this._Button_131_4.context]);
                this._ToolbarItem_131_6.context._buttons = this._query_Button_131_0;
                this._query_Button_131_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_21_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_34_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_48_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_53_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_61_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_75_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_86_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_97_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_105_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_117_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_131_4.context.ngAfterContentInit();
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
        var currVal_2 = import4.interpolate(1, '', this.context.demo, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_5, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Toolbar_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._Toolbar_17_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_17, 'statusbar-padding', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_23_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._Icon_28_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_28, 'hide', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_11 = this._Icon_36_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_36, 'hide', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._Toolbar_44_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_44, 'statusbar-padding', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_15 = this._Icon_50_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_50, 'hide', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_18 = this._Icon_55_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_55, 'hide', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_21 = this._Icon_63_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_63, 'hide', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this._Toolbar_71_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_71, 'statusbar-padding', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_25 = this._Icon_77_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_77, 'hide', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_29 = this._Icon_88_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_88, 'hide', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this._Toolbar_93_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_93, 'statusbar-padding', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_33 = this._Icon_99_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_99, 'hide', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_37 = this._Icon_107_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_107, 'hide', currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = this._Toolbar_115_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_115, 'statusbar-padding', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_41 = this._MenuToggle_117_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementProperty(this._el_117, 'hidden', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_43 = this._Icon_119_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_119, 'hide', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this._Toolbar_126_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_126, 'statusbar-padding', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_47 = this._MenuToggle_131_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementProperty(this._el_131, 'hidden', currVal_47);
            this._expr_47 = currVal_47;
        }
        var currVal_49 = this._Icon_133_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_133, 'hide', currVal_49);
            this._expr_49 = currVal_49;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_23_3.context.ngOnDestroy();
        this._Icon_28_3.context.ngOnDestroy();
        this._Icon_36_3.context.ngOnDestroy();
        this._Icon_50_3.context.ngOnDestroy();
        this._Icon_55_3.context.ngOnDestroy();
        this._Icon_63_3.context.ngOnDestroy();
        this._Icon_77_3.context.ngOnDestroy();
        this._Icon_88_3.context.ngOnDestroy();
        this._Icon_99_3.context.ngOnDestroy();
        this._Icon_107_3.context.ngOnDestroy();
        this._Icon_119_3.context.ngOnDestroy();
        this._Icon_133_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_117_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_117_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_131_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_131_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_0, 'no-border-top', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Toolbar_0_4 = new import10.Wrapper_Toolbar(this.parent.parentInjector.get(import22.ViewController, null), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Toolbar_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_2, 'end', '');
        this._ToolbarItem_2_3 = new import14.Wrapper_ToolbarItem(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer, this._Toolbar_0_4.context, this.parent.parentInjector.get(import29.Navbar, null));
        this._query_Button_2_0 = new import15.QueryList();
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import16.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import16.Wrapper_Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n        ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'search');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import17.Wrapper_Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-segment', null);
        this.renderer.setElementAttribute(this._el_10, 'color', 'danger');
        this._NgModel_10_3 = new import39.Wrapper_NgModel(null, null, null, null);
        this._NgControl_10_4 = this._NgModel_10_3.context;
        this._NgControlStatus_10_5 = new import40.Wrapper_NgControlStatus(this._NgControl_10_4);
        this._Segment_10_6 = new import41.Wrapper_Segment(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_10), this.renderer, this._NgControl_10_4);
        this._query_SegmentButton_10_0 = new import15.QueryList();
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_12, 'role', 'button');
        this.renderer.setElementAttribute(this._el_12, 'tappable', '');
        this.renderer.setElementAttribute(this._el_12, 'value', 'featured');
        this._appEl_12 = new import3.AppElement(12, 10, this, this._el_12);
        var compView_12 = import41.viewFactory_SegmentButton0(this.viewUtils, this.injector(12), this._appEl_12);
        this._SegmentButton_12_4 = new import41.Wrapper_SegmentButton(this.renderer, new import21.ElementRef(this._el_12));
        this._appEl_12.initComponent(this._SegmentButton_12_4.context, [], compView_12);
        this._text_13 = this.renderer.createText(null, '\n        Featured\n      ', null);
        compView_12.create(this._SegmentButton_12_4.context, [[].concat([this._text_13])], null);
        this._text_14 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_10, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_15, 'role', 'button');
        this.renderer.setElementAttribute(this._el_15, 'tappable', '');
        this.renderer.setElementAttribute(this._el_15, 'value', 'recent');
        this._appEl_15 = new import3.AppElement(15, 10, this, this._el_15);
        var compView_15 = import41.viewFactory_SegmentButton0(this.viewUtils, this.injector(15), this._appEl_15);
        this._SegmentButton_15_4 = new import41.Wrapper_SegmentButton(this.renderer, new import21.ElementRef(this._el_15));
        this._appEl_15.initComponent(this._SegmentButton_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n        Recent\n      ', null);
        compView_15.create(this._SegmentButton_15_4.context, [[].concat([this._text_16])], null);
        this._text_17 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_18 = this.renderer.createText(null, '\n  ', null);
        compView_0.create(this._Toolbar_0_4.context, [
            [],
            [],
            [].concat([this._el_2]),
            [].concat([
                this._text_1,
                this._text_9,
                this._el_10,
                this._text_18
            ])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_10, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        var subscription_0 = this._NgModel_10_3.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this.init([].concat([this._el_0]), [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import34.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import35.ToolbarItem) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_2_3.context;
        }
        if (((token === import42.SegmentButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._SegmentButton_12_4.context;
        }
        if (((token === import42.SegmentButton) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._SegmentButton_15_4.context;
        }
        if (((token === import43.NgModel) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgModel_10_3.context;
        }
        if (((token === import44.NgControl) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgControl_10_4;
        }
        if (((token === import45.NgControlStatus) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgControlStatus_10_5.context;
        }
        if (((token === import42.Segment) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Segment_10_6.context;
        }
        if (((token === import25.Toolbar) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Toolbar_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Toolbar_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_2 = 'search';
        this._Icon_6_3.check_name(currVal_2, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        var currVal_5 = this.parent.context.favorites;
        this._NgModel_10_3.check_model(currVal_5, throwOnChange, false);
        this._NgModel_10_3.detectChangesInternal(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_5.detectChangesInternal(this, this._el_10, throwOnChange);
        var currVal_12 = 'danger';
        this._Segment_10_6.check_color(currVal_12, throwOnChange, false);
        this._Segment_10_6.detectChangesInternal(this, this._el_10, throwOnChange);
        var currVal_14 = 'featured';
        this._SegmentButton_12_4.check_value(currVal_14, throwOnChange, false);
        this._SegmentButton_12_4.detectChangesInternal(this, this._el_12, throwOnChange);
        var currVal_16 = 'recent';
        this._SegmentButton_15_4.check_value(currVal_16, throwOnChange, false);
        this._SegmentButton_15_4.detectChangesInternal(this, this._el_15, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_0.dirty) {
                this._query_Button_2_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_2_3.context._buttons = this._query_Button_2_0;
                this._query_Button_2_0.notifyOnChanges();
            }
            if (this._query_SegmentButton_10_0.dirty) {
                this._query_SegmentButton_10_0.reset([
                    this._SegmentButton_12_4.context,
                    this._SegmentButton_15_4.context
                ]);
                this._Segment_10_6.context._buttons = this._query_SegmentButton_10_0;
                this._query_SegmentButton_10_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Toolbar_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_3 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_6 = this._NgControlStatus_10_5.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_10, 'ng-untouched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_10_5.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_10, 'ng-touched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_10_5.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_10, 'ng-pristine', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_10_5.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_10, 'ng-dirty', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_10_5.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_10, 'ng-valid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_10_5.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_10, 'ng-invalid', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Segment_10_6.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage1.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._NgModel_10_3.context.ngOnDestroy();
    };
    _View_ApiDemoPage1.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.buttonClick(this._Button_4_4.context) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_ngModelChange_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.parent.context.favorites = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_click_12_0 = function ($event) {
        this._appEl_12.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_12_4.context.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_click_15_0 = function ($event) {
        this._appEl_15.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_15_4.context.onClick() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage2 = (function (_super) {
    __extends(_View_ApiDemoPage2, _super);
    function _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage2, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_0, 'no-border-top', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Toolbar_0_4 = new import10.Wrapper_Toolbar(this.parent.parentInjector.get(import22.ViewController, null), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Toolbar_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-segment', null);
        this._NgModel_2_3 = new import39.Wrapper_NgModel(null, null, null, null);
        this._NgControl_2_4 = this._NgModel_2_3.context;
        this._NgControlStatus_2_5 = new import40.Wrapper_NgControlStatus(this._NgControl_2_4);
        this._Segment_2_6 = new import41.Wrapper_Segment(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer, this._NgControl_2_4);
        this._query_SegmentButton_2_0 = new import15.QueryList();
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_4, 'role', 'button');
        this.renderer.setElementAttribute(this._el_4, 'tappable', '');
        this.renderer.setElementAttribute(this._el_4, 'value', 'paid');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import41.viewFactory_SegmentButton0(this.viewUtils, this.injector(4), this._appEl_4);
        this._SegmentButton_4_4 = new import41.Wrapper_SegmentButton(this.renderer, new import21.ElementRef(this._el_4));
        this._appEl_4.initComponent(this._SegmentButton_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n        Paid\n      ', null);
        compView_4.create(this._SegmentButton_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_7, 'role', 'button');
        this.renderer.setElementAttribute(this._el_7, 'tappable', '');
        this.renderer.setElementAttribute(this._el_7, 'value', 'free');
        this._appEl_7 = new import3.AppElement(7, 2, this, this._el_7);
        var compView_7 = import41.viewFactory_SegmentButton0(this.viewUtils, this.injector(7), this._appEl_7);
        this._SegmentButton_7_4 = new import41.Wrapper_SegmentButton(this.renderer, new import21.ElementRef(this._el_7));
        this._appEl_7.initComponent(this._SegmentButton_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, '\n        Free\n      ', null);
        compView_7.create(this._SegmentButton_7_4.context, [[].concat([this._text_8])], null);
        this._text_9 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_2, 'ion-segment-button', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'segment-button');
        this.renderer.setElementAttribute(this._el_10, 'role', 'button');
        this.renderer.setElementAttribute(this._el_10, 'tappable', '');
        this.renderer.setElementAttribute(this._el_10, 'value', 'top');
        this._appEl_10 = new import3.AppElement(10, 2, this, this._el_10);
        var compView_10 = import41.viewFactory_SegmentButton0(this.viewUtils, this.injector(10), this._appEl_10);
        this._SegmentButton_10_4 = new import41.Wrapper_SegmentButton(this.renderer, new import21.ElementRef(this._el_10));
        this._appEl_10.initComponent(this._SegmentButton_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n        Top\n      ', null);
        compView_10.create(this._SegmentButton_10_4.context, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_13 = this.renderer.createText(null, '\n  ', null);
        compView_0.create(this._Toolbar_0_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_13
            ])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_2_0.bind(this)));
        var subscription_0 = this._NgModel_2_3.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_2_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import42.SegmentButton) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._SegmentButton_4_4.context;
        }
        if (((token === import42.SegmentButton) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._SegmentButton_7_4.context;
        }
        if (((token === import42.SegmentButton) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._SegmentButton_10_4.context;
        }
        if (((token === import43.NgModel) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._NgModel_2_3.context;
        }
        if (((token === import44.NgControl) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._NgControl_2_4;
        }
        if (((token === import45.NgControlStatus) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._NgControlStatus_2_5.context;
        }
        if (((token === import42.Segment) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Segment_2_6.context;
        }
        if (((token === import25.Toolbar) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Toolbar_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage2.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Toolbar_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        var currVal_2 = this.parent.context.apps;
        this._NgModel_2_3.check_model(currVal_2, throwOnChange, false);
        this._NgModel_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_5.detectChangesInternal(this, this._el_2, throwOnChange);
        this._Segment_2_6.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_10 = 'paid';
        this._SegmentButton_4_4.check_value(currVal_10, throwOnChange, false);
        this._SegmentButton_4_4.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_12 = 'free';
        this._SegmentButton_7_4.check_value(currVal_12, throwOnChange, false);
        this._SegmentButton_7_4.detectChangesInternal(this, this._el_7, throwOnChange);
        var currVal_14 = 'top';
        this._SegmentButton_10_4.check_value(currVal_14, throwOnChange, false);
        this._SegmentButton_10_4.detectChangesInternal(this, this._el_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_SegmentButton_2_0.dirty) {
                this._query_SegmentButton_2_0.reset([
                    this._SegmentButton_4_4.context,
                    this._SegmentButton_7_4.context,
                    this._SegmentButton_10_4.context
                ]);
                this._Segment_2_6.context._buttons = this._query_SegmentButton_2_0;
                this._query_SegmentButton_2_0.notifyOnChanges();
            }
        }
        var currVal_0 = this._Toolbar_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_3 = this._NgControlStatus_2_5.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_2, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatus_2_5.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatus_2_5.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_2_5.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_2_5.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_2_5.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_2, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Segment_2_6.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage2.prototype.destroyInternal = function () {
        this._NgModel_2_3.context.ngOnDestroy();
    };
    _View_ApiDemoPage2.prototype._handle_ngModelChange_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.parent.context.apps = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage2.prototype._handle_click_4_0 = function ($event) {
        this._appEl_4.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_4_4.context.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage2.prototype._handle_click_7_0 = function ($event) {
        this._appEl_7.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_7_4.context.onClick() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage2.prototype._handle_click_10_0 = function ($event) {
        this._appEl_10.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._SegmentButton_10_4.context.onClick() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage2;
}(import1.AppView));
function viewFactory_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage3 = (function (_super) {
    __extends(_View_ApiDemoPage3, _super);
    function _View_ApiDemoPage3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage3, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_0, 'no-border-top', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Toolbar_0_4 = new import10.Wrapper_Toolbar(this.parent.parentInjector.get(import22.ViewController, null), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Toolbar_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-searchbar', null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import46.viewFactory_Searchbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Searchbar_2_4 = new import46.Wrapper_Searchbar(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer, this.parent.parentInjector.get(import44.NgControl, null));
        this._appEl_2.initComponent(this._Searchbar_2_4.context, [], compView_2);
        compView_2.create(this._Searchbar_2_4.context, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        compView_0.create(this._Toolbar_0_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_3
            ])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ApiDemoPage3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import47.Searchbar) && (2 === requestNodeIndex))) {
            return this._Searchbar_2_4.context;
        }
        if (((token === import25.Toolbar) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Toolbar_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage3.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Toolbar_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Searchbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Searchbar_2_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Toolbar_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Searchbar_2_4.context.animated;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-animated', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Searchbar_2_4.context._value;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-has-value', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Searchbar_2_4.context._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-active', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Searchbar_2_4.context.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-show-cancel', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._Searchbar_2_4.context._shouldAlignLeft;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-left-aligned', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Searchbar_2_4.context._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-has-focus', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoPage3;
}(import1.AppView));
function viewFactory_ApiDemoPage3(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage3(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage4 = (function (_super) {
    __extends(_View_ApiDemoPage4, _super);
    function _View_ApiDemoPage4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage4, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_0, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_0, 'no-border-top', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Toolbar0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Toolbar_0_4 = new import10.Wrapper_Toolbar(this.parent.parentInjector.get(import22.ViewController, null), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Toolbar_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-searchbar', null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import46.viewFactory_Searchbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Searchbar_2_4 = new import46.Wrapper_Searchbar(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer, this.parent.parentInjector.get(import44.NgControl, null));
        this._appEl_2.initComponent(this._Searchbar_2_4.context, [], compView_2);
        compView_2.create(this._Searchbar_2_4.context, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        compView_0.create(this._Toolbar_0_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_3
            ])
        ], null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ApiDemoPage4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import47.Searchbar) && (2 === requestNodeIndex))) {
            return this._Searchbar_2_4.context;
        }
        if (((token === import25.Toolbar) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Toolbar_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'primary';
        this._Toolbar_0_4.check_color(currVal_0, throwOnChange, false);
        if (this._Toolbar_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Searchbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Searchbar_2_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Toolbar_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Searchbar_2_4.context.animated;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-animated', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Searchbar_2_4.context._value;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-has-value', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Searchbar_2_4.context._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-active', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._Searchbar_2_4.context.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-show-cancel', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Searchbar_2_4.context._shouldAlignLeft;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-left-aligned', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Searchbar_2_4.context._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'searchbar-has-focus', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ApiDemoPage4;
}(import1.AppView));
function viewFactory_ApiDemoPage4(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage4(viewUtils, parentInjector, declarationEl);
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
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import0.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import48.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import48.Wrapper_Nav(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import49.NavControllerBase, null), this.parentInjector.get(import23.App), this.parentInjector.get(import20.Config), this.parentInjector.get(import26.Keyboard), new import21.ElementRef(this._el_0), this.parentInjector.get(import27.NgZone), this.renderer, this.parentInjector.get(import50.ComponentFactoryResolver), this.parentInjector.get(import51.GestureController), this.parentInjector.get(import52.TransitionController), this.parentInjector.get(import53.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import54.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        this._Nav_0_4.check_root(currVal_0, throwOnChange, false);
        this._Nav_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
