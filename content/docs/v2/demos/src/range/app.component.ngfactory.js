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
import * as import16 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/badge/badge.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/range/range.ngfactory';
import * as import20 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/navigation/nav-controller';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from 'ionic-angular/util/haptic';
import * as import36 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import37 from 'ionic-angular/components/navbar/navbar';
import * as import38 from 'ionic-angular/components/badge/badge';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/list/list-header';
import * as import41 from 'ionic-angular/components/icon/icon';
import * as import42 from 'ionic-angular/components/range/range';
import * as import43 from '@angular/forms/src/directives/control_value_accessor';
import * as import44 from '@angular/forms/src/directives/ng_model';
import * as import45 from '@angular/forms/src/directives/ng_control';
import * as import46 from '@angular/forms/src/directives/ng_control_status';
import * as import47 from 'ionic-angular/components/list/list';
import * as import48 from 'ionic-angular/components/label/label';
import * as import49 from 'ionic-angular/components/content/content';
import * as import50 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import51 from 'ionic-angular/navigation/nav-controller-base';
import * as import52 from '@angular/core/src/linker/component_factory_resolver';
import * as import53 from 'ionic-angular/transitions/transition-controller';
import * as import54 from 'ionic-angular/navigation/deep-linker';
import * as import55 from 'ionic-angular/components/nav/nav';
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
var styles_ApiDemoPage = ['ion-list[_ngcontent-%COMP%]    + ion-list[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import28.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Range', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'outer-content');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import17.QueryList();
        this._query_Button_13_1 = new import17.QueryList();
        this._query_Icon_13_2 = new import17.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Brightness\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_15, 'item-right', '');
        this._Badge_15_3 = new import18.Wrapper_Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_15), this.renderer);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [],
            [],
            [].concat([
                this._text_14,
                this._text_17
            ]),
            [],
            [].concat([this._el_15])
        ], null);
        this._text_18 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'item item-block');
        this._appEl_19 = new import3.AppElement(19, 11, this, this._el_19);
        var compView_19 = import15.viewFactory_Item0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Item_19_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_19), this.renderer);
        this._ItemContent_19_5 = new import15.Wrapper_ItemContent();
        this._query_Label_19_0 = new import17.QueryList();
        this._query_Button_19_1 = new import17.QueryList();
        this._query_Icon_19_2 = new import17.QueryList();
        this._appEl_19.initComponent(this._Item_19_4.context, [], compView_19);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-range', null);
        this._appEl_21 = new import3.AppElement(21, 19, this, this._el_21);
        var compView_21 = import19.viewFactory_Range0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Range_21_4 = new import19.Wrapper_Range(this.parentInjector.get(import34.Form), this.parentInjector.get(import35.Haptic), this._Item_19_4.context, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_21), this.renderer);
        this._NG_VALUE_ACCESSOR_21_5 = [this._Range_21_4.context];
        this._NgModel_21_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_21_5);
        this._NgControl_21_7 = this._NgModel_21_6.context;
        this._NgControlStatus_21_8 = new import21.Wrapper_NgControlStatus(this._NgControl_21_7);
        this._appEl_21.initComponent(this._Range_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'name', 'sunny');
        this.renderer.setElementAttribute(this._el_23, 'range-left', '');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this.renderer.setElementAttribute(this._el_23, 'small', '');
        this._Icon_23_3 = new import22.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_25, 'name', 'sunny');
        this.renderer.setElementAttribute(this._el_25, 'range-right', '');
        this.renderer.setElementAttribute(this._el_25, 'role', 'img');
        this._Icon_25_3 = new import22.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_25), this.renderer);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Range_21_4.context, [
            [].concat([this._el_23]),
            [].concat([this._el_25])
        ], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_19_0.reset([]);
        this._Item_19_4.context.contentLabel = this._query_Label_19_0.first;
        compView_19.create(this._Item_19_4.context, [
            [],
            [],
            [].concat([
                this._text_20,
                this._text_27
            ]),
            [].concat([this._el_21]),
            []
        ], null);
        this._text_28 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_29 = this.renderer.createText(null, '\n\n  ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-list', null);
        this._List_30_3 = new import14.Wrapper_List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_30), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_31 = this.renderer.createText(this._el_30, '\n    ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item');
        this._appEl_32 = new import3.AppElement(32, 30, this, this._el_32);
        var compView_32 = import15.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_32), this.renderer);
        this._ListHeader_32_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_32), null);
        this._query_Label_32_0 = new import17.QueryList();
        this._query_Button_32_1 = new import17.QueryList();
        this._query_Icon_32_2 = new import17.QueryList();
        this._appEl_32.initComponent(this._Item_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      Saturation\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_34, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_34, 'item-right', '');
        this._Badge_34_3 = new import18.Wrapper_Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_34), this.renderer);
        this._text_35 = this.renderer.createText(this._el_34, '', null);
        this._text_36 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_32_0.reset([]);
        this._Item_32_4.context.contentLabel = this._query_Label_32_0.first;
        compView_32.create(this._Item_32_4.context, [
            [],
            [],
            [].concat([
                this._text_33,
                this._text_36
            ]),
            [],
            [].concat([this._el_34])
        ], null);
        this._text_37 = this.renderer.createText(this._el_30, '\n    ', null);
        this._el_38 = this.renderer.createElement(this._el_30, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'item item-block');
        this._appEl_38 = new import3.AppElement(38, 30, this, this._el_38);
        var compView_38 = import15.viewFactory_Item0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Item_38_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_38), this.renderer);
        this._ItemContent_38_5 = new import15.Wrapper_ItemContent();
        this._query_Label_38_0 = new import17.QueryList();
        this._query_Button_38_1 = new import17.QueryList();
        this._query_Icon_38_2 = new import17.QueryList();
        this._appEl_38.initComponent(this._Item_38_4.context, [], compView_38);
        this._text_39 = this.renderer.createText(null, '\n      ', null);
        this._el_40 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_40, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_40, 'max', '200');
        this.renderer.setElementAttribute(this._el_40, 'min', '-200');
        this.renderer.setElementAttribute(this._el_40, 'pin', 'true');
        this._appEl_40 = new import3.AppElement(40, 38, this, this._el_40);
        var compView_40 = import19.viewFactory_Range0(this.viewUtils, this.injector(40), this._appEl_40);
        this._Range_40_4 = new import19.Wrapper_Range(this.parentInjector.get(import34.Form), this.parentInjector.get(import35.Haptic), this._Item_38_4.context, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_40), this.renderer);
        this._NG_VALUE_ACCESSOR_40_5 = [this._Range_40_4.context];
        this._NgModel_40_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_40_5);
        this._NgControl_40_7 = this._NgModel_40_6.context;
        this._NgControlStatus_40_8 = new import21.Wrapper_NgControlStatus(this._NgControl_40_7);
        this._appEl_40.initComponent(this._Range_40_4.context, [], compView_40);
        this._text_41 = this.renderer.createText(null, '\n        ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_42, 'range-left', '');
        this._Label_42_3 = new import23.Wrapper_Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_42), this.renderer, null, null, null, null);
        this._text_43 = this.renderer.createText(this._el_42, '-200', null);
        this._text_44 = this.renderer.createText(null, '\n        ', null);
        this._el_45 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_45, 'range-right', '');
        this._Label_45_3 = new import23.Wrapper_Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_45), this.renderer, null, null, null, null);
        this._text_46 = this.renderer.createText(this._el_45, '200', null);
        this._text_47 = this.renderer.createText(null, '\n      ', null);
        compView_40.create(this._Range_40_4.context, [
            [].concat([this._el_42]),
            [].concat([this._el_45])
        ], null);
        this._text_48 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_38_0.reset([
            this._Label_42_3.context,
            this._Label_45_3.context
        ]);
        this._Item_38_4.context.contentLabel = this._query_Label_38_0.first;
        compView_38.create(this._Item_38_4.context, [
            [],
            [],
            [].concat([
                this._text_39,
                this._text_48
            ]),
            [].concat([this._el_40]),
            []
        ], null);
        this._text_49 = this.renderer.createText(this._el_30, '\n  ', null);
        this._text_50 = this.renderer.createText(null, '\n\n  ', null);
        this._el_51 = this.renderer.createElement(null, 'ion-list', null);
        this._List_51_3 = new import14.Wrapper_List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_51), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_52 = this.renderer.createText(this._el_51, '\n    ', null);
        this._el_53 = this.renderer.createElement(this._el_51, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'item');
        this._appEl_53 = new import3.AppElement(53, 51, this, this._el_53);
        var compView_53 = import15.viewFactory_Item0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Item_53_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_53), this.renderer);
        this._ListHeader_53_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_53), null);
        this._query_Label_53_0 = new import17.QueryList();
        this._query_Button_53_1 = new import17.QueryList();
        this._query_Icon_53_2 = new import17.QueryList();
        this._appEl_53.initComponent(this._Item_53_4.context, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n      Warmth\n      ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_55, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_55, 'item-right', '');
        this._Badge_55_3 = new import18.Wrapper_Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_55), this.renderer);
        this._text_56 = this.renderer.createText(this._el_55, '', null);
        this._text_57 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_53_0.reset([]);
        this._Item_53_4.context.contentLabel = this._query_Label_53_0.first;
        compView_53.create(this._Item_53_4.context, [
            [],
            [],
            [].concat([
                this._text_54,
                this._text_57
            ]),
            [],
            [].concat([this._el_55])
        ], null);
        this._text_58 = this.renderer.createText(this._el_51, '\n    ', null);
        this._el_59 = this.renderer.createElement(this._el_51, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_59, 'class', 'item item-block');
        this._appEl_59 = new import3.AppElement(59, 51, this, this._el_59);
        var compView_59 = import15.viewFactory_Item0(this.viewUtils, this.injector(59), this._appEl_59);
        this._Item_59_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_59), this.renderer);
        this._ItemContent_59_5 = new import15.Wrapper_ItemContent();
        this._query_Label_59_0 = new import17.QueryList();
        this._query_Button_59_1 = new import17.QueryList();
        this._query_Icon_59_2 = new import17.QueryList();
        this._appEl_59.initComponent(this._Item_59_4.context, [], compView_59);
        this._text_60 = this.renderer.createText(null, '\n      ', null);
        this._el_61 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_61, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_61, 'max', '2000');
        this.renderer.setElementAttribute(this._el_61, 'min', '1000');
        this.renderer.setElementAttribute(this._el_61, 'snaps', 'true');
        this.renderer.setElementAttribute(this._el_61, 'step', '100');
        this._appEl_61 = new import3.AppElement(61, 59, this, this._el_61);
        var compView_61 = import19.viewFactory_Range0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Range_61_4 = new import19.Wrapper_Range(this.parentInjector.get(import34.Form), this.parentInjector.get(import35.Haptic), this._Item_59_4.context, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_61), this.renderer);
        this._NG_VALUE_ACCESSOR_61_5 = [this._Range_61_4.context];
        this._NgModel_61_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_61_5);
        this._NgControl_61_7 = this._NgModel_61_6.context;
        this._NgControlStatus_61_8 = new import21.Wrapper_NgControlStatus(this._NgControl_61_7);
        this._appEl_61.initComponent(this._Range_61_4.context, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n        ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_63, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_63, 'name', 'thermometer');
        this.renderer.setElementAttribute(this._el_63, 'range-left', '');
        this.renderer.setElementAttribute(this._el_63, 'role', 'img');
        this.renderer.setElementAttribute(this._el_63, 'small', '');
        this._Icon_63_3 = new import22.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_63), this.renderer);
        this._text_64 = this.renderer.createText(null, '\n        ', null);
        this._el_65 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_65, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_65, 'name', 'thermometer');
        this.renderer.setElementAttribute(this._el_65, 'range-right', '');
        this.renderer.setElementAttribute(this._el_65, 'role', 'img');
        this._Icon_65_3 = new import22.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_65), this.renderer);
        this._text_66 = this.renderer.createText(null, '\n      ', null);
        compView_61.create(this._Range_61_4.context, [
            [].concat([this._el_63]),
            [].concat([this._el_65])
        ], null);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_59_0.reset([]);
        this._Item_59_4.context.contentLabel = this._query_Label_59_0.first;
        compView_59.create(this._Item_59_4.context, [
            [],
            [],
            [].concat([
                this._text_60,
                this._text_67
            ]),
            [].concat([this._el_61]),
            []
        ], null);
        this._text_68 = this.renderer.createText(this._el_51, '\n  ', null);
        this._text_69 = this.renderer.createText(null, '\n\n  ', null);
        this._el_70 = this.renderer.createElement(null, 'ion-list', null);
        this._List_70_3 = new import14.Wrapper_List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_70), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_71 = this.renderer.createText(this._el_70, '\n    ', null);
        this._el_72 = this.renderer.createElement(this._el_70, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_72, 'class', 'item');
        this._appEl_72 = new import3.AppElement(72, 70, this, this._el_72);
        var compView_72 = import15.viewFactory_Item0(this.viewUtils, this.injector(72), this._appEl_72);
        this._Item_72_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_72), this.renderer);
        this._ListHeader_72_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_72), null);
        this._query_Label_72_0 = new import17.QueryList();
        this._query_Button_72_1 = new import17.QueryList();
        this._query_Icon_72_2 = new import17.QueryList();
        this._appEl_72.initComponent(this._Item_72_4.context, [], compView_72);
        this._text_73 = this.renderer.createText(null, '\n      Structure\n      ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_74, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_74, 'item-right', '');
        this._Badge_74_3 = new import18.Wrapper_Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_74), this.renderer);
        this._text_75 = this.renderer.createText(this._el_74, '', null);
        this._text_76 = this.renderer.createText(null, '\n      ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_77, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_77, 'item-right', '');
        this._Badge_77_3 = new import18.Wrapper_Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_77), this.renderer);
        this._text_78 = this.renderer.createText(this._el_77, '', null);
        this._text_79 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_72_0.reset([]);
        this._Item_72_4.context.contentLabel = this._query_Label_72_0.first;
        compView_72.create(this._Item_72_4.context, [
            [],
            [],
            [].concat([
                this._text_73,
                this._text_76,
                this._text_79
            ]),
            [],
            [].concat([
                this._el_74,
                this._el_77
            ])
        ], null);
        this._text_80 = this.renderer.createText(this._el_70, '\n    ', null);
        this._el_81 = this.renderer.createElement(this._el_70, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'item item-block');
        this._appEl_81 = new import3.AppElement(81, 70, this, this._el_81);
        var compView_81 = import15.viewFactory_Item0(this.viewUtils, this.injector(81), this._appEl_81);
        this._Item_81_4 = new import15.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_81), this.renderer);
        this._ItemContent_81_5 = new import15.Wrapper_ItemContent();
        this._query_Label_81_0 = new import17.QueryList();
        this._query_Button_81_1 = new import17.QueryList();
        this._query_Icon_81_2 = new import17.QueryList();
        this._appEl_81.initComponent(this._Item_81_4.context, [], compView_81);
        this._text_82 = this.renderer.createText(null, '\n      ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_83, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_83, 'dualKnobs', 'true');
        this.renderer.setElementAttribute(this._el_83, 'pin', 'true');
        this._appEl_83 = new import3.AppElement(83, 81, this, this._el_83);
        var compView_83 = import19.viewFactory_Range0(this.viewUtils, this.injector(83), this._appEl_83);
        this._Range_83_4 = new import19.Wrapper_Range(this.parentInjector.get(import34.Form), this.parentInjector.get(import35.Haptic), this._Item_81_4.context, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_83), this.renderer);
        this._NG_VALUE_ACCESSOR_83_5 = [this._Range_83_4.context];
        this._NgModel_83_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_83_5);
        this._NgControl_83_7 = this._NgModel_83_6.context;
        this._NgControlStatus_83_8 = new import21.Wrapper_NgControlStatus(this._NgControl_83_7);
        this._appEl_83.initComponent(this._Range_83_4.context, [], compView_83);
        this._text_84 = this.renderer.createText(null, '\n        ', null);
        this._el_85 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_85, 'range-left', '');
        this._Label_85_3 = new import23.Wrapper_Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_85), this.renderer, null, null, null, null);
        this._text_86 = this.renderer.createText(this._el_85, '-0', null);
        this._text_87 = this.renderer.createText(null, '\n        ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_88, 'range-right', '');
        this._Label_88_3 = new import23.Wrapper_Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_88), this.renderer, null, null, null, null);
        this._text_89 = this.renderer.createText(this._el_88, '100', null);
        this._text_90 = this.renderer.createText(null, '\n      ', null);
        compView_83.create(this._Range_83_4.context, [
            [].concat([this._el_85]),
            [].concat([this._el_88])
        ], null);
        this._text_91 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_81_0.reset([
            this._Label_85_3.context,
            this._Label_88_3.context
        ]);
        this._Item_81_4.context.contentLabel = this._query_Label_81_0.first;
        compView_81.create(this._Item_81_4.context, [
            [],
            [],
            [].concat([
                this._text_82,
                this._text_91
            ]),
            [].concat([this._el_83]),
            []
        ], null);
        this._text_92 = this.renderer.createText(this._el_70, '\n  ', null);
        this._text_93 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_29,
                this._el_30,
                this._text_50,
                this._el_51,
                this._text_69,
                this._el_70,
                this._text_93
            ]),
            []
        ], null);
        this._text_94 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_95 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_21_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_40, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_40_0.bind(this)));
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_40_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_40_0.bind(this)));
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_61, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_61_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_83, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_83, 'ionChange', this.eventHandler(this._handle_ionChange_83_1.bind(this)));
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        var subscription_3 = this._Range_83_4.context.ionChange.subscribe(this.eventHandler(this._handle_ionChange_83_1.bind(this)));
        var subscription_4 = this._NgModel_83_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
        this._expr_73 = import7.UNINITIALIZED;
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        this._expr_78 = import7.UNINITIALIZED;
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
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
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
            this._el_65,
            this._text_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._text_92,
            this._text_93,
            this._text_94,
            this._text_95
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import37.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import38.Badge) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Badge_15_3.context;
        }
        if (((token === import39.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Item_13_4.context;
        }
        if (((token === import40.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ListHeader_13_5.context;
        }
        if (((token === import41.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3.context;
        }
        if (((token === import41.Icon) && (25 === requestNodeIndex))) {
            return this._Icon_25_3.context;
        }
        if (((token === import42.Range) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Range_21_4.context;
        }
        if (((token === import43.NG_VALUE_ACCESSOR) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NG_VALUE_ACCESSOR_21_5;
        }
        if (((token === import44.NgModel) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgModel_21_6.context;
        }
        if (((token === import45.NgControl) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgControl_21_7;
        }
        if (((token === import46.NgControlStatus) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgControlStatus_21_8.context;
        }
        if (((token === import39.Item) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_19_4.context;
        }
        if (((token === import39.ItemContent) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_19_5.context;
        }
        if (((token === import47.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._List_11_3.context;
        }
        if (((token === import38.Badge) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Badge_34_3.context;
        }
        if (((token === import39.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Item_32_4.context;
        }
        if (((token === import40.ListHeader) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ListHeader_32_5.context;
        }
        if (((token === import48.Label) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Label_42_3.context;
        }
        if (((token === import48.Label) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Label_45_3.context;
        }
        if (((token === import42.Range) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Range_40_4.context;
        }
        if (((token === import43.NG_VALUE_ACCESSOR) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NG_VALUE_ACCESSOR_40_5;
        }
        if (((token === import44.NgModel) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgModel_40_6.context;
        }
        if (((token === import45.NgControl) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControl_40_7;
        }
        if (((token === import46.NgControlStatus) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControlStatus_40_8.context;
        }
        if (((token === import39.Item) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Item_38_4.context;
        }
        if (((token === import39.ItemContent) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemContent_38_5.context;
        }
        if (((token === import47.List) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._List_30_3.context;
        }
        if (((token === import38.Badge) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Badge_55_3.context;
        }
        if (((token === import39.Item) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Item_53_4.context;
        }
        if (((token === import40.ListHeader) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._ListHeader_53_5.context;
        }
        if (((token === import41.Icon) && (63 === requestNodeIndex))) {
            return this._Icon_63_3.context;
        }
        if (((token === import41.Icon) && (65 === requestNodeIndex))) {
            return this._Icon_65_3.context;
        }
        if (((token === import42.Range) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._Range_61_4.context;
        }
        if (((token === import43.NG_VALUE_ACCESSOR) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NG_VALUE_ACCESSOR_61_5;
        }
        if (((token === import44.NgModel) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgModel_61_6.context;
        }
        if (((token === import45.NgControl) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgControl_61_7;
        }
        if (((token === import46.NgControlStatus) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgControlStatus_61_8.context;
        }
        if (((token === import39.Item) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Item_59_4.context;
        }
        if (((token === import39.ItemContent) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._ItemContent_59_5.context;
        }
        if (((token === import47.List) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._List_51_3.context;
        }
        if (((token === import38.Badge) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Badge_74_3.context;
        }
        if (((token === import38.Badge) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Badge_77_3.context;
        }
        if (((token === import39.Item) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Item_72_4.context;
        }
        if (((token === import40.ListHeader) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ListHeader_72_5.context;
        }
        if (((token === import48.Label) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Label_85_3.context;
        }
        if (((token === import48.Label) && ((88 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Label_88_3.context;
        }
        if (((token === import42.Range) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._Range_83_4.context;
        }
        if (((token === import43.NG_VALUE_ACCESSOR) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NG_VALUE_ACCESSOR_83_5;
        }
        if (((token === import44.NgModel) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgModel_83_6.context;
        }
        if (((token === import45.NgControl) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgControl_83_7;
        }
        if (((token === import46.NgControlStatus) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgControlStatus_83_8.context;
        }
        if (((token === import39.Item) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Item_81_4.context;
        }
        if (((token === import39.ItemContent) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._ItemContent_81_5.context;
        }
        if (((token === import47.List) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._List_70_3.context;
        }
        if (((token === import49.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
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
        this._ListHeader_13_5.detectChangesInternal(this, this._el_13, throwOnChange);
        this._Badge_15_3.detectChangesInternal(this, this._el_15, throwOnChange);
        if (this._Item_19_4.detectChangesInternal(this, this._el_19, throwOnChange)) {
            this._appEl_19.componentView.markAsCheckOnce();
        }
        this._ItemContent_19_5.detectChangesInternal(this, this._el_19, throwOnChange);
        this._Range_21_4.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_8 = this.context.brightness;
        this._NgModel_21_6.check_model(currVal_8, throwOnChange, false);
        this._NgModel_21_6.detectChangesInternal(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_8.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_15 = 'sunny';
        this._Icon_23_3.check_name(currVal_15, throwOnChange, false);
        this._Icon_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_17 = 'sunny';
        this._Icon_25_3.check_name(currVal_17, throwOnChange, false);
        this._Icon_25_3.detectChangesInternal(this, this._el_25, throwOnChange);
        this._List_30_3.detectChangesInternal(this, this._el_30, throwOnChange);
        if (this._Item_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._ListHeader_32_5.detectChangesInternal(this, this._el_32, throwOnChange);
        var currVal_19 = 'secondary';
        this._Badge_34_3.check_color(currVal_19, throwOnChange, false);
        this._Badge_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        if (this._Item_38_4.detectChangesInternal(this, this._el_38, throwOnChange)) {
            this._appEl_38.componentView.markAsCheckOnce();
        }
        this._ItemContent_38_5.detectChangesInternal(this, this._el_38, throwOnChange);
        var currVal_22 = 'secondary';
        this._Range_40_4.check_color(currVal_22, throwOnChange, false);
        var currVal_23 = '-200';
        this._Range_40_4.check_min(currVal_23, throwOnChange, false);
        var currVal_24 = '200';
        this._Range_40_4.check_max(currVal_24, throwOnChange, false);
        var currVal_25 = 'true';
        this._Range_40_4.check_pin(currVal_25, throwOnChange, false);
        this._Range_40_4.detectChangesInternal(this, this._el_40, throwOnChange);
        var currVal_29 = this.context.saturation;
        this._NgModel_40_6.check_model(currVal_29, throwOnChange, false);
        this._NgModel_40_6.detectChangesInternal(this, this._el_40, throwOnChange);
        this._NgControlStatus_40_8.detectChangesInternal(this, this._el_40, throwOnChange);
        this._Label_42_3.detectChangesInternal(this, this._el_42, throwOnChange);
        this._Label_45_3.detectChangesInternal(this, this._el_45, throwOnChange);
        this._List_51_3.detectChangesInternal(this, this._el_51, throwOnChange);
        if (this._Item_53_4.detectChangesInternal(this, this._el_53, throwOnChange)) {
            this._appEl_53.componentView.markAsCheckOnce();
        }
        this._ListHeader_53_5.detectChangesInternal(this, this._el_53, throwOnChange);
        var currVal_36 = 'danger';
        this._Badge_55_3.check_color(currVal_36, throwOnChange, false);
        this._Badge_55_3.detectChangesInternal(this, this._el_55, throwOnChange);
        if (this._Item_59_4.detectChangesInternal(this, this._el_59, throwOnChange)) {
            this._appEl_59.componentView.markAsCheckOnce();
        }
        this._ItemContent_59_5.detectChangesInternal(this, this._el_59, throwOnChange);
        var currVal_39 = 'danger';
        this._Range_61_4.check_color(currVal_39, throwOnChange, false);
        var currVal_40 = '1000';
        this._Range_61_4.check_min(currVal_40, throwOnChange, false);
        var currVal_41 = '2000';
        this._Range_61_4.check_max(currVal_41, throwOnChange, false);
        var currVal_42 = '100';
        this._Range_61_4.check_step(currVal_42, throwOnChange, false);
        var currVal_43 = 'true';
        this._Range_61_4.check_snaps(currVal_43, throwOnChange, false);
        this._Range_61_4.detectChangesInternal(this, this._el_61, throwOnChange);
        var currVal_47 = this.context.warmth;
        this._NgModel_61_6.check_model(currVal_47, throwOnChange, false);
        this._NgModel_61_6.detectChangesInternal(this, this._el_61, throwOnChange);
        this._NgControlStatus_61_8.detectChangesInternal(this, this._el_61, throwOnChange);
        var currVal_54 = 'danger';
        this._Icon_63_3.check_color(currVal_54, throwOnChange, false);
        var currVal_55 = 'thermometer';
        this._Icon_63_3.check_name(currVal_55, throwOnChange, false);
        this._Icon_63_3.detectChangesInternal(this, this._el_63, throwOnChange);
        var currVal_57 = 'danger';
        this._Icon_65_3.check_color(currVal_57, throwOnChange, false);
        var currVal_58 = 'thermometer';
        this._Icon_65_3.check_name(currVal_58, throwOnChange, false);
        this._Icon_65_3.detectChangesInternal(this, this._el_65, throwOnChange);
        this._List_70_3.detectChangesInternal(this, this._el_70, throwOnChange);
        if (this._Item_72_4.detectChangesInternal(this, this._el_72, throwOnChange)) {
            this._appEl_72.componentView.markAsCheckOnce();
        }
        this._ListHeader_72_5.detectChangesInternal(this, this._el_72, throwOnChange);
        var currVal_60 = 'dark';
        this._Badge_74_3.check_color(currVal_60, throwOnChange, false);
        this._Badge_74_3.detectChangesInternal(this, this._el_74, throwOnChange);
        var currVal_62 = 'dark';
        this._Badge_77_3.check_color(currVal_62, throwOnChange, false);
        this._Badge_77_3.detectChangesInternal(this, this._el_77, throwOnChange);
        if (this._Item_81_4.detectChangesInternal(this, this._el_81, throwOnChange)) {
            this._appEl_81.componentView.markAsCheckOnce();
        }
        this._ItemContent_81_5.detectChangesInternal(this, this._el_81, throwOnChange);
        var currVal_66 = 'dark';
        this._Range_83_4.check_color(currVal_66, throwOnChange, false);
        var currVal_67 = 'true';
        this._Range_83_4.check_pin(currVal_67, throwOnChange, false);
        var currVal_68 = 'true';
        this._Range_83_4.check_dualKnobs(currVal_68, throwOnChange, false);
        this._Range_83_4.detectChangesInternal(this, this._el_83, throwOnChange);
        var currVal_72 = this.context.structure;
        this._NgModel_83_6.check_model(currVal_72, throwOnChange, false);
        this._NgModel_83_6.detectChangesInternal(this, this._el_83, throwOnChange);
        this._NgControlStatus_83_8.detectChangesInternal(this, this._el_83, throwOnChange);
        this._Label_85_3.detectChangesInternal(this, this._el_85, throwOnChange);
        this._Label_88_3.detectChangesInternal(this, this._el_88, throwOnChange);
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
            if (this._query_Button_19_1.dirty) {
                this._query_Button_19_1.reset([]);
                this._Item_19_4.context._buttons = this._query_Button_19_1;
                this._query_Button_19_1.notifyOnChanges();
            }
            if (this._query_Icon_19_2.dirty) {
                this._query_Icon_19_2.reset([]);
                this._Item_19_4.context._icons = this._query_Icon_19_2;
                this._query_Icon_19_2.notifyOnChanges();
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
            if (this._query_Button_38_1.dirty) {
                this._query_Button_38_1.reset([]);
                this._Item_38_4.context._buttons = this._query_Button_38_1;
                this._query_Button_38_1.notifyOnChanges();
            }
            if (this._query_Icon_38_2.dirty) {
                this._query_Icon_38_2.reset([]);
                this._Item_38_4.context._icons = this._query_Icon_38_2;
                this._query_Icon_38_2.notifyOnChanges();
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
            if (this._query_Button_59_1.dirty) {
                this._query_Button_59_1.reset([]);
                this._Item_59_4.context._buttons = this._query_Button_59_1;
                this._query_Button_59_1.notifyOnChanges();
            }
            if (this._query_Icon_59_2.dirty) {
                this._query_Icon_59_2.reset([]);
                this._Item_59_4.context._icons = this._query_Icon_59_2;
                this._query_Icon_59_2.notifyOnChanges();
            }
            if (this._query_Button_72_1.dirty) {
                this._query_Button_72_1.reset([]);
                this._Item_72_4.context._buttons = this._query_Button_72_1;
                this._query_Button_72_1.notifyOnChanges();
            }
            if (this._query_Icon_72_2.dirty) {
                this._query_Icon_72_2.reset([]);
                this._Item_72_4.context._icons = this._query_Icon_72_2;
                this._query_Icon_72_2.notifyOnChanges();
            }
            if (this._query_Button_81_1.dirty) {
                this._query_Button_81_1.reset([]);
                this._Item_81_4.context._buttons = this._query_Button_81_1;
                this._query_Button_81_1.notifyOnChanges();
            }
            if (this._query_Icon_81_2.dirty) {
                this._query_Icon_81_2.reset([]);
                this._Item_81_4.context._icons = this._query_Icon_81_2;
                this._query_Icon_81_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_19_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_38_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_53_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_59_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_72_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_81_4.context.ngAfterContentInit();
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
        var currVal_3 = import4.interpolate(1, '', this.context.brightness, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_16, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._Range_21_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_21, 'range-disabled', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Range_21_4.context._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_21, 'range-pressed', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Range_21_4.context._pin;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_21, 'range-has-pin', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._NgControlStatus_21_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_21_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_21_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_21_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_21_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_21_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_16 = this._Icon_23_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = this._Icon_25_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_25, 'hide', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_20 = import4.interpolate(1, '', this.context.saturation, '');
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_35, currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_26 = this._Range_40_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_40, 'range-disabled', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._Range_40_4.context._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_40, 'range-pressed', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._Range_40_4.context._pin;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_40, 'range-has-pin', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_30 = this._NgControlStatus_40_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_40, 'ng-untouched', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._NgControlStatus_40_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_40, 'ng-touched', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_40_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_40, 'ng-pristine', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this._NgControlStatus_40_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_40, 'ng-dirty', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this._NgControlStatus_40_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_40, 'ng-valid', currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = this._NgControlStatus_40_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_40, 'ng-invalid', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_37 = import4.interpolate(1, '', this.context.warmth, '');
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_56, currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_44 = this._Range_61_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_61, 'range-disabled', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._Range_61_4.context._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_61, 'range-pressed', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = this._Range_61_4.context._pin;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementClass(this._el_61, 'range-has-pin', currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_48 = this._NgControlStatus_61_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementClass(this._el_61, 'ng-untouched', currVal_48);
            this._expr_48 = currVal_48;
        }
        var currVal_49 = this._NgControlStatus_61_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_61, 'ng-touched', currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this._NgControlStatus_61_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementClass(this._el_61, 'ng-pristine', currVal_50);
            this._expr_50 = currVal_50;
        }
        var currVal_51 = this._NgControlStatus_61_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_61, 'ng-dirty', currVal_51);
            this._expr_51 = currVal_51;
        }
        var currVal_52 = this._NgControlStatus_61_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementClass(this._el_61, 'ng-valid', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_53 = this._NgControlStatus_61_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_61, 'ng-invalid', currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_56 = this._Icon_63_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_63, 'hide', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_59 = this._Icon_65_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementClass(this._el_65, 'hide', currVal_59);
            this._expr_59 = currVal_59;
        }
        var currVal_61 = import4.interpolate(1, '', this.context.structure.lower, '');
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setText(this._text_75, currVal_61);
            this._expr_61 = currVal_61;
        }
        var currVal_63 = import4.interpolate(1, '', this.context.structure.upper, '');
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setText(this._text_78, currVal_63);
            this._expr_63 = currVal_63;
        }
        var currVal_69 = this._Range_83_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_83, 'range-disabled', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._Range_83_4.context._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementClass(this._el_83, 'range-pressed', currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_71 = this._Range_83_4.context._pin;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_83, 'range-has-pin', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_73 = this._NgControlStatus_83_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_83, 'ng-untouched', currVal_73);
            this._expr_73 = currVal_73;
        }
        var currVal_74 = this._NgControlStatus_83_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setElementClass(this._el_83, 'ng-touched', currVal_74);
            this._expr_74 = currVal_74;
        }
        var currVal_75 = this._NgControlStatus_83_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this.renderer.setElementClass(this._el_83, 'ng-pristine', currVal_75);
            this._expr_75 = currVal_75;
        }
        var currVal_76 = this._NgControlStatus_83_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setElementClass(this._el_83, 'ng-dirty', currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_77 = this._NgControlStatus_83_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_83, 'ng-valid', currVal_77);
            this._expr_77 = currVal_77;
        }
        var currVal_78 = this._NgControlStatus_83_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementClass(this._el_83, 'ng-invalid', currVal_78);
            this._expr_78 = currVal_78;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_21_4.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_40_4.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_61_4.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_83_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_23_3.context.ngOnDestroy();
        this._Icon_25_3.context.ngOnDestroy();
        this._Range_21_4.context.ngOnDestroy();
        this._NgModel_21_6.context.ngOnDestroy();
        this._Range_40_4.context.ngOnDestroy();
        this._NgModel_40_6.context.ngOnDestroy();
        this._Icon_63_3.context.ngOnDestroy();
        this._Icon_65_3.context.ngOnDestroy();
        this._Range_61_4.context.ngOnDestroy();
        this._NgModel_61_6.context.ngOnDestroy();
        this._Range_83_4.context.ngOnDestroy();
        this._NgModel_83_6.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.brightness = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_40_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.saturation = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_61_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.warmth = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_83_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.structure = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionChange_83_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onChange($event) !== false);
        return (true && pd_0);
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
        var compView_0 = import50.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import50.Wrapper_Nav(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import51.NavControllerBase, null), this.parentInjector.get(import27.App), this.parentInjector.get(import24.Config), this.parentInjector.get(import30.Keyboard), new import25.ElementRef(this._el_0), this.parentInjector.get(import31.NgZone), this.renderer, this.parentInjector.get(import52.ComponentFactoryResolver), this.parentInjector.get(import33.GestureController), this.parentInjector.get(import53.TransitionController), this.parentInjector.get(import54.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import55.Nav) && (0 === requestNodeIndex))) {
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
