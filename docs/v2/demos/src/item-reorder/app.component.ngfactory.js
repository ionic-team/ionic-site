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
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/item/item-reorder.ngfactory';
import * as import22 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from 'ionic-angular/components/toolbar/toolbar';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/button/button';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import38 from 'ionic-angular/components/navbar/navbar';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/list/list-header';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from 'ionic-angular/components/item/item-reorder';
import * as import43 from 'ionic-angular/components/list/list';
import * as import44 from 'ionic-angular/components/content/content';
import * as import45 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import46 from 'ionic-angular/navigation/nav-controller-base';
import * as import47 from '@angular/core/src/linker/component_factory_resolver';
import * as import48 from 'ionic-angular/transitions/transition-controller';
import * as import49 from 'ionic-angular/navigation/deep-linker';
import * as import50 from 'ionic-angular/components/nav/nav';
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
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import25.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import26.App), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import27.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Item Reorder', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_7, 'end', '');
        this._ToolbarItem_7_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_7), this.renderer, this.parentInjector.get(import27.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_7_0 = new import15.QueryList();
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'button', null);
        this.renderer.setElementAttribute(this._el_9, 'ion-button', '');
        this._appEl_9 = new import3.AppElement(9, 7, this, this._el_9);
        var compView_9 = import16.viewFactory_Button0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Button_9_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_9), this.renderer);
        this._appEl_9.initComponent(this._Button_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '', null);
        compView_9.create(this._Button_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [].concat([this._el_7]),
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_15, 'fullscreen', '');
        this._appEl_15 = new import3.AppElement(15, null, this, this._el_15);
        var compView_15 = import17.viewFactory_Content0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Content_15_4 = new import17.Wrapper_Content(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import26.App), this.parentInjector.get(import28.Keyboard), this.parentInjector.get(import29.NgZone), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_15.initComponent(this._Content_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'chat-sliding-demo');
        this._List_17_3 = new import18.Wrapper_List(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_18 = this.renderer.createText(this._el_17, '\n    ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'item');
        this._appEl_19 = new import3.AppElement(19, 17, this, this._el_19);
        var compView_19 = import19.viewFactory_Item0(this.viewUtils, this.injector(19), this._appEl_19);
        this._Item_19_4 = new import19.Wrapper_Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_19), this.renderer);
        this._ListHeader_19_5 = new import20.Wrapper_ListHeader(this.parentInjector.get(import23.Config), this.renderer, new import24.ElementRef(this._el_19), null);
        this._query_Label_19_0 = new import15.QueryList();
        this._query_Button_19_1 = new import15.QueryList();
        this._query_Icon_19_2 = new import15.QueryList();
        this._appEl_19.initComponent(this._Item_19_4.context, [], compView_19);
        this._text_20 = this.renderer.createText(null, '\n      Playlist\n    ', null);
        this._query_Label_19_0.reset([]);
        this._Item_19_4.context.contentLabel = this._query_Label_19_0.first;
        compView_19.create(this._Item_19_4.context, [
            [],
            [],
            [].concat([this._text_20]),
            [],
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_17, '\n\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_17, 'ion-item-group', null);
        this._ItemGroup_22_3 = new import19.Wrapper_ItemGroup();
        this._ItemReorder_22_4 = new import21.Wrapper_ItemReorder(new import24.ElementRef(this._el_22), this.renderer, this.parentInjector.get(import29.NgZone), this._Content_15_4.context);
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._appEl_24 = new import3.AppElement(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import33.TemplateRef_(this._appEl_24, viewFactory_ApiDemoPage1);
        this._NgFor_24_6 = new import22.Wrapper_NgFor(this._appEl_24.vcRef, this._TemplateRef_24_5, this.parentInjector.get(import34.IterableDiffers), this.ref);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_17, '\n  ', null);
        this._text_27 = this.renderer.createText(null, '\n\n', null);
        compView_15.create(this._Content_15_4.context, [
            [],
            [].concat([
                this._text_16,
                this._el_17,
                this._text_27
            ]),
            []
        ], null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_22, 'ionItemReorder', this.eventHandler(this._handle_ionItemReorder_22_0.bind(this)));
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var subscription_0 = this._ItemReorder_22_4.context.ionItemReorder.subscribe(this.eventHandler(this._handle_ionItemReorder_22_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import36.Button) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Button_9_4.context;
        }
        if (((token === import37.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarItem_7_3.context;
        }
        if (((token === import38.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import27.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_0_3.context;
        }
        if (((token === import39.Item) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_19_4.context;
        }
        if (((token === import40.ListHeader) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ListHeader_19_5.context;
        }
        if (((token === import33.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import41.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6.context;
        }
        if (((token === import39.ItemGroup) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemGroup_22_3.context;
        }
        if (((token === import42.ItemReorder) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemReorder_22_4.context;
        }
        if (((token === import43.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._List_17_3.context;
        }
        if (((token === import44.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Content_15_4.context;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_7_3.detectChangesInternal(this, this._el_7, throwOnChange);
        if (this._Button_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        var currVal_4 = '';
        this._Content_15_4.check_fullscreen(currVal_4, throwOnChange, false);
        if (this._Content_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        this._List_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        if (this._Item_19_4.detectChangesInternal(this, this._el_19, throwOnChange)) {
            this._appEl_19.componentView.markAsCheckOnce();
        }
        this._ListHeader_19_5.detectChangesInternal(this, this._el_19, throwOnChange);
        this._ItemGroup_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        var currVal_7 = this.context.editing;
        this._ItemReorder_22_4.check_reorder(currVal_7, throwOnChange, false);
        this._ItemReorder_22_4.detectChangesInternal(this, this._el_22, throwOnChange);
        var currVal_10 = this.context.songs;
        this._NgFor_24_6.check_ngForOf(currVal_10, throwOnChange, false);
        this._NgFor_24_6.detectChangesInternal(this, this._anchor_24, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_7_0.dirty) {
                this._query_Button_7_0.reset([this._Button_9_4.context]);
                this._ToolbarItem_7_3.context._buttons = this._query_Button_7_0;
                this._query_Button_7_0.notifyOnChanges();
            }
            if (this._query_Button_19_1.dirty) {
                this._query_Button_19_1.reset([]);
                this._Item_19_4.context._buttons = this._query_Button_19_1;
                this._query_Button_19_1.notifyOnChanges();
            }
            if (this._query_Icon_19_2.dirty) {
                this._query_Icon_19_2.reset([]);
                this._Item_19_4.context._icons = this._query_Icon_19_2;
                this._query_Icon_19_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_9_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_19_4.context.ngAfterContentInit();
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
        var currVal_3 = import4.interpolate(1, '', this.context.editButton, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._Content_15_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_15, 'statusbar-padding', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_8 = this._ItemReorder_22_4.context._enableReorder;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_22, 'reorder-enabled', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._ItemReorder_22_4.context._visibleReorder;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_22, 'reorder-visible', currVal_9);
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
        this._ItemReorder_22_4.context.ngOnDestroy();
        this._Content_15_4.context.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.toggleEdit() !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionItemReorder_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.reorderData($event) !== false);
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
var _View_ApiDemoPage1 = (function (_super) {
    __extends(_View_ApiDemoPage1, _super);
    function _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage1, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import19.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import19.Wrapper_Item(this.parent.parentInjector.get(import32.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import19.Wrapper_ItemContent();
        this._query_Label_0_0 = new import15.QueryList();
        this._query_Button_0_1 = new import15.QueryList();
        this._query_Icon_0_2 = new import15.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n        ', null);
        this._el_2 = this.renderer.createElement(null, 'h2', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n        ', null);
        this._el_5 = this.renderer.createElement(null, 'p', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_4,
                this._el_5,
                this._text_7
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import39.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Item_0_4.context;
        }
        if (((token === import39.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
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
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(2, '', this.context.$implicit.band, ' • ', this.context.$implicit.album, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
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
        var compView_0 = import45.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import45.Wrapper_Nav(this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import46.NavControllerBase, null), this.parentInjector.get(import26.App), this.parentInjector.get(import23.Config), this.parentInjector.get(import28.Keyboard), new import24.ElementRef(this._el_0), this.parentInjector.get(import29.NgZone), this.renderer, this.parentInjector.get(import47.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import48.TransitionController), this.parentInjector.get(import49.DeepLinker, null));
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
