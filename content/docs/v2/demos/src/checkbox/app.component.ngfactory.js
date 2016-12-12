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
import * as import17 from '../../node_modules/ionic-angular/components/checkbox/checkbox.ngfactory';
import * as import18 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import19 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
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
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/navbar/navbar';
import * as import34 from 'ionic-angular/components/checkbox/checkbox';
import * as import35 from '@angular/forms/src/directives/control_value_accessor';
import * as import36 from '@angular/forms/src/directives/ng_model';
import * as import37 from '@angular/forms/src/directives/ng_control';
import * as import38 from '@angular/forms/src/directives/ng_control_status';
import * as import39 from 'ionic-angular/components/label/label';
import * as import40 from 'ionic-angular/components/item/item';
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
        this._text_5 = this.renderer.createText(null, 'Checkbox', null);
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
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import15.Wrapper_ItemContent();
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-checkbox', null);
        this._appEl_15 = new import3.AppElement(15, 13, this, this._el_15);
        var compView_15 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Checkbox_15_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_13_4.context, new import22.ElementRef(this._el_15), this.renderer);
        this._NG_VALUE_ACCESSOR_15_5 = [this._Checkbox_15_4.context];
        this._NgModel_15_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_15_5);
        this._NgControl_15_7 = this._NgModel_15_6.context;
        this._NgControlStatus_15_8 = new import19.Wrapper_NgControlStatus(this._NgControl_15_7);
        this._appEl_15.initComponent(this._Checkbox_15_4.context, [], compView_15);
        compView_15.create(this._Checkbox_15_4.context, [], null);
        this._text_16 = this.renderer.createText(null, '\n      ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_17_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_17), this.renderer, null, null, null, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Jon Snow', null);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_17_3.context]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [].concat([this._el_15]),
            [].concat([this._el_17]),
            [].concat([
                this._text_14,
                this._text_16,
                this._text_19
            ]),
            [],
            []
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'item item-block');
        this._appEl_21 = new import3.AppElement(21, 11, this, this._el_21);
        var compView_21 = import15.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_21), this.renderer);
        this._ItemContent_21_5 = new import15.Wrapper_ItemContent();
        this._query_Label_21_0 = new import16.QueryList();
        this._query_Button_21_1 = new import16.QueryList();
        this._query_Icon_21_2 = new import16.QueryList();
        this._appEl_21.initComponent(this._Item_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'vibrant');
        this._appEl_23 = new import3.AppElement(23, 21, this, this._el_23);
        var compView_23 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Checkbox_23_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_21_4.context, new import22.ElementRef(this._el_23), this.renderer);
        this._NG_VALUE_ACCESSOR_23_5 = [this._Checkbox_23_4.context];
        this._NgModel_23_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_23_5);
        this._NgControl_23_7 = this._NgModel_23_6.context;
        this._NgControlStatus_23_8 = new import19.Wrapper_NgControlStatus(this._NgControl_23_7);
        this._appEl_23.initComponent(this._Checkbox_23_4.context, [], compView_23);
        compView_23.create(this._Checkbox_23_4.context, [], null);
        this._text_24 = this.renderer.createText(null, '\n      ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_25_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_25), this.renderer, null, null, null, null);
        this._text_26 = this.renderer.createText(this._el_25, 'Daenerys Targaryen', null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_21_0.reset([this._Label_25_3.context]);
        this._Item_21_4.context.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4.context, [
            [].concat([this._el_23]),
            [].concat([this._el_25]),
            [].concat([
                this._text_22,
                this._text_24,
                this._text_27
            ]),
            [],
            []
        ], null);
        this._text_28 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'item item-block');
        this._appEl_29 = new import3.AppElement(29, 11, this, this._el_29);
        var compView_29 = import15.viewFactory_Item0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Item_29_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_29), this.renderer);
        this._ItemContent_29_5 = new import15.Wrapper_ItemContent();
        this._query_Label_29_0 = new import16.QueryList();
        this._query_Button_29_1 = new import16.QueryList();
        this._query_Icon_29_2 = new import16.QueryList();
        this._appEl_29.initComponent(this._Item_29_4.context, [], compView_29);
        this._text_30 = this.renderer.createText(null, '\n      ', null);
        this._el_31 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_31, 'disabled', 'true');
        this._appEl_31 = new import3.AppElement(31, 29, this, this._el_31);
        var compView_31 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Checkbox_31_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_29_4.context, new import22.ElementRef(this._el_31), this.renderer);
        this._NG_VALUE_ACCESSOR_31_5 = [this._Checkbox_31_4.context];
        this._NgModel_31_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_31_5);
        this._NgControl_31_7 = this._NgModel_31_6.context;
        this._NgControlStatus_31_8 = new import19.Wrapper_NgControlStatus(this._NgControl_31_7);
        this._appEl_31.initComponent(this._Checkbox_31_4.context, [], compView_31);
        compView_31.create(this._Checkbox_31_4.context, [], null);
        this._text_32 = this.renderer.createText(null, '\n      ', null);
        this._el_33 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_33_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_33), this.renderer, null, null, null, null);
        this._text_34 = this.renderer.createText(this._el_33, 'Arya Stark', null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_29_0.reset([this._Label_33_3.context]);
        this._Item_29_4.context.contentLabel = this._query_Label_29_0.first;
        compView_29.create(this._Item_29_4.context, [
            [].concat([this._el_31]),
            [].concat([this._el_33]),
            [].concat([
                this._text_30,
                this._text_32,
                this._text_35
            ]),
            [],
            []
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
        this._el_39 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_39, 'color', 'secondary');
        this._appEl_39 = new import3.AppElement(39, 37, this, this._el_39);
        var compView_39 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(39), this._appEl_39);
        this._Checkbox_39_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_37_4.context, new import22.ElementRef(this._el_39), this.renderer);
        this._NG_VALUE_ACCESSOR_39_5 = [this._Checkbox_39_4.context];
        this._NgModel_39_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_39_5);
        this._NgControl_39_7 = this._NgModel_39_6.context;
        this._NgControlStatus_39_8 = new import19.Wrapper_NgControlStatus(this._NgControl_39_7);
        this._appEl_39.initComponent(this._Checkbox_39_4.context, [], compView_39);
        compView_39.create(this._Checkbox_39_4.context, [], null);
        this._text_40 = this.renderer.createText(null, '\n      ', null);
        this._el_41 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_41_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_41), this.renderer, null, null, null, null);
        this._text_42 = this.renderer.createText(this._el_41, 'Tyrion Lannister', null);
        this._text_43 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_37_0.reset([this._Label_41_3.context]);
        this._Item_37_4.context.contentLabel = this._query_Label_37_0.first;
        compView_37.create(this._Item_37_4.context, [
            [].concat([this._el_39]),
            [].concat([this._el_41]),
            [].concat([
                this._text_38,
                this._text_40,
                this._text_43
            ]),
            [],
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
        this._el_47 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_47, 'color', 'danger');
        this._appEl_47 = new import3.AppElement(47, 45, this, this._el_47);
        var compView_47 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(47), this._appEl_47);
        this._Checkbox_47_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_45_4.context, new import22.ElementRef(this._el_47), this.renderer);
        this._NG_VALUE_ACCESSOR_47_5 = [this._Checkbox_47_4.context];
        this._NgModel_47_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_47_5);
        this._NgControl_47_7 = this._NgModel_47_6.context;
        this._NgControlStatus_47_8 = new import19.Wrapper_NgControlStatus(this._NgControl_47_7);
        this._appEl_47.initComponent(this._Checkbox_47_4.context, [], compView_47);
        compView_47.create(this._Checkbox_47_4.context, [], null);
        this._text_48 = this.renderer.createText(null, '\n      ', null);
        this._el_49 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_49_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_49), this.renderer, null, null, null, null);
        this._text_50 = this.renderer.createText(this._el_49, 'Sansa Stark', null);
        this._text_51 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_45_0.reset([this._Label_49_3.context]);
        this._Item_45_4.context.contentLabel = this._query_Label_45_0.first;
        compView_45.create(this._Item_45_4.context, [
            [].concat([this._el_47]),
            [].concat([this._el_49]),
            [].concat([
                this._text_46,
                this._text_48,
                this._text_51
            ]),
            [],
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
        this._el_55 = this.renderer.createElement(null, 'ion-checkbox', null);
        this._appEl_55 = new import3.AppElement(55, 53, this, this._el_55);
        var compView_55 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(55), this._appEl_55);
        this._Checkbox_55_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_53_4.context, new import22.ElementRef(this._el_55), this.renderer);
        this._NG_VALUE_ACCESSOR_55_5 = [this._Checkbox_55_4.context];
        this._NgModel_55_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_55_5);
        this._NgControl_55_7 = this._NgModel_55_6.context;
        this._NgControlStatus_55_8 = new import19.Wrapper_NgControlStatus(this._NgControl_55_7);
        this._appEl_55.initComponent(this._Checkbox_55_4.context, [], compView_55);
        compView_55.create(this._Checkbox_55_4.context, [], null);
        this._text_56 = this.renderer.createText(null, '\n      ', null);
        this._el_57 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_57_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_57), this.renderer, null, null, null, null);
        this._text_58 = this.renderer.createText(this._el_57, 'Khal Drogo', null);
        this._text_59 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_53_0.reset([this._Label_57_3.context]);
        this._Item_53_4.context.contentLabel = this._query_Label_53_0.first;
        compView_53.create(this._Item_53_4.context, [
            [].concat([this._el_55]),
            [].concat([this._el_57]),
            [].concat([
                this._text_54,
                this._text_56,
                this._text_59
            ]),
            [],
            []
        ], null);
        this._text_60 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_61 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_61, 'class', 'item item-block');
        this._appEl_61 = new import3.AppElement(61, 11, this, this._el_61);
        var compView_61 = import15.viewFactory_Item0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Item_61_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_61), this.renderer);
        this._ItemContent_61_5 = new import15.Wrapper_ItemContent();
        this._query_Label_61_0 = new import16.QueryList();
        this._query_Button_61_1 = new import16.QueryList();
        this._query_Icon_61_2 = new import16.QueryList();
        this._appEl_61.initComponent(this._Item_61_4.context, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n      ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_63, 'color', 'dark');
        this._appEl_63 = new import3.AppElement(63, 61, this, this._el_63);
        var compView_63 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(63), this._appEl_63);
        this._Checkbox_63_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_61_4.context, new import22.ElementRef(this._el_63), this.renderer);
        this._NG_VALUE_ACCESSOR_63_5 = [this._Checkbox_63_4.context];
        this._NgModel_63_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_63_5);
        this._NgControl_63_7 = this._NgModel_63_6.context;
        this._NgControlStatus_63_8 = new import19.Wrapper_NgControlStatus(this._NgControl_63_7);
        this._appEl_63.initComponent(this._Checkbox_63_4.context, [], compView_63);
        compView_63.create(this._Checkbox_63_4.context, [], null);
        this._text_64 = this.renderer.createText(null, '\n      ', null);
        this._el_65 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_65_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_65), this.renderer, null, null, null, null);
        this._text_66 = this.renderer.createText(this._el_65, 'Cersei Lannister', null);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_61_0.reset([this._Label_65_3.context]);
        this._Item_61_4.context.contentLabel = this._query_Label_61_0.first;
        compView_61.create(this._Item_61_4.context, [
            [].concat([this._el_63]),
            [].concat([this._el_65]),
            [].concat([
                this._text_62,
                this._text_64,
                this._text_67
            ]),
            [],
            []
        ], null);
        this._text_68 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_69 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_69, 'class', 'item item-block');
        this._appEl_69 = new import3.AppElement(69, 11, this, this._el_69);
        var compView_69 = import15.viewFactory_Item0(this.viewUtils, this.injector(69), this._appEl_69);
        this._Item_69_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_69), this.renderer);
        this._ItemContent_69_5 = new import15.Wrapper_ItemContent();
        this._query_Label_69_0 = new import16.QueryList();
        this._query_Button_69_1 = new import16.QueryList();
        this._query_Icon_69_2 = new import16.QueryList();
        this._appEl_69.initComponent(this._Item_69_4.context, [], compView_69);
        this._text_70 = this.renderer.createText(null, '\n      ', null);
        this._el_71 = this.renderer.createElement(null, 'ion-checkbox', null);
        this._appEl_71 = new import3.AppElement(71, 69, this, this._el_71);
        var compView_71 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(71), this._appEl_71);
        this._Checkbox_71_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_69_4.context, new import22.ElementRef(this._el_71), this.renderer);
        this._NG_VALUE_ACCESSOR_71_5 = [this._Checkbox_71_4.context];
        this._NgModel_71_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_71_5);
        this._NgControl_71_7 = this._NgModel_71_6.context;
        this._NgControlStatus_71_8 = new import19.Wrapper_NgControlStatus(this._NgControl_71_7);
        this._appEl_71.initComponent(this._Checkbox_71_4.context, [], compView_71);
        compView_71.create(this._Checkbox_71_4.context, [], null);
        this._text_72 = this.renderer.createText(null, '\n      ', null);
        this._el_73 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_73_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_73), this.renderer, null, null, null, null);
        this._text_74 = this.renderer.createText(this._el_73, 'Stannis Baratheon', null);
        this._text_75 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_69_0.reset([this._Label_73_3.context]);
        this._Item_69_4.context.contentLabel = this._query_Label_69_0.first;
        compView_69.create(this._Item_69_4.context, [
            [].concat([this._el_71]),
            [].concat([this._el_73]),
            [].concat([
                this._text_70,
                this._text_72,
                this._text_75
            ]),
            [],
            []
        ], null);
        this._text_76 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_77 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_77, 'class', 'item item-block');
        this._appEl_77 = new import3.AppElement(77, 11, this, this._el_77);
        var compView_77 = import15.viewFactory_Item0(this.viewUtils, this.injector(77), this._appEl_77);
        this._Item_77_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_77), this.renderer);
        this._ItemContent_77_5 = new import15.Wrapper_ItemContent();
        this._query_Label_77_0 = new import16.QueryList();
        this._query_Button_77_1 = new import16.QueryList();
        this._query_Icon_77_2 = new import16.QueryList();
        this._appEl_77.initComponent(this._Item_77_4.context, [], compView_77);
        this._text_78 = this.renderer.createText(null, '\n      ', null);
        this._el_79 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_79, 'disabled', 'true');
        this._appEl_79 = new import3.AppElement(79, 77, this, this._el_79);
        var compView_79 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(79), this._appEl_79);
        this._Checkbox_79_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_77_4.context, new import22.ElementRef(this._el_79), this.renderer);
        this._NG_VALUE_ACCESSOR_79_5 = [this._Checkbox_79_4.context];
        this._NgModel_79_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_79_5);
        this._NgControl_79_7 = this._NgModel_79_6.context;
        this._NgControlStatus_79_8 = new import19.Wrapper_NgControlStatus(this._NgControl_79_7);
        this._appEl_79.initComponent(this._Checkbox_79_4.context, [], compView_79);
        compView_79.create(this._Checkbox_79_4.context, [], null);
        this._text_80 = this.renderer.createText(null, '\n      ', null);
        this._el_81 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_81_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_81), this.renderer, null, null, null, null);
        this._text_82 = this.renderer.createText(this._el_81, 'Petyr Baelish', null);
        this._text_83 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_77_0.reset([this._Label_81_3.context]);
        this._Item_77_4.context.contentLabel = this._query_Label_77_0.first;
        compView_77.create(this._Item_77_4.context, [
            [].concat([this._el_79]),
            [].concat([this._el_81]),
            [].concat([
                this._text_78,
                this._text_80,
                this._text_83
            ]),
            [],
            []
        ], null);
        this._text_84 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_85 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_85, 'class', 'item item-block');
        this._appEl_85 = new import3.AppElement(85, 11, this, this._el_85);
        var compView_85 = import15.viewFactory_Item0(this.viewUtils, this.injector(85), this._appEl_85);
        this._Item_85_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_85), this.renderer);
        this._ItemContent_85_5 = new import15.Wrapper_ItemContent();
        this._query_Label_85_0 = new import16.QueryList();
        this._query_Button_85_1 = new import16.QueryList();
        this._query_Icon_85_2 = new import16.QueryList();
        this._appEl_85.initComponent(this._Item_85_4.context, [], compView_85);
        this._text_86 = this.renderer.createText(null, '\n      ', null);
        this._el_87 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_87, 'color', 'dark');
        this._appEl_87 = new import3.AppElement(87, 85, this, this._el_87);
        var compView_87 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(87), this._appEl_87);
        this._Checkbox_87_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_85_4.context, new import22.ElementRef(this._el_87), this.renderer);
        this._NG_VALUE_ACCESSOR_87_5 = [this._Checkbox_87_4.context];
        this._NgModel_87_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_87_5);
        this._NgControl_87_7 = this._NgModel_87_6.context;
        this._NgControlStatus_87_8 = new import19.Wrapper_NgControlStatus(this._NgControl_87_7);
        this._appEl_87.initComponent(this._Checkbox_87_4.context, [], compView_87);
        compView_87.create(this._Checkbox_87_4.context, [], null);
        this._text_88 = this.renderer.createText(null, '\n      ', null);
        this._el_89 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_89_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_89), this.renderer, null, null, null, null);
        this._text_90 = this.renderer.createText(this._el_89, 'Hodor', null);
        this._text_91 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_85_0.reset([this._Label_89_3.context]);
        this._Item_85_4.context.contentLabel = this._query_Label_85_0.first;
        compView_85.create(this._Item_85_4.context, [
            [].concat([this._el_87]),
            [].concat([this._el_89]),
            [].concat([
                this._text_86,
                this._text_88,
                this._text_91
            ]),
            [],
            []
        ], null);
        this._text_92 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_93 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_93, 'class', 'item item-block');
        this._appEl_93 = new import3.AppElement(93, 11, this, this._el_93);
        var compView_93 = import15.viewFactory_Item0(this.viewUtils, this.injector(93), this._appEl_93);
        this._Item_93_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_93), this.renderer);
        this._ItemContent_93_5 = new import15.Wrapper_ItemContent();
        this._query_Label_93_0 = new import16.QueryList();
        this._query_Button_93_1 = new import16.QueryList();
        this._query_Icon_93_2 = new import16.QueryList();
        this._appEl_93.initComponent(this._Item_93_4.context, [], compView_93);
        this._text_94 = this.renderer.createText(null, '\n      ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_95, 'color', 'secondary');
        this._appEl_95 = new import3.AppElement(95, 93, this, this._el_95);
        var compView_95 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(95), this._appEl_95);
        this._Checkbox_95_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_93_4.context, new import22.ElementRef(this._el_95), this.renderer);
        this._NG_VALUE_ACCESSOR_95_5 = [this._Checkbox_95_4.context];
        this._NgModel_95_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_95_5);
        this._NgControl_95_7 = this._NgModel_95_6.context;
        this._NgControlStatus_95_8 = new import19.Wrapper_NgControlStatus(this._NgControl_95_7);
        this._appEl_95.initComponent(this._Checkbox_95_4.context, [], compView_95);
        compView_95.create(this._Checkbox_95_4.context, [], null);
        this._text_96 = this.renderer.createText(null, '\n      ', null);
        this._el_97 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_97_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_97), this.renderer, null, null, null, null);
        this._text_98 = this.renderer.createText(this._el_97, 'Catelyn Stark', null);
        this._text_99 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_93_0.reset([this._Label_97_3.context]);
        this._Item_93_4.context.contentLabel = this._query_Label_93_0.first;
        compView_93.create(this._Item_93_4.context, [
            [].concat([this._el_95]),
            [].concat([this._el_97]),
            [].concat([
                this._text_94,
                this._text_96,
                this._text_99
            ]),
            [],
            []
        ], null);
        this._text_100 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_101 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_101, 'class', 'item item-block');
        this._appEl_101 = new import3.AppElement(101, 11, this, this._el_101);
        var compView_101 = import15.viewFactory_Item0(this.viewUtils, this.injector(101), this._appEl_101);
        this._Item_101_4 = new import15.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_101), this.renderer);
        this._ItemContent_101_5 = new import15.Wrapper_ItemContent();
        this._query_Label_101_0 = new import16.QueryList();
        this._query_Button_101_1 = new import16.QueryList();
        this._query_Icon_101_2 = new import16.QueryList();
        this._appEl_101.initComponent(this._Item_101_4.context, [], compView_101);
        this._text_102 = this.renderer.createText(null, '\n      ', null);
        this._el_103 = this.renderer.createElement(null, 'ion-checkbox', null);
        this.renderer.setElementAttribute(this._el_103, 'color', 'vibrant');
        this._appEl_103 = new import3.AppElement(103, 101, this, this._el_103);
        var compView_103 = import17.viewFactory_Checkbox0(this.viewUtils, this.injector(103), this._appEl_103);
        this._Checkbox_103_4 = new import17.Wrapper_Checkbox(this.parentInjector.get(import21.Config), this.parentInjector.get(import31.Form), this._Item_101_4.context, new import22.ElementRef(this._el_103), this.renderer);
        this._NG_VALUE_ACCESSOR_103_5 = [this._Checkbox_103_4.context];
        this._NgModel_103_6 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_103_5);
        this._NgControl_103_7 = this._NgModel_103_6.context;
        this._NgControlStatus_103_8 = new import19.Wrapper_NgControlStatus(this._NgControl_103_7);
        this._appEl_103.initComponent(this._Checkbox_103_4.context, [], compView_103);
        compView_103.create(this._Checkbox_103_4.context, [], null);
        this._text_104 = this.renderer.createText(null, '\n      ', null);
        this._el_105 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_105_3 = new import20.Wrapper_Label(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_105), this.renderer, null, null, null, null);
        this._text_106 = this.renderer.createText(this._el_105, 'Bronn', null);
        this._text_107 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_101_0.reset([this._Label_105_3.context]);
        this._Item_101_4.context.contentLabel = this._query_Label_101_0.first;
        compView_101.create(this._Item_101_4.context, [
            [].concat([this._el_103]),
            [].concat([this._el_105]),
            [].concat([
                this._text_102,
                this._text_104,
                this._text_107
            ]),
            [],
            []
        ], null);
        this._text_108 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_109 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_109
            ]),
            []
        ], null);
        this._text_110 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_15, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_1.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_15_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_23, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_23_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_1.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_23_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_23_0.bind(this)));
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_31, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_31_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_31, 'click', this.eventHandler(this._handle_click_31_1.bind(this)));
        this._expr_27 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_31_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_31_0.bind(this)));
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_39, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_39_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_39, 'click', this.eventHandler(this._handle_click_39_1.bind(this)));
        this._expr_39 = import7.UNINITIALIZED;
        var subscription_3 = this._NgModel_39_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_39_0.bind(this)));
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_47, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_47_0.bind(this)));
        var disposable_9 = this.renderer.listen(this._el_47, 'click', this.eventHandler(this._handle_click_47_1.bind(this)));
        this._expr_50 = import7.UNINITIALIZED;
        var subscription_4 = this._NgModel_47_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_47_0.bind(this)));
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_55, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_55_0.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_55, 'click', this.eventHandler(this._handle_click_55_1.bind(this)));
        this._expr_60 = import7.UNINITIALIZED;
        var subscription_5 = this._NgModel_55_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_55_0.bind(this)));
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        this._expr_65 = import7.UNINITIALIZED;
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_63, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_63_0.bind(this)));
        var disposable_13 = this.renderer.listen(this._el_63, 'click', this.eventHandler(this._handle_click_63_1.bind(this)));
        this._expr_71 = import7.UNINITIALIZED;
        var subscription_6 = this._NgModel_63_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_63_0.bind(this)));
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
        var disposable_14 = this.renderer.listen(this._el_71, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_71_0.bind(this)));
        var disposable_15 = this.renderer.listen(this._el_71, 'click', this.eventHandler(this._handle_click_71_1.bind(this)));
        this._expr_81 = import7.UNINITIALIZED;
        var subscription_7 = this._NgModel_71_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_71_0.bind(this)));
        this._expr_83 = import7.UNINITIALIZED;
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        this._expr_88 = import7.UNINITIALIZED;
        var disposable_16 = this.renderer.listen(this._el_79, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_79_0.bind(this)));
        var disposable_17 = this.renderer.listen(this._el_79, 'click', this.eventHandler(this._handle_click_79_1.bind(this)));
        this._expr_92 = import7.UNINITIALIZED;
        var subscription_8 = this._NgModel_79_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_79_0.bind(this)));
        this._expr_95 = import7.UNINITIALIZED;
        this._expr_96 = import7.UNINITIALIZED;
        this._expr_97 = import7.UNINITIALIZED;
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        this._expr_100 = import7.UNINITIALIZED;
        var disposable_18 = this.renderer.listen(this._el_87, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_87_0.bind(this)));
        var disposable_19 = this.renderer.listen(this._el_87, 'click', this.eventHandler(this._handle_click_87_1.bind(this)));
        this._expr_104 = import7.UNINITIALIZED;
        var subscription_9 = this._NgModel_87_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_87_0.bind(this)));
        this._expr_106 = import7.UNINITIALIZED;
        this._expr_107 = import7.UNINITIALIZED;
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        var disposable_20 = this.renderer.listen(this._el_95, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_95_0.bind(this)));
        var disposable_21 = this.renderer.listen(this._el_95, 'click', this.eventHandler(this._handle_click_95_1.bind(this)));
        this._expr_115 = import7.UNINITIALIZED;
        var subscription_10 = this._NgModel_95_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_95_0.bind(this)));
        this._expr_117 = import7.UNINITIALIZED;
        this._expr_118 = import7.UNINITIALIZED;
        this._expr_119 = import7.UNINITIALIZED;
        this._expr_120 = import7.UNINITIALIZED;
        this._expr_121 = import7.UNINITIALIZED;
        this._expr_122 = import7.UNINITIALIZED;
        var disposable_22 = this.renderer.listen(this._el_103, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_103_0.bind(this)));
        var disposable_23 = this.renderer.listen(this._el_103, 'click', this.eventHandler(this._handle_click_103_1.bind(this)));
        this._expr_126 = import7.UNINITIALIZED;
        var subscription_11 = this._NgModel_103_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_103_0.bind(this)));
        this._expr_128 = import7.UNINITIALIZED;
        this._expr_129 = import7.UNINITIALIZED;
        this._expr_130 = import7.UNINITIALIZED;
        this._expr_131 = import7.UNINITIALIZED;
        this._expr_132 = import7.UNINITIALIZED;
        this._expr_133 = import7.UNINITIALIZED;
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
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._text_99,
            this._text_100,
            this._el_101,
            this._text_102,
            this._el_103,
            this._text_104,
            this._el_105,
            this._text_106,
            this._text_107,
            this._text_108,
            this._text_109,
            this._text_110
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10,
            disposable_11,
            disposable_12,
            disposable_13,
            disposable_14,
            disposable_15,
            disposable_16,
            disposable_17,
            disposable_18,
            disposable_19,
            disposable_20,
            disposable_21,
            disposable_22,
            disposable_23
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4,
            subscription_5,
            subscription_6,
            subscription_7,
            subscription_8,
            subscription_9,
            subscription_10,
            subscription_11
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import33.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import34.Checkbox) && (15 === requestNodeIndex))) {
            return this._Checkbox_15_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_15_5;
        }
        if (((token === import36.NgModel) && (15 === requestNodeIndex))) {
            return this._NgModel_15_6.context;
        }
        if (((token === import37.NgControl) && (15 === requestNodeIndex))) {
            return this._NgControl_15_7;
        }
        if (((token === import38.NgControlStatus) && (15 === requestNodeIndex))) {
            return this._NgControlStatus_15_8.context;
        }
        if (((token === import39.Label) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Label_17_3.context;
        }
        if (((token === import40.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_13_4.context;
        }
        if (((token === import40.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_13_5.context;
        }
        if (((token === import34.Checkbox) && (23 === requestNodeIndex))) {
            return this._Checkbox_23_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_5;
        }
        if (((token === import36.NgModel) && (23 === requestNodeIndex))) {
            return this._NgModel_23_6.context;
        }
        if (((token === import37.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_7;
        }
        if (((token === import38.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_8.context;
        }
        if (((token === import39.Label) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Label_25_3.context;
        }
        if (((token === import40.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_21_4.context;
        }
        if (((token === import40.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_21_5.context;
        }
        if (((token === import34.Checkbox) && (31 === requestNodeIndex))) {
            return this._Checkbox_31_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_5;
        }
        if (((token === import36.NgModel) && (31 === requestNodeIndex))) {
            return this._NgModel_31_6.context;
        }
        if (((token === import37.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_7;
        }
        if (((token === import38.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_8.context;
        }
        if (((token === import39.Label) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Label_33_3.context;
        }
        if (((token === import40.Item) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_29_4.context;
        }
        if (((token === import40.ItemContent) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_29_5.context;
        }
        if (((token === import34.Checkbox) && (39 === requestNodeIndex))) {
            return this._Checkbox_39_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (39 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_39_5;
        }
        if (((token === import36.NgModel) && (39 === requestNodeIndex))) {
            return this._NgModel_39_6.context;
        }
        if (((token === import37.NgControl) && (39 === requestNodeIndex))) {
            return this._NgControl_39_7;
        }
        if (((token === import38.NgControlStatus) && (39 === requestNodeIndex))) {
            return this._NgControlStatus_39_8.context;
        }
        if (((token === import39.Label) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Label_41_3.context;
        }
        if (((token === import40.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Item_37_4.context;
        }
        if (((token === import40.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._ItemContent_37_5.context;
        }
        if (((token === import34.Checkbox) && (47 === requestNodeIndex))) {
            return this._Checkbox_47_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (47 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_47_5;
        }
        if (((token === import36.NgModel) && (47 === requestNodeIndex))) {
            return this._NgModel_47_6.context;
        }
        if (((token === import37.NgControl) && (47 === requestNodeIndex))) {
            return this._NgControl_47_7;
        }
        if (((token === import38.NgControlStatus) && (47 === requestNodeIndex))) {
            return this._NgControlStatus_47_8.context;
        }
        if (((token === import39.Label) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._Label_49_3.context;
        }
        if (((token === import40.Item) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Item_45_4.context;
        }
        if (((token === import40.ItemContent) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._ItemContent_45_5.context;
        }
        if (((token === import34.Checkbox) && (55 === requestNodeIndex))) {
            return this._Checkbox_55_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (55 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_55_5;
        }
        if (((token === import36.NgModel) && (55 === requestNodeIndex))) {
            return this._NgModel_55_6.context;
        }
        if (((token === import37.NgControl) && (55 === requestNodeIndex))) {
            return this._NgControl_55_7;
        }
        if (((token === import38.NgControlStatus) && (55 === requestNodeIndex))) {
            return this._NgControlStatus_55_8.context;
        }
        if (((token === import39.Label) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._Label_57_3.context;
        }
        if (((token === import40.Item) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Item_53_4.context;
        }
        if (((token === import40.ItemContent) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._ItemContent_53_5.context;
        }
        if (((token === import34.Checkbox) && (63 === requestNodeIndex))) {
            return this._Checkbox_63_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (63 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_63_5;
        }
        if (((token === import36.NgModel) && (63 === requestNodeIndex))) {
            return this._NgModel_63_6.context;
        }
        if (((token === import37.NgControl) && (63 === requestNodeIndex))) {
            return this._NgControl_63_7;
        }
        if (((token === import38.NgControlStatus) && (63 === requestNodeIndex))) {
            return this._NgControlStatus_63_8.context;
        }
        if (((token === import39.Label) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._Label_65_3.context;
        }
        if (((token === import40.Item) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Item_61_4.context;
        }
        if (((token === import40.ItemContent) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._ItemContent_61_5.context;
        }
        if (((token === import34.Checkbox) && (71 === requestNodeIndex))) {
            return this._Checkbox_71_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (71 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_71_5;
        }
        if (((token === import36.NgModel) && (71 === requestNodeIndex))) {
            return this._NgModel_71_6.context;
        }
        if (((token === import37.NgControl) && (71 === requestNodeIndex))) {
            return this._NgControl_71_7;
        }
        if (((token === import38.NgControlStatus) && (71 === requestNodeIndex))) {
            return this._NgControlStatus_71_8.context;
        }
        if (((token === import39.Label) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._Label_73_3.context;
        }
        if (((token === import40.Item) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Item_69_4.context;
        }
        if (((token === import40.ItemContent) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._ItemContent_69_5.context;
        }
        if (((token === import34.Checkbox) && (79 === requestNodeIndex))) {
            return this._Checkbox_79_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (79 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_79_5;
        }
        if (((token === import36.NgModel) && (79 === requestNodeIndex))) {
            return this._NgModel_79_6.context;
        }
        if (((token === import37.NgControl) && (79 === requestNodeIndex))) {
            return this._NgControl_79_7;
        }
        if (((token === import38.NgControlStatus) && (79 === requestNodeIndex))) {
            return this._NgControlStatus_79_8.context;
        }
        if (((token === import39.Label) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._Label_81_3.context;
        }
        if (((token === import40.Item) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._Item_77_4.context;
        }
        if (((token === import40.ItemContent) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._ItemContent_77_5.context;
        }
        if (((token === import34.Checkbox) && (87 === requestNodeIndex))) {
            return this._Checkbox_87_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (87 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_87_5;
        }
        if (((token === import36.NgModel) && (87 === requestNodeIndex))) {
            return this._NgModel_87_6.context;
        }
        if (((token === import37.NgControl) && (87 === requestNodeIndex))) {
            return this._NgControl_87_7;
        }
        if (((token === import38.NgControlStatus) && (87 === requestNodeIndex))) {
            return this._NgControlStatus_87_8.context;
        }
        if (((token === import39.Label) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._Label_89_3.context;
        }
        if (((token === import40.Item) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Item_85_4.context;
        }
        if (((token === import40.ItemContent) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._ItemContent_85_5.context;
        }
        if (((token === import34.Checkbox) && (95 === requestNodeIndex))) {
            return this._Checkbox_95_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (95 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_95_5;
        }
        if (((token === import36.NgModel) && (95 === requestNodeIndex))) {
            return this._NgModel_95_6.context;
        }
        if (((token === import37.NgControl) && (95 === requestNodeIndex))) {
            return this._NgControl_95_7;
        }
        if (((token === import38.NgControlStatus) && (95 === requestNodeIndex))) {
            return this._NgControlStatus_95_8.context;
        }
        if (((token === import39.Label) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._Label_97_3.context;
        }
        if (((token === import40.Item) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._Item_93_4.context;
        }
        if (((token === import40.ItemContent) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._ItemContent_93_5.context;
        }
        if (((token === import34.Checkbox) && (103 === requestNodeIndex))) {
            return this._Checkbox_103_4.context;
        }
        if (((token === import35.NG_VALUE_ACCESSOR) && (103 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_103_5;
        }
        if (((token === import36.NgModel) && (103 === requestNodeIndex))) {
            return this._NgModel_103_6.context;
        }
        if (((token === import37.NgControl) && (103 === requestNodeIndex))) {
            return this._NgControl_103_7;
        }
        if (((token === import38.NgControlStatus) && (103 === requestNodeIndex))) {
            return this._NgControlStatus_103_8.context;
        }
        if (((token === import39.Label) && ((105 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._Label_105_3.context;
        }
        if (((token === import40.Item) && ((101 <= requestNodeIndex) && (requestNodeIndex <= 107)))) {
            return this._Item_101_4.context;
        }
        if (((token === import40.ItemContent) && ((101 <= requestNodeIndex) && (requestNodeIndex <= 107)))) {
            return this._ItemContent_101_5.context;
        }
        if (((token === import41.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 108)))) {
            return this._List_11_3.context;
        }
        if (((token === import42.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 109)))) {
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
        this._Checkbox_15_4.detectChangesInternal(this, this._el_15, throwOnChange);
        var currVal_6 = this.context.data.jon;
        this._NgModel_15_6.check_model(currVal_6, throwOnChange, false);
        this._NgModel_15_6.detectChangesInternal(this, this._el_15, throwOnChange);
        this._NgControlStatus_15_8.detectChangesInternal(this, this._el_15, throwOnChange);
        this._Label_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        if (this._Item_21_4.detectChangesInternal(this, this._el_21, throwOnChange)) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        this._ItemContent_21_5.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_15 = 'vibrant';
        this._Checkbox_23_4.check_color(currVal_15, throwOnChange, false);
        this._Checkbox_23_4.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_17 = this.context.data.daenerys;
        this._NgModel_23_6.check_model(currVal_17, throwOnChange, false);
        this._NgModel_23_6.detectChangesInternal(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_8.detectChangesInternal(this, this._el_23, throwOnChange);
        this._Label_25_3.detectChangesInternal(this, this._el_25, throwOnChange);
        if (this._Item_29_4.detectChangesInternal(this, this._el_29, throwOnChange)) {
            this._appEl_29.componentView.markAsCheckOnce();
        }
        this._ItemContent_29_5.detectChangesInternal(this, this._el_29, throwOnChange);
        var currVal_26 = 'true';
        this._Checkbox_31_4.check_disabled(currVal_26, throwOnChange, false);
        this._Checkbox_31_4.detectChangesInternal(this, this._el_31, throwOnChange);
        var currVal_28 = 'true';
        this._NgModel_31_6.check_isDisabled(currVal_28, throwOnChange, false);
        var currVal_29 = this.context.data.arya;
        this._NgModel_31_6.check_model(currVal_29, throwOnChange, false);
        this._NgModel_31_6.detectChangesInternal(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_8.detectChangesInternal(this, this._el_31, throwOnChange);
        this._Label_33_3.detectChangesInternal(this, this._el_33, throwOnChange);
        if (this._Item_37_4.detectChangesInternal(this, this._el_37, throwOnChange)) {
            this._appEl_37.componentView.markAsCheckOnce();
        }
        this._ItemContent_37_5.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_38 = 'secondary';
        this._Checkbox_39_4.check_color(currVal_38, throwOnChange, false);
        this._Checkbox_39_4.detectChangesInternal(this, this._el_39, throwOnChange);
        var currVal_40 = this.context.data.tyroin;
        this._NgModel_39_6.check_model(currVal_40, throwOnChange, false);
        this._NgModel_39_6.detectChangesInternal(this, this._el_39, throwOnChange);
        this._NgControlStatus_39_8.detectChangesInternal(this, this._el_39, throwOnChange);
        this._Label_41_3.detectChangesInternal(this, this._el_41, throwOnChange);
        if (this._Item_45_4.detectChangesInternal(this, this._el_45, throwOnChange)) {
            this._appEl_45.componentView.markAsCheckOnce();
        }
        this._ItemContent_45_5.detectChangesInternal(this, this._el_45, throwOnChange);
        var currVal_49 = 'danger';
        this._Checkbox_47_4.check_color(currVal_49, throwOnChange, false);
        this._Checkbox_47_4.detectChangesInternal(this, this._el_47, throwOnChange);
        var currVal_51 = this.context.data.sansa;
        this._NgModel_47_6.check_model(currVal_51, throwOnChange, false);
        this._NgModel_47_6.detectChangesInternal(this, this._el_47, throwOnChange);
        this._NgControlStatus_47_8.detectChangesInternal(this, this._el_47, throwOnChange);
        this._Label_49_3.detectChangesInternal(this, this._el_49, throwOnChange);
        if (this._Item_53_4.detectChangesInternal(this, this._el_53, throwOnChange)) {
            this._appEl_53.componentView.markAsCheckOnce();
        }
        this._ItemContent_53_5.detectChangesInternal(this, this._el_53, throwOnChange);
        this._Checkbox_55_4.detectChangesInternal(this, this._el_55, throwOnChange);
        var currVal_61 = this.context.data.khal;
        this._NgModel_55_6.check_model(currVal_61, throwOnChange, false);
        this._NgModel_55_6.detectChangesInternal(this, this._el_55, throwOnChange);
        this._NgControlStatus_55_8.detectChangesInternal(this, this._el_55, throwOnChange);
        this._Label_57_3.detectChangesInternal(this, this._el_57, throwOnChange);
        if (this._Item_61_4.detectChangesInternal(this, this._el_61, throwOnChange)) {
            this._appEl_61.componentView.markAsCheckOnce();
        }
        this._ItemContent_61_5.detectChangesInternal(this, this._el_61, throwOnChange);
        var currVal_70 = 'dark';
        this._Checkbox_63_4.check_color(currVal_70, throwOnChange, false);
        this._Checkbox_63_4.detectChangesInternal(this, this._el_63, throwOnChange);
        var currVal_72 = this.context.data.cersei;
        this._NgModel_63_6.check_model(currVal_72, throwOnChange, false);
        this._NgModel_63_6.detectChangesInternal(this, this._el_63, throwOnChange);
        this._NgControlStatus_63_8.detectChangesInternal(this, this._el_63, throwOnChange);
        this._Label_65_3.detectChangesInternal(this, this._el_65, throwOnChange);
        if (this._Item_69_4.detectChangesInternal(this, this._el_69, throwOnChange)) {
            this._appEl_69.componentView.markAsCheckOnce();
        }
        this._ItemContent_69_5.detectChangesInternal(this, this._el_69, throwOnChange);
        this._Checkbox_71_4.detectChangesInternal(this, this._el_71, throwOnChange);
        var currVal_82 = this.context.data.stannis;
        this._NgModel_71_6.check_model(currVal_82, throwOnChange, false);
        this._NgModel_71_6.detectChangesInternal(this, this._el_71, throwOnChange);
        this._NgControlStatus_71_8.detectChangesInternal(this, this._el_71, throwOnChange);
        this._Label_73_3.detectChangesInternal(this, this._el_73, throwOnChange);
        if (this._Item_77_4.detectChangesInternal(this, this._el_77, throwOnChange)) {
            this._appEl_77.componentView.markAsCheckOnce();
        }
        this._ItemContent_77_5.detectChangesInternal(this, this._el_77, throwOnChange);
        var currVal_91 = 'true';
        this._Checkbox_79_4.check_disabled(currVal_91, throwOnChange, false);
        this._Checkbox_79_4.detectChangesInternal(this, this._el_79, throwOnChange);
        var currVal_93 = 'true';
        this._NgModel_79_6.check_isDisabled(currVal_93, throwOnChange, false);
        var currVal_94 = this.context.data.petyr;
        this._NgModel_79_6.check_model(currVal_94, throwOnChange, false);
        this._NgModel_79_6.detectChangesInternal(this, this._el_79, throwOnChange);
        this._NgControlStatus_79_8.detectChangesInternal(this, this._el_79, throwOnChange);
        this._Label_81_3.detectChangesInternal(this, this._el_81, throwOnChange);
        if (this._Item_85_4.detectChangesInternal(this, this._el_85, throwOnChange)) {
            this._appEl_85.componentView.markAsCheckOnce();
        }
        this._ItemContent_85_5.detectChangesInternal(this, this._el_85, throwOnChange);
        var currVal_103 = 'dark';
        this._Checkbox_87_4.check_color(currVal_103, throwOnChange, false);
        this._Checkbox_87_4.detectChangesInternal(this, this._el_87, throwOnChange);
        var currVal_105 = this.context.data.hodor;
        this._NgModel_87_6.check_model(currVal_105, throwOnChange, false);
        this._NgModel_87_6.detectChangesInternal(this, this._el_87, throwOnChange);
        this._NgControlStatus_87_8.detectChangesInternal(this, this._el_87, throwOnChange);
        this._Label_89_3.detectChangesInternal(this, this._el_89, throwOnChange);
        if (this._Item_93_4.detectChangesInternal(this, this._el_93, throwOnChange)) {
            this._appEl_93.componentView.markAsCheckOnce();
        }
        this._ItemContent_93_5.detectChangesInternal(this, this._el_93, throwOnChange);
        var currVal_114 = 'secondary';
        this._Checkbox_95_4.check_color(currVal_114, throwOnChange, false);
        this._Checkbox_95_4.detectChangesInternal(this, this._el_95, throwOnChange);
        var currVal_116 = this.context.data.catelyn;
        this._NgModel_95_6.check_model(currVal_116, throwOnChange, false);
        this._NgModel_95_6.detectChangesInternal(this, this._el_95, throwOnChange);
        this._NgControlStatus_95_8.detectChangesInternal(this, this._el_95, throwOnChange);
        this._Label_97_3.detectChangesInternal(this, this._el_97, throwOnChange);
        if (this._Item_101_4.detectChangesInternal(this, this._el_101, throwOnChange)) {
            this._appEl_101.componentView.markAsCheckOnce();
        }
        this._ItemContent_101_5.detectChangesInternal(this, this._el_101, throwOnChange);
        var currVal_125 = 'vibrant';
        this._Checkbox_103_4.check_color(currVal_125, throwOnChange, false);
        this._Checkbox_103_4.detectChangesInternal(this, this._el_103, throwOnChange);
        var currVal_127 = this.context.data.bronn;
        this._NgModel_103_6.check_model(currVal_127, throwOnChange, false);
        this._NgModel_103_6.detectChangesInternal(this, this._el_103, throwOnChange);
        this._NgControlStatus_103_8.detectChangesInternal(this, this._el_103, throwOnChange);
        this._Label_105_3.detectChangesInternal(this, this._el_105, throwOnChange);
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
            if (this._query_Button_21_1.dirty) {
                this._query_Button_21_1.reset([]);
                this._Item_21_4.context._buttons = this._query_Button_21_1;
                this._query_Button_21_1.notifyOnChanges();
            }
            if (this._query_Icon_21_2.dirty) {
                this._query_Icon_21_2.reset([]);
                this._Item_21_4.context._icons = this._query_Icon_21_2;
                this._query_Icon_21_2.notifyOnChanges();
            }
            if (this._query_Button_29_1.dirty) {
                this._query_Button_29_1.reset([]);
                this._Item_29_4.context._buttons = this._query_Button_29_1;
                this._query_Button_29_1.notifyOnChanges();
            }
            if (this._query_Icon_29_2.dirty) {
                this._query_Icon_29_2.reset([]);
                this._Item_29_4.context._icons = this._query_Icon_29_2;
                this._query_Icon_29_2.notifyOnChanges();
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
            if (this._query_Button_61_1.dirty) {
                this._query_Button_61_1.reset([]);
                this._Item_61_4.context._buttons = this._query_Button_61_1;
                this._query_Button_61_1.notifyOnChanges();
            }
            if (this._query_Icon_61_2.dirty) {
                this._query_Icon_61_2.reset([]);
                this._Item_61_4.context._icons = this._query_Icon_61_2;
                this._query_Icon_61_2.notifyOnChanges();
            }
            if (this._query_Button_69_1.dirty) {
                this._query_Button_69_1.reset([]);
                this._Item_69_4.context._buttons = this._query_Button_69_1;
                this._query_Button_69_1.notifyOnChanges();
            }
            if (this._query_Icon_69_2.dirty) {
                this._query_Icon_69_2.reset([]);
                this._Item_69_4.context._icons = this._query_Icon_69_2;
                this._query_Icon_69_2.notifyOnChanges();
            }
            if (this._query_Button_77_1.dirty) {
                this._query_Button_77_1.reset([]);
                this._Item_77_4.context._buttons = this._query_Button_77_1;
                this._query_Button_77_1.notifyOnChanges();
            }
            if (this._query_Icon_77_2.dirty) {
                this._query_Icon_77_2.reset([]);
                this._Item_77_4.context._icons = this._query_Icon_77_2;
                this._query_Icon_77_2.notifyOnChanges();
            }
            if (this._query_Button_85_1.dirty) {
                this._query_Button_85_1.reset([]);
                this._Item_85_4.context._buttons = this._query_Button_85_1;
                this._query_Button_85_1.notifyOnChanges();
            }
            if (this._query_Icon_85_2.dirty) {
                this._query_Icon_85_2.reset([]);
                this._Item_85_4.context._icons = this._query_Icon_85_2;
                this._query_Icon_85_2.notifyOnChanges();
            }
            if (this._query_Button_93_1.dirty) {
                this._query_Button_93_1.reset([]);
                this._Item_93_4.context._buttons = this._query_Button_93_1;
                this._query_Button_93_1.notifyOnChanges();
            }
            if (this._query_Icon_93_2.dirty) {
                this._query_Icon_93_2.reset([]);
                this._Item_93_4.context._icons = this._query_Icon_93_2;
                this._query_Icon_93_2.notifyOnChanges();
            }
            if (this._query_Button_101_1.dirty) {
                this._query_Button_101_1.reset([]);
                this._Item_101_4.context._buttons = this._query_Button_101_1;
                this._query_Button_101_1.notifyOnChanges();
            }
            if (this._query_Icon_101_2.dirty) {
                this._query_Icon_101_2.reset([]);
                this._Item_101_4.context._icons = this._query_Icon_101_2;
                this._query_Icon_101_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_15_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_23_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_31_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_29_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_39_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_37_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_47_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_45_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_55_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_53_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_63_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_61_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_71_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_69_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_79_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_77_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_87_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_85_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_95_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_93_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_103_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_101_4.context.ngAfterContentInit();
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
        var currVal_5 = this._Checkbox_15_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_15, 'checkbox-disabled', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._NgControlStatus_15_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_15, 'ng-untouched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_15_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_15, 'ng-touched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_15_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_15, 'ng-pristine', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_15_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_15, 'ng-dirty', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_15_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_15, 'ng-valid', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_15_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_15, 'ng-invalid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_16 = this._Checkbox_23_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_23, 'checkbox-disabled', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = this._NgControlStatus_23_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_23, 'ng-untouched', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_23_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_23, 'ng-touched', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_23_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_23, 'ng-pristine', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = this._NgControlStatus_23_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_23, 'ng-dirty', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this._NgControlStatus_23_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_23, 'ng-valid', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = this._NgControlStatus_23_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_23, 'ng-invalid', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_27 = this._Checkbox_31_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_31, 'checkbox-disabled', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_30 = this._NgControlStatus_31_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_31, 'ng-untouched', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._NgControlStatus_31_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_31, 'ng-touched', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_31_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_31, 'ng-pristine', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this._NgControlStatus_31_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_31, 'ng-dirty', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this._NgControlStatus_31_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_31, 'ng-valid', currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = this._NgControlStatus_31_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_31, 'ng-invalid', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_39 = this._Checkbox_39_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_39, 'checkbox-disabled', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_41 = this._NgControlStatus_39_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_39, 'ng-untouched', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = this._NgControlStatus_39_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_39, 'ng-touched', currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = this._NgControlStatus_39_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_39, 'ng-pristine', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this._NgControlStatus_39_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_39, 'ng-dirty', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._NgControlStatus_39_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_39, 'ng-valid', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = this._NgControlStatus_39_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementClass(this._el_39, 'ng-invalid', currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_50 = this._Checkbox_47_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementClass(this._el_47, 'checkbox-disabled', currVal_50);
            this._expr_50 = currVal_50;
        }
        var currVal_52 = this._NgControlStatus_47_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementClass(this._el_47, 'ng-untouched', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_53 = this._NgControlStatus_47_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_47, 'ng-touched', currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_54 = this._NgControlStatus_47_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_47, 'ng-pristine', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = this._NgControlStatus_47_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_47, 'ng-dirty', currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_56 = this._NgControlStatus_47_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_47, 'ng-valid', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_57 = this._NgControlStatus_47_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementClass(this._el_47, 'ng-invalid', currVal_57);
            this._expr_57 = currVal_57;
        }
        var currVal_60 = this._Checkbox_55_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setElementClass(this._el_55, 'checkbox-disabled', currVal_60);
            this._expr_60 = currVal_60;
        }
        var currVal_62 = this._NgControlStatus_55_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this.renderer.setElementClass(this._el_55, 'ng-untouched', currVal_62);
            this._expr_62 = currVal_62;
        }
        var currVal_63 = this._NgControlStatus_55_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementClass(this._el_55, 'ng-touched', currVal_63);
            this._expr_63 = currVal_63;
        }
        var currVal_64 = this._NgControlStatus_55_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementClass(this._el_55, 'ng-pristine', currVal_64);
            this._expr_64 = currVal_64;
        }
        var currVal_65 = this._NgControlStatus_55_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this.renderer.setElementClass(this._el_55, 'ng-dirty', currVal_65);
            this._expr_65 = currVal_65;
        }
        var currVal_66 = this._NgControlStatus_55_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this.renderer.setElementClass(this._el_55, 'ng-valid', currVal_66);
            this._expr_66 = currVal_66;
        }
        var currVal_67 = this._NgControlStatus_55_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementClass(this._el_55, 'ng-invalid', currVal_67);
            this._expr_67 = currVal_67;
        }
        var currVal_71 = this._Checkbox_63_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_63, 'checkbox-disabled', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_73 = this._NgControlStatus_63_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_63, 'ng-untouched', currVal_73);
            this._expr_73 = currVal_73;
        }
        var currVal_74 = this._NgControlStatus_63_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setElementClass(this._el_63, 'ng-touched', currVal_74);
            this._expr_74 = currVal_74;
        }
        var currVal_75 = this._NgControlStatus_63_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this.renderer.setElementClass(this._el_63, 'ng-pristine', currVal_75);
            this._expr_75 = currVal_75;
        }
        var currVal_76 = this._NgControlStatus_63_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setElementClass(this._el_63, 'ng-dirty', currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_77 = this._NgControlStatus_63_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_63, 'ng-valid', currVal_77);
            this._expr_77 = currVal_77;
        }
        var currVal_78 = this._NgControlStatus_63_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementClass(this._el_63, 'ng-invalid', currVal_78);
            this._expr_78 = currVal_78;
        }
        var currVal_81 = this._Checkbox_71_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setElementClass(this._el_71, 'checkbox-disabled', currVal_81);
            this._expr_81 = currVal_81;
        }
        var currVal_83 = this._NgControlStatus_71_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementClass(this._el_71, 'ng-untouched', currVal_83);
            this._expr_83 = currVal_83;
        }
        var currVal_84 = this._NgControlStatus_71_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this.renderer.setElementClass(this._el_71, 'ng-touched', currVal_84);
            this._expr_84 = currVal_84;
        }
        var currVal_85 = this._NgControlStatus_71_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementClass(this._el_71, 'ng-pristine', currVal_85);
            this._expr_85 = currVal_85;
        }
        var currVal_86 = this._NgControlStatus_71_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementClass(this._el_71, 'ng-dirty', currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_87 = this._NgControlStatus_71_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setElementClass(this._el_71, 'ng-valid', currVal_87);
            this._expr_87 = currVal_87;
        }
        var currVal_88 = this._NgControlStatus_71_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setElementClass(this._el_71, 'ng-invalid', currVal_88);
            this._expr_88 = currVal_88;
        }
        var currVal_92 = this._Checkbox_79_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setElementClass(this._el_79, 'checkbox-disabled', currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_95 = this._NgControlStatus_79_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setElementClass(this._el_79, 'ng-untouched', currVal_95);
            this._expr_95 = currVal_95;
        }
        var currVal_96 = this._NgControlStatus_79_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_96, currVal_96)) {
            this.renderer.setElementClass(this._el_79, 'ng-touched', currVal_96);
            this._expr_96 = currVal_96;
        }
        var currVal_97 = this._NgControlStatus_79_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this.renderer.setElementClass(this._el_79, 'ng-pristine', currVal_97);
            this._expr_97 = currVal_97;
        }
        var currVal_98 = this._NgControlStatus_79_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementClass(this._el_79, 'ng-dirty', currVal_98);
            this._expr_98 = currVal_98;
        }
        var currVal_99 = this._NgControlStatus_79_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementClass(this._el_79, 'ng-valid', currVal_99);
            this._expr_99 = currVal_99;
        }
        var currVal_100 = this._NgControlStatus_79_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_100, currVal_100)) {
            this.renderer.setElementClass(this._el_79, 'ng-invalid', currVal_100);
            this._expr_100 = currVal_100;
        }
        var currVal_104 = this._Checkbox_87_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementClass(this._el_87, 'checkbox-disabled', currVal_104);
            this._expr_104 = currVal_104;
        }
        var currVal_106 = this._NgControlStatus_87_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementClass(this._el_87, 'ng-untouched', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = this._NgControlStatus_87_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementClass(this._el_87, 'ng-touched', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = this._NgControlStatus_87_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementClass(this._el_87, 'ng-pristine', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = this._NgControlStatus_87_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementClass(this._el_87, 'ng-dirty', currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = this._NgControlStatus_87_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementClass(this._el_87, 'ng-valid', currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = this._NgControlStatus_87_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setElementClass(this._el_87, 'ng-invalid', currVal_111);
            this._expr_111 = currVal_111;
        }
        var currVal_115 = this._Checkbox_95_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_115, currVal_115)) {
            this.renderer.setElementClass(this._el_95, 'checkbox-disabled', currVal_115);
            this._expr_115 = currVal_115;
        }
        var currVal_117 = this._NgControlStatus_95_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_117, currVal_117)) {
            this.renderer.setElementClass(this._el_95, 'ng-untouched', currVal_117);
            this._expr_117 = currVal_117;
        }
        var currVal_118 = this._NgControlStatus_95_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_118, currVal_118)) {
            this.renderer.setElementClass(this._el_95, 'ng-touched', currVal_118);
            this._expr_118 = currVal_118;
        }
        var currVal_119 = this._NgControlStatus_95_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_119, currVal_119)) {
            this.renderer.setElementClass(this._el_95, 'ng-pristine', currVal_119);
            this._expr_119 = currVal_119;
        }
        var currVal_120 = this._NgControlStatus_95_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_120, currVal_120)) {
            this.renderer.setElementClass(this._el_95, 'ng-dirty', currVal_120);
            this._expr_120 = currVal_120;
        }
        var currVal_121 = this._NgControlStatus_95_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_121, currVal_121)) {
            this.renderer.setElementClass(this._el_95, 'ng-valid', currVal_121);
            this._expr_121 = currVal_121;
        }
        var currVal_122 = this._NgControlStatus_95_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_122, currVal_122)) {
            this.renderer.setElementClass(this._el_95, 'ng-invalid', currVal_122);
            this._expr_122 = currVal_122;
        }
        var currVal_126 = this._Checkbox_103_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_126, currVal_126)) {
            this.renderer.setElementClass(this._el_103, 'checkbox-disabled', currVal_126);
            this._expr_126 = currVal_126;
        }
        var currVal_128 = this._NgControlStatus_103_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_128, currVal_128)) {
            this.renderer.setElementClass(this._el_103, 'ng-untouched', currVal_128);
            this._expr_128 = currVal_128;
        }
        var currVal_129 = this._NgControlStatus_103_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_129, currVal_129)) {
            this.renderer.setElementClass(this._el_103, 'ng-touched', currVal_129);
            this._expr_129 = currVal_129;
        }
        var currVal_130 = this._NgControlStatus_103_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this.renderer.setElementClass(this._el_103, 'ng-pristine', currVal_130);
            this._expr_130 = currVal_130;
        }
        var currVal_131 = this._NgControlStatus_103_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_131, currVal_131)) {
            this.renderer.setElementClass(this._el_103, 'ng-dirty', currVal_131);
            this._expr_131 = currVal_131;
        }
        var currVal_132 = this._NgControlStatus_103_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this.renderer.setElementClass(this._el_103, 'ng-valid', currVal_132);
            this._expr_132 = currVal_132;
        }
        var currVal_133 = this._NgControlStatus_103_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_133, currVal_133)) {
            this.renderer.setElementClass(this._el_103, 'ng-invalid', currVal_133);
            this._expr_133 = currVal_133;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Checkbox_15_4.context.ngOnDestroy();
        this._NgModel_15_6.context.ngOnDestroy();
        this._Checkbox_23_4.context.ngOnDestroy();
        this._NgModel_23_6.context.ngOnDestroy();
        this._Checkbox_31_4.context.ngOnDestroy();
        this._NgModel_31_6.context.ngOnDestroy();
        this._Checkbox_39_4.context.ngOnDestroy();
        this._NgModel_39_6.context.ngOnDestroy();
        this._Checkbox_47_4.context.ngOnDestroy();
        this._NgModel_47_6.context.ngOnDestroy();
        this._Checkbox_55_4.context.ngOnDestroy();
        this._NgModel_55_6.context.ngOnDestroy();
        this._Checkbox_63_4.context.ngOnDestroy();
        this._NgModel_63_6.context.ngOnDestroy();
        this._Checkbox_71_4.context.ngOnDestroy();
        this._NgModel_71_6.context.ngOnDestroy();
        this._Checkbox_79_4.context.ngOnDestroy();
        this._NgModel_79_6.context.ngOnDestroy();
        this._Checkbox_87_4.context.ngOnDestroy();
        this._NgModel_87_6.context.ngOnDestroy();
        this._Checkbox_95_4.context.ngOnDestroy();
        this._NgModel_95_6.context.ngOnDestroy();
        this._Checkbox_103_4.context.ngOnDestroy();
        this._NgModel_103_6.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.jon = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_15_1 = function ($event) {
        this._appEl_15.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_15_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.daenerys = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_23_1 = function ($event) {
        this._appEl_23.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_23_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.arya = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_31_1 = function ($event) {
        this._appEl_31.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_31_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_39_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.tyroin = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_39_1 = function ($event) {
        this._appEl_39.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_39_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_47_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.sansa = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_47_1 = function ($event) {
        this._appEl_47.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_47_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_55_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.khal = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_55_1 = function ($event) {
        this._appEl_55.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_55_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_63_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.cersei = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_63_1 = function ($event) {
        this._appEl_63.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_63_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_71_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.stannis = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_71_1 = function ($event) {
        this._appEl_71.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_71_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_79_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.petyr = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_79_1 = function ($event) {
        this._appEl_79.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_79_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_87_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.hodor = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_87_1 = function ($event) {
        this._appEl_87.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_87_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_95_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.catelyn = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_95_1 = function ($event) {
        this._appEl_95.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_95_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_103_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.data.bronn = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_103_1 = function ($event) {
        this._appEl_103.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Checkbox_103_4.context._click($event) !== false);
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
