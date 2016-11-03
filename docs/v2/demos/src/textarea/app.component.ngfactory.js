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
import * as import17 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from 'ionic-angular/navigation/nav-controller';
import * as import24 from 'ionic-angular/components/toolbar/toolbar';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from 'ionic-angular/gestures/gesture-controller';
import * as import29 from 'ionic-angular/util/form';
import * as import30 from 'ionic-angular/platform/platform';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/navbar/navbar';
import * as import34 from 'ionic-angular/components/label/label';
import * as import35 from 'ionic-angular/components/input/input';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from 'ionic-angular/components/list/list';
import * as import38 from 'ionic-angular/components/content/content';
import * as import39 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import40 from 'ionic-angular/navigation/nav-controller-base';
import * as import41 from '@angular/core/src/linker/component_factory_resolver';
import * as import42 from 'ionic-angular/transitions/transition-controller';
import * as import43 from 'ionic-angular/navigation/deep-linker';
import * as import44 from 'ionic-angular/components/nav/nav';
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
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import24.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Textarea', null);
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
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import27.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import28.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item item-block');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import15.Wrapper_Item(this.parentInjector.get(import29.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_13), this.renderer);
        this._ItemContent_13_5 = new import15.Wrapper_ItemContent();
        this._query_Label_13_0 = new import16.QueryList();
        this._query_Button_13_1 = new import16.QueryList();
        this._query_Icon_13_2 = new import16.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_15, 'color', 'primary');
        this._Label_15_3 = new import17.Wrapper_Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_15), this.renderer, null, null, null, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Inline Label', null);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_18, 'placeholder', 'Textarea');
        this._appEl_18 = new import3.AppElement(18, 13, this, this._el_18);
        var compView_18 = import18.viewFactory_TextArea0(this.viewUtils, this.injector(18), this._appEl_18);
        this._TextArea_18_4 = new import18.Wrapper_TextArea(this.parentInjector.get(import19.Config), this.parentInjector.get(import29.Form), this._Item_13_4.context, this.parentInjector.get(import22.App), this.parentInjector.get(import30.Platform), new import20.ElementRef(this._el_18), this.renderer, this._Content_9_4.context, this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import31.NgControl, null));
        this._appEl_18.initComponent(this._TextArea_18_4.context, [], compView_18);
        compView_18.create(this._TextArea_18_4.context, [], null);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_13_0.reset([this._Label_15_3.context]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
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
        this._appEl_21 = new import3.AppElement(21, 11, this, this._el_21);
        var compView_21 = import15.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import15.Wrapper_Item(this.parentInjector.get(import29.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_21), this.renderer);
        this._ItemContent_21_5 = new import15.Wrapper_ItemContent();
        this._query_Label_21_0 = new import16.QueryList();
        this._query_Button_21_1 = new import16.QueryList();
        this._query_Icon_21_2 = new import16.QueryList();
        this._appEl_21.initComponent(this._Item_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_23, 'fixed', '');
        this._Label_23_3 = new import17.Wrapper_Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_23), this.renderer, null, null, '', null);
        this._text_24 = this.renderer.createText(this._el_23, 'Fixed Label', null);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_26, 'placeholder', 'Textarea');
        this._appEl_26 = new import3.AppElement(26, 21, this, this._el_26);
        var compView_26 = import18.viewFactory_TextArea0(this.viewUtils, this.injector(26), this._appEl_26);
        this._TextArea_26_4 = new import18.Wrapper_TextArea(this.parentInjector.get(import19.Config), this.parentInjector.get(import29.Form), this._Item_21_4.context, this.parentInjector.get(import22.App), this.parentInjector.get(import30.Platform), new import20.ElementRef(this._el_26), this.renderer, this._Content_9_4.context, this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import31.NgControl, null));
        this._appEl_26.initComponent(this._TextArea_26_4.context, [], compView_26);
        compView_26.create(this._TextArea_26_4.context, [], null);
        this._text_27 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_21_0.reset([this._Label_23_3.context]);
        this._Item_21_4.context.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4.context, [
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
        this._appEl_29 = new import3.AppElement(29, 11, this, this._el_29);
        var compView_29 = import15.viewFactory_Item0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Item_29_4 = new import15.Wrapper_Item(this.parentInjector.get(import29.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_29), this.renderer);
        this._ItemContent_29_5 = new import15.Wrapper_ItemContent();
        this._query_Label_29_0 = new import16.QueryList();
        this._query_Button_29_1 = new import16.QueryList();
        this._query_Icon_29_2 = new import16.QueryList();
        this._appEl_29.initComponent(this._Item_29_4.context, [], compView_29);
        this._text_30 = this.renderer.createText(null, '\n      ', null);
        this._el_31 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_31, 'placeholder', 'Textarea with no label');
        this._appEl_31 = new import3.AppElement(31, 29, this, this._el_31);
        var compView_31 = import18.viewFactory_TextArea0(this.viewUtils, this.injector(31), this._appEl_31);
        this._TextArea_31_4 = new import18.Wrapper_TextArea(this.parentInjector.get(import19.Config), this.parentInjector.get(import29.Form), this._Item_29_4.context, this.parentInjector.get(import22.App), this.parentInjector.get(import30.Platform), new import20.ElementRef(this._el_31), this.renderer, this._Content_9_4.context, this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import31.NgControl, null));
        this._appEl_31.initComponent(this._TextArea_31_4.context, [], compView_31);
        compView_31.create(this._TextArea_31_4.context, [], null);
        this._text_32 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_29_0.reset([]);
        this._Item_29_4.context.contentLabel = this._query_Label_29_0.first;
        compView_29.create(this._Item_29_4.context, [
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
        this._appEl_34 = new import3.AppElement(34, 11, this, this._el_34);
        var compView_34 = import15.viewFactory_Item0(this.viewUtils, this.injector(34), this._appEl_34);
        this._Item_34_4 = new import15.Wrapper_Item(this.parentInjector.get(import29.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_34), this.renderer);
        this._ItemContent_34_5 = new import15.Wrapper_ItemContent();
        this._query_Label_34_0 = new import16.QueryList();
        this._query_Button_34_1 = new import16.QueryList();
        this._query_Icon_34_2 = new import16.QueryList();
        this._appEl_34.initComponent(this._Item_34_4.context, [], compView_34);
        this._text_35 = this.renderer.createText(null, '\n      ', null);
        this._el_36 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_36, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_36, 'stacked', '');
        this._Label_36_3 = new import17.Wrapper_Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_36), this.renderer, null, '', null, null);
        this._text_37 = this.renderer.createText(this._el_36, 'Stacked Label', null);
        this._text_38 = this.renderer.createText(null, '\n      ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_39, 'placeholder', 'Textarea');
        this._appEl_39 = new import3.AppElement(39, 34, this, this._el_39);
        var compView_39 = import18.viewFactory_TextArea0(this.viewUtils, this.injector(39), this._appEl_39);
        this._TextArea_39_4 = new import18.Wrapper_TextArea(this.parentInjector.get(import19.Config), this.parentInjector.get(import29.Form), this._Item_34_4.context, this.parentInjector.get(import22.App), this.parentInjector.get(import30.Platform), new import20.ElementRef(this._el_39), this.renderer, this._Content_9_4.context, this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import31.NgControl, null));
        this._appEl_39.initComponent(this._TextArea_39_4.context, [], compView_39);
        compView_39.create(this._TextArea_39_4.context, [], null);
        this._text_40 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_34_0.reset([this._Label_36_3.context]);
        this._Item_34_4.context.contentLabel = this._query_Label_34_0.first;
        compView_34.create(this._Item_34_4.context, [
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
        this._appEl_42 = new import3.AppElement(42, 11, this, this._el_42);
        var compView_42 = import15.viewFactory_Item0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Item_42_4 = new import15.Wrapper_Item(this.parentInjector.get(import29.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_42), this.renderer);
        this._ItemContent_42_5 = new import15.Wrapper_ItemContent();
        this._query_Label_42_0 = new import16.QueryList();
        this._query_Button_42_1 = new import16.QueryList();
        this._query_Icon_42_2 = new import16.QueryList();
        this._appEl_42.initComponent(this._Item_42_4.context, [], compView_42);
        this._text_43 = this.renderer.createText(null, '\n      ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_44, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_44, 'floating', '');
        this._Label_44_3 = new import17.Wrapper_Label(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_44), this.renderer, '', null, null, null);
        this._text_45 = this.renderer.createText(this._el_44, 'Floating Label', null);
        this._text_46 = this.renderer.createText(null, '\n      ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-textarea', null);
        this._appEl_47 = new import3.AppElement(47, 42, this, this._el_47);
        var compView_47 = import18.viewFactory_TextArea0(this.viewUtils, this.injector(47), this._appEl_47);
        this._TextArea_47_4 = new import18.Wrapper_TextArea(this.parentInjector.get(import19.Config), this.parentInjector.get(import29.Form), this._Item_42_4.context, this.parentInjector.get(import22.App), this.parentInjector.get(import30.Platform), new import20.ElementRef(this._el_47), this.renderer, this._Content_9_4.context, this.parentInjector.get(import23.NavController, null), this.parentInjector.get(import31.NgControl, null));
        this._appEl_47.initComponent(this._TextArea_47_4.context, [], compView_47);
        compView_47.create(this._TextArea_47_4.context, [], null);
        this._text_48 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_42_0.reset([this._Label_44_3.context]);
        this._Item_42_4.context.contentLabel = this._query_Label_42_0.first;
        compView_42.create(this._Item_42_4.context, [
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
        this._text_49 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_50 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_50
            ]),
            []
        ], null);
        this._text_51 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
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
            this._text_50,
            this._text_51
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import33.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import24.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import34.Label) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Label_15_3.context;
        }
        if (((token === import35.TextArea) && (18 === requestNodeIndex))) {
            return this._TextArea_18_4.context;
        }
        if (((token === import36.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_13_4.context;
        }
        if (((token === import36.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_13_5.context;
        }
        if (((token === import34.Label) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Label_23_3.context;
        }
        if (((token === import35.TextArea) && (26 === requestNodeIndex))) {
            return this._TextArea_26_4.context;
        }
        if (((token === import36.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_21_4.context;
        }
        if (((token === import36.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_21_5.context;
        }
        if (((token === import35.TextArea) && (31 === requestNodeIndex))) {
            return this._TextArea_31_4.context;
        }
        if (((token === import36.Item) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Item_29_4.context;
        }
        if (((token === import36.ItemContent) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ItemContent_29_5.context;
        }
        if (((token === import34.Label) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Label_36_3.context;
        }
        if (((token === import35.TextArea) && (39 === requestNodeIndex))) {
            return this._TextArea_39_4.context;
        }
        if (((token === import36.Item) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Item_34_4.context;
        }
        if (((token === import36.ItemContent) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._ItemContent_34_5.context;
        }
        if (((token === import34.Label) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Label_44_3.context;
        }
        if (((token === import35.TextArea) && (47 === requestNodeIndex))) {
            return this._TextArea_47_4.context;
        }
        if (((token === import36.Item) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Item_42_4.context;
        }
        if (((token === import36.ItemContent) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemContent_42_5.context;
        }
        if (((token === import37.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._List_11_3.context;
        }
        if (((token === import38.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
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
        var currVal_3 = 'primary';
        this._Label_15_3.check_color(currVal_3, throwOnChange, false);
        this._Label_15_3.detectChangesInternal(this, this._el_15, throwOnChange);
        var currVal_4 = 'Textarea';
        this._TextArea_18_4.check_placeholder(currVal_4, throwOnChange, false);
        this._TextArea_18_4.detectChangesInternal(this, this._el_18, throwOnChange);
        if (this._Item_21_4.detectChangesInternal(this, this._el_21, throwOnChange)) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        this._ItemContent_21_5.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_5 = 'primary';
        this._Label_23_3.check_color(currVal_5, throwOnChange, false);
        this._Label_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_6 = 'Textarea';
        this._TextArea_26_4.check_placeholder(currVal_6, throwOnChange, false);
        this._TextArea_26_4.detectChangesInternal(this, this._el_26, throwOnChange);
        if (this._Item_29_4.detectChangesInternal(this, this._el_29, throwOnChange)) {
            this._appEl_29.componentView.markAsCheckOnce();
        }
        this._ItemContent_29_5.detectChangesInternal(this, this._el_29, throwOnChange);
        var currVal_7 = 'Textarea with no label';
        this._TextArea_31_4.check_placeholder(currVal_7, throwOnChange, false);
        this._TextArea_31_4.detectChangesInternal(this, this._el_31, throwOnChange);
        if (this._Item_34_4.detectChangesInternal(this, this._el_34, throwOnChange)) {
            this._appEl_34.componentView.markAsCheckOnce();
        }
        this._ItemContent_34_5.detectChangesInternal(this, this._el_34, throwOnChange);
        var currVal_8 = 'primary';
        this._Label_36_3.check_color(currVal_8, throwOnChange, false);
        this._Label_36_3.detectChangesInternal(this, this._el_36, throwOnChange);
        var currVal_9 = 'Textarea';
        this._TextArea_39_4.check_placeholder(currVal_9, throwOnChange, false);
        this._TextArea_39_4.detectChangesInternal(this, this._el_39, throwOnChange);
        if (this._Item_42_4.detectChangesInternal(this, this._el_42, throwOnChange)) {
            this._appEl_42.componentView.markAsCheckOnce();
        }
        this._ItemContent_42_5.detectChangesInternal(this, this._el_42, throwOnChange);
        var currVal_10 = 'primary';
        this._Label_44_3.check_color(currVal_10, throwOnChange, false);
        this._Label_44_3.detectChangesInternal(this, this._el_44, throwOnChange);
        this._TextArea_47_4.detectChangesInternal(this, this._el_47, throwOnChange);
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
            if (this._query_Button_34_1.dirty) {
                this._query_Button_34_1.reset([]);
                this._Item_34_4.context._buttons = this._query_Button_34_1;
                this._query_Button_34_1.notifyOnChanges();
            }
            if (this._query_Icon_34_2.dirty) {
                this._query_Icon_34_2.reset([]);
                this._Item_34_4.context._icons = this._query_Icon_34_2;
                this._query_Icon_34_2.notifyOnChanges();
            }
            if (this._query_Button_42_1.dirty) {
                this._query_Button_42_1.reset([]);
                this._Item_42_4.context._buttons = this._query_Button_42_1;
                this._query_Button_42_1.notifyOnChanges();
            }
            if (this._query_Icon_42_2.dirty) {
                this._query_Icon_42_2.reset([]);
                this._Item_42_4.context._icons = this._query_Icon_42_2;
                this._query_Icon_42_2.notifyOnChanges();
            }
            this._TextArea_18_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            this._TextArea_26_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.context.ngAfterContentInit();
            }
            this._TextArea_31_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_29_4.context.ngAfterContentInit();
            }
            this._TextArea_39_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_34_4.context.ngAfterContentInit();
            }
            this._TextArea_47_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_42_4.context.ngAfterContentInit();
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
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._TextArea_18_4.context.ngOnDestroy();
        this._TextArea_26_4.context.ngOnDestroy();
        this._TextArea_31_4.context.ngOnDestroy();
        this._TextArea_39_4.context.ngOnDestroy();
        this._TextArea_47_4.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
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
        var compView_0 = import39.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import39.Wrapper_Nav(this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import40.NavControllerBase, null), this.parentInjector.get(import22.App), this.parentInjector.get(import19.Config), this.parentInjector.get(import25.Keyboard), new import20.ElementRef(this._el_0), this.parentInjector.get(import26.NgZone), this.renderer, this.parentInjector.get(import41.ComponentFactoryResolver), this.parentInjector.get(import28.GestureController), this.parentInjector.get(import42.TransitionController), this.parentInjector.get(import43.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import44.Nav) && (0 === requestNodeIndex))) {
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
