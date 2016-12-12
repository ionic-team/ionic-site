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
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/infinite-scroll/infinite-scroll.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/infinite-scroll/infinite-scroll-content.ngfactory';
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
import * as import32 from '@angular/common/src/directives/ng_for';
import * as import33 from 'ionic-angular/components/list/list';
import * as import34 from 'ionic-angular/components/infinite-scroll/infinite-scroll-content';
import * as import35 from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import * as import36 from 'ionic-angular/components/content/content';
import * as import37 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import38 from '@angular/core/src/linker/query_list';
import * as import39 from 'ionic-angular/util/form';
import * as import40 from 'ionic-angular/components/item/item';
export var Wrapper_ApiDemoApp = (function () {
    function Wrapper_ApiDemoApp(p0) {
        this.changed = false;
        this.context = new import0.ApiDemoApp(p0);
    }
    Wrapper_ApiDemoApp.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ApiDemoApp;
}());
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
        this._MockProvider_0_4 = new import0.MockProvider();
        this._ApiDemoApp_0_5 = new Wrapper_ApiDemoApp(this._MockProvider_0_4);
        this._appEl_0.initComponent(this._ApiDemoApp_0_5.context, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MockProvider) && (0 === requestNodeIndex))) {
            return this._MockProvider_0_4;
        }
        if (((token === import0.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_5.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApiDemoApp_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
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
        this._text_5 = this.renderer.createText(null, 'Infinite Scroll', null);
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
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import14.Wrapper_List(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import27.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import28.TemplateRef_(this._appEl_13, viewFactory_ApiDemoApp1);
        this._NgFor_13_6 = new import15.Wrapper_NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-infinite-scroll', null);
        this.renderer.setElementAttribute(this._el_16, 'threshold', '100px');
        this._InfiniteScroll_16_3 = new import16.Wrapper_InfiniteScroll(this._Content_9_4.context, this.parentInjector.get(import25.NgZone), new import19.ElementRef(this._el_16));
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-infinite-scroll-content', null);
        this.renderer.setElementAttribute(this._el_18, 'loadingSpinner', 'bubbles');
        this.renderer.setElementAttribute(this._el_18, 'loadingText', 'Loading more data...');
        this._appEl_18 = new import3.AppElement(18, 16, this, this._el_18);
        var compView_18 = import17.viewFactory_InfiniteScrollContent0(this.viewUtils, this.injector(18), this._appEl_18);
        this._InfiniteScrollContent_18_4 = new import17.Wrapper_InfiniteScrollContent(this._InfiniteScroll_16_3.context, this.parentInjector.get(import18.Config));
        this._appEl_18.initComponent(this._InfiniteScrollContent_18_4.context, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n    ', null);
        compView_18.create(this._InfiniteScrollContent_18_4.context, [], null);
        this._text_20 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15,
                this._el_16,
                this._text_21
            ]),
            []
        ], null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_16, 'ionInfinite', this.eventHandler(this._handle_ionInfinite_16_0.bind(this)));
        var subscription_0 = this._InfiniteScroll_16_3.context.ionInfinite.subscribe(this.eventHandler(this._handle_ionInfinite_16_0.bind(this)));
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
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [disposable_0], [subscription_0]);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import31.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import28.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import32.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        if (((token === import33.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._List_11_3.context;
        }
        if (((token === import34.InfiniteScrollContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._InfiniteScrollContent_18_4.context;
        }
        if (((token === import35.InfiniteScroll) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._InfiniteScroll_16_3.context;
        }
        if (((token === import36.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        this._List_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        var currVal_3 = this.context.items;
        this._NgFor_13_6.check_ngForOf(currVal_3, throwOnChange, false);
        this._NgFor_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        var currVal_5 = '100px';
        this._InfiniteScroll_16_3.check_threshold(currVal_5, throwOnChange, false);
        this._InfiniteScroll_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        var currVal_6 = 'bubbles';
        this._InfiniteScrollContent_18_4.check_loadingSpinner(currVal_6, throwOnChange, false);
        var currVal_7 = 'Loading more data...';
        this._InfiniteScrollContent_18_4.check_loadingText(currVal_7, throwOnChange, false);
        this._InfiniteScrollContent_18_4.detectChangesInternal(this, this._el_18, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._InfiniteScroll_16_3.context.ngAfterContentInit();
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
        var currVal_8 = this._InfiniteScrollContent_18_4.context.inf.state;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_18, 'state', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ApiDemoApp0.prototype.destroyInternal = function () {
        this._InfiniteScroll_16_3.context.ngOnDestroy();
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ApiDemoApp0.prototype._handle_ionInfinite_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.doInfinite($event) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoApp1 = (function (_super) {
    __extends(_View_ApiDemoApp1, _super);
    function _View_ApiDemoApp1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp1, renderType_ApiDemoApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import37.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import37.Wrapper_Item(this.parent.parentInjector.get(import39.Form), this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import37.Wrapper_ItemContent();
        this._query_Label_0_0 = new import38.QueryList();
        this._query_Button_0_1 = new import38.QueryList();
        this._query_Icon_0_2 = new import38.QueryList();
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
    _View_ApiDemoApp1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import40.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp1.prototype.detectChangesInternal = function (throwOnChange) {
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
    return _View_ApiDemoApp1;
}(import1.AppView));
function viewFactory_ApiDemoApp1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoApp1(viewUtils, parentInjector, declarationEl);
}
