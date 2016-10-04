var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/button/button';
import * as import15 from 'ionic-angular/components/icon/icon';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import28 from 'ionic-angular/components/nav/nav';
import * as import29 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import30 from 'ionic-angular/navigation/nav-controller-base';
import * as import31 from '@angular/core/src/linker/component_factory_resolver';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from 'ionic-angular/transitions/transition-controller';
import * as import34 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host = null;
var _View_ApiDemoPage_Host0 = (function (_super) {
    __extends(_View_ApiDemoPage_Host0, _super);
    function _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage_Host0, renderType_ApiDemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage();
        this._appEl_0.initComponent(this._ApiDemoPage_0_4, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoPage_Host0;
}(import1.AppView));
function viewFactory_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage_Host === null)) {
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
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
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import19.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Button', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
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
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'h4', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Colors', null);
        this._text_13 = this.renderer.createText(null, '\n\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_14, 'ion-button', '');
        this._appEl_14 = new import2.AppElement(14, 9, this, this._el_14);
        var compView_14 = import27.viewFactory_Button0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Button_14_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_14), this.renderer);
        this._appEl_14.initComponent(this._Button_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, 'Default', null);
        compView_14.create(this._Button_14_4, [[].concat([this._text_15])], null);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_17, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_17, 'ion-button', '');
        this._appEl_17 = new import2.AppElement(17, 9, this, this._el_17);
        var compView_17 = import27.viewFactory_Button0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Button_17_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_17), this.renderer);
        this._appEl_17.initComponent(this._Button_17_4, [], compView_17);
        this._text_18 = this.renderer.createText(null, 'Secondary', null);
        compView_17.create(this._Button_17_4, [[].concat([this._text_18])], null);
        this._text_19 = this.renderer.createText(null, '\n\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_20, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_20, 'ion-button', '');
        this._appEl_20 = new import2.AppElement(20, 9, this, this._el_20);
        var compView_20 = import27.viewFactory_Button0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Button_20_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_20), this.renderer);
        this._appEl_20.initComponent(this._Button_20_4, [], compView_20);
        this._text_21 = this.renderer.createText(null, 'Danger', null);
        compView_20.create(this._Button_20_4, [[].concat([this._text_21])], null);
        this._text_22 = this.renderer.createText(null, '\n\n  ', null);
        this._el_23 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'light');
        this.renderer.setElementAttribute(this._el_23, 'ion-button', '');
        this._appEl_23 = new import2.AppElement(23, 9, this, this._el_23);
        var compView_23 = import27.viewFactory_Button0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Button_23_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_23), this.renderer);
        this._appEl_23.initComponent(this._Button_23_4, [], compView_23);
        this._text_24 = this.renderer.createText(null, 'Light', null);
        compView_23.create(this._Button_23_4, [[].concat([this._text_24])], null);
        this._text_25 = this.renderer.createText(null, '\n\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this._appEl_26 = new import2.AppElement(26, 9, this, this._el_26);
        var compView_26 = import27.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4, [], compView_26);
        this._text_27 = this.renderer.createText(null, 'Dark', null);
        compView_26.create(this._Button_26_4, [[].concat([this._text_27])], null);
        this._text_28 = this.renderer.createText(null, '\n\n  ', null);
        this._el_29 = this.renderer.createElement(null, 'h4', null);
        this._text_30 = this.renderer.createText(this._el_29, 'Shapes', null);
        this._text_31 = this.renderer.createText(null, '\n\n  ', null);
        this._el_32 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_32, 'full', '');
        this.renderer.setElementAttribute(this._el_32, 'ion-button', '');
        this._appEl_32 = new import2.AppElement(32, 9, this, this._el_32);
        var compView_32 = import27.viewFactory_Button0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Button_32_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_32), this.renderer);
        this._appEl_32.initComponent(this._Button_32_4, [], compView_32);
        this._text_33 = this.renderer.createText(null, 'Full Button', null);
        compView_32.create(this._Button_32_4, [[].concat([this._text_33])], null);
        this._text_34 = this.renderer.createText(null, '\n\n  ', null);
        this._el_35 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_35, 'block', '');
        this.renderer.setElementAttribute(this._el_35, 'ion-button', '');
        this._appEl_35 = new import2.AppElement(35, 9, this, this._el_35);
        var compView_35 = import27.viewFactory_Button0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Button_35_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_35), this.renderer);
        this._appEl_35.initComponent(this._Button_35_4, [], compView_35);
        this._text_36 = this.renderer.createText(null, 'Block Button', null);
        compView_35.create(this._Button_35_4, [[].concat([this._text_36])], null);
        this._text_37 = this.renderer.createText(null, '\n\n  ', null);
        this._el_38 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_38, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_38, 'round', '');
        this._appEl_38 = new import2.AppElement(38, 9, this, this._el_38);
        var compView_38 = import27.viewFactory_Button0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Button_38_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_38), this.renderer);
        this._appEl_38.initComponent(this._Button_38_4, [], compView_38);
        this._text_39 = this.renderer.createText(null, 'Round Button', null);
        compView_38.create(this._Button_38_4, [[].concat([this._text_39])], null);
        this._text_40 = this.renderer.createText(null, '\n\n  ', null);
        this._el_41 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_41, 'fab', '');
        this.renderer.setElementAttribute(this._el_41, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_41, 'style', 'position: relative;');
        this._appEl_41 = new import2.AppElement(41, 9, this, this._el_41);
        var compView_41 = import27.viewFactory_Button0(this.viewUtils, this.injector(41), this._appEl_41);
        this._Button_41_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_41), this.renderer);
        this._appEl_41.initComponent(this._Button_41_4, [], compView_41);
        this._text_42 = this.renderer.createText(null, 'FAB', null);
        compView_41.create(this._Button_41_4, [[].concat([this._text_42])], null);
        this._text_43 = this.renderer.createText(null, '\n\n  ', null);
        this._el_44 = this.renderer.createElement(null, 'h4', null);
        this._text_45 = this.renderer.createText(this._el_44, 'Outlines', null);
        this._text_46 = this.renderer.createText(null, '\n\n  ', null);
        this._el_47 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_47, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_47, 'full', '');
        this.renderer.setElementAttribute(this._el_47, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_47, 'outline', '');
        this._appEl_47 = new import2.AppElement(47, 9, this, this._el_47);
        var compView_47 = import27.viewFactory_Button0(this.viewUtils, this.injector(47), this._appEl_47);
        this._Button_47_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_47), this.renderer);
        this._appEl_47.initComponent(this._Button_47_4, [], compView_47);
        this._text_48 = this.renderer.createText(null, 'Outline + Full', null);
        compView_47.create(this._Button_47_4, [[].concat([this._text_48])], null);
        this._text_49 = this.renderer.createText(null, '\n\n  ', null);
        this._el_50 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_50, 'block', '');
        this.renderer.setElementAttribute(this._el_50, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_50, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_50, 'outline', '');
        this._appEl_50 = new import2.AppElement(50, 9, this, this._el_50);
        var compView_50 = import27.viewFactory_Button0(this.viewUtils, this.injector(50), this._appEl_50);
        this._Button_50_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_50), this.renderer);
        this._appEl_50.initComponent(this._Button_50_4, [], compView_50);
        this._text_51 = this.renderer.createText(null, 'Outline + Block', null);
        compView_50.create(this._Button_50_4, [[].concat([this._text_51])], null);
        this._text_52 = this.renderer.createText(null, '\n\n  ', null);
        this._el_53 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_53, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_53, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_53, 'outline', '');
        this.renderer.setElementAttribute(this._el_53, 'round', '');
        this._appEl_53 = new import2.AppElement(53, 9, this, this._el_53);
        var compView_53 = import27.viewFactory_Button0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Button_53_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_53), this.renderer);
        this._appEl_53.initComponent(this._Button_53_4, [], compView_53);
        this._text_54 = this.renderer.createText(null, 'Outline + Round', null);
        compView_53.create(this._Button_53_4, [[].concat([this._text_54])], null);
        this._text_55 = this.renderer.createText(null, '\n\n  ', null);
        this._el_56 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_56, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_56, 'fab', '');
        this.renderer.setElementAttribute(this._el_56, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_56, 'outline', '');
        this.renderer.setElementAttribute(this._el_56, 'style', 'position: relative;');
        this._appEl_56 = new import2.AppElement(56, 9, this, this._el_56);
        var compView_56 = import27.viewFactory_Button0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Button_56_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_56), this.renderer);
        this._appEl_56.initComponent(this._Button_56_4, [], compView_56);
        this._text_57 = this.renderer.createText(null, 'FAB', null);
        compView_56.create(this._Button_56_4, [[].concat([this._text_57])], null);
        this._text_58 = this.renderer.createText(null, '\n\n  ', null);
        this._el_59 = this.renderer.createElement(null, 'h4', null);
        this._text_60 = this.renderer.createText(this._el_59, 'Icons', null);
        this._text_61 = this.renderer.createText(null, '\n\n  ', null);
        this._el_62 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_62, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_62, 'icon-left', '');
        this.renderer.setElementAttribute(this._el_62, 'ion-button', '');
        this._appEl_62 = new import2.AppElement(62, 9, this, this._el_62);
        var compView_62 = import27.viewFactory_Button0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Button_62_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_62), this.renderer);
        this._appEl_62.initComponent(this._Button_62_4, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n    ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_64, 'name', 'star');
        this.renderer.setElementAttribute(this._el_64, 'role', 'img');
        this._Icon_64_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_64), this.renderer);
        this._text_65 = this.renderer.createText(null, '\n    Left Icon\n  ', null);
        compView_62.create(this._Button_62_4, [[].concat([
                this._text_63,
                this._el_64,
                this._text_65
            ])], null);
        this._text_66 = this.renderer.createText(null, '\n\n  ', null);
        this._el_67 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_67, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_67, 'icon-right', '');
        this.renderer.setElementAttribute(this._el_67, 'ion-button', '');
        this._appEl_67 = new import2.AppElement(67, 9, this, this._el_67);
        var compView_67 = import27.viewFactory_Button0(this.viewUtils, this.injector(67), this._appEl_67);
        this._Button_67_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_67), this.renderer);
        this._appEl_67.initComponent(this._Button_67_4, [], compView_67);
        this._text_68 = this.renderer.createText(null, '\n    Right Icon\n    ', null);
        this._el_69 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_69, 'name', 'star');
        this.renderer.setElementAttribute(this._el_69, 'role', 'img');
        this._Icon_69_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_69), this.renderer);
        this._text_70 = this.renderer.createText(null, '\n  ', null);
        compView_67.create(this._Button_67_4, [[].concat([
                this._text_68,
                this._el_69,
                this._text_70
            ])], null);
        this._text_71 = this.renderer.createText(null, '\n\n  ', null);
        this._el_72 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_72, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_72, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_72, 'ion-button', '');
        this._appEl_72 = new import2.AppElement(72, 9, this, this._el_72);
        var compView_72 = import27.viewFactory_Button0(this.viewUtils, this.injector(72), this._appEl_72);
        this._Button_72_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_72), this.renderer);
        this._appEl_72.initComponent(this._Button_72_4, [], compView_72);
        this._text_73 = this.renderer.createText(null, '\n    ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_74, 'name', 'star');
        this.renderer.setElementAttribute(this._el_74, 'role', 'img');
        this._Icon_74_3 = new import15.Icon(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_74), this.renderer);
        this._text_75 = this.renderer.createText(null, '\n  ', null);
        compView_72.create(this._Button_72_4, [[].concat([
                this._text_73,
                this._el_74,
                this._text_75
            ])], null);
        this._text_76 = this.renderer.createText(null, '\n\n  ', null);
        this._el_77 = this.renderer.createElement(null, 'h4', null);
        this._text_78 = this.renderer.createText(this._el_77, 'Sizes', null);
        this._text_79 = this.renderer.createText(null, '\n\n  ', null);
        this._el_80 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_80, 'color', 'light');
        this.renderer.setElementAttribute(this._el_80, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_80, 'large', '');
        this._appEl_80 = new import2.AppElement(80, 9, this, this._el_80);
        var compView_80 = import27.viewFactory_Button0(this.viewUtils, this.injector(80), this._appEl_80);
        this._Button_80_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_80), this.renderer);
        this._appEl_80.initComponent(this._Button_80_4, [], compView_80);
        this._text_81 = this.renderer.createText(null, 'Large', null);
        compView_80.create(this._Button_80_4, [[].concat([this._text_81])], null);
        this._text_82 = this.renderer.createText(null, '\n\n  ', null);
        this._el_83 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_83, 'color', 'light');
        this.renderer.setElementAttribute(this._el_83, 'ion-button', '');
        this._appEl_83 = new import2.AppElement(83, 9, this, this._el_83);
        var compView_83 = import27.viewFactory_Button0(this.viewUtils, this.injector(83), this._appEl_83);
        this._Button_83_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_83), this.renderer);
        this._appEl_83.initComponent(this._Button_83_4, [], compView_83);
        this._text_84 = this.renderer.createText(null, 'Default', null);
        compView_83.create(this._Button_83_4, [[].concat([this._text_84])], null);
        this._text_85 = this.renderer.createText(null, '\n\n  ', null);
        this._el_86 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_86, 'color', 'light');
        this.renderer.setElementAttribute(this._el_86, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_86, 'small', '');
        this._appEl_86 = new import2.AppElement(86, 9, this, this._el_86);
        var compView_86 = import27.viewFactory_Button0(this.viewUtils, this.injector(86), this._appEl_86);
        this._Button_86_4 = new import14.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_86), this.renderer);
        this._appEl_86.initComponent(this._Button_86_4, [], compView_86);
        this._text_87 = this.renderer.createText(null, 'Small', null);
        compView_86.create(this._Button_86_4, [[].concat([this._text_87])], null);
        this._text_88 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
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
                this._text_58,
                this._el_59,
                this._text_61,
                this._el_62,
                this._text_66,
                this._el_67,
                this._text_71,
                this._el_72,
                this._text_76,
                this._el_77,
                this._text_79,
                this._el_80,
                this._text_82,
                this._el_83,
                this._text_85,
                this._el_86,
                this._text_88
            ]),
            []
        ], null);
        this._text_89 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
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
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._el_72,
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
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._text_89
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import14.Button) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Button_14_4;
        }
        if (((token === import14.Button) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_17_4;
        }
        if (((token === import14.Button) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Button_20_4;
        }
        if (((token === import14.Button) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_23_4;
        }
        if (((token === import14.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Button_26_4;
        }
        if (((token === import14.Button) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Button_32_4;
        }
        if (((token === import14.Button) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Button_35_4;
        }
        if (((token === import14.Button) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Button_38_4;
        }
        if (((token === import14.Button) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Button_41_4;
        }
        if (((token === import14.Button) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Button_47_4;
        }
        if (((token === import14.Button) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Button_50_4;
        }
        if (((token === import14.Button) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Button_53_4;
        }
        if (((token === import14.Button) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Button_56_4;
        }
        if (((token === import15.Icon) && (64 === requestNodeIndex))) {
            return this._Icon_64_3;
        }
        if (((token === import14.Button) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Button_62_4;
        }
        if (((token === import15.Icon) && (69 === requestNodeIndex))) {
            return this._Icon_69_3;
        }
        if (((token === import14.Button) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._Button_67_4;
        }
        if (((token === import15.Icon) && (74 === requestNodeIndex))) {
            return this._Icon_74_3;
        }
        if (((token === import14.Button) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Button_72_4;
        }
        if (((token === import14.Button) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 81)))) {
            return this._Button_80_4;
        }
        if (((token === import14.Button) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Button_83_4;
        }
        if (((token === import14.Button) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Button_86_4;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changed = false;
        var currVal_3 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Button_17_4.color = currVal_3;
            changed = true;
            this._expr_3 = currVal_3;
        }
        if (changed) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_4 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Button_20_4.color = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_20.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_5 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Button_23_4.color = currVal_5;
            changed = true;
            this._expr_5 = currVal_5;
        }
        if (changed) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_6 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Button_26_4.color = currVal_6;
            changed = true;
            this._expr_6 = currVal_6;
        }
        if (changed) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_7 = '';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Button_32_4.full = currVal_7;
            changed = true;
            this._expr_7 = currVal_7;
        }
        if (changed) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_8 = '';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Button_35_4.block = currVal_8;
            changed = true;
            this._expr_8 = currVal_8;
        }
        if (changed) {
            this._appEl_35.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_9 = '';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Button_38_4.round = currVal_9;
            changed = true;
            this._expr_9 = currVal_9;
        }
        if (changed) {
            this._appEl_38.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_10 = '';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Button_47_4.outline = currVal_10;
            changed = true;
            this._expr_10 = currVal_10;
        }
        var currVal_11 = '';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Button_47_4.full = currVal_11;
            changed = true;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Button_47_4.color = currVal_12;
            changed = true;
            this._expr_12 = currVal_12;
        }
        if (changed) {
            this._appEl_47.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_13 = '';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Button_50_4.outline = currVal_13;
            changed = true;
            this._expr_13 = currVal_13;
        }
        var currVal_14 = '';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Button_50_4.block = currVal_14;
            changed = true;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Button_50_4.color = currVal_15;
            changed = true;
            this._expr_15 = currVal_15;
        }
        if (changed) {
            this._appEl_50.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_16 = '';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Button_53_4.outline = currVal_16;
            changed = true;
            this._expr_16 = currVal_16;
        }
        var currVal_17 = '';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Button_53_4.round = currVal_17;
            changed = true;
            this._expr_17 = currVal_17;
        }
        var currVal_18 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._Button_53_4.color = currVal_18;
            changed = true;
            this._expr_18 = currVal_18;
        }
        if (changed) {
            this._appEl_53.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_19 = '';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Button_56_4.outline = currVal_19;
            changed = true;
            this._expr_19 = currVal_19;
        }
        var currVal_20 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._Button_56_4.color = currVal_20;
            changed = true;
            this._expr_20 = currVal_20;
        }
        if (changed) {
            this._appEl_56.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_21 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._Button_62_4.color = currVal_21;
            changed = true;
            this._expr_21 = currVal_21;
        }
        if (changed) {
            this._appEl_62.componentView.markAsCheckOnce();
        }
        var currVal_22 = 'star';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._Icon_64_3.name = currVal_22;
            this._expr_22 = currVal_22;
        }
        changed = false;
        var currVal_24 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Button_67_4.color = currVal_24;
            changed = true;
            this._expr_24 = currVal_24;
        }
        if (changed) {
            this._appEl_67.componentView.markAsCheckOnce();
        }
        var currVal_25 = 'star';
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this._Icon_69_3.name = currVal_25;
            this._expr_25 = currVal_25;
        }
        changed = false;
        var currVal_27 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this._Button_72_4.color = currVal_27;
            changed = true;
            this._expr_27 = currVal_27;
        }
        if (changed) {
            this._appEl_72.componentView.markAsCheckOnce();
        }
        var currVal_28 = 'star';
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this._Icon_74_3.name = currVal_28;
            this._expr_28 = currVal_28;
        }
        changed = false;
        var currVal_30 = '';
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._Button_80_4.large = currVal_30;
            changed = true;
            this._expr_30 = currVal_30;
        }
        var currVal_31 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this._Button_80_4.color = currVal_31;
            changed = true;
            this._expr_31 = currVal_31;
        }
        if (changed) {
            this._appEl_80.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_32 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._Button_83_4.color = currVal_32;
            changed = true;
            this._expr_32 = currVal_32;
        }
        if (changed) {
            this._appEl_83.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_33 = '';
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this._Button_86_4.small = currVal_33;
            changed = true;
            this._expr_33 = currVal_33;
        }
        var currVal_34 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._Button_86_4.color = currVal_34;
            changed = true;
            this._expr_34 = currVal_34;
        }
        if (changed) {
            this._appEl_86.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_14_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_17_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_20_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_23_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_32_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_35_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_38_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_41_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_47_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_50_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_53_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_56_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_62_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_67_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_72_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_80_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_83_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_86_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_23 = this._Icon_64_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_64, 'hide', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_26 = this._Icon_69_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_69, 'hide', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_29 = this._Icon_74_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_74, 'hide', currVal_29);
            this._expr_29 = currVal_29;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_64_3.ngOnDestroy();
        this._Icon_69_3.ngOnDestroy();
        this._Icon_74_3.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/button/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
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
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import9.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
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
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import29.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import28.Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import30.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import31.ComponentFactoryResolver), this.parentInjector.get(import32.GestureController), this.parentInjector.get(import33.TransitionController), this.parentInjector.get(import34.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/button/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
