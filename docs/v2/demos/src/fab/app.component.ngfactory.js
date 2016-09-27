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
import * as import11 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import12 from 'ionic-angular/components/content/content';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from 'ionic-angular/components/fab/fab';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/icon/icon';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import22 from 'ionic-angular/components/navbar/navbar';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from '../../node_modules/ionic-angular/components/fab/fab.ngfactory';
import * as import31 from 'ionic-angular/components/nav/nav';
import * as import32 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import33 from 'ionic-angular/navigation/nav-controller-base';
import * as import34 from '@angular/core/src/linker/component_factory_resolver';
import * as import35 from 'ionic-angular/gestures/gesture-controller';
import * as import36 from 'ionic-angular/transitions/transition-controller';
import * as import37 from 'ionic-angular/navigation/deep-linker';
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
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import20.viewFactory_Toolbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Toolbar_2_4 = new import10.Toolbar(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Toolbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import21.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import11.ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this._Toolbar_2_4, this.parentInjector.get(import22.Navbar, null));
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Floating Action Buttons', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Toolbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'fullscreen', '');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import12.Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import27.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'f', '');
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        this._el_13 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_13, 'f', '');
        this._text_14 = this.renderer.createText(null, '\n  ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_15 = new import2.AppElement(15, 9, this, this._anchor_15);
        this._TemplateRef_15_5 = new import28.TemplateRef_(this._appEl_15, viewFactory_ApiDemoPage1);
        this._NgFor_15_6 = new import13.NgFor(this._appEl_15.vcRef, this._TemplateRef_15_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_17, 'edge', '');
        this.renderer.setElementAttribute(this._el_17, 'right', '');
        this.renderer.setElementAttribute(this._el_17, 'top', '');
        this._appEl_17 = new import2.AppElement(17, 9, this, this._el_17);
        var compView_17 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(17), this._appEl_17);
        this._FabContainer_17_4 = new import14.FabContainer(new import18.ElementRef(this._el_17));
        this._query_FabButton_17_0 = new import15.QueryList();
        this._query_FabList_17_1 = new import15.QueryList();
        this._appEl_17.initComponent(this._FabContainer_17_4, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n    ', null);
        this._el_19 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_19, 'ion-fab', '');
        this.renderer.setElementAttribute(this._el_19, 'mini', '');
        this._appEl_19 = new import2.AppElement(19, 17, this, this._el_19);
        var compView_19 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(19), this._appEl_19);
        this._FabButton_19_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_19), this.renderer);
        this._appEl_19.initComponent(this._FabButton_19_4, [], compView_19);
        this._el_20 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_20, 'name', 'add');
        this.renderer.setElementAttribute(this._el_20, 'role', 'img');
        this._Icon_20_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_20), this.renderer);
        compView_19.create(this._FabButton_19_4, [[].concat([this._el_20])], null);
        this._text_21 = this.renderer.createText(null, '\n    ', null);
        this._el_22 = this.renderer.createElement(null, 'ion-fab-list', null);
        this._FabList_22_3 = new import14.FabList();
        this._query_FabButton_22_0 = new import15.QueryList();
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_24, 'ion-fab', '');
        this._appEl_24 = new import2.AppElement(24, 22, this, this._el_24);
        var compView_24 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(24), this._appEl_24);
        this._FabButton_24_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_24), this.renderer);
        this._appEl_24.initComponent(this._FabButton_24_4, [], compView_24);
        this._el_25 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_25, 'name', 'logo-facebook');
        this.renderer.setElementAttribute(this._el_25, 'role', 'img');
        this._Icon_25_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_25), this.renderer);
        compView_24.create(this._FabButton_24_4, [[].concat([this._el_25])], null);
        this._text_26 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_27 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'ion-fab', '');
        this._appEl_27 = new import2.AppElement(27, 22, this, this._el_27);
        var compView_27 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(27), this._appEl_27);
        this._FabButton_27_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_27), this.renderer);
        this._appEl_27.initComponent(this._FabButton_27_4, [], compView_27);
        this._el_28 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_28, 'name', 'logo-twitter');
        this.renderer.setElementAttribute(this._el_28, 'role', 'img');
        this._Icon_28_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_28), this.renderer);
        compView_27.create(this._FabButton_27_4, [[].concat([this._el_28])], null);
        this._text_29 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_30 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_30, 'ion-fab', '');
        this._appEl_30 = new import2.AppElement(30, 22, this, this._el_30);
        var compView_30 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(30), this._appEl_30);
        this._FabButton_30_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_30), this.renderer);
        this._appEl_30.initComponent(this._FabButton_30_4, [], compView_30);
        this._el_31 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_31, 'name', 'logo-vimeo');
        this.renderer.setElementAttribute(this._el_31, 'role', 'img');
        this._Icon_31_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_31), this.renderer);
        compView_30.create(this._FabButton_30_4, [[].concat([this._el_31])], null);
        this._text_32 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_33 = this.renderer.createElement(this._el_22, 'button', null);
        this.renderer.setElementAttribute(this._el_33, 'ion-fab', '');
        this._appEl_33 = new import2.AppElement(33, 22, this, this._el_33);
        var compView_33 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(33), this._appEl_33);
        this._FabButton_33_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_33), this.renderer);
        this._appEl_33.initComponent(this._FabButton_33_4, [], compView_33);
        this._el_34 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_34, 'name', 'logo-googleplus');
        this.renderer.setElementAttribute(this._el_34, 'role', 'img');
        this._Icon_34_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_34), this.renderer);
        compView_33.create(this._FabButton_33_4, [[].concat([this._el_34])], null);
        this._text_35 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_36 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_17_0.reset([
            this._FabButton_19_4,
            this._FabButton_24_4,
            this._FabButton_27_4,
            this._FabButton_30_4,
            this._FabButton_33_4
        ]);
        this._FabContainer_17_4._mainButton = this._query_FabButton_17_0.first;
        compView_17.create(this._FabContainer_17_4, [[].concat([
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_36
            ])], null);
        this._text_37 = this.renderer.createText(null, '\n\n  ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_38, 'bottom', '');
        this.renderer.setElementAttribute(this._el_38, 'right', '');
        this._appEl_38 = new import2.AppElement(38, 9, this, this._el_38);
        var compView_38 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(38), this._appEl_38);
        this._FabContainer_38_4 = new import14.FabContainer(new import18.ElementRef(this._el_38));
        this._query_FabButton_38_0 = new import15.QueryList();
        this._query_FabList_38_1 = new import15.QueryList();
        this._appEl_38.initComponent(this._FabContainer_38_4, [], compView_38);
        this._text_39 = this.renderer.createText(null, '\n    ', null);
        this._el_40 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_40, 'color', 'light');
        this.renderer.setElementAttribute(this._el_40, 'ion-fab', '');
        this._appEl_40 = new import2.AppElement(40, 38, this, this._el_40);
        var compView_40 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(40), this._appEl_40);
        this._FabButton_40_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_40), this.renderer);
        this._appEl_40.initComponent(this._FabButton_40_4, [], compView_40);
        this._el_41 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_41, 'name', 'arrow-dropleft');
        this.renderer.setElementAttribute(this._el_41, 'role', 'img');
        this._Icon_41_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_41), this.renderer);
        compView_40.create(this._FabButton_40_4, [[].concat([this._el_41])], null);
        this._text_42 = this.renderer.createText(null, '\n    ', null);
        this._el_43 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_43, 'side', 'left');
        this._FabList_43_3 = new import14.FabList();
        this._query_FabButton_43_0 = new import15.QueryList();
        this._text_44 = this.renderer.createText(this._el_43, '\n      ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'button', null);
        this.renderer.setElementAttribute(this._el_45, 'ion-fab', '');
        this._appEl_45 = new import2.AppElement(45, 43, this, this._el_45);
        var compView_45 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(45), this._appEl_45);
        this._FabButton_45_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_45), this.renderer);
        this._appEl_45.initComponent(this._FabButton_45_4, [], compView_45);
        this._el_46 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_46, 'name', 'logo-facebook');
        this.renderer.setElementAttribute(this._el_46, 'role', 'img');
        this._Icon_46_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_46), this.renderer);
        compView_45.create(this._FabButton_45_4, [[].concat([this._el_46])], null);
        this._text_47 = this.renderer.createText(this._el_43, '\n      ', null);
        this._el_48 = this.renderer.createElement(this._el_43, 'button', null);
        this.renderer.setElementAttribute(this._el_48, 'ion-fab', '');
        this._appEl_48 = new import2.AppElement(48, 43, this, this._el_48);
        var compView_48 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(48), this._appEl_48);
        this._FabButton_48_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_48), this.renderer);
        this._appEl_48.initComponent(this._FabButton_48_4, [], compView_48);
        this._el_49 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_49, 'name', 'logo-twitter');
        this.renderer.setElementAttribute(this._el_49, 'role', 'img');
        this._Icon_49_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_49), this.renderer);
        compView_48.create(this._FabButton_48_4, [[].concat([this._el_49])], null);
        this._text_50 = this.renderer.createText(this._el_43, '\n      ', null);
        this._el_51 = this.renderer.createElement(this._el_43, 'button', null);
        this.renderer.setElementAttribute(this._el_51, 'ion-fab', '');
        this._appEl_51 = new import2.AppElement(51, 43, this, this._el_51);
        var compView_51 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(51), this._appEl_51);
        this._FabButton_51_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_51), this.renderer);
        this._appEl_51.initComponent(this._FabButton_51_4, [], compView_51);
        this._el_52 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_52, 'name', 'logo-vimeo');
        this.renderer.setElementAttribute(this._el_52, 'role', 'img');
        this._Icon_52_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_52), this.renderer);
        compView_51.create(this._FabButton_51_4, [[].concat([this._el_52])], null);
        this._text_53 = this.renderer.createText(this._el_43, '\n      ', null);
        this._el_54 = this.renderer.createElement(this._el_43, 'button', null);
        this.renderer.setElementAttribute(this._el_54, 'ion-fab', '');
        this._appEl_54 = new import2.AppElement(54, 43, this, this._el_54);
        var compView_54 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(54), this._appEl_54);
        this._FabButton_54_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_54), this.renderer);
        this._appEl_54.initComponent(this._FabButton_54_4, [], compView_54);
        this._el_55 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_55, 'name', 'logo-googleplus');
        this.renderer.setElementAttribute(this._el_55, 'role', 'img');
        this._Icon_55_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_55), this.renderer);
        compView_54.create(this._FabButton_54_4, [[].concat([this._el_55])], null);
        this._text_56 = this.renderer.createText(this._el_43, '\n    ', null);
        this._text_57 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_38_0.reset([
            this._FabButton_40_4,
            this._FabButton_45_4,
            this._FabButton_48_4,
            this._FabButton_51_4,
            this._FabButton_54_4
        ]);
        this._FabContainer_38_4._mainButton = this._query_FabButton_38_0.first;
        compView_38.create(this._FabContainer_38_4, [[].concat([
                this._text_39,
                this._el_40,
                this._text_42,
                this._el_43,
                this._text_57
            ])], null);
        this._text_58 = this.renderer.createText(null, '\n\n  ', null);
        this._el_59 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_59, 'left', '');
        this.renderer.setElementAttribute(this._el_59, 'top', '');
        this._appEl_59 = new import2.AppElement(59, 9, this, this._el_59);
        var compView_59 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(59), this._appEl_59);
        this._FabContainer_59_4 = new import14.FabContainer(new import18.ElementRef(this._el_59));
        this._query_FabButton_59_0 = new import15.QueryList();
        this._query_FabList_59_1 = new import15.QueryList();
        this._appEl_59.initComponent(this._FabContainer_59_4, [], compView_59);
        this._text_60 = this.renderer.createText(null, '\n    ', null);
        this._el_61 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_61, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_61, 'ion-fab', '');
        this._appEl_61 = new import2.AppElement(61, 59, this, this._el_61);
        var compView_61 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(61), this._appEl_61);
        this._FabButton_61_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_61), this.renderer);
        this._appEl_61.initComponent(this._FabButton_61_4, [], compView_61);
        this._el_62 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_62, 'name', 'arrow-dropright');
        this.renderer.setElementAttribute(this._el_62, 'role', 'img');
        this._Icon_62_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_62), this.renderer);
        compView_61.create(this._FabButton_61_4, [[].concat([this._el_62])], null);
        this._text_63 = this.renderer.createText(null, '\n    ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_64, 'side', 'right');
        this._FabList_64_3 = new import14.FabList();
        this._query_FabButton_64_0 = new import15.QueryList();
        this._text_65 = this.renderer.createText(this._el_64, '\n      ', null);
        this._el_66 = this.renderer.createElement(this._el_64, 'button', null);
        this.renderer.setElementAttribute(this._el_66, 'ion-fab', '');
        this._appEl_66 = new import2.AppElement(66, 64, this, this._el_66);
        var compView_66 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(66), this._appEl_66);
        this._FabButton_66_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_66), this.renderer);
        this._appEl_66.initComponent(this._FabButton_66_4, [], compView_66);
        this._el_67 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_67, 'name', 'logo-facebook');
        this.renderer.setElementAttribute(this._el_67, 'role', 'img');
        this._Icon_67_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_67), this.renderer);
        compView_66.create(this._FabButton_66_4, [[].concat([this._el_67])], null);
        this._text_68 = this.renderer.createText(this._el_64, '\n      ', null);
        this._el_69 = this.renderer.createElement(this._el_64, 'button', null);
        this.renderer.setElementAttribute(this._el_69, 'ion-fab', '');
        this._appEl_69 = new import2.AppElement(69, 64, this, this._el_69);
        var compView_69 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(69), this._appEl_69);
        this._FabButton_69_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_69), this.renderer);
        this._appEl_69.initComponent(this._FabButton_69_4, [], compView_69);
        this._el_70 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_70, 'name', 'logo-twitter');
        this.renderer.setElementAttribute(this._el_70, 'role', 'img');
        this._Icon_70_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_70), this.renderer);
        compView_69.create(this._FabButton_69_4, [[].concat([this._el_70])], null);
        this._text_71 = this.renderer.createText(this._el_64, '\n      ', null);
        this._el_72 = this.renderer.createElement(this._el_64, 'button', null);
        this.renderer.setElementAttribute(this._el_72, 'ion-fab', '');
        this._appEl_72 = new import2.AppElement(72, 64, this, this._el_72);
        var compView_72 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(72), this._appEl_72);
        this._FabButton_72_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_72), this.renderer);
        this._appEl_72.initComponent(this._FabButton_72_4, [], compView_72);
        this._el_73 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_73, 'name', 'logo-vimeo');
        this.renderer.setElementAttribute(this._el_73, 'role', 'img');
        this._Icon_73_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_73), this.renderer);
        compView_72.create(this._FabButton_72_4, [[].concat([this._el_73])], null);
        this._text_74 = this.renderer.createText(this._el_64, '\n      ', null);
        this._el_75 = this.renderer.createElement(this._el_64, 'button', null);
        this.renderer.setElementAttribute(this._el_75, 'ion-fab', '');
        this._appEl_75 = new import2.AppElement(75, 64, this, this._el_75);
        var compView_75 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(75), this._appEl_75);
        this._FabButton_75_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_75), this.renderer);
        this._appEl_75.initComponent(this._FabButton_75_4, [], compView_75);
        this._el_76 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_76, 'name', 'logo-googleplus');
        this.renderer.setElementAttribute(this._el_76, 'role', 'img');
        this._Icon_76_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_76), this.renderer);
        compView_75.create(this._FabButton_75_4, [[].concat([this._el_76])], null);
        this._text_77 = this.renderer.createText(this._el_64, '\n    ', null);
        this._text_78 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_59_0.reset([
            this._FabButton_61_4,
            this._FabButton_66_4,
            this._FabButton_69_4,
            this._FabButton_72_4,
            this._FabButton_75_4
        ]);
        this._FabContainer_59_4._mainButton = this._query_FabButton_59_0.first;
        compView_59.create(this._FabContainer_59_4, [[].concat([
                this._text_60,
                this._el_61,
                this._text_63,
                this._el_64,
                this._text_78
            ])], null);
        this._text_79 = this.renderer.createText(null, '\n\n  ', null);
        this._el_80 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_80, 'bottom', '');
        this.renderer.setElementAttribute(this._el_80, 'left', '');
        this._appEl_80 = new import2.AppElement(80, 9, this, this._el_80);
        var compView_80 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(80), this._appEl_80);
        this._FabContainer_80_4 = new import14.FabContainer(new import18.ElementRef(this._el_80));
        this._query_FabButton_80_0 = new import15.QueryList();
        this._query_FabList_80_1 = new import15.QueryList();
        this._appEl_80.initComponent(this._FabContainer_80_4, [], compView_80);
        this._text_81 = this.renderer.createText(null, '\n    ', null);
        this._el_82 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_82, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_82, 'ion-fab', '');
        this._appEl_82 = new import2.AppElement(82, 80, this, this._el_82);
        var compView_82 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(82), this._appEl_82);
        this._FabButton_82_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_82), this.renderer);
        this._appEl_82.initComponent(this._FabButton_82_4, [], compView_82);
        this._el_83 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_83, 'name', 'arrow-dropup');
        this.renderer.setElementAttribute(this._el_83, 'role', 'img');
        this._Icon_83_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_83), this.renderer);
        compView_82.create(this._FabButton_82_4, [[].concat([this._el_83])], null);
        this._text_84 = this.renderer.createText(null, '\n    ', null);
        this._el_85 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_85, 'side', 'top');
        this._FabList_85_3 = new import14.FabList();
        this._query_FabButton_85_0 = new import15.QueryList();
        this._text_86 = this.renderer.createText(this._el_85, '\n      ', null);
        this._el_87 = this.renderer.createElement(this._el_85, 'button', null);
        this.renderer.setElementAttribute(this._el_87, 'ion-fab', '');
        this._appEl_87 = new import2.AppElement(87, 85, this, this._el_87);
        var compView_87 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(87), this._appEl_87);
        this._FabButton_87_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_87), this.renderer);
        this._appEl_87.initComponent(this._FabButton_87_4, [], compView_87);
        this._el_88 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_88, 'name', 'logo-facebook');
        this.renderer.setElementAttribute(this._el_88, 'role', 'img');
        this._Icon_88_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_88), this.renderer);
        compView_87.create(this._FabButton_87_4, [[].concat([this._el_88])], null);
        this._text_89 = this.renderer.createText(this._el_85, '\n      ', null);
        this._el_90 = this.renderer.createElement(this._el_85, 'button', null);
        this.renderer.setElementAttribute(this._el_90, 'ion-fab', '');
        this._appEl_90 = new import2.AppElement(90, 85, this, this._el_90);
        var compView_90 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(90), this._appEl_90);
        this._FabButton_90_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_90), this.renderer);
        this._appEl_90.initComponent(this._FabButton_90_4, [], compView_90);
        this._el_91 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_91, 'name', 'logo-twitter');
        this.renderer.setElementAttribute(this._el_91, 'role', 'img');
        this._Icon_91_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_91), this.renderer);
        compView_90.create(this._FabButton_90_4, [[].concat([this._el_91])], null);
        this._text_92 = this.renderer.createText(this._el_85, '\n      ', null);
        this._el_93 = this.renderer.createElement(this._el_85, 'button', null);
        this.renderer.setElementAttribute(this._el_93, 'ion-fab', '');
        this._appEl_93 = new import2.AppElement(93, 85, this, this._el_93);
        var compView_93 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(93), this._appEl_93);
        this._FabButton_93_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_93), this.renderer);
        this._appEl_93.initComponent(this._FabButton_93_4, [], compView_93);
        this._el_94 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_94, 'name', 'logo-vimeo');
        this.renderer.setElementAttribute(this._el_94, 'role', 'img');
        this._Icon_94_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_94), this.renderer);
        compView_93.create(this._FabButton_93_4, [[].concat([this._el_94])], null);
        this._text_95 = this.renderer.createText(this._el_85, '\n      ', null);
        this._el_96 = this.renderer.createElement(this._el_85, 'button', null);
        this.renderer.setElementAttribute(this._el_96, 'ion-fab', '');
        this._appEl_96 = new import2.AppElement(96, 85, this, this._el_96);
        var compView_96 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(96), this._appEl_96);
        this._FabButton_96_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_96), this.renderer);
        this._appEl_96.initComponent(this._FabButton_96_4, [], compView_96);
        this._el_97 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_97, 'name', 'logo-googleplus');
        this.renderer.setElementAttribute(this._el_97, 'role', 'img');
        this._Icon_97_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_97), this.renderer);
        compView_96.create(this._FabButton_96_4, [[].concat([this._el_97])], null);
        this._text_98 = this.renderer.createText(this._el_85, '\n    ', null);
        this._text_99 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_80_0.reset([
            this._FabButton_82_4,
            this._FabButton_87_4,
            this._FabButton_90_4,
            this._FabButton_93_4,
            this._FabButton_96_4
        ]);
        this._FabContainer_80_4._mainButton = this._query_FabButton_80_0.first;
        compView_80.create(this._FabContainer_80_4, [[].concat([
                this._text_81,
                this._el_82,
                this._text_84,
                this._el_85,
                this._text_99
            ])], null);
        this._text_100 = this.renderer.createText(null, '\n\n  ', null);
        this._el_101 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_101, 'center', '');
        this.renderer.setElementAttribute(this._el_101, 'middle', '');
        this._appEl_101 = new import2.AppElement(101, 9, this, this._el_101);
        var compView_101 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(101), this._appEl_101);
        this._FabContainer_101_4 = new import14.FabContainer(new import18.ElementRef(this._el_101));
        this._query_FabButton_101_0 = new import15.QueryList();
        this._query_FabList_101_1 = new import15.QueryList();
        this._appEl_101.initComponent(this._FabContainer_101_4, [], compView_101);
        this._text_102 = this.renderer.createText(null, '\n    ', null);
        this._el_103 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_103, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_103, 'ion-fab', '');
        this._appEl_103 = new import2.AppElement(103, 101, this, this._el_103);
        var compView_103 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(103), this._appEl_103);
        this._FabButton_103_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_103), this.renderer);
        this._appEl_103.initComponent(this._FabButton_103_4, [], compView_103);
        this._el_104 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_104, 'name', 'md-share');
        this.renderer.setElementAttribute(this._el_104, 'role', 'img');
        this._Icon_104_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_104), this.renderer);
        compView_103.create(this._FabButton_103_4, [[].concat([this._el_104])], null);
        this._text_105 = this.renderer.createText(null, '\n    ', null);
        this._el_106 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_106, 'side', 'top');
        this._FabList_106_3 = new import14.FabList();
        this._query_FabButton_106_0 = new import15.QueryList();
        this._text_107 = this.renderer.createText(this._el_106, '\n      ', null);
        this._el_108 = this.renderer.createElement(this._el_106, 'button', null);
        this.renderer.setElementAttribute(this._el_108, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_108, 'ion-fab', '');
        this._appEl_108 = new import2.AppElement(108, 106, this, this._el_108);
        var compView_108 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(108), this._appEl_108);
        this._FabButton_108_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_108), this.renderer);
        this._appEl_108.initComponent(this._FabButton_108_4, [], compView_108);
        this._el_109 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_109, 'name', 'logo-vimeo');
        this.renderer.setElementAttribute(this._el_109, 'role', 'img');
        this._Icon_109_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_109), this.renderer);
        compView_108.create(this._FabButton_108_4, [[].concat([this._el_109])], null);
        this._text_110 = this.renderer.createText(this._el_106, '\n    ', null);
        this._text_111 = this.renderer.createText(null, '\n    ', null);
        this._el_112 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_112, 'side', 'bottom');
        this._FabList_112_3 = new import14.FabList();
        this._query_FabButton_112_0 = new import15.QueryList();
        this._text_113 = this.renderer.createText(this._el_112, '\n      ', null);
        this._el_114 = this.renderer.createElement(this._el_112, 'button', null);
        this.renderer.setElementAttribute(this._el_114, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_114, 'ion-fab', '');
        this._appEl_114 = new import2.AppElement(114, 112, this, this._el_114);
        var compView_114 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(114), this._appEl_114);
        this._FabButton_114_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_114), this.renderer);
        this._appEl_114.initComponent(this._FabButton_114_4, [], compView_114);
        this._el_115 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_115, 'name', 'logo-facebook');
        this.renderer.setElementAttribute(this._el_115, 'role', 'img');
        this._Icon_115_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_115), this.renderer);
        compView_114.create(this._FabButton_114_4, [[].concat([this._el_115])], null);
        this._text_116 = this.renderer.createText(this._el_112, '\n    ', null);
        this._text_117 = this.renderer.createText(null, '\n    ', null);
        this._el_118 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_118, 'side', 'left');
        this._FabList_118_3 = new import14.FabList();
        this._query_FabButton_118_0 = new import15.QueryList();
        this._text_119 = this.renderer.createText(this._el_118, '\n      ', null);
        this._el_120 = this.renderer.createElement(this._el_118, 'button', null);
        this.renderer.setElementAttribute(this._el_120, 'color', 'light');
        this.renderer.setElementAttribute(this._el_120, 'ion-fab', '');
        this._appEl_120 = new import2.AppElement(120, 118, this, this._el_120);
        var compView_120 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(120), this._appEl_120);
        this._FabButton_120_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_120), this.renderer);
        this._appEl_120.initComponent(this._FabButton_120_4, [], compView_120);
        this._el_121 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_121, 'name', 'logo-googleplus');
        this.renderer.setElementAttribute(this._el_121, 'role', 'img');
        this._Icon_121_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_121), this.renderer);
        compView_120.create(this._FabButton_120_4, [[].concat([this._el_121])], null);
        this._text_122 = this.renderer.createText(this._el_118, '\n    ', null);
        this._text_123 = this.renderer.createText(null, '\n    ', null);
        this._el_124 = this.renderer.createElement(null, 'ion-fab-list', null);
        this.renderer.setElementAttribute(this._el_124, 'side', 'right');
        this._FabList_124_3 = new import14.FabList();
        this._query_FabButton_124_0 = new import15.QueryList();
        this._text_125 = this.renderer.createText(this._el_124, '\n      ', null);
        this._el_126 = this.renderer.createElement(this._el_124, 'button', null);
        this.renderer.setElementAttribute(this._el_126, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_126, 'ion-fab', '');
        this._appEl_126 = new import2.AppElement(126, 124, this, this._el_126);
        var compView_126 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(126), this._appEl_126);
        this._FabButton_126_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_126), this.renderer);
        this._appEl_126.initComponent(this._FabButton_126_4, [], compView_126);
        this._el_127 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_127, 'name', 'logo-twitter');
        this.renderer.setElementAttribute(this._el_127, 'role', 'img');
        this._Icon_127_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_127), this.renderer);
        compView_126.create(this._FabButton_126_4, [[].concat([this._el_127])], null);
        this._text_128 = this.renderer.createText(this._el_124, '\n    ', null);
        this._text_129 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_101_0.reset([
            this._FabButton_103_4,
            this._FabButton_108_4,
            this._FabButton_114_4,
            this._FabButton_120_4,
            this._FabButton_126_4
        ]);
        this._FabContainer_101_4._mainButton = this._query_FabButton_101_0.first;
        compView_101.create(this._FabContainer_101_4, [[].concat([
                this._text_102,
                this._el_103,
                this._text_105,
                this._el_106,
                this._text_111,
                this._el_112,
                this._text_117,
                this._el_118,
                this._text_123,
                this._el_124,
                this._text_129
            ])], null);
        this._text_130 = this.renderer.createText(null, '\n\n  ', null);
        this._el_131 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_131, 'middle', '');
        this.renderer.setElementAttribute(this._el_131, 'right', '');
        this._appEl_131 = new import2.AppElement(131, 9, this, this._el_131);
        var compView_131 = import30.viewFactory_FabContainer0(this.viewUtils, this.injector(131), this._appEl_131);
        this._FabContainer_131_4 = new import14.FabContainer(new import18.ElementRef(this._el_131));
        this._query_FabButton_131_0 = new import15.QueryList();
        this._query_FabList_131_1 = new import15.QueryList();
        this._appEl_131.initComponent(this._FabContainer_131_4, [], compView_131);
        this._text_132 = this.renderer.createText(null, '\n    ', null);
        this._el_133 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_133, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_133, 'ion-fab', '');
        this._appEl_133 = new import2.AppElement(133, 131, this, this._el_133);
        var compView_133 = import30.viewFactory_FabButton0(this.viewUtils, this.injector(133), this._appEl_133);
        this._FabButton_133_4 = new import14.FabButton(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_133), this.renderer);
        this._appEl_133.initComponent(this._FabButton_133_4, [], compView_133);
        this._el_134 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_134, 'name', 'add');
        this.renderer.setElementAttribute(this._el_134, 'role', 'img');
        this._Icon_134_3 = new import16.Icon(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_134), this.renderer);
        compView_133.create(this._FabButton_133_4, [[].concat([this._el_134])], null);
        this._text_135 = this.renderer.createText(null, '\n  ', null);
        this._query_FabButton_131_0.reset([this._FabButton_133_4]);
        this._FabContainer_131_4._mainButton = this._query_FabButton_131_0.first;
        compView_131.create(this._FabContainer_131_4, [[].concat([
                this._text_132,
                this._el_133,
                this._text_135
            ])], null);
        this._text_136 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [].concat([
                this._el_17,
                this._el_38,
                this._el_59,
                this._el_80,
                this._el_101,
                this._el_131
            ]),
            [].concat([
                this._text_10,
                this._el_11,
                this._text_12,
                this._el_13,
                this._text_14,
                this._appEl_15,
                this._text_16,
                this._text_37,
                this._text_58,
                this._text_79,
                this._text_100,
                this._text_130,
                this._text_136
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_0.bind(this)));
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_48, 'click', this.eventHandler(this._handle_click_48_0.bind(this)));
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_51, 'click', this.eventHandler(this._handle_click_51_0.bind(this)));
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_54, 'click', this.eventHandler(this._handle_click_54_0.bind(this)));
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_66, 'click', this.eventHandler(this._handle_click_66_0.bind(this)));
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_69, 'click', this.eventHandler(this._handle_click_69_0.bind(this)));
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        var disposable_11 = this.renderer.listen(this._el_72, 'click', this.eventHandler(this._handle_click_72_0.bind(this)));
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_75, 'click', this.eventHandler(this._handle_click_75_0.bind(this)));
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        var disposable_13 = this.renderer.listen(this._el_87, 'click', this.eventHandler(this._handle_click_87_0.bind(this)));
        this._expr_57 = import7.UNINITIALIZED;
        this._expr_58 = import7.UNINITIALIZED;
        var disposable_14 = this.renderer.listen(this._el_90, 'click', this.eventHandler(this._handle_click_90_0.bind(this)));
        this._expr_60 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        var disposable_15 = this.renderer.listen(this._el_93, 'click', this.eventHandler(this._handle_click_93_0.bind(this)));
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_64 = import7.UNINITIALIZED;
        var disposable_16 = this.renderer.listen(this._el_96, 'click', this.eventHandler(this._handle_click_96_0.bind(this)));
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        var disposable_17 = this.renderer.listen(this._el_103, 'click', this.eventHandler(this._handle_click_103_0.bind(this)));
        this._expr_69 = import7.UNINITIALIZED;
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_72 = import7.UNINITIALIZED;
        var disposable_18 = this.renderer.listen(this._el_108, 'click', this.eventHandler(this._handle_click_108_0.bind(this)));
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_76 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        var disposable_19 = this.renderer.listen(this._el_114, 'click', this.eventHandler(this._handle_click_114_0.bind(this)));
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_80 = import7.UNINITIALIZED;
        this._expr_81 = import7.UNINITIALIZED;
        this._expr_82 = import7.UNINITIALIZED;
        var disposable_20 = this.renderer.listen(this._el_120, 'click', this.eventHandler(this._handle_click_120_0.bind(this)));
        this._expr_84 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        var disposable_21 = this.renderer.listen(this._el_126, 'click', this.eventHandler(this._handle_click_126_0.bind(this)));
        this._expr_89 = import7.UNINITIALIZED;
        this._expr_90 = import7.UNINITIALIZED;
        this._expr_91 = import7.UNINITIALIZED;
        var disposable_22 = this.renderer.listen(this._el_133, 'click', this.eventHandler(this._handle_click_133_0.bind(this)));
        this._expr_93 = import7.UNINITIALIZED;
        this._expr_94 = import7.UNINITIALIZED;
        this._expr_95 = import7.UNINITIALIZED;
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
            this._anchor_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._el_76,
            this._text_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._el_82,
            this._el_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._el_87,
            this._el_88,
            this._text_89,
            this._el_90,
            this._el_91,
            this._text_92,
            this._el_93,
            this._el_94,
            this._text_95,
            this._el_96,
            this._el_97,
            this._text_98,
            this._text_99,
            this._text_100,
            this._el_101,
            this._text_102,
            this._el_103,
            this._el_104,
            this._text_105,
            this._el_106,
            this._text_107,
            this._el_108,
            this._el_109,
            this._text_110,
            this._text_111,
            this._el_112,
            this._text_113,
            this._el_114,
            this._el_115,
            this._text_116,
            this._text_117,
            this._el_118,
            this._text_119,
            this._el_120,
            this._el_121,
            this._text_122,
            this._text_123,
            this._el_124,
            this._text_125,
            this._el_126,
            this._el_127,
            this._text_128,
            this._text_129,
            this._text_130,
            this._el_131,
            this._text_132,
            this._el_133,
            this._el_134,
            this._text_135,
            this._text_136
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
            disposable_22
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import10.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Toolbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import28.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import13.NgFor) && (15 === requestNodeIndex))) {
            return this._NgFor_15_6;
        }
        if (((token === import16.Icon) && (20 === requestNodeIndex))) {
            return this._Icon_20_3;
        }
        if (((token === import14.FabButton) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._FabButton_19_4;
        }
        if (((token === import16.Icon) && (25 === requestNodeIndex))) {
            return this._Icon_25_3;
        }
        if (((token === import14.FabButton) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._FabButton_24_4;
        }
        if (((token === import16.Icon) && (28 === requestNodeIndex))) {
            return this._Icon_28_3;
        }
        if (((token === import14.FabButton) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._FabButton_27_4;
        }
        if (((token === import16.Icon) && (31 === requestNodeIndex))) {
            return this._Icon_31_3;
        }
        if (((token === import14.FabButton) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._FabButton_30_4;
        }
        if (((token === import16.Icon) && (34 === requestNodeIndex))) {
            return this._Icon_34_3;
        }
        if (((token === import14.FabButton) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._FabButton_33_4;
        }
        if (((token === import14.FabList) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._FabList_22_3;
        }
        if (((token === import14.FabContainer) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._FabContainer_17_4;
        }
        if (((token === import16.Icon) && (41 === requestNodeIndex))) {
            return this._Icon_41_3;
        }
        if (((token === import14.FabButton) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._FabButton_40_4;
        }
        if (((token === import16.Icon) && (46 === requestNodeIndex))) {
            return this._Icon_46_3;
        }
        if (((token === import14.FabButton) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._FabButton_45_4;
        }
        if (((token === import16.Icon) && (49 === requestNodeIndex))) {
            return this._Icon_49_3;
        }
        if (((token === import14.FabButton) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._FabButton_48_4;
        }
        if (((token === import16.Icon) && (52 === requestNodeIndex))) {
            return this._Icon_52_3;
        }
        if (((token === import14.FabButton) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._FabButton_51_4;
        }
        if (((token === import16.Icon) && (55 === requestNodeIndex))) {
            return this._Icon_55_3;
        }
        if (((token === import14.FabButton) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._FabButton_54_4;
        }
        if (((token === import14.FabList) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._FabList_43_3;
        }
        if (((token === import14.FabContainer) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._FabContainer_38_4;
        }
        if (((token === import16.Icon) && (62 === requestNodeIndex))) {
            return this._Icon_62_3;
        }
        if (((token === import14.FabButton) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._FabButton_61_4;
        }
        if (((token === import16.Icon) && (67 === requestNodeIndex))) {
            return this._Icon_67_3;
        }
        if (((token === import14.FabButton) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._FabButton_66_4;
        }
        if (((token === import16.Icon) && (70 === requestNodeIndex))) {
            return this._Icon_70_3;
        }
        if (((token === import14.FabButton) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._FabButton_69_4;
        }
        if (((token === import16.Icon) && (73 === requestNodeIndex))) {
            return this._Icon_73_3;
        }
        if (((token === import14.FabButton) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._FabButton_72_4;
        }
        if (((token === import16.Icon) && (76 === requestNodeIndex))) {
            return this._Icon_76_3;
        }
        if (((token === import14.FabButton) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._FabButton_75_4;
        }
        if (((token === import14.FabList) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 77)))) {
            return this._FabList_64_3;
        }
        if (((token === import14.FabContainer) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._FabContainer_59_4;
        }
        if (((token === import16.Icon) && (83 === requestNodeIndex))) {
            return this._Icon_83_3;
        }
        if (((token === import14.FabButton) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._FabButton_82_4;
        }
        if (((token === import16.Icon) && (88 === requestNodeIndex))) {
            return this._Icon_88_3;
        }
        if (((token === import14.FabButton) && ((87 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._FabButton_87_4;
        }
        if (((token === import16.Icon) && (91 === requestNodeIndex))) {
            return this._Icon_91_3;
        }
        if (((token === import14.FabButton) && ((90 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._FabButton_90_4;
        }
        if (((token === import16.Icon) && (94 === requestNodeIndex))) {
            return this._Icon_94_3;
        }
        if (((token === import14.FabButton) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 94)))) {
            return this._FabButton_93_4;
        }
        if (((token === import16.Icon) && (97 === requestNodeIndex))) {
            return this._Icon_97_3;
        }
        if (((token === import14.FabButton) && ((96 <= requestNodeIndex) && (requestNodeIndex <= 97)))) {
            return this._FabButton_96_4;
        }
        if (((token === import14.FabList) && ((85 <= requestNodeIndex) && (requestNodeIndex <= 98)))) {
            return this._FabList_85_3;
        }
        if (((token === import14.FabContainer) && ((80 <= requestNodeIndex) && (requestNodeIndex <= 99)))) {
            return this._FabContainer_80_4;
        }
        if (((token === import16.Icon) && (104 === requestNodeIndex))) {
            return this._Icon_104_3;
        }
        if (((token === import14.FabButton) && ((103 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._FabButton_103_4;
        }
        if (((token === import16.Icon) && (109 === requestNodeIndex))) {
            return this._Icon_109_3;
        }
        if (((token === import14.FabButton) && ((108 <= requestNodeIndex) && (requestNodeIndex <= 109)))) {
            return this._FabButton_108_4;
        }
        if (((token === import14.FabList) && ((106 <= requestNodeIndex) && (requestNodeIndex <= 110)))) {
            return this._FabList_106_3;
        }
        if (((token === import16.Icon) && (115 === requestNodeIndex))) {
            return this._Icon_115_3;
        }
        if (((token === import14.FabButton) && ((114 <= requestNodeIndex) && (requestNodeIndex <= 115)))) {
            return this._FabButton_114_4;
        }
        if (((token === import14.FabList) && ((112 <= requestNodeIndex) && (requestNodeIndex <= 116)))) {
            return this._FabList_112_3;
        }
        if (((token === import16.Icon) && (121 === requestNodeIndex))) {
            return this._Icon_121_3;
        }
        if (((token === import14.FabButton) && ((120 <= requestNodeIndex) && (requestNodeIndex <= 121)))) {
            return this._FabButton_120_4;
        }
        if (((token === import14.FabList) && ((118 <= requestNodeIndex) && (requestNodeIndex <= 122)))) {
            return this._FabList_118_3;
        }
        if (((token === import16.Icon) && (127 === requestNodeIndex))) {
            return this._Icon_127_3;
        }
        if (((token === import14.FabButton) && ((126 <= requestNodeIndex) && (requestNodeIndex <= 127)))) {
            return this._FabButton_126_4;
        }
        if (((token === import14.FabList) && ((124 <= requestNodeIndex) && (requestNodeIndex <= 128)))) {
            return this._FabList_124_3;
        }
        if (((token === import14.FabContainer) && ((101 <= requestNodeIndex) && (requestNodeIndex <= 129)))) {
            return this._FabContainer_101_4;
        }
        if (((token === import16.Icon) && (134 === requestNodeIndex))) {
            return this._Icon_134_3;
        }
        if (((token === import14.FabButton) && ((133 <= requestNodeIndex) && (requestNodeIndex <= 134)))) {
            return this._FabButton_133_4;
        }
        if (((token === import14.FabContainer) && ((131 <= requestNodeIndex) && (requestNodeIndex <= 135)))) {
            return this._FabContainer_131_4;
        }
        if (((token === import12.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 136)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        changed = false;
        var currVal_1 = '';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Content_9_4.fullscreen = currVal_1;
            changed = true;
            this._expr_1 = currVal_1;
        }
        if (changed) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_3 = this.context.array;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgFor_15_6.ngForOf = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgFor_15_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_15_6.ngDoCheck();
        }
        var currVal_5 = 'add';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_20_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_9 = 'logo-facebook';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Icon_25_3.name = currVal_9;
            this._expr_9 = currVal_9;
        }
        var currVal_12 = 'logo-twitter';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Icon_28_3.name = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_15 = 'logo-vimeo';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Icon_31_3.name = currVal_15;
            this._expr_15 = currVal_15;
        }
        var currVal_18 = 'logo-googleplus';
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._Icon_34_3.name = currVal_18;
            this._expr_18 = currVal_18;
        }
        changed = false;
        var currVal_20 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._FabButton_40_4.color = currVal_20;
            changed = true;
            this._expr_20 = currVal_20;
        }
        if (changed) {
            this._appEl_40.componentView.markAsCheckOnce();
        }
        var currVal_21 = 'arrow-dropleft';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._Icon_41_3.name = currVal_21;
            this._expr_21 = currVal_21;
        }
        var currVal_25 = 'logo-facebook';
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this._Icon_46_3.name = currVal_25;
            this._expr_25 = currVal_25;
        }
        var currVal_28 = 'logo-twitter';
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this._Icon_49_3.name = currVal_28;
            this._expr_28 = currVal_28;
        }
        var currVal_31 = 'logo-vimeo';
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this._Icon_52_3.name = currVal_31;
            this._expr_31 = currVal_31;
        }
        var currVal_34 = 'logo-googleplus';
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._Icon_55_3.name = currVal_34;
            this._expr_34 = currVal_34;
        }
        changed = false;
        var currVal_36 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this._FabButton_61_4.color = currVal_36;
            changed = true;
            this._expr_36 = currVal_36;
        }
        if (changed) {
            this._appEl_61.componentView.markAsCheckOnce();
        }
        var currVal_37 = 'arrow-dropright';
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this._Icon_62_3.name = currVal_37;
            this._expr_37 = currVal_37;
        }
        var currVal_41 = 'logo-facebook';
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this._Icon_67_3.name = currVal_41;
            this._expr_41 = currVal_41;
        }
        var currVal_44 = 'logo-twitter';
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this._Icon_70_3.name = currVal_44;
            this._expr_44 = currVal_44;
        }
        var currVal_47 = 'logo-vimeo';
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this._Icon_73_3.name = currVal_47;
            this._expr_47 = currVal_47;
        }
        var currVal_50 = 'logo-googleplus';
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this._Icon_76_3.name = currVal_50;
            this._expr_50 = currVal_50;
        }
        changed = false;
        var currVal_52 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this._FabButton_82_4.color = currVal_52;
            changed = true;
            this._expr_52 = currVal_52;
        }
        if (changed) {
            this._appEl_82.componentView.markAsCheckOnce();
        }
        var currVal_53 = 'arrow-dropup';
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this._Icon_83_3.name = currVal_53;
            this._expr_53 = currVal_53;
        }
        var currVal_57 = 'logo-facebook';
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this._Icon_88_3.name = currVal_57;
            this._expr_57 = currVal_57;
        }
        var currVal_60 = 'logo-twitter';
        if (import4.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this._Icon_91_3.name = currVal_60;
            this._expr_60 = currVal_60;
        }
        var currVal_63 = 'logo-vimeo';
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this._Icon_94_3.name = currVal_63;
            this._expr_63 = currVal_63;
        }
        var currVal_66 = 'logo-googleplus';
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this._Icon_97_3.name = currVal_66;
            this._expr_66 = currVal_66;
        }
        changed = false;
        var currVal_69 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this._FabButton_103_4.color = currVal_69;
            changed = true;
            this._expr_69 = currVal_69;
        }
        if (changed) {
            this._appEl_103.componentView.markAsCheckOnce();
        }
        var currVal_70 = 'md-share';
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this._Icon_104_3.name = currVal_70;
            this._expr_70 = currVal_70;
        }
        changed = false;
        var currVal_74 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this._FabButton_108_4.color = currVal_74;
            changed = true;
            this._expr_74 = currVal_74;
        }
        if (changed) {
            this._appEl_108.componentView.markAsCheckOnce();
        }
        var currVal_75 = 'logo-vimeo';
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this._Icon_109_3.name = currVal_75;
            this._expr_75 = currVal_75;
        }
        changed = false;
        var currVal_79 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this._FabButton_114_4.color = currVal_79;
            changed = true;
            this._expr_79 = currVal_79;
        }
        if (changed) {
            this._appEl_114.componentView.markAsCheckOnce();
        }
        var currVal_80 = 'logo-facebook';
        if (import4.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this._Icon_115_3.name = currVal_80;
            this._expr_80 = currVal_80;
        }
        changed = false;
        var currVal_84 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_84, currVal_84)) {
            this._FabButton_120_4.color = currVal_84;
            changed = true;
            this._expr_84 = currVal_84;
        }
        if (changed) {
            this._appEl_120.componentView.markAsCheckOnce();
        }
        var currVal_85 = 'logo-googleplus';
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this._Icon_121_3.name = currVal_85;
            this._expr_85 = currVal_85;
        }
        changed = false;
        var currVal_89 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this._FabButton_126_4.color = currVal_89;
            changed = true;
            this._expr_89 = currVal_89;
        }
        if (changed) {
            this._appEl_126.componentView.markAsCheckOnce();
        }
        var currVal_90 = 'logo-twitter';
        if (import4.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this._Icon_127_3.name = currVal_90;
            this._expr_90 = currVal_90;
        }
        changed = false;
        var currVal_93 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this._FabButton_133_4.color = currVal_93;
            changed = true;
            this._expr_93 = currVal_93;
        }
        if (changed) {
            this._appEl_133.componentView.markAsCheckOnce();
        }
        var currVal_94 = 'add';
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this._Icon_134_3.name = currVal_94;
            this._expr_94 = currVal_94;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_FabButton_22_0.dirty) {
                this._query_FabButton_22_0.reset([
                    this._FabButton_24_4,
                    this._FabButton_27_4,
                    this._FabButton_30_4,
                    this._FabButton_33_4
                ]);
                this._FabList_22_3._setbuttons = this._query_FabButton_22_0;
                this._query_FabButton_22_0.notifyOnChanges();
            }
            if (this._query_FabList_17_1.dirty) {
                this._query_FabList_17_1.reset([this._FabList_22_3]);
                this._FabContainer_17_4._fabLists = this._query_FabList_17_1;
                this._query_FabList_17_1.notifyOnChanges();
            }
            if (this._query_FabButton_43_0.dirty) {
                this._query_FabButton_43_0.reset([
                    this._FabButton_45_4,
                    this._FabButton_48_4,
                    this._FabButton_51_4,
                    this._FabButton_54_4
                ]);
                this._FabList_43_3._setbuttons = this._query_FabButton_43_0;
                this._query_FabButton_43_0.notifyOnChanges();
            }
            if (this._query_FabList_38_1.dirty) {
                this._query_FabList_38_1.reset([this._FabList_43_3]);
                this._FabContainer_38_4._fabLists = this._query_FabList_38_1;
                this._query_FabList_38_1.notifyOnChanges();
            }
            if (this._query_FabButton_64_0.dirty) {
                this._query_FabButton_64_0.reset([
                    this._FabButton_66_4,
                    this._FabButton_69_4,
                    this._FabButton_72_4,
                    this._FabButton_75_4
                ]);
                this._FabList_64_3._setbuttons = this._query_FabButton_64_0;
                this._query_FabButton_64_0.notifyOnChanges();
            }
            if (this._query_FabList_59_1.dirty) {
                this._query_FabList_59_1.reset([this._FabList_64_3]);
                this._FabContainer_59_4._fabLists = this._query_FabList_59_1;
                this._query_FabList_59_1.notifyOnChanges();
            }
            if (this._query_FabButton_85_0.dirty) {
                this._query_FabButton_85_0.reset([
                    this._FabButton_87_4,
                    this._FabButton_90_4,
                    this._FabButton_93_4,
                    this._FabButton_96_4
                ]);
                this._FabList_85_3._setbuttons = this._query_FabButton_85_0;
                this._query_FabButton_85_0.notifyOnChanges();
            }
            if (this._query_FabList_80_1.dirty) {
                this._query_FabList_80_1.reset([this._FabList_85_3]);
                this._FabContainer_80_4._fabLists = this._query_FabList_80_1;
                this._query_FabList_80_1.notifyOnChanges();
            }
            if (this._query_FabButton_106_0.dirty) {
                this._query_FabButton_106_0.reset([this._FabButton_108_4]);
                this._FabList_106_3._setbuttons = this._query_FabButton_106_0;
                this._query_FabButton_106_0.notifyOnChanges();
            }
            if (this._query_FabButton_112_0.dirty) {
                this._query_FabButton_112_0.reset([this._FabButton_114_4]);
                this._FabList_112_3._setbuttons = this._query_FabButton_112_0;
                this._query_FabButton_112_0.notifyOnChanges();
            }
            if (this._query_FabButton_118_0.dirty) {
                this._query_FabButton_118_0.reset([this._FabButton_120_4]);
                this._FabList_118_3._setbuttons = this._query_FabButton_118_0;
                this._query_FabButton_118_0.notifyOnChanges();
            }
            if (this._query_FabButton_124_0.dirty) {
                this._query_FabButton_124_0.reset([this._FabButton_126_4]);
                this._FabList_124_3._setbuttons = this._query_FabButton_124_0;
                this._query_FabButton_124_0.notifyOnChanges();
            }
            if (this._query_FabList_101_1.dirty) {
                this._query_FabList_101_1.reset([
                    this._FabList_106_3,
                    this._FabList_112_3,
                    this._FabList_118_3,
                    this._FabList_124_3
                ]);
                this._FabContainer_101_4._fabLists = this._query_FabList_101_1;
                this._query_FabList_101_1.notifyOnChanges();
            }
            if (this._query_FabList_131_1.dirty) {
                this._query_FabList_131_1.reset([]);
                this._FabContainer_131_4._fabLists = this._query_FabList_131_1;
                this._query_FabList_131_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_17_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_38_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_59_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_80_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_101_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_131_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Toolbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_6 = this._Icon_20_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_20, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._FabList_22_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_22, 'fab-list-active', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_10 = this._Icon_25_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_25, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_13 = this._Icon_28_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_28, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_16 = this._Icon_31_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_31, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_19 = this._Icon_34_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_34, 'hide', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_22 = this._Icon_41_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_41, 'hide', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = this._FabList_43_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_43, 'fab-list-active', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_26 = this._Icon_46_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_46, 'hide', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_29 = this._Icon_49_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_49, 'hide', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_32 = this._Icon_52_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_52, 'hide', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_35 = this._Icon_55_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_55, 'hide', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_38 = this._Icon_62_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_62, 'hide', currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = this._FabList_64_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementClass(this._el_64, 'fab-list-active', currVal_39);
            this._expr_39 = currVal_39;
        }
        var currVal_42 = this._Icon_67_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_67, 'hide', currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_45 = this._Icon_70_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_70, 'hide', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_48 = this._Icon_73_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementClass(this._el_73, 'hide', currVal_48);
            this._expr_48 = currVal_48;
        }
        var currVal_51 = this._Icon_76_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_76, 'hide', currVal_51);
            this._expr_51 = currVal_51;
        }
        var currVal_54 = this._Icon_83_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementClass(this._el_83, 'hide', currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = this._FabList_85_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_85, 'fab-list-active', currVal_55);
            this._expr_55 = currVal_55;
        }
        var currVal_58 = this._Icon_88_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementClass(this._el_88, 'hide', currVal_58);
            this._expr_58 = currVal_58;
        }
        var currVal_61 = this._Icon_91_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setElementClass(this._el_91, 'hide', currVal_61);
            this._expr_61 = currVal_61;
        }
        var currVal_64 = this._Icon_94_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementClass(this._el_94, 'hide', currVal_64);
            this._expr_64 = currVal_64;
        }
        var currVal_67 = this._Icon_97_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementClass(this._el_97, 'hide', currVal_67);
            this._expr_67 = currVal_67;
        }
        var currVal_71 = this._Icon_104_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_104, 'hide', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_72 = this._FabList_106_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this.renderer.setElementClass(this._el_106, 'fab-list-active', currVal_72);
            this._expr_72 = currVal_72;
        }
        var currVal_76 = this._Icon_109_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setElementClass(this._el_109, 'hide', currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_77 = this._FabList_112_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_112, 'fab-list-active', currVal_77);
            this._expr_77 = currVal_77;
        }
        var currVal_81 = this._Icon_115_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setElementClass(this._el_115, 'hide', currVal_81);
            this._expr_81 = currVal_81;
        }
        var currVal_82 = this._FabList_118_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this.renderer.setElementClass(this._el_118, 'fab-list-active', currVal_82);
            this._expr_82 = currVal_82;
        }
        var currVal_86 = this._Icon_121_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this.renderer.setElementClass(this._el_121, 'hide', currVal_86);
            this._expr_86 = currVal_86;
        }
        var currVal_87 = this._FabList_124_3._visible;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setElementClass(this._el_124, 'fab-list-active', currVal_87);
            this._expr_87 = currVal_87;
        }
        var currVal_91 = this._Icon_127_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setElementClass(this._el_127, 'hide', currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_95 = this._Icon_134_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setElementClass(this._el_134, 'hide', currVal_95);
            this._expr_95 = currVal_95;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Icon_20_3.ngOnDestroy();
        this._Icon_25_3.ngOnDestroy();
        this._Icon_28_3.ngOnDestroy();
        this._Icon_31_3.ngOnDestroy();
        this._Icon_34_3.ngOnDestroy();
        this._FabContainer_17_4.ngOnDestroy();
        this._Icon_41_3.ngOnDestroy();
        this._Icon_46_3.ngOnDestroy();
        this._Icon_49_3.ngOnDestroy();
        this._Icon_52_3.ngOnDestroy();
        this._Icon_55_3.ngOnDestroy();
        this._FabContainer_38_4.ngOnDestroy();
        this._Icon_62_3.ngOnDestroy();
        this._Icon_67_3.ngOnDestroy();
        this._Icon_70_3.ngOnDestroy();
        this._Icon_73_3.ngOnDestroy();
        this._Icon_76_3.ngOnDestroy();
        this._FabContainer_59_4.ngOnDestroy();
        this._Icon_83_3.ngOnDestroy();
        this._Icon_88_3.ngOnDestroy();
        this._Icon_91_3.ngOnDestroy();
        this._Icon_94_3.ngOnDestroy();
        this._Icon_97_3.ngOnDestroy();
        this._FabContainer_80_4.ngOnDestroy();
        this._Icon_104_3.ngOnDestroy();
        this._Icon_109_3.ngOnDestroy();
        this._Icon_115_3.ngOnDestroy();
        this._Icon_121_3.ngOnDestroy();
        this._Icon_127_3.ngOnDestroy();
        this._FabContainer_101_4.ngOnDestroy();
        this._Icon_134_3.ngOnDestroy();
        this._FabContainer_131_4.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.clickMainFAB() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_24_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('facebook', this._FabContainer_17_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('twitter', this._FabContainer_17_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('vimeo', this._FabContainer_17_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('googleplus', this._FabContainer_17_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_45_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('facebook', this._FabContainer_38_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_48_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('twitter', this._FabContainer_38_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_51_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('vimeo', this._FabContainer_38_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_54_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('googleplus', this._FabContainer_38_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_66_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('facebook', this._FabContainer_59_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_69_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('twitter', this._FabContainer_59_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_72_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('vimeo', this._FabContainer_59_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_75_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('googleplus', this._FabContainer_59_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_87_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('facebook', this._FabContainer_80_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_90_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('twitter', this._FabContainer_80_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_93_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('vimeo', this._FabContainer_80_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_96_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('googleplus', this._FabContainer_80_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_103_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.clickMainFAB() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_108_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('vimeo', this._FabContainer_101_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_114_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('facebook', this._FabContainer_101_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_120_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('googleplus', this._FabContainer_101_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_126_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openSocial('twitter', this._FabContainer_101_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_133_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.add() !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/fab/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
    }
    return new _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'f', '');
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
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
        var compView_0 = import32.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import31.Nav(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import33.NavControllerBase, null), this.parentInjector.get(import24.App), this.parentInjector.get(import17.Config), this.parentInjector.get(import25.Keyboard), new import18.ElementRef(this._el_0), this.parentInjector.get(import26.NgZone), this.renderer, this.parentInjector.get(import34.ComponentFactoryResolver), this.parentInjector.get(import35.GestureController), this.parentInjector.get(import36.TransitionController), this.parentInjector.get(import37.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/fab/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
