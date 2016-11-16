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
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/select/select.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/option/option.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/navbar/navbar';
import * as import37 from 'ionic-angular/components/item/item';
import * as import38 from 'ionic-angular/components/list/list-header';
import * as import39 from 'ionic-angular/components/label/label';
import * as import40 from 'ionic-angular/components/option/option';
import * as import41 from 'ionic-angular/components/select/select';
import * as import42 from '@angular/forms/src/directives/control_value_accessor';
import * as import43 from '@angular/forms/src/directives/ng_model';
import * as import44 from '@angular/forms/src/directives/ng_control';
import * as import45 from '@angular/forms/src/directives/ng_control_status';
import * as import46 from 'ionic-angular/components/list/list';
import * as import47 from 'ionic-angular/components/button/button';
import * as import48 from 'ionic-angular/components/content/content';
import * as import49 from 'ionic-angular/navigation/nav-params';
import * as import50 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import51 from 'ionic-angular/navigation/nav-controller-base';
import * as import52 from '@angular/core/src/linker/component_factory_resolver';
import * as import53 from 'ionic-angular/transitions/transition-controller';
import * as import54 from 'ionic-angular/navigation/deep-linker';
import * as import55 from 'ionic-angular/components/nav/nav';
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
export var Wrapper_PushPage = (function () {
    function Wrapper_PushPage(p0) {
        this.changed = false;
        this.context = new import0.PushPage(p0);
    }
    Wrapper_PushPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_PushPage;
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
        this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage(this.parentInjector.get(import8.NavController));
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
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Nav Params', null);
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
        var compView_9 = import14.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_11, 'no-margin', '');
        this._List_11_3 = new import15.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import16.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import16.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import17.Wrapper_ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import18.QueryList();
        this._query_Button_13_1 = new import18.QueryList();
        this._query_Icon_13_2 = new import18.QueryList();
        this._appEl_13.initComponent(this._Item_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Enter Parameters to Pass to the Next Page\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4.context, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'item item-block');
        this._appEl_16 = new import3.AppElement(16, 11, this, this._el_16);
        var compView_16 = import16.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import16.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import16.Wrapper_ItemContent();
        this._query_Label_16_0 = new import18.QueryList();
        this._query_Button_16_1 = new import18.QueryList();
        this._query_Icon_16_2 = new import18.QueryList();
        this._appEl_16.initComponent(this._Item_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_18_3 = new import19.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_18), this.renderer, null, null, null, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Parameters', null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-select', null);
        this.renderer.setElementAttribute(this._el_21, 'multiple', 'true');
        this._appEl_21 = new import3.AppElement(21, 16, this, this._el_21);
        var compView_21 = import20.viewFactory_Select0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Select_21_4 = new import20.Wrapper_Select(this.parentInjector.get(import28.App), this.parentInjector.get(import34.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_21), this.renderer, this._Item_16_4.context, this.parentInjector.get(import8.NavController, null));
        this._NG_VALUE_ACCESSOR_21_5 = [this._Select_21_4.context];
        this._NgModel_21_6 = new import21.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_21_5);
        this._NgControl_21_7 = this._NgModel_21_6.context;
        this._NgControlStatus_21_8 = new import22.Wrapper_NgControlStatus(this._NgControl_21_7);
        this._query_Option_21_0 = new import18.QueryList();
        this._appEl_21.initComponent(this._Select_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_23, 'value', 'Bangkok');
        this._Option_23_3 = new import23.Wrapper_Option(new import26.ElementRef(this._el_23));
        this._text_24 = this.renderer.createText(this._el_23, 'Bangkok', null);
        this._text_25 = this.renderer.createText(null, '\n        ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_26, 'value', 'Nonthaburi');
        this._Option_26_3 = new import23.Wrapper_Option(new import26.ElementRef(this._el_26));
        this._text_27 = this.renderer.createText(this._el_26, 'Nonthaburi', null);
        this._text_28 = this.renderer.createText(null, '\n        ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_29, 'value', 'Nakhon Ratchasima');
        this._Option_29_3 = new import23.Wrapper_Option(new import26.ElementRef(this._el_29));
        this._text_30 = this.renderer.createText(this._el_29, 'Nakhon Ratchasima', null);
        this._text_31 = this.renderer.createText(null, '\n        ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-option', null);
        this.renderer.setElementAttribute(this._el_32, 'value', 'Chiang Mai');
        this._Option_32_3 = new import23.Wrapper_Option(new import26.ElementRef(this._el_32));
        this._text_33 = this.renderer.createText(this._el_32, 'Chiang Mai', null);
        this._text_34 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Select_21_4.context, [], null);
        this._text_35 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_16_0.reset([this._Label_18_3.context]);
        this._Item_16_4.context.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4.context, [
            [],
            [].concat([this._el_18]),
            [].concat([
                this._text_17,
                this._text_20,
                this._text_35
            ]),
            [].concat([this._el_21]),
            []
        ], null);
        this._text_36 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_37 = this.renderer.createText(null, '\n\n  ', null);
        this._el_38 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_38, 'padding', '');
        this._text_39 = this.renderer.createText(this._el_38, '\n    ', null);
        this._el_40 = this.renderer.createElement(this._el_38, 'button', null);
        this.renderer.setElementAttribute(this._el_40, 'block', '');
        this.renderer.setElementAttribute(this._el_40, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_40, 'ion-button', '');
        this._appEl_40 = new import3.AppElement(40, 38, this, this._el_40);
        var compView_40 = import24.viewFactory_Button0(this.viewUtils, this.injector(40), this._appEl_40);
        this._Button_40_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_40), this.renderer);
        this._appEl_40.initComponent(this._Button_40_4.context, [], compView_40);
        this._text_41 = this.renderer.createText(null, 'Navigate with Parameters', null);
        compView_40.create(this._Button_40_4.context, [[].concat([this._text_41])], null);
        this._text_42 = this.renderer.createText(this._el_38, '\n  ', null);
        this._text_43 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_37,
                this._el_38,
                this._text_43
            ]),
            []
        ], null);
        this._text_44 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_21, 'keyup.space', this.eventHandler(this._handle_keyup_space_21_2.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        var subscription_0 = this._NgModel_21_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_21_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_40, 'click', this.eventHandler(this._handle_click_40_0.bind(this)));
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
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._text_44
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import36.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import37.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4.context;
        }
        if (((token === import38.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5.context;
        }
        if (((token === import39.Label) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Label_18_3.context;
        }
        if (((token === import40.Option) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Option_23_3.context;
        }
        if (((token === import40.Option) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Option_26_3.context;
        }
        if (((token === import40.Option) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Option_29_3.context;
        }
        if (((token === import40.Option) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Option_32_3.context;
        }
        if (((token === import41.Select) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Select_21_4.context;
        }
        if (((token === import42.NG_VALUE_ACCESSOR) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NG_VALUE_ACCESSOR_21_5;
        }
        if (((token === import43.NgModel) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgModel_21_6.context;
        }
        if (((token === import44.NgControl) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControl_21_7;
        }
        if (((token === import45.NgControlStatus) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControlStatus_21_8.context;
        }
        if (((token === import37.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item_16_4.context;
        }
        if (((token === import37.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemContent_16_5.context;
        }
        if (((token === import46.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._List_11_3.context;
        }
        if (((token === import47.Button) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._Button_40_4.context;
        }
        if (((token === import48.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
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
        var currVal_6 = 'true';
        this._Select_21_4.check_multiple(currVal_6, throwOnChange, false);
        this._Select_21_4.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_8 = this.context.myParam;
        this._NgModel_21_6.check_model(currVal_8, throwOnChange, false);
        this._NgModel_21_6.detectChangesInternal(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_8.detectChangesInternal(this, this._el_21, throwOnChange);
        var currVal_15 = 'Bangkok';
        this._Option_23_3.check_value(currVal_15, throwOnChange, false);
        this._Option_23_3.detectChangesInternal(this, this._el_23, throwOnChange);
        var currVal_16 = 'Nonthaburi';
        this._Option_26_3.check_value(currVal_16, throwOnChange, false);
        this._Option_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        var currVal_17 = 'Nakhon Ratchasima';
        this._Option_29_3.check_value(currVal_17, throwOnChange, false);
        this._Option_29_3.detectChangesInternal(this, this._el_29, throwOnChange);
        var currVal_18 = 'Chiang Mai';
        this._Option_32_3.check_value(currVal_18, throwOnChange, false);
        this._Option_32_3.detectChangesInternal(this, this._el_32, throwOnChange);
        var currVal_20 = '';
        this._Button_40_4.check_block(currVal_20, throwOnChange, false);
        var currVal_21 = 'secondary';
        this._Button_40_4.check_color(currVal_21, throwOnChange, false);
        if (this._Button_40_4.detectChangesInternal(this, this._el_40, throwOnChange)) {
            this._appEl_40.componentView.markAsCheckOnce();
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
            if (this._query_Option_21_0.dirty) {
                this._query_Option_21_0.reset([
                    this._Option_23_3.context,
                    this._Option_26_3.context,
                    this._Option_29_3.context,
                    this._Option_32_3.context
                ]);
                this._Select_21_4.context.options = this._query_Option_21_0;
                this._query_Option_21_0.notifyOnChanges();
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
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_21_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_40_4.context.ngAfterContentInit();
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
        var currVal_7 = this._Select_21_4.context._disabled;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_21, 'select-disabled', currVal_7);
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
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Select_21_4.context.ngOnDestroy();
        this._NgModel_21_6.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ngModelChange_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.myParam = $event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_21_1 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_21_4.context._click($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_keyup_space_21_2 = function ($event) {
        this._appEl_21.componentView.markPathToRootAsCheckOnce();
        var pd_0 = (this._Select_21_4.context._keyup() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_40_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.pushParams() !== false);
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
var renderType_PushPage_Host = null;
var _View_PushPage_Host0 = (function (_super) {
    __extends(_View_PushPage_Host0, _super);
    function _View_PushPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PushPage_Host0, renderType_PushPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PushPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PushPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PushPage_0_4 = new Wrapper_PushPage(this.parentInjector.get(import49.NavParams));
        this._appEl_0.initComponent(this._PushPage_0_4.context, [], compView_0);
        compView_0.create(this._PushPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PushPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PushPage) && (0 === requestNodeIndex))) {
            return this._PushPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_PushPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PushPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PushPage_Host0;
}(import1.AppView));
function viewFactory_PushPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PushPage_Host === null)) {
        (renderType_PushPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_PushPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var PushPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_PushPage_Host0, import0.PushPage);
var styles_PushPage = [];
var renderType_PushPage = null;
var _View_PushPage0 = (function (_super) {
    __extends(_View_PushPage0, _super);
    function _View_PushPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PushPage0, renderType_PushPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PushPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Nav Params', null);
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
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import14.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'div', null);
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'h5', null);
        this._text_14 = this.renderer.createText(this._el_13, 'Parameters passed:', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'pre', null);
        this.renderer.setElementAttribute(this._el_16, 'style', 'background-color: #f8f8f8');
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_11, '\n\n  ', null);
        this._text_19 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_19
            ]),
            []
        ], null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
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
            this._text_18,
            this._text_19,
            this._text_20
        ], [], []);
        return null;
    };
    _View_PushPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import36.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import48.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_PushPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
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
        var currVal_3 = import4.interpolate(1, 'selections: [\n  ', this.context.myParam, '\n]');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_17, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_PushPage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_PushPage0;
}(import1.AppView));
export function viewFactory_PushPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PushPage === null)) {
        (renderType_PushPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_PushPage, {}));
    }
    return new _View_PushPage0(viewUtils, parentInjector, declarationEl);
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
        var compView_0 = import50.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import50.Wrapper_Nav(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import51.NavControllerBase, null), this.parentInjector.get(import28.App), this.parentInjector.get(import25.Config), this.parentInjector.get(import30.Keyboard), new import26.ElementRef(this._el_0), this.parentInjector.get(import31.NgZone), this.renderer, this.parentInjector.get(import52.ComponentFactoryResolver), this.parentInjector.get(import33.GestureController), this.parentInjector.get(import53.TransitionController), this.parentInjector.get(import54.DeepLinker, null));
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
