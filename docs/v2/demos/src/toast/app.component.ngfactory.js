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
import * as import8 from 'ionic-angular/components/toast/toast';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from 'ionic-angular/components/button/button';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import28 from 'ionic-angular/components/nav/nav';
import * as import29 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import30 from 'ionic-angular/navigation/nav-controller-base';
import * as import31 from '@angular/core/src/linker/component_factory_resolver';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from 'ionic-angular/transitions/transition-controller';
import * as import34 from 'ionic-angular/navigation/deep-linker';
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
        this._ApiDemoPage_0_4 = new import3.ApiDemoPage(this.parentInjector.get(import8.ToastController));
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
        (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoPageNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoPage_Host0, import3.ApiDemoPage);
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
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import19.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import22.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Toast', null);
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
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import23.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_11, 'block', '');
        this.renderer.setElementAttribute(this._el_11, 'ion-button', '');
        this._appEl_11 = new import2.AppElement(11, 9, this, this._el_11);
        var compView_11 = import27.viewFactory_Button0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Button_11_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_11), this.renderer);
        this._appEl_11.initComponent(this._Button_11_4, [], compView_11);
        this._text_12 = this.renderer.createText(null, 'Show Toast Bottom Position', null);
        compView_11.create(this._Button_11_4, [[].concat([this._text_12])], null);
        this._text_13 = this.renderer.createText(null, '\n  ', null);
        this._el_14 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_14, 'block', '');
        this.renderer.setElementAttribute(this._el_14, 'ion-button', '');
        this._appEl_14 = new import2.AppElement(14, 9, this, this._el_14);
        var compView_14 = import27.viewFactory_Button0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Button_14_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_14), this.renderer);
        this._appEl_14.initComponent(this._Button_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, 'Show Toast Top Position', null);
        compView_14.create(this._Button_14_4, [[].concat([this._text_15])], null);
        this._text_16 = this.renderer.createText(null, '\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_17, 'block', '');
        this.renderer.setElementAttribute(this._el_17, 'ion-button', '');
        this._appEl_17 = new import2.AppElement(17, 9, this, this._el_17);
        var compView_17 = import27.viewFactory_Button0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Button_17_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_17), this.renderer);
        this._appEl_17.initComponent(this._Button_17_4, [], compView_17);
        this._text_18 = this.renderer.createText(null, 'Show Toast Middle Position', null);
        compView_17.create(this._Button_17_4, [[].concat([this._text_18])], null);
        this._text_19 = this.renderer.createText(null, '\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_20, 'block', '');
        this.renderer.setElementAttribute(this._el_20, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_20, 'margin-bottom', '');
        this._appEl_20 = new import2.AppElement(20, 9, this, this._el_20);
        var compView_20 = import27.viewFactory_Button0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Button_20_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_20), this.renderer);
        this._appEl_20.initComponent(this._Button_20_4, [], compView_20);
        this._text_21 = this.renderer.createText(null, 'Show Long Toast', null);
        compView_20.create(this._Button_20_4, [[].concat([this._text_21])], null);
        this._text_22 = this.renderer.createText(null, '\n\n  ', null);
        this._el_23 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_23, 'block', '');
        this.renderer.setElementAttribute(this._el_23, 'ion-button', '');
        this._appEl_23 = new import2.AppElement(23, 9, this, this._el_23);
        var compView_23 = import27.viewFactory_Button0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Button_23_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_23), this.renderer);
        this._appEl_23.initComponent(this._Button_23_4, [], compView_23);
        this._text_24 = this.renderer.createText(null, 'Show Custom Duration Toast', null);
        compView_23.create(this._Button_23_4, [[].concat([this._text_24])], null);
        this._text_25 = this.renderer.createText(null, '\n  ', null);
        this._el_26 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'block', '');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this._appEl_26 = new import2.AppElement(26, 9, this, this._el_26);
        var compView_26 = import27.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import15.Button(null, '', this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4, [], compView_26);
        this._text_27 = this.renderer.createText(null, 'Show Close Button Toast', null);
        compView_26.create(this._Button_26_4, [[].concat([this._text_27])], null);
        this._text_28 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13,
                this._el_14,
                this._text_16,
                this._el_17,
                this._text_19,
                this._el_20,
                this._text_22,
                this._el_23,
                this._text_25,
                this._el_26,
                this._text_28
            ]),
            []
        ], null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_20, 'click', this.eventHandler(this._handle_click_20_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_26, 'click', this.eventHandler(this._handle_click_26_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
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
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ], []);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import15.Button) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Button_11_4;
        }
        if (((token === import15.Button) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Button_14_4;
        }
        if (((token === import15.Button) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_17_4;
        }
        if (((token === import15.Button) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Button_20_4;
        }
        if (((token === import15.Button) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_23_4;
        }
        if (((token === import15.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Button_26_4;
        }
        if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changed = false;
        var currVal_4 = '';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Button_11_4.block = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_6 = '';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Button_14_4.block = currVal_6;
            changed = true;
            this._expr_6 = currVal_6;
        }
        if (changed) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_8 = '';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Button_17_4.block = currVal_8;
            changed = true;
            this._expr_8 = currVal_8;
        }
        if (changed) {
            this._appEl_17.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_10 = '';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Button_20_4.block = currVal_10;
            changed = true;
            this._expr_10 = currVal_10;
        }
        if (changed) {
            this._appEl_20.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_12 = '';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Button_23_4.block = currVal_12;
            changed = true;
            this._expr_12 = currVal_12;
        }
        if (changed) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        changed = false;
        var currVal_14 = '';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Button_26_4.block = currVal_14;
            changed = true;
            this._expr_14 = currVal_14;
        }
        if (changed) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_11_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_14_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_17_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_20_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_23_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.ngAfterContentInit();
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
        this._Content_9_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showToast('bottom') !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showToast('top') !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showToast('middle') !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_20_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showLongToast() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showDismissDurationToast() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_click_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.showToastWithCloseButton() !== false);
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
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import10.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
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
        var compView_0 = import29.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import28.Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import30.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import24.Keyboard), new import17.ElementRef(this._el_0), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import31.ComponentFactoryResolver), this.parentInjector.get(import32.GestureController), this.parentInjector.get(import33.TransitionController), this.parentInjector.get(import34.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
