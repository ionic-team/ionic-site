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
import * as import14 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/navigation/nav-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/platform/platform';
import * as import33 from '@angular/forms/src/directives/ng_control';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/avatar/avatar';
import * as import37 from 'ionic-angular/components/label/label';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/components/input/input';
import * as import40 from 'ionic-angular/components/icon/icon';
import * as import41 from 'ionic-angular/components/list/list';
import * as import42 from 'ionic-angular/components/content/content';
import * as import43 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import44 from 'ionic-angular/navigation/nav-controller-base';
import * as import45 from '@angular/core/src/linker/component_factory_resolver';
import * as import46 from 'ionic-angular/transitions/transition-controller';
import * as import47 from 'ionic-angular/navigation/deep-linker';
import * as import48 from 'ionic-angular/components/nav/nav';
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
var styles_ApiDemoPage = ['.label-demo[_ngcontent-%COMP%]   .mobile1[_ngcontent-%COMP%], .label-demo[_ngcontent-%COMP%]   .mobile2[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n  }\n\n  .label-demo[_ngcontent-%COMP%]   .mobile1[_ngcontent-%COMP%] {\n    right: 35px;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Label', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'label-demo');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_13, 'no-lines', '');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import15.Wrapper_ItemContent();
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_15, 'item-left', '');
        this._Avatar_15_3 = new import17.Wrapper_Avatar();
        this._text_16 = this.renderer.createText(this._el_15, '\n        ', null);
        this._el_17 = this.renderer.createElement(this._el_15, 'img', null);
        this.renderer.setElementAttribute(this._el_17, 'src', 'ionic.svg');
        this._text_18 = this.renderer.createText(this._el_15, '\n      ', null);
        this._text_19 = this.renderer.createText(null, '\n      ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_20_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_20), this.renderer, null, null, null, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Ionic', null);
        this._text_22 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_20_3.context]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [].concat([this._el_15]),
            [].concat([this._el_20]),
            [].concat([
                this._text_14,
                this._text_19,
                this._text_22
            ]),
            [],
            []
        ], null);
        this._text_23 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._text_24 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_25 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'item item-block');
        this._appEl_25 = new import3.AppElement(25, 11, this, this._el_25);
        var compView_25 = import15.viewFactory_Item0(this.viewUtils, this.injector(25), this._appEl_25);
        this._Item_25_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_25), this.renderer);
        this._ItemContent_25_5 = new import15.Wrapper_ItemContent();
        this._query_Label_25_0 = new import16.QueryList();
        this._query_Button_25_1 = new import16.QueryList();
        this._query_Icon_25_2 = new import16.QueryList();
        this._appEl_25.initComponent(this._Item_25_4.context, [], compView_25);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        this._el_27 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_27, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_27, 'stacked', '');
        this._Label_27_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_27), this.renderer, null, '', null, null);
        this._text_28 = this.renderer.createText(this._el_27, 'Mobile', null);
        this._text_29 = this.renderer.createText(null, '\n      ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_30, 'type', 'tel');
        this.renderer.setElementAttribute(this._el_30, 'value', '+1 (555) 123-1234');
        this._appEl_30 = new import3.AppElement(30, 25, this, this._el_30);
        var compView_30 = import19.viewFactory_TextInput0(this.viewUtils, this.injector(30), this._appEl_30);
        this._TextInput_30_4 = new import19.Wrapper_TextInput(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_25_4.context, this.parentInjector.get(import24.App), this.parentInjector.get(import32.Platform), new import22.ElementRef(this._el_30), this.renderer, this._Content_9_4.context, this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import33.NgControl, null));
        this._appEl_30.initComponent(this._TextInput_30_4.context, [], compView_30);
        compView_30.create(this._TextInput_30_4.context, [], null);
        this._text_31 = this.renderer.createText(null, '\n      ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'mobile1');
        this.renderer.setElementAttribute(this._el_32, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_32, 'ios', 'ios-chatbubbles-outline');
        this.renderer.setElementAttribute(this._el_32, 'item-right', '');
        this.renderer.setElementAttribute(this._el_32, 'md', 'md-chatbubbles');
        this.renderer.setElementAttribute(this._el_32, 'role', 'img');
        this._Icon_32_3 = new import20.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_32), this.renderer);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_34, 'class', 'mobile2');
        this.renderer.setElementAttribute(this._el_34, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_34, 'ios', 'ios-call-outline');
        this.renderer.setElementAttribute(this._el_34, 'item-right', '');
        this.renderer.setElementAttribute(this._el_34, 'md', 'md-call');
        this.renderer.setElementAttribute(this._el_34, 'role', 'img');
        this._Icon_34_3 = new import20.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_34), this.renderer);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_25_0.reset([this._Label_27_3.context]);
        this._Item_25_4.context.contentLabel = this._query_Label_25_0.first;
        compView_25.create(this._Item_25_4.context, [
            [],
            [].concat([this._el_27]),
            [].concat([
                this._text_26,
                this._text_29,
                this._text_31,
                this._text_33,
                this._text_35
            ]),
            [].concat([this._el_30]),
            [].concat([
                this._el_32,
                this._el_34
            ])
        ], null);
        this._text_36 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'item item-block');
        this._appEl_37 = new import3.AppElement(37, 11, this, this._el_37);
        var compView_37 = import15.viewFactory_Item0(this.viewUtils, this.injector(37), this._appEl_37);
        this._Item_37_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_37), this.renderer);
        this._ItemContent_37_5 = new import15.Wrapper_ItemContent();
        this._query_Label_37_0 = new import16.QueryList();
        this._query_Button_37_1 = new import16.QueryList();
        this._query_Icon_37_2 = new import16.QueryList();
        this._appEl_37.initComponent(this._Item_37_4.context, [], compView_37);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_39, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_39, 'stacked', '');
        this._Label_39_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_39), this.renderer, null, '', null, null);
        this._text_40 = this.renderer.createText(this._el_39, 'Email', null);
        this._text_41 = this.renderer.createText(null, '\n      ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_42, 'type', 'email');
        this.renderer.setElementAttribute(this._el_42, 'value', 'hi@ionic.io');
        this._appEl_42 = new import3.AppElement(42, 37, this, this._el_42);
        var compView_42 = import19.viewFactory_TextInput0(this.viewUtils, this.injector(42), this._appEl_42);
        this._TextInput_42_4 = new import19.Wrapper_TextInput(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_37_4.context, this.parentInjector.get(import24.App), this.parentInjector.get(import32.Platform), new import22.ElementRef(this._el_42), this.renderer, this._Content_9_4.context, this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import33.NgControl, null));
        this._appEl_42.initComponent(this._TextInput_42_4.context, [], compView_42);
        compView_42.create(this._TextInput_42_4.context, [], null);
        this._text_43 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_37_0.reset([this._Label_39_3.context]);
        this._Item_37_4.context.contentLabel = this._query_Label_37_0.first;
        compView_37.create(this._Item_37_4.context, [
            [],
            [].concat([this._el_39]),
            [].concat([
                this._text_38,
                this._text_41,
                this._text_43
            ]),
            [].concat([this._el_42]),
            []
        ], null);
        this._text_44 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_45 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_45, 'class', 'item item-block');
        this._appEl_45 = new import3.AppElement(45, 11, this, this._el_45);
        var compView_45 = import15.viewFactory_Item0(this.viewUtils, this.injector(45), this._appEl_45);
        this._Item_45_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_45), this.renderer);
        this._ItemContent_45_5 = new import15.Wrapper_ItemContent();
        this._query_Label_45_0 = new import16.QueryList();
        this._query_Button_45_1 = new import16.QueryList();
        this._query_Icon_45_2 = new import16.QueryList();
        this._appEl_45.initComponent(this._Item_45_4.context, [], compView_45);
        this._text_46 = this.renderer.createText(null, '\n      ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_47, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_47, 'stacked', '');
        this._Label_47_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_47), this.renderer, null, '', null, null);
        this._text_48 = this.renderer.createText(this._el_47, 'Birthday', null);
        this._text_49 = this.renderer.createText(null, '\n      ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_50, 'type', 'text');
        this.renderer.setElementAttribute(this._el_50, 'value', 'November 21, 2013');
        this._appEl_50 = new import3.AppElement(50, 45, this, this._el_50);
        var compView_50 = import19.viewFactory_TextInput0(this.viewUtils, this.injector(50), this._appEl_50);
        this._TextInput_50_4 = new import19.Wrapper_TextInput(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_45_4.context, this.parentInjector.get(import24.App), this.parentInjector.get(import32.Platform), new import22.ElementRef(this._el_50), this.renderer, this._Content_9_4.context, this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import33.NgControl, null));
        this._appEl_50.initComponent(this._TextInput_50_4.context, [], compView_50);
        compView_50.create(this._TextInput_50_4.context, [], null);
        this._text_51 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_45_0.reset([this._Label_47_3.context]);
        this._Item_45_4.context.contentLabel = this._query_Label_45_0.first;
        compView_45.create(this._Item_45_4.context, [
            [],
            [].concat([this._el_47]),
            [].concat([
                this._text_46,
                this._text_49,
                this._text_51
            ]),
            [].concat([this._el_50]),
            []
        ], null);
        this._text_52 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_53 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'item item-block');
        this._appEl_53 = new import3.AppElement(53, 11, this, this._el_53);
        var compView_53 = import15.viewFactory_Item0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Item_53_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_53), this.renderer);
        this._ItemContent_53_5 = new import15.Wrapper_ItemContent();
        this._query_Label_53_0 = new import16.QueryList();
        this._query_Button_53_1 = new import16.QueryList();
        this._query_Icon_53_2 = new import16.QueryList();
        this._appEl_53.initComponent(this._Item_53_4.context, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n      ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_55, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_55, 'stacked', '');
        this._Label_55_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_55), this.renderer, null, '', null, null);
        this._text_56 = this.renderer.createText(this._el_55, 'Address', null);
        this._text_57 = this.renderer.createText(null, '\n      ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_58, 'value', '121 S Pinckney St\nMadison WI 53703\nUnited States');
        this._appEl_58 = new import3.AppElement(58, 53, this, this._el_58);
        var compView_58 = import19.viewFactory_TextArea0(this.viewUtils, this.injector(58), this._appEl_58);
        this._TextArea_58_4 = new import19.Wrapper_TextArea(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_53_4.context, this.parentInjector.get(import24.App), this.parentInjector.get(import32.Platform), new import22.ElementRef(this._el_58), this.renderer, this._Content_9_4.context, this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import33.NgControl, null));
        this._appEl_58.initComponent(this._TextArea_58_4.context, [], compView_58);
        this._text_59 = this.renderer.createText(null, '\n      ', null);
        compView_58.create(this._TextArea_58_4.context, [], null);
        this._text_60 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_53_0.reset([this._Label_55_3.context]);
        this._Item_53_4.context.contentLabel = this._query_Label_53_0.first;
        compView_53.create(this._Item_53_4.context, [
            [],
            [].concat([this._el_55]),
            [].concat([
                this._text_54,
                this._text_57,
                this._text_60
            ]),
            [].concat([this._el_58]),
            []
        ], null);
        this._text_61 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_62 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_62, 'class', 'item item-block');
        this._appEl_62 = new import3.AppElement(62, 11, this, this._el_62);
        var compView_62 = import15.viewFactory_Item0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Item_62_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_62), this.renderer);
        this._ItemContent_62_5 = new import15.Wrapper_ItemContent();
        this._query_Label_62_0 = new import16.QueryList();
        this._query_Button_62_1 = new import16.QueryList();
        this._query_Icon_62_2 = new import16.QueryList();
        this._appEl_62.initComponent(this._Item_62_4.context, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n      ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_64, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_64, 'stacked', '');
        this._Label_64_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_64), this.renderer, null, '', null, null);
        this._text_65 = this.renderer.createText(this._el_64, 'Notes', null);
        this._text_66 = this.renderer.createText(null, '\n      ', null);
        this._el_67 = this.renderer.createElement(null, 'ion-textarea', null);
        this._appEl_67 = new import3.AppElement(67, 62, this, this._el_67);
        var compView_67 = import19.viewFactory_TextArea0(this.viewUtils, this.injector(67), this._appEl_67);
        this._TextArea_67_4 = new import19.Wrapper_TextArea(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_62_4.context, this.parentInjector.get(import24.App), this.parentInjector.get(import32.Platform), new import22.ElementRef(this._el_67), this.renderer, this._Content_9_4.context, this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import33.NgControl, null));
        this._appEl_67.initComponent(this._TextArea_67_4.context, [], compView_67);
        compView_67.create(this._TextArea_67_4.context, [], null);
        this._text_68 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_62_0.reset([this._Label_64_3.context]);
        this._Item_62_4.context.contentLabel = this._query_Label_62_0.first;
        compView_62.create(this._Item_62_4.context, [
            [],
            [].concat([this._el_64]),
            [].concat([
                this._text_63,
                this._text_66,
                this._text_68
            ]),
            [].concat([this._el_67]),
            []
        ], null);
        this._text_69 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_70, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_70, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_70, 'ion-item', '');
        this._appEl_70 = new import3.AppElement(70, 11, this, this._el_70);
        var compView_70 = import15.viewFactory_Item0(this.viewUtils, this.injector(70), this._appEl_70);
        this._Item_70_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_70), this.renderer);
        this._ItemContent_70_5 = new import15.Wrapper_ItemContent();
        this._query_Label_70_0 = new import16.QueryList();
        this._query_Button_70_1 = new import16.QueryList();
        this._query_Icon_70_2 = new import16.QueryList();
        this._appEl_70.initComponent(this._Item_70_4.context, [], compView_70);
        this._text_71 = this.renderer.createText(null, '\n      ', null);
        this._el_72 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_72, 'color', 'primary');
        this._Label_72_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_72), this.renderer, null, null, null, null);
        this._text_73 = this.renderer.createText(this._el_72, 'Send Message', null);
        this._text_74 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_70_0.reset([this._Label_72_3.context]);
        this._Item_70_4.context.contentLabel = this._query_Label_70_0.first;
        compView_70.create(this._Item_70_4.context, [
            [],
            [].concat([this._el_72]),
            [].concat([
                this._text_71,
                this._text_74
            ]),
            [],
            []
        ], null);
        this._text_75 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_76 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_76, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_76, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_76, 'ion-item', '');
        this._appEl_76 = new import3.AppElement(76, 11, this, this._el_76);
        var compView_76 = import15.viewFactory_Item0(this.viewUtils, this.injector(76), this._appEl_76);
        this._Item_76_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_76), this.renderer);
        this._ItemContent_76_5 = new import15.Wrapper_ItemContent();
        this._query_Label_76_0 = new import16.QueryList();
        this._query_Button_76_1 = new import16.QueryList();
        this._query_Icon_76_2 = new import16.QueryList();
        this._appEl_76.initComponent(this._Item_76_4.context, [], compView_76);
        this._text_77 = this.renderer.createText(null, '\n      ', null);
        this._el_78 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_78, 'color', 'primary');
        this._Label_78_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_78), this.renderer, null, null, null, null);
        this._text_79 = this.renderer.createText(this._el_78, 'Share Contact', null);
        this._text_80 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_76_0.reset([this._Label_78_3.context]);
        this._Item_76_4.context.contentLabel = this._query_Label_76_0.first;
        compView_76.create(this._Item_76_4.context, [
            [],
            [].concat([this._el_78]),
            [].concat([
                this._text_77,
                this._text_80
            ]),
            [],
            []
        ], null);
        this._text_81 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_82 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_82, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_82, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_82, 'ion-item', '');
        this._appEl_82 = new import3.AppElement(82, 11, this, this._el_82);
        var compView_82 = import15.viewFactory_Item0(this.viewUtils, this.injector(82), this._appEl_82);
        this._Item_82_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_82), this.renderer);
        this._ItemContent_82_5 = new import15.Wrapper_ItemContent();
        this._query_Label_82_0 = new import16.QueryList();
        this._query_Button_82_1 = new import16.QueryList();
        this._query_Icon_82_2 = new import16.QueryList();
        this._appEl_82.initComponent(this._Item_82_4.context, [], compView_82);
        this._text_83 = this.renderer.createText(null, '\n      ', null);
        this._el_84 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_84, 'color', 'primary');
        this._Label_84_3 = new import18.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_84), this.renderer, null, null, null, null);
        this._text_85 = this.renderer.createText(this._el_84, 'Add to Favorites', null);
        this._text_86 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_82_0.reset([this._Label_84_3.context]);
        this._Item_82_4.context.contentLabel = this._query_Label_82_0.first;
        compView_82.create(this._Item_82_4.context, [
            [],
            [].concat([this._el_84]),
            [].concat([
                this._text_83,
                this._text_86
            ]),
            [],
            []
        ], null);
        this._text_87 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_88 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_88
            ]),
            []
        ], null);
        this._text_89 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_90 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
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
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._text_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._text_87,
            this._text_88,
            this._text_89,
            this._text_90
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import34.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import35.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import36.Avatar) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Avatar_15_3.context;
        }
        if (((token === import37.Label) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Label_20_3.context;
        }
        if (((token === import38.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Item_13_4.context;
        }
        if (((token === import38.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._ItemContent_13_5.context;
        }
        if (((token === import37.Label) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Label_27_3.context;
        }
        if (((token === import39.TextInput) && (30 === requestNodeIndex))) {
            return this._TextInput_30_4.context;
        }
        if (((token === import40.Icon) && (32 === requestNodeIndex))) {
            return this._Icon_32_3.context;
        }
        if (((token === import40.Icon) && (34 === requestNodeIndex))) {
            return this._Icon_34_3.context;
        }
        if (((token === import38.Item) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_25_4.context;
        }
        if (((token === import38.ItemContent) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_25_5.context;
        }
        if (((token === import37.Label) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Label_39_3.context;
        }
        if (((token === import39.TextInput) && (42 === requestNodeIndex))) {
            return this._TextInput_42_4.context;
        }
        if (((token === import38.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Item_37_4.context;
        }
        if (((token === import38.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._ItemContent_37_5.context;
        }
        if (((token === import37.Label) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Label_47_3.context;
        }
        if (((token === import39.TextInput) && (50 === requestNodeIndex))) {
            return this._TextInput_50_4.context;
        }
        if (((token === import38.Item) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Item_45_4.context;
        }
        if (((token === import38.ItemContent) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._ItemContent_45_5.context;
        }
        if (((token === import37.Label) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Label_55_3.context;
        }
        if (((token === import39.TextArea) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._TextArea_58_4.context;
        }
        if (((token === import38.Item) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._Item_53_4.context;
        }
        if (((token === import38.ItemContent) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._ItemContent_53_5.context;
        }
        if (((token === import37.Label) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Label_64_3.context;
        }
        if (((token === import39.TextArea) && (67 === requestNodeIndex))) {
            return this._TextArea_67_4.context;
        }
        if (((token === import38.Item) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Item_62_4.context;
        }
        if (((token === import38.ItemContent) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ItemContent_62_5.context;
        }
        if (((token === import37.Label) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._Label_72_3.context;
        }
        if (((token === import38.Item) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._Item_70_4.context;
        }
        if (((token === import38.ItemContent) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._ItemContent_70_5.context;
        }
        if (((token === import37.Label) && ((78 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Label_78_3.context;
        }
        if (((token === import38.Item) && ((76 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._Item_76_4.context;
        }
        if (((token === import38.ItemContent) && ((76 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._ItemContent_76_5.context;
        }
        if (((token === import37.Label) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._Label_84_3.context;
        }
        if (((token === import38.Item) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Item_82_4.context;
        }
        if (((token === import38.ItemContent) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._ItemContent_82_5.context;
        }
        if (((token === import41.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._List_11_3.context;
        }
        if (((token === import42.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
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
        this._List_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        if (this._Item_13_4.detectChangesInternal(this, this._el_13, throwOnChange)) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        this._ItemContent_13_5.detectChangesInternal(this, this._el_13, throwOnChange);
        this._Avatar_15_3.detectChangesInternal(this, this._el_15, throwOnChange);
        this._Label_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        if (this._Item_25_4.detectChangesInternal(this, this._el_25, throwOnChange)) {
            this._appEl_25.componentView.markAsCheckOnce();
        }
        this._ItemContent_25_5.detectChangesInternal(this, this._el_25, throwOnChange);
        var currVal_3 = 'primary';
        this._Label_27_3.check_color(currVal_3, throwOnChange, false);
        this._Label_27_3.detectChangesInternal(this, this._el_27, throwOnChange);
        var currVal_4 = '+1 (555) 123-1234';
        this._TextInput_30_4.check_value(currVal_4, throwOnChange, false);
        var currVal_5 = 'tel';
        this._TextInput_30_4.check_type(currVal_5, throwOnChange, false);
        this._TextInput_30_4.detectChangesInternal(this, this._el_30, throwOnChange);
        var currVal_6 = 'primary';
        this._Icon_32_3.check_color(currVal_6, throwOnChange, false);
        var currVal_7 = 'ios-chatbubbles-outline';
        this._Icon_32_3.check_ios(currVal_7, throwOnChange, false);
        var currVal_8 = 'md-chatbubbles';
        this._Icon_32_3.check_md(currVal_8, throwOnChange, false);
        this._Icon_32_3.detectChangesInternal(this, this._el_32, throwOnChange);
        var currVal_10 = 'primary';
        this._Icon_34_3.check_color(currVal_10, throwOnChange, false);
        var currVal_11 = 'ios-call-outline';
        this._Icon_34_3.check_ios(currVal_11, throwOnChange, false);
        var currVal_12 = 'md-call';
        this._Icon_34_3.check_md(currVal_12, throwOnChange, false);
        this._Icon_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        if (this._Item_37_4.detectChangesInternal(this, this._el_37, throwOnChange)) {
            this._appEl_37.componentView.markAsCheckOnce();
        }
        this._ItemContent_37_5.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_14 = 'primary';
        this._Label_39_3.check_color(currVal_14, throwOnChange, false);
        this._Label_39_3.detectChangesInternal(this, this._el_39, throwOnChange);
        var currVal_15 = 'hi@ionic.io';
        this._TextInput_42_4.check_value(currVal_15, throwOnChange, false);
        var currVal_16 = 'email';
        this._TextInput_42_4.check_type(currVal_16, throwOnChange, false);
        this._TextInput_42_4.detectChangesInternal(this, this._el_42, throwOnChange);
        if (this._Item_45_4.detectChangesInternal(this, this._el_45, throwOnChange)) {
            this._appEl_45.componentView.markAsCheckOnce();
        }
        this._ItemContent_45_5.detectChangesInternal(this, this._el_45, throwOnChange);
        var currVal_17 = 'primary';
        this._Label_47_3.check_color(currVal_17, throwOnChange, false);
        this._Label_47_3.detectChangesInternal(this, this._el_47, throwOnChange);
        var currVal_18 = 'November 21, 2013';
        this._TextInput_50_4.check_value(currVal_18, throwOnChange, false);
        var currVal_19 = 'text';
        this._TextInput_50_4.check_type(currVal_19, throwOnChange, false);
        this._TextInput_50_4.detectChangesInternal(this, this._el_50, throwOnChange);
        if (this._Item_53_4.detectChangesInternal(this, this._el_53, throwOnChange)) {
            this._appEl_53.componentView.markAsCheckOnce();
        }
        this._ItemContent_53_5.detectChangesInternal(this, this._el_53, throwOnChange);
        var currVal_20 = 'primary';
        this._Label_55_3.check_color(currVal_20, throwOnChange, false);
        this._Label_55_3.detectChangesInternal(this, this._el_55, throwOnChange);
        var currVal_21 = '121 S Pinckney St\nMadison WI 53703\nUnited States';
        this._TextArea_58_4.check_value(currVal_21, throwOnChange, false);
        this._TextArea_58_4.detectChangesInternal(this, this._el_58, throwOnChange);
        if (this._Item_62_4.detectChangesInternal(this, this._el_62, throwOnChange)) {
            this._appEl_62.componentView.markAsCheckOnce();
        }
        this._ItemContent_62_5.detectChangesInternal(this, this._el_62, throwOnChange);
        var currVal_22 = 'dark';
        this._Label_64_3.check_color(currVal_22, throwOnChange, false);
        this._Label_64_3.detectChangesInternal(this, this._el_64, throwOnChange);
        this._TextArea_67_4.detectChangesInternal(this, this._el_67, throwOnChange);
        if (this._Item_70_4.detectChangesInternal(this, this._el_70, throwOnChange)) {
            this._appEl_70.componentView.markAsCheckOnce();
        }
        this._ItemContent_70_5.detectChangesInternal(this, this._el_70, throwOnChange);
        var currVal_23 = 'primary';
        this._Label_72_3.check_color(currVal_23, throwOnChange, false);
        this._Label_72_3.detectChangesInternal(this, this._el_72, throwOnChange);
        if (this._Item_76_4.detectChangesInternal(this, this._el_76, throwOnChange)) {
            this._appEl_76.componentView.markAsCheckOnce();
        }
        this._ItemContent_76_5.detectChangesInternal(this, this._el_76, throwOnChange);
        var currVal_24 = 'primary';
        this._Label_78_3.check_color(currVal_24, throwOnChange, false);
        this._Label_78_3.detectChangesInternal(this, this._el_78, throwOnChange);
        if (this._Item_82_4.detectChangesInternal(this, this._el_82, throwOnChange)) {
            this._appEl_82.componentView.markAsCheckOnce();
        }
        this._ItemContent_82_5.detectChangesInternal(this, this._el_82, throwOnChange);
        var currVal_25 = 'primary';
        this._Label_84_3.check_color(currVal_25, throwOnChange, false);
        this._Label_84_3.detectChangesInternal(this, this._el_84, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4.context._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4.context._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_25_1.dirty) {
                this._query_Button_25_1.reset([]);
                this._Item_25_4.context._buttons = this._query_Button_25_1;
                this._query_Button_25_1.notifyOnChanges();
            }
            if (this._query_Icon_25_2.dirty) {
                this._query_Icon_25_2.reset([
                    this._Icon_32_3.context,
                    this._Icon_34_3.context
                ]);
                this._Item_25_4.context._icons = this._query_Icon_25_2;
                this._query_Icon_25_2.notifyOnChanges();
            }
            if (this._query_Button_37_1.dirty) {
                this._query_Button_37_1.reset([]);
                this._Item_37_4.context._buttons = this._query_Button_37_1;
                this._query_Button_37_1.notifyOnChanges();
            }
            if (this._query_Icon_37_2.dirty) {
                this._query_Icon_37_2.reset([]);
                this._Item_37_4.context._icons = this._query_Icon_37_2;
                this._query_Icon_37_2.notifyOnChanges();
            }
            if (this._query_Button_45_1.dirty) {
                this._query_Button_45_1.reset([]);
                this._Item_45_4.context._buttons = this._query_Button_45_1;
                this._query_Button_45_1.notifyOnChanges();
            }
            if (this._query_Icon_45_2.dirty) {
                this._query_Icon_45_2.reset([]);
                this._Item_45_4.context._icons = this._query_Icon_45_2;
                this._query_Icon_45_2.notifyOnChanges();
            }
            if (this._query_Button_53_1.dirty) {
                this._query_Button_53_1.reset([]);
                this._Item_53_4.context._buttons = this._query_Button_53_1;
                this._query_Button_53_1.notifyOnChanges();
            }
            if (this._query_Icon_53_2.dirty) {
                this._query_Icon_53_2.reset([]);
                this._Item_53_4.context._icons = this._query_Icon_53_2;
                this._query_Icon_53_2.notifyOnChanges();
            }
            if (this._query_Button_62_1.dirty) {
                this._query_Button_62_1.reset([]);
                this._Item_62_4.context._buttons = this._query_Button_62_1;
                this._query_Button_62_1.notifyOnChanges();
            }
            if (this._query_Icon_62_2.dirty) {
                this._query_Icon_62_2.reset([]);
                this._Item_62_4.context._icons = this._query_Icon_62_2;
                this._query_Icon_62_2.notifyOnChanges();
            }
            if (this._query_Button_70_1.dirty) {
                this._query_Button_70_1.reset([]);
                this._Item_70_4.context._buttons = this._query_Button_70_1;
                this._query_Button_70_1.notifyOnChanges();
            }
            if (this._query_Icon_70_2.dirty) {
                this._query_Icon_70_2.reset([]);
                this._Item_70_4.context._icons = this._query_Icon_70_2;
                this._query_Icon_70_2.notifyOnChanges();
            }
            if (this._query_Button_76_1.dirty) {
                this._query_Button_76_1.reset([]);
                this._Item_76_4.context._buttons = this._query_Button_76_1;
                this._query_Button_76_1.notifyOnChanges();
            }
            if (this._query_Icon_76_2.dirty) {
                this._query_Icon_76_2.reset([]);
                this._Item_76_4.context._icons = this._query_Icon_76_2;
                this._query_Icon_76_2.notifyOnChanges();
            }
            if (this._query_Button_82_1.dirty) {
                this._query_Button_82_1.reset([]);
                this._Item_82_4.context._buttons = this._query_Button_82_1;
                this._query_Button_82_1.notifyOnChanges();
            }
            if (this._query_Icon_82_2.dirty) {
                this._query_Icon_82_2.reset([]);
                this._Item_82_4.context._icons = this._query_Icon_82_2;
                this._query_Icon_82_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            this._TextInput_30_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_25_4.context.ngAfterContentInit();
            }
            this._TextInput_42_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_37_4.context.ngAfterContentInit();
            }
            this._TextInput_50_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_45_4.context.ngAfterContentInit();
            }
            this._TextArea_58_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_53_4.context.ngAfterContentInit();
            }
            this._TextArea_67_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_62_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_70_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_76_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_82_4.context.ngAfterContentInit();
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
        var currVal_9 = this._Icon_32_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_32, 'hide', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._Icon_34_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_34, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._TextInput_30_4.context.ngOnDestroy();
        this._Icon_32_3.context.ngOnDestroy();
        this._Icon_34_3.context.ngOnDestroy();
        this._TextInput_42_4.context.ngOnDestroy();
        this._TextInput_50_4.context.ngOnDestroy();
        this._TextArea_58_4.context.ngOnDestroy();
        this._TextArea_67_4.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_ApiDemoPage, {}));
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
        var compView_0 = import43.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import43.Wrapper_Nav(this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import44.NavControllerBase, null), this.parentInjector.get(import24.App), this.parentInjector.get(import21.Config), this.parentInjector.get(import27.Keyboard), new import22.ElementRef(this._el_0), this.parentInjector.get(import28.NgZone), this.renderer, this.parentInjector.get(import45.ComponentFactoryResolver), this.parentInjector.get(import30.GestureController), this.parentInjector.get(import46.TransitionController), this.parentInjector.get(import47.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import48.Nav) && (0 === requestNodeIndex))) {
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
