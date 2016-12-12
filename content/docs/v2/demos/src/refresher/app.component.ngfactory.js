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
import * as import14 from '../../node_modules/ionic-angular/components/refresher/refresher.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/refresher/refresher-content.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/gestures/gesture-controller';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import31 from 'ionic-angular/components/navbar/navbar';
import * as import32 from 'ionic-angular/components/refresher/refresher-content';
import * as import33 from 'ionic-angular/components/refresher/refresher';
import * as import34 from '@angular/common/src/directives/ng_for';
import * as import35 from 'ionic-angular/components/list/list';
import * as import36 from 'ionic-angular/components/content/content';
import * as import37 from '@angular/core/src/security';
import * as import38 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import39 from '@angular/core/src/linker/query_list';
import * as import40 from 'ionic-angular/util/form';
import * as import41 from 'ionic-angular/components/item/item';
import * as import42 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import43 from 'ionic-angular/navigation/nav-controller-base';
import * as import44 from '@angular/core/src/linker/component_factory_resolver';
import * as import45 from 'ionic-angular/transitions/transition-controller';
import * as import46 from 'ionic-angular/navigation/deep-linker';
import * as import47 from 'ionic-angular/components/nav/nav';
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
        this._MockProvider_0_4 = new import0.MockProvider();
        this._ApiDemoPage_0_5 = new Wrapper_ApiDemoPage(this._MockProvider_0_4);
        this._appEl_0.initComponent(this._ApiDemoPage_0_5.context, [], compView_0);
        compView_0.create(this._ApiDemoPage_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MockProvider) && (0 === requestNodeIndex))) {
            return this._MockProvider_0_4;
        }
        if (((token === import0.ApiDemoPage) && (0 === requestNodeIndex))) {
            return this._ApiDemoPage_0_5.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApiDemoPage_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
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
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import21.App), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import22.NavController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import23.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Refresher', null);
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
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-refresher', null);
        this._Refresher_11_3 = new import14.Wrapper_Refresher(this._Content_9_4.context, this.parentInjector.get(import25.NgZone), this.parentInjector.get(import27.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-refresher-content', null);
        this.renderer.setElementAttribute(this._el_13, 'pullingText', 'Pull to refresh...');
        this.renderer.setElementAttribute(this._el_13, 'refreshingText', 'Refreshing...');
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import15.viewFactory_RefresherContent0(this.viewUtils, this.injector(13), this._appEl_13);
        this._RefresherContent_13_4 = new import15.Wrapper_RefresherContent(this._Refresher_11_3.context, this.parentInjector.get(import18.Config));
        this._appEl_13.initComponent(this._RefresherContent_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n    ', null);
        compView_13.create(this._RefresherContent_13_4.context, [], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-list', null);
        this._List_17_3 = new import16.Wrapper_List(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import27.GestureController));
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._appEl_19 = new import3.AppElement(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import28.TemplateRef_(this._appEl_19, viewFactory_ApiDemoPage1);
        this._NgFor_19_6 = new import17.Wrapper_NgFor(this._appEl_19.vcRef, this._TemplateRef_19_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_20 = this.renderer.createText(this._el_17, '\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._text_16,
                this._el_17,
                this._text_21
            ]),
            [].concat([this._el_11])
        ], null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'ionRefresh', this.eventHandler(this._handle_ionRefresh_11_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'ionPull', this.eventHandler(this._handle_ionPull_11_1.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        var subscription_0 = this._Refresher_11_3.context.ionRefresh.subscribe(this.eventHandler(this._handle_ionRefresh_11_0.bind(this)));
        var subscription_1 = this._Refresher_11_3.context.ionPull.subscribe(this.eventHandler(this._handle_ionPull_11_1.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
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
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [
            disposable_0,
            disposable_1
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import31.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import32.RefresherContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RefresherContent_13_4.context;
        }
        if (((token === import33.Refresher) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Refresher_11_3.context;
        }
        if (((token === import28.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import34.NgFor) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6.context;
        }
        if (((token === import35.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._List_17_3.context;
        }
        if (((token === import36.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
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
        this._Refresher_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        var currVal_7 = 'Pull to refresh...';
        this._RefresherContent_13_4.check_pullingText(currVal_7, throwOnChange, false);
        var currVal_8 = 'Refreshing...';
        this._RefresherContent_13_4.check_refreshingText(currVal_8, throwOnChange, false);
        this._RefresherContent_13_4.detectChangesInternal(this, this._el_13, throwOnChange);
        this._List_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        var currVal_10 = this.context.items;
        this._NgFor_19_6.check_ngForOf(currVal_10, throwOnChange, false);
        this._NgFor_19_6.detectChangesInternal(this, this._anchor_19, throwOnChange);
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
        var currVal_5 = (this._Refresher_11_3.context.state !== 'inactive');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_11, 'refresher-active', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Refresher_11_3.context._top;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementStyle(this._el_11, 'top', ((this.viewUtils.sanitizer.sanitize(import37.SecurityContext.STYLE, currVal_6) == null) ? null : this.viewUtils.sanitizer.sanitize(import37.SecurityContext.STYLE, currVal_6).toString()));
            this._expr_6 = currVal_6;
        }
        var currVal_9 = this._RefresherContent_13_4.context.r.state;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_13, 'state', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Refresher_11_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ionRefresh_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.doRefresh($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionPull_11_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.doPulling($event) !== false);
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
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import38.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import38.Wrapper_Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import38.Wrapper_ItemContent();
        this._query_Label_0_0 = new import39.QueryList();
        this._query_Button_0_1 = new import39.QueryList();
        this._query_Icon_0_2 = new import39.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([this._text_1]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import41.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import41.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '\n      ', this.context.$implicit, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
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
        var compView_0 = import42.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import42.Wrapper_Nav(this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import43.NavControllerBase, null), this.parentInjector.get(import21.App), this.parentInjector.get(import18.Config), this.parentInjector.get(import24.Keyboard), new import19.ElementRef(this._el_0), this.parentInjector.get(import25.NgZone), this.renderer, this.parentInjector.get(import44.ComponentFactoryResolver), this.parentInjector.get(import27.GestureController), this.parentInjector.get(import45.TransitionController), this.parentInjector.get(import46.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4.context, [], compView_0);
        compView_0.create(this._Nav_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import47.Nav) && (0 === requestNodeIndex))) {
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
