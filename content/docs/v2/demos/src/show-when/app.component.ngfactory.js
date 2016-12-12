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
import * as import14 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/show-hide-when/show-hide-when.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from 'ionic-angular/components/toolbar/toolbar';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from 'ionic-angular/platform/platform';
import * as import27 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from 'ionic-angular/components/icon/icon';
import * as import30 from 'ionic-angular/components/show-hide-when/show-hide-when';
import * as import31 from 'ionic-angular/components/grid/grid';
import * as import32 from 'ionic-angular/components/content/content';
import * as import33 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import34 from 'ionic-angular/navigation/nav-controller-base';
import * as import35 from '@angular/core/src/linker/component_factory_resolver';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from 'ionic-angular/transitions/transition-controller';
import * as import38 from 'ionic-angular/navigation/deep-linker';
import * as import39 from 'ionic-angular/components/nav/nav';
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
var styles_ApiDemoPage = ['.show-when-demo[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n    border: 1px solid #ddd;\n    margin: 1%;\n    max-width: 48%;\n    flex: 0 0 48%;\n    min-height: 120px;\n  }\n\n  .show-when-demo[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n  }\n\n  .show-when-demo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import22.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'ShowWhen', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'show-when-demo');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import25.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'h5', null);
        this.renderer.setElementAttribute(this._el_11, 'margin', '');
        this._text_12 = this.renderer.createText(this._el_11, 'Show Icon Per Platform', null);
        this._text_13 = this.renderer.createText(null, '\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_14, 'margin', '');
        this._text_15 = this.renderer.createText(this._el_14, 'In this example we\'re using the ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'code', null);
        this._text_17 = this.renderer.createText(this._el_16, 'showWhen', null);
        this._text_18 = this.renderer.createText(this._el_14, ' directive to decide whether to show an icon based on the platform.', null);
        this._text_19 = this.renderer.createText(null, '\n\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-grid', null);
        this._Grid_20_3 = new import14.Wrapper_Grid();
        this._text_21 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'ion-row', null);
        this._Row_22_3 = new import14.Wrapper_Row();
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_24, 'text-center', '');
        this._Col_24_3 = new import14.Wrapper_Col();
        this._text_25 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_26, 'name', 'logo-apple');
        this.renderer.setElementAttribute(this._el_26, 'role', 'img');
        this.renderer.setElementAttribute(this._el_26, 'showWhen', 'ios');
        this._Icon_26_3 = new import15.Wrapper_Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_26), this.renderer);
        this._ShowWhen_26_4 = new import16.Wrapper_ShowWhen('ios', this.parentInjector.get(import26.Platform), this.parentInjector.get(import24.NgZone));
        this._text_27 = this.renderer.createText(this._el_24, '\n      ', null);
        this._text_28 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_29 = this.renderer.createElement(this._el_22, 'ion-col', null);
        this._Col_29_3 = new import14.Wrapper_Col();
        this._text_30 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_29, 'code', null);
        this._text_32 = this.renderer.createText(this._el_31, ' <ion-icon name="logo-apple" showWhen="ios"></ion-icon> ', null);
        this._text_33 = this.renderer.createText(this._el_29, '\n      ', null);
        this._text_34 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_35 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_36 = this.renderer.createElement(this._el_20, 'ion-row', null);
        this._Row_36_3 = new import14.Wrapper_Row();
        this._text_37 = this.renderer.createText(this._el_36, '\n      ', null);
        this._el_38 = this.renderer.createElement(this._el_36, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_38, 'text-center', '');
        this._Col_38_3 = new import14.Wrapper_Col();
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = this.renderer.createElement(this._el_38, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_40, 'name', 'logo-android');
        this.renderer.setElementAttribute(this._el_40, 'role', 'img');
        this.renderer.setElementAttribute(this._el_40, 'showWhen', 'android');
        this._Icon_40_3 = new import15.Wrapper_Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_40), this.renderer);
        this._ShowWhen_40_4 = new import16.Wrapper_ShowWhen('android', this.parentInjector.get(import26.Platform), this.parentInjector.get(import24.NgZone));
        this._text_41 = this.renderer.createText(this._el_38, '\n      ', null);
        this._text_42 = this.renderer.createText(this._el_36, '\n      ', null);
        this._el_43 = this.renderer.createElement(this._el_36, 'ion-col', null);
        this._Col_43_3 = new import14.Wrapper_Col();
        this._text_44 = this.renderer.createText(this._el_43, '\n        ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'code', null);
        this._text_46 = this.renderer.createText(this._el_45, ' <ion-icon name="logo-android" showWhen="android"></ion-icon> ', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n      ', null);
        this._text_48 = this.renderer.createText(this._el_36, '\n    ', null);
        this._text_49 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_50 = this.renderer.createElement(this._el_20, 'ion-row', null);
        this._Row_50_3 = new import14.Wrapper_Row();
        this._text_51 = this.renderer.createText(this._el_50, '\n      ', null);
        this._el_52 = this.renderer.createElement(this._el_50, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_52, 'text-center', '');
        this._Col_52_3 = new import14.Wrapper_Col();
        this._text_53 = this.renderer.createText(this._el_52, '\n        ', null);
        this._el_54 = this.renderer.createElement(this._el_52, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_54, 'name', 'logo-windows');
        this.renderer.setElementAttribute(this._el_54, 'role', 'img');
        this.renderer.setElementAttribute(this._el_54, 'showWhen', 'windows');
        this._Icon_54_3 = new import15.Wrapper_Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_54), this.renderer);
        this._ShowWhen_54_4 = new import16.Wrapper_ShowWhen('windows', this.parentInjector.get(import26.Platform), this.parentInjector.get(import24.NgZone));
        this._text_55 = this.renderer.createText(this._el_52, '\n      ', null);
        this._text_56 = this.renderer.createText(this._el_50, '\n      ', null);
        this._el_57 = this.renderer.createElement(this._el_50, 'ion-col', null);
        this._Col_57_3 = new import14.Wrapper_Col();
        this._text_58 = this.renderer.createText(this._el_57, '\n        ', null);
        this._el_59 = this.renderer.createElement(this._el_57, 'code', null);
        this._text_60 = this.renderer.createText(this._el_59, ' <ion-icon name="logo-windows" showWhen="windows"></ion-icon> ', null);
        this._text_61 = this.renderer.createText(this._el_57, '\n      ', null);
        this._text_62 = this.renderer.createText(this._el_50, '\n    ', null);
        this._text_63 = this.renderer.createText(this._el_20, '\n  ', null);
        this._text_64 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._el_14,
                this._text_19,
                this._el_20,
                this._text_64
            ]),
            []
        ], null);
        this._text_65 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_66 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
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
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import28.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import22.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import29.Icon) && (26 === requestNodeIndex))) {
            return this._Icon_26_3.context;
        }
        if (((token === import30.ShowWhen) && (26 === requestNodeIndex))) {
            return this._ShowWhen_26_4.context;
        }
        if (((token === import31.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Col_24_3.context;
        }
        if (((token === import31.Col) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Col_29_3.context;
        }
        if (((token === import31.Row) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Row_22_3.context;
        }
        if (((token === import29.Icon) && (40 === requestNodeIndex))) {
            return this._Icon_40_3.context;
        }
        if (((token === import30.ShowWhen) && (40 === requestNodeIndex))) {
            return this._ShowWhen_40_4.context;
        }
        if (((token === import31.Col) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._Col_38_3.context;
        }
        if (((token === import31.Col) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Col_43_3.context;
        }
        if (((token === import31.Row) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Row_36_3.context;
        }
        if (((token === import29.Icon) && (54 === requestNodeIndex))) {
            return this._Icon_54_3.context;
        }
        if (((token === import30.ShowWhen) && (54 === requestNodeIndex))) {
            return this._ShowWhen_54_4.context;
        }
        if (((token === import31.Col) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Col_52_3.context;
        }
        if (((token === import31.Col) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._Col_57_3.context;
        }
        if (((token === import31.Row) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._Row_50_3.context;
        }
        if (((token === import31.Grid) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Grid_20_3.context;
        }
        if (((token === import32.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
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
        this._Grid_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        this._Row_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        this._Col_24_3.detectChangesInternal(this, this._el_24, throwOnChange);
        var currVal_3 = 'logo-apple';
        this._Icon_26_3.check_name(currVal_3, throwOnChange, false);
        this._Icon_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        this._ShowWhen_26_4.detectChangesInternal(this, this._el_26, throwOnChange);
        this._Col_29_3.detectChangesInternal(this, this._el_29, throwOnChange);
        this._Row_36_3.detectChangesInternal(this, this._el_36, throwOnChange);
        this._Col_38_3.detectChangesInternal(this, this._el_38, throwOnChange);
        var currVal_6 = 'logo-android';
        this._Icon_40_3.check_name(currVal_6, throwOnChange, false);
        this._Icon_40_3.detectChangesInternal(this, this._el_40, throwOnChange);
        this._ShowWhen_40_4.detectChangesInternal(this, this._el_40, throwOnChange);
        this._Col_43_3.detectChangesInternal(this, this._el_43, throwOnChange);
        this._Row_50_3.detectChangesInternal(this, this._el_50, throwOnChange);
        this._Col_52_3.detectChangesInternal(this, this._el_52, throwOnChange);
        var currVal_9 = 'logo-windows';
        this._Icon_54_3.check_name(currVal_9, throwOnChange, false);
        this._Icon_54_3.detectChangesInternal(this, this._el_54, throwOnChange);
        this._ShowWhen_54_4.detectChangesInternal(this, this._el_54, throwOnChange);
        this._Col_57_3.detectChangesInternal(this, this._el_57, throwOnChange);
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
        var currVal_4 = this._Icon_26_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_26, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = !this._ShowWhen_26_4.context.isMatch;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_26, 'hidden-show-when', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_40_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_40, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = !this._ShowWhen_40_4.context.isMatch;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_40, 'hidden-show-when', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_10 = this._Icon_54_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_54, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = !this._ShowWhen_54_4.context.isMatch;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_54, 'hidden-show-when', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_26_3.context.ngOnDestroy();
        this._Icon_40_3.context.ngOnDestroy();
        this._Icon_54_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
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
        var compView_0 = import33.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import33.Wrapper_Nav(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import34.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import17.Config), this.parentInjector.get(import23.Keyboard), new import18.ElementRef(this._el_0), this.parentInjector.get(import24.NgZone), this.renderer, this.parentInjector.get(import35.ComponentFactoryResolver), this.parentInjector.get(import36.GestureController), this.parentInjector.get(import37.TransitionController), this.parentInjector.get(import38.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import39.Nav) && (0 === requestNodeIndex))) {
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
