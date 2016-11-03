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
import * as import15 from '../../node_modules/ionic-angular/components/radio/radio-group.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/radio/radio-button.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/toggle/toggle.ngfactory';
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
import * as import33 from 'ionic-angular/util/haptic';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from 'ionic-angular/components/list/list-header';
import * as import38 from 'ionic-angular/components/label/label';
import * as import39 from 'ionic-angular/components/radio/radio-button';
import * as import40 from 'ionic-angular/components/list/list';
import * as import41 from 'ionic-angular/components/radio/radio-group';
import * as import42 from '@angular/forms/src/directives/control_value_accessor';
import * as import43 from 'ionic-angular/components/toggle/toggle';
import * as import44 from 'ionic-angular/components/content/content';
import * as import45 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import46 from 'ionic-angular/navigation/nav-controller-base';
import * as import47 from '@angular/core/src/linker/component_factory_resolver';
import * as import48 from 'ionic-angular/transitions/transition-controller';
import * as import49 from 'ionic-angular/navigation/deep-linker';
import * as import50 from 'ionic-angular/components/nav/nav';
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
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_11_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_11_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_11_5 = [this._RadioGroup_11_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_11_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_49_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_49_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_49_5 = [this._RadioGroup_49_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_49_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_59_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_59_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_59_5 = [this._Toggle_59_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_59_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_ApiDemoPage0.prototype, "_NG_VALUE_ACCESSOR_95_5", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_95_5 == null)) {
                (this.__NG_VALUE_ACCESSOR_95_5 = [this._RadioGroup_95_4.context]);
            }
            return this.__NG_VALUE_ACCESSOR_95_5;
        },
        enumerable: true,
        configurable: true
    });
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
        this._text_5 = this.renderer.createText(null, 'Radio', null);
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
        this.renderer.setElementAttribute(this._el_11, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_11, 'role', 'radiogroup');
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import31.GestureController));
        this._RadioGroup_11_4 = new import15.Wrapper_RadioGroup(this.renderer, new import23.ElementRef(this._el_11));
        this._query_ListHeader_11_0 = new import16.QueryList();
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import17.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import18.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Language\n    ', null);
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
        var compView_16 = import17.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import17.Wrapper_ItemContent();
        this._query_Label_16_0 = new import16.QueryList();
        this._query_Button_16_1 = new import16.QueryList();
        this._query_Icon_16_2 = new import16.QueryList();
        this._appEl_16.initComponent(this._Item_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_18_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_18), this.renderer, null, null, null, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Python', null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_21, 'checked', 'true');
        this._appEl_21 = new import3.AppElement(21, 16, this, this._el_21);
        var compView_21 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(21), this._appEl_21);
        this._RadioButton_21_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_21), this.renderer, this._Item_16_4.context, this._RadioGroup_11_4.context);
        this._appEl_21.initComponent(this._RadioButton_21_4.context, [], compView_21);
        compView_21.create(this._RadioButton_21_4.context, [], null);
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
            [],
            [].concat([this._el_21])
        ], null);
        this._text_23 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'item item-block');
        this._appEl_24 = new import3.AppElement(24, 11, this, this._el_24);
        var compView_24 = import17.viewFactory_Item0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Item_24_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_24), this.renderer);
        this._ItemContent_24_5 = new import17.Wrapper_ItemContent();
        this._query_Label_24_0 = new import16.QueryList();
        this._query_Button_24_1 = new import16.QueryList();
        this._query_Icon_24_2 = new import16.QueryList();
        this._appEl_24.initComponent(this._Item_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_26_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_26), this.renderer, null, null, null, null);
        this._text_27 = this.renderer.createText(this._el_26, 'Ruby', null);
        this._text_28 = this.renderer.createText(null, '\n      ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_29 = new import3.AppElement(29, 24, this, this._el_29);
        var compView_29 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(29), this._appEl_29);
        this._RadioButton_29_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_29), this.renderer, this._Item_24_4.context, this._RadioGroup_11_4.context);
        this._appEl_29.initComponent(this._RadioButton_29_4.context, [], compView_29);
        compView_29.create(this._RadioButton_29_4.context, [], null);
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
            [],
            [].concat([this._el_29])
        ], null);
        this._text_31 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_32 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item item-block');
        this._appEl_32 = new import3.AppElement(32, 11, this, this._el_32);
        var compView_32 = import17.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_32), this.renderer);
        this._ItemContent_32_5 = new import17.Wrapper_ItemContent();
        this._query_Label_32_0 = new import16.QueryList();
        this._query_Button_32_1 = new import16.QueryList();
        this._query_Icon_32_2 = new import16.QueryList();
        this._appEl_32.initComponent(this._Item_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_34_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_34), this.renderer, null, null, null, null);
        this._text_35 = this.renderer.createText(this._el_34, 'Java', null);
        this._text_36 = this.renderer.createText(null, '\n      ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_37 = new import3.AppElement(37, 32, this, this._el_37);
        var compView_37 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(37), this._appEl_37);
        this._RadioButton_37_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_37), this.renderer, this._Item_32_4.context, this._RadioGroup_11_4.context);
        this._appEl_37.initComponent(this._RadioButton_37_4.context, [], compView_37);
        compView_37.create(this._RadioButton_37_4.context, [], null);
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
            [],
            [].concat([this._el_37])
        ], null);
        this._text_39 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_40 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_40, 'class', 'item item-block');
        this._appEl_40 = new import3.AppElement(40, 11, this, this._el_40);
        var compView_40 = import17.viewFactory_Item0(this.viewUtils, this.injector(40), this._appEl_40);
        this._Item_40_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_40), this.renderer);
        this._ItemContent_40_5 = new import17.Wrapper_ItemContent();
        this._query_Label_40_0 = new import16.QueryList();
        this._query_Button_40_1 = new import16.QueryList();
        this._query_Icon_40_2 = new import16.QueryList();
        this._appEl_40.initComponent(this._Item_40_4.context, [], compView_40);
        this._text_41 = this.renderer.createText(null, '\n      ', null);
        this._el_42 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_42_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_42), this.renderer, null, null, null, null);
        this._text_43 = this.renderer.createText(this._el_42, 'PHP', null);
        this._text_44 = this.renderer.createText(null, '\n      ', null);
        this._el_45 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_45 = new import3.AppElement(45, 40, this, this._el_45);
        var compView_45 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(45), this._appEl_45);
        this._RadioButton_45_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_45), this.renderer, this._Item_40_4.context, this._RadioGroup_11_4.context);
        this._appEl_45.initComponent(this._RadioButton_45_4.context, [], compView_45);
        compView_45.create(this._RadioButton_45_4.context, [], null);
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
            [],
            [].concat([this._el_45])
        ], null);
        this._text_47 = this.renderer.createText(this._el_11, '\n  ', null);
        this._query_ListHeader_11_0.reset([this._ListHeader_13_5.context]);
        this._RadioGroup_11_4.context._header = this._query_ListHeader_11_0.first;
        this._text_48 = this.renderer.createText(null, '\n\n  ', null);
        this._el_49 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_49, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_49, 'role', 'radiogroup');
        this._List_49_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_49), this.renderer, this.parentInjector.get(import31.GestureController));
        this._RadioGroup_49_4 = new import15.Wrapper_RadioGroup(this.renderer, new import23.ElementRef(this._el_49));
        this._query_ListHeader_49_0 = new import16.QueryList();
        this._text_50 = this.renderer.createText(this._el_49, '\n    ', null);
        this._el_51 = this.renderer.createElement(this._el_49, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_51, 'class', 'item');
        this._appEl_51 = new import3.AppElement(51, 49, this, this._el_51);
        var compView_51 = import17.viewFactory_Item0(this.viewUtils, this.injector(51), this._appEl_51);
        this._Item_51_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_51), this.renderer);
        this._ListHeader_51_5 = new import18.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_51), null);
        this._query_Label_51_0 = new import16.QueryList();
        this._query_Button_51_1 = new import16.QueryList();
        this._query_Icon_51_2 = new import16.QueryList();
        this._appEl_51.initComponent(this._Item_51_4.context, [], compView_51);
        this._text_52 = this.renderer.createText(null, '\n      Auto-Lock\n    ', null);
        this._query_Label_51_0.reset([]);
        this._Item_51_4.context.contentLabel = this._query_Label_51_0.first;
        compView_51.create(this._Item_51_4.context, [
            [],
            [],
            [].concat([this._text_52]),
            [],
            []
        ], null);
        this._text_53 = this.renderer.createText(this._el_49, '\n\n    ', null);
        this._el_54 = this.renderer.createElement(this._el_49, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_54, 'class', 'item item-block');
        this._appEl_54 = new import3.AppElement(54, 49, this, this._el_54);
        var compView_54 = import17.viewFactory_Item0(this.viewUtils, this.injector(54), this._appEl_54);
        this._Item_54_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_54), this.renderer);
        this._ItemContent_54_5 = new import17.Wrapper_ItemContent();
        this._query_Label_54_0 = new import16.QueryList();
        this._query_Button_54_1 = new import16.QueryList();
        this._query_Icon_54_2 = new import16.QueryList();
        this._appEl_54.initComponent(this._Item_54_4.context, [], compView_54);
        this._text_55 = this.renderer.createText(null, '\n      ', null);
        this._el_56 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_56_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_56), this.renderer, null, null, null, null);
        this._text_57 = this.renderer.createText(this._el_56, 'Enable "Never"', null);
        this._text_58 = this.renderer.createText(null, '\n      ', null);
        this._el_59 = this.renderer.createElement(null, 'ion-toggle', null);
        this._appEl_59 = new import3.AppElement(59, 54, this, this._el_59);
        var compView_59 = import21.viewFactory_Toggle0(this.viewUtils, this.injector(59), this._appEl_59);
        this._Toggle_59_4 = new import21.Wrapper_Toggle(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_59), this.renderer, this.parentInjector.get(import33.Haptic), this._Item_54_4.context);
        this._appEl_59.initComponent(this._Toggle_59_4.context, [], compView_59);
        compView_59.create(this._Toggle_59_4.context, [], null);
        this._text_60 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_54_0.reset([this._Label_56_3.context]);
        this._Item_54_4.context.contentLabel = this._query_Label_54_0.first;
        compView_54.create(this._Item_54_4.context, [
            [],
            [].concat([this._el_56]),
            [].concat([
                this._text_55,
                this._text_58,
                this._text_60
            ]),
            [],
            [].concat([this._el_59])
        ], null);
        this._text_61 = this.renderer.createText(this._el_49, '\n\n    ', null);
        this._el_62 = this.renderer.createElement(this._el_49, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_62, 'class', 'item item-block');
        this._appEl_62 = new import3.AppElement(62, 49, this, this._el_62);
        var compView_62 = import17.viewFactory_Item0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Item_62_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_62), this.renderer);
        this._ItemContent_62_5 = new import17.Wrapper_ItemContent();
        this._query_Label_62_0 = new import16.QueryList();
        this._query_Button_62_1 = new import16.QueryList();
        this._query_Icon_62_2 = new import16.QueryList();
        this._appEl_62.initComponent(this._Item_62_4.context, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n      ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_64_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_64), this.renderer, null, null, null, null);
        this._text_65 = this.renderer.createText(this._el_64, '1 Minute', null);
        this._text_66 = this.renderer.createText(null, '\n      ', null);
        this._el_67 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_67 = new import3.AppElement(67, 62, this, this._el_67);
        var compView_67 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(67), this._appEl_67);
        this._RadioButton_67_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_67), this.renderer, this._Item_62_4.context, this._RadioGroup_49_4.context);
        this._appEl_67.initComponent(this._RadioButton_67_4.context, [], compView_67);
        compView_67.create(this._RadioButton_67_4.context, [], null);
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
            [],
            [].concat([this._el_67])
        ], null);
        this._text_69 = this.renderer.createText(this._el_49, '\n\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_49, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_70, 'class', 'item item-block');
        this._appEl_70 = new import3.AppElement(70, 49, this, this._el_70);
        var compView_70 = import17.viewFactory_Item0(this.viewUtils, this.injector(70), this._appEl_70);
        this._Item_70_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_70), this.renderer);
        this._ItemContent_70_5 = new import17.Wrapper_ItemContent();
        this._query_Label_70_0 = new import16.QueryList();
        this._query_Button_70_1 = new import16.QueryList();
        this._query_Icon_70_2 = new import16.QueryList();
        this._appEl_70.initComponent(this._Item_70_4.context, [], compView_70);
        this._text_71 = this.renderer.createText(null, '\n      ', null);
        this._el_72 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_72_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_72), this.renderer, null, null, null, null);
        this._text_73 = this.renderer.createText(this._el_72, '2 Minutes', null);
        this._text_74 = this.renderer.createText(null, '\n      ', null);
        this._el_75 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_75, 'checked', '');
        this._appEl_75 = new import3.AppElement(75, 70, this, this._el_75);
        var compView_75 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(75), this._appEl_75);
        this._RadioButton_75_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_75), this.renderer, this._Item_70_4.context, this._RadioGroup_49_4.context);
        this._appEl_75.initComponent(this._RadioButton_75_4.context, [], compView_75);
        compView_75.create(this._RadioButton_75_4.context, [], null);
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
            [],
            [].concat([this._el_75])
        ], null);
        this._text_77 = this.renderer.createText(this._el_49, '\n\n    ', null);
        this._el_78 = this.renderer.createElement(this._el_49, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_78, 'class', 'item item-block');
        this._appEl_78 = new import3.AppElement(78, 49, this, this._el_78);
        var compView_78 = import17.viewFactory_Item0(this.viewUtils, this.injector(78), this._appEl_78);
        this._Item_78_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_78), this.renderer);
        this._ItemContent_78_5 = new import17.Wrapper_ItemContent();
        this._query_Label_78_0 = new import16.QueryList();
        this._query_Button_78_1 = new import16.QueryList();
        this._query_Icon_78_2 = new import16.QueryList();
        this._appEl_78.initComponent(this._Item_78_4.context, [], compView_78);
        this._text_79 = this.renderer.createText(null, '\n      ', null);
        this._el_80 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_80_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_80), this.renderer, null, null, null, null);
        this._text_81 = this.renderer.createText(this._el_80, '5 Minutes', null);
        this._text_82 = this.renderer.createText(null, '\n      ', null);
        this._el_83 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_83 = new import3.AppElement(83, 78, this, this._el_83);
        var compView_83 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(83), this._appEl_83);
        this._RadioButton_83_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_83), this.renderer, this._Item_78_4.context, this._RadioGroup_49_4.context);
        this._appEl_83.initComponent(this._RadioButton_83_4.context, [], compView_83);
        compView_83.create(this._RadioButton_83_4.context, [], null);
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
            [],
            [].concat([this._el_83])
        ], null);
        this._text_85 = this.renderer.createText(this._el_49, '\n\n    ', null);
        this._el_86 = this.renderer.createElement(this._el_49, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_86, 'class', 'item item-block');
        this._appEl_86 = new import3.AppElement(86, 49, this, this._el_86);
        var compView_86 = import17.viewFactory_Item0(this.viewUtils, this.injector(86), this._appEl_86);
        this._Item_86_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_86), this.renderer);
        this._ItemContent_86_5 = new import17.Wrapper_ItemContent();
        this._query_Label_86_0 = new import16.QueryList();
        this._query_Button_86_1 = new import16.QueryList();
        this._query_Icon_86_2 = new import16.QueryList();
        this._appEl_86.initComponent(this._Item_86_4.context, [], compView_86);
        this._text_87 = this.renderer.createText(null, '\n      ', null);
        this._el_88 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_88_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_88), this.renderer, null, null, null, null);
        this._text_89 = this.renderer.createText(this._el_88, 'Never', null);
        this._text_90 = this.renderer.createText(null, '\n      ', null);
        this._el_91 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_91 = new import3.AppElement(91, 86, this, this._el_91);
        var compView_91 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(91), this._appEl_91);
        this._RadioButton_91_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_91), this.renderer, this._Item_86_4.context, this._RadioGroup_49_4.context);
        this._appEl_91.initComponent(this._RadioButton_91_4.context, [], compView_91);
        compView_91.create(this._RadioButton_91_4.context, [], null);
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
            [],
            [].concat([this._el_91])
        ], null);
        this._text_93 = this.renderer.createText(this._el_49, '\n  ', null);
        this._query_ListHeader_49_0.reset([this._ListHeader_51_5.context]);
        this._RadioGroup_49_4.context._header = this._query_ListHeader_49_0.first;
        this._text_94 = this.renderer.createText(null, '\n\n  ', null);
        this._el_95 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_95, 'radio-group', '');
        this.renderer.setElementAttribute(this._el_95, 'role', 'radiogroup');
        this._List_95_3 = new import14.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_95), this.renderer, this.parentInjector.get(import31.GestureController));
        this._RadioGroup_95_4 = new import15.Wrapper_RadioGroup(this.renderer, new import23.ElementRef(this._el_95));
        this._query_ListHeader_95_0 = new import16.QueryList();
        this._text_96 = this.renderer.createText(this._el_95, '\n    ', null);
        this._el_97 = this.renderer.createElement(this._el_95, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_97, 'class', 'item');
        this._appEl_97 = new import3.AppElement(97, 95, this, this._el_97);
        var compView_97 = import17.viewFactory_Item0(this.viewUtils, this.injector(97), this._appEl_97);
        this._Item_97_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_97), this.renderer);
        this._ListHeader_97_5 = new import18.Wrapper_ListHeader(this.parentInjector.get(import22.Config), this.renderer, new import23.ElementRef(this._el_97), null);
        this._query_Label_97_0 = new import16.QueryList();
        this._query_Button_97_1 = new import16.QueryList();
        this._query_Icon_97_2 = new import16.QueryList();
        this._appEl_97.initComponent(this._Item_97_4.context, [], compView_97);
        this._text_98 = this.renderer.createText(null, '\n      Silence\n    ', null);
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
        var compView_100 = import17.viewFactory_Item0(this.viewUtils, this.injector(100), this._appEl_100);
        this._Item_100_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_100), this.renderer);
        this._ItemContent_100_5 = new import17.Wrapper_ItemContent();
        this._query_Label_100_0 = new import16.QueryList();
        this._query_Button_100_1 = new import16.QueryList();
        this._query_Icon_100_2 = new import16.QueryList();
        this._appEl_100.initComponent(this._Item_100_4.context, [], compView_100);
        this._text_101 = this.renderer.createText(null, '\n      ', null);
        this._el_102 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_102_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_102), this.renderer, null, null, null, null);
        this._text_103 = this.renderer.createText(this._el_102, 'Always', null);
        this._text_104 = this.renderer.createText(null, '\n      ', null);
        this._el_105 = this.renderer.createElement(null, 'ion-radio', null);
        this._appEl_105 = new import3.AppElement(105, 100, this, this._el_105);
        var compView_105 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(105), this._appEl_105);
        this._RadioButton_105_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_105), this.renderer, this._Item_100_4.context, this._RadioGroup_95_4.context);
        this._appEl_105.initComponent(this._RadioButton_105_4.context, [], compView_105);
        compView_105.create(this._RadioButton_105_4.context, [], null);
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
            [],
            [].concat([this._el_105])
        ], null);
        this._text_107 = this.renderer.createText(this._el_95, '\n\n    ', null);
        this._el_108 = this.renderer.createElement(this._el_95, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_108, 'class', 'item item-block');
        this._appEl_108 = new import3.AppElement(108, 95, this, this._el_108);
        var compView_108 = import17.viewFactory_Item0(this.viewUtils, this.injector(108), this._appEl_108);
        this._Item_108_4 = new import17.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_108), this.renderer);
        this._ItemContent_108_5 = new import17.Wrapper_ItemContent();
        this._query_Label_108_0 = new import16.QueryList();
        this._query_Button_108_1 = new import16.QueryList();
        this._query_Icon_108_2 = new import16.QueryList();
        this._appEl_108.initComponent(this._Item_108_4.context, [], compView_108);
        this._text_109 = this.renderer.createText(null, '\n      ', null);
        this._el_110 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_110_3 = new import19.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_110), this.renderer, null, null, null, null);
        this._text_111 = this.renderer.createText(this._el_110, 'Only while phone is locked', null);
        this._text_112 = this.renderer.createText(null, '\n      ', null);
        this._el_113 = this.renderer.createElement(null, 'ion-radio', null);
        this.renderer.setElementAttribute(this._el_113, 'checked', 'true');
        this._appEl_113 = new import3.AppElement(113, 108, this, this._el_113);
        var compView_113 = import20.viewFactory_RadioButton0(this.viewUtils, this.injector(113), this._appEl_113);
        this._RadioButton_113_4 = new import20.Wrapper_RadioButton(this.parentInjector.get(import32.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_113), this.renderer, this._Item_108_4.context, this._RadioGroup_95_4.context);
        this._appEl_113.initComponent(this._RadioButton_113_4.context, [], compView_113);
        compView_113.create(this._RadioButton_113_4.context, [], null);
        this._text_114 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_108_0.reset([this._Label_110_3.context]);
        this._Item_108_4.context.contentLabel = this._query_Label_108_0.first;
        compView_108.create(this._Item_108_4.context, [
            [],
            [].concat([this._el_110]),
            [].concat([
                this._text_109,
                this._text_112,
                this._text_114
            ]),
            [],
            [].concat([this._el_113])
        ], null);
        this._text_115 = this.renderer.createText(this._el_95, '\n  ', null);
        this._query_ListHeader_95_0.reset([this._ListHeader_97_5.context]);
        this._RadioGroup_95_4.context._header = this._query_ListHeader_95_0.first;
        this._text_116 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_48,
                this._el_49,
                this._text_94,
                this._el_95,
                this._text_116
            ]),
            []
        ], null);
        this._text_117 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_29, 'click', this.eventHandler(this._handle_click_29_0.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_37, 'click', this.eventHandler(this._handle_click_37_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_0.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_59, 'ionChange', this.eventHandler(this._handle_ionChange_59_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        var subscription_0 = this._Toggle_59_4.context.ionChange.subscribe(this.eventHandler(this._handle_ionChange_59_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_67, 'click', this.eventHandler(this._handle_click_67_0.bind(this)));
        this._expr_15 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_75, 'click', this.eventHandler(this._handle_click_75_0.bind(this)));
        this._expr_18 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_83, 'click', this.eventHandler(this._handle_click_83_0.bind(this)));
        this._expr_20 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_91, 'click', this.eventHandler(this._handle_click_91_0.bind(this)));
        this._expr_23 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_105, 'click', this.eventHandler(this._handle_click_105_0.bind(this)));
        this._expr_25 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_113, 'click', this.eventHandler(this._handle_click_113_0.bind(this)));
        this._expr_28 = import7.UNINITIALIZED;
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
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
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
            this._el_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._text_115,
            this._text_116,
            this._text_117
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
            disposable_10
        ], [subscription_0]);
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
        if (((token === import39.RadioButton) && (21 === requestNodeIndex))) {
            return this._RadioButton_21_4.context;
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
        if (((token === import39.RadioButton) && (29 === requestNodeIndex))) {
            return this._RadioButton_29_4.context;
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
        if (((token === import39.RadioButton) && (37 === requestNodeIndex))) {
            return this._RadioButton_37_4.context;
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
        if (((token === import39.RadioButton) && (45 === requestNodeIndex))) {
            return this._RadioButton_45_4.context;
        }
        if (((token === import36.Item) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Item_40_4.context;
        }
        if (((token === import36.ItemContent) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ItemContent_40_5.context;
        }
        if (((token === import40.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._List_11_3.context;
        }
        if (((token === import41.RadioGroup) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._RadioGroup_11_4.context;
        }
        if (((token === import42.NG_VALUE_ACCESSOR) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NG_VALUE_ACCESSOR_11_5;
        }
        if (((token === import36.Item) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._Item_51_4.context;
        }
        if (((token === import37.ListHeader) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._ListHeader_51_5.context;
        }
        if (((token === import38.Label) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Label_56_3.context;
        }
        if (((token === import43.Toggle) && (59 === requestNodeIndex))) {
            return this._Toggle_59_4.context;
        }
        if (((token === import42.NG_VALUE_ACCESSOR) && (59 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_59_5;
        }
        if (((token === import36.Item) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._Item_54_4.context;
        }
        if (((token === import36.ItemContent) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 60)))) {
            return this._ItemContent_54_5.context;
        }
        if (((token === import38.Label) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Label_64_3.context;
        }
        if (((token === import39.RadioButton) && (67 === requestNodeIndex))) {
            return this._RadioButton_67_4.context;
        }
        if (((token === import36.Item) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Item_62_4.context;
        }
        if (((token === import36.ItemContent) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ItemContent_62_5.context;
        }
        if (((token === import38.Label) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._Label_72_3.context;
        }
        if (((token === import39.RadioButton) && (75 === requestNodeIndex))) {
            return this._RadioButton_75_4.context;
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
        if (((token === import39.RadioButton) && (83 === requestNodeIndex))) {
            return this._RadioButton_83_4.context;
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
        if (((token === import39.RadioButton) && (91 === requestNodeIndex))) {
            return this._RadioButton_91_4.context;
        }
        if (((token === import36.Item) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._Item_86_4.context;
        }
        if (((token === import36.ItemContent) && ((86 <= requestNodeIndex) && (requestNodeIndex <= 92)))) {
            return this._ItemContent_86_5.context;
        }
        if (((token === import40.List) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._List_49_3.context;
        }
        if (((token === import41.RadioGroup) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._RadioGroup_49_4.context;
        }
        if (((token === import42.NG_VALUE_ACCESSOR) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 93)))) {
            return this._NG_VALUE_ACCESSOR_49_5;
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
        if (((token === import39.RadioButton) && (105 === requestNodeIndex))) {
            return this._RadioButton_105_4.context;
        }
        if (((token === import36.Item) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._Item_100_4.context;
        }
        if (((token === import36.ItemContent) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._ItemContent_100_5.context;
        }
        if (((token === import38.Label) && ((110 <= requestNodeIndex) && (requestNodeIndex <= 111)))) {
            return this._Label_110_3.context;
        }
        if (((token === import39.RadioButton) && (113 === requestNodeIndex))) {
            return this._RadioButton_113_4.context;
        }
        if (((token === import36.Item) && ((108 <= requestNodeIndex) && (requestNodeIndex <= 114)))) {
            return this._Item_108_4.context;
        }
        if (((token === import36.ItemContent) && ((108 <= requestNodeIndex) && (requestNodeIndex <= 114)))) {
            return this._ItemContent_108_5.context;
        }
        if (((token === import40.List) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._List_95_3.context;
        }
        if (((token === import41.RadioGroup) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._RadioGroup_95_4.context;
        }
        if (((token === import42.NG_VALUE_ACCESSOR) && ((95 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._NG_VALUE_ACCESSOR_95_5;
        }
        if (((token === import44.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 116)))) {
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
        this._RadioGroup_11_4.detectChangesInternal(this, this._el_11, throwOnChange);
        if (this._Item_13_4.detectChangesInternal(this, this._el_13, throwOnChange)) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        this._ListHeader_13_5.detectChangesInternal(this, this._el_13, throwOnChange);
        if (this._Item_16_4.detectChangesInternal(this, this._el_16, throwOnChange)) {
            this._appEl_16.componentView.markAsCheckOnce();
        }
        this._ItemContent_16_5.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Label_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_4 = 'true';
        this._RadioButton_21_4.check_checked(currVal_4, throwOnChange, false);
        this._RadioButton_21_4.detectChangesInternal(this, this._el_21, throwOnChange);
        if (this._Item_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        this._ItemContent_24_5.detectChangesInternal(this, this._el_24, throwOnChange);
        this._Label_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        this._RadioButton_29_4.detectChangesInternal(this, this._el_29, throwOnChange);
        if (this._Item_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._ItemContent_32_5.detectChangesInternal(this, this._el_32, throwOnChange);
        this._Label_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        this._RadioButton_37_4.detectChangesInternal(this, this._el_37, throwOnChange);
        if (this._Item_40_4.detectChangesInternal(this, this._el_40, throwOnChange)) {
            this._appEl_40.componentView.markAsCheckOnce();
        }
        this._ItemContent_40_5.detectChangesInternal(this, this._el_40, throwOnChange);
        this._Label_42_3.detectChangesInternal(this, this._el_42, throwOnChange);
        this._RadioButton_45_4.detectChangesInternal(this, this._el_45, throwOnChange);
        this._List_49_3.detectChangesInternal(this, this._el_49, throwOnChange);
        this._RadioGroup_49_4.detectChangesInternal(this, this._el_49, throwOnChange);
        if (this._Item_51_4.detectChangesInternal(this, this._el_51, throwOnChange)) {
            this._appEl_51.componentView.markAsCheckOnce();
        }
        this._ListHeader_51_5.detectChangesInternal(this, this._el_51, throwOnChange);
        if (this._Item_54_4.detectChangesInternal(this, this._el_54, throwOnChange)) {
            this._appEl_54.componentView.markAsCheckOnce();
        }
        this._ItemContent_54_5.detectChangesInternal(this, this._el_54, throwOnChange);
        this._Label_56_3.detectChangesInternal(this, this._el_56, throwOnChange);
        this._Toggle_59_4.detectChangesInternal(this, this._el_59, throwOnChange);
        if (this._Item_62_4.detectChangesInternal(this, this._el_62, throwOnChange)) {
            this._appEl_62.componentView.markAsCheckOnce();
        }
        this._ItemContent_62_5.detectChangesInternal(this, this._el_62, throwOnChange);
        this._Label_64_3.detectChangesInternal(this, this._el_64, throwOnChange);
        this._RadioButton_67_4.detectChangesInternal(this, this._el_67, throwOnChange);
        if (this._Item_70_4.detectChangesInternal(this, this._el_70, throwOnChange)) {
            this._appEl_70.componentView.markAsCheckOnce();
        }
        this._ItemContent_70_5.detectChangesInternal(this, this._el_70, throwOnChange);
        this._Label_72_3.detectChangesInternal(this, this._el_72, throwOnChange);
        var currVal_17 = '';
        this._RadioButton_75_4.check_checked(currVal_17, throwOnChange, false);
        this._RadioButton_75_4.detectChangesInternal(this, this._el_75, throwOnChange);
        if (this._Item_78_4.detectChangesInternal(this, this._el_78, throwOnChange)) {
            this._appEl_78.componentView.markAsCheckOnce();
        }
        this._ItemContent_78_5.detectChangesInternal(this, this._el_78, throwOnChange);
        this._Label_80_3.detectChangesInternal(this, this._el_80, throwOnChange);
        this._RadioButton_83_4.detectChangesInternal(this, this._el_83, throwOnChange);
        if (this._Item_86_4.detectChangesInternal(this, this._el_86, throwOnChange)) {
            this._appEl_86.componentView.markAsCheckOnce();
        }
        this._ItemContent_86_5.detectChangesInternal(this, this._el_86, throwOnChange);
        this._Label_88_3.detectChangesInternal(this, this._el_88, throwOnChange);
        var currVal_22 = this.context.isDisabled;
        this._RadioButton_91_4.check_disabled(currVal_22, throwOnChange, false);
        this._RadioButton_91_4.detectChangesInternal(this, this._el_91, throwOnChange);
        this._List_95_3.detectChangesInternal(this, this._el_95, throwOnChange);
        this._RadioGroup_95_4.detectChangesInternal(this, this._el_95, throwOnChange);
        if (this._Item_97_4.detectChangesInternal(this, this._el_97, throwOnChange)) {
            this._appEl_97.componentView.markAsCheckOnce();
        }
        this._ListHeader_97_5.detectChangesInternal(this, this._el_97, throwOnChange);
        if (this._Item_100_4.detectChangesInternal(this, this._el_100, throwOnChange)) {
            this._appEl_100.componentView.markAsCheckOnce();
        }
        this._ItemContent_100_5.detectChangesInternal(this, this._el_100, throwOnChange);
        this._Label_102_3.detectChangesInternal(this, this._el_102, throwOnChange);
        this._RadioButton_105_4.detectChangesInternal(this, this._el_105, throwOnChange);
        if (this._Item_108_4.detectChangesInternal(this, this._el_108, throwOnChange)) {
            this._appEl_108.componentView.markAsCheckOnce();
        }
        this._ItemContent_108_5.detectChangesInternal(this, this._el_108, throwOnChange);
        this._Label_110_3.detectChangesInternal(this, this._el_110, throwOnChange);
        var currVal_27 = 'true';
        this._RadioButton_113_4.check_checked(currVal_27, throwOnChange, false);
        this._RadioButton_113_4.detectChangesInternal(this, this._el_113, throwOnChange);
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
            if (this._query_Button_51_1.dirty) {
                this._query_Button_51_1.reset([]);
                this._Item_51_4.context._buttons = this._query_Button_51_1;
                this._query_Button_51_1.notifyOnChanges();
            }
            if (this._query_Icon_51_2.dirty) {
                this._query_Icon_51_2.reset([]);
                this._Item_51_4.context._icons = this._query_Icon_51_2;
                this._query_Icon_51_2.notifyOnChanges();
            }
            if (this._query_Button_54_1.dirty) {
                this._query_Button_54_1.reset([]);
                this._Item_54_4.context._buttons = this._query_Button_54_1;
                this._query_Button_54_1.notifyOnChanges();
            }
            if (this._query_Icon_54_2.dirty) {
                this._query_Icon_54_2.reset([]);
                this._Item_54_4.context._icons = this._query_Icon_54_2;
                this._query_Icon_54_2.notifyOnChanges();
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
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_24_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_40_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_11_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_51_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Toggle_59_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_54_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_62_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_70_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_78_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_86_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_49_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_97_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_100_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_108_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RadioGroup_95_4.context.ngAfterContentInit();
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
        var currVal_5 = this._RadioButton_21_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_21, 'radio-disabled', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._RadioButton_29_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_29, 'radio-disabled', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._RadioButton_37_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_37, 'radio-disabled', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_11 = this._RadioButton_45_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_45, 'radio-disabled', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_13 = this._Toggle_59_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_59, 'toggle-disabled', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_15 = this._RadioButton_67_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_67, 'radio-disabled', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_18 = this._RadioButton_75_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_75, 'radio-disabled', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_20 = this._RadioButton_83_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_83, 'radio-disabled', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_23 = this._RadioButton_91_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_91, 'radio-disabled', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_25 = this._RadioButton_105_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_105, 'radio-disabled', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_28 = this._RadioButton_113_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_113, 'radio-disabled', currVal_28);
            this._expr_28 = currVal_28;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._RadioButton_21_4.context.ngOnDestroy();
        this._RadioButton_29_4.context.ngOnDestroy();
        this._RadioButton_37_4.context.ngOnDestroy();
        this._RadioButton_45_4.context.ngOnDestroy();
        this._Toggle_59_4.context.ngOnDestroy();
        this._RadioButton_67_4.context.ngOnDestroy();
        this._RadioButton_75_4.context.ngOnDestroy();
        this._RadioButton_83_4.context.ngOnDestroy();
        this._RadioButton_91_4.context.ngOnDestroy();
        this._RadioButton_105_4.context.ngOnDestroy();
        this._RadioButton_113_4.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_21_0 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_21_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_29_0 = function ($event) {
        this._appEl_29.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_29_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_37_0 = function ($event) {
        this._appEl_37.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_37_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_45_0 = function ($event) {
        this._appEl_45.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_45_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionChange_59_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.isDisabled = !this.context.isDisabled) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_67_0 = function ($event) {
        this._appEl_67.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_67_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_75_0 = function ($event) {
        this._appEl_75.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_75_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_83_0 = function ($event) {
        this._appEl_83.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_83_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_91_0 = function ($event) {
        this._appEl_91.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_91_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_105_0 = function ($event) {
        this._appEl_105.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_105_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_113_0 = function ($event) {
        this._appEl_113.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._RadioButton_113_4.context._click($event) !== false);
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
        var compView_0 = import45.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import45.Wrapper_Nav(this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import46.NavControllerBase, null), this.parentInjector.get(import25.App), this.parentInjector.get(import22.Config), this.parentInjector.get(import28.Keyboard), new import23.ElementRef(this._el_0), this.parentInjector.get(import29.NgZone), this.renderer, this.parentInjector.get(import47.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import48.TransitionController), this.parentInjector.get(import49.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import50.Nav) && (0 === requestNodeIndex))) {
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
