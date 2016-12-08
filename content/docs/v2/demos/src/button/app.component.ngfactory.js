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
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/navigation/nav-controller';
import * as import21 from 'ionic-angular/components/toolbar/toolbar';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/components/tabs/tabs';
import * as import25 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import26 from 'ionic-angular/components/navbar/navbar';
import * as import27 from 'ionic-angular/components/button/button';
import * as import28 from 'ionic-angular/components/icon/icon';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import31 from 'ionic-angular/navigation/nav-controller-base';
import * as import32 from '@angular/core/src/linker/component_factory_resolver';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/transitions/transition-controller';
import * as import35 from 'ionic-angular/navigation/deep-linker';
import * as import36 from 'ionic-angular/components/nav/nav';
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
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import19.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import20.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import21.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Button', null);
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
        this.renderer.setElementAttribute(this._el_9, 'text-center', '');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import19.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import24.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'h4', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Colors', null);
        this._text_13 = this.renderer.createText(null, '\n\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_14, 'ion-button', '');
        this._appEl_14 = new import3.AppElement(14, 9, this, this._el_14);
        var compView_14 = import14.viewFactory_Button0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Button_14_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_14), this.renderer);
        this._appEl_14.initComponent(this._Button_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, 'Default', null);
        compView_14.create(this._Button_14_4.context, [[].concat([this._text_15])], null);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_17, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_17, 'ion-button', '');
        this._appEl_17 = new import3.AppElement(17, 9, this, this._el_17);
        var compView_17 = import14.viewFactory_Button0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Button_17_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_17), this.renderer);
        this._appEl_17.initComponent(this._Button_17_4.context, [], compView_17);
        this._text_18 = this.renderer.createText(null, 'Secondary', null);
        compView_17.create(this._Button_17_4.context, [[].concat([this._text_18])], null);
        this._text_19 = this.renderer.createText(null, '\n\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_20, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_20, 'ion-button', '');
        this._appEl_20 = new import3.AppElement(20, 9, this, this._el_20);
        var compView_20 = import14.viewFactory_Button0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Button_20_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_20), this.renderer);
        this._appEl_20.initComponent(this._Button_20_4.context, [], compView_20);
        this._text_21 = this.renderer.createText(null, 'Danger', null);
        compView_20.create(this._Button_20_4.context, [[].concat([this._text_21])], null);
        this._text_22 = this.renderer.createText(null, '\n\n  ', null);
        this._el_23 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'light');
        this.renderer.setElementAttribute(this._el_23, 'ion-button', '');
        this._appEl_23 = new import3.AppElement(23, 9, this, this._el_23);
        var compView_23 = import14.viewFactory_Button0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Button_23_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_23), this.renderer);
        this._appEl_23.initComponent(this._Button_23_4.context, [], compView_23);
        this._text_24 = this.renderer.createText(null, 'Light', null);
        compView_23.create(this._Button_23_4.context, [[].concat([this._text_24])], null);
        this._text_25 = this.renderer.createText(null, '\n\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this._appEl_26 = new import3.AppElement(26, 9, this, this._el_26);
        var compView_26 = import14.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, 'Dark', null);
        compView_26.create(this._Button_26_4.context, [[].concat([this._text_27])], null);
        this._text_28 = this.renderer.createText(null, '\n\n  ', null);
        this._el_29 = this.renderer.createElement(null, 'h4', null);
        this._text_30 = this.renderer.createText(this._el_29, 'Shapes', null);
        this._text_31 = this.renderer.createText(null, '\n\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_32, 'full', '');
        this.renderer.setElementAttribute(this._el_32, 'ion-button', '');
        this._appEl_32 = new import3.AppElement(32, 9, this, this._el_32);
        var compView_32 = import14.viewFactory_Button0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Button_32_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_32), this.renderer);
        this._appEl_32.initComponent(this._Button_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, 'Full Button', null);
        compView_32.create(this._Button_32_4.context, [[].concat([this._text_33])], null);
        this._text_34 = this.renderer.createText(null, '\n\n  ', null);
        this._el_35 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_35, 'block', '');
        this.renderer.setElementAttribute(this._el_35, 'ion-button', '');
        this._appEl_35 = new import3.AppElement(35, 9, this, this._el_35);
        var compView_35 = import14.viewFactory_Button0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Button_35_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_35), this.renderer);
        this._appEl_35.initComponent(this._Button_35_4.context, [], compView_35);
        this._text_36 = this.renderer.createText(null, 'Block Button', null);
        compView_35.create(this._Button_35_4.context, [[].concat([this._text_36])], null);
        this._text_37 = this.renderer.createText(null, '\n\n  ', null);
        this._el_38 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_38, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_38, 'round', '');
        this._appEl_38 = new import3.AppElement(38, 9, this, this._el_38);
        var compView_38 = import14.viewFactory_Button0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Button_38_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_38), this.renderer);
        this._appEl_38.initComponent(this._Button_38_4.context, [], compView_38);
        this._text_39 = this.renderer.createText(null, 'Round Button', null);
        compView_38.create(this._Button_38_4.context, [[].concat([this._text_39])], null);
        this._text_40 = this.renderer.createText(null, '\n\n  ', null);
        this._el_41 = this.renderer.createElement(null, 'h4', null);
        this._text_42 = this.renderer.createText(this._el_41, 'Outlines', null);
        this._text_43 = this.renderer.createText(null, '\n\n  ', null);
        this._el_44 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_44, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_44, 'full', '');
        this.renderer.setElementAttribute(this._el_44, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_44, 'outline', '');
        this._appEl_44 = new import3.AppElement(44, 9, this, this._el_44);
        var compView_44 = import14.viewFactory_Button0(this.viewUtils, this.injector(44), this._appEl_44);
        this._Button_44_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_44), this.renderer);
        this._appEl_44.initComponent(this._Button_44_4.context, [], compView_44);
        this._text_45 = this.renderer.createText(null, 'Outline + Full', null);
        compView_44.create(this._Button_44_4.context, [[].concat([this._text_45])], null);
        this._text_46 = this.renderer.createText(null, '\n\n  ', null);
        this._el_47 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_47, 'block', '');
        this.renderer.setElementAttribute(this._el_47, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_47, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_47, 'outline', '');
        this._appEl_47 = new import3.AppElement(47, 9, this, this._el_47);
        var compView_47 = import14.viewFactory_Button0(this.viewUtils, this.injector(47), this._appEl_47);
        this._Button_47_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_47), this.renderer);
        this._appEl_47.initComponent(this._Button_47_4.context, [], compView_47);
        this._text_48 = this.renderer.createText(null, 'Outline + Block', null);
        compView_47.create(this._Button_47_4.context, [[].concat([this._text_48])], null);
        this._text_49 = this.renderer.createText(null, '\n\n  ', null);
        this._el_50 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_50, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_50, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_50, 'outline', '');
        this.renderer.setElementAttribute(this._el_50, 'round', '');
        this._appEl_50 = new import3.AppElement(50, 9, this, this._el_50);
        var compView_50 = import14.viewFactory_Button0(this.viewUtils, this.injector(50), this._appEl_50);
        this._Button_50_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_50), this.renderer);
        this._appEl_50.initComponent(this._Button_50_4.context, [], compView_50);
        this._text_51 = this.renderer.createText(null, 'Outline + Round', null);
        compView_50.create(this._Button_50_4.context, [[].concat([this._text_51])], null);
        this._text_52 = this.renderer.createText(null, '\n\n  ', null);
        this._el_53 = this.renderer.createElement(null, 'h4', null);
        this._text_54 = this.renderer.createText(this._el_53, 'Icons', null);
        this._text_55 = this.renderer.createText(null, '\n\n  ', null);
        this._el_56 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_56, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_56, 'icon-left', '');
        this.renderer.setElementAttribute(this._el_56, 'ion-button', '');
        this._appEl_56 = new import3.AppElement(56, 9, this, this._el_56);
        var compView_56 = import14.viewFactory_Button0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Button_56_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_56), this.renderer);
        this._appEl_56.initComponent(this._Button_56_4.context, [], compView_56);
        this._text_57 = this.renderer.createText(null, '\n    ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_58, 'name', 'star');
        this.renderer.setElementAttribute(this._el_58, 'role', 'img');
        this._Icon_58_3 = new import15.Wrapper_Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_58), this.renderer);
        this._text_59 = this.renderer.createText(null, '\n    Left Icon\n  ', null);
        compView_56.create(this._Button_56_4.context, [[].concat([
                this._text_57,
                this._el_58,
                this._text_59
            ])], null);
        this._text_60 = this.renderer.createText(null, '\n\n  ', null);
        this._el_61 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_61, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_61, 'icon-right', '');
        this.renderer.setElementAttribute(this._el_61, 'ion-button', '');
        this._appEl_61 = new import3.AppElement(61, 9, this, this._el_61);
        var compView_61 = import14.viewFactory_Button0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Button_61_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_61), this.renderer);
        this._appEl_61.initComponent(this._Button_61_4.context, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n    Right Icon\n    ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_63, 'name', 'star');
        this.renderer.setElementAttribute(this._el_63, 'role', 'img');
        this._Icon_63_3 = new import15.Wrapper_Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_63), this.renderer);
        this._text_64 = this.renderer.createText(null, '\n  ', null);
        compView_61.create(this._Button_61_4.context, [[].concat([
                this._text_62,
                this._el_63,
                this._text_64
            ])], null);
        this._text_65 = this.renderer.createText(null, '\n\n  ', null);
        this._el_66 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_66, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_66, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_66, 'ion-button', '');
        this._appEl_66 = new import3.AppElement(66, 9, this, this._el_66);
        var compView_66 = import14.viewFactory_Button0(this.viewUtils, this.injector(66), this._appEl_66);
        this._Button_66_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_66), this.renderer);
        this._appEl_66.initComponent(this._Button_66_4.context, [], compView_66);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._el_68 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_68, 'name', 'star');
        this.renderer.setElementAttribute(this._el_68, 'role', 'img');
        this._Icon_68_3 = new import15.Wrapper_Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_68), this.renderer);
        this._text_69 = this.renderer.createText(null, '\n  ', null);
        compView_66.create(this._Button_66_4.context, [[].concat([
                this._text_67,
                this._el_68,
                this._text_69
            ])], null);
        this._text_70 = this.renderer.createText(null, '\n\n  ', null);
        this._el_71 = this.renderer.createElement(null, 'h4', null);
        this._text_72 = this.renderer.createText(this._el_71, 'Sizes', null);
        this._text_73 = this.renderer.createText(null, '\n\n  ', null);
        this._el_74 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_74, 'color', 'light');
        this.renderer.setElementAttribute(this._el_74, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_74, 'large', '');
        this._appEl_74 = new import3.AppElement(74, 9, this, this._el_74);
        var compView_74 = import14.viewFactory_Button0(this.viewUtils, this.injector(74), this._appEl_74);
        this._Button_74_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_74), this.renderer);
        this._appEl_74.initComponent(this._Button_74_4.context, [], compView_74);
        this._text_75 = this.renderer.createText(null, 'Large', null);
        compView_74.create(this._Button_74_4.context, [[].concat([this._text_75])], null);
        this._text_76 = this.renderer.createText(null, '\n\n  ', null);
        this._el_77 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_77, 'color', 'light');
        this.renderer.setElementAttribute(this._el_77, 'ion-button', '');
        this._appEl_77 = new import3.AppElement(77, 9, this, this._el_77);
        var compView_77 = import14.viewFactory_Button0(this.viewUtils, this.injector(77), this._appEl_77);
        this._Button_77_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_77), this.renderer);
        this._appEl_77.initComponent(this._Button_77_4.context, [], compView_77);
        this._text_78 = this.renderer.createText(null, 'Default', null);
        compView_77.create(this._Button_77_4.context, [[].concat([this._text_78])], null);
        this._text_79 = this.renderer.createText(null, '\n\n  ', null);
        this._el_80 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_80, 'color', 'light');
        this.renderer.setElementAttribute(this._el_80, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_80, 'small', '');
        this._appEl_80 = new import3.AppElement(80, 9, this, this._el_80);
        var compView_80 = import14.viewFactory_Button0(this.viewUtils, this.injector(80), this._appEl_80);
        this._Button_80_4 = new import14.Wrapper_Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_80), this.renderer);
        this._appEl_80.initComponent(this._Button_80_4.context, [], compView_80);
        this._text_81 = this.renderer.createText(null, 'Small', null);
        compView_80.create(this._Button_80_4.context, [[].concat([this._text_81])], null);
        this._text_82 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._el_14,
                this._text_16,
                this._el_17,
                this._text_19,
                this._el_20,
                this._text_22,
                this._el_23,
                this._text_25,
                this._el_26,
                this._text_28,
                this._el_29,
                this._text_31,
                this._el_32,
                this._text_34,
                this._el_35,
                this._text_37,
                this._el_38,
                this._text_40,
                this._el_41,
                this._text_43,
                this._el_44,
                this._text_46,
                this._el_47,
                this._text_49,
                this._el_50,
                this._text_52,
                this._el_53,
                this._text_55,
                this._el_56,
                this._text_60,
                this._el_61,
                this._text_65,
                this._el_66,
                this._text_70,
                this._el_71,
                this._text_73,
                this._el_74,
                this._text_76,
                this._el_77,
                this._text_79,
                this._el_80,
                this._text_82
            ]),
            []
        ], null);
        this._text_83 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
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
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._text_83
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import26.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import21.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import27.Button) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Button_14_4.context;
        }
        if (((token === import27.Button) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_17_4.context;
        }
        if (((token === import27.Button) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Button_20_4.context;
        }
        if (((token === import27.Button) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_23_4.context;
        }
        if (((token === import27.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Button_26_4.context;
        }
        if (((token === import27.Button) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Button_32_4.context;
        }
        if (((token === import27.Button) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Button_35_4.context;
        }
        if (((token === import27.Button) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Button_38_4.context;
        }
        if (((token === import27.Button) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Button_44_4.context;
        }
        if (((token === import27.Button) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Button_47_4.context;
        }
        if (((token === import27.Button) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Button_50_4.context;
        }
        if (((token === import28.Icon) && (58 === requestNodeIndex))) {
            return this._Icon_58_3.context;
        }
        if (((token === import27.Button) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Button_56_4.context;
        }
        if (((token === import28.Icon) && (63 === requestNodeIndex))) {
            return this._Icon_63_3.context;
        }
        if (((token === import27.Button) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Button_61_4.context;
        }
        if (((token === import28.Icon) && (68 === requestNodeIndex))) {
            return this._Icon_68_3.context;
        }
        if (((token === import27.Button) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Button_66_4.context;
        }
        if (((token === import27.Button) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Button_74_4.context;
        }
        if (((token === import27.Button) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Button_77_4.context;
        }
        if (((token === import27.Button) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 81)))) {
            return this._Button_80_4.context;
        }
        if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
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
        if (this._Button_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        var currVal_3 = 'secondary';
        this._Button_17_4.check_color(currVal_3, throwOnChange, false);
        if (this._Button_17_4.detectChangesInternal(this, this._el_17, throwOnChange)) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        var currVal_4 = 'danger';
        this._Button_20_4.check_color(currVal_4, throwOnChange, false);
        if (this._Button_20_4.detectChangesInternal(this, this._el_20, throwOnChange)) {
            this._appEl_20.componentView.markAsCheckOnce();
        }
        var currVal_5 = 'light';
        this._Button_23_4.check_color(currVal_5, throwOnChange, false);
        if (this._Button_23_4.detectChangesInternal(this, this._el_23, throwOnChange)) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        var currVal_6 = 'dark';
        this._Button_26_4.check_color(currVal_6, throwOnChange, false);
        if (this._Button_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        var currVal_7 = '';
        this._Button_32_4.check_full(currVal_7, throwOnChange, false);
        if (this._Button_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        var currVal_8 = '';
        this._Button_35_4.check_block(currVal_8, throwOnChange, false);
        if (this._Button_35_4.detectChangesInternal(this, this._el_35, throwOnChange)) {
            this._appEl_35.componentView.markAsCheckOnce();
        }
        var currVal_9 = '';
        this._Button_38_4.check_round(currVal_9, throwOnChange, false);
        if (this._Button_38_4.detectChangesInternal(this, this._el_38, throwOnChange)) {
            this._appEl_38.componentView.markAsCheckOnce();
        }
        var currVal_10 = '';
        this._Button_44_4.check_outline(currVal_10, throwOnChange, false);
        var currVal_11 = '';
        this._Button_44_4.check_full(currVal_11, throwOnChange, false);
        var currVal_12 = 'secondary';
        this._Button_44_4.check_color(currVal_12, throwOnChange, false);
        if (this._Button_44_4.detectChangesInternal(this, this._el_44, throwOnChange)) {
            this._appEl_44.componentView.markAsCheckOnce();
        }
        var currVal_13 = '';
        this._Button_47_4.check_outline(currVal_13, throwOnChange, false);
        var currVal_14 = '';
        this._Button_47_4.check_block(currVal_14, throwOnChange, false);
        var currVal_15 = 'secondary';
        this._Button_47_4.check_color(currVal_15, throwOnChange, false);
        if (this._Button_47_4.detectChangesInternal(this, this._el_47, throwOnChange)) {
            this._appEl_47.componentView.markAsCheckOnce();
        }
        var currVal_16 = '';
        this._Button_50_4.check_outline(currVal_16, throwOnChange, false);
        var currVal_17 = '';
        this._Button_50_4.check_round(currVal_17, throwOnChange, false);
        var currVal_18 = 'secondary';
        this._Button_50_4.check_color(currVal_18, throwOnChange, false);
        if (this._Button_50_4.detectChangesInternal(this, this._el_50, throwOnChange)) {
            this._appEl_50.componentView.markAsCheckOnce();
        }
        var currVal_19 = 'dark';
        this._Button_56_4.check_color(currVal_19, throwOnChange, false);
        if (this._Button_56_4.detectChangesInternal(this, this._el_56, throwOnChange)) {
            this._appEl_56.componentView.markAsCheckOnce();
        }
        var currVal_20 = 'star';
        this._Icon_58_3.check_name(currVal_20, throwOnChange, false);
        this._Icon_58_3.detectChangesInternal(this, this._el_58, throwOnChange);
        var currVal_22 = 'dark';
        this._Button_61_4.check_color(currVal_22, throwOnChange, false);
        if (this._Button_61_4.detectChangesInternal(this, this._el_61, throwOnChange)) {
            this._appEl_61.componentView.markAsCheckOnce();
        }
        var currVal_23 = 'star';
        this._Icon_63_3.check_name(currVal_23, throwOnChange, false);
        this._Icon_63_3.detectChangesInternal(this, this._el_63, throwOnChange);
        var currVal_25 = 'dark';
        this._Button_66_4.check_color(currVal_25, throwOnChange, false);
        if (this._Button_66_4.detectChangesInternal(this, this._el_66, throwOnChange)) {
            this._appEl_66.componentView.markAsCheckOnce();
        }
        var currVal_26 = 'star';
        this._Icon_68_3.check_name(currVal_26, throwOnChange, false);
        this._Icon_68_3.detectChangesInternal(this, this._el_68, throwOnChange);
        var currVal_28 = '';
        this._Button_74_4.check_large(currVal_28, throwOnChange, false);
        var currVal_29 = 'light';
        this._Button_74_4.check_color(currVal_29, throwOnChange, false);
        if (this._Button_74_4.detectChangesInternal(this, this._el_74, throwOnChange)) {
            this._appEl_74.componentView.markAsCheckOnce();
        }
        var currVal_30 = 'light';
        this._Button_77_4.check_color(currVal_30, throwOnChange, false);
        if (this._Button_77_4.detectChangesInternal(this, this._el_77, throwOnChange)) {
            this._appEl_77.componentView.markAsCheckOnce();
        }
        var currVal_31 = '';
        this._Button_80_4.check_small(currVal_31, throwOnChange, false);
        var currVal_32 = 'light';
        this._Button_80_4.check_color(currVal_32, throwOnChange, false);
        if (this._Button_80_4.detectChangesInternal(this, this._el_80, throwOnChange)) {
            this._appEl_80.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_14_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_17_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_20_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_23_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_35_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_38_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_44_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_47_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_50_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_56_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_61_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_66_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_74_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_77_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_80_4.context.ngAfterContentInit();
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
        var currVal_2 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_21 = this._Icon_58_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_58, 'hide', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_24 = this._Icon_63_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_63, 'hide', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_27 = this._Icon_68_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_68, 'hide', currVal_27);
            this._expr_27 = currVal_27;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_58_3.context.ngOnDestroy();
        this._Icon_63_3.context.ngOnDestroy();
        this._Icon_68_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
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
        var compView_0 = import30.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import30.Wrapper_Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import31.NavControllerBase, null), this.parentInjector.get(import19.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import22.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import23.NgZone), this.renderer, this.parentInjector.get(import32.ComponentFactoryResolver), this.parentInjector.get(import33.GestureController), this.parentInjector.get(import34.TransitionController), this.parentInjector.get(import35.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.Nav) && (0 === requestNodeIndex))) {
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
