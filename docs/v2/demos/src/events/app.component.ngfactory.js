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
import * as import8 from 'ionic-angular/util/events';
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
import * as import20 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import23 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import24 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import26 from 'ionic-angular/config/config';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from 'ionic-angular/navigation/view-controller';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from 'ionic-angular/navigation/nav-controller';
import * as import31 from 'ionic-angular/components/menu/menu-controller';
import * as import32 from 'ionic-angular/components/toolbar/toolbar';
import * as import33 from 'ionic-angular/util/keyboard';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from 'ionic-angular/components/tabs/tabs';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from 'ionic-angular/platform/platform';
import * as import39 from 'ionic-angular/components/navbar/navbar';
import * as import40 from 'ionic-angular/components/icon/icon';
import * as import41 from 'ionic-angular/components/button/button';
import * as import42 from 'ionic-angular/components/menu/menu-toggle';
import * as import43 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import44 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import45 from 'ionic-angular/components/label/label';
import * as import46 from '@angular/forms/src/directives/ng_model';
import * as import47 from '@angular/forms/src/directives/ng_control';
import * as import48 from '@angular/forms/src/directives/ng_control_status';
import * as import49 from 'ionic-angular/components/input/input';
import * as import50 from 'ionic-angular/components/item/item';
import * as import51 from 'ionic-angular/components/list/list';
import * as import52 from 'ionic-angular/components/content/content';
import * as import53 from '../../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import54 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import55 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import56 from '@angular/core/src/linker/template_ref';
import * as import57 from 'ionic-angular/navigation/nav-controller-base';
import * as import58 from '@angular/core/src/linker/component_factory_resolver';
import * as import59 from 'ionic-angular/transitions/transition-controller';
import * as import60 from 'ionic-angular/navigation/deep-linker';
import * as import61 from '@angular/common/src/directives/ng_if';
import * as import62 from 'ionic-angular/components/menu/menu';
import * as import63 from 'ionic-angular/components/nav/nav';
import * as import64 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import65 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import66 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import67 from 'ionic-angular/components/list/list-header';
import * as import68 from '@angular/common/src/directives/ng_for';
import * as import69 from '../../node_modules/ionic-angular/components/menu/menu-close.ngfactory';
import * as import70 from 'ionic-angular/components/menu/menu-close';
export var Wrapper_Login = (function () {
    function Wrapper_Login(p0) {
        this.changed = false;
        this.context = new import0.Login(p0);
    }
    Wrapper_Login.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Login;
}());
export var Wrapper_Logout = (function () {
    function Wrapper_Logout(p0) {
        this.changed = false;
        this.context = new import0.Logout(p0);
    }
    Wrapper_Logout.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Logout;
}());
export var Wrapper_ApiDemoApp = (function () {
    function Wrapper_ApiDemoApp(p0) {
        this.changed = false;
        this.context = new import0.ApiDemoApp(p0);
    }
    Wrapper_ApiDemoApp.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ApiDemoApp;
}());
var renderType_Login_Host = null;
var _View_Login_Host0 = (function (_super) {
    __extends(_View_Login_Host0, _super);
    function _View_Login_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Login_Host0, renderType_Login_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Login_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Login0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Login_0_4 = new Wrapper_Login(this.parentInjector.get(import8.Events));
        this._appEl_0.initComponent(this._Login_0_4.context, [], compView_0);
        compView_0.create(this._Login_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Login_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Login) && (0 === requestNodeIndex))) {
            return this._Login_0_4.context;
        }
        return notFoundResult;
    };
    _View_Login_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Login_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Login_Host0;
}(import1.AppView));
function viewFactory_Login_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Login_Host === null)) {
        (renderType_Login_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Login_Host0(viewUtils, parentInjector, declarationEl);
}
export var LoginNgFactory = new import10.ComponentFactory('ng-component', viewFactory_Login_Host0, import0.Login);
var styles_Login = [];
var renderType_Login = null;
var _View_Login0 = (function (_super) {
    __extends(_View_Login0, _super);
    function _View_Login0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Login0, renderType_Login, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Login0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import28.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import30.NavController, null), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import13.Wrapper_Button('', '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_4), this.parentInjector.get(import28.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import16.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import17.Wrapper_Icon(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n      Events\n    ', null);
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
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import19.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import19.Wrapper_Content(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'h3', null);
        this.renderer.setElementAttribute(this._el_16, 'margin-left', '');
        this._text_17 = this.renderer.createText(this._el_16, 'Login', null);
        this._text_18 = this.renderer.createText(null, '\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_19, 'margin', '');
        this._text_20 = this.renderer.createText(this._el_19, 'Click the login button to use the credentials below. Then, toggle the menu to see the menu items change.', null);
        this._text_21 = this.renderer.createText(null, '\n\n  ', null);
        this._el_22 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_22, 'no-margin', '');
        this._List_22_3 = new import20.Wrapper_List(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_22), this.renderer, this.parentInjector.get(import36.GestureController));
        this._text_23 = this.renderer.createText(this._el_22, '\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'item item-block');
        this._appEl_24 = new import3.AppElement(24, 22, this, this._el_24);
        var compView_24 = import21.viewFactory_Item0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Item_24_4 = new import21.Wrapper_Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_24), this.renderer);
        this._ItemContent_24_5 = new import21.Wrapper_ItemContent();
        this._query_Label_24_0 = new import16.QueryList();
        this._query_Button_24_1 = new import16.QueryList();
        this._query_Icon_24_2 = new import16.QueryList();
        this._appEl_24.initComponent(this._Item_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_26, 'stacked', '');
        this._Label_26_3 = new import22.Wrapper_Label(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_26), this.renderer, null, '', null, null);
        this._text_27 = this.renderer.createText(this._el_26, 'Name', null);
        this._text_28 = this.renderer.createText(null, '\n      ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_29, 'disabled', '');
        this._appEl_29 = new import3.AppElement(29, 24, this, this._el_29);
        var compView_29 = import25.viewFactory_TextInput0(this.viewUtils, this.injector(29), this._appEl_29);
        this._NgModel_29_4 = new import23.Wrapper_NgModel(null, null, null, null);
        this._NgControl_29_5 = this._NgModel_29_4.context;
        this._NgControlStatus_29_6 = new import24.Wrapper_NgControlStatus(this._NgControl_29_5);
        this._TextInput_29_7 = new import25.Wrapper_TextInput(this.parentInjector.get(import26.Config), this.parentInjector.get(import37.Form), this._Item_24_4.context, this.parentInjector.get(import29.App), this.parentInjector.get(import38.Platform), new import27.ElementRef(this._el_29), this.renderer, this._Content_14_4.context, this.parentInjector.get(import30.NavController, null), this._NgControl_29_5);
        this._appEl_29.initComponent(this._TextInput_29_7.context, [], compView_29);
        compView_29.create(this._TextInput_29_7.context, [], null);
        this._text_30 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_24_0.reset([this._Label_26_3.context]);
        this._Item_24_4.context.contentLabel = this._query_Label_24_0.first;
        compView_24.create(this._Item_24_4.context, [
            [],
            [].concat([this._el_26]),
            [].concat([
                this._text_25,
                this._text_28,
                this._text_30
            ]),
            [].concat([this._el_29]),
            []
        ], null);
        this._text_31 = this.renderer.createText(this._el_22, '\n    ', null);
        this._el_32 = this.renderer.createElement(this._el_22, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item item-block');
        this._appEl_32 = new import3.AppElement(32, 22, this, this._el_32);
        var compView_32 = import21.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import21.Wrapper_Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_32), this.renderer);
        this._ItemContent_32_5 = new import21.Wrapper_ItemContent();
        this._query_Label_32_0 = new import16.QueryList();
        this._query_Button_32_1 = new import16.QueryList();
        this._query_Icon_32_2 = new import16.QueryList();
        this._appEl_32.initComponent(this._Item_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_34, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_34, 'stacked', '');
        this._Label_34_3 = new import22.Wrapper_Label(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_34), this.renderer, null, '', null, null);
        this._text_35 = this.renderer.createText(this._el_34, 'Username', null);
        this._text_36 = this.renderer.createText(null, '\n      ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_37, 'disabled', '');
        this._appEl_37 = new import3.AppElement(37, 32, this, this._el_37);
        var compView_37 = import25.viewFactory_TextInput0(this.viewUtils, this.injector(37), this._appEl_37);
        this._NgModel_37_4 = new import23.Wrapper_NgModel(null, null, null, null);
        this._NgControl_37_5 = this._NgModel_37_4.context;
        this._NgControlStatus_37_6 = new import24.Wrapper_NgControlStatus(this._NgControl_37_5);
        this._TextInput_37_7 = new import25.Wrapper_TextInput(this.parentInjector.get(import26.Config), this.parentInjector.get(import37.Form), this._Item_32_4.context, this.parentInjector.get(import29.App), this.parentInjector.get(import38.Platform), new import27.ElementRef(this._el_37), this.renderer, this._Content_14_4.context, this.parentInjector.get(import30.NavController, null), this._NgControl_37_5);
        this._appEl_37.initComponent(this._TextInput_37_7.context, [], compView_37);
        compView_37.create(this._TextInput_37_7.context, [], null);
        this._text_38 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_32_0.reset([this._Label_34_3.context]);
        this._Item_32_4.context.contentLabel = this._query_Label_32_0.first;
        compView_32.create(this._Item_32_4.context, [
            [],
            [].concat([this._el_34]),
            [].concat([
                this._text_33,
                this._text_36,
                this._text_38
            ]),
            [].concat([this._el_37]),
            []
        ], null);
        this._text_39 = this.renderer.createText(this._el_22, '\n  ', null);
        this._text_40 = this.renderer.createText(null, '\n\n  ', null);
        this._el_41 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_41, 'padding', '');
        this._text_42 = this.renderer.createText(this._el_41, '\n    ', null);
        this._el_43 = this.renderer.createElement(this._el_41, 'button', null);
        this.renderer.setElementAttribute(this._el_43, 'block', '');
        this.renderer.setElementAttribute(this._el_43, 'ion-button', '');
        this._appEl_43 = new import3.AppElement(43, 41, this, this._el_43);
        var compView_43 = import13.viewFactory_Button0(this.viewUtils, this.injector(43), this._appEl_43);
        this._Button_43_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_43), this.renderer);
        this._appEl_43.initComponent(this._Button_43_4.context, [], compView_43);
        this._text_44 = this.renderer.createText(null, 'Login', null);
        compView_43.create(this._Button_43_4.context, [[].concat([this._text_44])], null);
        this._text_45 = this.renderer.createText(this._el_41, '\n    ', null);
        this._el_46 = this.renderer.createElement(this._el_41, 'button', null);
        this.renderer.setElementAttribute(this._el_46, 'block', '');
        this.renderer.setElementAttribute(this._el_46, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_46, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_46, 'menuToggle', '');
        this._appEl_46 = new import3.AppElement(46, 41, this, this._el_46);
        var compView_46 = import13.viewFactory_Button0(this.viewUtils, this.injector(46), this._appEl_46);
        this._Button_46_4 = new import13.Wrapper_Button('', '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_46), this.renderer);
        this._MenuToggle_46_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_46), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import39.Navbar, null));
        this._ToolbarItem_46_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_46), this.renderer, this.parentInjector.get(import32.Toolbar, null), this.parentInjector.get(import39.Navbar, null));
        this._query_Button_46_0 = new import16.QueryList();
        this._appEl_46.initComponent(this._Button_46_4.context, [], compView_46);
        this._text_47 = this.renderer.createText(null, 'Toggle Menu', null);
        compView_46.create(this._Button_46_4.context, [[].concat([this._text_47])], null);
        this._text_48 = this.renderer.createText(this._el_41, '\n  ', null);
        this._text_49 = this.renderer.createText(null, '\n\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_40,
                this._el_41,
                this._text_49
            ]),
            []
        ], null);
        this._text_50 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_29, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
        var subscription_0 = this._NgModel_29_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_37, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
        var subscription_1 = this._NgModel_37_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_43, 'click', this.eventHandler(this._handle_click_43_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_46, 'click', this.eventHandler(this._handle_click_46_0.bind(this)));
        this._expr_36 = import7.UNINITIALIZED;
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
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    };
    _View_Login0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import41.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import42.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import43.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import44.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import39.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import32.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import45.Label) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Label_26_3.context;
        }
        if (((token === import46.NgModel) && (29 === requestNodeIndex))) {
            return this._NgModel_29_4.context;
        }
        if (((token === import47.NgControl) && (29 === requestNodeIndex))) {
            return this._NgControl_29_5;
        }
        if (((token === import48.NgControlStatus) && (29 === requestNodeIndex))) {
            return this._NgControlStatus_29_6.context;
        }
        if (((token === import49.TextInput) && (29 === requestNodeIndex))) {
            return this._TextInput_29_7.context;
        }
        if (((token === import50.Item) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Item_24_4.context;
        }
        if (((token === import50.ItemContent) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ItemContent_24_5.context;
        }
        if (((token === import45.Label) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Label_34_3.context;
        }
        if (((token === import46.NgModel) && (37 === requestNodeIndex))) {
            return this._NgModel_37_4.context;
        }
        if (((token === import47.NgControl) && (37 === requestNodeIndex))) {
            return this._NgControl_37_5;
        }
        if (((token === import48.NgControlStatus) && (37 === requestNodeIndex))) {
            return this._NgControlStatus_37_6.context;
        }
        if (((token === import49.TextInput) && (37 === requestNodeIndex))) {
            return this._TextInput_37_7.context;
        }
        if (((token === import50.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Item_32_4.context;
        }
        if (((token === import50.ItemContent) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ItemContent_32_5.context;
        }
        if (((token === import51.List) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._List_22_3.context;
        }
        if (((token === import41.Button) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Button_43_4.context;
        }
        if (((token === import41.Button) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Button_46_4.context;
        }
        if (((token === import42.MenuToggle) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._MenuToggle_46_5.context;
        }
        if (((token === import43.ToolbarItem) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._ToolbarItem_46_6.context;
        }
        if (((token === import52.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_Login0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
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
        this._List_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        if (this._Item_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        this._ItemContent_24_5.detectChangesInternal(this, this._el_24, throwOnChange);
        var currVal_8 = 'primary';
        this._Label_26_3.check_color(currVal_8, throwOnChange, false);
        this._Label_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        var currVal_10 = '';
        this._NgModel_29_4.check_isDisabled(currVal_10, throwOnChange, false);
        var currVal_11 = this.context.user.name;
        this._NgModel_29_4.check_model(currVal_11, throwOnChange, false);
        this._NgModel_29_4.detectChangesInternal(this, this._el_29, throwOnChange);
        this._NgControlStatus_29_6.detectChangesInternal(this, this._el_29, throwOnChange);
        var currVal_18 = '';
        this._TextInput_29_7.check_disabled(currVal_18, throwOnChange, false);
        this._TextInput_29_7.detectChangesInternal(this, this._el_29, throwOnChange);
        if (this._Item_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._ItemContent_32_5.detectChangesInternal(this, this._el_32, throwOnChange);
        var currVal_19 = 'primary';
        this._Label_34_3.check_color(currVal_19, throwOnChange, false);
        this._Label_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        var currVal_21 = '';
        this._NgModel_37_4.check_isDisabled(currVal_21, throwOnChange, false);
        var currVal_22 = this.context.user.username;
        this._NgModel_37_4.check_model(currVal_22, throwOnChange, false);
        this._NgModel_37_4.detectChangesInternal(this, this._el_37, throwOnChange);
        this._NgControlStatus_37_6.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_29 = '';
        this._TextInput_37_7.check_disabled(currVal_29, throwOnChange, false);
        this._TextInput_37_7.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_31 = '';
        this._Button_43_4.check_block(currVal_31, throwOnChange, false);
        if (this._Button_43_4.detectChangesInternal(this, this._el_43, throwOnChange)) {
            this._appEl_43.componentView.markAsCheckOnce();
        }
        var currVal_33 = '';
        this._Button_46_4.check_block(currVal_33, throwOnChange, false);
        var currVal_34 = 'secondary';
        this._Button_46_4.check_color(currVal_34, throwOnChange, false);
        if (this._Button_46_4.detectChangesInternal(this, this._el_46, throwOnChange)) {
            this._appEl_46.componentView.markAsCheckOnce();
        }
        var currVal_35 = '';
        this._MenuToggle_46_5.check_menuToggle(currVal_35, throwOnChange, false);
        this._MenuToggle_46_5.detectChangesInternal(this, this._el_46, throwOnChange);
        this._ToolbarItem_46_6.detectChangesInternal(this, this._el_46, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_24_1.dirty) {
                this._query_Button_24_1.reset([]);
                this._Item_24_4.context._buttons = this._query_Button_24_1;
                this._query_Button_24_1.notifyOnChanges();
            }
            if (this._query_Icon_24_2.dirty) {
                this._query_Icon_24_2.reset([]);
                this._Item_24_4.context._icons = this._query_Icon_24_2;
                this._query_Icon_24_2.notifyOnChanges();
            }
            if (this._query_Button_32_1.dirty) {
                this._query_Button_32_1.reset([]);
                this._Item_32_4.context._buttons = this._query_Button_32_1;
                this._query_Button_32_1.notifyOnChanges();
            }
            if (this._query_Icon_32_2.dirty) {
                this._query_Icon_32_2.reset([]);
                this._Item_32_4.context._icons = this._query_Icon_32_2;
                this._query_Icon_32_2.notifyOnChanges();
            }
            if (this._query_Button_46_0.dirty) {
                this._query_Button_46_0.reset([this._Button_46_4.context]);
                this._ToolbarItem_46_6.context._buttons = this._query_Button_46_0;
                this._query_Button_46_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            this._TextInput_29_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_24_4.context.ngAfterContentInit();
            }
            this._TextInput_37_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_43_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_46_4.context.ngAfterContentInit();
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
        var currVal_12 = this._NgControlStatus_29_6.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_29, 'ng-untouched', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_29_6.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_29, 'ng-touched', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_29_6.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_29, 'ng-pristine', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_29_6.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_29, 'ng-dirty', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_29_6.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_29, 'ng-valid', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_29_6.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_29, 'ng-invalid', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_23 = this._NgControlStatus_37_6.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_37, 'ng-untouched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_37_6.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_37, 'ng-touched', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_37_6.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_37, 'ng-pristine', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_37_6.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_37, 'ng-dirty', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_37_6.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_37, 'ng-valid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_37_6.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_37, 'ng-invalid', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_36 = this._MenuToggle_46_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementProperty(this._el_46, 'hidden', currVal_36);
            this._expr_36 = currVal_36;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Login0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._NgModel_29_4.context.ngOnDestroy();
        this._TextInput_29_7.context.ngOnDestroy();
        this._NgModel_37_4.context.ngOnDestroy();
        this._TextInput_37_7.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_Login0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_ngModelChange_29_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.user.name = $event) !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_ngModelChange_37_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.user.username = $event) !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_click_43_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.login() !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_click_46_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_46_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Login0;
}(import1.AppView));
export function viewFactory_Login0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Login === null)) {
        (renderType_Login = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Login, {}));
    }
    return new _View_Login0(viewUtils, parentInjector, declarationEl);
}
var renderType_Logout_Host = null;
var _View_Logout_Host0 = (function (_super) {
    __extends(_View_Logout_Host0, _super);
    function _View_Logout_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Logout_Host0, renderType_Logout_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Logout_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Logout0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Logout_0_4 = new Wrapper_Logout(this.parentInjector.get(import8.Events));
        this._appEl_0.initComponent(this._Logout_0_4.context, [], compView_0);
        compView_0.create(this._Logout_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Logout_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Logout) && (0 === requestNodeIndex))) {
            return this._Logout_0_4.context;
        }
        return notFoundResult;
    };
    _View_Logout_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Logout_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Logout_Host0;
}(import1.AppView));
function viewFactory_Logout_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Logout_Host === null)) {
        (renderType_Logout_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Logout_Host0(viewUtils, parentInjector, declarationEl);
}
export var LogoutNgFactory = new import10.ComponentFactory('ng-component', viewFactory_Logout_Host0, import0.Logout);
var styles_Logout = [];
var renderType_Logout = null;
var _View_Logout0 = (function (_super) {
    __extends(_View_Logout0, _super);
    function _View_Logout0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Logout0, renderType_Logout, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Logout0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import28.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import30.NavController, null), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import13.Wrapper_Button('', '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_4), this.parentInjector.get(import28.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import16.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import17.Wrapper_Icon(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n      Events\n    ', null);
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
        this._text_12 = this.renderer.createText(this._el_0, '\n  \n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import19.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import19.Wrapper_Content(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'h3', null);
        this.renderer.setElementAttribute(this._el_16, 'margin-left', '');
        this._text_17 = this.renderer.createText(this._el_16, 'Logout', null);
        this._text_18 = this.renderer.createText(null, '\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_19, 'margin', '');
        this._text_20 = this.renderer.createText(this._el_19, 'Click the logout button to logout. Then, toggle the menu to see the menu items change.', null);
        this._text_21 = this.renderer.createText(null, '\n\n  ', null);
        this._el_22 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_22, 'padding', '');
        this._text_23 = this.renderer.createText(this._el_22, '\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'block', '');
        this.renderer.setElementAttribute(this._el_24, 'ion-button', '');
        this._appEl_24 = new import3.AppElement(24, 22, this, this._el_24);
        var compView_24 = import13.viewFactory_Button0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Button_24_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_24), this.renderer);
        this._appEl_24.initComponent(this._Button_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, 'Logout', null);
        compView_24.create(this._Button_24_4.context, [[].concat([this._text_25])], null);
        this._text_26 = this.renderer.createText(this._el_22, '\n    ', null);
        this._el_27 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'block', '');
        this.renderer.setElementAttribute(this._el_27, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_27, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_27, 'menuToggle', '');
        this._appEl_27 = new import3.AppElement(27, 22, this, this._el_27);
        var compView_27 = import13.viewFactory_Button0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Button_27_4 = new import13.Wrapper_Button('', '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_27), this.renderer);
        this._MenuToggle_27_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_27), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import39.Navbar, null));
        this._ToolbarItem_27_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_27), this.renderer, this.parentInjector.get(import32.Toolbar, null), this.parentInjector.get(import39.Navbar, null));
        this._query_Button_27_0 = new import16.QueryList();
        this._appEl_27.initComponent(this._Button_27_4.context, [], compView_27);
        this._text_28 = this.renderer.createText(null, 'Toggle Menu', null);
        compView_27.create(this._Button_27_4.context, [[].concat([this._text_28])], null);
        this._text_29 = this.renderer.createText(this._el_22, '\n  ', null);
        this._text_30 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_30
            ]),
            []
        ], null);
        this._text_31 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
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
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_Logout0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import41.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import42.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import43.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import44.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import39.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import32.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import41.Button) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Button_24_4.context;
        }
        if (((token === import41.Button) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Button_27_4.context;
        }
        if (((token === import42.MenuToggle) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._MenuToggle_27_5.context;
        }
        if (((token === import43.ToolbarItem) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ToolbarItem_27_6.context;
        }
        if (((token === import52.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_Logout0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
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
        var currVal_9 = '';
        this._Button_24_4.check_block(currVal_9, throwOnChange, false);
        if (this._Button_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        var currVal_11 = '';
        this._Button_27_4.check_block(currVal_11, throwOnChange, false);
        var currVal_12 = 'secondary';
        this._Button_27_4.check_color(currVal_12, throwOnChange, false);
        if (this._Button_27_4.detectChangesInternal(this, this._el_27, throwOnChange)) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        var currVal_13 = '';
        this._MenuToggle_27_5.check_menuToggle(currVal_13, throwOnChange, false);
        this._MenuToggle_27_5.detectChangesInternal(this, this._el_27, throwOnChange);
        this._ToolbarItem_27_6.detectChangesInternal(this, this._el_27, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_27_0.dirty) {
                this._query_Button_27_0.reset([this._Button_27_4.context]);
                this._ToolbarItem_27_6.context._buttons = this._query_Button_27_0;
                this._query_Button_27_0.notifyOnChanges();
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
        var currVal_14 = this._MenuToggle_27_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_27, 'hidden', currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Logout0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_Logout0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_Logout0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.logout() !== false);
        return (true && pd_0);
    };
    _View_Logout0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_27_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Logout0;
}(import1.AppView));
export function viewFactory_Logout0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Logout === null)) {
        (renderType_Logout = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Logout, {}));
    }
    return new _View_Logout0(viewUtils, parentInjector, declarationEl);
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
        this._ApiDemoApp_0_4 = new Wrapper_ApiDemoApp(this.parentInjector.get(import8.Events));
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
        this._viewQuery_Nav_0 = new import16.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_0, 'role', 'navigation');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import53.viewFactory_Menu0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Menu_0_4 = new import53.Wrapper_Menu(this.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_0), this.parentInjector.get(import26.Config), this.parentInjector.get(import38.Platform), this.renderer, this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import36.GestureController));
        this._query_Content_0_0 = new import16.QueryList();
        this._appEl_0.initComponent(this._Menu_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_2_3 = new import11.Wrapper_Header(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import28.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_4, 'color', 'secondary');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import11.viewFactory_Toolbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Toolbar_4_4 = new import11.Wrapper_Toolbar(this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Toolbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_6), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import39.Navbar, null));
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Left Menu', null);
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
        this._Content_11_4 = new import19.Wrapper_Content(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import56.TemplateRef_(this._appEl_13, viewFactory_ApiDemoApp1);
        this._NgIf_13_6 = new import54.Wrapper_NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(null, '\n\n    ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_15 = new import3.AppElement(15, 11, this, this._anchor_15);
        this._TemplateRef_15_5 = new import56.TemplateRef_(this._appEl_15, viewFactory_ApiDemoApp3);
        this._NgIf_15_6 = new import54.Wrapper_NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._appEl_13,
                this._text_14,
                this._appEl_15,
                this._text_16
            ]),
            []
        ], null);
        this._text_17 = this.renderer.createText(null, '\n\n', null);
        this._query_Content_0_0.reset([this._Content_11_4.context]);
        this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
        compView_0.create(this._Menu_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_10,
                this._el_11,
                this._text_17
            ])], null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_19 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this.renderer.setElementAttribute(this._el_19, 'id', 'nav');
        this.renderer.setElementAttribute(this._el_19, 'swipeBackEnabled', 'false');
        this._appEl_19 = new import3.AppElement(19, null, this, this._el_19);
        var compView_19 = import55.viewFactory_Nav0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Nav_19_4 = new import55.Wrapper_Nav(this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import57.NavControllerBase, null), this.parentInjector.get(import29.App), this.parentInjector.get(import26.Config), this.parentInjector.get(import33.Keyboard), new import27.ElementRef(this._el_19), this.parentInjector.get(import34.NgZone), this.renderer, this.parentInjector.get(import58.ComponentFactoryResolver), this.parentInjector.get(import36.GestureController), this.parentInjector.get(import59.TransitionController), this.parentInjector.get(import60.DeepLinker, null));
        this._appEl_19.initComponent(this._Nav_19_4.context, [], compView_19);
        compView_19.create(this._Nav_19_4.context, [], null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._viewQuery_Nav_0.reset([this._Nav_19_4.context]);
        this.context.nav = this._viewQuery_Nav_0.first;
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
            this._anchor_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20
        ], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import44.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import32.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Toolbar_4_4.context;
        }
        if (((token === import32.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_2_3.context;
        }
        if (((token === import56.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import61.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import56.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import61.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === import52.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Content_11_4.context;
        }
        if (((token === import62.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Menu_0_4.context;
        }
        if (((token === import63.Nav) && (19 === requestNodeIndex))) {
            return this._Nav_19_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._Nav_19_4.context;
        this._Menu_0_4.check_content(currVal_0, throwOnChange, false);
        if (this._Menu_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_1 = 'secondary';
        this._Toolbar_4_4.check_color(currVal_1, throwOnChange, false);
        if (this._Toolbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        var currVal_4 = this.context.loggedIn;
        this._NgIf_13_6.check_ngIf(currVal_4, throwOnChange, false);
        this._NgIf_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        var currVal_5 = !this.context.loggedIn;
        this._NgIf_15_6.check_ngIf(currVal_5, throwOnChange, false);
        this._NgIf_15_6.detectChangesInternal(this, this._anchor_15, throwOnChange);
        var currVal_6 = this.context.root;
        this._Nav_19_4.check_root(currVal_6, throwOnChange, false);
        var currVal_7 = 'false';
        this._Nav_19_4.check_swipeBackEnabled(currVal_7, throwOnChange, false);
        this._Nav_19_4.detectChangesInternal(this, this._el_19, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this._Toolbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_19_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoApp0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
        this._Menu_0_4.context.ngOnDestroy();
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoApp1 = (function (_super) {
    __extends(_View_ApiDemoApp1, _super);
    function _View_ApiDemoApp1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp1, renderType_ApiDemoApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-list', null);
        this._List_0_3 = new import20.Wrapper_List(this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import36.GestureController));
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import21.Wrapper_Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer);
        this._ListHeader_2_5 = new import64.Wrapper_ListHeader(this.parent.parentInjector.get(import26.Config), this.renderer, new import27.ElementRef(this._el_2), null);
        this._query_Label_2_0 = new import16.QueryList();
        this._query_Button_2_1 = new import16.QueryList();
        this._query_Icon_2_2 = new import16.QueryList();
        this._appEl_2.initComponent(this._Item_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        Logged in as ', null);
        this._el_4 = this.renderer.createElement(null, 'b', null);
        this._text_5 = this.renderer.createText(this._el_4, 'Administrator', null);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.context.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4.context, [
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ]),
            [],
            []
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_8 = new import3.AppElement(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import56.TemplateRef_(this._appEl_8, viewFactory_ApiDemoApp2);
        this._NgFor_8_6 = new import65.Wrapper_NgFor(this._appEl_8.vcRef, this._TemplateRef_8_5, this.parent.parentInjector.get(import66.IterableDiffers), this.parent.ref);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_10, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_10, 'menuToggle', '');
        this._appEl_10 = new import3.AppElement(10, 0, this, this._el_10);
        var compView_10 = import21.viewFactory_Item0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Item_10_4 = new import21.Wrapper_Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_10), this.renderer);
        this._ItemContent_10_5 = new import21.Wrapper_ItemContent();
        this._MenuToggle_10_6 = new import14.Wrapper_MenuToggle(this.parent.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_10), this.parent.parentInjector.get(import28.ViewController, null), this.parent.parentInjector.get(import39.Navbar, null));
        this._ToolbarItem_10_7 = new import15.Wrapper_ToolbarItem(this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_10), this.renderer, this.parent.parentInjector.get(import32.Toolbar, null), this.parent.parentInjector.get(import39.Navbar, null));
        this._query_Label_10_0 = new import16.QueryList();
        this._query_Button_10_1 = new import16.QueryList();
        this._query_Icon_10_2 = new import16.QueryList();
        this._query_Button_10_3 = new import16.QueryList();
        this._appEl_10.initComponent(this._Item_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n        Close Menu\n      ', null);
        this._query_Label_10_0.reset([]);
        this._Item_10_4.context.contentLabel = this._query_Label_10_0.first;
        compView_10.create(this._Item_10_4.context, [
            [],
            [],
            [].concat([this._text_11]),
            [],
            []
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    };
    _View_ApiDemoApp1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import50.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Item_2_4.context;
        }
        if (((token === import67.ListHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ListHeader_2_5.context;
        }
        if (((token === import56.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import68.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === import50.Item) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Item_10_4.context;
        }
        if (((token === import50.ItemContent) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ItemContent_10_5.context;
        }
        if (((token === import42.MenuToggle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._MenuToggle_10_6.context;
        }
        if (((token === import43.ToolbarItem) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarItem_10_7.context;
        }
        if (((token === import51.List) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._List_0_3.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp1.prototype.detectChangesInternal = function (throwOnChange) {
        this._List_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        if (this._Item_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this._ListHeader_2_5.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_0 = this.parent.context.loggedInPages;
        this._NgFor_8_6.check_ngForOf(currVal_0, throwOnChange, false);
        this._NgFor_8_6.detectChangesInternal(this, this._anchor_8, throwOnChange);
        if (this._Item_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        this._ItemContent_10_5.detectChangesInternal(this, this._el_10, throwOnChange);
        var currVal_2 = '';
        this._MenuToggle_10_6.check_menuToggle(currVal_2, throwOnChange, false);
        this._MenuToggle_10_6.detectChangesInternal(this, this._el_10, throwOnChange);
        this._ToolbarItem_10_7.detectChangesInternal(this, this._el_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4.context._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4.context._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if (this._query_Button_10_1.dirty) {
                this._query_Button_10_1.reset([]);
                this._Item_10_4.context._buttons = this._query_Button_10_1;
                this._query_Button_10_1.notifyOnChanges();
            }
            if (this._query_Button_10_3.dirty) {
                this._query_Button_10_3.reset([]);
                this._ToolbarItem_10_7.context._buttons = this._query_Button_10_3;
                this._query_Button_10_3.notifyOnChanges();
            }
            if (this._query_Icon_10_2.dirty) {
                this._query_Icon_10_2.reset([]);
                this._Item_10_4.context._icons = this._query_Icon_10_2;
                this._query_Icon_10_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_10_4.context.ngAfterContentInit();
            }
        }
        var currVal_3 = this._MenuToggle_10_6.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_10, 'hidden', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoApp1.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_10_6.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoApp1;
}(import1.AppView));
function viewFactory_ApiDemoApp1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoApp1(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoApp2 = (function (_super) {
    __extends(_View_ApiDemoApp2, _super);
    function _View_ApiDemoApp2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp2, renderType_ApiDemoApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_0, 'menuClose', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import21.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import21.Wrapper_Item(this.parent.parent.parentInjector.get(import37.Form), this.parent.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import21.Wrapper_ItemContent();
        this._MenuClose_0_6 = new import69.Wrapper_MenuClose(this.parent.parent.parentInjector.get(import31.MenuController));
        this._query_Label_0_0 = new import16.QueryList();
        this._query_Button_0_1 = new import16.QueryList();
        this._query_Icon_0_2 = new import16.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n        ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._Label_2_3 = new import22.Wrapper_Label(this.parent.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer, null, null, null, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_0_0.reset([this._Label_2_3.context]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [].concat([this._el_2]),
            [].concat([
                this._text_1,
                this._text_4
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_ApiDemoApp2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import45.Label) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Label_2_3.context;
        }
        if (((token === import50.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Item_0_4.context;
        }
        if (((token === import50.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._ItemContent_0_5.context;
        }
        if (((token === import70.MenuClose) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._MenuClose_0_6.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp2.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_2 = '';
        this._MenuClose_0_6.check_menuClose(currVal_2, throwOnChange, false);
        this._MenuClose_0_6.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_3 = 'primary';
        this._Label_2_3.check_color(currVal_3, throwOnChange, false);
        this._Label_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoApp2.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.openPage(this.parent.parent._Menu_0_4.context, this.context.$implicit) !== false);
        var pd_1 = (this._MenuClose_0_6.context.close() !== false);
        return ((true && pd_0) && pd_1);
    };
    return _View_ApiDemoApp2;
}(import1.AppView));
function viewFactory_ApiDemoApp2(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoApp2(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoApp3 = (function (_super) {
    __extends(_View_ApiDemoApp3, _super);
    function _View_ApiDemoApp3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp3, renderType_ApiDemoApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-list', null);
        this._List_0_3 = new import20.Wrapper_List(this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import36.GestureController));
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import21.Wrapper_Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer);
        this._ListHeader_2_5 = new import64.Wrapper_ListHeader(this.parent.parentInjector.get(import26.Config), this.renderer, new import27.ElementRef(this._el_2), null);
        this._query_Label_2_0 = new import16.QueryList();
        this._query_Button_2_1 = new import16.QueryList();
        this._query_Icon_2_2 = new import16.QueryList();
        this._appEl_2.initComponent(this._Item_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        Please Log In\n      ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.context.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4.context, [
            [],
            [],
            [].concat([this._text_3]),
            [],
            []
        ], null);
        this._text_4 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_5 = new import3.AppElement(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import56.TemplateRef_(this._appEl_5, viewFactory_ApiDemoApp4);
        this._NgFor_5_6 = new import65.Wrapper_NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parent.parentInjector.get(import66.IterableDiffers), this.parent.ref);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_7, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_7, 'menuToggle', '');
        this._appEl_7 = new import3.AppElement(7, 0, this, this._el_7);
        var compView_7 = import21.viewFactory_Item0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Item_7_4 = new import21.Wrapper_Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_7), this.renderer);
        this._ItemContent_7_5 = new import21.Wrapper_ItemContent();
        this._MenuToggle_7_6 = new import14.Wrapper_MenuToggle(this.parent.parentInjector.get(import31.MenuController), new import27.ElementRef(this._el_7), this.parent.parentInjector.get(import28.ViewController, null), this.parent.parentInjector.get(import39.Navbar, null));
        this._ToolbarItem_7_7 = new import15.Wrapper_ToolbarItem(this.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_7), this.renderer, this.parent.parentInjector.get(import32.Toolbar, null), this.parent.parentInjector.get(import39.Navbar, null));
        this._query_Label_7_0 = new import16.QueryList();
        this._query_Button_7_1 = new import16.QueryList();
        this._query_Icon_7_2 = new import16.QueryList();
        this._query_Button_7_3 = new import16.QueryList();
        this._appEl_7.initComponent(this._Item_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, '\n        Close Menu\n      ', null);
        this._query_Label_7_0.reset([]);
        this._Item_7_4.context.contentLabel = this._query_Label_7_0.first;
        compView_7.create(this._Item_7_4.context, [
            [],
            [],
            [].concat([this._text_8]),
            [],
            []
        ], null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_ApiDemoApp3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import50.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Item_2_4.context;
        }
        if (((token === import67.ListHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._ListHeader_2_5.context;
        }
        if (((token === import56.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import68.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        if (((token === import50.Item) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Item_7_4.context;
        }
        if (((token === import50.ItemContent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ItemContent_7_5.context;
        }
        if (((token === import42.MenuToggle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MenuToggle_7_6.context;
        }
        if (((token === import43.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_7_7.context;
        }
        if (((token === import51.List) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._List_0_3.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp3.prototype.detectChangesInternal = function (throwOnChange) {
        this._List_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        if (this._Item_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this._ListHeader_2_5.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_0 = this.parent.context.loggedOutPages;
        this._NgFor_5_6.check_ngForOf(currVal_0, throwOnChange, false);
        this._NgFor_5_6.detectChangesInternal(this, this._anchor_5, throwOnChange);
        if (this._Item_7_4.detectChangesInternal(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        this._ItemContent_7_5.detectChangesInternal(this, this._el_7, throwOnChange);
        var currVal_2 = '';
        this._MenuToggle_7_6.check_menuToggle(currVal_2, throwOnChange, false);
        this._MenuToggle_7_6.detectChangesInternal(this, this._el_7, throwOnChange);
        this._ToolbarItem_7_7.detectChangesInternal(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4.context._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4.context._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if (this._query_Button_7_1.dirty) {
                this._query_Button_7_1.reset([]);
                this._Item_7_4.context._buttons = this._query_Button_7_1;
                this._query_Button_7_1.notifyOnChanges();
            }
            if (this._query_Button_7_3.dirty) {
                this._query_Button_7_3.reset([]);
                this._ToolbarItem_7_7.context._buttons = this._query_Button_7_3;
                this._query_Button_7_3.notifyOnChanges();
            }
            if (this._query_Icon_7_2.dirty) {
                this._query_Icon_7_2.reset([]);
                this._Item_7_4.context._icons = this._query_Icon_7_2;
                this._query_Icon_7_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_7_4.context.ngAfterContentInit();
            }
        }
        var currVal_3 = this._MenuToggle_7_6.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_7, 'hidden', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoApp3.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_7_6.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoApp3;
}(import1.AppView));
function viewFactory_ApiDemoApp3(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoApp3(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoApp4 = (function (_super) {
    __extends(_View_ApiDemoApp4, _super);
    function _View_ApiDemoApp4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp4, renderType_ApiDemoApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_0, 'menuClose', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import21.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import21.Wrapper_Item(this.parent.parent.parentInjector.get(import37.Form), this.parent.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import21.Wrapper_ItemContent();
        this._MenuClose_0_6 = new import69.Wrapper_MenuClose(this.parent.parent.parentInjector.get(import31.MenuController));
        this._query_Label_0_0 = new import16.QueryList();
        this._query_Button_0_1 = new import16.QueryList();
        this._query_Icon_0_2 = new import16.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n        ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._Label_2_3 = new import22.Wrapper_Label(this.parent.parent.parentInjector.get(import26.Config), new import27.ElementRef(this._el_2), this.renderer, null, null, null, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_0_0.reset([this._Label_2_3.context]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [].concat([this._el_2]),
            [].concat([
                this._text_1,
                this._text_4
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_ApiDemoApp4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import45.Label) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Label_2_3.context;
        }
        if (((token === import50.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Item_0_4.context;
        }
        if (((token === import50.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._ItemContent_0_5.context;
        }
        if (((token === import70.MenuClose) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._MenuClose_0_6.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp4.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_2 = '';
        this._MenuClose_0_6.check_menuClose(currVal_2, throwOnChange, false);
        this._MenuClose_0_6.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_3 = 'primary';
        this._Label_2_3.check_color(currVal_3, throwOnChange, false);
        this._Label_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_3, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoApp4.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.openPage(this.parent.parent._Menu_0_4.context, this.context.$implicit) !== false);
        var pd_1 = (this._MenuClose_0_6.context.close() !== false);
        return ((true && pd_0) && pd_1);
    };
    return _View_ApiDemoApp4;
}(import1.AppView));
function viewFactory_ApiDemoApp4(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoApp4(viewUtils, parentInjector, declarationEl);
}
