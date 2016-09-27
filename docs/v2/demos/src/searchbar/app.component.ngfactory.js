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
import * as import13 from 'ionic-angular/components/searchbar/searchbar';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from 'ionic-angular/components/list/list';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import26 from '@angular/forms/src/directives/ng_control';
import * as import27 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from '@angular/core/src/linker/template_ref';
import * as import33 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import34 from 'ionic-angular/components/item/item';
import * as import35 from '@angular/core/src/linker/query_list';
import * as import36 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from 'ionic-angular/components/nav/nav';
import * as import39 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import40 from 'ionic-angular/navigation/nav-controller-base';
import * as import41 from '@angular/core/src/linker/component_factory_resolver';
import * as import42 from 'ionic-angular/transitions/transition-controller';
import * as import43 from 'ionic-angular/navigation/deep-linker';
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
    _View_ApiDemoPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ApiDemoPage_0_4.ngOnInit();
        }
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
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'no-border-bottom', '');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import20.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import21.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import22.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import23.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Searchbar', null);
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
        this._text_7 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_8, 'no-border-top', '');
        this._appEl_8 = new import2.AppElement(8, 0, this, this._el_8);
        var compView_8 = import24.viewFactory_Toolbar0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Toolbar_8_4 = new import10.Toolbar(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_8), this.renderer);
        this._appEl_8.initComponent(this._Toolbar_8_4, [], compView_8);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-searchbar', null);
        this.renderer.setElementAttribute(this._el_10, 'placeholder', 'Filter Items');
        this._appEl_10 = new import2.AppElement(10, 8, this, this._el_10);
        var compView_10 = import25.viewFactory_Searchbar0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Searchbar_10_4 = new import13.Searchbar(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import26.NgControl, null));
        this._appEl_10.initComponent(this._Searchbar_10_4, [], compView_10);
        compView_10.create(this._Searchbar_10_4, [], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_8.create(this._Toolbar_8_4, [
            [],
            [],
            [],
            [].concat([
                this._text_9,
                this._el_10,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_14 = new import2.AppElement(14, null, this, this._el_14);
        var compView_14 = import27.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import14.Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import28.Keyboard), this.parentInjector.get(import29.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-searchbar', null);
        this.renderer.setElementAttribute(this._el_16, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_16, 'placeholder', 'Filter Items with Cancel');
        this.renderer.setElementAttribute(this._el_16, 'showCancelButton', '');
        this._appEl_16 = new import2.AppElement(16, 14, this, this._el_16);
        var compView_16 = import25.viewFactory_Searchbar0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Searchbar_16_4 = new import13.Searchbar(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import26.NgControl, null));
        this._appEl_16.initComponent(this._Searchbar_16_4, [], compView_16);
        compView_16.create(this._Searchbar_16_4, [], null);
        this._text_17 = this.renderer.createText(null, '\n\n  ', null);
        this._el_18 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_18, 'padding-left', '');
        this.renderer.setElementAttribute(this._el_18, 'padding-right', '');
        this._text_19 = this.renderer.createText(this._el_18, 'Searchbars can be placed in a toolbar or anywhere in the content.', null);
        this._text_20 = this.renderer.createText(null, '\n\n  ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-list', null);
        this._List_21_3 = new import15.List(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_21), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_22 = this.renderer.createText(this._el_21, '\n    ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._appEl_23 = new import2.AppElement(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import32.TemplateRef_(this._appEl_23, viewFactory_ApiDemoPage1);
        this._NgFor_23_6 = new import16.NgFor(this._appEl_23.vcRef, this._TemplateRef_23_5, this.parentInjector.get(import33.IterableDiffers), this.ref);
        this._text_24 = this.renderer.createText(this._el_21, '\n  ', null);
        this._text_25 = this.renderer.createText(null, '\n\n', null);
        compView_14.create(this._Content_14_4, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_17,
                this._el_18,
                this._text_20,
                this._el_21,
                this._text_25
            ]),
            []
        ], null);
        this._text_26 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_27 = this.renderer.createElement(parentRenderNode, 'ion-footer', null);
        this._Footer_27_3 = new import10.Footer(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_27), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_28 = this.renderer.createText(this._el_27, '\n\n  ', null);
        this._el_29 = this.renderer.createElement(this._el_27, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_29, 'color', 'danger');
        this._appEl_29 = new import2.AppElement(29, 27, this, this._el_29);
        var compView_29 = import24.viewFactory_Toolbar0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Toolbar_29_4 = new import10.Toolbar(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_29), this.renderer);
        this._appEl_29.initComponent(this._Toolbar_29_4, [], compView_29);
        this._text_30 = this.renderer.createText(null, '\n    ', null);
        this._el_31 = this.renderer.createElement(null, 'ion-searchbar', null);
        this.renderer.setElementAttribute(this._el_31, 'placeholder', 'Search');
        this._appEl_31 = new import2.AppElement(31, 29, this, this._el_31);
        var compView_31 = import25.viewFactory_Searchbar0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Searchbar_31_4 = new import13.Searchbar(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_31), this.renderer, this.parentInjector.get(import26.NgControl, null));
        this._appEl_31.initComponent(this._Searchbar_31_4, [], compView_31);
        compView_31.create(this._Searchbar_31_4, [], null);
        this._text_32 = this.renderer.createText(null, '\n  ', null);
        compView_29.create(this._Toolbar_29_4, [
            [],
            [],
            [],
            [].concat([
                this._text_30,
                this._el_31,
                this._text_32
            ])
        ], null);
        this._text_33 = this.renderer.createText(this._el_27, '\n\n', null);
        this._text_34 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_10, 'ionInput', this.eventHandler(this._handle_ionInput_10_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var subscription_0 = this._Searchbar_10_4.ionInput.subscribe(this.eventHandler(this._handle_ionInput_10_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_16, 'ionInput', this.eventHandler(this._handle_ionInput_16_0.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        var subscription_1 = this._Searchbar_16_4.ionInput.subscribe(this.eventHandler(this._handle_ionInput_16_0.bind(this)));
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_31, 'ionInput', this.eventHandler(this._handle_ionInput_31_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var subscription_2 = this._Searchbar_31_4.ionInput.subscribe(this.eventHandler(this._handle_ionInput_31_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
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
            this._text_34
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_ApiDemoPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Searchbar) && (10 === requestNodeIndex))) {
            return this._Searchbar_10_4;
        }
        if (((token === import10.Toolbar) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Toolbar_8_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3;
        }
        if (((token === import13.Searchbar) && (16 === requestNodeIndex))) {
            return this._Searchbar_16_4;
        }
        if (((token === import32.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import16.NgFor) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6;
        }
        if (((token === import15.List) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._List_21_3;
        }
        if (((token === import14.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Content_14_4;
        }
        if (((token === import13.Searchbar) && (31 === requestNodeIndex))) {
            return this._Searchbar_31_4;
        }
        if (((token === import10.Toolbar) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Toolbar_29_4;
        }
        if (((token === import10.Footer) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Footer_27_3;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        var currVal_4 = 'Filter Items';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Searchbar_10_4.placeholder = currVal_4;
            this._expr_4 = currVal_4;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Searchbar_10_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_14_4.ngOnInit();
        }
        var currVal_12 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Searchbar_16_4.color = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_13 = '';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Searchbar_16_4.showCancelButton = currVal_13;
            this._expr_13 = currVal_13;
        }
        var currVal_14 = 'Filter Items with Cancel';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Searchbar_16_4.placeholder = currVal_14;
            this._expr_14 = currVal_14;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Searchbar_16_4.ngOnInit();
        }
        changes = null;
        var currVal_20 = this.context.items;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._NgFor_23_6.ngForOf = currVal_20;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_20, currVal_20);
            this._expr_20 = currVal_20;
        }
        if ((changes !== null)) {
            this._NgFor_23_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_23_6.ngDoCheck();
        }
        changed = false;
        var currVal_21 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._Toolbar_29_4.color = currVal_21;
            changed = true;
            this._expr_21 = currVal_21;
        }
        if (changed) {
            this._appEl_29.componentView.markAsCheckOnce();
        }
        var currVal_24 = 'Search';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Searchbar_31_4.placeholder = currVal_24;
            this._expr_24 = currVal_24;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Searchbar_31_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
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
        var currVal_2 = this._Toolbar_8_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_8, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._Searchbar_10_4._value;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_10, 'searchbar-has-value', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._Searchbar_10_4._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_10, 'searchbar-active', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Searchbar_10_4.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_10, 'searchbar-show-cancel', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._Searchbar_10_4.shouldAlignLeft();
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_10, 'searchbar-left-aligned', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._Searchbar_10_4._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_10, 'searchbar-has-focus', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._Content_14_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_15 = this._Searchbar_16_4._value;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-has-value', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._Searchbar_16_4._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-active', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._Searchbar_16_4.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-show-cancel', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._Searchbar_16_4.shouldAlignLeft();
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-left-aligned', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._Searchbar_16_4._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-has-focus', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_22 = this._Toolbar_29_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_29, 'statusbar-padding', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_25 = this._Searchbar_31_4._value;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_31, 'searchbar-has-value', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._Searchbar_31_4._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_31, 'searchbar-active', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._Searchbar_31_4.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_31, 'searchbar-show-cancel', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._Searchbar_31_4.shouldAlignLeft();
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_31, 'searchbar-left-aligned', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._Searchbar_31_4._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_31, 'searchbar-has-focus', currVal_29);
            this._expr_29 = currVal_29;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
            this._Searchbar_10_4.ngAfterViewChecked();
            this._Searchbar_16_4.ngAfterViewChecked();
            this._Searchbar_31_4.ngAfterViewChecked();
        }
    };
    _View_ApiDemoPage0.prototype.destroyInternal = function () {
        this._Content_14_4.ngOnDestroy();
    };
    _View_ApiDemoPage0.prototype._handle_ionInput_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.filterItems($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionInput_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.filterItems($event) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage0.prototype._handle_ionInput_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.filterItems($event) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage0;
}(import1.AppView));
export function viewFactory_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoPage === null)) {
        (renderType_ApiDemoPage = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/searchbar/page.html', 0, import8.ViewEncapsulation.None, styles_ApiDemoPage, {}));
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
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import36.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import34.Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import34.ItemContent();
        this._query_Label_0_0 = new import35.QueryList();
        this._query_Button_0_1 = new import35.QueryList();
        this._query_Icon_0_2 = new import35.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
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
        if (((token === import34.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4;
        }
        if (((token === import34.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
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
        var compView_0 = import39.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import38.Nav(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import40.NavControllerBase, null), this.parentInjector.get(import21.App), this.parentInjector.get(import17.Config), this.parentInjector.get(import28.Keyboard), new import18.ElementRef(this._el_0), this.parentInjector.get(import29.NgZone), this.renderer, this.parentInjector.get(import41.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import42.TransitionController), this.parentInjector.get(import43.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import38.Nav) && (0 === requestNodeIndex))) {
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
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/searchbar/app.component.ts class ApiDemoApp - inline template', 0, import8.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
