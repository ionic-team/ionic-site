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
import * as import18 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/datetime/datetime.ngfactory';
import * as import20 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/navigation/nav-controller';
import * as import27 from 'ionic-angular/components/toolbar/toolbar';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from 'ionic-angular/components/picker/picker';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from 'ionic-angular/components/list/list-header';
import * as import38 from 'ionic-angular/components/label/label';
import * as import39 from 'ionic-angular/components/datetime/datetime';
import * as import40 from '@angular/forms/src/directives/control_value_accessor';
import * as import41 from '@angular/forms/src/directives/ng_model';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from '@angular/forms/src/directives/ng_control_status';
import * as import44 from 'ionic-angular/components/list/list';
import * as import45 from 'ionic-angular/components/content/content';
import * as import46 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import47 from 'ionic-angular/navigation/nav-controller-base';
import * as import48 from '@angular/core/src/linker/component_factory_resolver';
import * as import49 from 'ionic-angular/transitions/transition-controller';
import * as import50 from 'ionic-angular/navigation/deep-linker';
import * as import51 from 'ionic-angular/components/nav/nav';
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
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import24.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import25.App), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import26.NavController, null), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import27.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'DateTime', null);
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
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import25.App), this.parentInjector.get(import28.Keyboard), this.parentInjector.get(import29.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import17.QueryList();
        this._query_Button_13_1 = new import17.QueryList();
        this._query_Icon_13_2 = new import17.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Web Release Dates', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'item item-block');
        this._appEl_16 = new import3.AppElement(16, 11, this, this._el_16);
        var compView_16 = import15.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import15.Wrapper_ItemContent();
        this._query_Label_16_0 = new import17.QueryList();
        this._query_Button_16_1 = new import17.QueryList();
        this._query_Icon_16_2 = new import17.QueryList();
        this._appEl_16.initComponent(this._Item_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_18_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_18), this.renderer, null, null, null, null);
        this._text_19 = this.renderer.createText(this._el_18, 'World Wide Web', null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_21, 'displayFormat', 'YYYY');
        this.renderer.setElementAttribute(this._el_21, 'max', '2002');
        this.renderer.setElementAttribute(this._el_21, 'min', '1981');
        this._appEl_21 = new import3.AppElement(21, 16, this, this._el_21);
        var compView_21 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(21), this._appEl_21);
        this._DateTime_21_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_21), this.renderer, this._Item_16_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_21_5 = [this._DateTime_21_4.context];
        this._NgModel_21_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_21_5);
        this._NgControl_21_7 = this._NgModel_21_6.context;
        this._NgControlStatus_21_8 = new import21.Wrapper_NgControlStatus(this._NgControl_21_7);
        this._appEl_21.initComponent(this._DateTime_21_4.context, [], compView_21);
        compView_21.create(this._DateTime_21_4.context, [], null);
        this._text_22 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_16_0.reset([this._Label_18_3.context]);
        this._Item_16_4.context.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4.context, [
            [],
            [].concat([this._el_18]),
            [].concat([
                this._text_17,
                this._text_20,
                this._text_22
            ]),
            [].concat([this._el_21]),
            []
        ], null);
        this._text_23 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'item item-block');
        this._appEl_24 = new import3.AppElement(24, 11, this, this._el_24);
        var compView_24 = import15.viewFactory_Item0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Item_24_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_24), this.renderer);
        this._ItemContent_24_5 = new import15.Wrapper_ItemContent();
        this._query_Label_24_0 = new import17.QueryList();
        this._query_Button_24_1 = new import17.QueryList();
        this._query_Icon_24_2 = new import17.QueryList();
        this._appEl_24.initComponent(this._Item_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_26_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_26), this.renderer, null, null, null, null);
        this._text_27 = this.renderer.createText(this._el_26, 'Netscape', null);
        this._text_28 = this.renderer.createText(null, '\n      ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_29, 'displayFormat', 'MMMM YY');
        this.renderer.setElementAttribute(this._el_29, 'max', '2004');
        this.renderer.setElementAttribute(this._el_29, 'min', '1989');
        this._appEl_29 = new import3.AppElement(29, 24, this, this._el_29);
        var compView_29 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(29), this._appEl_29);
        this._DateTime_29_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_29), this.renderer, this._Item_24_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_29_5 = [this._DateTime_29_4.context];
        this._NgModel_29_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_29_5);
        this._NgControl_29_7 = this._NgModel_29_6.context;
        this._NgControlStatus_29_8 = new import21.Wrapper_NgControlStatus(this._NgControl_29_7);
        this._appEl_29.initComponent(this._DateTime_29_4.context, [], compView_29);
        compView_29.create(this._DateTime_29_4.context, [], null);
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
        this._text_31 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_32 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item item-block');
        this._appEl_32 = new import3.AppElement(32, 11, this, this._el_32);
        var compView_32 = import15.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_32), this.renderer);
        this._ItemContent_32_5 = new import15.Wrapper_ItemContent();
        this._query_Label_32_0 = new import17.QueryList();
        this._query_Button_32_1 = new import17.QueryList();
        this._query_Icon_32_2 = new import17.QueryList();
        this._appEl_32.initComponent(this._Item_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_34_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_34), this.renderer, null, null, null, null);
        this._text_35 = this.renderer.createText(this._el_34, 'Opera', null);
        this._text_36 = this.renderer.createText(null, '\n      ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_37, 'displayFormat', 'DDD DD.MM.YY');
        this.renderer.setElementAttribute(this._el_37, 'max', '2000');
        this.renderer.setElementAttribute(this._el_37, 'min', '1990');
        this._appEl_37 = new import3.AppElement(37, 32, this, this._el_37);
        var compView_37 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(37), this._appEl_37);
        this._DateTime_37_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_37), this.renderer, this._Item_32_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_37_5 = [this._DateTime_37_4.context];
        this._NgModel_37_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_37_5);
        this._NgControl_37_7 = this._NgModel_37_6.context;
        this._NgControlStatus_37_8 = new import21.Wrapper_NgControlStatus(this._NgControl_37_7);
        this._appEl_37.initComponent(this._DateTime_37_4.context, [], compView_37);
        compView_37.create(this._DateTime_37_4.context, [], null);
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
        this._text_39 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_40 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_40, 'class', 'item item-block');
        this._appEl_40 = new import3.AppElement(40, 11, this, this._el_40);
        var compView_40 = import15.viewFactory_Item0(this.viewUtils, this.injector(40), this._appEl_40);
        this._Item_40_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_40), this.renderer);
        this._ItemContent_40_5 = new import15.Wrapper_ItemContent();
        this._query_Label_40_0 = new import17.QueryList();
        this._query_Button_40_1 = new import17.QueryList();
        this._query_Icon_40_2 = new import17.QueryList();
        this._appEl_40.initComponent(this._Item_40_4.context, [], compView_40);
        this._text_41 = this.renderer.createText(null, '\n      ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_42_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_42), this.renderer, null, null, null, null);
        this._text_43 = this.renderer.createText(this._el_42, 'Webkit', null);
        this._text_44 = this.renderer.createText(null, '\n      ', null);
        this._el_45 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_45, 'displayFormat', 'D MMM YYYY');
        this.renderer.setElementAttribute(this._el_45, 'max', '2010-10');
        this.renderer.setElementAttribute(this._el_45, 'min', '1990-02');
        this._appEl_45 = new import3.AppElement(45, 40, this, this._el_45);
        var compView_45 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(45), this._appEl_45);
        this._DateTime_45_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_45), this.renderer, this._Item_40_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_45_5 = [this._DateTime_45_4.context];
        this._NgModel_45_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_45_5);
        this._NgControl_45_7 = this._NgModel_45_6.context;
        this._NgControlStatus_45_8 = new import21.Wrapper_NgControlStatus(this._NgControl_45_7);
        this._appEl_45.initComponent(this._DateTime_45_4.context, [], compView_45);
        compView_45.create(this._DateTime_45_4.context, [], null);
        this._text_46 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_40_0.reset([this._Label_42_3.context]);
        this._Item_40_4.context.contentLabel = this._query_Label_40_0.first;
        compView_40.create(this._Item_40_4.context, [
            [],
            [].concat([this._el_42]),
            [].concat([
                this._text_41,
                this._text_44,
                this._text_46
            ]),
            [].concat([this._el_45]),
            []
        ], null);
        this._text_47 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_48 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_48, 'class', 'item item-block');
        this._appEl_48 = new import3.AppElement(48, 11, this, this._el_48);
        var compView_48 = import15.viewFactory_Item0(this.viewUtils, this.injector(48), this._appEl_48);
        this._Item_48_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_48), this.renderer);
        this._ItemContent_48_5 = new import15.Wrapper_ItemContent();
        this._query_Label_48_0 = new import17.QueryList();
        this._query_Button_48_1 = new import17.QueryList();
        this._query_Icon_48_2 = new import17.QueryList();
        this._appEl_48.initComponent(this._Item_48_4.context, [], compView_48);
        this._text_49 = this.renderer.createText(null, '\n      ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_50_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_50), this.renderer, null, null, null, null);
        this._text_51 = this.renderer.createText(this._el_50, 'Firefox', null);
        this._text_52 = this.renderer.createText(null, '\n      ', null);
        this._el_53 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_53, 'displayFormat', 'MMM DD, YYYY');
        this.renderer.setElementAttribute(this._el_53, 'max', '2012-12-09');
        this.renderer.setElementAttribute(this._el_53, 'min', '1994-03-14');
        this._appEl_53 = new import3.AppElement(53, 48, this, this._el_53);
        var compView_53 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(53), this._appEl_53);
        this._DateTime_53_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_53), this.renderer, this._Item_48_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_53_5 = [this._DateTime_53_4.context];
        this._NgModel_53_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_53_5);
        this._NgControl_53_7 = this._NgModel_53_6.context;
        this._NgControlStatus_53_8 = new import21.Wrapper_NgControlStatus(this._NgControl_53_7);
        this._appEl_53.initComponent(this._DateTime_53_4.context, [], compView_53);
        compView_53.create(this._DateTime_53_4.context, [], null);
        this._text_54 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_48_0.reset([this._Label_50_3.context]);
        this._Item_48_4.context.contentLabel = this._query_Label_48_0.first;
        compView_48.create(this._Item_48_4.context, [
            [],
            [].concat([this._el_50]),
            [].concat([
                this._text_49,
                this._text_52,
                this._text_54
            ]),
            [].concat([this._el_53]),
            []
        ], null);
        this._text_55 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_56 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_56, 'class', 'item item-block');
        this._appEl_56 = new import3.AppElement(56, 11, this, this._el_56);
        var compView_56 = import15.viewFactory_Item0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Item_56_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_56), this.renderer);
        this._ItemContent_56_5 = new import15.Wrapper_ItemContent();
        this._query_Label_56_0 = new import17.QueryList();
        this._query_Button_56_1 = new import17.QueryList();
        this._query_Icon_56_2 = new import17.QueryList();
        this._appEl_56.initComponent(this._Item_56_4.context, [], compView_56);
        this._text_57 = this.renderer.createText(null, '\n      ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_58_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_58), this.renderer, null, null, null, null);
        this._text_59 = this.renderer.createText(this._el_58, 'Chrome', null);
        this._text_60 = this.renderer.createText(null, '\n      ', null);
        this._el_61 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_61, 'displayFormat', 'DDDD MMM D');
        this.renderer.setElementAttribute(this._el_61, 'max', '2016');
        this.renderer.setElementAttribute(this._el_61, 'min', '2005');
        this._appEl_61 = new import3.AppElement(61, 56, this, this._el_61);
        var compView_61 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(61), this._appEl_61);
        this._DateTime_61_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_61), this.renderer, this._Item_56_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_61_5 = [this._DateTime_61_4.context];
        this._NgModel_61_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_61_5);
        this._NgControl_61_7 = this._NgModel_61_6.context;
        this._NgControlStatus_61_8 = new import21.Wrapper_NgControlStatus(this._NgControl_61_7);
        this._appEl_61.initComponent(this._DateTime_61_4.context, [], compView_61);
        compView_61.create(this._DateTime_61_4.context, [], null);
        this._text_62 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_56_0.reset([this._Label_58_3.context]);
        this._Item_56_4.context.contentLabel = this._query_Label_56_0.first;
        compView_56.create(this._Item_56_4.context, [
            [],
            [].concat([this._el_58]),
            [].concat([
                this._text_57,
                this._text_60,
                this._text_62
            ]),
            [].concat([this._el_61]),
            []
        ], null);
        this._text_63 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_64 = this.renderer.createText(null, '\n\n  ', null);
        this._el_65 = this.renderer.createElement(null, 'ion-list', null);
        this._List_65_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_65), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_66 = this.renderer.createText(this._el_65, '\n    ', null);
        this._el_67 = this.renderer.createElement(this._el_65, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_67, 'class', 'item');
        this._appEl_67 = new import3.AppElement(67, 65, this, this._el_67);
        var compView_67 = import15.viewFactory_Item0(this.viewUtils, this.injector(67), this._appEl_67);
        this._Item_67_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_67), this.renderer);
        this._ListHeader_67_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_67), null);
        this._query_Label_67_0 = new import17.QueryList();
        this._query_Button_67_1 = new import17.QueryList();
        this._query_Icon_67_2 = new import17.QueryList();
        this._appEl_67.initComponent(this._Item_67_4.context, [], compView_67);
        this._text_68 = this.renderer.createText(null, 'World Times', null);
        this._query_Label_67_0.reset([]);
        this._Item_67_4.context.contentLabel = this._query_Label_67_0.first;
        compView_67.create(this._Item_67_4.context, [
            [],
            [],
            [].concat([this._text_68]),
            [],
            []
        ], null);
        this._text_69 = this.renderer.createText(this._el_65, '\n\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_65, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_70, 'class', 'item item-block');
        this._appEl_70 = new import3.AppElement(70, 65, this, this._el_70);
        var compView_70 = import15.viewFactory_Item0(this.viewUtils, this.injector(70), this._appEl_70);
        this._Item_70_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_70), this.renderer);
        this._ItemContent_70_5 = new import15.Wrapper_ItemContent();
        this._query_Label_70_0 = new import17.QueryList();
        this._query_Button_70_1 = new import17.QueryList();
        this._query_Icon_70_2 = new import17.QueryList();
        this._appEl_70.initComponent(this._Item_70_4.context, [], compView_70);
        this._text_71 = this.renderer.createText(null, '\n      ', null);
        this._el_72 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_72_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_72), this.renderer, null, null, null, null);
        this._text_73 = this.renderer.createText(this._el_72, 'Tokyo', null);
        this._text_74 = this.renderer.createText(null, '\n      ', null);
        this._el_75 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_75, 'displayFormat', 'hh:mm A');
        this._appEl_75 = new import3.AppElement(75, 70, this, this._el_75);
        var compView_75 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(75), this._appEl_75);
        this._DateTime_75_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_75), this.renderer, this._Item_70_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_75_5 = [this._DateTime_75_4.context];
        this._NgModel_75_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_75_5);
        this._NgControl_75_7 = this._NgModel_75_6.context;
        this._NgControlStatus_75_8 = new import21.Wrapper_NgControlStatus(this._NgControl_75_7);
        this._appEl_75.initComponent(this._DateTime_75_4.context, [], compView_75);
        compView_75.create(this._DateTime_75_4.context, [], null);
        this._text_76 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_70_0.reset([this._Label_72_3.context]);
        this._Item_70_4.context.contentLabel = this._query_Label_70_0.first;
        compView_70.create(this._Item_70_4.context, [
            [],
            [].concat([this._el_72]),
            [].concat([
                this._text_71,
                this._text_74,
                this._text_76
            ]),
            [].concat([this._el_75]),
            []
        ], null);
        this._text_77 = this.renderer.createText(this._el_65, '\n\n    ', null);
        this._el_78 = this.renderer.createElement(this._el_65, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_78, 'class', 'item item-block');
        this._appEl_78 = new import3.AppElement(78, 65, this, this._el_78);
        var compView_78 = import15.viewFactory_Item0(this.viewUtils, this.injector(78), this._appEl_78);
        this._Item_78_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_78), this.renderer);
        this._ItemContent_78_5 = new import15.Wrapper_ItemContent();
        this._query_Label_78_0 = new import17.QueryList();
        this._query_Button_78_1 = new import17.QueryList();
        this._query_Icon_78_2 = new import17.QueryList();
        this._appEl_78.initComponent(this._Item_78_4.context, [], compView_78);
        this._text_79 = this.renderer.createText(null, '\n      ', null);
        this._el_80 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_80_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_80), this.renderer, null, null, null, null);
        this._text_81 = this.renderer.createText(this._el_80, 'Paris', null);
        this._text_82 = this.renderer.createText(null, '\n      ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_83, 'displayFormat', 'HH:mm');
        this._appEl_83 = new import3.AppElement(83, 78, this, this._el_83);
        var compView_83 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(83), this._appEl_83);
        this._DateTime_83_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_83), this.renderer, this._Item_78_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_83_5 = [this._DateTime_83_4.context];
        this._NgModel_83_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_83_5);
        this._NgControl_83_7 = this._NgModel_83_6.context;
        this._NgControlStatus_83_8 = new import21.Wrapper_NgControlStatus(this._NgControl_83_7);
        this._appEl_83.initComponent(this._DateTime_83_4.context, [], compView_83);
        compView_83.create(this._DateTime_83_4.context, [], null);
        this._text_84 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_78_0.reset([this._Label_80_3.context]);
        this._Item_78_4.context.contentLabel = this._query_Label_78_0.first;
        compView_78.create(this._Item_78_4.context, [
            [],
            [].concat([this._el_80]),
            [].concat([
                this._text_79,
                this._text_82,
                this._text_84
            ]),
            [].concat([this._el_83]),
            []
        ], null);
        this._text_85 = this.renderer.createText(this._el_65, '\n\n    ', null);
        this._el_86 = this.renderer.createElement(this._el_65, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_86, 'class', 'item item-block');
        this._appEl_86 = new import3.AppElement(86, 65, this, this._el_86);
        var compView_86 = import15.viewFactory_Item0(this.viewUtils, this.injector(86), this._appEl_86);
        this._Item_86_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_86), this.renderer);
        this._ItemContent_86_5 = new import15.Wrapper_ItemContent();
        this._query_Label_86_0 = new import17.QueryList();
        this._query_Button_86_1 = new import17.QueryList();
        this._query_Icon_86_2 = new import17.QueryList();
        this._appEl_86.initComponent(this._Item_86_4.context, [], compView_86);
        this._text_87 = this.renderer.createText(null, '\n      ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_88_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_88), this.renderer, null, null, null, null);
        this._text_89 = this.renderer.createText(this._el_88, 'Madison', null);
        this._text_90 = this.renderer.createText(null, '\n      ', null);
        this._el_91 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_91, 'displayFormat', 'h:mm a');
        this._appEl_91 = new import3.AppElement(91, 86, this, this._el_91);
        var compView_91 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(91), this._appEl_91);
        this._DateTime_91_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_91), this.renderer, this._Item_86_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_91_5 = [this._DateTime_91_4.context];
        this._NgModel_91_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_91_5);
        this._NgControl_91_7 = this._NgModel_91_6.context;
        this._NgControlStatus_91_8 = new import21.Wrapper_NgControlStatus(this._NgControl_91_7);
        this._appEl_91.initComponent(this._DateTime_91_4.context, [], compView_91);
        compView_91.create(this._DateTime_91_4.context, [], null);
        this._text_92 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_86_0.reset([this._Label_88_3.context]);
        this._Item_86_4.context.contentLabel = this._query_Label_86_0.first;
        compView_86.create(this._Item_86_4.context, [
            [],
            [].concat([this._el_88]),
            [].concat([
                this._text_87,
                this._text_90,
                this._text_92
            ]),
            [].concat([this._el_91]),
            []
        ], null);
        this._text_93 = this.renderer.createText(this._el_65, '\n\n  ', null);
        this._text_94 = this.renderer.createText(null, '\n\n  ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-list', null);
        this._List_95_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_95), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_96 = this.renderer.createText(this._el_95, '\n    ', null);
        this._el_97 = this.renderer.createElement(this._el_95, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_97, 'class', 'item');
        this._appEl_97 = new import3.AppElement(97, 95, this, this._el_97);
        var compView_97 = import15.viewFactory_Item0(this.viewUtils, this.injector(97), this._appEl_97);
        this._Item_97_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_97), this.renderer);
        this._ListHeader_97_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_97), null);
        this._query_Label_97_0 = new import17.QueryList();
        this._query_Button_97_1 = new import17.QueryList();
        this._query_Icon_97_2 = new import17.QueryList();
        this._appEl_97.initComponent(this._Item_97_4.context, [], compView_97);
        this._text_98 = this.renderer.createText(null, 'Set Alarm', null);
        this._query_Label_97_0.reset([]);
        this._Item_97_4.context.contentLabel = this._query_Label_97_0.first;
        compView_97.create(this._Item_97_4.context, [
            [],
            [],
            [].concat([this._text_98]),
            [],
            []
        ], null);
        this._text_99 = this.renderer.createText(this._el_95, '\n\n    ', null);
        this._el_100 = this.renderer.createElement(this._el_95, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_100, 'class', 'item item-block');
        this._appEl_100 = new import3.AppElement(100, 95, this, this._el_100);
        var compView_100 = import15.viewFactory_Item0(this.viewUtils, this.injector(100), this._appEl_100);
        this._Item_100_4 = new import15.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_100), this.renderer);
        this._ItemContent_100_5 = new import15.Wrapper_ItemContent();
        this._query_Label_100_0 = new import17.QueryList();
        this._query_Button_100_1 = new import17.QueryList();
        this._query_Icon_100_2 = new import17.QueryList();
        this._appEl_100.initComponent(this._Item_100_4.context, [], compView_100);
        this._text_101 = this.renderer.createText(null, '\n      ', null);
        this._el_102 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_102_3 = new import18.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_102), this.renderer, null, null, null, null);
        this._text_103 = this.renderer.createText(this._el_102, 'Alert', null);
        this._text_104 = this.renderer.createText(null, '\n      ', null);
        this._el_105 = this.renderer.createElement(null, 'ion-datetime', null);
        this.renderer.setElementAttribute(this._el_105, 'displayFormat', 'mm');
        this.renderer.setElementAttribute(this._el_105, 'minuteValues', '0,15,30,45');
        this._appEl_105 = new import3.AppElement(105, 100, this, this._el_105);
        var compView_105 = import19.viewFactory_DateTime0(this.viewUtils, this.injector(105), this._appEl_105);
        this._DateTime_105_4 = new import19.Wrapper_DateTime(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_105), this.renderer, this._Item_100_4.context, this.parentInjector.get(import33.PickerController, null));
        this._NG_VALUE_ACCESSOR_105_5 = [this._DateTime_105_4.context];
        this._NgModel_105_6 = new import20.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_105_5);
        this._NgControl_105_7 = this._NgModel_105_6.context;
        this._NgControlStatus_105_8 = new import21.Wrapper_NgControlStatus(this._NgControl_105_7);
        this._appEl_105.initComponent(this._DateTime_105_4.context, [], compView_105);
        compView_105.create(this._DateTime_105_4.context, [], null);
        this._text_106 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_100_0.reset([this._Label_102_3.context]);
        this._Item_100_4.context.contentLabel = this._query_Label_100_0.first;
        compView_100.create(this._Item_100_4.context, [
            [],
            [].concat([this._el_102]),
            [].concat([
                this._text_101,
                this._text_104,
                this._text_106
            ]),
            [].concat([this._el_105]),
            []
        ], null);
        this._text_107 = this.renderer.createText(this._el_95, '\n  ', null);
        this._text_108 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_64,
                this._el_65,
                this._text_94,
                this._el_95,
                this._text_108
            ]),
            []
        ], null);
        this._text_109 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_21, 'keyup.space', this.eventHandler(this._handle_keyup_space_21_2.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_21_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_29, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_29, 'click', this.eventHandler(this._handle_click_29_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_29, 'keyup.space', this.eventHandler(this._handle_keyup_space_29_2.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        var subscription_1 = this._NgModel_29_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_37, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_37, 'click', this.eventHandler(this._handle_click_37_1.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_37, 'keyup.space', this.eventHandler(this._handle_keyup_space_37_2.bind(this)));
        this._expr_38 = import7.UNINITIALIZED;
        var subscription_2 = this._NgModel_37_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_45, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_45_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_1.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_45, 'keyup.space', this.eventHandler(this._handle_keyup_space_45_2.bind(this)));
        this._expr_52 = import7.UNINITIALIZED;
        var subscription_3 = this._NgModel_45_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_45_0.bind(this)));
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_56 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_53, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_53_0.bind(this)));
        var disposable_13 = this.renderer.listen(this._el_53, 'click', this.eventHandler(this._handle_click_53_1.bind(this)));
        var disposable_14 = this.renderer.listen(this._el_53, 'keyup.space', this.eventHandler(this._handle_keyup_space_53_2.bind(this)));
        this._expr_66 = import7.UNINITIALIZED;
        var subscription_4 = this._NgModel_53_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_53_0.bind(this)));
        this._expr_68 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_72 = import7.UNINITIALIZED;
        this._expr_73 = import7.UNINITIALIZED;
        var disposable_15 = this.renderer.listen(this._el_61, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        var disposable_16 = this.renderer.listen(this._el_61, 'click', this.eventHandler(this._handle_click_61_1.bind(this)));
        var disposable_17 = this.renderer.listen(this._el_61, 'keyup.space', this.eventHandler(this._handle_keyup_space_61_2.bind(this)));
        this._expr_80 = import7.UNINITIALIZED;
        var subscription_5 = this._NgModel_61_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_61_0.bind(this)));
        this._expr_82 = import7.UNINITIALIZED;
        this._expr_83 = import7.UNINITIALIZED;
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        var disposable_18 = this.renderer.listen(this._el_75, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_75_0.bind(this)));
        var disposable_19 = this.renderer.listen(this._el_75, 'click', this.eventHandler(this._handle_click_75_1.bind(this)));
        var disposable_20 = this.renderer.listen(this._el_75, 'keyup.space', this.eventHandler(this._handle_keyup_space_75_2.bind(this)));
        this._expr_92 = import7.UNINITIALIZED;
        var subscription_6 = this._NgModel_75_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_75_0.bind(this)));
        this._expr_94 = import7.UNINITIALIZED;
        this._expr_95 = import7.UNINITIALIZED;
        this._expr_96 = import7.UNINITIALIZED;
        this._expr_97 = import7.UNINITIALIZED;
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        var disposable_21 = this.renderer.listen(this._el_83, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
        var disposable_22 = this.renderer.listen(this._el_83, 'click', this.eventHandler(this._handle_click_83_1.bind(this)));
        var disposable_23 = this.renderer.listen(this._el_83, 'keyup.space', this.eventHandler(this._handle_keyup_space_83_2.bind(this)));
        this._expr_104 = import7.UNINITIALIZED;
        var subscription_7 = this._NgModel_83_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_83_0.bind(this)));
        this._expr_106 = import7.UNINITIALIZED;
        this._expr_107 = import7.UNINITIALIZED;
        this._expr_108 = import7.UNINITIALIZED;
        this._expr_109 = import7.UNINITIALIZED;
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
        var disposable_24 = this.renderer.listen(this._el_91, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_91_0.bind(this)));
        var disposable_25 = this.renderer.listen(this._el_91, 'click', this.eventHandler(this._handle_click_91_1.bind(this)));
        var disposable_26 = this.renderer.listen(this._el_91, 'keyup.space', this.eventHandler(this._handle_keyup_space_91_2.bind(this)));
        this._expr_116 = import7.UNINITIALIZED;
        var subscription_8 = this._NgModel_91_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_91_0.bind(this)));
        this._expr_118 = import7.UNINITIALIZED;
        this._expr_119 = import7.UNINITIALIZED;
        this._expr_120 = import7.UNINITIALIZED;
        this._expr_121 = import7.UNINITIALIZED;
        this._expr_122 = import7.UNINITIALIZED;
        this._expr_123 = import7.UNINITIALIZED;
        var disposable_27 = this.renderer.listen(this._el_105, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_105_0.bind(this)));
        var disposable_28 = this.renderer.listen(this._el_105, 'click', this.eventHandler(this._handle_click_105_1.bind(this)));
        var disposable_29 = this.renderer.listen(this._el_105, 'keyup.space', this.eventHandler(this._handle_keyup_space_105_2.bind(this)));
        this._expr_129 = import7.UNINITIALIZED;
        var subscription_9 = this._NgModel_105_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_105_0.bind(this)));
        this._expr_131 = import7.UNINITIALIZED;
        this._expr_132 = import7.UNINITIALIZED;
        this._expr_133 = import7.UNINITIALIZED;
        this._expr_134 = import7.UNINITIALIZED;
        this._expr_135 = import7.UNINITIALIZED;
        this._expr_136 = import7.UNINITIALIZED;
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
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
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
            this._text_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._el_91,
            this._text_92,
            this._text_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._text_99,
            this._el_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._text_104,
            this._el_105,
            this._text_106,
            this._text_107,
            this._text_108,
            this._text_109
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
            disposable_23,
            disposable_24,
            disposable_25,
            disposable_26,
            disposable_27,
            disposable_28,
            disposable_29
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
            subscription_9
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import34.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import35.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import27.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import36.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4.context;
        }
        if (((token === import37.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5.context;
        }
        if (((token === import38.Label) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Label_18_3.context;
        }
        if (((token === import39.DateTime) && (21 === requestNodeIndex))) {
            return this._DateTime_21_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_21_5;
        }
        if (((token === import41.NgModel) && (21 === requestNodeIndex))) {
            return this._NgModel_21_6.context;
        }
        if (((token === import42.NgControl) && (21 === requestNodeIndex))) {
            return this._NgControl_21_7;
        }
        if (((token === import43.NgControlStatus) && (21 === requestNodeIndex))) {
            return this._NgControlStatus_21_8.context;
        }
        if (((token === import36.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Item_16_4.context;
        }
        if (((token === import36.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._ItemContent_16_5.context;
        }
        if (((token === import38.Label) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Label_26_3.context;
        }
        if (((token === import39.DateTime) && (29 === requestNodeIndex))) {
            return this._DateTime_29_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (29 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_29_5;
        }
        if (((token === import41.NgModel) && (29 === requestNodeIndex))) {
            return this._NgModel_29_6.context;
        }
        if (((token === import42.NgControl) && (29 === requestNodeIndex))) {
            return this._NgControl_29_7;
        }
        if (((token === import43.NgControlStatus) && (29 === requestNodeIndex))) {
            return this._NgControlStatus_29_8.context;
        }
        if (((token === import36.Item) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Item_24_4.context;
        }
        if (((token === import36.ItemContent) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ItemContent_24_5.context;
        }
        if (((token === import38.Label) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Label_34_3.context;
        }
        if (((token === import39.DateTime) && (37 === requestNodeIndex))) {
            return this._DateTime_37_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (37 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_37_5;
        }
        if (((token === import41.NgModel) && (37 === requestNodeIndex))) {
            return this._NgModel_37_6.context;
        }
        if (((token === import42.NgControl) && (37 === requestNodeIndex))) {
            return this._NgControl_37_7;
        }
        if (((token === import43.NgControlStatus) && (37 === requestNodeIndex))) {
            return this._NgControlStatus_37_8.context;
        }
        if (((token === import36.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Item_32_4.context;
        }
        if (((token === import36.ItemContent) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ItemContent_32_5.context;
        }
        if (((token === import38.Label) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._Label_42_3.context;
        }
        if (((token === import39.DateTime) && (45 === requestNodeIndex))) {
            return this._DateTime_45_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (45 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_45_5;
        }
        if (((token === import41.NgModel) && (45 === requestNodeIndex))) {
            return this._NgModel_45_6.context;
        }
        if (((token === import42.NgControl) && (45 === requestNodeIndex))) {
            return this._NgControl_45_7;
        }
        if (((token === import43.NgControlStatus) && (45 === requestNodeIndex))) {
            return this._NgControlStatus_45_8.context;
        }
        if (((token === import36.Item) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Item_40_4.context;
        }
        if (((token === import36.ItemContent) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ItemContent_40_5.context;
        }
        if (((token === import38.Label) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._Label_50_3.context;
        }
        if (((token === import39.DateTime) && (53 === requestNodeIndex))) {
            return this._DateTime_53_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (53 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_53_5;
        }
        if (((token === import41.NgModel) && (53 === requestNodeIndex))) {
            return this._NgModel_53_6.context;
        }
        if (((token === import42.NgControl) && (53 === requestNodeIndex))) {
            return this._NgControl_53_7;
        }
        if (((token === import43.NgControlStatus) && (53 === requestNodeIndex))) {
            return this._NgControlStatus_53_8.context;
        }
        if (((token === import36.Item) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Item_48_4.context;
        }
        if (((token === import36.ItemContent) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._ItemContent_48_5.context;
        }
        if (((token === import38.Label) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Label_58_3.context;
        }
        if (((token === import39.DateTime) && (61 === requestNodeIndex))) {
            return this._DateTime_61_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (61 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_61_5;
        }
        if (((token === import41.NgModel) && (61 === requestNodeIndex))) {
            return this._NgModel_61_6.context;
        }
        if (((token === import42.NgControl) && (61 === requestNodeIndex))) {
            return this._NgControl_61_7;
        }
        if (((token === import43.NgControlStatus) && (61 === requestNodeIndex))) {
            return this._NgControlStatus_61_8.context;
        }
        if (((token === import36.Item) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._Item_56_4.context;
        }
        if (((token === import36.ItemContent) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._ItemContent_56_5.context;
        }
        if (((token === import44.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._List_11_3.context;
        }
        if (((token === import36.Item) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Item_67_4.context;
        }
        if (((token === import37.ListHeader) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ListHeader_67_5.context;
        }
        if (((token === import38.Label) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._Label_72_3.context;
        }
        if (((token === import39.DateTime) && (75 === requestNodeIndex))) {
            return this._DateTime_75_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (75 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_75_5;
        }
        if (((token === import41.NgModel) && (75 === requestNodeIndex))) {
            return this._NgModel_75_6.context;
        }
        if (((token === import42.NgControl) && (75 === requestNodeIndex))) {
            return this._NgControl_75_7;
        }
        if (((token === import43.NgControlStatus) && (75 === requestNodeIndex))) {
            return this._NgControlStatus_75_8.context;
        }
        if (((token === import36.Item) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._Item_70_4.context;
        }
        if (((token === import36.ItemContent) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._ItemContent_70_5.context;
        }
        if (((token === import38.Label) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 81)))) {
            return this._Label_80_3.context;
        }
        if (((token === import39.DateTime) && (83 === requestNodeIndex))) {
            return this._DateTime_83_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (83 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_83_5;
        }
        if (((token === import41.NgModel) && (83 === requestNodeIndex))) {
            return this._NgModel_83_6.context;
        }
        if (((token === import42.NgControl) && (83 === requestNodeIndex))) {
            return this._NgControl_83_7;
        }
        if (((token === import43.NgControlStatus) && (83 === requestNodeIndex))) {
            return this._NgControlStatus_83_8.context;
        }
        if (((token === import36.Item) && ((78 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Item_78_4.context;
        }
        if (((token === import36.ItemContent) && ((78 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._ItemContent_78_5.context;
        }
        if (((token === import38.Label) && ((88 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._Label_88_3.context;
        }
        if (((token === import39.DateTime) && (91 === requestNodeIndex))) {
            return this._DateTime_91_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (91 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_91_5;
        }
        if (((token === import41.NgModel) && (91 === requestNodeIndex))) {
            return this._NgModel_91_6.context;
        }
        if (((token === import42.NgControl) && (91 === requestNodeIndex))) {
            return this._NgControl_91_7;
        }
        if (((token === import43.NgControlStatus) && (91 === requestNodeIndex))) {
            return this._NgControlStatus_91_8.context;
        }
        if (((token === import36.Item) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._Item_86_4.context;
        }
        if (((token === import36.ItemContent) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._ItemContent_86_5.context;
        }
        if (((token === import44.List) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._List_65_3.context;
        }
        if (((token === import36.Item) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._Item_97_4.context;
        }
        if (((token === import37.ListHeader) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._ListHeader_97_5.context;
        }
        if (((token === import38.Label) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 103)))) {
            return this._Label_102_3.context;
        }
        if (((token === import39.DateTime) && (105 === requestNodeIndex))) {
            return this._DateTime_105_4.context;
        }
        if (((token === import40.NG_VALUE_ACCESSOR) && (105 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_105_5;
        }
        if (((token === import41.NgModel) && (105 === requestNodeIndex))) {
            return this._NgModel_105_6.context;
        }
        if (((token === import42.NgControl) && (105 === requestNodeIndex))) {
            return this._NgControl_105_7;
        }
        if (((token === import43.NgControlStatus) && (105 === requestNodeIndex))) {
            return this._NgControlStatus_105_8.context;
        }
        if (((token === import36.Item) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._Item_100_4.context;
        }
        if (((token === import36.ItemContent) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._ItemContent_100_5.context;
        }
        if (((token === import44.List) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 107)))) {
            return this._List_95_3.context;
        }
        if (((token === import45.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 108)))) {
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
        if (this._Item_16_4.detectChangesInternal(this, this._el_16, throwOnChange)) {
            this._appEl_16.componentView.markAsCheckOnce();
        }
        this._ItemContent_16_5.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Label_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_6 = '1981';
        this._DateTime_21_4.check_min(currVal_6, throwOnChange, false);
        var currVal_7 = '2002';
        this._DateTime_21_4.check_max(currVal_7, throwOnChange, false);
        var currVal_8 = 'YYYY';
        this._DateTime_21_4.check_displayFormat(currVal_8, throwOnChange, false);
        this._DateTime_21_4.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_10 = this.context.wwwReleased;
        this._NgModel_21_6.check_model(currVal_10, throwOnChange, false);
        this._NgModel_21_6.detectChangesInternal(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_8.detectChangesInternal(this, this._el_21, throwOnChange);
        if (this._Item_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        this._ItemContent_24_5.detectChangesInternal(this, this._el_24, throwOnChange);
        this._Label_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        var currVal_20 = '1989';
        this._DateTime_29_4.check_min(currVal_20, throwOnChange, false);
        var currVal_21 = '2004';
        this._DateTime_29_4.check_max(currVal_21, throwOnChange, false);
        var currVal_22 = 'MMMM YY';
        this._DateTime_29_4.check_displayFormat(currVal_22, throwOnChange, false);
        this._DateTime_29_4.detectChangesInternal(this, this._el_29, throwOnChange);
        var currVal_24 = this.context.netscapeReleased;
        this._NgModel_29_6.check_model(currVal_24, throwOnChange, false);
        this._NgModel_29_6.detectChangesInternal(this, this._el_29, throwOnChange);
        this._NgControlStatus_29_8.detectChangesInternal(this, this._el_29, throwOnChange);
        if (this._Item_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._ItemContent_32_5.detectChangesInternal(this, this._el_32, throwOnChange);
        this._Label_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        var currVal_34 = '1990';
        this._DateTime_37_4.check_min(currVal_34, throwOnChange, false);
        var currVal_35 = '2000';
        this._DateTime_37_4.check_max(currVal_35, throwOnChange, false);
        var currVal_36 = 'DDD DD.MM.YY';
        this._DateTime_37_4.check_displayFormat(currVal_36, throwOnChange, false);
        var currVal_37 = this.context.operaShortDay;
        this._DateTime_37_4.check_dayShortNames(currVal_37, throwOnChange, false);
        this._DateTime_37_4.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_39 = this.context.operaReleased;
        this._NgModel_37_6.check_model(currVal_39, throwOnChange, false);
        this._NgModel_37_6.detectChangesInternal(this, this._el_37, throwOnChange);
        this._NgControlStatus_37_8.detectChangesInternal(this, this._el_37, throwOnChange);
        if (this._Item_40_4.detectChangesInternal(this, this._el_40, throwOnChange)) {
            this._appEl_40.componentView.markAsCheckOnce();
        }
        this._ItemContent_40_5.detectChangesInternal(this, this._el_40, throwOnChange);
        this._Label_42_3.detectChangesInternal(this, this._el_42, throwOnChange);
        var currVal_49 = '1990-02';
        this._DateTime_45_4.check_min(currVal_49, throwOnChange, false);
        var currVal_50 = '2010-10';
        this._DateTime_45_4.check_max(currVal_50, throwOnChange, false);
        var currVal_51 = 'D MMM YYYY';
        this._DateTime_45_4.check_displayFormat(currVal_51, throwOnChange, false);
        this._DateTime_45_4.detectChangesInternal(this, this._el_45, throwOnChange);
        var currVal_53 = this.context.webkitReleased;
        this._NgModel_45_6.check_model(currVal_53, throwOnChange, false);
        this._NgModel_45_6.detectChangesInternal(this, this._el_45, throwOnChange);
        this._NgControlStatus_45_8.detectChangesInternal(this, this._el_45, throwOnChange);
        if (this._Item_48_4.detectChangesInternal(this, this._el_48, throwOnChange)) {
            this._appEl_48.componentView.markAsCheckOnce();
        }
        this._ItemContent_48_5.detectChangesInternal(this, this._el_48, throwOnChange);
        this._Label_50_3.detectChangesInternal(this, this._el_50, throwOnChange);
        var currVal_63 = '1994-03-14';
        this._DateTime_53_4.check_min(currVal_63, throwOnChange, false);
        var currVal_64 = '2012-12-09';
        this._DateTime_53_4.check_max(currVal_64, throwOnChange, false);
        var currVal_65 = 'MMM DD, YYYY';
        this._DateTime_53_4.check_displayFormat(currVal_65, throwOnChange, false);
        this._DateTime_53_4.detectChangesInternal(this, this._el_53, throwOnChange);
        var currVal_67 = this.context.firefoxReleased;
        this._NgModel_53_6.check_model(currVal_67, throwOnChange, false);
        this._NgModel_53_6.detectChangesInternal(this, this._el_53, throwOnChange);
        this._NgControlStatus_53_8.detectChangesInternal(this, this._el_53, throwOnChange);
        if (this._Item_56_4.detectChangesInternal(this, this._el_56, throwOnChange)) {
            this._appEl_56.componentView.markAsCheckOnce();
        }
        this._ItemContent_56_5.detectChangesInternal(this, this._el_56, throwOnChange);
        this._Label_58_3.detectChangesInternal(this, this._el_58, throwOnChange);
        var currVal_77 = '2005';
        this._DateTime_61_4.check_min(currVal_77, throwOnChange, false);
        var currVal_78 = '2016';
        this._DateTime_61_4.check_max(currVal_78, throwOnChange, false);
        var currVal_79 = 'DDDD MMM D';
        this._DateTime_61_4.check_displayFormat(currVal_79, throwOnChange, false);
        this._DateTime_61_4.detectChangesInternal(this, this._el_61, throwOnChange);
        var currVal_81 = this.context.chromeReleased;
        this._NgModel_61_6.check_model(currVal_81, throwOnChange, false);
        this._NgModel_61_6.detectChangesInternal(this, this._el_61, throwOnChange);
        this._NgControlStatus_61_8.detectChangesInternal(this, this._el_61, throwOnChange);
        this._List_65_3.detectChangesInternal(this, this._el_65, throwOnChange);
        if (this._Item_67_4.detectChangesInternal(this, this._el_67, throwOnChange)) {
            this._appEl_67.componentView.markAsCheckOnce();
        }
        this._ListHeader_67_5.detectChangesInternal(this, this._el_67, throwOnChange);
        if (this._Item_70_4.detectChangesInternal(this, this._el_70, throwOnChange)) {
            this._appEl_70.componentView.markAsCheckOnce();
        }
        this._ItemContent_70_5.detectChangesInternal(this, this._el_70, throwOnChange);
        this._Label_72_3.detectChangesInternal(this, this._el_72, throwOnChange);
        var currVal_91 = 'hh:mm A';
        this._DateTime_75_4.check_displayFormat(currVal_91, throwOnChange, false);
        this._DateTime_75_4.detectChangesInternal(this, this._el_75, throwOnChange);
        var currVal_93 = this.context.tokyoTime;
        this._NgModel_75_6.check_model(currVal_93, throwOnChange, false);
        this._NgModel_75_6.detectChangesInternal(this, this._el_75, throwOnChange);
        this._NgControlStatus_75_8.detectChangesInternal(this, this._el_75, throwOnChange);
        if (this._Item_78_4.detectChangesInternal(this, this._el_78, throwOnChange)) {
            this._appEl_78.componentView.markAsCheckOnce();
        }
        this._ItemContent_78_5.detectChangesInternal(this, this._el_78, throwOnChange);
        this._Label_80_3.detectChangesInternal(this, this._el_80, throwOnChange);
        var currVal_103 = 'HH:mm';
        this._DateTime_83_4.check_displayFormat(currVal_103, throwOnChange, false);
        this._DateTime_83_4.detectChangesInternal(this, this._el_83, throwOnChange);
        var currVal_105 = this.context.parisTime;
        this._NgModel_83_6.check_model(currVal_105, throwOnChange, false);
        this._NgModel_83_6.detectChangesInternal(this, this._el_83, throwOnChange);
        this._NgControlStatus_83_8.detectChangesInternal(this, this._el_83, throwOnChange);
        if (this._Item_86_4.detectChangesInternal(this, this._el_86, throwOnChange)) {
            this._appEl_86.componentView.markAsCheckOnce();
        }
        this._ItemContent_86_5.detectChangesInternal(this, this._el_86, throwOnChange);
        this._Label_88_3.detectChangesInternal(this, this._el_88, throwOnChange);
        var currVal_115 = 'h:mm a';
        this._DateTime_91_4.check_displayFormat(currVal_115, throwOnChange, false);
        this._DateTime_91_4.detectChangesInternal(this, this._el_91, throwOnChange);
        var currVal_117 = this.context.madisonTime;
        this._NgModel_91_6.check_model(currVal_117, throwOnChange, false);
        this._NgModel_91_6.detectChangesInternal(this, this._el_91, throwOnChange);
        this._NgControlStatus_91_8.detectChangesInternal(this, this._el_91, throwOnChange);
        this._List_95_3.detectChangesInternal(this, this._el_95, throwOnChange);
        if (this._Item_97_4.detectChangesInternal(this, this._el_97, throwOnChange)) {
            this._appEl_97.componentView.markAsCheckOnce();
        }
        this._ListHeader_97_5.detectChangesInternal(this, this._el_97, throwOnChange);
        if (this._Item_100_4.detectChangesInternal(this, this._el_100, throwOnChange)) {
            this._appEl_100.componentView.markAsCheckOnce();
        }
        this._ItemContent_100_5.detectChangesInternal(this, this._el_100, throwOnChange);
        this._Label_102_3.detectChangesInternal(this, this._el_102, throwOnChange);
        var currVal_127 = 'mm';
        this._DateTime_105_4.check_displayFormat(currVal_127, throwOnChange, false);
        var currVal_128 = '0,15,30,45';
        this._DateTime_105_4.check_minuteValues(currVal_128, throwOnChange, false);
        this._DateTime_105_4.detectChangesInternal(this, this._el_105, throwOnChange);
        var currVal_130 = this.context.alertTime;
        this._NgModel_105_6.check_model(currVal_130, throwOnChange, false);
        this._NgModel_105_6.detectChangesInternal(this, this._el_105, throwOnChange);
        this._NgControlStatus_105_8.detectChangesInternal(this, this._el_105, throwOnChange);
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
            if (this._query_Button_16_1.dirty) {
                this._query_Button_16_1.reset([]);
                this._Item_16_4.context._buttons = this._query_Button_16_1;
                this._query_Button_16_1.notifyOnChanges();
            }
            if (this._query_Icon_16_2.dirty) {
                this._query_Icon_16_2.reset([]);
                this._Item_16_4.context._icons = this._query_Icon_16_2;
                this._query_Icon_16_2.notifyOnChanges();
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
            if (this._query_Button_40_1.dirty) {
                this._query_Button_40_1.reset([]);
                this._Item_40_4.context._buttons = this._query_Button_40_1;
                this._query_Button_40_1.notifyOnChanges();
            }
            if (this._query_Icon_40_2.dirty) {
                this._query_Icon_40_2.reset([]);
                this._Item_40_4.context._icons = this._query_Icon_40_2;
                this._query_Icon_40_2.notifyOnChanges();
            }
            if (this._query_Button_48_1.dirty) {
                this._query_Button_48_1.reset([]);
                this._Item_48_4.context._buttons = this._query_Button_48_1;
                this._query_Button_48_1.notifyOnChanges();
            }
            if (this._query_Icon_48_2.dirty) {
                this._query_Icon_48_2.reset([]);
                this._Item_48_4.context._icons = this._query_Icon_48_2;
                this._query_Icon_48_2.notifyOnChanges();
            }
            if (this._query_Button_56_1.dirty) {
                this._query_Button_56_1.reset([]);
                this._Item_56_4.context._buttons = this._query_Button_56_1;
                this._query_Button_56_1.notifyOnChanges();
            }
            if (this._query_Icon_56_2.dirty) {
                this._query_Icon_56_2.reset([]);
                this._Item_56_4.context._icons = this._query_Icon_56_2;
                this._query_Icon_56_2.notifyOnChanges();
            }
            if (this._query_Button_67_1.dirty) {
                this._query_Button_67_1.reset([]);
                this._Item_67_4.context._buttons = this._query_Button_67_1;
                this._query_Button_67_1.notifyOnChanges();
            }
            if (this._query_Icon_67_2.dirty) {
                this._query_Icon_67_2.reset([]);
                this._Item_67_4.context._icons = this._query_Icon_67_2;
                this._query_Icon_67_2.notifyOnChanges();
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
            if (this._query_Button_78_1.dirty) {
                this._query_Button_78_1.reset([]);
                this._Item_78_4.context._buttons = this._query_Button_78_1;
                this._query_Button_78_1.notifyOnChanges();
            }
            if (this._query_Icon_78_2.dirty) {
                this._query_Icon_78_2.reset([]);
                this._Item_78_4.context._icons = this._query_Icon_78_2;
                this._query_Icon_78_2.notifyOnChanges();
            }
            if (this._query_Button_86_1.dirty) {
                this._query_Button_86_1.reset([]);
                this._Item_86_4.context._buttons = this._query_Button_86_1;
                this._query_Button_86_1.notifyOnChanges();
            }
            if (this._query_Icon_86_2.dirty) {
                this._query_Icon_86_2.reset([]);
                this._Item_86_4.context._icons = this._query_Icon_86_2;
                this._query_Icon_86_2.notifyOnChanges();
            }
            if (this._query_Button_97_1.dirty) {
                this._query_Button_97_1.reset([]);
                this._Item_97_4.context._buttons = this._query_Button_97_1;
                this._query_Button_97_1.notifyOnChanges();
            }
            if (this._query_Icon_97_2.dirty) {
                this._query_Icon_97_2.reset([]);
                this._Item_97_4.context._icons = this._query_Icon_97_2;
                this._query_Icon_97_2.notifyOnChanges();
            }
            if (this._query_Button_100_1.dirty) {
                this._query_Button_100_1.reset([]);
                this._Item_100_4.context._buttons = this._query_Button_100_1;
                this._query_Button_100_1.notifyOnChanges();
            }
            if (this._query_Icon_100_2.dirty) {
                this._query_Icon_100_2.reset([]);
                this._Item_100_4.context._icons = this._query_Icon_100_2;
                this._query_Icon_100_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_21_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_29_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_24_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_37_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_45_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_40_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_53_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_48_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_61_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_56_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_67_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_75_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_70_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_83_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_78_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_91_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_86_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_97_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._DateTime_105_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_100_4.context.ngAfterContentInit();
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
        var currVal_9 = this._DateTime_21_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_21, 'datetime-disabled', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_11 = this._NgControlStatus_21_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatus_21_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._NgControlStatus_21_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_21_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_21_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_21_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_23 = this._DateTime_29_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_29, 'datetime-disabled', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_25 = this._NgControlStatus_29_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_29, 'ng-untouched', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_29_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_29, 'ng-touched', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_29_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_29, 'ng-pristine', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_29_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_29, 'ng-dirty', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._NgControlStatus_29_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_29, 'ng-valid', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this._NgControlStatus_29_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_29, 'ng-invalid', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_38 = this._DateTime_37_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_37, 'datetime-disabled', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_40 = this._NgControlStatus_37_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_37, 'ng-untouched', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this._NgControlStatus_37_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_37, 'ng-touched', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = this._NgControlStatus_37_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_37, 'ng-pristine', currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = this._NgControlStatus_37_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_37, 'ng-dirty', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this._NgControlStatus_37_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_37, 'ng-valid', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._NgControlStatus_37_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_37, 'ng-invalid', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_52 = this._DateTime_45_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementClass(this._el_45, 'datetime-disabled', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_54 = this._NgControlStatus_45_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_45, 'ng-untouched', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = this._NgControlStatus_45_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_45, 'ng-touched', currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_56 = this._NgControlStatus_45_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementClass(this._el_45, 'ng-pristine', currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_57 = this._NgControlStatus_45_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementClass(this._el_45, 'ng-dirty', currVal_57);
            this._expr_57 = currVal_57;
        }
        var currVal_58 = this._NgControlStatus_45_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementClass(this._el_45, 'ng-valid', currVal_58);
            this._expr_58 = currVal_58;
        }
        var currVal_59 = this._NgControlStatus_45_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementClass(this._el_45, 'ng-invalid', currVal_59);
            this._expr_59 = currVal_59;
        }
        var currVal_66 = this._DateTime_53_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this.renderer.setElementClass(this._el_53, 'datetime-disabled', currVal_66);
            this._expr_66 = currVal_66;
        }
        var currVal_68 = this._NgControlStatus_53_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_68, currVal_68)) {
            this.renderer.setElementClass(this._el_53, 'ng-untouched', currVal_68);
            this._expr_68 = currVal_68;
        }
        var currVal_69 = this._NgControlStatus_53_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_53, 'ng-touched', currVal_69);
            this._expr_69 = currVal_69;
        }
        var currVal_70 = this._NgControlStatus_53_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setElementClass(this._el_53, 'ng-pristine', currVal_70);
            this._expr_70 = currVal_70;
        }
        var currVal_71 = this._NgControlStatus_53_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_53, 'ng-dirty', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_72 = this._NgControlStatus_53_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this.renderer.setElementClass(this._el_53, 'ng-valid', currVal_72);
            this._expr_72 = currVal_72;
        }
        var currVal_73 = this._NgControlStatus_53_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_53, 'ng-invalid', currVal_73);
            this._expr_73 = currVal_73;
        }
        var currVal_80 = this._DateTime_61_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementClass(this._el_61, 'datetime-disabled', currVal_80);
            this._expr_80 = currVal_80;
        }
        var currVal_82 = this._NgControlStatus_61_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setElementClass(this._el_61, 'ng-untouched', currVal_82);
            this._expr_82 = currVal_82;
        }
        var currVal_83 = this._NgControlStatus_61_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementClass(this._el_61, 'ng-touched', currVal_83);
            this._expr_83 = currVal_83;
        }
        var currVal_84 = this._NgControlStatus_61_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this.renderer.setElementClass(this._el_61, 'ng-pristine', currVal_84);
            this._expr_84 = currVal_84;
        }
        var currVal_85 = this._NgControlStatus_61_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementClass(this._el_61, 'ng-dirty', currVal_85);
            this._expr_85 = currVal_85;
        }
        var currVal_86 = this._NgControlStatus_61_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementClass(this._el_61, 'ng-valid', currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_87 = this._NgControlStatus_61_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setElementClass(this._el_61, 'ng-invalid', currVal_87);
            this._expr_87 = currVal_87;
        }
        var currVal_92 = this._DateTime_75_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setElementClass(this._el_75, 'datetime-disabled', currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_94 = this._NgControlStatus_75_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this.renderer.setElementClass(this._el_75, 'ng-untouched', currVal_94);
            this._expr_94 = currVal_94;
        }
        var currVal_95 = this._NgControlStatus_75_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setElementClass(this._el_75, 'ng-touched', currVal_95);
            this._expr_95 = currVal_95;
        }
        var currVal_96 = this._NgControlStatus_75_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_96, currVal_96)) {
            this.renderer.setElementClass(this._el_75, 'ng-pristine', currVal_96);
            this._expr_96 = currVal_96;
        }
        var currVal_97 = this._NgControlStatus_75_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this.renderer.setElementClass(this._el_75, 'ng-dirty', currVal_97);
            this._expr_97 = currVal_97;
        }
        var currVal_98 = this._NgControlStatus_75_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementClass(this._el_75, 'ng-valid', currVal_98);
            this._expr_98 = currVal_98;
        }
        var currVal_99 = this._NgControlStatus_75_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementClass(this._el_75, 'ng-invalid', currVal_99);
            this._expr_99 = currVal_99;
        }
        var currVal_104 = this._DateTime_83_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementClass(this._el_83, 'datetime-disabled', currVal_104);
            this._expr_104 = currVal_104;
        }
        var currVal_106 = this._NgControlStatus_83_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementClass(this._el_83, 'ng-untouched', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = this._NgControlStatus_83_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementClass(this._el_83, 'ng-touched', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = this._NgControlStatus_83_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementClass(this._el_83, 'ng-pristine', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = this._NgControlStatus_83_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementClass(this._el_83, 'ng-dirty', currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = this._NgControlStatus_83_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementClass(this._el_83, 'ng-valid', currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = this._NgControlStatus_83_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setElementClass(this._el_83, 'ng-invalid', currVal_111);
            this._expr_111 = currVal_111;
        }
        var currVal_116 = this._DateTime_91_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_116, currVal_116)) {
            this.renderer.setElementClass(this._el_91, 'datetime-disabled', currVal_116);
            this._expr_116 = currVal_116;
        }
        var currVal_118 = this._NgControlStatus_91_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_118, currVal_118)) {
            this.renderer.setElementClass(this._el_91, 'ng-untouched', currVal_118);
            this._expr_118 = currVal_118;
        }
        var currVal_119 = this._NgControlStatus_91_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_119, currVal_119)) {
            this.renderer.setElementClass(this._el_91, 'ng-touched', currVal_119);
            this._expr_119 = currVal_119;
        }
        var currVal_120 = this._NgControlStatus_91_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_120, currVal_120)) {
            this.renderer.setElementClass(this._el_91, 'ng-pristine', currVal_120);
            this._expr_120 = currVal_120;
        }
        var currVal_121 = this._NgControlStatus_91_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_121, currVal_121)) {
            this.renderer.setElementClass(this._el_91, 'ng-dirty', currVal_121);
            this._expr_121 = currVal_121;
        }
        var currVal_122 = this._NgControlStatus_91_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_122, currVal_122)) {
            this.renderer.setElementClass(this._el_91, 'ng-valid', currVal_122);
            this._expr_122 = currVal_122;
        }
        var currVal_123 = this._NgControlStatus_91_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_123, currVal_123)) {
            this.renderer.setElementClass(this._el_91, 'ng-invalid', currVal_123);
            this._expr_123 = currVal_123;
        }
        var currVal_129 = this._DateTime_105_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_129, currVal_129)) {
            this.renderer.setElementClass(this._el_105, 'datetime-disabled', currVal_129);
            this._expr_129 = currVal_129;
        }
        var currVal_131 = this._NgControlStatus_105_8.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_131, currVal_131)) {
            this.renderer.setElementClass(this._el_105, 'ng-untouched', currVal_131);
            this._expr_131 = currVal_131;
        }
        var currVal_132 = this._NgControlStatus_105_8.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this.renderer.setElementClass(this._el_105, 'ng-touched', currVal_132);
            this._expr_132 = currVal_132;
        }
        var currVal_133 = this._NgControlStatus_105_8.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_133, currVal_133)) {
            this.renderer.setElementClass(this._el_105, 'ng-pristine', currVal_133);
            this._expr_133 = currVal_133;
        }
        var currVal_134 = this._NgControlStatus_105_8.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_134, currVal_134)) {
            this.renderer.setElementClass(this._el_105, 'ng-dirty', currVal_134);
            this._expr_134 = currVal_134;
        }
        var currVal_135 = this._NgControlStatus_105_8.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_135, currVal_135)) {
            this.renderer.setElementClass(this._el_105, 'ng-valid', currVal_135);
            this._expr_135 = currVal_135;
        }
        var currVal_136 = this._NgControlStatus_105_8.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_136, currVal_136)) {
            this.renderer.setElementClass(this._el_105, 'ng-invalid', currVal_136);
            this._expr_136 = currVal_136;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._DateTime_21_4.context.ngOnDestroy();
        this._NgModel_21_6.context.ngOnDestroy();
        this._DateTime_29_4.context.ngOnDestroy();
        this._NgModel_29_6.context.ngOnDestroy();
        this._DateTime_37_4.context.ngOnDestroy();
        this._NgModel_37_6.context.ngOnDestroy();
        this._DateTime_45_4.context.ngOnDestroy();
        this._NgModel_45_6.context.ngOnDestroy();
        this._DateTime_53_4.context.ngOnDestroy();
        this._NgModel_53_6.context.ngOnDestroy();
        this._DateTime_61_4.context.ngOnDestroy();
        this._NgModel_61_6.context.ngOnDestroy();
        this._DateTime_75_4.context.ngOnDestroy();
        this._NgModel_75_6.context.ngOnDestroy();
        this._DateTime_83_4.context.ngOnDestroy();
        this._NgModel_83_6.context.ngOnDestroy();
        this._DateTime_91_4.context.ngOnDestroy();
        this._NgModel_91_6.context.ngOnDestroy();
        this._DateTime_105_4.context.ngOnDestroy();
        this._NgModel_105_6.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.wwwReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_21_1 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_21_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_21_2 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_21_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_29_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.netscapeReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_29_1 = function ($event) {
        this._appEl_29.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_29_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_29_2 = function ($event) {
        this._appEl_29.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_29_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_37_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.operaReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_37_1 = function ($event) {
        this._appEl_37.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_37_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_37_2 = function ($event) {
        this._appEl_37.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_37_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_45_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.webkitReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_45_1 = function ($event) {
        this._appEl_45.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_45_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_45_2 = function ($event) {
        this._appEl_45.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_45_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_53_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.firefoxReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_53_1 = function ($event) {
        this._appEl_53.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_53_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_53_2 = function ($event) {
        this._appEl_53.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_53_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_61_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.chromeReleased = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_61_1 = function ($event) {
        this._appEl_61.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_61_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_61_2 = function ($event) {
        this._appEl_61.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_61_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_75_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.tokyoTime = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_75_1 = function ($event) {
        this._appEl_75.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_75_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_75_2 = function ($event) {
        this._appEl_75.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_75_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_83_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.parisTime = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_83_1 = function ($event) {
        this._appEl_83.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_83_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_83_2 = function ($event) {
        this._appEl_83.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_83_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_91_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.madisonTime = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_91_1 = function ($event) {
        this._appEl_91.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_91_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_91_2 = function ($event) {
        this._appEl_91.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_91_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_105_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.alertTime = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_105_1 = function ($event) {
        this._appEl_105.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_105_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_105_2 = function ($event) {
        this._appEl_105.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._DateTime_105_4.context._keyup() !== false);
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
        var compView_0 = import46.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import46.Wrapper_Nav(this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import47.NavControllerBase, null), this.parentInjector.get(import25.App), this.parentInjector.get(import22.Config), this.parentInjector.get(import28.Keyboard), new import23.ElementRef(this._el_0), this.parentInjector.get(import29.NgZone), this.renderer, this.parentInjector.get(import48.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import49.TransitionController), this.parentInjector.get(import50.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import51.Nav) && (0 === requestNodeIndex))) {
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
