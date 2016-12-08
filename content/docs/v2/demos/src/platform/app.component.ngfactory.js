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
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from 'ionic-angular/components/toolbar/toolbar';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from 'ionic-angular/components/grid/grid';
import * as import31 from '@angular/common/src/directives/ng_class';
import * as import32 from 'ionic-angular/components/content/content';
import * as import33 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import34 from 'ionic-angular/navigation/nav-controller-base';
import * as import35 from '@angular/core/src/linker/component_factory_resolver';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from 'ionic-angular/transitions/transition-controller';
import * as import38 from 'ionic-angular/navigation/deep-linker';
import * as import39 from 'ionic-angular/components/nav/nav';
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
        this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage(this.parentInjector.get(import8.Platform));
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
var styles_ApiDemoPage = ['.platform-demo[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(odd) {\n    flex: 0 0 62%;\n    max-width: 62%;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(even) {\n    flex: 0 0 38%;\n    max-width: 38%;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    background: #f8f8f8;\n    font-size: 13px;\n    min-height: 40px;\n    padding: 4px;\n    margin-top: 0;\n    border: 1px solid #ddd;\n    border-radius: 2px;\n    white-space: pre-wrap;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   .platform-true[_ngcontent-%COMP%] {\n    background: #dff2bf;\n    border-color: #4f8a10;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   .platform-false[_ngcontent-%COMP%] {\n    background: #ffbaba;\n    border-color: #d8000c;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   .platform-normal[_ngcontent-%COMP%] {\n    background: #bde5f8;\n    border-color: #00529b;\n  }\n\n  .platform-demo[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n    color: #444;\n    font-style: italic;\n  }'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import22.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Platform', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'platform-demo');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import14.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import25.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'note');
        this.renderer.setElementAttribute(this._el_11, 'margin', '');
        this._text_12 = this.renderer.createText(this._el_11, 'Change devices to see the platform values change.', null);
        this._text_13 = this.renderer.createText(null, '\n\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'ion-grid', null);
        this._Grid_14_3 = new import15.Wrapper_Grid();
        this._text_15 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'ion-row', null);
        this._Row_16_3 = new import15.Wrapper_Row();
        this._text_17 = this.renderer.createText(this._el_16, '\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-col', null);
        this._Col_18_3 = new import15.Wrapper_Col();
        this._el_19 = this.renderer.createElement(this._el_18, 'b', null);
        this._text_20 = this.renderer.createText(this._el_19, 'Name', null);
        this._text_21 = this.renderer.createText(this._el_16, '\n      ', null);
        this._el_22 = this.renderer.createElement(this._el_16, 'ion-col', null);
        this._Col_22_3 = new import15.Wrapper_Col();
        this._el_23 = this.renderer.createElement(this._el_22, 'b', null);
        this._text_24 = this.renderer.createText(this._el_23, 'Value', null);
        this._text_25 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_27 = this.renderer.createElement(this._el_14, 'ion-row', null);
        this._Row_27_3 = new import15.Wrapper_Row();
        this._text_28 = this.renderer.createText(this._el_27, '\n      ', null);
        this._el_29 = this.renderer.createElement(this._el_27, 'ion-col', null);
        this._Col_29_3 = new import15.Wrapper_Col();
        this._text_30 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_29, 'pre', null);
        this._text_32 = this.renderer.createText(this._el_31, 'platform.is(\'ios\')', null);
        this._text_33 = this.renderer.createText(this._el_29, '\n      ', null);
        this._text_34 = this.renderer.createText(this._el_27, '\n      ', null);
        this._el_35 = this.renderer.createElement(this._el_27, 'ion-col', null);
        this._Col_35_3 = new import15.Wrapper_Col();
        this._text_36 = this.renderer.createText(this._el_35, '\n        ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'pre', null);
        this._NgClass_37_3 = new import16.Wrapper_NgClass(this.parentInjector.get(import26.IterableDiffers), this.parentInjector.get(import27.KeyValueDiffers), new import18.ElementRef(this._el_37), this.renderer);
        this._text_38 = this.renderer.createText(this._el_37, '', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n      ', null);
        this._text_40 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_41 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_42 = this.renderer.createElement(this._el_14, 'ion-row', null);
        this._Row_42_3 = new import15.Wrapper_Row();
        this._text_43 = this.renderer.createText(this._el_42, '\n      ', null);
        this._el_44 = this.renderer.createElement(this._el_42, 'ion-col', null);
        this._Col_44_3 = new import15.Wrapper_Col();
        this._text_45 = this.renderer.createText(this._el_44, '\n        ', null);
        this._el_46 = this.renderer.createElement(this._el_44, 'pre', null);
        this._text_47 = this.renderer.createText(this._el_46, 'platform.is(\'android\')', null);
        this._text_48 = this.renderer.createText(this._el_44, '\n      ', null);
        this._text_49 = this.renderer.createText(this._el_42, '\n      ', null);
        this._el_50 = this.renderer.createElement(this._el_42, 'ion-col', null);
        this._Col_50_3 = new import15.Wrapper_Col();
        this._text_51 = this.renderer.createText(this._el_50, '\n        ', null);
        this._el_52 = this.renderer.createElement(this._el_50, 'pre', null);
        this._NgClass_52_3 = new import16.Wrapper_NgClass(this.parentInjector.get(import26.IterableDiffers), this.parentInjector.get(import27.KeyValueDiffers), new import18.ElementRef(this._el_52), this.renderer);
        this._text_53 = this.renderer.createText(this._el_52, '', null);
        this._text_54 = this.renderer.createText(this._el_50, '\n      ', null);
        this._text_55 = this.renderer.createText(this._el_42, '\n    ', null);
        this._text_56 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_57 = this.renderer.createElement(this._el_14, 'ion-row', null);
        this._Row_57_3 = new import15.Wrapper_Row();
        this._text_58 = this.renderer.createText(this._el_57, '\n      ', null);
        this._el_59 = this.renderer.createElement(this._el_57, 'ion-col', null);
        this._Col_59_3 = new import15.Wrapper_Col();
        this._text_60 = this.renderer.createText(this._el_59, '\n        ', null);
        this._el_61 = this.renderer.createElement(this._el_59, 'pre', null);
        this._text_62 = this.renderer.createText(this._el_61, 'platform.is(\'windows\')', null);
        this._text_63 = this.renderer.createText(this._el_59, '\n      ', null);
        this._text_64 = this.renderer.createText(this._el_57, '\n      ', null);
        this._el_65 = this.renderer.createElement(this._el_57, 'ion-col', null);
        this._Col_65_3 = new import15.Wrapper_Col();
        this._text_66 = this.renderer.createText(this._el_65, '\n        ', null);
        this._el_67 = this.renderer.createElement(this._el_65, 'pre', null);
        this._NgClass_67_3 = new import16.Wrapper_NgClass(this.parentInjector.get(import26.IterableDiffers), this.parentInjector.get(import27.KeyValueDiffers), new import18.ElementRef(this._el_67), this.renderer);
        this._text_68 = this.renderer.createText(this._el_67, '', null);
        this._text_69 = this.renderer.createText(this._el_65, '\n      ', null);
        this._text_70 = this.renderer.createText(this._el_57, '\n    ', null);
        this._text_71 = this.renderer.createText(this._el_14, '\n  ', null);
        this._text_72 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._el_14,
                this._text_72
            ]),
            []
        ], null);
        this._text_73 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_74 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
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
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
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
            this._text_70,
            this._text_71,
            this._text_72,
            this._text_73,
            this._text_74
        ], [], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import22.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import30.Col) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Col_18_3.context;
        }
        if (((token === import30.Col) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Col_22_3.context;
        }
        if (((token === import30.Row) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Row_16_3.context;
        }
        if (((token === import30.Col) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Col_29_3.context;
        }
        if (((token === import31.NgClass) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._NgClass_37_3.context;
        }
        if (((token === import30.Col) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Col_35_3.context;
        }
        if (((token === import30.Row) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Row_27_3.context;
        }
        if (((token === import30.Col) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Col_44_3.context;
        }
        if (((token === import31.NgClass) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._NgClass_52_3.context;
        }
        if (((token === import30.Col) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Col_50_3.context;
        }
        if (((token === import30.Row) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Row_42_3.context;
        }
        if (((token === import30.Col) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 63)))) {
            return this._Col_59_3.context;
        }
        if (((token === import31.NgClass) && ((67 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._NgClass_67_3.context;
        }
        if (((token === import30.Col) && ((65 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Col_65_3.context;
        }
        if (((token === import30.Row) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._Row_57_3.context;
        }
        if (((token === import30.Grid) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Grid_14_3.context;
        }
        if (((token === import32.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
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
        this._Grid_14_3.detectChangesInternal(this, this._el_14, throwOnChange);
        this._Row_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Col_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        this._Col_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        this._Row_27_3.detectChangesInternal(this, this._el_27, throwOnChange);
        this._Col_29_3.detectChangesInternal(this, this._el_29, throwOnChange);
        this._Col_35_3.detectChangesInternal(this, this._el_35, throwOnChange);
        var currVal_3 = (this.context.isIos ? 'platform-true' : 'platform-false');
        this._NgClass_37_3.check_ngClass(currVal_3, throwOnChange, false);
        this._NgClass_37_3.detectChangesInternal(this, this._el_37, throwOnChange);
        this._Row_42_3.detectChangesInternal(this, this._el_42, throwOnChange);
        this._Col_44_3.detectChangesInternal(this, this._el_44, throwOnChange);
        this._Col_50_3.detectChangesInternal(this, this._el_50, throwOnChange);
        var currVal_5 = (this.context.isAndroid ? 'platform-true' : 'platform-false');
        this._NgClass_52_3.check_ngClass(currVal_5, throwOnChange, false);
        this._NgClass_52_3.detectChangesInternal(this, this._el_52, throwOnChange);
        this._Row_57_3.detectChangesInternal(this, this._el_57, throwOnChange);
        this._Col_59_3.detectChangesInternal(this, this._el_59, throwOnChange);
        this._Col_65_3.detectChangesInternal(this, this._el_65, throwOnChange);
        var currVal_7 = (this.context.isWindows ? 'platform-true' : 'platform-false');
        this._NgClass_67_3.check_ngClass(currVal_7, throwOnChange, false);
        this._NgClass_67_3.detectChangesInternal(this, this._el_67, throwOnChange);
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
        var currVal_4 = import4.interpolate(1, '', this.context.isIos, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_38, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = import4.interpolate(1, '', this.context.isAndroid, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_53, currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_8 = import4.interpolate(1, '', this.context.isWindows, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_68, currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_ApiDemoPage, {}));
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
