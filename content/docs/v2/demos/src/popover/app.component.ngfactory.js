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
import * as import8 from 'ionic-angular/navigation/nav-params';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/radio/radio-group.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/radio/radio-button.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from 'ionic-angular/gestures/gesture-controller';
import * as import24 from 'ionic-angular/util/form';
import * as import25 from 'ionic-angular/components/item/item';
import * as import26 from 'ionic-angular/components/grid/grid';
import * as import27 from 'ionic-angular/components/button/button';
import * as import28 from 'ionic-angular/components/label/label';
import * as import29 from 'ionic-angular/components/radio/radio-button';
import * as import30 from 'ionic-angular/components/radio/radio-group';
import * as import31 from '@angular/forms/src/directives/control_value_accessor';
import * as import32 from '@angular/forms/src/directives/ng_model';
import * as import33 from '@angular/forms/src/directives/ng_control';
import * as import34 from '@angular/forms/src/directives/ng_control_status';
import * as import35 from 'ionic-angular/components/list/list';
import * as import36 from 'ionic-angular/components/popover/popover';
import * as import37 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import38 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import39 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import40 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import41 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import42 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import43 from 'ionic-angular/navigation/view-controller';
import * as import44 from 'ionic-angular/components/app/app';
import * as import45 from 'ionic-angular/navigation/nav-controller';
import * as import46 from 'ionic-angular/components/toolbar/toolbar';
import * as import47 from 'ionic-angular/util/keyboard';
import * as import48 from '@angular/core/src/zone/ng_zone';
import * as import49 from 'ionic-angular/components/tabs/tabs';
import * as import50 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import51 from 'ionic-angular/components/icon/icon';
import * as import52 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import53 from 'ionic-angular/components/navbar/navbar';
import * as import54 from 'ionic-angular/components/content/content';
import * as import55 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import56 from 'ionic-angular/navigation/nav-controller-base';
import * as import57 from '@angular/core/src/linker/component_factory_resolver';
import * as import58 from 'ionic-angular/transitions/transition-controller';
import * as import59 from 'ionic-angular/navigation/deep-linker';
import * as import60 from 'ionic-angular/components/nav/nav';
export var Wrapper_PopoverRadioPage = (function () {
    function Wrapper_PopoverRadioPage(p0) {
        this.changed = false;
        this.context = new import0.PopoverRadioPage(p0);
    }
    Wrapper_PopoverRadioPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_PopoverRadioPage;
}());
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
var renderType_PopoverRadioPage_Host = null;
var _View_PopoverRadioPage_Host0 = (function (_super) {
    __extends(_View_PopoverRadioPage_Host0, _super);
    function _View_PopoverRadioPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PopoverRadioPage_Host0, renderType_PopoverRadioPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PopoverRadioPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PopoverRadioPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PopoverRadioPage_0_4 = new Wrapper_PopoverRadioPage(this.parentInjector.get(import8.NavParams));
        this._appEl_0.initComponent(this._PopoverRadioPage_0_4.context, [], compView_0);
        compView_0.create(this._PopoverRadioPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PopoverRadioPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PopoverRadioPage) && (0 === requestNodeIndex))) {
            return this._PopoverRadioPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_PopoverRadioPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PopoverRadioPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PopoverRadioPage_Host0;
}(import1.AppView));
function viewFactory_PopoverRadioPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PopoverRadioPage_Host === null)) {
        (renderType_PopoverRadioPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_PopoverRadioPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var PopoverRadioPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_PopoverRadioPage_Host0, import0.PopoverRadioPage);
var styles_PopoverRadioPage = [];
var renderType_PopoverRadioPage = null;
var _View_PopoverRadioPage0 = (function (_super) {
    __extends(_View_PopoverRadioPage0, _super);
    function _View_PopoverRadioPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PopoverRadioPage0, renderType_PopoverRadioPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PopoverRadioPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_1, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_1, 'role', 'radiogroup');
        this._RadioGroup_1_3 = new import11.Wrapper_RadioGroup(this.renderer, new import21.ElementRef(this._el_1));
        this._NG_VALUE_ACCESSOR_1_4 = [this._RadioGroup_1_3.context];
        this._NgModel_1_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_1_4);
        this._NgControl_1_6 = this._NgModel_1_5.context;
        this._NgControlStatus_1_7 = new import13.Wrapper_NgControlStatus(this._NgControl_1_6);
        this._List_1_8 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import23.GestureController));
        this._query_ListHeader_1_0 = new import15.QueryList();
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-row', null);
        this._Row_3_3 = new import16.Wrapper_Row();
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'ion-col', null);
        this._Col_5_3 = new import16.Wrapper_Col();
        this._text_6 = this.renderer.createText(this._el_5, '\n          ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'text-button text-smaller item item-block');
        this.renderer.setElementAttribute(this._el_7, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_7, 'ion-item', '');
        this._appEl_7 = new import3.AppElement(7, 5, this, this._el_7);
        var compView_7 = import17.viewFactory_Item0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Item_7_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_7), this.renderer);
        this._ItemContent_7_5 = new import17.Wrapper_ItemContent();
        this._query_Label_7_0 = new import15.QueryList();
        this._query_Button_7_1 = new import15.QueryList();
        this._query_Icon_7_2 = new import15.QueryList();
        this._appEl_7.initComponent(this._Item_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, 'A', null);
        this._query_Label_7_0.reset([]);
        this._Item_7_4.context.contentLabel = this._query_Label_7_0.first;
        compView_7.create(this._Item_7_4.context, [
            [],
            [],
            [].concat([this._text_8]),
            [],
            []
        ], null);
        this._text_9 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_10 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_11 = this.renderer.createElement(this._el_3, 'ion-col', null);
        this._Col_11_3 = new import16.Wrapper_Col();
        this._text_12 = this.renderer.createText(this._el_11, '\n          ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'text-button text-larger item item-block');
        this.renderer.setElementAttribute(this._el_13, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_13, 'ion-item', '');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import17.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import17.Wrapper_ItemContent();
        this._query_Label_13_0 = new import15.QueryList();
        this._query_Button_13_1 = new import15.QueryList();
        this._query_Icon_13_2 = new import15.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'A', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n      ', null);
        this._text_17 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_1, 'ion-row', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'row-dots');
        this._Row_18_3 = new import16.Wrapper_Row();
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'ion-col', null);
        this._Col_20_3 = new import16.Wrapper_Col();
        this._text_21 = this.renderer.createText(this._el_20, '\n          ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'button', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'dot-white');
        this.renderer.setElementAttribute(this._el_22, 'ion-button', 'dot');
        this._appEl_22 = new import3.AppElement(22, 20, this, this._el_22);
        var compView_22 = import18.viewFactory_Button0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Button_22_4 = new import18.Wrapper_Button(null, 'dot', this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_22), this.renderer);
        this._appEl_22.initComponent(this._Button_22_4.context, [], compView_22);
        compView_22.create(this._Button_22_4.context, [[]], null);
        this._text_23 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_24 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_25 = this.renderer.createElement(this._el_18, 'ion-col', null);
        this._Col_25_3 = new import16.Wrapper_Col();
        this._text_26 = this.renderer.createText(this._el_25, '\n          ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'class', 'dot-tan');
        this.renderer.setElementAttribute(this._el_27, 'ion-button', 'dot');
        this._appEl_27 = new import3.AppElement(27, 25, this, this._el_27);
        var compView_27 = import18.viewFactory_Button0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Button_27_4 = new import18.Wrapper_Button(null, 'dot', this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_27), this.renderer);
        this._appEl_27.initComponent(this._Button_27_4.context, [], compView_27);
        compView_27.create(this._Button_27_4.context, [[]], null);
        this._text_28 = this.renderer.createText(this._el_25, '\n        ', null);
        this._text_29 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_30 = this.renderer.createElement(this._el_18, 'ion-col', null);
        this._Col_30_3 = new import16.Wrapper_Col();
        this._text_31 = this.renderer.createText(this._el_30, '\n          ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'button', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'dot-grey');
        this.renderer.setElementAttribute(this._el_32, 'ion-button', 'dot');
        this._appEl_32 = new import3.AppElement(32, 30, this, this._el_32);
        var compView_32 = import18.viewFactory_Button0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Button_32_4 = new import18.Wrapper_Button(null, 'dot', this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_32), this.renderer);
        this._appEl_32.initComponent(this._Button_32_4.context, [], compView_32);
        compView_32.create(this._Button_32_4.context, [[]], null);
        this._text_33 = this.renderer.createText(this._el_30, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_35 = this.renderer.createElement(this._el_18, 'ion-col', null);
        this._Col_35_3 = new import16.Wrapper_Col();
        this._text_36 = this.renderer.createText(this._el_35, '\n          ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'button', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'dot-black');
        this.renderer.setElementAttribute(this._el_37, 'ion-button', 'dot');
        this._appEl_37 = new import3.AppElement(37, 35, this, this._el_37);
        var compView_37 = import18.viewFactory_Button0(this.viewUtils, this.injector(37), this._appEl_37);
        this._Button_37_4 = new import18.Wrapper_Button(null, 'dot', this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_37), this.renderer);
        this._appEl_37.initComponent(this._Button_37_4.context, [], compView_37);
        compView_37.create(this._Button_37_4.context, [[]], null);
        this._text_38 = this.renderer.createText(this._el_35, '\n        ', null);
        this._text_39 = this.renderer.createText(this._el_18, '\n      ', null);
        this._text_40 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_41 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'text-athelas item item-block');
        this._appEl_41 = new import3.AppElement(41, 1, this, this._el_41);
        var compView_41 = import17.viewFactory_Item0(this.viewUtils, this.injector(41), this._appEl_41);
        this._Item_41_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_41), this.renderer);
        this._ItemContent_41_5 = new import17.Wrapper_ItemContent();
        this._query_Label_41_0 = new import15.QueryList();
        this._query_Button_41_1 = new import15.QueryList();
        this._query_Icon_41_2 = new import15.QueryList();
        this._appEl_41.initComponent(this._Item_41_4.context, [], compView_41);
        this._text_42 = this.renderer.createText(null, '\n        ', null);
        this._el_43 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_43_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_43), this.renderer, null, null, null, null);
        this._text_44 = this.renderer.createText(this._el_43, 'Athelas', null);
        this._text_45 = this.renderer.createText(null, '\n        ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_46, 'value', 'Athelas');
        this._appEl_46 = new import3.AppElement(46, 41, this, this._el_46);
        var compView_46 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(46), this._appEl_46);
        this._RadioButton_46_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_46), this.renderer, this._Item_41_4.context, this._RadioGroup_1_3.context);
        this._appEl_46.initComponent(this._RadioButton_46_4.context, [], compView_46);
        compView_46.create(this._RadioButton_46_4.context, [], null);
        this._text_47 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_41_0.reset([this._Label_43_3.context]);
        this._Item_41_4.context.contentLabel = this._query_Label_41_0.first;
        compView_41.create(this._Item_41_4.context, [
            [],
            [].concat([this._el_43]),
            [].concat([
                this._text_42,
                this._text_45,
                this._text_47
            ]),
            [],
            [].concat([this._el_46])
        ], null);
        this._text_48 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_49 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_49, 'class', 'text-charter item item-block');
        this._appEl_49 = new import3.AppElement(49, 1, this, this._el_49);
        var compView_49 = import17.viewFactory_Item0(this.viewUtils, this.injector(49), this._appEl_49);
        this._Item_49_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_49), this.renderer);
        this._ItemContent_49_5 = new import17.Wrapper_ItemContent();
        this._query_Label_49_0 = new import15.QueryList();
        this._query_Button_49_1 = new import15.QueryList();
        this._query_Icon_49_2 = new import15.QueryList();
        this._appEl_49.initComponent(this._Item_49_4.context, [], compView_49);
        this._text_50 = this.renderer.createText(null, '\n        ', null);
        this._el_51 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_51_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_51), this.renderer, null, null, null, null);
        this._text_52 = this.renderer.createText(this._el_51, 'Charter', null);
        this._text_53 = this.renderer.createText(null, '\n        ', null);
        this._el_54 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_54, 'value', 'Charter');
        this._appEl_54 = new import3.AppElement(54, 49, this, this._el_54);
        var compView_54 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(54), this._appEl_54);
        this._RadioButton_54_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_54), this.renderer, this._Item_49_4.context, this._RadioGroup_1_3.context);
        this._appEl_54.initComponent(this._RadioButton_54_4.context, [], compView_54);
        compView_54.create(this._RadioButton_54_4.context, [], null);
        this._text_55 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_49_0.reset([this._Label_51_3.context]);
        this._Item_49_4.context.contentLabel = this._query_Label_49_0.first;
        compView_49.create(this._Item_49_4.context, [
            [],
            [].concat([this._el_51]),
            [].concat([
                this._text_50,
                this._text_53,
                this._text_55
            ]),
            [],
            [].concat([this._el_54])
        ], null);
        this._text_56 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_57 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_57, 'class', 'text-iowan item item-block');
        this._appEl_57 = new import3.AppElement(57, 1, this, this._el_57);
        var compView_57 = import17.viewFactory_Item0(this.viewUtils, this.injector(57), this._appEl_57);
        this._Item_57_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_57), this.renderer);
        this._ItemContent_57_5 = new import17.Wrapper_ItemContent();
        this._query_Label_57_0 = new import15.QueryList();
        this._query_Button_57_1 = new import15.QueryList();
        this._query_Icon_57_2 = new import15.QueryList();
        this._appEl_57.initComponent(this._Item_57_4.context, [], compView_57);
        this._text_58 = this.renderer.createText(null, '\n        ', null);
        this._el_59 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_59_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_59), this.renderer, null, null, null, null);
        this._text_60 = this.renderer.createText(this._el_59, 'Iowan', null);
        this._text_61 = this.renderer.createText(null, '\n        ', null);
        this._el_62 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_62, 'value', 'Iowan');
        this._appEl_62 = new import3.AppElement(62, 57, this, this._el_62);
        var compView_62 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(62), this._appEl_62);
        this._RadioButton_62_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_62), this.renderer, this._Item_57_4.context, this._RadioGroup_1_3.context);
        this._appEl_62.initComponent(this._RadioButton_62_4.context, [], compView_62);
        compView_62.create(this._RadioButton_62_4.context, [], null);
        this._text_63 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_57_0.reset([this._Label_59_3.context]);
        this._Item_57_4.context.contentLabel = this._query_Label_57_0.first;
        compView_57.create(this._Item_57_4.context, [
            [],
            [].concat([this._el_59]),
            [].concat([
                this._text_58,
                this._text_61,
                this._text_63
            ]),
            [],
            [].concat([this._el_62])
        ], null);
        this._text_64 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_65 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_65, 'class', 'text-palatino item item-block');
        this._appEl_65 = new import3.AppElement(65, 1, this, this._el_65);
        var compView_65 = import17.viewFactory_Item0(this.viewUtils, this.injector(65), this._appEl_65);
        this._Item_65_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_65), this.renderer);
        this._ItemContent_65_5 = new import17.Wrapper_ItemContent();
        this._query_Label_65_0 = new import15.QueryList();
        this._query_Button_65_1 = new import15.QueryList();
        this._query_Icon_65_2 = new import15.QueryList();
        this._appEl_65.initComponent(this._Item_65_4.context, [], compView_65);
        this._text_66 = this.renderer.createText(null, '\n        ', null);
        this._el_67 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_67_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_67), this.renderer, null, null, null, null);
        this._text_68 = this.renderer.createText(this._el_67, 'Palatino', null);
        this._text_69 = this.renderer.createText(null, '\n        ', null);
        this._el_70 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_70, 'value', 'Palatino');
        this._appEl_70 = new import3.AppElement(70, 65, this, this._el_70);
        var compView_70 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(70), this._appEl_70);
        this._RadioButton_70_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_70), this.renderer, this._Item_65_4.context, this._RadioGroup_1_3.context);
        this._appEl_70.initComponent(this._RadioButton_70_4.context, [], compView_70);
        compView_70.create(this._RadioButton_70_4.context, [], null);
        this._text_71 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_65_0.reset([this._Label_67_3.context]);
        this._Item_65_4.context.contentLabel = this._query_Label_65_0.first;
        compView_65.create(this._Item_65_4.context, [
            [],
            [].concat([this._el_67]),
            [].concat([
                this._text_66,
                this._text_69,
                this._text_71
            ]),
            [],
            [].concat([this._el_70])
        ], null);
        this._text_72 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_73 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_73, 'class', 'text-san-francisco item item-block');
        this._appEl_73 = new import3.AppElement(73, 1, this, this._el_73);
        var compView_73 = import17.viewFactory_Item0(this.viewUtils, this.injector(73), this._appEl_73);
        this._Item_73_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_73), this.renderer);
        this._ItemContent_73_5 = new import17.Wrapper_ItemContent();
        this._query_Label_73_0 = new import15.QueryList();
        this._query_Button_73_1 = new import15.QueryList();
        this._query_Icon_73_2 = new import15.QueryList();
        this._appEl_73.initComponent(this._Item_73_4.context, [], compView_73);
        this._text_74 = this.renderer.createText(null, '\n        ', null);
        this._el_75 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_75_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_75), this.renderer, null, null, null, null);
        this._text_76 = this.renderer.createText(this._el_75, 'San Francisco', null);
        this._text_77 = this.renderer.createText(null, '\n        ', null);
        this._el_78 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_78, 'value', 'San Francisco');
        this._appEl_78 = new import3.AppElement(78, 73, this, this._el_78);
        var compView_78 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(78), this._appEl_78);
        this._RadioButton_78_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_78), this.renderer, this._Item_73_4.context, this._RadioGroup_1_3.context);
        this._appEl_78.initComponent(this._RadioButton_78_4.context, [], compView_78);
        compView_78.create(this._RadioButton_78_4.context, [], null);
        this._text_79 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_73_0.reset([this._Label_75_3.context]);
        this._Item_73_4.context.contentLabel = this._query_Label_73_0.first;
        compView_73.create(this._Item_73_4.context, [
            [],
            [].concat([this._el_75]),
            [].concat([
                this._text_74,
                this._text_77,
                this._text_79
            ]),
            [],
            [].concat([this._el_78])
        ], null);
        this._text_80 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_81 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'text-seravek item item-block');
        this._appEl_81 = new import3.AppElement(81, 1, this, this._el_81);
        var compView_81 = import17.viewFactory_Item0(this.viewUtils, this.injector(81), this._appEl_81);
        this._Item_81_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_81), this.renderer);
        this._ItemContent_81_5 = new import17.Wrapper_ItemContent();
        this._query_Label_81_0 = new import15.QueryList();
        this._query_Button_81_1 = new import15.QueryList();
        this._query_Icon_81_2 = new import15.QueryList();
        this._appEl_81.initComponent(this._Item_81_4.context, [], compView_81);
        this._text_82 = this.renderer.createText(null, '\n        ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_83_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_83), this.renderer, null, null, null, null);
        this._text_84 = this.renderer.createText(this._el_83, 'Seravek', null);
        this._text_85 = this.renderer.createText(null, '\n        ', null);
        this._el_86 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_86, 'value', 'Seravek');
        this._appEl_86 = new import3.AppElement(86, 81, this, this._el_86);
        var compView_86 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(86), this._appEl_86);
        this._RadioButton_86_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_86), this.renderer, this._Item_81_4.context, this._RadioGroup_1_3.context);
        this._appEl_86.initComponent(this._RadioButton_86_4.context, [], compView_86);
        compView_86.create(this._RadioButton_86_4.context, [], null);
        this._text_87 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_81_0.reset([this._Label_83_3.context]);
        this._Item_81_4.context.contentLabel = this._query_Label_81_0.first;
        compView_81.create(this._Item_81_4.context, [
            [],
            [].concat([this._el_83]),
            [].concat([
                this._text_82,
                this._text_85,
                this._text_87
            ]),
            [],
            [].concat([this._el_86])
        ], null);
        this._text_88 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_89 = this.renderer.createElement(this._el_1, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_89, 'class', 'text-times-new-roman item item-block');
        this._appEl_89 = new import3.AppElement(89, 1, this, this._el_89);
        var compView_89 = import17.viewFactory_Item0(this.viewUtils, this.injector(89), this._appEl_89);
        this._Item_89_4 = new import17.Wrapper_Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_89), this.renderer);
        this._ItemContent_89_5 = new import17.Wrapper_ItemContent();
        this._query_Label_89_0 = new import15.QueryList();
        this._query_Button_89_1 = new import15.QueryList();
        this._query_Icon_89_2 = new import15.QueryList();
        this._appEl_89.initComponent(this._Item_89_4.context, [], compView_89);
        this._text_90 = this.renderer.createText(null, '\n        ', null);
        this._el_91 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_91_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_91), this.renderer, null, null, null, null);
        this._text_92 = this.renderer.createText(this._el_91, 'Times New Roman', null);
        this._text_93 = this.renderer.createText(null, '\n        ', null);
        this._el_94 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_94, 'value', 'Times New Roman');
        this._appEl_94 = new import3.AppElement(94, 89, this, this._el_94);
        var compView_94 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(94), this._appEl_94);
        this._RadioButton_94_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import24.Form), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_94), this.renderer, this._Item_89_4.context, this._RadioGroup_1_3.context);
        this._appEl_94.initComponent(this._RadioButton_94_4.context, [], compView_94);
        compView_94.create(this._RadioButton_94_4.context, [], null);
        this._text_95 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_89_0.reset([this._Label_91_3.context]);
        this._Item_89_4.context.contentLabel = this._query_Label_89_0.first;
        compView_89.create(this._Item_89_4.context, [
            [],
            [].concat([this._el_91]),
            [].concat([
                this._text_90,
                this._text_93,
                this._text_95
            ]),
            [],
            [].concat([this._el_94])
        ], null);
        this._text_96 = this.renderer.createText(this._el_1, '\n    ', null);
        this._query_ListHeader_1_0.reset([]);
        this._RadioGroup_1_3.context._header = this._query_ListHeader_1_0.first;
        this._text_97 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_1_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_1, 'ionChange', this.eventHandler(this._handle_ionChange_1_1.bind(this)));
        var subscription_0 = this._RadioGroup_1_3.context.ionChange.subscribe(this.eventHandler(this._handle_ionChange_1_1.bind(this)));
        var subscription_1 = this._NgModel_1_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_1_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_22, 'click', this.eventHandler(this._handle_click_22_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_32, 'click', this.eventHandler(this._handle_click_32_0.bind(this)));
        this._expr_18 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_37, 'click', this.eventHandler(this._handle_click_37_0.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_46, 'click', this.eventHandler(this._handle_click_46_0.bind(this)));
        this._expr_21 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_54, 'click', this.eventHandler(this._handle_click_54_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_62, 'click', this.eventHandler(this._handle_click_62_0.bind(this)));
        this._expr_27 = import7.UNINITIALIZED;
        var disposable_11 = this.renderer.listen(this._el_70, 'click', this.eventHandler(this._handle_click_70_0.bind(this)));
        this._expr_30 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_78, 'click', this.eventHandler(this._handle_click_78_0.bind(this)));
        this._expr_33 = import7.UNINITIALIZED;
        var disposable_13 = this.renderer.listen(this._el_86, 'click', this.eventHandler(this._handle_click_86_0.bind(this)));
        this._expr_36 = import7.UNINITIALIZED;
        var disposable_14 = this.renderer.listen(this._el_94, 'click', this.eventHandler(this._handle_click_94_0.bind(this)));
        this._expr_39 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
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
            this._text_34,
            this._el_35,
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
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._el_91,
            this._text_92,
            this._text_93,
            this._el_94,
            this._text_95,
            this._text_96,
            this._text_97
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
            disposable_14
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    };
    _View_PopoverRadioPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.Item) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Item_7_4.context;
        }
        if (((token === import25.ItemContent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ItemContent_7_5.context;
        }
        if (((token === import26.Col) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Col_5_3.context;
        }
        if (((token === import25.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4.context;
        }
        if (((token === import25.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ItemContent_13_5.context;
        }
        if (((token === import26.Col) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Col_11_3.context;
        }
        if (((token === import26.Row) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Row_3_3.context;
        }
        if (((token === import27.Button) && (22 === requestNodeIndex))) {
            return this._Button_22_4.context;
        }
        if (((token === import26.Col) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Col_20_3.context;
        }
        if (((token === import27.Button) && (27 === requestNodeIndex))) {
            return this._Button_27_4.context;
        }
        if (((token === import26.Col) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Col_25_3.context;
        }
        if (((token === import27.Button) && (32 === requestNodeIndex))) {
            return this._Button_32_4.context;
        }
        if (((token === import26.Col) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Col_30_3.context;
        }
        if (((token === import27.Button) && (37 === requestNodeIndex))) {
            return this._Button_37_4.context;
        }
        if (((token === import26.Col) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Col_35_3.context;
        }
        if (((token === import26.Row) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Row_18_3.context;
        }
        if (((token === import28.Label) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Label_43_3.context;
        }
        if (((token === import29.RadioButton) && (46 === requestNodeIndex))) {
            return this._RadioButton_46_4.context;
        }
        if (((token === import25.Item) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Item_41_4.context;
        }
        if (((token === import25.ItemContent) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._ItemContent_41_5.context;
        }
        if (((token === import28.Label) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._Label_51_3.context;
        }
        if (((token === import29.RadioButton) && (54 === requestNodeIndex))) {
            return this._RadioButton_54_4.context;
        }
        if (((token === import25.Item) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Item_49_4.context;
        }
        if (((token === import25.ItemContent) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._ItemContent_49_5.context;
        }
        if (((token === import28.Label) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._Label_59_3.context;
        }
        if (((token === import29.RadioButton) && (62 === requestNodeIndex))) {
            return this._RadioButton_62_4.context;
        }
        if (((token === import25.Item) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Item_57_4.context;
        }
        if (((token === import25.ItemContent) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._ItemContent_57_5.context;
        }
        if (((token === import28.Label) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Label_67_3.context;
        }
        if (((token === import29.RadioButton) && (70 === requestNodeIndex))) {
            return this._RadioButton_70_4.context;
        }
        if (((token === import25.Item) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Item_65_4.context;
        }
        if (((token === import25.ItemContent) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._ItemContent_65_5.context;
        }
        if (((token === import28.Label) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._Label_75_3.context;
        }
        if (((token === import29.RadioButton) && (78 === requestNodeIndex))) {
            return this._RadioButton_78_4.context;
        }
        if (((token === import25.Item) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Item_73_4.context;
        }
        if (((token === import25.ItemContent) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ItemContent_73_5.context;
        }
        if (((token === import28.Label) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Label_83_3.context;
        }
        if (((token === import29.RadioButton) && (86 === requestNodeIndex))) {
            return this._RadioButton_86_4.context;
        }
        if (((token === import25.Item) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Item_81_4.context;
        }
        if (((token === import25.ItemContent) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._ItemContent_81_5.context;
        }
        if (((token === import28.Label) && ((91 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._Label_91_3.context;
        }
        if (((token === import29.RadioButton) && (94 === requestNodeIndex))) {
            return this._RadioButton_94_4.context;
        }
        if (((token === import25.Item) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 95)))) {
            return this._Item_89_4.context;
        }
        if (((token === import25.ItemContent) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 95)))) {
            return this._ItemContent_89_5.context;
        }
        if (((token === import30.RadioGroup) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._RadioGroup_1_3.context;
        }
        if (((token === import31.NG_VALUE_ACCESSOR) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._NG_VALUE_ACCESSOR_1_4;
        }
        if (((token === import32.NgModel) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._NgModel_1_5.context;
        }
        if (((token === import33.NgControl) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._NgControl_1_6;
        }
        if (((token === import34.NgControlStatus) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._NgControlStatus_1_7.context;
        }
        if (((token === import35.List) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 96)))) {
            return this._List_1_8.context;
        }
        return notFoundResult;
    };
    _View_PopoverRadioPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RadioGroup_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        var currVal_2 = this.context.fontFamily;
        this._NgModel_1_5.check_model(currVal_2, throwOnChange, false);
        this._NgModel_1_5.detectChangesInternal(this, this._el_1, throwOnChange);
        this._NgControlStatus_1_7.detectChangesInternal(this, this._el_1, throwOnChange);
        this._List_1_8.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Row_3_3.detectChangesInternal(this, this._el_3, throwOnChange);
        this._Col_5_3.detectChangesInternal(this, this._el_5, throwOnChange);
        if (this._Item_7_4.detectChangesInternal(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        this._ItemContent_7_5.detectChangesInternal(this, this._el_7, throwOnChange);
        this._Col_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        if (this._Item_13_4.detectChangesInternal(this, this._el_13, throwOnChange)) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        this._ItemContent_13_5.detectChangesInternal(this, this._el_13, throwOnChange);
        this._Row_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        this._Col_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        if (this._Button_22_4.detectChangesInternal(this, this._el_22, throwOnChange)) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        this._Col_25_3.detectChangesInternal(this, this._el_25, throwOnChange);
        if (this._Button_27_4.detectChangesInternal(this, this._el_27, throwOnChange)) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        this._Col_30_3.detectChangesInternal(this, this._el_30, throwOnChange);
        if (this._Button_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._Col_35_3.detectChangesInternal(this, this._el_35, throwOnChange);
        if (this._Button_37_4.detectChangesInternal(this, this._el_37, throwOnChange)) {
            this._appEl_37.componentView.markAsCheckOnce();
        }
        if (this._Item_41_4.detectChangesInternal(this, this._el_41, throwOnChange)) {
            this._appEl_41.componentView.markAsCheckOnce();
        }
        this._ItemContent_41_5.detectChangesInternal(this, this._el_41, throwOnChange);
        this._Label_43_3.detectChangesInternal(this, this._el_43, throwOnChange);
        var currVal_20 = 'Athelas';
        this._RadioButton_46_4.check_value(currVal_20, throwOnChange, false);
        this._RadioButton_46_4.detectChangesInternal(this, this._el_46, throwOnChange);
        if (this._Item_49_4.detectChangesInternal(this, this._el_49, throwOnChange)) {
            this._appEl_49.componentView.markAsCheckOnce();
        }
        this._ItemContent_49_5.detectChangesInternal(this, this._el_49, throwOnChange);
        this._Label_51_3.detectChangesInternal(this, this._el_51, throwOnChange);
        var currVal_23 = 'Charter';
        this._RadioButton_54_4.check_value(currVal_23, throwOnChange, false);
        this._RadioButton_54_4.detectChangesInternal(this, this._el_54, throwOnChange);
        if (this._Item_57_4.detectChangesInternal(this, this._el_57, throwOnChange)) {
            this._appEl_57.componentView.markAsCheckOnce();
        }
        this._ItemContent_57_5.detectChangesInternal(this, this._el_57, throwOnChange);
        this._Label_59_3.detectChangesInternal(this, this._el_59, throwOnChange);
        var currVal_26 = 'Iowan';
        this._RadioButton_62_4.check_value(currVal_26, throwOnChange, false);
        this._RadioButton_62_4.detectChangesInternal(this, this._el_62, throwOnChange);
        if (this._Item_65_4.detectChangesInternal(this, this._el_65, throwOnChange)) {
            this._appEl_65.componentView.markAsCheckOnce();
        }
        this._ItemContent_65_5.detectChangesInternal(this, this._el_65, throwOnChange);
        this._Label_67_3.detectChangesInternal(this, this._el_67, throwOnChange);
        var currVal_29 = 'Palatino';
        this._RadioButton_70_4.check_value(currVal_29, throwOnChange, false);
        this._RadioButton_70_4.detectChangesInternal(this, this._el_70, throwOnChange);
        if (this._Item_73_4.detectChangesInternal(this, this._el_73, throwOnChange)) {
            this._appEl_73.componentView.markAsCheckOnce();
        }
        this._ItemContent_73_5.detectChangesInternal(this, this._el_73, throwOnChange);
        this._Label_75_3.detectChangesInternal(this, this._el_75, throwOnChange);
        var currVal_32 = 'San Francisco';
        this._RadioButton_78_4.check_value(currVal_32, throwOnChange, false);
        this._RadioButton_78_4.detectChangesInternal(this, this._el_78, throwOnChange);
        if (this._Item_81_4.detectChangesInternal(this, this._el_81, throwOnChange)) {
            this._appEl_81.componentView.markAsCheckOnce();
        }
        this._ItemContent_81_5.detectChangesInternal(this, this._el_81, throwOnChange);
        this._Label_83_3.detectChangesInternal(this, this._el_83, throwOnChange);
        var currVal_35 = 'Seravek';
        this._RadioButton_86_4.check_value(currVal_35, throwOnChange, false);
        this._RadioButton_86_4.detectChangesInternal(this, this._el_86, throwOnChange);
        if (this._Item_89_4.detectChangesInternal(this, this._el_89, throwOnChange)) {
            this._appEl_89.componentView.markAsCheckOnce();
        }
        this._ItemContent_89_5.detectChangesInternal(this, this._el_89, throwOnChange);
        this._Label_91_3.detectChangesInternal(this, this._el_91, throwOnChange);
        var currVal_38 = 'Times New Roman';
        this._RadioButton_94_4.check_value(currVal_38, throwOnChange, false);
        this._RadioButton_94_4.detectChangesInternal(this, this._el_94, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_7_1.dirty) {
                this._query_Button_7_1.reset([]);
                this._Item_7_4.context._buttons = this._query_Button_7_1;
                this._query_Button_7_1.notifyOnChanges();
            }
            if (this._query_Icon_7_2.dirty) {
                this._query_Icon_7_2.reset([]);
                this._Item_7_4.context._icons = this._query_Icon_7_2;
                this._query_Icon_7_2.notifyOnChanges();
            }
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
            if (this._query_Button_41_1.dirty) {
                this._query_Button_41_1.reset([]);
                this._Item_41_4.context._buttons = this._query_Button_41_1;
                this._query_Button_41_1.notifyOnChanges();
            }
            if (this._query_Icon_41_2.dirty) {
                this._query_Icon_41_2.reset([]);
                this._Item_41_4.context._icons = this._query_Icon_41_2;
                this._query_Icon_41_2.notifyOnChanges();
            }
            if (this._query_Button_49_1.dirty) {
                this._query_Button_49_1.reset([]);
                this._Item_49_4.context._buttons = this._query_Button_49_1;
                this._query_Button_49_1.notifyOnChanges();
            }
            if (this._query_Icon_49_2.dirty) {
                this._query_Icon_49_2.reset([]);
                this._Item_49_4.context._icons = this._query_Icon_49_2;
                this._query_Icon_49_2.notifyOnChanges();
            }
            if (this._query_Button_57_1.dirty) {
                this._query_Button_57_1.reset([]);
                this._Item_57_4.context._buttons = this._query_Button_57_1;
                this._query_Button_57_1.notifyOnChanges();
            }
            if (this._query_Icon_57_2.dirty) {
                this._query_Icon_57_2.reset([]);
                this._Item_57_4.context._icons = this._query_Icon_57_2;
                this._query_Icon_57_2.notifyOnChanges();
            }
            if (this._query_Button_65_1.dirty) {
                this._query_Button_65_1.reset([]);
                this._Item_65_4.context._buttons = this._query_Button_65_1;
                this._query_Button_65_1.notifyOnChanges();
            }
            if (this._query_Icon_65_2.dirty) {
                this._query_Icon_65_2.reset([]);
                this._Item_65_4.context._icons = this._query_Icon_65_2;
                this._query_Icon_65_2.notifyOnChanges();
            }
            if (this._query_Button_73_1.dirty) {
                this._query_Button_73_1.reset([]);
                this._Item_73_4.context._buttons = this._query_Button_73_1;
                this._query_Button_73_1.notifyOnChanges();
            }
            if (this._query_Icon_73_2.dirty) {
                this._query_Icon_73_2.reset([]);
                this._Item_73_4.context._icons = this._query_Icon_73_2;
                this._query_Icon_73_2.notifyOnChanges();
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
            if (this._query_Button_89_1.dirty) {
                this._query_Button_89_1.reset([]);
                this._Item_89_4.context._buttons = this._query_Button_89_1;
                this._query_Button_89_1.notifyOnChanges();
            }
            if (this._query_Icon_89_2.dirty) {
                this._query_Icon_89_2.reset([]);
                this._Item_89_4.context._icons = this._query_Icon_89_2;
                this._query_Icon_89_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_7_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_22_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_27_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_37_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_41_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_49_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_57_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_65_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_73_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_81_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_89_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_1_3.context.ngAfterContentInit();
            }
        }
        var currVal_3 = this._NgControlStatus_1_7.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_1, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatus_1_7.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_1, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatus_1_7.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_1, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_1_7.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_1, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_1_7.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_1, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_1_7.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_1, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_12 = (this.context.background == 'white');
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_22, 'selected', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_14 = (this.context.background == 'tan');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_27, 'selected', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_16 = (this.context.background == 'grey');
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_32, 'selected', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = (this.context.background == 'black');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_37, 'selected', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_21 = this._RadioButton_46_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_46, 'radio-disabled', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_24 = this._RadioButton_54_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_54, 'radio-disabled', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_27 = this._RadioButton_62_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_62, 'radio-disabled', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_30 = this._RadioButton_70_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_70, 'radio-disabled', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_33 = this._RadioButton_78_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_78, 'radio-disabled', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_36 = this._RadioButton_86_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_86, 'radio-disabled', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_39 = this._RadioButton_94_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_94, 'radio-disabled', currVal_39);
            this._expr_39 = currVal_39;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_PopoverRadioPage0.prototype.destroyInternal = function () {
        this._RadioButton_46_4.context.ngOnDestroy();
        this._RadioButton_54_4.context.ngOnDestroy();
        this._RadioButton_62_4.context.ngOnDestroy();
        this._RadioButton_70_4.context.ngOnDestroy();
        this._RadioButton_78_4.context.ngOnDestroy();
        this._RadioButton_86_4.context.ngOnDestroy();
        this._RadioButton_94_4.context.ngOnDestroy();
        this._NgModel_1_5.context.ngOnDestroy();
    };
    _View_PopoverRadioPage0.prototype._handle_ngModelChange_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.fontFamily = $event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_ionChange_1_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeFontFamily() !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeFontSize('smaller') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeFontSize('larger') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeBackground('white') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeBackground('tan') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_32_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeBackground('grey') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_37_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.changeBackground('black') !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_46_0 = function ($event) {
        this._appEl_46.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_46_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_54_0 = function ($event) {
        this._appEl_54.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_54_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_62_0 = function ($event) {
        this._appEl_62.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_62_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_70_0 = function ($event) {
        this._appEl_70.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_70_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_78_0 = function ($event) {
        this._appEl_78.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_78_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_86_0 = function ($event) {
        this._appEl_86.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_86_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_PopoverRadioPage0.prototype._handle_click_94_0 = function ($event) {
        this._appEl_94.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_94_4.context._click($event) !== false);
        return (true && pd_0);
    };
    return _View_PopoverRadioPage0;
}(import1.AppView));
export function viewFactory_PopoverRadioPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PopoverRadioPage === null)) {
        (renderType_PopoverRadioPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_PopoverRadioPage, {}));
    }
    return new _View_PopoverRadioPage0(viewUtils, parentInjector, declarationEl);
}
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
        this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage(this.parentInjector.get(import36.PopoverController));
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
        this._viewQuery_popoverContent_0 = new import15.QueryList();
        this._viewQuery_popoverText_1 = new import15.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import37.Wrapper_Header(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import43.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import38.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import38.Wrapper_Navbar(this.parentInjector.get(import44.App), this.parentInjector.get(import43.ViewController, null), this.parentInjector.get(import45.NavController, null), this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import39.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import39.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import46.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Popover', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_7, 'end', '');
        this._ToolbarItem_7_3 = new import40.Wrapper_ToolbarItem(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_7), this.renderer, this.parentInjector.get(import46.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_7_0 = new import15.QueryList();
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_9, 'ion-button', '');
        this._appEl_9 = new import3.AppElement(9, 7, this, this._el_9);
        var compView_9 = import18.viewFactory_Button0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Button_9_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_9), this.renderer);
        this._appEl_9.initComponent(this._Button_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n        ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_11, 'name', 'more');
        this.renderer.setElementAttribute(this._el_11, 'role', 'img');
        this._Icon_11_3 = new import41.Wrapper_Icon(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_11), this.renderer);
        this._text_12 = this.renderer.createText(null, '\n      ', null);
        compView_9.create(this._Button_9_4.context, [[].concat([
                this._text_10,
                this._el_11,
                this._text_12
            ])], null);
        this._text_13 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_14 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [].concat([this._el_7]),
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6,
                this._text_14
            ])
        ], null);
        this._text_15 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_17 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_17, 'padding', '');
        this._appEl_17 = new import3.AppElement(17, null, this, this._el_17);
        var compView_17 = import42.viewFactory_Content0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Content_17_4 = new import42.Wrapper_Content(this.parentInjector.get(import22.Config), new import21.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import44.App), this.parentInjector.get(import47.Keyboard), this.parentInjector.get(import48.NgZone), this.parentInjector.get(import43.ViewController, null), this.parentInjector.get(import49.Tabs, null));
        this._appEl_17.initComponent(this._Content_17_4.context, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'text-to-change');
        this._text_20 = this.renderer.createText(this._el_19, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'div', null);
        this._text_22 = this.renderer.createText(this._el_21, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_19, 'div', null);
        this._text_25 = this.renderer.createText(this._el_24, 'Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n\n    ', null);
        this._el_27 = this.renderer.createElement(this._el_19, 'div', null);
        this._text_28 = this.renderer.createText(this._el_27, 'Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n\n    ', null);
        this._el_30 = this.renderer.createElement(this._el_19, 'div', null);
        this._text_31 = this.renderer.createText(this._el_30, 'Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.', null);
        this._text_32 = this.renderer.createText(this._el_19, '\n\n    ', null);
        this._el_33 = this.renderer.createElement(this._el_19, 'div', null);
        this._text_34 = this.renderer.createText(this._el_33, 'Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;', null);
        this._text_35 = this.renderer.createText(this._el_19, '\n  ', null);
        this._text_36 = this.renderer.createText(null, '\n\n', null);
        compView_17.create(this._Content_17_4.context, [
            [],
            [].concat([
                this._text_18,
                this._el_19,
                this._text_36
            ]),
            []
        ], null);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._viewQuery_popoverContent_0.reset([new import21.ElementRef(this._el_17)]);
        this.context.content = this._viewQuery_popoverContent_0.first;
        this._viewQuery_popoverText_1.reset([new import21.ElementRef(this._el_19)]);
        this.context.text = this._viewQuery_popoverText_1.first;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
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
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37
        ], [disposable_0], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import50.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import51.Icon) && (11 === requestNodeIndex))) {
            return this._Icon_11_3.context;
        }
        if (((token === import27.Button) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Button_9_4.context;
        }
        if (((token === import52.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._ToolbarItem_7_3.context;
        }
        if (((token === import53.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import46.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Header_0_3.context;
        }
        if (((token === import54.Content) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Content_17_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = 'primary';
        this._Navbar_2_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_7_3.detectChangesInternal(this, this._el_7, throwOnChange);
        if (this._Button_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        var currVal_4 = 'more';
        this._Icon_11_3.check_name(currVal_4, throwOnChange, false);
        this._Icon_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        if (this._Content_17_4.detectChangesInternal(this, this._el_17, throwOnChange)) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_7_0.dirty) {
                this._query_Button_7_0.reset([this._Button_9_4.context]);
                this._ToolbarItem_7_3.context._buttons = this._query_Button_7_0;
                this._query_Button_7_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_9_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._Icon_11_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_11, 'hide', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Content_17_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_17, 'statusbar-padding', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_11_3.context.ngOnDestroy();
        this._Content_17_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentRadioPopover($event) !== false);
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
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import55.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import55.Wrapper_Nav(this.parentInjector.get(import43.ViewController, null), this.parentInjector.get(import56.NavControllerBase, null), this.parentInjector.get(import44.App), this.parentInjector.get(import22.Config), this.parentInjector.get(import47.Keyboard), new import21.ElementRef(this._el_0), this.parentInjector.get(import48.NgZone), this.renderer, this.parentInjector.get(import57.ComponentFactoryResolver), this.parentInjector.get(import23.GestureController), this.parentInjector.get(import58.TransitionController), this.parentInjector.get(import59.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import60.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
