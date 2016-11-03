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
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/toggle/toggle.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/note/note.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/radio/radio-group.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/radio/radio-button.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/navigation/nav-controller';
import * as import30 from 'ionic-angular/components/toolbar/toolbar';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from 'ionic-angular/util/haptic';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import38 from 'ionic-angular/components/navbar/navbar';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/list/list-header';
import * as import41 from 'ionic-angular/components/icon/icon';
import * as import42 from 'ionic-angular/components/label/label';
import * as import43 from 'ionic-angular/components/toggle/toggle';
import * as import44 from '@angular/forms/src/directives/control_value_accessor';
import * as import45 from 'ionic-angular/components/note/note';
import * as import46 from 'ionic-angular/components/list/list';
import * as import47 from 'ionic-angular/components/radio/radio-button';
import * as import48 from 'ionic-angular/components/radio/radio-group';
import * as import49 from 'ionic-angular/components/button/button';
import * as import50 from 'ionic-angular/components/content/content';
import * as import51 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import52 from 'ionic-angular/navigation/nav-controller-base';
import * as import53 from '@angular/core/src/linker/component_factory_resolver';
import * as import54 from 'ionic-angular/transitions/transition-controller';
import * as import55 from 'ionic-angular/navigation/deep-linker';
import * as import56 from 'ionic-angular/components/nav/nav';
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
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_23_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_23_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_23_5 = [this._Toggle_23_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_23_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_68_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_68_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_68_5 = [this._RadioGroup_68_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_68_5;
        },
        enumerable: true,
        configurable: true
    });
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import29.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'List', null);
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
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import31.Keyboard), this.parentInjector.get(import32.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import33.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import17.QueryList();
        this._query_Button_13_1 = new import17.QueryList();
        this._query_Icon_13_2 = new import17.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Settings\n    ', null);
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
        this._Item_16_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import15.Wrapper_ItemContent();
        this._query_Label_16_0 = new import17.QueryList();
        this._query_Button_16_1 = new import17.QueryList();
        this._query_Icon_16_2 = new import17.QueryList();
        this._appEl_16.initComponent(this._Item_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_18, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_18, 'item-left', '');
        this.renderer.setElementAttribute(this._el_18, 'name', 'plane');
        this.renderer.setElementAttribute(this._el_18, 'role', 'img');
        this._Icon_18_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_18), this.renderer);
        this._text_19 = this.renderer.createText(null, '\n      ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_20_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_20), this.renderer, null, null, null, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Airplane Mode', null);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'secondary');
        this._appEl_23 = new import3.AppElement(23, 16, this, this._el_23);
        var compView_23 = import20.viewFactory_Toggle0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Toggle_23_4 = new import20.Wrapper_Toggle(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_23), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_16_4.context);
        this._appEl_23.initComponent(this._Toggle_23_4.context, [], compView_23);
        compView_23.create(this._Toggle_23_4.context, [], null);
        this._text_24 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_16_0.reset([this._Label_20_3.context]);
        this._Item_16_4.context.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4.context, [
            [].concat([this._el_18]),
            [].concat([this._el_20]),
            [].concat([
                this._text_17,
                this._text_19,
                this._text_22,
                this._text_24
            ]),
            [],
            [].concat([this._el_23])
        ], null);
        this._text_25 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_26 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_26, 'ion-item', '');
        this._appEl_26 = new import3.AppElement(26, 11, this, this._el_26);
        var compView_26 = import15.viewFactory_Item0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Item_26_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_26), this.renderer);
        this._ItemContent_26_5 = new import15.Wrapper_ItemContent();
        this._query_Label_26_0 = new import17.QueryList();
        this._query_Button_26_1 = new import17.QueryList();
        this._query_Icon_26_2 = new import17.QueryList();
        this._appEl_26.initComponent(this._Item_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n      ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_28, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_28, 'item-left', '');
        this.renderer.setElementAttribute(this._el_28, 'name', 'wifi');
        this.renderer.setElementAttribute(this._el_28, 'role', 'img');
        this._Icon_28_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_28), this.renderer);
        this._text_29 = this.renderer.createText(null, '\n      ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_30_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_30), this.renderer, null, null, null, null);
        this._text_31 = this.renderer.createText(this._el_30, 'Wi-Fi', null);
        this._text_32 = this.renderer.createText(null, '\n      ', null);
        this._el_33 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_33, 'item-right', '');
        this._Note_33_3 = new import21.Wrapper_Note();
        this._text_34 = this.renderer.createText(this._el_33, 'The Interwebz', null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_26_0.reset([this._Label_30_3.context]);
        this._Item_26_4.context.contentLabel = this._query_Label_26_0.first;
        compView_26.create(this._Item_26_4.context, [
            [].concat([this._el_28]),
            [].concat([this._el_30]),
            [].concat([
                this._text_27,
                this._text_29,
                this._text_32,
                this._text_35
            ]),
            [],
            [].concat([this._el_33])
        ], null);
        this._text_36 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_37 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_37, 'ion-item', '');
        this._appEl_37 = new import3.AppElement(37, 11, this, this._el_37);
        var compView_37 = import15.viewFactory_Item0(this.viewUtils, this.injector(37), this._appEl_37);
        this._Item_37_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_37), this.renderer);
        this._ItemContent_37_5 = new import15.Wrapper_ItemContent();
        this._query_Label_37_0 = new import17.QueryList();
        this._query_Button_37_1 = new import17.QueryList();
        this._query_Icon_37_2 = new import17.QueryList();
        this._appEl_37.initComponent(this._Item_37_4.context, [], compView_37);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_39, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_39, 'item-left', '');
        this.renderer.setElementAttribute(this._el_39, 'name', 'bluetooth');
        this.renderer.setElementAttribute(this._el_39, 'role', 'img');
        this._Icon_39_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_39), this.renderer);
        this._text_40 = this.renderer.createText(null, '\n      ', null);
        this._el_41 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_41_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_41), this.renderer, null, null, null, null);
        this._text_42 = this.renderer.createText(this._el_41, 'Bluetooth', null);
        this._text_43 = this.renderer.createText(null, '\n      ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_44, 'item-right', '');
        this._Note_44_3 = new import21.Wrapper_Note();
        this._text_45 = this.renderer.createText(this._el_44, 'Off', null);
        this._text_46 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_37_0.reset([this._Label_41_3.context]);
        this._Item_37_4.context.contentLabel = this._query_Label_37_0.first;
        compView_37.create(this._Item_37_4.context, [
            [].concat([this._el_39]),
            [].concat([this._el_41]),
            [].concat([
                this._text_38,
                this._text_40,
                this._text_43,
                this._text_46
            ]),
            [],
            [].concat([this._el_44])
        ], null);
        this._text_47 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_48 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_48, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_48, 'ion-item', '');
        this._appEl_48 = new import3.AppElement(48, 11, this, this._el_48);
        var compView_48 = import15.viewFactory_Item0(this.viewUtils, this.injector(48), this._appEl_48);
        this._Item_48_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_48), this.renderer);
        this._ItemContent_48_5 = new import15.Wrapper_ItemContent();
        this._query_Label_48_0 = new import17.QueryList();
        this._query_Button_48_1 = new import17.QueryList();
        this._query_Icon_48_2 = new import17.QueryList();
        this._appEl_48.initComponent(this._Item_48_4.context, [], compView_48);
        this._text_49 = this.renderer.createText(null, '\n      ', null);
        this._el_50 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_50, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_50, 'item-left', '');
        this.renderer.setElementAttribute(this._el_50, 'name', 'call');
        this.renderer.setElementAttribute(this._el_50, 'role', 'img');
        this._Icon_50_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_50), this.renderer);
        this._text_51 = this.renderer.createText(null, '\n      ', null);
        this._el_52 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_52_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_52), this.renderer, null, null, null, null);
        this._text_53 = this.renderer.createText(this._el_52, 'Cellular', null);
        this._text_54 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_48_0.reset([this._Label_52_3.context]);
        this._Item_48_4.context.contentLabel = this._query_Label_48_0.first;
        compView_48.create(this._Item_48_4.context, [
            [].concat([this._el_50]),
            [].concat([this._el_52]),
            [].concat([
                this._text_49,
                this._text_51,
                this._text_54
            ]),
            [],
            []
        ], null);
        this._text_55 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_56 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_56, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_56, 'ion-item', '');
        this._appEl_56 = new import3.AppElement(56, 11, this, this._el_56);
        var compView_56 = import15.viewFactory_Item0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Item_56_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_56), this.renderer);
        this._ItemContent_56_5 = new import15.Wrapper_ItemContent();
        this._query_Label_56_0 = new import17.QueryList();
        this._query_Button_56_1 = new import17.QueryList();
        this._query_Icon_56_2 = new import17.QueryList();
        this._appEl_56.initComponent(this._Item_56_4.context, [], compView_56);
        this._text_57 = this.renderer.createText(null, '\n      ', null);
        this._el_58 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_58, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_58, 'item-left', '');
        this.renderer.setElementAttribute(this._el_58, 'name', 'link');
        this.renderer.setElementAttribute(this._el_58, 'role', 'img');
        this._Icon_58_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_58), this.renderer);
        this._text_59 = this.renderer.createText(null, '\n      ', null);
        this._el_60 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_60_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_60), this.renderer, null, null, null, null);
        this._text_61 = this.renderer.createText(this._el_60, 'Personal Hotspot', null);
        this._text_62 = this.renderer.createText(null, '\n      ', null);
        this._el_63 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_63, 'item-right', '');
        this._Note_63_3 = new import21.Wrapper_Note();
        this._text_64 = this.renderer.createText(this._el_63, 'Off', null);
        this._text_65 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_56_0.reset([this._Label_60_3.context]);
        this._Item_56_4.context.contentLabel = this._query_Label_56_0.first;
        compView_56.create(this._Item_56_4.context, [
            [].concat([this._el_58]),
            [].concat([this._el_60]),
            [].concat([
                this._text_57,
                this._text_59,
                this._text_62,
                this._text_65
            ]),
            [],
            [].concat([this._el_63])
        ], null);
        this._text_66 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_67 = this.renderer.createText(null, '\n\n  ', null);
        this._el_68 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_68, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_68, 'role', 'radiogroup');
        this._List_68_3 = new import14.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_68), this.renderer, this.parentInjector.get(import34.GestureController));
        this._RadioGroup_68_4 = new import22.Wrapper_RadioGroup(this.renderer, new import26.ElementRef(this._el_68));
        this._query_ListHeader_68_0 = new import17.QueryList();
        this._text_69 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_68, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_70, 'class', 'item');
        this._appEl_70 = new import3.AppElement(70, 68, this, this._el_70);
        var compView_70 = import15.viewFactory_Item0(this.viewUtils, this.injector(70), this._appEl_70);
        this._Item_70_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_70), this.renderer);
        this._ListHeader_70_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_70), null);
        this._query_Label_70_0 = new import17.QueryList();
        this._query_Button_70_1 = new import17.QueryList();
        this._query_Icon_70_2 = new import17.QueryList();
        this._appEl_70.initComponent(this._Item_70_4.context, [], compView_70);
        this._text_71 = this.renderer.createText(null, '\n      Silence Phone\n    ', null);
        this._query_Label_70_0.reset([]);
        this._Item_70_4.context.contentLabel = this._query_Label_70_0.first;
        compView_70.create(this._Item_70_4.context, [
            [],
            [],
            [].concat([this._text_71]),
            [],
            []
        ], null);
        this._text_72 = this.renderer.createText(this._el_68, '\n\n    ', null);
        this._el_73 = this.renderer.createElement(this._el_68, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_73, 'class', 'item item-block');
        this._appEl_73 = new import3.AppElement(73, 68, this, this._el_73);
        var compView_73 = import15.viewFactory_Item0(this.viewUtils, this.injector(73), this._appEl_73);
        this._Item_73_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_73), this.renderer);
        this._ItemContent_73_5 = new import15.Wrapper_ItemContent();
        this._query_Label_73_0 = new import17.QueryList();
        this._query_Button_73_1 = new import17.QueryList();
        this._query_Icon_73_2 = new import17.QueryList();
        this._appEl_73.initComponent(this._Item_73_4.context, [], compView_73);
        this._text_74 = this.renderer.createText(null, '\n      ', null);
        this._el_75 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_75, 'color', 'dark');
        this._Label_75_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_75), this.renderer, null, null, null, null);
        this._text_76 = this.renderer.createText(this._el_75, 'Always', null);
        this._text_77 = this.renderer.createText(null, '\n      ', null);
        this._el_78 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_78, 'checked', '');
        this.renderer.setElementAttribute(this._el_78, 'value', 'always');
        this._appEl_78 = new import3.AppElement(78, 73, this, this._el_78);
        var compView_78 = import23.viewFactory_RadioButton0(this.viewUtils, this.injector(78), this._appEl_78);
        this._RadioButton_78_4 = new import23.Wrapper_RadioButton(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_78), this.renderer, this._Item_73_4.context, this._RadioGroup_68_4.context);
        this._appEl_78.initComponent(this._RadioButton_78_4.context, [], compView_78);
        compView_78.create(this._RadioButton_78_4.context, [], null);
        this._text_79 = this.renderer.createText(null, '\n    ', null);
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
        this._text_80 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_81 = this.renderer.createElement(this._el_68, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'item item-block');
        this._appEl_81 = new import3.AppElement(81, 68, this, this._el_81);
        var compView_81 = import15.viewFactory_Item0(this.viewUtils, this.injector(81), this._appEl_81);
        this._Item_81_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_81), this.renderer);
        this._ItemContent_81_5 = new import15.Wrapper_ItemContent();
        this._query_Label_81_0 = new import17.QueryList();
        this._query_Button_81_1 = new import17.QueryList();
        this._query_Icon_81_2 = new import17.QueryList();
        this._appEl_81.initComponent(this._Item_81_4.context, [], compView_81);
        this._text_82 = this.renderer.createText(null, '\n      ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_83, 'color', 'dark');
        this._Label_83_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_83), this.renderer, null, null, null, null);
        this._text_84 = this.renderer.createText(this._el_83, 'Only while phone is locked', null);
        this._text_85 = this.renderer.createText(null, '\n      ', null);
        this._el_86 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_86, 'value', 'locked');
        this._appEl_86 = new import3.AppElement(86, 81, this, this._el_86);
        var compView_86 = import23.viewFactory_RadioButton0(this.viewUtils, this.injector(86), this._appEl_86);
        this._RadioButton_86_4 = new import23.Wrapper_RadioButton(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_86), this.renderer, this._Item_81_4.context, this._RadioGroup_68_4.context);
        this._appEl_86.initComponent(this._RadioButton_86_4.context, [], compView_86);
        compView_86.create(this._RadioButton_86_4.context, [], null);
        this._text_87 = this.renderer.createText(null, '\n    ', null);
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
        this._text_88 = this.renderer.createText(this._el_68, '\n  ', null);
        this._query_ListHeader_68_0.reset([this._ListHeader_70_5.context]);
        this._RadioGroup_68_4.context._header = this._query_ListHeader_68_0.first;
        this._text_89 = this.renderer.createText(null, '\n\n  ', null);
        this._el_90 = this.renderer.createElement(null, 'ion-list', null);
        this._List_90_3 = new import14.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_90), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_91 = this.renderer.createText(this._el_90, '\n    ', null);
        this._el_92 = this.renderer.createElement(this._el_90, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_92, 'class', 'item');
        this._appEl_92 = new import3.AppElement(92, 90, this, this._el_92);
        var compView_92 = import15.viewFactory_Item0(this.viewUtils, this.injector(92), this._appEl_92);
        this._Item_92_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_92), this.renderer);
        this._ListHeader_92_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_92), null);
        this._query_Label_92_0 = new import17.QueryList();
        this._query_Button_92_1 = new import17.QueryList();
        this._query_Icon_92_2 = new import17.QueryList();
        this._appEl_92.initComponent(this._Item_92_4.context, [], compView_92);
        this._text_93 = this.renderer.createText(null, '\n      Apps Installed\n    ', null);
        this._query_Label_92_0.reset([]);
        this._Item_92_4.context.contentLabel = this._query_Label_92_0.first;
        compView_92.create(this._Item_92_4.context, [
            [],
            [],
            [].concat([this._text_93]),
            [],
            []
        ], null);
        this._text_94 = this.renderer.createText(this._el_90, '\n\n    ', null);
        this._el_95 = this.renderer.createElement(this._el_90, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_95, 'class', 'item item-block');
        this._appEl_95 = new import3.AppElement(95, 90, this, this._el_95);
        var compView_95 = import15.viewFactory_Item0(this.viewUtils, this.injector(95), this._appEl_95);
        this._Item_95_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_95), this.renderer);
        this._ItemContent_95_5 = new import15.Wrapper_ItemContent();
        this._query_Label_95_0 = new import17.QueryList();
        this._query_Button_95_1 = new import17.QueryList();
        this._query_Icon_95_2 = new import17.QueryList();
        this._appEl_95.initComponent(this._Item_95_4.context, [], compView_95);
        this._text_96 = this.renderer.createText(null, '\n      ', null);
        this._el_97 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_97, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_97, 'item-left', '');
        this.renderer.setElementAttribute(this._el_97, 'name', 'ionic');
        this.renderer.setElementAttribute(this._el_97, 'role', 'img');
        this._Icon_97_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_97), this.renderer);
        this._text_98 = this.renderer.createText(null, '\n      ', null);
        this._el_99 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_99_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_99), this.renderer, null, null, null, null);
        this._text_100 = this.renderer.createText(this._el_99, 'Ionic View', null);
        this._text_101 = this.renderer.createText(null, '\n      ', null);
        this._el_102 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_102, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_102, 'item-right', '');
        this.renderer.setElementAttribute(this._el_102, 'outline', '');
        this._appEl_102 = new import3.AppElement(102, 95, this, this._el_102);
        var compView_102 = import24.viewFactory_Button0(this.viewUtils, this.injector(102), this._appEl_102);
        this._Button_102_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_102), this.renderer);
        this._appEl_102.initComponent(this._Button_102_4.context, [], compView_102);
        this._text_103 = this.renderer.createText(null, 'Uninstall', null);
        compView_102.create(this._Button_102_4.context, [[].concat([this._text_103])], null);
        this._text_104 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_95_0.reset([this._Label_99_3.context]);
        this._Item_95_4.context.contentLabel = this._query_Label_95_0.first;
        compView_95.create(this._Item_95_4.context, [
            [].concat([this._el_97]),
            [].concat([this._el_99]),
            [].concat([
                this._text_96,
                this._text_98,
                this._text_101,
                this._text_104
            ]),
            [],
            [].concat([this._el_102])
        ], null);
        this._text_105 = this.renderer.createText(this._el_90, '\n    ', null);
        this._el_106 = this.renderer.createElement(this._el_90, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_106, 'class', 'item item-block');
        this._appEl_106 = new import3.AppElement(106, 90, this, this._el_106);
        var compView_106 = import15.viewFactory_Item0(this.viewUtils, this.injector(106), this._appEl_106);
        this._Item_106_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_106), this.renderer);
        this._ItemContent_106_5 = new import15.Wrapper_ItemContent();
        this._query_Label_106_0 = new import17.QueryList();
        this._query_Button_106_1 = new import17.QueryList();
        this._query_Icon_106_2 = new import17.QueryList();
        this._appEl_106.initComponent(this._Item_106_4.context, [], compView_106);
        this._text_107 = this.renderer.createText(null, '\n      ', null);
        this._el_108 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_108, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_108, 'item-left', '');
        this.renderer.setElementAttribute(this._el_108, 'name', 'brush');
        this.renderer.setElementAttribute(this._el_108, 'role', 'img');
        this._Icon_108_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_108), this.renderer);
        this._text_109 = this.renderer.createText(null, '\n      ', null);
        this._el_110 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_110_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_110), this.renderer, null, null, null, null);
        this._text_111 = this.renderer.createText(this._el_110, 'Ionic Creator', null);
        this._text_112 = this.renderer.createText(null, '\n      ', null);
        this._el_113 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_113, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_113, 'item-right', '');
        this.renderer.setElementAttribute(this._el_113, 'outline', '');
        this._appEl_113 = new import3.AppElement(113, 106, this, this._el_113);
        var compView_113 = import24.viewFactory_Button0(this.viewUtils, this.injector(113), this._appEl_113);
        this._Button_113_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_113), this.renderer);
        this._appEl_113.initComponent(this._Button_113_4.context, [], compView_113);
        this._text_114 = this.renderer.createText(null, 'Uninstall', null);
        compView_113.create(this._Button_113_4.context, [[].concat([this._text_114])], null);
        this._text_115 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_106_0.reset([this._Label_110_3.context]);
        this._Item_106_4.context.contentLabel = this._query_Label_106_0.first;
        compView_106.create(this._Item_106_4.context, [
            [].concat([this._el_108]),
            [].concat([this._el_110]),
            [].concat([
                this._text_107,
                this._text_109,
                this._text_112,
                this._text_115
            ]),
            [],
            [].concat([this._el_113])
        ], null);
        this._text_116 = this.renderer.createText(this._el_90, '\n    ', null);
        this._el_117 = this.renderer.createElement(this._el_90, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_117, 'class', 'item item-block');
        this._appEl_117 = new import3.AppElement(117, 90, this, this._el_117);
        var compView_117 = import15.viewFactory_Item0(this.viewUtils, this.injector(117), this._appEl_117);
        this._Item_117_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_117), this.renderer);
        this._ItemContent_117_5 = new import15.Wrapper_ItemContent();
        this._query_Label_117_0 = new import17.QueryList();
        this._query_Button_117_1 = new import17.QueryList();
        this._query_Icon_117_2 = new import17.QueryList();
        this._appEl_117.initComponent(this._Item_117_4.context, [], compView_117);
        this._text_118 = this.renderer.createText(null, '\n      ', null);
        this._el_119 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_119, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_119, 'item-left', '');
        this.renderer.setElementAttribute(this._el_119, 'name', 'logo-octocat');
        this.renderer.setElementAttribute(this._el_119, 'role', 'img');
        this._Icon_119_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_119), this.renderer);
        this._text_120 = this.renderer.createText(null, '\n      ', null);
        this._el_121 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_121_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_121), this.renderer, null, null, null, null);
        this._text_122 = this.renderer.createText(this._el_121, 'Hubstruck', null);
        this._text_123 = this.renderer.createText(null, '\n      ', null);
        this._el_124 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_124, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_124, 'item-right', '');
        this.renderer.setElementAttribute(this._el_124, 'outline', '');
        this._appEl_124 = new import3.AppElement(124, 117, this, this._el_124);
        var compView_124 = import24.viewFactory_Button0(this.viewUtils, this.injector(124), this._appEl_124);
        this._Button_124_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_124), this.renderer);
        this._appEl_124.initComponent(this._Button_124_4.context, [], compView_124);
        this._text_125 = this.renderer.createText(null, 'Uninstall', null);
        compView_124.create(this._Button_124_4.context, [[].concat([this._text_125])], null);
        this._text_126 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_117_0.reset([this._Label_121_3.context]);
        this._Item_117_4.context.contentLabel = this._query_Label_117_0.first;
        compView_117.create(this._Item_117_4.context, [
            [].concat([this._el_119]),
            [].concat([this._el_121]),
            [].concat([
                this._text_118,
                this._text_120,
                this._text_123,
                this._text_126
            ]),
            [],
            [].concat([this._el_124])
        ], null);
        this._text_127 = this.renderer.createText(this._el_90, '\n    ', null);
        this._el_128 = this.renderer.createElement(this._el_90, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_128, 'class', 'item item-block');
        this._appEl_128 = new import3.AppElement(128, 90, this, this._el_128);
        var compView_128 = import15.viewFactory_Item0(this.viewUtils, this.injector(128), this._appEl_128);
        this._Item_128_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_128), this.renderer);
        this._ItemContent_128_5 = new import15.Wrapper_ItemContent();
        this._query_Label_128_0 = new import17.QueryList();
        this._query_Button_128_1 = new import17.QueryList();
        this._query_Icon_128_2 = new import17.QueryList();
        this._appEl_128.initComponent(this._Item_128_4.context, [], compView_128);
        this._text_129 = this.renderer.createText(null, '\n      ', null);
        this._el_130 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_130, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_130, 'item-left', '');
        this.renderer.setElementAttribute(this._el_130, 'name', 'paw');
        this.renderer.setElementAttribute(this._el_130, 'role', 'img');
        this._Icon_130_3 = new import18.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_130), this.renderer);
        this._text_131 = this.renderer.createText(null, '\n      ', null);
        this._el_132 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_132_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_132), this.renderer, null, null, null, null);
        this._text_133 = this.renderer.createText(this._el_132, 'Barkpark', null);
        this._text_134 = this.renderer.createText(null, '\n      ', null);
        this._el_135 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_135, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_135, 'item-right', '');
        this.renderer.setElementAttribute(this._el_135, 'outline', '');
        this._appEl_135 = new import3.AppElement(135, 128, this, this._el_135);
        var compView_135 = import24.viewFactory_Button0(this.viewUtils, this.injector(135), this._appEl_135);
        this._Button_135_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_135), this.renderer);
        this._appEl_135.initComponent(this._Button_135_4.context, [], compView_135);
        this._text_136 = this.renderer.createText(null, 'Uninstall', null);
        compView_135.create(this._Button_135_4.context, [[].concat([this._text_136])], null);
        this._text_137 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_128_0.reset([this._Label_132_3.context]);
        this._Item_128_4.context.contentLabel = this._query_Label_128_0.first;
        compView_128.create(this._Item_128_4.context, [
            [].concat([this._el_130]),
            [].concat([this._el_132]),
            [].concat([
                this._text_129,
                this._text_131,
                this._text_134,
                this._text_137
            ]),
            [],
            [].concat([this._el_135])
        ], null);
        this._text_138 = this.renderer.createText(this._el_90, '\n  ', null);
        this._text_139 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_67,
                this._el_68,
                this._text_89,
                this._el_90,
                this._text_139
            ]),
            []
        ], null);
        this._text_140 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_78, 'click', this.eventHandler(this._handle_click_78_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_86, 'click', this.eventHandler(this._handle_click_86_0.bind(this)));
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
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
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
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
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._el_68,
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
            this._text_89,
            this._el_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._el_99,
            this._text_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._text_104,
            this._text_105,
            this._el_106,
            this._text_107,
            this._el_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._text_115,
            this._text_116,
            this._el_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._el_121,
            this._text_122,
            this._text_123,
            this._el_124,
            this._text_125,
            this._text_126,
            this._text_127,
            this._el_128,
            this._text_129,
            this._el_130,
            this._text_131,
            this._el_132,
            this._text_133,
            this._text_134,
            this._el_135,
            this._text_136,
            this._text_137,
            this._text_138,
            this._text_139,
            this._text_140
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import38.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import30.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import39.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4.context;
        }
        if (((token === import40.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5.context;
        }
        if (((token === import41.Icon) && (18 === requestNodeIndex))) {
            return this._Icon_18_3.context;
        }
        if (((token === import42.Label) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Label_20_3.context;
        }
        if (((token === import43.Toggle) && (23 === requestNodeIndex))) {
            return this._Toggle_23_4.context;
        }
        if (((token === import44.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_5;
        }
        if (((token === import39.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Item_16_4.context;
        }
        if (((token === import39.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._ItemContent_16_5.context;
        }
        if (((token === import41.Icon) && (28 === requestNodeIndex))) {
            return this._Icon_28_3.context;
        }
        if (((token === import42.Label) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Label_30_3.context;
        }
        if (((token === import45.Note) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Note_33_3.context;
        }
        if (((token === import39.Item) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_26_4.context;
        }
        if (((token === import39.ItemContent) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_26_5.context;
        }
        if (((token === import41.Icon) && (39 === requestNodeIndex))) {
            return this._Icon_39_3.context;
        }
        if (((token === import42.Label) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Label_41_3.context;
        }
        if (((token === import45.Note) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Note_44_3.context;
        }
        if (((token === import39.Item) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Item_37_4.context;
        }
        if (((token === import39.ItemContent) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ItemContent_37_5.context;
        }
        if (((token === import41.Icon) && (50 === requestNodeIndex))) {
            return this._Icon_50_3.context;
        }
        if (((token === import42.Label) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Label_52_3.context;
        }
        if (((token === import39.Item) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Item_48_4.context;
        }
        if (((token === import39.ItemContent) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._ItemContent_48_5.context;
        }
        if (((token === import41.Icon) && (58 === requestNodeIndex))) {
            return this._Icon_58_3.context;
        }
        if (((token === import42.Label) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._Label_60_3.context;
        }
        if (((token === import45.Note) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._Note_63_3.context;
        }
        if (((token === import39.Item) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Item_56_4.context;
        }
        if (((token === import39.ItemContent) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._ItemContent_56_5.context;
        }
        if (((token === import46.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._List_11_3.context;
        }
        if (((token === import39.Item) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Item_70_4.context;
        }
        if (((token === import40.ListHeader) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._ListHeader_70_5.context;
        }
        if (((token === import42.Label) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._Label_75_3.context;
        }
        if (((token === import47.RadioButton) && (78 === requestNodeIndex))) {
            return this._RadioButton_78_4.context;
        }
        if (((token === import39.Item) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Item_73_4.context;
        }
        if (((token === import39.ItemContent) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ItemContent_73_5.context;
        }
        if (((token === import42.Label) && ((83 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Label_83_3.context;
        }
        if (((token === import47.RadioButton) && (86 === requestNodeIndex))) {
            return this._RadioButton_86_4.context;
        }
        if (((token === import39.Item) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Item_81_4.context;
        }
        if (((token === import39.ItemContent) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._ItemContent_81_5.context;
        }
        if (((token === import46.List) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._List_68_3.context;
        }
        if (((token === import48.RadioGroup) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._RadioGroup_68_4.context;
        }
        if (((token === import44.NG_VALUE_ACCESSOR) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._NG_VALUE_ACCESSOR_68_5;
        }
        if (((token === import39.Item) && ((92 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._Item_92_4.context;
        }
        if (((token === import40.ListHeader) && ((92 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._ListHeader_92_5.context;
        }
        if (((token === import41.Icon) && (97 === requestNodeIndex))) {
            return this._Icon_97_3.context;
        }
        if (((token === import42.Label) && ((99 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._Label_99_3.context;
        }
        if (((token === import49.Button) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 103)))) {
            return this._Button_102_4.context;
        }
        if (((token === import39.Item) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._Item_95_4.context;
        }
        if (((token === import39.ItemContent) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._ItemContent_95_5.context;
        }
        if (((token === import41.Icon) && (108 === requestNodeIndex))) {
            return this._Icon_108_3.context;
        }
        if (((token === import42.Label) && ((110 <= requestNodeIndex) && (requestNodeIndex <= 111)))) {
            return this._Label_110_3.context;
        }
        if (((token === import49.Button) && ((113 <= requestNodeIndex) && (requestNodeIndex <= 114)))) {
            return this._Button_113_4.context;
        }
        if (((token === import39.Item) && ((106 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._Item_106_4.context;
        }
        if (((token === import39.ItemContent) && ((106 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._ItemContent_106_5.context;
        }
        if (((token === import41.Icon) && (119 === requestNodeIndex))) {
            return this._Icon_119_3.context;
        }
        if (((token === import42.Label) && ((121 <= requestNodeIndex) && (requestNodeIndex <= 122)))) {
            return this._Label_121_3.context;
        }
        if (((token === import49.Button) && ((124 <= requestNodeIndex) && (requestNodeIndex <= 125)))) {
            return this._Button_124_4.context;
        }
        if (((token === import39.Item) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 126)))) {
            return this._Item_117_4.context;
        }
        if (((token === import39.ItemContent) && ((117 <= requestNodeIndex) && (requestNodeIndex <= 126)))) {
            return this._ItemContent_117_5.context;
        }
        if (((token === import41.Icon) && (130 === requestNodeIndex))) {
            return this._Icon_130_3.context;
        }
        if (((token === import42.Label) && ((132 <= requestNodeIndex) && (requestNodeIndex <= 133)))) {
            return this._Label_132_3.context;
        }
        if (((token === import49.Button) && ((135 <= requestNodeIndex) && (requestNodeIndex <= 136)))) {
            return this._Button_135_4.context;
        }
        if (((token === import39.Item) && ((128 <= requestNodeIndex) && (requestNodeIndex <= 137)))) {
            return this._Item_128_4.context;
        }
        if (((token === import39.ItemContent) && ((128 <= requestNodeIndex) && (requestNodeIndex <= 137)))) {
            return this._ItemContent_128_5.context;
        }
        if (((token === import46.List) && ((90 <= requestNodeIndex) && (requestNodeIndex <= 138)))) {
            return this._List_90_3.context;
        }
        if (((token === import50.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 139)))) {
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
        var currVal_3 = 'danger';
        this._Icon_18_3.check_color(currVal_3, throwOnChange, false);
        var currVal_4 = 'plane';
        this._Icon_18_3.check_name(currVal_4, throwOnChange, false);
        this._Icon_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        this._Label_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        var currVal_6 = 'secondary';
        this._Toggle_23_4.check_color(currVal_6, throwOnChange, false);
        this._Toggle_23_4.detectChangesInternal(this, this._el_23, throwOnChange);
        if (this._Item_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        this._ItemContent_26_5.detectChangesInternal(this, this._el_26, throwOnChange);
        var currVal_8 = 'primary';
        this._Icon_28_3.check_color(currVal_8, throwOnChange, false);
        var currVal_9 = 'wifi';
        this._Icon_28_3.check_name(currVal_9, throwOnChange, false);
        this._Icon_28_3.detectChangesInternal(this, this._el_28, throwOnChange);
        this._Label_30_3.detectChangesInternal(this, this._el_30, throwOnChange);
        this._Note_33_3.detectChangesInternal(this, this._el_33, throwOnChange);
        if (this._Item_37_4.detectChangesInternal(this, this._el_37, throwOnChange)) {
            this._appEl_37.componentView.markAsCheckOnce();
        }
        this._ItemContent_37_5.detectChangesInternal(this, this._el_37, throwOnChange);
        var currVal_11 = 'primary';
        this._Icon_39_3.check_color(currVal_11, throwOnChange, false);
        var currVal_12 = 'bluetooth';
        this._Icon_39_3.check_name(currVal_12, throwOnChange, false);
        this._Icon_39_3.detectChangesInternal(this, this._el_39, throwOnChange);
        this._Label_41_3.detectChangesInternal(this, this._el_41, throwOnChange);
        this._Note_44_3.detectChangesInternal(this, this._el_44, throwOnChange);
        if (this._Item_48_4.detectChangesInternal(this, this._el_48, throwOnChange)) {
            this._appEl_48.componentView.markAsCheckOnce();
        }
        this._ItemContent_48_5.detectChangesInternal(this, this._el_48, throwOnChange);
        var currVal_14 = 'secondary';
        this._Icon_50_3.check_color(currVal_14, throwOnChange, false);
        var currVal_15 = 'call';
        this._Icon_50_3.check_name(currVal_15, throwOnChange, false);
        this._Icon_50_3.detectChangesInternal(this, this._el_50, throwOnChange);
        this._Label_52_3.detectChangesInternal(this, this._el_52, throwOnChange);
        if (this._Item_56_4.detectChangesInternal(this, this._el_56, throwOnChange)) {
            this._appEl_56.componentView.markAsCheckOnce();
        }
        this._ItemContent_56_5.detectChangesInternal(this, this._el_56, throwOnChange);
        var currVal_17 = 'secondary';
        this._Icon_58_3.check_color(currVal_17, throwOnChange, false);
        var currVal_18 = 'link';
        this._Icon_58_3.check_name(currVal_18, throwOnChange, false);
        this._Icon_58_3.detectChangesInternal(this, this._el_58, throwOnChange);
        this._Label_60_3.detectChangesInternal(this, this._el_60, throwOnChange);
        this._Note_63_3.detectChangesInternal(this, this._el_63, throwOnChange);
        this._List_68_3.detectChangesInternal(this, this._el_68, throwOnChange);
        this._RadioGroup_68_4.detectChangesInternal(this, this._el_68, throwOnChange);
        if (this._Item_70_4.detectChangesInternal(this, this._el_70, throwOnChange)) {
            this._appEl_70.componentView.markAsCheckOnce();
        }
        this._ListHeader_70_5.detectChangesInternal(this, this._el_70, throwOnChange);
        if (this._Item_73_4.detectChangesInternal(this, this._el_73, throwOnChange)) {
            this._appEl_73.componentView.markAsCheckOnce();
        }
        this._ItemContent_73_5.detectChangesInternal(this, this._el_73, throwOnChange);
        var currVal_20 = 'dark';
        this._Label_75_3.check_color(currVal_20, throwOnChange, false);
        this._Label_75_3.detectChangesInternal(this, this._el_75, throwOnChange);
        var currVal_22 = 'always';
        this._RadioButton_78_4.check_value(currVal_22, throwOnChange, false);
        var currVal_23 = '';
        this._RadioButton_78_4.check_checked(currVal_23, throwOnChange, false);
        this._RadioButton_78_4.detectChangesInternal(this, this._el_78, throwOnChange);
        if (this._Item_81_4.detectChangesInternal(this, this._el_81, throwOnChange)) {
            this._appEl_81.componentView.markAsCheckOnce();
        }
        this._ItemContent_81_5.detectChangesInternal(this, this._el_81, throwOnChange);
        var currVal_25 = 'dark';
        this._Label_83_3.check_color(currVal_25, throwOnChange, false);
        this._Label_83_3.detectChangesInternal(this, this._el_83, throwOnChange);
        var currVal_27 = 'locked';
        this._RadioButton_86_4.check_value(currVal_27, throwOnChange, false);
        this._RadioButton_86_4.detectChangesInternal(this, this._el_86, throwOnChange);
        this._List_90_3.detectChangesInternal(this, this._el_90, throwOnChange);
        if (this._Item_92_4.detectChangesInternal(this, this._el_92, throwOnChange)) {
            this._appEl_92.componentView.markAsCheckOnce();
        }
        this._ListHeader_92_5.detectChangesInternal(this, this._el_92, throwOnChange);
        if (this._Item_95_4.detectChangesInternal(this, this._el_95, throwOnChange)) {
            this._appEl_95.componentView.markAsCheckOnce();
        }
        this._ItemContent_95_5.detectChangesInternal(this, this._el_95, throwOnChange);
        var currVal_29 = 'primary';
        this._Icon_97_3.check_color(currVal_29, throwOnChange, false);
        var currVal_30 = 'ionic';
        this._Icon_97_3.check_name(currVal_30, throwOnChange, false);
        this._Icon_97_3.detectChangesInternal(this, this._el_97, throwOnChange);
        this._Label_99_3.detectChangesInternal(this, this._el_99, throwOnChange);
        var currVal_32 = '';
        this._Button_102_4.check_outline(currVal_32, throwOnChange, false);
        if (this._Button_102_4.detectChangesInternal(this, this._el_102, throwOnChange)) {
            this._appEl_102.componentView.markAsCheckOnce();
        }
        if (this._Item_106_4.detectChangesInternal(this, this._el_106, throwOnChange)) {
            this._appEl_106.componentView.markAsCheckOnce();
        }
        this._ItemContent_106_5.detectChangesInternal(this, this._el_106, throwOnChange);
        var currVal_33 = 'primary';
        this._Icon_108_3.check_color(currVal_33, throwOnChange, false);
        var currVal_34 = 'brush';
        this._Icon_108_3.check_name(currVal_34, throwOnChange, false);
        this._Icon_108_3.detectChangesInternal(this, this._el_108, throwOnChange);
        this._Label_110_3.detectChangesInternal(this, this._el_110, throwOnChange);
        var currVal_36 = '';
        this._Button_113_4.check_outline(currVal_36, throwOnChange, false);
        if (this._Button_113_4.detectChangesInternal(this, this._el_113, throwOnChange)) {
            this._appEl_113.componentView.markAsCheckOnce();
        }
        if (this._Item_117_4.detectChangesInternal(this, this._el_117, throwOnChange)) {
            this._appEl_117.componentView.markAsCheckOnce();
        }
        this._ItemContent_117_5.detectChangesInternal(this, this._el_117, throwOnChange);
        var currVal_37 = 'dark';
        this._Icon_119_3.check_color(currVal_37, throwOnChange, false);
        var currVal_38 = 'logo-octocat';
        this._Icon_119_3.check_name(currVal_38, throwOnChange, false);
        this._Icon_119_3.detectChangesInternal(this, this._el_119, throwOnChange);
        this._Label_121_3.detectChangesInternal(this, this._el_121, throwOnChange);
        var currVal_40 = '';
        this._Button_124_4.check_outline(currVal_40, throwOnChange, false);
        if (this._Button_124_4.detectChangesInternal(this, this._el_124, throwOnChange)) {
            this._appEl_124.componentView.markAsCheckOnce();
        }
        if (this._Item_128_4.detectChangesInternal(this, this._el_128, throwOnChange)) {
            this._appEl_128.componentView.markAsCheckOnce();
        }
        this._ItemContent_128_5.detectChangesInternal(this, this._el_128, throwOnChange);
        var currVal_41 = 'danger';
        this._Icon_130_3.check_color(currVal_41, throwOnChange, false);
        var currVal_42 = 'paw';
        this._Icon_130_3.check_name(currVal_42, throwOnChange, false);
        this._Icon_130_3.detectChangesInternal(this, this._el_130, throwOnChange);
        this._Label_132_3.detectChangesInternal(this, this._el_132, throwOnChange);
        var currVal_44 = '';
        this._Button_135_4.check_outline(currVal_44, throwOnChange, false);
        if (this._Button_135_4.detectChangesInternal(this, this._el_135, throwOnChange)) {
            this._appEl_135.componentView.markAsCheckOnce();
        }
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
                this._query_Icon_16_2.reset([this._Icon_18_3.context]);
                this._Item_16_4.context._icons = this._query_Icon_16_2;
                this._query_Icon_16_2.notifyOnChanges();
            }
            if (this._query_Button_26_1.dirty) {
                this._query_Button_26_1.reset([]);
                this._Item_26_4.context._buttons = this._query_Button_26_1;
                this._query_Button_26_1.notifyOnChanges();
            }
            if (this._query_Icon_26_2.dirty) {
                this._query_Icon_26_2.reset([this._Icon_28_3.context]);
                this._Item_26_4.context._icons = this._query_Icon_26_2;
                this._query_Icon_26_2.notifyOnChanges();
            }
            if (this._query_Button_37_1.dirty) {
                this._query_Button_37_1.reset([]);
                this._Item_37_4.context._buttons = this._query_Button_37_1;
                this._query_Button_37_1.notifyOnChanges();
            }
            if (this._query_Icon_37_2.dirty) {
                this._query_Icon_37_2.reset([this._Icon_39_3.context]);
                this._Item_37_4.context._icons = this._query_Icon_37_2;
                this._query_Icon_37_2.notifyOnChanges();
            }
            if (this._query_Button_48_1.dirty) {
                this._query_Button_48_1.reset([]);
                this._Item_48_4.context._buttons = this._query_Button_48_1;
                this._query_Button_48_1.notifyOnChanges();
            }
            if (this._query_Icon_48_2.dirty) {
                this._query_Icon_48_2.reset([this._Icon_50_3.context]);
                this._Item_48_4.context._icons = this._query_Icon_48_2;
                this._query_Icon_48_2.notifyOnChanges();
            }
            if (this._query_Button_56_1.dirty) {
                this._query_Button_56_1.reset([]);
                this._Item_56_4.context._buttons = this._query_Button_56_1;
                this._query_Button_56_1.notifyOnChanges();
            }
            if (this._query_Icon_56_2.dirty) {
                this._query_Icon_56_2.reset([this._Icon_58_3.context]);
                this._Item_56_4.context._icons = this._query_Icon_56_2;
                this._query_Icon_56_2.notifyOnChanges();
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
            if (this._query_Button_92_1.dirty) {
                this._query_Button_92_1.reset([]);
                this._Item_92_4.context._buttons = this._query_Button_92_1;
                this._query_Button_92_1.notifyOnChanges();
            }
            if (this._query_Icon_92_2.dirty) {
                this._query_Icon_92_2.reset([]);
                this._Item_92_4.context._icons = this._query_Icon_92_2;
                this._query_Icon_92_2.notifyOnChanges();
            }
            if (this._query_Button_95_1.dirty) {
                this._query_Button_95_1.reset([this._Button_102_4.context]);
                this._Item_95_4.context._buttons = this._query_Button_95_1;
                this._query_Button_95_1.notifyOnChanges();
            }
            if (this._query_Icon_95_2.dirty) {
                this._query_Icon_95_2.reset([this._Icon_97_3.context]);
                this._Item_95_4.context._icons = this._query_Icon_95_2;
                this._query_Icon_95_2.notifyOnChanges();
            }
            if (this._query_Button_106_1.dirty) {
                this._query_Button_106_1.reset([this._Button_113_4.context]);
                this._Item_106_4.context._buttons = this._query_Button_106_1;
                this._query_Button_106_1.notifyOnChanges();
            }
            if (this._query_Icon_106_2.dirty) {
                this._query_Icon_106_2.reset([this._Icon_108_3.context]);
                this._Item_106_4.context._icons = this._query_Icon_106_2;
                this._query_Icon_106_2.notifyOnChanges();
            }
            if (this._query_Button_117_1.dirty) {
                this._query_Button_117_1.reset([this._Button_124_4.context]);
                this._Item_117_4.context._buttons = this._query_Button_117_1;
                this._query_Button_117_1.notifyOnChanges();
            }
            if (this._query_Icon_117_2.dirty) {
                this._query_Icon_117_2.reset([this._Icon_119_3.context]);
                this._Item_117_4.context._icons = this._query_Icon_117_2;
                this._query_Icon_117_2.notifyOnChanges();
            }
            if (this._query_Button_128_1.dirty) {
                this._query_Button_128_1.reset([this._Button_135_4.context]);
                this._Item_128_4.context._buttons = this._query_Button_128_1;
                this._query_Button_128_1.notifyOnChanges();
            }
            if (this._query_Icon_128_2.dirty) {
                this._query_Icon_128_2.reset([this._Icon_130_3.context]);
                this._Item_128_4.context._icons = this._query_Icon_128_2;
                this._query_Icon_128_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_23_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_26_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_37_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_48_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_56_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_70_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_73_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_81_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_68_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_92_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_102_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_95_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_113_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_106_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_124_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_117_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_135_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_128_4.context.ngAfterContentInit();
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
        var currVal_5 = this._Icon_18_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_18, 'hide', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Toggle_23_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_23, 'toggle-disabled', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_10 = this._Icon_28_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_28, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_13 = this._Icon_39_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_39, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_16 = this._Icon_50_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_50, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_19 = this._Icon_58_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_58, 'hide', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_24 = this._RadioButton_78_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_78, 'radio-disabled', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_28 = this._RadioButton_86_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_86, 'radio-disabled', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_31 = this._Icon_97_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_97, 'hide', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_35 = this._Icon_108_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_108, 'hide', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_39 = this._Icon_119_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_119, 'hide', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_43 = this._Icon_130_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_130, 'hide', currVal_43);
            this._expr_43 = currVal_43;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_18_3.context.ngOnDestroy();
        this._Toggle_23_4.context.ngOnDestroy();
        this._Icon_28_3.context.ngOnDestroy();
        this._Icon_39_3.context.ngOnDestroy();
        this._Icon_50_3.context.ngOnDestroy();
        this._Icon_58_3.context.ngOnDestroy();
        this._RadioButton_78_4.context.ngOnDestroy();
        this._RadioButton_86_4.context.ngOnDestroy();
        this._Icon_97_3.context.ngOnDestroy();
        this._Icon_108_3.context.ngOnDestroy();
        this._Icon_119_3.context.ngOnDestroy();
        this._Icon_130_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_78_0 = function ($event) {
        this._appEl_78.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_78_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_86_0 = function ($event) {
        this._appEl_86.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_86_4.context._click($event) !== false);
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
        var compView_0 = import51.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import51.Wrapper_Nav(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import52.NavControllerBase, null), this.parentInjector.get(import28.App), this.parentInjector.get(import25.Config), this.parentInjector.get(import31.Keyboard), new import26.ElementRef(this._el_0), this.parentInjector.get(import32.NgZone), this.renderer, this.parentInjector.get(import53.ComponentFactoryResolver), this.parentInjector.get(import34.GestureController), this.parentInjector.get(import54.TransitionController), this.parentInjector.get(import55.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import56.Nav) && (0 === requestNodeIndex))) {
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
