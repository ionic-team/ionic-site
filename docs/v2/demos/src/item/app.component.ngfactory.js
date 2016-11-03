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
import * as import18 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/toggle/toggle.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/note/note.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/radio/radio-group.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/radio/radio-button.ngfactory';
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
import * as import39 from 'ionic-angular/components/icon/icon';
import * as import40 from 'ionic-angular/components/button/button';
import * as import41 from 'ionic-angular/components/item/item';
import * as import42 from 'ionic-angular/components/list/list-header';
import * as import43 from 'ionic-angular/components/label/label';
import * as import44 from 'ionic-angular/components/toggle/toggle';
import * as import45 from '@angular/forms/src/directives/control_value_accessor';
import * as import46 from 'ionic-angular/components/note/note';
import * as import47 from 'ionic-angular/components/list/list';
import * as import48 from 'ionic-angular/components/radio/radio-button';
import * as import49 from 'ionic-angular/components/radio/radio-group';
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
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_30_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_30_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_30_5 = [this._Toggle_30_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_30_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_82_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_82_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_82_5 = [this._RadioGroup_82_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_82_5;
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
        this._text_5 = this.renderer.createText(null, 'Item', null);
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
        this._text_14 = this.renderer.createText(null, '\n      Settings\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'clear', '');
        this.renderer.setElementAttribute(this._el_15, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_15, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_15, 'item-right', '');
        this._appEl_15 = new import3.AppElement(15, 13, this, this._el_15);
        var compView_15 = import18.viewFactory_Button0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Button_15_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_15), this.renderer);
        this._appEl_15.initComponent(this._Button_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n        ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_17, 'name', 'cog');
        this.renderer.setElementAttribute(this._el_17, 'role', 'img');
        this._Icon_17_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(null, '\n      ', null);
        compView_15.create(this._Button_15_4.context, [[].concat([
                this._text_16,
                this._el_17,
                this._text_18
            ])], null);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [],
            [],
            [].concat([
                this._text_14,
                this._text_19
            ]),
            [],
            [].concat([this._el_15])
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_11, 'ion-item-group', null);
        this._ItemGroup_21_3 = new import15.Wrapper_ItemGroup();
        this._text_22 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'item item-block');
        this._appEl_23 = new import3.AppElement(23, 21, this, this._el_23);
        var compView_23 = import15.viewFactory_Item0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Item_23_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_23), this.renderer);
        this._ItemContent_23_5 = new import15.Wrapper_ItemContent();
        this._query_Label_23_0 = new import17.QueryList();
        this._query_Button_23_1 = new import17.QueryList();
        this._query_Icon_23_2 = new import17.QueryList();
        this._appEl_23.initComponent(this._Item_23_4.context, [], compView_23);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_25, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_25, 'item-left', '');
        this.renderer.setElementAttribute(this._el_25, 'name', 'plane');
        this.renderer.setElementAttribute(this._el_25, 'role', 'img');
        this._Icon_25_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_25), this.renderer);
        this._text_26 = this.renderer.createText(null, '\n        ', null);
        this._el_27 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_27_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_27), this.renderer, null, null, null, null);
        this._text_28 = this.renderer.createText(this._el_27, 'Airplane Mode', null);
        this._text_29 = this.renderer.createText(null, '\n        ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-toggle', null);
        this.renderer.setElementAttribute(this._el_30, 'color', 'secondary');
        this._appEl_30 = new import3.AppElement(30, 23, this, this._el_30);
        var compView_30 = import21.viewFactory_Toggle0(this.viewUtils, this.injector(30), this._appEl_30);
        this._Toggle_30_4 = new import21.Wrapper_Toggle(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_30), this.renderer, this.parentInjector.get(import36.Haptic), this._Item_23_4.context);
        this._appEl_30.initComponent(this._Toggle_30_4.context, [], compView_30);
        compView_30.create(this._Toggle_30_4.context, [], null);
        this._text_31 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_23_0.reset([this._Label_27_3.context]);
        this._Item_23_4.context.contentLabel = this._query_Label_23_0.first;
        compView_23.create(this._Item_23_4.context, [
            [].concat([this._el_25]),
            [].concat([this._el_27]),
            [].concat([
                this._text_24,
                this._text_26,
                this._text_29,
                this._text_31
            ]),
            [],
            [].concat([this._el_30])
        ], null);
        this._text_32 = this.renderer.createText(this._el_21, '\n\n      ', null);
        this._el_33 = this.renderer.createElement(this._el_21, 'button', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_33, 'ion-item', '');
        this._appEl_33 = new import3.AppElement(33, 21, this, this._el_33);
        var compView_33 = import15.viewFactory_Item0(this.viewUtils, this.injector(33), this._appEl_33);
        this._Item_33_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_33), this.renderer);
        this._ItemContent_33_5 = new import15.Wrapper_ItemContent();
        this._query_Label_33_0 = new import17.QueryList();
        this._query_Button_33_1 = new import17.QueryList();
        this._query_Icon_33_2 = new import17.QueryList();
        this._appEl_33.initComponent(this._Item_33_4.context, [], compView_33);
        this._text_34 = this.renderer.createText(null, '\n        ', null);
        this._el_35 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_35, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_35, 'item-left', '');
        this.renderer.setElementAttribute(this._el_35, 'name', 'wifi');
        this.renderer.setElementAttribute(this._el_35, 'role', 'img');
        this._Icon_35_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_35), this.renderer);
        this._text_36 = this.renderer.createText(null, '\n        ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_37_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_37), this.renderer, null, null, null, null);
        this._text_38 = this.renderer.createText(this._el_37, 'Wi-Fi', null);
        this._text_39 = this.renderer.createText(null, '\n        ', null);
        this._el_40 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_40, 'item-right', '');
        this._Note_40_3 = new import22.Wrapper_Note();
        this._text_41 = this.renderer.createText(this._el_40, 'The Interwebz', null);
        this._text_42 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_33_0.reset([this._Label_37_3.context]);
        this._Item_33_4.context.contentLabel = this._query_Label_33_0.first;
        compView_33.create(this._Item_33_4.context, [
            [].concat([this._el_35]),
            [].concat([this._el_37]),
            [].concat([
                this._text_34,
                this._text_36,
                this._text_39,
                this._text_42
            ]),
            [],
            [].concat([this._el_40])
        ], null);
        this._text_43 = this.renderer.createText(this._el_21, '\n\n      ', null);
        this._el_44 = this.renderer.createElement(this._el_21, 'button', null);
        this.renderer.setElementAttribute(this._el_44, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_44, 'ion-item', '');
        this._appEl_44 = new import3.AppElement(44, 21, this, this._el_44);
        var compView_44 = import15.viewFactory_Item0(this.viewUtils, this.injector(44), this._appEl_44);
        this._Item_44_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_44), this.renderer);
        this._ItemContent_44_5 = new import15.Wrapper_ItemContent();
        this._query_Label_44_0 = new import17.QueryList();
        this._query_Button_44_1 = new import17.QueryList();
        this._query_Icon_44_2 = new import17.QueryList();
        this._appEl_44.initComponent(this._Item_44_4.context, [], compView_44);
        this._text_45 = this.renderer.createText(null, '\n        ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_46, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_46, 'item-left', '');
        this.renderer.setElementAttribute(this._el_46, 'name', 'bluetooth');
        this.renderer.setElementAttribute(this._el_46, 'role', 'img');
        this._Icon_46_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_46), this.renderer);
        this._text_47 = this.renderer.createText(null, '\n        ', null);
        this._el_48 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_48_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_48), this.renderer, null, null, null, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Bluetooth', null);
        this._text_50 = this.renderer.createText(null, '\n        ', null);
        this._el_51 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_51, 'item-right', '');
        this._Note_51_3 = new import22.Wrapper_Note();
        this._text_52 = this.renderer.createText(this._el_51, 'Off', null);
        this._text_53 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_44_0.reset([this._Label_48_3.context]);
        this._Item_44_4.context.contentLabel = this._query_Label_44_0.first;
        compView_44.create(this._Item_44_4.context, [
            [].concat([this._el_46]),
            [].concat([this._el_48]),
            [].concat([
                this._text_45,
                this._text_47,
                this._text_50,
                this._text_53
            ]),
            [],
            [].concat([this._el_51])
        ], null);
        this._text_54 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_55 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_56 = this.renderer.createElement(this._el_11, 'ion-item-divider', null);
        this.renderer.setElementAttribute(this._el_56, 'class', 'item');
        this.renderer.setElementAttribute(this._el_56, 'color', 'primary');
        this._appEl_56 = new import3.AppElement(56, 11, this, this._el_56);
        var compView_56 = import15.viewFactory_Item0(this.viewUtils, this.injector(56), this._appEl_56);
        this._Item_56_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_56), this.renderer);
        this._query_Label_56_0 = new import17.QueryList();
        this._query_Button_56_1 = new import17.QueryList();
        this._query_Icon_56_2 = new import17.QueryList();
        this._appEl_56.initComponent(this._Item_56_4.context, [], compView_56);
        this._text_57 = this.renderer.createText(null, '\n      Other Settings\n      ', null);
        this._el_58 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_58, 'color', 'light');
        this.renderer.setElementAttribute(this._el_58, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_58, 'item-right', '');
        this.renderer.setElementAttribute(this._el_58, 'outline', '');
        this._appEl_58 = new import3.AppElement(58, 56, this, this._el_58);
        var compView_58 = import18.viewFactory_Button0(this.viewUtils, this.injector(58), this._appEl_58);
        this._Button_58_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_58), this.renderer);
        this._appEl_58.initComponent(this._Button_58_4.context, [], compView_58);
        this._text_59 = this.renderer.createText(null, 'Clear', null);
        compView_58.create(this._Button_58_4.context, [[].concat([this._text_59])], null);
        this._text_60 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_56_0.reset([]);
        this._Item_56_4.context.contentLabel = this._query_Label_56_0.first;
        compView_56.create(this._Item_56_4.context, [
            [],
            [],
            [].concat([
                this._text_57,
                this._text_60
            ]),
            [],
            [].concat([this._el_58])
        ], null);
        this._text_61 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_62 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_62, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_62, 'ion-item', '');
        this._appEl_62 = new import3.AppElement(62, 11, this, this._el_62);
        var compView_62 = import15.viewFactory_Item0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Item_62_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_62), this.renderer);
        this._ItemContent_62_5 = new import15.Wrapper_ItemContent();
        this._query_Label_62_0 = new import17.QueryList();
        this._query_Button_62_1 = new import17.QueryList();
        this._query_Icon_62_2 = new import17.QueryList();
        this._appEl_62.initComponent(this._Item_62_4.context, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n      ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_64, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_64, 'item-left', '');
        this.renderer.setElementAttribute(this._el_64, 'name', 'call');
        this.renderer.setElementAttribute(this._el_64, 'role', 'img');
        this._Icon_64_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_64), this.renderer);
        this._text_65 = this.renderer.createText(null, '\n      ', null);
        this._el_66 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_66_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_66), this.renderer, null, null, null, null);
        this._text_67 = this.renderer.createText(this._el_66, 'Cellular', null);
        this._text_68 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_62_0.reset([this._Label_66_3.context]);
        this._Item_62_4.context.contentLabel = this._query_Label_62_0.first;
        compView_62.create(this._Item_62_4.context, [
            [].concat([this._el_64]),
            [].concat([this._el_66]),
            [].concat([
                this._text_63,
                this._text_65,
                this._text_68
            ]),
            [],
            []
        ], null);
        this._text_69 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_70, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_70, 'ion-item', '');
        this._appEl_70 = new import3.AppElement(70, 11, this, this._el_70);
        var compView_70 = import15.viewFactory_Item0(this.viewUtils, this.injector(70), this._appEl_70);
        this._Item_70_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_70), this.renderer);
        this._ItemContent_70_5 = new import15.Wrapper_ItemContent();
        this._query_Label_70_0 = new import17.QueryList();
        this._query_Button_70_1 = new import17.QueryList();
        this._query_Icon_70_2 = new import17.QueryList();
        this._appEl_70.initComponent(this._Item_70_4.context, [], compView_70);
        this._text_71 = this.renderer.createText(null, '\n      ', null);
        this._el_72 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_72, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_72, 'item-left', '');
        this.renderer.setElementAttribute(this._el_72, 'name', 'link');
        this.renderer.setElementAttribute(this._el_72, 'role', 'img');
        this._Icon_72_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_72), this.renderer);
        this._text_73 = this.renderer.createText(null, '\n      ', null);
        this._el_74 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_74_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_74), this.renderer, null, null, null, null);
        this._text_75 = this.renderer.createText(this._el_74, 'Personal Hotspot', null);
        this._text_76 = this.renderer.createText(null, '\n      ', null);
        this._el_77 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_77, 'item-right', '');
        this._Note_77_3 = new import22.Wrapper_Note();
        this._text_78 = this.renderer.createText(this._el_77, 'Off', null);
        this._text_79 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_70_0.reset([this._Label_74_3.context]);
        this._Item_70_4.context.contentLabel = this._query_Label_70_0.first;
        compView_70.create(this._Item_70_4.context, [
            [].concat([this._el_72]),
            [].concat([this._el_74]),
            [].concat([
                this._text_71,
                this._text_73,
                this._text_76,
                this._text_79
            ]),
            [],
            [].concat([this._el_77])
        ], null);
        this._text_80 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_81 = this.renderer.createText(null, '\n\n  ', null);
        this._el_82 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_82, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_82, 'role', 'radiogroup');
        this._List_82_3 = new import14.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_82), this.renderer, this.parentInjector.get(import34.GestureController));
        this._RadioGroup_82_4 = new import23.Wrapper_RadioGroup(this.renderer, new import26.ElementRef(this._el_82));
        this._query_ListHeader_82_0 = new import17.QueryList();
        this._text_83 = this.renderer.createText(this._el_82, '\n    ', null);
        this._el_84 = this.renderer.createElement(this._el_82, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_84, 'class', 'item');
        this._appEl_84 = new import3.AppElement(84, 82, this, this._el_84);
        var compView_84 = import15.viewFactory_Item0(this.viewUtils, this.injector(84), this._appEl_84);
        this._Item_84_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_84), this.renderer);
        this._ListHeader_84_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_84), null);
        this._query_Label_84_0 = new import17.QueryList();
        this._query_Button_84_1 = new import17.QueryList();
        this._query_Icon_84_2 = new import17.QueryList();
        this._appEl_84.initComponent(this._Item_84_4.context, [], compView_84);
        this._text_85 = this.renderer.createText(null, '\n      ', null);
        this._el_86 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_86, 'item-left', '');
        this.renderer.setElementAttribute(this._el_86, 'name', 'phone-portrait');
        this.renderer.setElementAttribute(this._el_86, 'role', 'img');
        this._Icon_86_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_86), this.renderer);
        this._text_87 = this.renderer.createText(null, '\n      Silence Phone\n    ', null);
        this._query_Label_84_0.reset([]);
        this._Item_84_4.context.contentLabel = this._query_Label_84_0.first;
        compView_84.create(this._Item_84_4.context, [
            [].concat([this._el_86]),
            [],
            [].concat([
                this._text_85,
                this._text_87
            ]),
            [],
            []
        ], null);
        this._text_88 = this.renderer.createText(this._el_82, '\n\n    ', null);
        this._el_89 = this.renderer.createElement(this._el_82, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_89, 'class', 'item item-block');
        this._appEl_89 = new import3.AppElement(89, 82, this, this._el_89);
        var compView_89 = import15.viewFactory_Item0(this.viewUtils, this.injector(89), this._appEl_89);
        this._Item_89_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_89), this.renderer);
        this._ItemContent_89_5 = new import15.Wrapper_ItemContent();
        this._query_Label_89_0 = new import17.QueryList();
        this._query_Button_89_1 = new import17.QueryList();
        this._query_Icon_89_2 = new import17.QueryList();
        this._appEl_89.initComponent(this._Item_89_4.context, [], compView_89);
        this._text_90 = this.renderer.createText(null, '\n      ', null);
        this._el_91 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_91, 'color', 'dark');
        this._Label_91_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_91), this.renderer, null, null, null, null);
        this._text_92 = this.renderer.createText(this._el_91, 'Always', null);
        this._text_93 = this.renderer.createText(null, '\n      ', null);
        this._el_94 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_94, 'checked', '');
        this.renderer.setElementAttribute(this._el_94, 'value', 'always');
        this._appEl_94 = new import3.AppElement(94, 89, this, this._el_94);
        var compView_94 = import24.viewFactory_RadioButton0(this.viewUtils, this.injector(94), this._appEl_94);
        this._RadioButton_94_4 = new import24.Wrapper_RadioButton(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_94), this.renderer, this._Item_89_4.context, this._RadioGroup_82_4.context);
        this._appEl_94.initComponent(this._RadioButton_94_4.context, [], compView_94);
        compView_94.create(this._RadioButton_94_4.context, [], null);
        this._text_95 = this.renderer.createText(null, '\n    ', null);
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
        this._text_96 = this.renderer.createText(this._el_82, '\n    ', null);
        this._el_97 = this.renderer.createElement(this._el_82, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_97, 'class', 'item item-block');
        this._appEl_97 = new import3.AppElement(97, 82, this, this._el_97);
        var compView_97 = import15.viewFactory_Item0(this.viewUtils, this.injector(97), this._appEl_97);
        this._Item_97_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_97), this.renderer);
        this._ItemContent_97_5 = new import15.Wrapper_ItemContent();
        this._query_Label_97_0 = new import17.QueryList();
        this._query_Button_97_1 = new import17.QueryList();
        this._query_Icon_97_2 = new import17.QueryList();
        this._appEl_97.initComponent(this._Item_97_4.context, [], compView_97);
        this._text_98 = this.renderer.createText(null, '\n      ', null);
        this._el_99 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_99, 'color', 'dark');
        this._Label_99_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_99), this.renderer, null, null, null, null);
        this._text_100 = this.renderer.createText(this._el_99, 'Only while phone is locked', null);
        this._text_101 = this.renderer.createText(null, '\n      ', null);
        this._el_102 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_102, 'value', 'locked');
        this._appEl_102 = new import3.AppElement(102, 97, this, this._el_102);
        var compView_102 = import24.viewFactory_RadioButton0(this.viewUtils, this.injector(102), this._appEl_102);
        this._RadioButton_102_4 = new import24.Wrapper_RadioButton(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_102), this.renderer, this._Item_97_4.context, this._RadioGroup_82_4.context);
        this._appEl_102.initComponent(this._RadioButton_102_4.context, [], compView_102);
        compView_102.create(this._RadioButton_102_4.context, [], null);
        this._text_103 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_97_0.reset([this._Label_99_3.context]);
        this._Item_97_4.context.contentLabel = this._query_Label_97_0.first;
        compView_97.create(this._Item_97_4.context, [
            [],
            [].concat([this._el_99]),
            [].concat([
                this._text_98,
                this._text_101,
                this._text_103
            ]),
            [],
            [].concat([this._el_102])
        ], null);
        this._text_104 = this.renderer.createText(this._el_82, '\n  ', null);
        this._query_ListHeader_82_0.reset([this._ListHeader_84_5.context]);
        this._RadioGroup_82_4.context._header = this._query_ListHeader_82_0.first;
        this._text_105 = this.renderer.createText(null, '\n\n  ', null);
        this._el_106 = this.renderer.createElement(null, 'ion-list', null);
        this._List_106_3 = new import14.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_106), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_107 = this.renderer.createText(this._el_106, '\n    ', null);
        this._el_108 = this.renderer.createElement(this._el_106, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_108, 'class', 'item');
        this._appEl_108 = new import3.AppElement(108, 106, this, this._el_108);
        var compView_108 = import15.viewFactory_Item0(this.viewUtils, this.injector(108), this._appEl_108);
        this._Item_108_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_108), this.renderer);
        this._ListHeader_108_5 = new import16.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_108), null);
        this._query_Label_108_0 = new import17.QueryList();
        this._query_Button_108_1 = new import17.QueryList();
        this._query_Icon_108_2 = new import17.QueryList();
        this._appEl_108.initComponent(this._Item_108_4.context, [], compView_108);
        this._text_109 = this.renderer.createText(null, '\n      Apps Installed\n    ', null);
        this._query_Label_108_0.reset([]);
        this._Item_108_4.context.contentLabel = this._query_Label_108_0.first;
        compView_108.create(this._Item_108_4.context, [
            [],
            [],
            [].concat([this._text_109]),
            [],
            []
        ], null);
        this._text_110 = this.renderer.createText(this._el_106, '\n\n    ', null);
        this._el_111 = this.renderer.createElement(this._el_106, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_111, 'class', 'item item-block');
        this._appEl_111 = new import3.AppElement(111, 106, this, this._el_111);
        var compView_111 = import15.viewFactory_Item0(this.viewUtils, this.injector(111), this._appEl_111);
        this._Item_111_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_111), this.renderer);
        this._ItemContent_111_5 = new import15.Wrapper_ItemContent();
        this._query_Label_111_0 = new import17.QueryList();
        this._query_Button_111_1 = new import17.QueryList();
        this._query_Icon_111_2 = new import17.QueryList();
        this._appEl_111.initComponent(this._Item_111_4.context, [], compView_111);
        this._text_112 = this.renderer.createText(null, '\n      ', null);
        this._el_113 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_113, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_113, 'item-left', '');
        this.renderer.setElementAttribute(this._el_113, 'name', 'ionic');
        this.renderer.setElementAttribute(this._el_113, 'role', 'img');
        this._Icon_113_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_113), this.renderer);
        this._text_114 = this.renderer.createText(null, '\n      ', null);
        this._el_115 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_115_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_115), this.renderer, null, null, null, null);
        this._text_116 = this.renderer.createText(this._el_115, 'Ionic View', null);
        this._text_117 = this.renderer.createText(null, '\n      ', null);
        this._el_118 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_118, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_118, 'item-right', '');
        this.renderer.setElementAttribute(this._el_118, 'outline', '');
        this._appEl_118 = new import3.AppElement(118, 111, this, this._el_118);
        var compView_118 = import18.viewFactory_Button0(this.viewUtils, this.injector(118), this._appEl_118);
        this._Button_118_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_118), this.renderer);
        this._appEl_118.initComponent(this._Button_118_4.context, [], compView_118);
        this._text_119 = this.renderer.createText(null, 'Uninstall', null);
        compView_118.create(this._Button_118_4.context, [[].concat([this._text_119])], null);
        this._text_120 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_111_0.reset([this._Label_115_3.context]);
        this._Item_111_4.context.contentLabel = this._query_Label_111_0.first;
        compView_111.create(this._Item_111_4.context, [
            [].concat([this._el_113]),
            [].concat([this._el_115]),
            [].concat([
                this._text_112,
                this._text_114,
                this._text_117,
                this._text_120
            ]),
            [],
            [].concat([this._el_118])
        ], null);
        this._text_121 = this.renderer.createText(this._el_106, '\n    ', null);
        this._el_122 = this.renderer.createElement(this._el_106, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_122, 'class', 'item item-block');
        this._appEl_122 = new import3.AppElement(122, 106, this, this._el_122);
        var compView_122 = import15.viewFactory_Item0(this.viewUtils, this.injector(122), this._appEl_122);
        this._Item_122_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_122), this.renderer);
        this._ItemContent_122_5 = new import15.Wrapper_ItemContent();
        this._query_Label_122_0 = new import17.QueryList();
        this._query_Button_122_1 = new import17.QueryList();
        this._query_Icon_122_2 = new import17.QueryList();
        this._appEl_122.initComponent(this._Item_122_4.context, [], compView_122);
        this._text_123 = this.renderer.createText(null, '\n      ', null);
        this._el_124 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_124, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_124, 'item-left', '');
        this.renderer.setElementAttribute(this._el_124, 'name', 'brush');
        this.renderer.setElementAttribute(this._el_124, 'role', 'img');
        this._Icon_124_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_124), this.renderer);
        this._text_125 = this.renderer.createText(null, '\n      ', null);
        this._el_126 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_126_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_126), this.renderer, null, null, null, null);
        this._text_127 = this.renderer.createText(this._el_126, 'Ionic Creator', null);
        this._text_128 = this.renderer.createText(null, '\n      ', null);
        this._el_129 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_129, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_129, 'item-right', '');
        this.renderer.setElementAttribute(this._el_129, 'outline', '');
        this._appEl_129 = new import3.AppElement(129, 122, this, this._el_129);
        var compView_129 = import18.viewFactory_Button0(this.viewUtils, this.injector(129), this._appEl_129);
        this._Button_129_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_129), this.renderer);
        this._appEl_129.initComponent(this._Button_129_4.context, [], compView_129);
        this._text_130 = this.renderer.createText(null, 'Uninstall', null);
        compView_129.create(this._Button_129_4.context, [[].concat([this._text_130])], null);
        this._text_131 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_122_0.reset([this._Label_126_3.context]);
        this._Item_122_4.context.contentLabel = this._query_Label_122_0.first;
        compView_122.create(this._Item_122_4.context, [
            [].concat([this._el_124]),
            [].concat([this._el_126]),
            [].concat([
                this._text_123,
                this._text_125,
                this._text_128,
                this._text_131
            ]),
            [],
            [].concat([this._el_129])
        ], null);
        this._text_132 = this.renderer.createText(this._el_106, '\n    ', null);
        this._el_133 = this.renderer.createElement(this._el_106, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_133, 'class', 'item item-block');
        this._appEl_133 = new import3.AppElement(133, 106, this, this._el_133);
        var compView_133 = import15.viewFactory_Item0(this.viewUtils, this.injector(133), this._appEl_133);
        this._Item_133_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_133), this.renderer);
        this._ItemContent_133_5 = new import15.Wrapper_ItemContent();
        this._query_Label_133_0 = new import17.QueryList();
        this._query_Button_133_1 = new import17.QueryList();
        this._query_Icon_133_2 = new import17.QueryList();
        this._appEl_133.initComponent(this._Item_133_4.context, [], compView_133);
        this._text_134 = this.renderer.createText(null, '\n      ', null);
        this._el_135 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_135, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_135, 'item-left', '');
        this.renderer.setElementAttribute(this._el_135, 'name', 'logo-octocat');
        this.renderer.setElementAttribute(this._el_135, 'role', 'img');
        this._Icon_135_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_135), this.renderer);
        this._text_136 = this.renderer.createText(null, '\n      ', null);
        this._el_137 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_137_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_137), this.renderer, null, null, null, null);
        this._text_138 = this.renderer.createText(this._el_137, 'Hubstruck', null);
        this._text_139 = this.renderer.createText(null, '\n      ', null);
        this._el_140 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_140, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_140, 'item-right', '');
        this.renderer.setElementAttribute(this._el_140, 'outline', '');
        this._appEl_140 = new import3.AppElement(140, 133, this, this._el_140);
        var compView_140 = import18.viewFactory_Button0(this.viewUtils, this.injector(140), this._appEl_140);
        this._Button_140_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_140), this.renderer);
        this._appEl_140.initComponent(this._Button_140_4.context, [], compView_140);
        this._text_141 = this.renderer.createText(null, 'Uninstall', null);
        compView_140.create(this._Button_140_4.context, [[].concat([this._text_141])], null);
        this._text_142 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_133_0.reset([this._Label_137_3.context]);
        this._Item_133_4.context.contentLabel = this._query_Label_133_0.first;
        compView_133.create(this._Item_133_4.context, [
            [].concat([this._el_135]),
            [].concat([this._el_137]),
            [].concat([
                this._text_134,
                this._text_136,
                this._text_139,
                this._text_142
            ]),
            [],
            [].concat([this._el_140])
        ], null);
        this._text_143 = this.renderer.createText(this._el_106, '\n    ', null);
        this._el_144 = this.renderer.createElement(this._el_106, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_144, 'class', 'item item-block');
        this._appEl_144 = new import3.AppElement(144, 106, this, this._el_144);
        var compView_144 = import15.viewFactory_Item0(this.viewUtils, this.injector(144), this._appEl_144);
        this._Item_144_4 = new import15.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_144), this.renderer);
        this._ItemContent_144_5 = new import15.Wrapper_ItemContent();
        this._query_Label_144_0 = new import17.QueryList();
        this._query_Button_144_1 = new import17.QueryList();
        this._query_Icon_144_2 = new import17.QueryList();
        this._appEl_144.initComponent(this._Item_144_4.context, [], compView_144);
        this._text_145 = this.renderer.createText(null, '\n      ', null);
        this._el_146 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_146, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_146, 'item-left', '');
        this.renderer.setElementAttribute(this._el_146, 'name', 'paw');
        this.renderer.setElementAttribute(this._el_146, 'role', 'img');
        this._Icon_146_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_146), this.renderer);
        this._text_147 = this.renderer.createText(null, '\n      ', null);
        this._el_148 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_148_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_148), this.renderer, null, null, null, null);
        this._text_149 = this.renderer.createText(this._el_148, 'Barkpark', null);
        this._text_150 = this.renderer.createText(null, '\n      ', null);
        this._el_151 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_151, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_151, 'item-right', '');
        this.renderer.setElementAttribute(this._el_151, 'outline', '');
        this._appEl_151 = new import3.AppElement(151, 144, this, this._el_151);
        var compView_151 = import18.viewFactory_Button0(this.viewUtils, this.injector(151), this._appEl_151);
        this._Button_151_4 = new import18.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_151), this.renderer);
        this._appEl_151.initComponent(this._Button_151_4.context, [], compView_151);
        this._text_152 = this.renderer.createText(null, 'Uninstall', null);
        compView_151.create(this._Button_151_4.context, [[].concat([this._text_152])], null);
        this._text_153 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_144_0.reset([this._Label_148_3.context]);
        this._Item_144_4.context.contentLabel = this._query_Label_144_0.first;
        compView_144.create(this._Item_144_4.context, [
            [].concat([this._el_146]),
            [].concat([this._el_148]),
            [].concat([
                this._text_145,
                this._text_147,
                this._text_150,
                this._text_153
            ]),
            [],
            [].concat([this._el_151])
        ], null);
        this._text_154 = this.renderer.createText(this._el_106, '\n  ', null);
        this._text_155 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_81,
                this._el_82,
                this._text_105,
                this._el_106,
                this._text_155
            ]),
            []
        ], null);
        this._text_156 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_94, 'click', this.eventHandler(this._handle_click_94_0.bind(this)));
        this._expr_32 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_102, 'click', this.eventHandler(this._handle_click_102_0.bind(this)));
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
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
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
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
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
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
            this._text_110,
            this._el_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._text_117,
            this._el_118,
            this._text_119,
            this._text_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._el_124,
            this._text_125,
            this._el_126,
            this._text_127,
            this._text_128,
            this._el_129,
            this._text_130,
            this._text_131,
            this._text_132,
            this._el_133,
            this._text_134,
            this._el_135,
            this._text_136,
            this._el_137,
            this._text_138,
            this._text_139,
            this._el_140,
            this._text_141,
            this._text_142,
            this._text_143,
            this._el_144,
            this._text_145,
            this._el_146,
            this._text_147,
            this._el_148,
            this._text_149,
            this._text_150,
            this._el_151,
            this._text_152,
            this._text_153,
            this._text_154,
            this._text_155,
            this._text_156
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
        if (((token === import39.Icon) && (17 === requestNodeIndex))) {
            return this._Icon_17_3.context;
        }
        if (((token === import40.Button) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_15_4.context;
        }
        if (((token === import41.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_13_4.context;
        }
        if (((token === import42.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ListHeader_13_5.context;
        }
        if (((token === import39.Icon) && (25 === requestNodeIndex))) {
            return this._Icon_25_3.context;
        }
        if (((token === import43.Label) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Label_27_3.context;
        }
        if (((token === import44.Toggle) && (30 === requestNodeIndex))) {
            return this._Toggle_30_4.context;
        }
        if (((token === import45.NG_VALUE_ACCESSOR) && (30 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_30_5;
        }
        if (((token === import41.Item) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Item_23_4.context;
        }
        if (((token === import41.ItemContent) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._ItemContent_23_5.context;
        }
        if (((token === import39.Icon) && (35 === requestNodeIndex))) {
            return this._Icon_35_3.context;
        }
        if (((token === import43.Label) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Label_37_3.context;
        }
        if (((token === import46.Note) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._Note_40_3.context;
        }
        if (((token === import41.Item) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._Item_33_4.context;
        }
        if (((token === import41.ItemContent) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._ItemContent_33_5.context;
        }
        if (((token === import39.Icon) && (46 === requestNodeIndex))) {
            return this._Icon_46_3.context;
        }
        if (((token === import43.Label) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._Label_48_3.context;
        }
        if (((token === import46.Note) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._Note_51_3.context;
        }
        if (((token === import41.Item) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Item_44_4.context;
        }
        if (((token === import41.ItemContent) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._ItemContent_44_5.context;
        }
        if (((token === import41.ItemGroup) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._ItemGroup_21_3.context;
        }
        if (((token === import40.Button) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Button_58_4.context;
        }
        if (((token === import41.Item) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._Item_56_4.context;
        }
        if (((token === import39.Icon) && (64 === requestNodeIndex))) {
            return this._Icon_64_3.context;
        }
        if (((token === import43.Label) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Label_66_3.context;
        }
        if (((token === import41.Item) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Item_62_4.context;
        }
        if (((token === import41.ItemContent) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ItemContent_62_5.context;
        }
        if (((token === import39.Icon) && (72 === requestNodeIndex))) {
            return this._Icon_72_3.context;
        }
        if (((token === import43.Label) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Label_74_3.context;
        }
        if (((token === import46.Note) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._Note_77_3.context;
        }
        if (((token === import41.Item) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._Item_70_4.context;
        }
        if (((token === import41.ItemContent) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._ItemContent_70_5.context;
        }
        if (((token === import47.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._List_11_3.context;
        }
        if (((token === import39.Icon) && (86 === requestNodeIndex))) {
            return this._Icon_86_3.context;
        }
        if (((token === import41.Item) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._Item_84_4.context;
        }
        if (((token === import42.ListHeader) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 87)))) {
            return this._ListHeader_84_5.context;
        }
        if (((token === import43.Label) && ((91 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._Label_91_3.context;
        }
        if (((token === import48.RadioButton) && (94 === requestNodeIndex))) {
            return this._RadioButton_94_4.context;
        }
        if (((token === import41.Item) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 95)))) {
            return this._Item_89_4.context;
        }
        if (((token === import41.ItemContent) && ((89 <= requestNodeIndex) && (requestNodeIndex <= 95)))) {
            return this._ItemContent_89_5.context;
        }
        if (((token === import43.Label) && ((99 <= requestNodeIndex) && (requestNodeIndex <= 100)))) {
            return this._Label_99_3.context;
        }
        if (((token === import48.RadioButton) && (102 === requestNodeIndex))) {
            return this._RadioButton_102_4.context;
        }
        if (((token === import41.Item) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 103)))) {
            return this._Item_97_4.context;
        }
        if (((token === import41.ItemContent) && ((97 <= requestNodeIndex) && (requestNodeIndex <= 103)))) {
            return this._ItemContent_97_5.context;
        }
        if (((token === import47.List) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._List_82_3.context;
        }
        if (((token === import49.RadioGroup) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._RadioGroup_82_4.context;
        }
        if (((token === import45.NG_VALUE_ACCESSOR) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._NG_VALUE_ACCESSOR_82_5;
        }
        if (((token === import41.Item) && ((108 <= requestNodeIndex) && (requestNodeIndex <= 109)))) {
            return this._Item_108_4.context;
        }
        if (((token === import42.ListHeader) && ((108 <= requestNodeIndex) && (requestNodeIndex <= 109)))) {
            return this._ListHeader_108_5.context;
        }
        if (((token === import39.Icon) && (113 === requestNodeIndex))) {
            return this._Icon_113_3.context;
        }
        if (((token === import43.Label) && ((115 <= requestNodeIndex) && (requestNodeIndex <= 116)))) {
            return this._Label_115_3.context;
        }
        if (((token === import40.Button) && ((118 <= requestNodeIndex) && (requestNodeIndex <= 119)))) {
            return this._Button_118_4.context;
        }
        if (((token === import41.Item) && ((111 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._Item_111_4.context;
        }
        if (((token === import41.ItemContent) && ((111 <= requestNodeIndex) && (requestNodeIndex <= 120)))) {
            return this._ItemContent_111_5.context;
        }
        if (((token === import39.Icon) && (124 === requestNodeIndex))) {
            return this._Icon_124_3.context;
        }
        if (((token === import43.Label) && ((126 <= requestNodeIndex) && (requestNodeIndex <= 127)))) {
            return this._Label_126_3.context;
        }
        if (((token === import40.Button) && ((129 <= requestNodeIndex) && (requestNodeIndex <= 130)))) {
            return this._Button_129_4.context;
        }
        if (((token === import41.Item) && ((122 <= requestNodeIndex) && (requestNodeIndex <= 131)))) {
            return this._Item_122_4.context;
        }
        if (((token === import41.ItemContent) && ((122 <= requestNodeIndex) && (requestNodeIndex <= 131)))) {
            return this._ItemContent_122_5.context;
        }
        if (((token === import39.Icon) && (135 === requestNodeIndex))) {
            return this._Icon_135_3.context;
        }
        if (((token === import43.Label) && ((137 <= requestNodeIndex) && (requestNodeIndex <= 138)))) {
            return this._Label_137_3.context;
        }
        if (((token === import40.Button) && ((140 <= requestNodeIndex) && (requestNodeIndex <= 141)))) {
            return this._Button_140_4.context;
        }
        if (((token === import41.Item) && ((133 <= requestNodeIndex) && (requestNodeIndex <= 142)))) {
            return this._Item_133_4.context;
        }
        if (((token === import41.ItemContent) && ((133 <= requestNodeIndex) && (requestNodeIndex <= 142)))) {
            return this._ItemContent_133_5.context;
        }
        if (((token === import39.Icon) && (146 === requestNodeIndex))) {
            return this._Icon_146_3.context;
        }
        if (((token === import43.Label) && ((148 <= requestNodeIndex) && (requestNodeIndex <= 149)))) {
            return this._Label_148_3.context;
        }
        if (((token === import40.Button) && ((151 <= requestNodeIndex) && (requestNodeIndex <= 152)))) {
            return this._Button_151_4.context;
        }
        if (((token === import41.Item) && ((144 <= requestNodeIndex) && (requestNodeIndex <= 153)))) {
            return this._Item_144_4.context;
        }
        if (((token === import41.ItemContent) && ((144 <= requestNodeIndex) && (requestNodeIndex <= 153)))) {
            return this._ItemContent_144_5.context;
        }
        if (((token === import47.List) && ((106 <= requestNodeIndex) && (requestNodeIndex <= 154)))) {
            return this._List_106_3.context;
        }
        if (((token === import50.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 155)))) {
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
        var currVal_3 = '';
        this._Button_15_4.check_clear(currVal_3, throwOnChange, false);
        if (this._Button_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        var currVal_4 = 'cog';
        this._Icon_17_3.check_name(currVal_4, throwOnChange, false);
        this._Icon_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        this._ItemGroup_21_3.detectChangesInternal(this, this._el_21, throwOnChange);
        if (this._Item_23_4.detectChangesInternal(this, this._el_23, throwOnChange)) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        this._ItemContent_23_5.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_6 = 'danger';
        this._Icon_25_3.check_color(currVal_6, throwOnChange, false);
        var currVal_7 = 'plane';
        this._Icon_25_3.check_name(currVal_7, throwOnChange, false);
        this._Icon_25_3.detectChangesInternal(this, this._el_25, throwOnChange);
        this._Label_27_3.detectChangesInternal(this, this._el_27, throwOnChange);
        var currVal_9 = 'secondary';
        this._Toggle_30_4.check_color(currVal_9, throwOnChange, false);
        this._Toggle_30_4.detectChangesInternal(this, this._el_30, throwOnChange);
        if (this._Item_33_4.detectChangesInternal(this, this._el_33, throwOnChange)) {
            this._appEl_33.componentView.markAsCheckOnce();
        }
        this._ItemContent_33_5.detectChangesInternal(this, this._el_33, throwOnChange);
        var currVal_11 = 'primary';
        this._Icon_35_3.check_color(currVal_11, throwOnChange, false);
        var currVal_12 = 'wifi';
        this._Icon_35_3.check_name(currVal_12, throwOnChange, false);
        this._Icon_35_3.detectChangesInternal(this, this._el_35, throwOnChange);
        this._Label_37_3.detectChangesInternal(this, this._el_37, throwOnChange);
        this._Note_40_3.detectChangesInternal(this, this._el_40, throwOnChange);
        if (this._Item_44_4.detectChangesInternal(this, this._el_44, throwOnChange)) {
            this._appEl_44.componentView.markAsCheckOnce();
        }
        this._ItemContent_44_5.detectChangesInternal(this, this._el_44, throwOnChange);
        var currVal_14 = 'primary';
        this._Icon_46_3.check_color(currVal_14, throwOnChange, false);
        var currVal_15 = 'bluetooth';
        this._Icon_46_3.check_name(currVal_15, throwOnChange, false);
        this._Icon_46_3.detectChangesInternal(this, this._el_46, throwOnChange);
        this._Label_48_3.detectChangesInternal(this, this._el_48, throwOnChange);
        this._Note_51_3.detectChangesInternal(this, this._el_51, throwOnChange);
        var currVal_17 = 'primary';
        this._Item_56_4.check_color(currVal_17, throwOnChange, false);
        if (this._Item_56_4.detectChangesInternal(this, this._el_56, throwOnChange)) {
            this._appEl_56.componentView.markAsCheckOnce();
        }
        var currVal_18 = '';
        this._Button_58_4.check_outline(currVal_18, throwOnChange, false);
        var currVal_19 = 'light';
        this._Button_58_4.check_color(currVal_19, throwOnChange, false);
        if (this._Button_58_4.detectChangesInternal(this, this._el_58, throwOnChange)) {
            this._appEl_58.componentView.markAsCheckOnce();
        }
        if (this._Item_62_4.detectChangesInternal(this, this._el_62, throwOnChange)) {
            this._appEl_62.componentView.markAsCheckOnce();
        }
        this._ItemContent_62_5.detectChangesInternal(this, this._el_62, throwOnChange);
        var currVal_20 = 'secondary';
        this._Icon_64_3.check_color(currVal_20, throwOnChange, false);
        var currVal_21 = 'call';
        this._Icon_64_3.check_name(currVal_21, throwOnChange, false);
        this._Icon_64_3.detectChangesInternal(this, this._el_64, throwOnChange);
        this._Label_66_3.detectChangesInternal(this, this._el_66, throwOnChange);
        if (this._Item_70_4.detectChangesInternal(this, this._el_70, throwOnChange)) {
            this._appEl_70.componentView.markAsCheckOnce();
        }
        this._ItemContent_70_5.detectChangesInternal(this, this._el_70, throwOnChange);
        var currVal_23 = 'secondary';
        this._Icon_72_3.check_color(currVal_23, throwOnChange, false);
        var currVal_24 = 'link';
        this._Icon_72_3.check_name(currVal_24, throwOnChange, false);
        this._Icon_72_3.detectChangesInternal(this, this._el_72, throwOnChange);
        this._Label_74_3.detectChangesInternal(this, this._el_74, throwOnChange);
        this._Note_77_3.detectChangesInternal(this, this._el_77, throwOnChange);
        this._List_82_3.detectChangesInternal(this, this._el_82, throwOnChange);
        this._RadioGroup_82_4.detectChangesInternal(this, this._el_82, throwOnChange);
        if (this._Item_84_4.detectChangesInternal(this, this._el_84, throwOnChange)) {
            this._appEl_84.componentView.markAsCheckOnce();
        }
        this._ListHeader_84_5.detectChangesInternal(this, this._el_84, throwOnChange);
        var currVal_26 = 'phone-portrait';
        this._Icon_86_3.check_name(currVal_26, throwOnChange, false);
        this._Icon_86_3.detectChangesInternal(this, this._el_86, throwOnChange);
        if (this._Item_89_4.detectChangesInternal(this, this._el_89, throwOnChange)) {
            this._appEl_89.componentView.markAsCheckOnce();
        }
        this._ItemContent_89_5.detectChangesInternal(this, this._el_89, throwOnChange);
        var currVal_28 = 'dark';
        this._Label_91_3.check_color(currVal_28, throwOnChange, false);
        this._Label_91_3.detectChangesInternal(this, this._el_91, throwOnChange);
        var currVal_30 = 'always';
        this._RadioButton_94_4.check_value(currVal_30, throwOnChange, false);
        var currVal_31 = '';
        this._RadioButton_94_4.check_checked(currVal_31, throwOnChange, false);
        this._RadioButton_94_4.detectChangesInternal(this, this._el_94, throwOnChange);
        if (this._Item_97_4.detectChangesInternal(this, this._el_97, throwOnChange)) {
            this._appEl_97.componentView.markAsCheckOnce();
        }
        this._ItemContent_97_5.detectChangesInternal(this, this._el_97, throwOnChange);
        var currVal_33 = 'dark';
        this._Label_99_3.check_color(currVal_33, throwOnChange, false);
        this._Label_99_3.detectChangesInternal(this, this._el_99, throwOnChange);
        var currVal_35 = 'locked';
        this._RadioButton_102_4.check_value(currVal_35, throwOnChange, false);
        this._RadioButton_102_4.detectChangesInternal(this, this._el_102, throwOnChange);
        this._List_106_3.detectChangesInternal(this, this._el_106, throwOnChange);
        if (this._Item_108_4.detectChangesInternal(this, this._el_108, throwOnChange)) {
            this._appEl_108.componentView.markAsCheckOnce();
        }
        this._ListHeader_108_5.detectChangesInternal(this, this._el_108, throwOnChange);
        if (this._Item_111_4.detectChangesInternal(this, this._el_111, throwOnChange)) {
            this._appEl_111.componentView.markAsCheckOnce();
        }
        this._ItemContent_111_5.detectChangesInternal(this, this._el_111, throwOnChange);
        var currVal_37 = 'primary';
        this._Icon_113_3.check_color(currVal_37, throwOnChange, false);
        var currVal_38 = 'ionic';
        this._Icon_113_3.check_name(currVal_38, throwOnChange, false);
        this._Icon_113_3.detectChangesInternal(this, this._el_113, throwOnChange);
        this._Label_115_3.detectChangesInternal(this, this._el_115, throwOnChange);
        var currVal_40 = '';
        this._Button_118_4.check_outline(currVal_40, throwOnChange, false);
        if (this._Button_118_4.detectChangesInternal(this, this._el_118, throwOnChange)) {
            this._appEl_118.componentView.markAsCheckOnce();
        }
        if (this._Item_122_4.detectChangesInternal(this, this._el_122, throwOnChange)) {
            this._appEl_122.componentView.markAsCheckOnce();
        }
        this._ItemContent_122_5.detectChangesInternal(this, this._el_122, throwOnChange);
        var currVal_41 = 'primary';
        this._Icon_124_3.check_color(currVal_41, throwOnChange, false);
        var currVal_42 = 'brush';
        this._Icon_124_3.check_name(currVal_42, throwOnChange, false);
        this._Icon_124_3.detectChangesInternal(this, this._el_124, throwOnChange);
        this._Label_126_3.detectChangesInternal(this, this._el_126, throwOnChange);
        var currVal_44 = '';
        this._Button_129_4.check_outline(currVal_44, throwOnChange, false);
        if (this._Button_129_4.detectChangesInternal(this, this._el_129, throwOnChange)) {
            this._appEl_129.componentView.markAsCheckOnce();
        }
        if (this._Item_133_4.detectChangesInternal(this, this._el_133, throwOnChange)) {
            this._appEl_133.componentView.markAsCheckOnce();
        }
        this._ItemContent_133_5.detectChangesInternal(this, this._el_133, throwOnChange);
        var currVal_45 = 'dark';
        this._Icon_135_3.check_color(currVal_45, throwOnChange, false);
        var currVal_46 = 'logo-octocat';
        this._Icon_135_3.check_name(currVal_46, throwOnChange, false);
        this._Icon_135_3.detectChangesInternal(this, this._el_135, throwOnChange);
        this._Label_137_3.detectChangesInternal(this, this._el_137, throwOnChange);
        var currVal_48 = '';
        this._Button_140_4.check_outline(currVal_48, throwOnChange, false);
        if (this._Button_140_4.detectChangesInternal(this, this._el_140, throwOnChange)) {
            this._appEl_140.componentView.markAsCheckOnce();
        }
        if (this._Item_144_4.detectChangesInternal(this, this._el_144, throwOnChange)) {
            this._appEl_144.componentView.markAsCheckOnce();
        }
        this._ItemContent_144_5.detectChangesInternal(this, this._el_144, throwOnChange);
        var currVal_49 = 'danger';
        this._Icon_146_3.check_color(currVal_49, throwOnChange, false);
        var currVal_50 = 'paw';
        this._Icon_146_3.check_name(currVal_50, throwOnChange, false);
        this._Icon_146_3.detectChangesInternal(this, this._el_146, throwOnChange);
        this._Label_148_3.detectChangesInternal(this, this._el_148, throwOnChange);
        var currVal_52 = '';
        this._Button_151_4.check_outline(currVal_52, throwOnChange, false);
        if (this._Button_151_4.detectChangesInternal(this, this._el_151, throwOnChange)) {
            this._appEl_151.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([this._Button_15_4.context]);
                this._Item_13_4.context._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4.context._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_23_1.dirty) {
                this._query_Button_23_1.reset([]);
                this._Item_23_4.context._buttons = this._query_Button_23_1;
                this._query_Button_23_1.notifyOnChanges();
            }
            if (this._query_Icon_23_2.dirty) {
                this._query_Icon_23_2.reset([this._Icon_25_3.context]);
                this._Item_23_4.context._icons = this._query_Icon_23_2;
                this._query_Icon_23_2.notifyOnChanges();
            }
            if (this._query_Button_33_1.dirty) {
                this._query_Button_33_1.reset([]);
                this._Item_33_4.context._buttons = this._query_Button_33_1;
                this._query_Button_33_1.notifyOnChanges();
            }
            if (this._query_Icon_33_2.dirty) {
                this._query_Icon_33_2.reset([this._Icon_35_3.context]);
                this._Item_33_4.context._icons = this._query_Icon_33_2;
                this._query_Icon_33_2.notifyOnChanges();
            }
            if (this._query_Button_44_1.dirty) {
                this._query_Button_44_1.reset([]);
                this._Item_44_4.context._buttons = this._query_Button_44_1;
                this._query_Button_44_1.notifyOnChanges();
            }
            if (this._query_Icon_44_2.dirty) {
                this._query_Icon_44_2.reset([this._Icon_46_3.context]);
                this._Item_44_4.context._icons = this._query_Icon_44_2;
                this._query_Icon_44_2.notifyOnChanges();
            }
            if (this._query_Button_56_1.dirty) {
                this._query_Button_56_1.reset([this._Button_58_4.context]);
                this._Item_56_4.context._buttons = this._query_Button_56_1;
                this._query_Button_56_1.notifyOnChanges();
            }
            if (this._query_Icon_56_2.dirty) {
                this._query_Icon_56_2.reset([]);
                this._Item_56_4.context._icons = this._query_Icon_56_2;
                this._query_Icon_56_2.notifyOnChanges();
            }
            if (this._query_Button_62_1.dirty) {
                this._query_Button_62_1.reset([]);
                this._Item_62_4.context._buttons = this._query_Button_62_1;
                this._query_Button_62_1.notifyOnChanges();
            }
            if (this._query_Icon_62_2.dirty) {
                this._query_Icon_62_2.reset([this._Icon_64_3.context]);
                this._Item_62_4.context._icons = this._query_Icon_62_2;
                this._query_Icon_62_2.notifyOnChanges();
            }
            if (this._query_Button_70_1.dirty) {
                this._query_Button_70_1.reset([]);
                this._Item_70_4.context._buttons = this._query_Button_70_1;
                this._query_Button_70_1.notifyOnChanges();
            }
            if (this._query_Icon_70_2.dirty) {
                this._query_Icon_70_2.reset([this._Icon_72_3.context]);
                this._Item_70_4.context._icons = this._query_Icon_70_2;
                this._query_Icon_70_2.notifyOnChanges();
            }
            if (this._query_Button_84_1.dirty) {
                this._query_Button_84_1.reset([]);
                this._Item_84_4.context._buttons = this._query_Button_84_1;
                this._query_Button_84_1.notifyOnChanges();
            }
            if (this._query_Icon_84_2.dirty) {
                this._query_Icon_84_2.reset([this._Icon_86_3.context]);
                this._Item_84_4.context._icons = this._query_Icon_84_2;
                this._query_Icon_84_2.notifyOnChanges();
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
            if (this._query_Button_108_1.dirty) {
                this._query_Button_108_1.reset([]);
                this._Item_108_4.context._buttons = this._query_Button_108_1;
                this._query_Button_108_1.notifyOnChanges();
            }
            if (this._query_Icon_108_2.dirty) {
                this._query_Icon_108_2.reset([]);
                this._Item_108_4.context._icons = this._query_Icon_108_2;
                this._query_Icon_108_2.notifyOnChanges();
            }
            if (this._query_Button_111_1.dirty) {
                this._query_Button_111_1.reset([this._Button_118_4.context]);
                this._Item_111_4.context._buttons = this._query_Button_111_1;
                this._query_Button_111_1.notifyOnChanges();
            }
            if (this._query_Icon_111_2.dirty) {
                this._query_Icon_111_2.reset([this._Icon_113_3.context]);
                this._Item_111_4.context._icons = this._query_Icon_111_2;
                this._query_Icon_111_2.notifyOnChanges();
            }
            if (this._query_Button_122_1.dirty) {
                this._query_Button_122_1.reset([this._Button_129_4.context]);
                this._Item_122_4.context._buttons = this._query_Button_122_1;
                this._query_Button_122_1.notifyOnChanges();
            }
            if (this._query_Icon_122_2.dirty) {
                this._query_Icon_122_2.reset([this._Icon_124_3.context]);
                this._Item_122_4.context._icons = this._query_Icon_122_2;
                this._query_Icon_122_2.notifyOnChanges();
            }
            if (this._query_Button_133_1.dirty) {
                this._query_Button_133_1.reset([this._Button_140_4.context]);
                this._Item_133_4.context._buttons = this._query_Button_133_1;
                this._query_Button_133_1.notifyOnChanges();
            }
            if (this._query_Icon_133_2.dirty) {
                this._query_Icon_133_2.reset([this._Icon_135_3.context]);
                this._Item_133_4.context._icons = this._query_Icon_133_2;
                this._query_Icon_133_2.notifyOnChanges();
            }
            if (this._query_Button_144_1.dirty) {
                this._query_Button_144_1.reset([this._Button_151_4.context]);
                this._Item_144_4.context._buttons = this._query_Button_144_1;
                this._query_Button_144_1.notifyOnChanges();
            }
            if (this._query_Icon_144_2.dirty) {
                this._query_Icon_144_2.reset([this._Icon_146_3.context]);
                this._Item_144_4.context._icons = this._query_Icon_144_2;
                this._query_Icon_144_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_15_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_30_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_23_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_33_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_44_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_58_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_56_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_62_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_70_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_84_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_89_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_97_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_82_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_108_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_118_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_111_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_129_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_122_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_140_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_133_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_151_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_144_4.context.ngAfterContentInit();
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
        var currVal_5 = this._Icon_17_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_17, 'hide', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_8 = this._Icon_25_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_25, 'hide', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_10 = this._Toggle_30_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_30, 'toggle-disabled', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_13 = this._Icon_35_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_35, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_16 = this._Icon_46_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_46, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_22 = this._Icon_64_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_64, 'hide', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_25 = this._Icon_72_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_72, 'hide', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_27 = this._Icon_86_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_86, 'hide', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_32 = this._RadioButton_94_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_94, 'radio-disabled', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_36 = this._RadioButton_102_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_102, 'radio-disabled', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_39 = this._Icon_113_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_113, 'hide', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_43 = this._Icon_124_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_124, 'hide', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_47 = this._Icon_135_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementClass(this._el_135, 'hide', currVal_47);
            this._expr_47 = currVal_47;
        }
        var currVal_51 = this._Icon_146_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_146, 'hide', currVal_51);
            this._expr_51 = currVal_51;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_17_3.context.ngOnDestroy();
        this._Icon_25_3.context.ngOnDestroy();
        this._Toggle_30_4.context.ngOnDestroy();
        this._Icon_35_3.context.ngOnDestroy();
        this._Icon_46_3.context.ngOnDestroy();
        this._Icon_64_3.context.ngOnDestroy();
        this._Icon_72_3.context.ngOnDestroy();
        this._Icon_86_3.context.ngOnDestroy();
        this._RadioButton_94_4.context.ngOnDestroy();
        this._RadioButton_102_4.context.ngOnDestroy();
        this._Icon_113_3.context.ngOnDestroy();
        this._Icon_124_3.context.ngOnDestroy();
        this._Icon_135_3.context.ngOnDestroy();
        this._Icon_146_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_94_0 = function ($event) {
        this._appEl_94.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_94_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_102_0 = function ($event) {
        this._appEl_102.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_102_4.context._click($event) !== false);
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
