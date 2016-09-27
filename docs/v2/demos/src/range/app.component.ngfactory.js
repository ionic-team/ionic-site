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
import * as import14 from 'ionic-angular/components/list/list';
import * as import15 from 'ionic-angular/components/item/item';
import * as import16 from 'ionic-angular/components/list/list-header';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/badge/badge';
import * as import19 from 'ionic-angular/components/range/range';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from 'ionic-angular/components/icon/icon';
import * as import23 from 'ionic-angular/components/label/label';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/navigation/nav-controller';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/gestures/gesture-controller';
import * as import36 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from '../../node_modules/ionic-angular/components/range/range.ngfactory';
import * as import39 from '@angular/forms/src/directives/control_value_accessor';
import * as import40 from '@angular/forms/src/directives/ng_control';
import * as import41 from 'ionic-angular/components/nav/nav';
import * as import42 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import43 from 'ionic-angular/navigation/nav-controller-base';
import * as import44 from '@angular/core/src/linker/component_factory_resolver';
import * as import45 from 'ionic-angular/transitions/transition-controller';
import * as import46 from 'ionic-angular/navigation/deep-linker';
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
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import27.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import29.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Range', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'outer-content');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import31.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import36.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import17.QueryList();
        this._query_Button_13_1 = new import17.QueryList();
        this._query_Icon_13_2 = new import17.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Brightness\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_15, 'item-right', '');
        this._Badge_15_3 = new import18.Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_15), this.renderer);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
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
        this._appEl_19 = new import2.AppElement(19, 11, this, this._el_19);
        var compView_19 = import36.viewFactory_Item0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Item_19_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_19), this.renderer);
        this._ItemContent_19_5 = new import15.ItemContent();
        this._query_Label_19_0 = new import17.QueryList();
        this._query_Button_19_1 = new import17.QueryList();
        this._query_Icon_19_2 = new import17.QueryList();
        this._appEl_19.initComponent(this._Item_19_4, [], compView_19);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-range', null);
        this._appEl_21 = new import2.AppElement(21, 19, this, this._el_21);
        var compView_21 = import38.viewFactory_Range0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Range_21_4 = new import19.Range(this.parentInjector.get(import37.Form), this._Item_19_4, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_21), this.renderer);
        this._NG_VALUE_ACCESSOR_21_5 = [this._Range_21_4];
        this._NgModel_21_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_21_5);
        this._NgControl_21_7 = this._NgModel_21_6;
        this._NgControlStatus_21_8 = new import21.NgControlStatus(this._NgControl_21_7);
        this._appEl_21.initComponent(this._Range_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'name', 'sunny');
        this.renderer.setElementAttribute(this._el_23, 'range-left', '');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this.renderer.setElementAttribute(this._el_23, 'small', '');
        this._Icon_23_3 = new import22.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_25, 'name', 'sunny');
        this.renderer.setElementAttribute(this._el_25, 'range-right', '');
        this.renderer.setElementAttribute(this._el_25, 'role', 'img');
        this._Icon_25_3 = new import22.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_25), this.renderer);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Range_21_4, [
            [].concat([this._el_23]),
            [].concat([this._el_25])
        ], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_19_0.reset([]);
        this._Item_19_4.contentLabel = this._query_Label_19_0.first;
        compView_19.create(this._Item_19_4, [
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
        this._List_30_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_30), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_31 = this.renderer.createText(this._el_30, '\n    ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item');
        this._appEl_32 = new import2.AppElement(32, 30, this, this._el_32);
        var compView_32 = import36.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_32), this.renderer);
        this._ListHeader_32_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_32), null);
        this._query_Label_32_0 = new import17.QueryList();
        this._query_Button_32_1 = new import17.QueryList();
        this._query_Icon_32_2 = new import17.QueryList();
        this._appEl_32.initComponent(this._Item_32_4, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      Saturation\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_34, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_34, 'item-right', '');
        this._Badge_34_3 = new import18.Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_34), this.renderer);
        this._text_35 = this.renderer.createText(this._el_34, '', null);
        this._text_36 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_32_0.reset([]);
        this._Item_32_4.contentLabel = this._query_Label_32_0.first;
        compView_32.create(this._Item_32_4, [
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
        this._appEl_38 = new import2.AppElement(38, 30, this, this._el_38);
        var compView_38 = import36.viewFactory_Item0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Item_38_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_38), this.renderer);
        this._ItemContent_38_5 = new import15.ItemContent();
        this._query_Label_38_0 = new import17.QueryList();
        this._query_Button_38_1 = new import17.QueryList();
        this._query_Icon_38_2 = new import17.QueryList();
        this._appEl_38.initComponent(this._Item_38_4, [], compView_38);
        this._text_39 = this.renderer.createText(null, '\n      ', null);
        this._el_40 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_40, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_40, 'max', '200');
        this.renderer.setElementAttribute(this._el_40, 'min', '-200');
        this.renderer.setElementAttribute(this._el_40, 'pin', 'true');
        this._appEl_40 = new import2.AppElement(40, 38, this, this._el_40);
        var compView_40 = import38.viewFactory_Range0(this.viewUtils, this.injector(40), this._appEl_40);
        this._Range_40_4 = new import19.Range(this.parentInjector.get(import37.Form), this._Item_38_4, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_40), this.renderer);
        this._NG_VALUE_ACCESSOR_40_5 = [this._Range_40_4];
        this._NgModel_40_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_40_5);
        this._NgControl_40_7 = this._NgModel_40_6;
        this._NgControlStatus_40_8 = new import21.NgControlStatus(this._NgControl_40_7);
        this._appEl_40.initComponent(this._Range_40_4, [], compView_40);
        this._text_41 = this.renderer.createText(null, '\n        ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_42, 'range-left', '');
        this._Label_42_3 = new import23.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_42), this.renderer, null, null, null, null);
        this._text_43 = this.renderer.createText(this._el_42, '-200', null);
        this._text_44 = this.renderer.createText(null, '\n        ', null);
        this._el_45 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_45, 'range-right', '');
        this._Label_45_3 = new import23.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_45), this.renderer, null, null, null, null);
        this._text_46 = this.renderer.createText(this._el_45, '200', null);
        this._text_47 = this.renderer.createText(null, '\n      ', null);
        compView_40.create(this._Range_40_4, [
            [].concat([this._el_42]),
            [].concat([this._el_45])
        ], null);
        this._text_48 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_38_0.reset([
            this._Label_42_3,
            this._Label_45_3
        ]);
        this._Item_38_4.contentLabel = this._query_Label_38_0.first;
        compView_38.create(this._Item_38_4, [
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
        this._List_51_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_51), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_52 = this.renderer.createText(this._el_51, '\n    ', null);
        this._el_53 = this.renderer.createElement(this._el_51, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'item');
        this._appEl_53 = new import2.AppElement(53, 51, this, this._el_53);
        var compView_53 = import36.viewFactory_Item0(this.viewUtils, this.injector(53), this._appEl_53);
        this._Item_53_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_53), this.renderer);
        this._ListHeader_53_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_53), null);
        this._query_Label_53_0 = new import17.QueryList();
        this._query_Button_53_1 = new import17.QueryList();
        this._query_Icon_53_2 = new import17.QueryList();
        this._appEl_53.initComponent(this._Item_53_4, [], compView_53);
        this._text_54 = this.renderer.createText(null, '\n      Warmth\n      ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_55, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_55, 'item-right', '');
        this._Badge_55_3 = new import18.Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_55), this.renderer);
        this._text_56 = this.renderer.createText(this._el_55, '', null);
        this._text_57 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_53_0.reset([]);
        this._Item_53_4.contentLabel = this._query_Label_53_0.first;
        compView_53.create(this._Item_53_4, [
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
        this._appEl_59 = new import2.AppElement(59, 51, this, this._el_59);
        var compView_59 = import36.viewFactory_Item0(this.viewUtils, this.injector(59), this._appEl_59);
        this._Item_59_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_59), this.renderer);
        this._ItemContent_59_5 = new import15.ItemContent();
        this._query_Label_59_0 = new import17.QueryList();
        this._query_Button_59_1 = new import17.QueryList();
        this._query_Icon_59_2 = new import17.QueryList();
        this._appEl_59.initComponent(this._Item_59_4, [], compView_59);
        this._text_60 = this.renderer.createText(null, '\n      ', null);
        this._el_61 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_61, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_61, 'max', '2000');
        this.renderer.setElementAttribute(this._el_61, 'min', '1000');
        this.renderer.setElementAttribute(this._el_61, 'snaps', 'true');
        this.renderer.setElementAttribute(this._el_61, 'step', '100');
        this._appEl_61 = new import2.AppElement(61, 59, this, this._el_61);
        var compView_61 = import38.viewFactory_Range0(this.viewUtils, this.injector(61), this._appEl_61);
        this._Range_61_4 = new import19.Range(this.parentInjector.get(import37.Form), this._Item_59_4, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_61), this.renderer);
        this._NG_VALUE_ACCESSOR_61_5 = [this._Range_61_4];
        this._NgModel_61_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_61_5);
        this._NgControl_61_7 = this._NgModel_61_6;
        this._NgControlStatus_61_8 = new import21.NgControlStatus(this._NgControl_61_7);
        this._appEl_61.initComponent(this._Range_61_4, [], compView_61);
        this._text_62 = this.renderer.createText(null, '\n        ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_63, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_63, 'name', 'thermometer');
        this.renderer.setElementAttribute(this._el_63, 'range-left', '');
        this.renderer.setElementAttribute(this._el_63, 'role', 'img');
        this.renderer.setElementAttribute(this._el_63, 'small', '');
        this._Icon_63_3 = new import22.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_63), this.renderer);
        this._text_64 = this.renderer.createText(null, '\n        ', null);
        this._el_65 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_65, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_65, 'name', 'thermometer');
        this.renderer.setElementAttribute(this._el_65, 'range-right', '');
        this.renderer.setElementAttribute(this._el_65, 'role', 'img');
        this._Icon_65_3 = new import22.Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_65), this.renderer);
        this._text_66 = this.renderer.createText(null, '\n      ', null);
        compView_61.create(this._Range_61_4, [
            [].concat([this._el_63]),
            [].concat([this._el_65])
        ], null);
        this._text_67 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_59_0.reset([]);
        this._Item_59_4.contentLabel = this._query_Label_59_0.first;
        compView_59.create(this._Item_59_4, [
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
        this._List_70_3 = new import14.List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_70), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_71 = this.renderer.createText(this._el_70, '\n    ', null);
        this._el_72 = this.renderer.createElement(this._el_70, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_72, 'class', 'item');
        this._appEl_72 = new import2.AppElement(72, 70, this, this._el_72);
        var compView_72 = import36.viewFactory_Item0(this.viewUtils, this.injector(72), this._appEl_72);
        this._Item_72_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_72), this.renderer);
        this._ListHeader_72_5 = new import16.ListHeader(this.parentInjector.get(import24.Config), this.renderer, new import25.ElementRef(this._el_72), null);
        this._query_Label_72_0 = new import17.QueryList();
        this._query_Button_72_1 = new import17.QueryList();
        this._query_Icon_72_2 = new import17.QueryList();
        this._appEl_72.initComponent(this._Item_72_4, [], compView_72);
        this._text_73 = this.renderer.createText(null, '\n      Structure\n      ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_74, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_74, 'item-right', '');
        this._Badge_74_3 = new import18.Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_74), this.renderer);
        this._text_75 = this.renderer.createText(this._el_74, '', null);
        this._text_76 = this.renderer.createText(null, '\n      ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_77, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_77, 'item-right', '');
        this._Badge_77_3 = new import18.Badge(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_77), this.renderer);
        this._text_78 = this.renderer.createText(this._el_77, '', null);
        this._text_79 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_72_0.reset([]);
        this._Item_72_4.contentLabel = this._query_Label_72_0.first;
        compView_72.create(this._Item_72_4, [
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
        this._appEl_81 = new import2.AppElement(81, 70, this, this._el_81);
        var compView_81 = import36.viewFactory_Item0(this.viewUtils, this.injector(81), this._appEl_81);
        this._Item_81_4 = new import15.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_81), this.renderer);
        this._ItemContent_81_5 = new import15.ItemContent();
        this._query_Label_81_0 = new import17.QueryList();
        this._query_Button_81_1 = new import17.QueryList();
        this._query_Icon_81_2 = new import17.QueryList();
        this._appEl_81.initComponent(this._Item_81_4, [], compView_81);
        this._text_82 = this.renderer.createText(null, '\n      ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-range', null);
        this.renderer.setElementAttribute(this._el_83, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_83, 'dualKnobs', 'true');
        this.renderer.setElementAttribute(this._el_83, 'pin', 'true');
        this._appEl_83 = new import2.AppElement(83, 81, this, this._el_83);
        var compView_83 = import38.viewFactory_Range0(this.viewUtils, this.injector(83), this._appEl_83);
        this._Range_83_4 = new import19.Range(this.parentInjector.get(import37.Form), this._Item_81_4, this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_83), this.renderer);
        this._NG_VALUE_ACCESSOR_83_5 = [this._Range_83_4];
        this._NgModel_83_6 = new import20.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_83_5);
        this._NgControl_83_7 = this._NgModel_83_6;
        this._NgControlStatus_83_8 = new import21.NgControlStatus(this._NgControl_83_7);
        this._appEl_83.initComponent(this._Range_83_4, [], compView_83);
        this._text_84 = this.renderer.createText(null, '\n        ', null);
        this._el_85 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_85, 'range-left', '');
        this._Label_85_3 = new import23.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_85), this.renderer, null, null, null, null);
        this._text_86 = this.renderer.createText(this._el_85, '-0', null);
        this._text_87 = this.renderer.createText(null, '\n        ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_88, 'range-right', '');
        this._Label_88_3 = new import23.Label(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_88), this.renderer, null, null, null, null);
        this._text_89 = this.renderer.createText(this._el_88, '100', null);
        this._text_90 = this.renderer.createText(null, '\n      ', null);
        compView_83.create(this._Range_83_4, [
            [].concat([this._el_85]),
            [].concat([this._el_88])
        ], null);
        this._text_91 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_81_0.reset([
            this._Label_85_3,
            this._Label_88_3
        ]);
        this._Item_81_4.contentLabel = this._query_Label_81_0.first;
        compView_81.create(this._Item_81_4, [
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
        compView_9.create(this._Content_9_4, [
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
        this._expr_8 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_21_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
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
        var disposable_1 = this.renderer.listen(this._el_40, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_40_0.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_40_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_40_0.bind(this)));
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_61, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_61_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_83, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_83, 'ionChange', this.eventHandler(this._handle_ionChange_83_1.bind(this)));
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        var subscription_3 = this._Range_83_4.ionChange.subscribe(this.eventHandler(this._handle_ionChange_83_1.bind(this)));
        this._expr_72 = import7.UNINITIALIZED;
        var subscription_4 = this._NgModel_83_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
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
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import18.Badge) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Badge_15_3;
        }
        if (((token === import15.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Item_13_4;
        }
        if (((token === import16.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ListHeader_13_5;
        }
        if (((token === import22.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3;
        }
        if (((token === import22.Icon) && (25 === requestNodeIndex))) {
            return this._Icon_25_3;
        }
        if (((token === import19.Range) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Range_21_4;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NG_VALUE_ACCESSOR_21_5;
        }
        if (((token === import20.NgModel) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgModel_21_6;
        }
        if (((token === import40.NgControl) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgControl_21_7;
        }
        if (((token === import21.NgControlStatus) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._NgControlStatus_21_8;
        }
        if (((token === import15.Item) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_19_4;
        }
        if (((token === import15.ItemContent) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_19_5;
        }
        if (((token === import14.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._List_11_3;
        }
        if (((token === import18.Badge) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Badge_34_3;
        }
        if (((token === import15.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Item_32_4;
        }
        if (((token === import16.ListHeader) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ListHeader_32_5;
        }
        if (((token === import23.Label) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Label_42_3;
        }
        if (((token === import23.Label) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Label_45_3;
        }
        if (((token === import19.Range) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Range_40_4;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NG_VALUE_ACCESSOR_40_5;
        }
        if (((token === import20.NgModel) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgModel_40_6;
        }
        if (((token === import40.NgControl) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControl_40_7;
        }
        if (((token === import21.NgControlStatus) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControlStatus_40_8;
        }
        if (((token === import15.Item) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Item_38_4;
        }
        if (((token === import15.ItemContent) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemContent_38_5;
        }
        if (((token === import14.List) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._List_30_3;
        }
        if (((token === import18.Badge) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Badge_55_3;
        }
        if (((token === import15.Item) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Item_53_4;
        }
        if (((token === import16.ListHeader) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._ListHeader_53_5;
        }
        if (((token === import22.Icon) && (63 === requestNodeIndex))) {
            return this._Icon_63_3;
        }
        if (((token === import22.Icon) && (65 === requestNodeIndex))) {
            return this._Icon_65_3;
        }
        if (((token === import19.Range) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._Range_61_4;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NG_VALUE_ACCESSOR_61_5;
        }
        if (((token === import20.NgModel) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgModel_61_6;
        }
        if (((token === import40.NgControl) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgControl_61_7;
        }
        if (((token === import21.NgControlStatus) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._NgControlStatus_61_8;
        }
        if (((token === import15.Item) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Item_59_4;
        }
        if (((token === import15.ItemContent) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._ItemContent_59_5;
        }
        if (((token === import14.List) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._List_51_3;
        }
        if (((token === import18.Badge) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Badge_74_3;
        }
        if (((token === import18.Badge) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Badge_77_3;
        }
        if (((token === import15.Item) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Item_72_4;
        }
        if (((token === import16.ListHeader) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ListHeader_72_5;
        }
        if (((token === import23.Label) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Label_85_3;
        }
        if (((token === import23.Label) && ((88 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Label_88_3;
        }
        if (((token === import19.Range) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._Range_83_4;
        }
        if (((token === import39.NG_VALUE_ACCESSOR) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NG_VALUE_ACCESSOR_83_5;
        }
        if (((token === import20.NgModel) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgModel_83_6;
        }
        if (((token === import40.NgControl) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgControl_83_7;
        }
        if (((token === import21.NgControlStatus) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 90)))) {
            return this._NgControlStatus_83_8;
        }
        if (((token === import15.Item) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._Item_81_4;
        }
        if (((token === import15.ItemContent) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._ItemContent_81_5;
        }
        if (((token === import14.List) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._List_70_3;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_8 = this.context.brightness;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._NgModel_21_6.model = currVal_8;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_8, currVal_8);
            this._expr_8 = currVal_8;
        }
        if ((changes !== null)) {
            this._NgModel_21_6.ngOnChanges(changes);
        }
        var currVal_15 = 'sunny';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Icon_23_3.name = currVal_15;
            this._expr_15 = currVal_15;
        }
        var currVal_17 = 'sunny';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._Icon_25_3.name = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_19 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Badge_34_3.color = currVal_19;
            this._expr_19 = currVal_19;
        }
        var currVal_22 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._Range_40_4.color = currVal_22;
            this._expr_22 = currVal_22;
        }
        var currVal_23 = '-200';
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._Range_40_4.min = currVal_23;
            this._expr_23 = currVal_23;
        }
        var currVal_24 = '200';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Range_40_4.max = currVal_24;
            this._expr_24 = currVal_24;
        }
        var currVal_25 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this._Range_40_4.pin = currVal_25;
            this._expr_25 = currVal_25;
        }
        changes = null;
        var currVal_29 = this.context.saturation;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._NgModel_40_6.model = currVal_29;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_29, currVal_29);
            this._expr_29 = currVal_29;
        }
        if ((changes !== null)) {
            this._NgModel_40_6.ngOnChanges(changes);
        }
        var currVal_36 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this._Badge_55_3.color = currVal_36;
            this._expr_36 = currVal_36;
        }
        var currVal_39 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._Range_61_4.color = currVal_39;
            this._expr_39 = currVal_39;
        }
        var currVal_40 = '1000';
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this._Range_61_4.min = currVal_40;
            this._expr_40 = currVal_40;
        }
        var currVal_41 = '2000';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Range_61_4.max = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_42 = '100';
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._Range_61_4.step = currVal_42;
            this._expr_42 = currVal_42;
        }
        var currVal_43 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this._Range_61_4.snaps = currVal_43;
            this._expr_43 = currVal_43;
        }
        changes = null;
        var currVal_47 = this.context.warmth;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this._NgModel_61_6.model = currVal_47;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_47, currVal_47);
            this._expr_47 = currVal_47;
        }
        if ((changes !== null)) {
            this._NgModel_61_6.ngOnChanges(changes);
        }
        var currVal_54 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this._Icon_63_3.color = currVal_54;
            this._expr_54 = currVal_54;
        }
        var currVal_55 = 'thermometer';
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this._Icon_63_3.name = currVal_55;
            this._expr_55 = currVal_55;
        }
        var currVal_57 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this._Icon_65_3.color = currVal_57;
            this._expr_57 = currVal_57;
        }
        var currVal_58 = 'thermometer';
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this._Icon_65_3.name = currVal_58;
            this._expr_58 = currVal_58;
        }
        var currVal_60 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this._Badge_74_3.color = currVal_60;
            this._expr_60 = currVal_60;
        }
        var currVal_62 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this._Badge_77_3.color = currVal_62;
            this._expr_62 = currVal_62;
        }
        var currVal_66 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this._Range_83_4.color = currVal_66;
            this._expr_66 = currVal_66;
        }
        var currVal_67 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this._Range_83_4.pin = currVal_67;
            this._expr_67 = currVal_67;
        }
        var currVal_68 = 'true';
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this._Range_83_4.dualKnobs = currVal_68;
            this._expr_68 = currVal_68;
        }
        changes = null;
        var currVal_72 = this.context.structure;
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this._NgModel_83_6.model = currVal_72;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_72, currVal_72);
            this._expr_72 = currVal_72;
        }
        if ((changes !== null)) {
            this._NgModel_83_6.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_19_1.dirty) {
                this._query_Button_19_1.reset([]);
                this._Item_19_4._buttons = this._query_Button_19_1;
                this._query_Button_19_1.notifyOnChanges();
            }
            if (this._query_Icon_19_2.dirty) {
                this._query_Icon_19_2.reset([]);
                this._Item_19_4._icons = this._query_Icon_19_2;
                this._query_Icon_19_2.notifyOnChanges();
            }
            if (this._query_Button_32_1.dirty) {
                this._query_Button_32_1.reset([]);
                this._Item_32_4._buttons = this._query_Button_32_1;
                this._query_Button_32_1.notifyOnChanges();
            }
            if (this._query_Icon_32_2.dirty) {
                this._query_Icon_32_2.reset([]);
                this._Item_32_4._icons = this._query_Icon_32_2;
                this._query_Icon_32_2.notifyOnChanges();
            }
            if (this._query_Button_38_1.dirty) {
                this._query_Button_38_1.reset([]);
                this._Item_38_4._buttons = this._query_Button_38_1;
                this._query_Button_38_1.notifyOnChanges();
            }
            if (this._query_Icon_38_2.dirty) {
                this._query_Icon_38_2.reset([]);
                this._Item_38_4._icons = this._query_Icon_38_2;
                this._query_Icon_38_2.notifyOnChanges();
            }
            if (this._query_Button_53_1.dirty) {
                this._query_Button_53_1.reset([]);
                this._Item_53_4._buttons = this._query_Button_53_1;
                this._query_Button_53_1.notifyOnChanges();
            }
            if (this._query_Icon_53_2.dirty) {
                this._query_Icon_53_2.reset([]);
                this._Item_53_4._icons = this._query_Icon_53_2;
                this._query_Icon_53_2.notifyOnChanges();
            }
            if (this._query_Button_59_1.dirty) {
                this._query_Button_59_1.reset([]);
                this._Item_59_4._buttons = this._query_Button_59_1;
                this._query_Button_59_1.notifyOnChanges();
            }
            if (this._query_Icon_59_2.dirty) {
                this._query_Icon_59_2.reset([]);
                this._Item_59_4._icons = this._query_Icon_59_2;
                this._query_Icon_59_2.notifyOnChanges();
            }
            if (this._query_Button_72_1.dirty) {
                this._query_Button_72_1.reset([]);
                this._Item_72_4._buttons = this._query_Button_72_1;
                this._query_Button_72_1.notifyOnChanges();
            }
            if (this._query_Icon_72_2.dirty) {
                this._query_Icon_72_2.reset([]);
                this._Item_72_4._icons = this._query_Icon_72_2;
                this._query_Icon_72_2.notifyOnChanges();
            }
            if (this._query_Button_81_1.dirty) {
                this._query_Button_81_1.reset([]);
                this._Item_81_4._buttons = this._query_Button_81_1;
                this._query_Button_81_1.notifyOnChanges();
            }
            if (this._query_Icon_81_2.dirty) {
                this._query_Icon_81_2.reset([]);
                this._Item_81_4._icons = this._query_Icon_81_2;
                this._query_Icon_81_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_19_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_38_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_53_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_59_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_72_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_81_4.ngAfterContentInit();
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
        var currVal_3 = import4.interpolate(1, '', this.context.brightness, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_16, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._Range_21_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_21, 'range-disabled', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Range_21_4._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_21, 'range-pressed', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Range_21_4._pin;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_21, 'range-has-pin', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._NgControlStatus_21_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_21_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_21_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_21_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_21_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_21_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_16 = this._Icon_23_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = this._Icon_25_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_25, 'hide', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_20 = import4.interpolate(1, '', this.context.saturation, '');
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_35, currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_26 = this._Range_40_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_40, 'range-disabled', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._Range_40_4._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_40, 'range-pressed', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._Range_40_4._pin;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_40, 'range-has-pin', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_30 = this._NgControlStatus_40_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_40, 'ng-untouched', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._NgControlStatus_40_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_40, 'ng-touched', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_40_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_40, 'ng-pristine', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this._NgControlStatus_40_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_40, 'ng-dirty', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this._NgControlStatus_40_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_40, 'ng-valid', currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = this._NgControlStatus_40_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_40, 'ng-invalid', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_37 = import4.interpolate(1, '', this.context.warmth, '');
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_56, currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_44 = this._Range_61_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_61, 'range-disabled', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._Range_61_4._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_61, 'range-pressed', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = this._Range_61_4._pin;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementClass(this._el_61, 'range-has-pin', currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_48 = this._NgControlStatus_61_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementClass(this._el_61, 'ng-untouched', currVal_48);
            this._expr_48 = currVal_48;
        }
        var currVal_49 = this._NgControlStatus_61_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_61, 'ng-touched', currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_50 = this._NgControlStatus_61_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setElementClass(this._el_61, 'ng-pristine', currVal_50);
            this._expr_50 = currVal_50;
        }
        var currVal_51 = this._NgControlStatus_61_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_61, 'ng-dirty', currVal_51);
            this._expr_51 = currVal_51;
        }
        var currVal_52 = this._NgControlStatus_61_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementClass(this._el_61, 'ng-valid', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_53 = this._NgControlStatus_61_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_61, 'ng-invalid', currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_56 = this._Icon_63_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_63, 'hide', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_59 = this._Icon_65_3._hidden;
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
        var currVal_69 = this._Range_83_4._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_83, 'range-disabled', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._Range_83_4._pressed;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementClass(this._el_83, 'range-pressed', currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_71 = this._Range_83_4._pin;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_83, 'range-has-pin', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_73 = this._NgControlStatus_83_8.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_83, 'ng-untouched', currVal_73);
            this._expr_73 = currVal_73;
        }
        var currVal_74 = this._NgControlStatus_83_8.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setElementClass(this._el_83, 'ng-touched', currVal_74);
            this._expr_74 = currVal_74;
        }
        var currVal_75 = this._NgControlStatus_83_8.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this.renderer.setElementClass(this._el_83, 'ng-pristine', currVal_75);
            this._expr_75 = currVal_75;
        }
        var currVal_76 = this._NgControlStatus_83_8.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setElementClass(this._el_83, 'ng-dirty', currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_77 = this._NgControlStatus_83_8.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_83, 'ng-valid', currVal_77);
            this._expr_77 = currVal_77;
        }
        var currVal_78 = this._NgControlStatus_83_8.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementClass(this._el_83, 'ng-invalid', currVal_78);
            this._expr_78 = currVal_78;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_21_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_40_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_61_4.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Range_83_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_23_3.ngOnDestroy();
        this._Icon_25_3.ngOnDestroy();
        this._Range_21_4.ngOnDestroy();
        this._NgModel_21_6.ngOnDestroy();
        this._Range_40_4.ngOnDestroy();
        this._NgModel_40_6.ngOnDestroy();
        this._Icon_63_3.ngOnDestroy();
        this._Icon_65_3.ngOnDestroy();
        this._Range_61_4.ngOnDestroy();
        this._NgModel_61_6.ngOnDestroy();
        this._Range_83_4.ngOnDestroy();
        this._NgModel_83_6.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
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
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/range/page.html', 0, import8.ViewEncapsulation.Emulated, styles_ApiDemoPage, {}));
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
        var compView_0 = import42.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import41.Nav(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import43.NavControllerBase, null), this.parentInjector.get(import28.App), this.parentInjector.get(import24.Config), this.parentInjector.get(import32.Keyboard), new import25.ElementRef(this._el_0), this.parentInjector.get(import33.NgZone), this.renderer, this.parentInjector.get(import44.ComponentFactoryResolver), this.parentInjector.get(import35.GestureController), this.parentInjector.get(import45.TransitionController), this.parentInjector.get(import46.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import41.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/range/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
