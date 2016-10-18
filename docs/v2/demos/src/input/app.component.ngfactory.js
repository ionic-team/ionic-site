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
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from 'ionic-angular/components/label/label';
import * as import18 from 'ionic-angular/components/input/input';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/navigation/nav-controller';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import34 from 'ionic-angular/platform/platform';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from 'ionic-angular/components/nav/nav';
import * as import37 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import38 from 'ionic-angular/navigation/nav-controller-base';
import * as import39 from '@angular/core/src/linker/component_factory_resolver';
import * as import40 from 'ionic-angular/transitions/transition-controller';
import * as import41 from 'ionic-angular/navigation/deep-linker';
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
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import22.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import25.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Input', null);
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
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import26.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.List(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import31.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import15.ItemContent();
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_15, 'color', 'primary');
        this._Label_15_3 = new import17.Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_15), this.renderer, null, null, null, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Inline Label', null);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_18, 'placeholder', 'Text Input');
        this._appEl_18 = new import2.AppElement(18, 13, this, this._el_18);
        var compView_18 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(18), this._appEl_18);
        this._TextInput_18_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_13_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_18), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_18.initComponent(this._TextInput_18_4, [], compView_18);
        compView_18.create(this._TextInput_18_4, [], null);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_15_3]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [].concat([this._el_15]),
            [].concat([
                this._text_14,
                this._text_17,
                this._text_19
            ]),
            [].concat([this._el_18]),
            []
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'item item-block');
        this._appEl_21 = new import2.AppElement(21, 11, this, this._el_21);
        var compView_21 = import31.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_21), this.renderer);
        this._ItemContent_21_5 = new import15.ItemContent();
        this._query_Label_21_0 = new import16.QueryList();
        this._query_Button_21_1 = new import16.QueryList();
        this._query_Icon_21_2 = new import16.QueryList();
        this._appEl_21.initComponent(this._Item_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_23, 'fixed', '');
        this._Label_23_3 = new import17.Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_23), this.renderer, null, null, '', null);
        this._text_24 = this.renderer.createText(this._el_23, 'Fixed Label', null);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_26, 'placeholder', 'Tel Input');
        this.renderer.setElementAttribute(this._el_26, 'type', 'tel');
        this._appEl_26 = new import2.AppElement(26, 21, this, this._el_26);
        var compView_26 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(26), this._appEl_26);
        this._TextInput_26_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_21_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_26), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_26.initComponent(this._TextInput_26_4, [], compView_26);
        compView_26.create(this._TextInput_26_4, [], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_21_0.reset([this._Label_23_3]);
        this._Item_21_4.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4, [
            [],
            [].concat([this._el_23]),
            [].concat([
                this._text_22,
                this._text_25,
                this._text_27
            ]),
            [].concat([this._el_26]),
            []
        ], null);
        this._text_28 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'item item-block');
        this._appEl_29 = new import2.AppElement(29, 11, this, this._el_29);
        var compView_29 = import31.viewFactory_Item0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Item_29_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_29), this.renderer);
        this._ItemContent_29_5 = new import15.ItemContent();
        this._query_Label_29_0 = new import16.QueryList();
        this._query_Button_29_1 = new import16.QueryList();
        this._query_Icon_29_2 = new import16.QueryList();
        this._appEl_29.initComponent(this._Item_29_4, [], compView_29);
        this._text_30 = this.renderer.createText(null, '\n      ', null);
        this._el_31 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_31, 'placeholder', 'Number Input with no label');
        this.renderer.setElementAttribute(this._el_31, 'type', 'number');
        this._appEl_31 = new import2.AppElement(31, 29, this, this._el_31);
        var compView_31 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(31), this._appEl_31);
        this._TextInput_31_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_29_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_31), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_31.initComponent(this._TextInput_31_4, [], compView_31);
        compView_31.create(this._TextInput_31_4, [], null);
        this._text_32 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_29_0.reset([]);
        this._Item_29_4.contentLabel = this._query_Label_29_0.first;
        compView_29.create(this._Item_29_4, [
            [],
            [],
            [].concat([
                this._text_30,
                this._text_32
            ]),
            [].concat([this._el_31]),
            []
        ], null);
        this._text_33 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_34 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_34, 'class', 'item item-block');
        this._appEl_34 = new import2.AppElement(34, 11, this, this._el_34);
        var compView_34 = import31.viewFactory_Item0(this.viewUtils, this.injector(34), this._appEl_34);
        this._Item_34_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_34), this.renderer);
        this._ItemContent_34_5 = new import15.ItemContent();
        this._query_Label_34_0 = new import16.QueryList();
        this._query_Button_34_1 = new import16.QueryList();
        this._query_Icon_34_2 = new import16.QueryList();
        this._appEl_34.initComponent(this._Item_34_4, [], compView_34);
        this._text_35 = this.renderer.createText(null, '\n      ', null);
        this._el_36 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_36, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_36, 'stacked', '');
        this._Label_36_3 = new import17.Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_36), this.renderer, null, '', null, null);
        this._text_37 = this.renderer.createText(this._el_36, 'Stacked Label', null);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_39, 'placeholder', 'Email Input');
        this.renderer.setElementAttribute(this._el_39, 'type', 'email');
        this._appEl_39 = new import2.AppElement(39, 34, this, this._el_39);
        var compView_39 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(39), this._appEl_39);
        this._TextInput_39_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_34_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_39), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_39.initComponent(this._TextInput_39_4, [], compView_39);
        compView_39.create(this._TextInput_39_4, [], null);
        this._text_40 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_34_0.reset([this._Label_36_3]);
        this._Item_34_4.contentLabel = this._query_Label_34_0.first;
        compView_34.create(this._Item_34_4, [
            [],
            [].concat([this._el_36]),
            [].concat([
                this._text_35,
                this._text_38,
                this._text_40
            ]),
            [].concat([this._el_39]),
            []
        ], null);
        this._text_41 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_42 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_42, 'class', 'item item-block');
        this._appEl_42 = new import2.AppElement(42, 11, this, this._el_42);
        var compView_42 = import31.viewFactory_Item0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Item_42_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_42), this.renderer);
        this._ItemContent_42_5 = new import15.ItemContent();
        this._query_Label_42_0 = new import16.QueryList();
        this._query_Button_42_1 = new import16.QueryList();
        this._query_Icon_42_2 = new import16.QueryList();
        this._appEl_42.initComponent(this._Item_42_4, [], compView_42);
        this._text_43 = this.renderer.createText(null, '\n      ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_44, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_44, 'stacked', '');
        this._Label_44_3 = new import17.Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_44), this.renderer, null, '', null, null);
        this._text_45 = this.renderer.createText(this._el_44, 'Stacked Label', null);
        this._text_46 = this.renderer.createText(null, '\n      ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_47, 'placeholder', 'Password Input');
        this.renderer.setElementAttribute(this._el_47, 'type', 'password');
        this._appEl_47 = new import2.AppElement(47, 42, this, this._el_47);
        var compView_47 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(47), this._appEl_47);
        this._TextInput_47_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_42_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_47), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_47.initComponent(this._TextInput_47_4, [], compView_47);
        compView_47.create(this._TextInput_47_4, [], null);
        this._text_48 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_42_0.reset([this._Label_44_3]);
        this._Item_42_4.contentLabel = this._query_Label_42_0.first;
        compView_42.create(this._Item_42_4, [
            [],
            [].concat([this._el_44]),
            [].concat([
                this._text_43,
                this._text_46,
                this._text_48
            ]),
            [].concat([this._el_47]),
            []
        ], null);
        this._text_49 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_50 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_50, 'class', 'item item-block');
        this._appEl_50 = new import2.AppElement(50, 11, this, this._el_50);
        var compView_50 = import31.viewFactory_Item0(this.viewUtils, this.injector(50), this._appEl_50);
        this._Item_50_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_50), this.renderer);
        this._ItemContent_50_5 = new import15.ItemContent();
        this._query_Label_50_0 = new import16.QueryList();
        this._query_Button_50_1 = new import16.QueryList();
        this._query_Icon_50_2 = new import16.QueryList();
        this._appEl_50.initComponent(this._Item_50_4, [], compView_50);
        this._text_51 = this.renderer.createText(null, '\n      ', null);
        this._el_52 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_52, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_52, 'floating', '');
        this._Label_52_3 = new import17.Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_52), this.renderer, '', null, null, null);
        this._text_53 = this.renderer.createText(this._el_52, 'Floating Label', null);
        this._text_54 = this.renderer.createText(null, '\n      ', null);
        this._el_55 = this.renderer.createElement(null, 'ion-input', null);
        this._appEl_55 = new import2.AppElement(55, 50, this, this._el_55);
        var compView_55 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(55), this._appEl_55);
        this._TextInput_55_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_50_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_55), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_55.initComponent(this._TextInput_55_4, [], compView_55);
        compView_55.create(this._TextInput_55_4, [], null);
        this._text_56 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_50_0.reset([this._Label_52_3]);
        this._Item_50_4.contentLabel = this._query_Label_50_0.first;
        compView_50.create(this._Item_50_4, [
            [],
            [].concat([this._el_52]),
            [].concat([
                this._text_51,
                this._text_54,
                this._text_56
            ]),
            [].concat([this._el_55]),
            []
        ], null);
        this._text_57 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_58 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_58, 'class', 'item item-block');
        this._appEl_58 = new import2.AppElement(58, 11, this, this._el_58);
        var compView_58 = import31.viewFactory_Item0(this.viewUtils, this.injector(58), this._appEl_58);
        this._Item_58_4 = new import15.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_58), this.renderer);
        this._ItemContent_58_5 = new import15.ItemContent();
        this._query_Label_58_0 = new import16.QueryList();
        this._query_Button_58_1 = new import16.QueryList();
        this._query_Icon_58_2 = new import16.QueryList();
        this._appEl_58.initComponent(this._Item_58_4, [], compView_58);
        this._text_59 = this.renderer.createText(null, '\n      ', null);
        this._el_60 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_60, 'clearInput', '');
        this.renderer.setElementAttribute(this._el_60, 'placeholder', 'Clear Input');
        this._appEl_60 = new import2.AppElement(60, 58, this, this._el_60);
        var compView_60 = import33.viewFactory_TextInput0(this.viewUtils, this.injector(60), this._appEl_60);
        this._TextInput_60_4 = new import18.TextInput(this.parentInjector.get(import19.Config), this.parentInjector.get(import32.Form), this._Item_58_4, this.parentInjector.get(import23.App), this.parentInjector.get(import34.Platform), new import20.ElementRef(this._el_60), this.renderer, this._Content_9_4, this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import35.NgControl, null));
        this._appEl_60.initComponent(this._TextInput_60_4, [], compView_60);
        compView_60.create(this._TextInput_60_4, [], null);
        this._text_61 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_58_0.reset([]);
        this._Item_58_4.contentLabel = this._query_Label_58_0.first;
        compView_58.create(this._Item_58_4, [
            [],
            [],
            [].concat([
                this._text_59,
                this._text_61
            ]),
            [].concat([this._el_60]),
            []
        ], null);
        this._text_62 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_63 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_63
            ]),
            []
        ], null);
        this._text_64 = this.renderer.createText(parentRenderNode, '\n', null);
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
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._text_63,
            this._text_64
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
        if (((token === import17.Label) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Label_15_3;
        }
        if (((token === import18.TextInput) && (18 === requestNodeIndex))) {
            return this._TextInput_18_4;
        }
        if (((token === import15.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_13_4;
        }
        if (((token === import15.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_13_5;
        }
        if (((token === import17.Label) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Label_23_3;
        }
        if (((token === import18.TextInput) && (26 === requestNodeIndex))) {
            return this._TextInput_26_4;
        }
        if (((token === import15.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_21_4;
        }
        if (((token === import15.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_21_5;
        }
        if (((token === import18.TextInput) && (31 === requestNodeIndex))) {
            return this._TextInput_31_4;
        }
        if (((token === import15.Item) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Item_29_4;
        }
        if (((token === import15.ItemContent) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ItemContent_29_5;
        }
        if (((token === import17.Label) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Label_36_3;
        }
        if (((token === import18.TextInput) && (39 === requestNodeIndex))) {
            return this._TextInput_39_4;
        }
        if (((token === import15.Item) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Item_34_4;
        }
        if (((token === import15.ItemContent) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._ItemContent_34_5;
        }
        if (((token === import17.Label) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Label_44_3;
        }
        if (((token === import18.TextInput) && (47 === requestNodeIndex))) {
            return this._TextInput_47_4;
        }
        if (((token === import15.Item) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Item_42_4;
        }
        if (((token === import15.ItemContent) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemContent_42_5;
        }
        if (((token === import17.Label) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Label_52_3;
        }
        if (((token === import18.TextInput) && (55 === requestNodeIndex))) {
            return this._TextInput_55_4;
        }
        if (((token === import15.Item) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Item_50_4;
        }
        if (((token === import15.ItemContent) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._ItemContent_50_5;
        }
        if (((token === import18.TextInput) && (60 === requestNodeIndex))) {
            return this._TextInput_60_4;
        }
        if (((token === import15.Item) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._Item_58_4;
        }
        if (((token === import15.ItemContent) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._ItemContent_58_5;
        }
        if (((token === import14.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._List_11_3;
        }
        if (((token === import13.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_3 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Label_15_3.color = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = 'Text Input';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._TextInput_18_4.placeholder = currVal_4;
            this._expr_4 = currVal_4;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_18_4.ngOnInit();
        }
        var currVal_5 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Label_23_3.color = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'Tel Input';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._TextInput_26_4.placeholder = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_7 = 'tel';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._TextInput_26_4.type = currVal_7;
            this._expr_7 = currVal_7;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_26_4.ngOnInit();
        }
        var currVal_8 = 'Number Input with no label';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._TextInput_31_4.placeholder = currVal_8;
            this._expr_8 = currVal_8;
        }
        var currVal_9 = 'number';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._TextInput_31_4.type = currVal_9;
            this._expr_9 = currVal_9;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_31_4.ngOnInit();
        }
        var currVal_10 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Label_36_3.color = currVal_10;
            this._expr_10 = currVal_10;
        }
        var currVal_11 = 'Email Input';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._TextInput_39_4.placeholder = currVal_11;
            this._expr_11 = currVal_11;
        }
        var currVal_12 = 'email';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._TextInput_39_4.type = currVal_12;
            this._expr_12 = currVal_12;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_39_4.ngOnInit();
        }
        var currVal_13 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Label_44_3.color = currVal_13;
            this._expr_13 = currVal_13;
        }
        var currVal_14 = 'Password Input';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._TextInput_47_4.placeholder = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_15 = 'password';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._TextInput_47_4.type = currVal_15;
            this._expr_15 = currVal_15;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_47_4.ngOnInit();
        }
        var currVal_16 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Label_52_3.color = currVal_16;
            this._expr_16 = currVal_16;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_55_4.ngOnInit();
        }
        var currVal_17 = 'Clear Input';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._TextInput_60_4.placeholder = currVal_17;
            this._expr_17 = currVal_17;
        }
        var currVal_18 = '';
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._TextInput_60_4.clearInput = currVal_18;
            this._expr_18 = currVal_18;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_60_4.ngOnInit();
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
            if (this._query_Button_21_1.dirty) {
                this._query_Button_21_1.reset([]);
                this._Item_21_4._buttons = this._query_Button_21_1;
                this._query_Button_21_1.notifyOnChanges();
            }
            if (this._query_Icon_21_2.dirty) {
                this._query_Icon_21_2.reset([]);
                this._Item_21_4._icons = this._query_Icon_21_2;
                this._query_Icon_21_2.notifyOnChanges();
            }
            if (this._query_Button_29_1.dirty) {
                this._query_Button_29_1.reset([]);
                this._Item_29_4._buttons = this._query_Button_29_1;
                this._query_Button_29_1.notifyOnChanges();
            }
            if (this._query_Icon_29_2.dirty) {
                this._query_Icon_29_2.reset([]);
                this._Item_29_4._icons = this._query_Icon_29_2;
                this._query_Icon_29_2.notifyOnChanges();
            }
            if (this._query_Button_34_1.dirty) {
                this._query_Button_34_1.reset([]);
                this._Item_34_4._buttons = this._query_Button_34_1;
                this._query_Button_34_1.notifyOnChanges();
            }
            if (this._query_Icon_34_2.dirty) {
                this._query_Icon_34_2.reset([]);
                this._Item_34_4._icons = this._query_Icon_34_2;
                this._query_Icon_34_2.notifyOnChanges();
            }
            if (this._query_Button_42_1.dirty) {
                this._query_Button_42_1.reset([]);
                this._Item_42_4._buttons = this._query_Button_42_1;
                this._query_Button_42_1.notifyOnChanges();
            }
            if (this._query_Icon_42_2.dirty) {
                this._query_Icon_42_2.reset([]);
                this._Item_42_4._icons = this._query_Icon_42_2;
                this._query_Icon_42_2.notifyOnChanges();
            }
            if (this._query_Button_50_1.dirty) {
                this._query_Button_50_1.reset([]);
                this._Item_50_4._buttons = this._query_Button_50_1;
                this._query_Button_50_1.notifyOnChanges();
            }
            if (this._query_Icon_50_2.dirty) {
                this._query_Icon_50_2.reset([]);
                this._Item_50_4._icons = this._query_Icon_50_2;
                this._query_Icon_50_2.notifyOnChanges();
            }
            if (this._query_Button_58_1.dirty) {
                this._query_Button_58_1.reset([]);
                this._Item_58_4._buttons = this._query_Button_58_1;
                this._query_Button_58_1.notifyOnChanges();
            }
            if (this._query_Icon_58_2.dirty) {
                this._query_Icon_58_2.reset([]);
                this._Item_58_4._icons = this._query_Icon_58_2;
                this._query_Icon_58_2.notifyOnChanges();
            }
            this._TextInput_18_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            this._TextInput_26_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.ngAfterContentInit();
            }
            this._TextInput_31_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_29_4.ngAfterContentInit();
            }
            this._TextInput_39_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_34_4.ngAfterContentInit();
            }
            this._TextInput_47_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_42_4.ngAfterContentInit();
            }
            this._TextInput_55_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_50_4.ngAfterContentInit();
            }
            this._TextInput_60_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_58_4.ngAfterContentInit();
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
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._TextInput_18_4.ngOnDestroy();
        this._TextInput_26_4.ngOnDestroy();
        this._TextInput_31_4.ngOnDestroy();
        this._TextInput_39_4.ngOnDestroy();
        this._TextInput_47_4.ngOnDestroy();
        this._TextInput_55_4.ngOnDestroy();
        this._TextInput_60_4.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
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
        var compView_0 = import37.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import36.Nav(this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import38.NavControllerBase, null), this.parentInjector.get(import23.App), this.parentInjector.get(import19.Config), this.parentInjector.get(import27.Keyboard), new import20.ElementRef(this._el_0), this.parentInjector.get(import28.NgZone), this.renderer, this.parentInjector.get(import39.ComponentFactoryResolver), this.parentInjector.get(import30.GestureController), this.parentInjector.get(import40.TransitionController), this.parentInjector.get(import41.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
