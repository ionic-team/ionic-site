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
import * as import15 from 'ionic-angular/components/list/list';
import * as import16 from 'ionic-angular/components/item/item';
import * as import17 from 'ionic-angular/components/list/list-header';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/navigation/nav-controller';
import * as import26 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import27 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import33 from 'ionic-angular/util/form';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from 'ionic-angular/components/item/item-sliding';
import * as import37 from 'ionic-angular/components/avatar/avatar';
import * as import38 from 'ionic-angular/components/note/note';
import * as import39 from 'ionic-angular/components/button/button';
import * as import40 from 'ionic-angular/components/icon/icon';
import * as import41 from 'ionic-angular/components/spinner/spinner';
import * as import42 from '../../node_modules/ionic-angular/components/item/item-sliding.ngfactory';
import * as import43 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import44 from '../../node_modules/ionic-angular/components/spinner/spinner.ngfactory';
import * as import45 from '@angular/core/src/security';
import * as import46 from 'ionic-angular/components/nav/nav';
import * as import47 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import48 from 'ionic-angular/navigation/nav-controller-base';
import * as import49 from '@angular/core/src/linker/component_factory_resolver';
import * as import50 from 'ionic-angular/transitions/transition-controller';
import * as import51 from 'ionic-angular/navigation/deep-linker';
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
var styles_ApiDemoPage = ['\n  /* TODO: spinner is dropping classes so we have to use ids: https://github.com/driftyco/ionic/issues/7087 */\n  #archive-spinner,\n  #download-spinner,\n  .archiving .expand-hide,\n  .downloading .expand-hide {\n    display: none;\n  }\n\n  /* TODO: spinner doesn\'t have a good way to do this yet: https://github.com/driftyco/ionic/issues/7087 */\n  #archive-spinner.spinner-ios line,\n  #archive-spinner.spinner-crescent circle {\n    stroke: #fff;\n  }\n\n  #archive-spinner.spinner-circles circle {\n    fill: #fff;\n  }\n\n  .archiving #archive-spinner,\n  .downloading #download-spinner {\n    display: block;\n  }\n\n  .chat-sliding-demo ion-note {\n    font-size: 13px;\n    margin-top: -8px;\n  }\n\n  .chat-sliding-demo img {\n    pointer-events: none;\n  }\n\n  .login-sliding-demo .ion-logo-twitter {\n    color: #53ACEB;\n  }\n\n  .login-sliding-demo .ion-logo-github {\n    color: #000000;\n  }\n\n  .login-sliding-demo .ion-logo-instagram {\n    color: #235D8D;\n  }\n'];
var renderType_ApiDemoPage = null;
var _View_ApiDemoPage0 = (function (_super) {
    __extends(_View_ApiDemoPage0, _super);
    function _View_ApiDemoPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage0, renderType_ApiDemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import26.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Item Sliding', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'outer-content');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import27.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import28.Keyboard), this.parentInjector.get(import29.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'chat-sliding-demo');
        this._List_11_3 = new import15.List(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import32.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import16.Item(this.parentInjector.get(import33.Form), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import17.ListHeader(this.parentInjector.get(import20.Config), this.renderer, new import21.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import18.QueryList();
        this._query_Button_13_1 = new import18.QueryList();
        this._query_Icon_13_2 = new import18.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Chats\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n\n    ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_16 = new import2.AppElement(16, 11, this, this._anchor_16);
        this._TemplateRef_16_5 = new import34.TemplateRef_(this._appEl_16, viewFactory_ApiDemoPage1);
        this._NgFor_16_6 = new import19.NgFor(this._appEl_16.vcRef, this._TemplateRef_16_5, this.parentInjector.get(import35.IterableDiffers), this.ref);
        this._text_17 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_18 = this.renderer.createText(null, '\n\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-list', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'login-sliding-demo');
        this._List_19_3 = new import15.List(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_19), this.renderer, this.parentInjector.get(import31.GestureController));
        this._text_20 = this.renderer.createText(this._el_19, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'item');
        this._appEl_21 = new import2.AppElement(21, 19, this, this._el_21);
        var compView_21 = import32.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import16.Item(this.parentInjector.get(import33.Form), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_21), this.renderer);
        this._ListHeader_21_5 = new import17.ListHeader(this.parentInjector.get(import20.Config), this.renderer, new import21.ElementRef(this._el_21), null);
        this._query_Label_21_0 = new import18.QueryList();
        this._query_Button_21_1 = new import18.QueryList();
        this._query_Icon_21_2 = new import18.QueryList();
        this._appEl_21.initComponent(this._Item_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      Logins\n    ', null);
        this._query_Label_21_0.reset([]);
        this._Item_21_4.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4, [
            [],
            [],
            [].concat([this._text_22]),
            [],
            []
        ], null);
        this._text_23 = this.renderer.createText(this._el_19, '\n\n    ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._appEl_24 = new import2.AppElement(24, 19, this, this._anchor_24);
        this._TemplateRef_24_5 = new import34.TemplateRef_(this._appEl_24, viewFactory_ApiDemoPage2);
        this._NgFor_24_6 = new import19.NgFor(this._appEl_24.vcRef, this._TemplateRef_24_5, this.parentInjector.get(import35.IterableDiffers), this.ref);
        this._text_25 = this.renderer.createText(this._el_19, '\n\n  ', null);
        this._text_26 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_18,
                this._el_19,
                this._text_26
            ]),
            []
        ], null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
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
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [], []);
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
        if (((token === import16.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4;
        }
        if (((token === import17.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5;
        }
        if (((token === import34.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import19.NgFor) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6;
        }
        if (((token === import15.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._List_11_3;
        }
        if (((token === import16.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Item_21_4;
        }
        if (((token === import17.ListHeader) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._ListHeader_21_5;
        }
        if (((token === import34.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import19.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6;
        }
        if (((token === import15.List) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._List_19_3;
        }
        if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_3 = this.context.chats;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgFor_16_6.ngForOf = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgFor_16_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_16_6.ngDoCheck();
        }
        changes = null;
        var currVal_4 = this.context.logins;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_24_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_24_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_24_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_21_1.dirty) {
                this._query_Button_21_1.reset([]);
                this._Item_21_4._buttons = this._query_Button_21_1;
                this._query_Button_21_1.notifyOnChanges();
            }
            if (this._query_Icon_21_2.dirty) {
                this._query_Icon_21_2.reset([]);
                this._Item_21_4._icons = this._query_Icon_21_2;
                this._query_Icon_21_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.ngAfterContentInit();
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
        this._el_0 = this.renderer.createElement(null, 'ion-item-sliding', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import42.viewFactory_ItemSliding0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ItemSliding_0_4 = new import36.ItemSliding(this.parent._List_11_3, this.renderer, new import21.ElementRef(this._el_0), this.parent.parentInjector.get(import29.NgZone));
        this._query_Item_0_0 = new import18.QueryList();
        this._query_ItemOptions_0_1 = new import18.QueryList();
        this._appEl_0.initComponent(this._ItemSliding_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item item-block');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import32.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import16.Item(this.parent.parentInjector.get(import33.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._ItemContent_2_5 = new import16.ItemContent();
        this._query_Label_2_0 = new import18.QueryList();
        this._query_Button_2_1 = new import18.QueryList();
        this._query_Icon_2_2 = new import18.QueryList();
        this._appEl_2.initComponent(this._Item_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_4, 'item-left', '');
        this._Avatar_4_3 = new import37.Avatar();
        this._text_5 = this.renderer.createText(this._el_4, '\n          ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'img', null);
        this._text_7 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        this._el_9 = this.renderer.createElement(null, 'h2', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(null, '\n        ', null);
        this._el_12 = this.renderer.createElement(null, 'p', null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(null, '\n        ', null);
        this._el_15 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_15, 'item-right', '');
        this._Note_15_3 = new import38.Note();
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4, [
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11,
                this._el_12,
                this._text_14,
                this._text_17
            ]),
            [],
            [].concat([this._el_15])
        ], null);
        this._text_18 = this.renderer.createText(null, '\n\n      ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-item-options', null);
        this._ItemOptions_19_3 = new import36.ItemOptions(new import21.ElementRef(this._el_19), this.renderer);
        this._text_20 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_21, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_21, 'ion-button', '');
        this._appEl_21 = new import2.AppElement(21, 19, this, this._el_21);
        var compView_21 = import43.viewFactory_Button0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Button_21_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_21), this.renderer);
        this._appEl_21.initComponent(this._Button_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n          ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this._Icon_23_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(null, '\n          More\n        ', null);
        compView_21.create(this._Button_21_4, [[].concat([
                this._text_22,
                this._el_23,
                this._text_24
            ])], null);
        this._text_25 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_26 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_26, 'ion-button', '');
        this._appEl_26 = new import2.AppElement(26, 19, this, this._el_26);
        var compView_26 = import43.viewFactory_Button0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Button_26_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_26), this.renderer);
        this._appEl_26.initComponent(this._Button_26_4, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n          ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_28, 'name', 'volume-off');
        this.renderer.setElementAttribute(this._el_28, 'role', 'img');
        this._Icon_28_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_28), this.renderer);
        this._text_29 = this.renderer.createText(null, '\n          Mute\n        ', null);
        compView_26.create(this._Button_26_4, [[].concat([
                this._text_27,
                this._el_28,
                this._text_29
            ])], null);
        this._text_30 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_19, 'button', null);
        this.renderer.setElementAttribute(this._el_31, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_31, 'ion-button', '');
        this._appEl_31 = new import2.AppElement(31, 19, this, this._el_31);
        var compView_31 = import43.viewFactory_Button0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Button_31_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_31), this.renderer);
        this._appEl_31.initComponent(this._Button_31_4, [], compView_31);
        this._text_32 = this.renderer.createText(null, '\n          ', null);
        this._el_33 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_33, 'name', 'trash');
        this.renderer.setElementAttribute(this._el_33, 'role', 'img');
        this._Icon_33_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_33), this.renderer);
        this._text_34 = this.renderer.createText(null, '\n          Delete\n        ', null);
        compView_31.create(this._Button_31_4, [[].concat([
                this._text_32,
                this._el_33,
                this._text_34
            ])], null);
        this._text_35 = this.renderer.createText(this._el_19, '\n      ', null);
        this._text_36 = this.renderer.createText(null, '\n\n      ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-item-options', null);
        this.renderer.setElementAttribute(this._el_37, 'side', 'left');
        this._ItemOptions_37_3 = new import36.ItemOptions(new import21.ElementRef(this._el_37), this.renderer);
        this._text_38 = this.renderer.createText(this._el_37, '\n        ', null);
        this._el_39 = this.renderer.createElement(this._el_37, 'button', null);
        this.renderer.setElementAttribute(this._el_39, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_39, 'expandable', '');
        this.renderer.setElementAttribute(this._el_39, 'ion-button', '');
        this._appEl_39 = new import2.AppElement(39, 37, this, this._el_39);
        var compView_39 = import43.viewFactory_Button0(this.viewUtils, this.injector(39), this._appEl_39);
        this._Button_39_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_39), this.renderer);
        this._appEl_39.initComponent(this._Button_39_4, [], compView_39);
        this._text_40 = this.renderer.createText(null, '\n          ', null);
        this._el_41 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'expand-hide');
        this.renderer.setElementAttribute(this._el_41, 'name', 'archive');
        this.renderer.setElementAttribute(this._el_41, 'role', 'img');
        this._Icon_41_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_41), this.renderer);
        this._text_42 = this.renderer.createText(null, '\n          ', null);
        this._el_43 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'expand-hide');
        this._text_44 = this.renderer.createText(this._el_43, 'Archive', null);
        this._text_45 = this.renderer.createText(null, '\n          ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_46, 'id', 'archive-spinner');
        this._appEl_46 = new import2.AppElement(46, 39, this, this._el_46);
        var compView_46 = import44.viewFactory_Spinner0(this.viewUtils, this.injector(46), this._appEl_46);
        this._Spinner_46_4 = new import41.Spinner(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_46), this.renderer);
        this._appEl_46.initComponent(this._Spinner_46_4, [], compView_46);
        compView_46.create(this._Spinner_46_4, [], null);
        this._text_47 = this.renderer.createText(null, '\n        ', null);
        compView_39.create(this._Button_39_4, [[].concat([
                this._text_40,
                this._el_41,
                this._text_42,
                this._el_43,
                this._text_45,
                this._el_46,
                this._text_47
            ])], null);
        this._text_48 = this.renderer.createText(this._el_37, '\n      ', null);
        this._text_49 = this.renderer.createText(null, '\n    ', null);
        this._query_Item_0_0.reset([this._Item_2_4]);
        this._ItemSliding_0_4.item = this._query_Item_0_0.first;
        compView_0.create(this._ItemSliding_0_4, [
            [].concat([this._el_2]),
            [].concat([
                this._el_19,
                this._el_37
            ])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_26, 'click', this.eventHandler(this._handle_click_26_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_31, 'click', this.eventHandler(this._handle_click_31_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_37, 'ionSwipe', this.eventHandler(this._handle_ionSwipe_37_0.bind(this)));
        this._expr_17 = import7.UNINITIALIZED;
        var subscription_0 = this._ItemOptions_37_3.ionSwipe.subscribe(this.eventHandler(this._handle_ionSwipe_37_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_39, 'click', this.eventHandler(this._handle_click_39_0.bind(this)));
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.Avatar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Avatar_4_3;
        }
        if (((token === import38.Note) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Note_15_3;
        }
        if (((token === import16.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Item_2_4;
        }
        if (((token === import16.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ItemContent_2_5;
        }
        if (((token === import40.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3;
        }
        if (((token === import39.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_21_4;
        }
        if (((token === import40.Icon) && (28 === requestNodeIndex))) {
            return this._Icon_28_3;
        }
        if (((token === import39.Button) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Button_26_4;
        }
        if (((token === import40.Icon) && (33 === requestNodeIndex))) {
            return this._Icon_33_3;
        }
        if (((token === import39.Button) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Button_31_4;
        }
        if (((token === import36.ItemOptions) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ItemOptions_19_3;
        }
        if (((token === import40.Icon) && (41 === requestNodeIndex))) {
            return this._Icon_41_3;
        }
        if (((token === import41.Spinner) && (46 === requestNodeIndex))) {
            return this._Spinner_46_4;
        }
        if (((token === import39.Button) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Button_39_4;
        }
        if (((token === import36.ItemOptions) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemOptions_37_3;
        }
        if (((token === import36.ItemSliding) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._ItemSliding_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        changed = false;
        var currVal_5 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Button_21_4.color = currVal_5;
            changed = true;
            this._expr_5 = currVal_5;
        }
        if (changed) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        var currVal_6 = 'menu';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_23_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        changed = false;
        var currVal_9 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Button_26_4.color = currVal_9;
            changed = true;
            this._expr_9 = currVal_9;
        }
        if (changed) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        var currVal_10 = 'volume-off';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Icon_28_3.name = currVal_10;
            this._expr_10 = currVal_10;
        }
        changed = false;
        var currVal_13 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Button_31_4.color = currVal_13;
            changed = true;
            this._expr_13 = currVal_13;
        }
        if (changed) {
            this._appEl_31.componentView.markAsCheckOnce();
        }
        var currVal_14 = 'trash';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Icon_33_3.name = currVal_14;
            this._expr_14 = currVal_14;
        }
        var currVal_17 = 'left';
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._ItemOptions_37_3.side = currVal_17;
            this._expr_17 = currVal_17;
        }
        changed = false;
        var currVal_19 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._Button_39_4.color = currVal_19;
            changed = true;
            this._expr_19 = currVal_19;
        }
        if (changed) {
            this._appEl_39.componentView.markAsCheckOnce();
        }
        var currVal_20 = 'archive';
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this._Icon_41_3.name = currVal_20;
            this._expr_20 = currVal_20;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_46_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if (this._query_ItemOptions_0_1.dirty) {
                this._query_ItemOptions_0_1.reset([
                    this._ItemOptions_19_3,
                    this._ItemOptions_37_3
                ]);
                this._ItemSliding_0_4._itemOptions = this._query_ItemOptions_0_1;
                this._query_ItemOptions_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_21_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_26_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_31_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_39_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this.context.$implicit.img;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_6, 'src', this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_10, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.message, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_13, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '\n          ', this.context.$implicit.time, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_16, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_7 = this._Icon_23_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_11 = this._Icon_28_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_28, 'hide', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_15 = this._Icon_33_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_33, 'hide', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_21 = this._Icon_41_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_41, 'hide', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this._Spinner_46_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_46, 'spinner-paused', currVal_22);
            this._expr_22 = currVal_22;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage1.prototype.destroyInternal = function () {
        this._Icon_23_3.ngOnDestroy();
        this._Icon_28_3.ngOnDestroy();
        this._Icon_33_3.ngOnDestroy();
        this._Icon_41_3.ngOnDestroy();
    };
    _View_ApiDemoPage1.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.more(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_click_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.mute(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_click_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.delete(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_ionSwipe_37_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.archive(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage1.prototype._handle_click_39_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.archive(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage1;
}(import1.AppView));
function viewFactory_ApiDemoPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage1(viewUtils, parentInjector, declarationEl);
}
var _View_ApiDemoPage2 = (function (_super) {
    __extends(_View_ApiDemoPage2, _super);
    function _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoPage2, renderType_ApiDemoPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item-sliding', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import42.viewFactory_ItemSliding0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ItemSliding_0_4 = new import36.ItemSliding(this.parent._List_19_3, this.renderer, new import21.ElementRef(this._el_0), this.parent.parentInjector.get(import29.NgZone));
        this._query_Item_0_0 = new import18.QueryList();
        this._query_ItemOptions_0_1 = new import18.QueryList();
        this._appEl_0.initComponent(this._ItemSliding_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item item-block');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import32.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import16.Item(this.parent.parentInjector.get(import33.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._ItemContent_2_5 = new import16.ItemContent();
        this._query_Label_2_0 = new import18.QueryList();
        this._query_Button_2_1 = new import18.QueryList();
        this._query_Icon_2_2 = new import18.QueryList();
        this._appEl_2.initComponent(this._Item_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_4, 'item-left', '');
        this.renderer.setElementAttribute(this._el_4, 'role', 'img');
        this._Icon_4_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer);
        this._text_5 = this.renderer.createText(null, '\n        ', null);
        this._el_6 = this.renderer.createElement(null, 'h2', null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        this._el_9 = this.renderer.createElement(null, 'p', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4, [
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_5,
                this._el_6,
                this._text_8,
                this._el_9,
                this._text_11
            ]),
            [],
            []
        ], null);
        this._text_12 = this.renderer.createText(null, '\n      ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-item-options', null);
        this.renderer.setElementAttribute(this._el_13, 'side', 'left');
        this._ItemOptions_13_3 = new import36.ItemOptions(new import21.ElementRef(this._el_13), this.renderer);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'color', 'danger');
        this.renderer.setElementAttribute(this._el_15, 'ion-button', '');
        this._appEl_15 = new import2.AppElement(15, 13, this, this._el_15);
        var compView_15 = import43.viewFactory_Button0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Button_15_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_15), this.renderer);
        this._appEl_15.initComponent(this._Button_15_4, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n          ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_17, 'name', 'trash');
        this.renderer.setElementAttribute(this._el_17, 'role', 'img');
        this._Icon_17_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(null, '\n        ', null);
        compView_15.create(this._Button_15_4, [[].concat([
                this._text_16,
                this._el_17,
                this._text_18
            ])], null);
        this._text_19 = this.renderer.createText(this._el_13, '\n      ', null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-item-options', null);
        this.renderer.setElementAttribute(this._el_21, 'icon-left', '');
        this._ItemOptions_21_3 = new import36.ItemOptions(new import21.ElementRef(this._el_21), this.renderer);
        this._text_22 = this.renderer.createText(this._el_21, '\n        ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'button', null);
        this.renderer.setElementAttribute(this._el_23, 'color', 'dark');
        this.renderer.setElementAttribute(this._el_23, 'ion-button', '');
        this._appEl_23 = new import2.AppElement(23, 21, this, this._el_23);
        var compView_23 = import43.viewFactory_Button0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Button_23_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_23), this.renderer);
        this._appEl_23.initComponent(this._Button_23_4, [], compView_23);
        this._text_24 = this.renderer.createText(null, '\n          ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_25, 'name', 'volume-off');
        this.renderer.setElementAttribute(this._el_25, 'role', 'img');
        this._Icon_25_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_25), this.renderer);
        this._text_26 = this.renderer.createText(null, '\n          Mute\n        ', null);
        compView_23.create(this._Button_23_4, [[].concat([
                this._text_24,
                this._el_25,
                this._text_26
            ])], null);
        this._text_27 = this.renderer.createText(this._el_21, '\n        ', null);
        this._el_28 = this.renderer.createElement(this._el_21, 'button', null);
        this.renderer.setElementAttribute(this._el_28, 'color', 'light');
        this.renderer.setElementAttribute(this._el_28, 'expandable', '');
        this.renderer.setElementAttribute(this._el_28, 'ion-button', '');
        this._appEl_28 = new import2.AppElement(28, 21, this, this._el_28);
        var compView_28 = import43.viewFactory_Button0(this.viewUtils, this.injector(28), this._appEl_28);
        this._Button_28_4 = new import39.Button(null, '', this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_28), this.renderer);
        this._appEl_28.initComponent(this._Button_28_4, [], compView_28);
        this._text_29 = this.renderer.createText(null, '\n          ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'expand-hide');
        this.renderer.setElementAttribute(this._el_30, 'name', 'download');
        this.renderer.setElementAttribute(this._el_30, 'role', 'img');
        this._Icon_30_3 = new import40.Icon(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_30), this.renderer);
        this._text_31 = this.renderer.createText(null, '\n          ', null);
        this._el_32 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'expand-hide');
        this._text_33 = this.renderer.createText(this._el_32, 'Download', null);
        this._text_34 = this.renderer.createText(null, '\n          ', null);
        this._el_35 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_35, 'id', 'download-spinner');
        this._appEl_35 = new import2.AppElement(35, 28, this, this._el_35);
        var compView_35 = import44.viewFactory_Spinner0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Spinner_35_4 = new import41.Spinner(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_35), this.renderer);
        this._appEl_35.initComponent(this._Spinner_35_4, [], compView_35);
        compView_35.create(this._Spinner_35_4, [], null);
        this._text_36 = this.renderer.createText(null, '\n        ', null);
        compView_28.create(this._Button_28_4, [[].concat([
                this._text_29,
                this._el_30,
                this._text_31,
                this._el_32,
                this._text_34,
                this._el_35,
                this._text_36
            ])], null);
        this._text_37 = this.renderer.createText(this._el_21, '\n      ', null);
        this._text_38 = this.renderer.createText(null, '\n    ', null);
        this._query_Item_0_0.reset([this._Item_2_4]);
        this._ItemSliding_0_4.item = this._query_Item_0_0.first;
        compView_0.create(this._ItemSliding_0_4, [
            [].concat([this._el_2]),
            [].concat([
                this._el_13,
                this._el_21
            ])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'ionSwipe', this.eventHandler(this._handle_ionSwipe_21_0.bind(this)));
        var subscription_0 = this._ItemOptions_21_3.ionSwipe.subscribe(this.eventHandler(this._handle_ionSwipe_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_23, 'click', this.eventHandler(this._handle_click_23_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_28, 'click', this.eventHandler(this._handle_click_28_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], [subscription_0]);
        return null;
    };
    _View_ApiDemoPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.Icon) && (4 === requestNodeIndex))) {
            return this._Icon_4_3;
        }
        if (((token === import16.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Item_2_4;
        }
        if (((token === import16.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ItemContent_2_5;
        }
        if (((token === import40.Icon) && (17 === requestNodeIndex))) {
            return this._Icon_17_3;
        }
        if (((token === import39.Button) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_15_4;
        }
        if (((token === import36.ItemOptions) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemOptions_13_3;
        }
        if (((token === import40.Icon) && (25 === requestNodeIndex))) {
            return this._Icon_25_3;
        }
        if (((token === import39.Button) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Button_23_4;
        }
        if (((token === import40.Icon) && (30 === requestNodeIndex))) {
            return this._Icon_30_3;
        }
        if (((token === import41.Spinner) && (35 === requestNodeIndex))) {
            return this._Spinner_35_4;
        }
        if (((token === import39.Button) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Button_28_4;
        }
        if (((token === import36.ItemOptions) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._ItemOptions_21_3;
        }
        if (((token === import36.ItemSliding) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ItemSliding_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoPage2.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var currVal_0 = this.context.$implicit.icon;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Icon_4_3.name = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_4 = 'left';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._ItemOptions_13_3.side = currVal_4;
            this._expr_4 = currVal_4;
        }
        changed = false;
        var currVal_5 = 'danger';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Button_15_4.color = currVal_5;
            changed = true;
            this._expr_5 = currVal_5;
        }
        if (changed) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        var currVal_6 = 'trash';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_17_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        changed = false;
        var currVal_10 = 'dark';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Button_23_4.color = currVal_10;
            changed = true;
            this._expr_10 = currVal_10;
        }
        if (changed) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        var currVal_11 = 'volume-off';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Icon_25_3.name = currVal_11;
            this._expr_11 = currVal_11;
        }
        changed = false;
        var currVal_14 = 'light';
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._Button_28_4.color = currVal_14;
            changed = true;
            this._expr_14 = currVal_14;
        }
        if (changed) {
            this._appEl_28.componentView.markAsCheckOnce();
        }
        var currVal_15 = 'download';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Icon_30_3.name = currVal_15;
            this._expr_15 = currVal_15;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_35_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([this._Icon_4_3]);
                this._Item_2_4._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if (this._query_ItemOptions_0_1.dirty) {
                this._query_ItemOptions_0_1.reset([
                    this._ItemOptions_13_3,
                    this._ItemOptions_21_3
                ]);
                this._ItemSliding_0_4._itemOptions = this._query_ItemOptions_0_1;
                this._query_ItemOptions_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_15_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_23_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_28_4.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Icon_4_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_4, 'hide', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_7, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.username, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_7 = this._Icon_17_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_17, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_12 = this._Icon_25_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_25, 'hide', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_16 = this._Icon_30_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_30, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._Spinner_35_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_35, 'spinner-paused', currVal_17);
            this._expr_17 = currVal_17;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ApiDemoPage2.prototype.destroyInternal = function () {
        this._Icon_4_3.ngOnDestroy();
        this._Icon_17_3.ngOnDestroy();
        this._Icon_25_3.ngOnDestroy();
        this._Icon_30_3.ngOnDestroy();
    };
    _View_ApiDemoPage2.prototype._handle_ionSwipe_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.download(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage2.prototype._handle_click_23_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.more(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    _View_ApiDemoPage2.prototype._handle_click_28_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.download(this._ItemSliding_0_4) !== false);
        return (true && pd_0);
    };
    return _View_ApiDemoPage2;
}(import1.AppView));
function viewFactory_ApiDemoPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ApiDemoPage2(viewUtils, parentInjector, declarationEl);
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
        var compView_0 = import47.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import46.Nav(this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import48.NavControllerBase, null), this.parentInjector.get(import24.App), this.parentInjector.get(import20.Config), this.parentInjector.get(import28.Keyboard), new import21.ElementRef(this._el_0), this.parentInjector.get(import29.NgZone), this.renderer, this.parentInjector.get(import49.ComponentFactoryResolver), this.parentInjector.get(import31.GestureController), this.parentInjector.get(import50.TransitionController), this.parentInjector.get(import51.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import46.Nav) && (0 === requestNodeIndex))) {
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
