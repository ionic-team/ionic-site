var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, EventEmitter, Input, Output, Optional, Renderer, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DeepLinker } from '../../navigation/deep-linker';
import { Ion } from '../ion';
import { isBlank } from '../../util/util';
import { NavController } from '../../navigation/nav-controller';
import { getComponent, DIRECTION_SWITCH } from '../../navigation/nav-util';
import { Platform } from '../../platform/platform';
import { TabHighlight } from './tab-highlight';
import { ViewController } from '../../navigation/view-controller';
/**
 * @name Tabs
 * @description
 * Tabs make it easy to navigate between different pages or functional
 * aspects of an app. The Tabs component, written as `<ion-tabs>`, is
 * a container of individual [Tab](../Tab/) components. Each individual `ion-tab`
 * is a declarative component for a [NavController](../../../navigation/NavController/)
 *
 * For more information on using nav controllers like Tab or [Nav](../../nav/Nav/),
 * take a look at the [NavController API Docs](../../../navigation/NavController/).
 *
 * ### Placement
 *
 * The position of the tabs relative to the content varies based on
 * the mode. The tabs are placed at the bottom of the screen
 * for iOS and Android, and at the top for Windows by default. The position can
 * be configured using the `tabsPlacement` attribute on the `<ion-tabs>` component,
 * or in an app's [config](../../config/Config/).
 * See the [Input Properties](#input-properties) below for the available
 * values of `tabsPlacement`.
 *
 * ### Layout
 *
 * The layout for all of the tabs can be defined using the `tabsLayout`
 * property. If the individual tab has a title and icon, the icons will
 * show on top of the title by default. All tabs can be changed by setting
 * the value of `tabsLayout` on the `<ion-tabs>` element, or in your
 * app's [config](../../config/Config/). For example, this is useful if
 * you want to show tabs with a title only on Android, but show icons
 * and a title for iOS. See the [Input Properties](#input-properties)
 * below for the available values of `tabsLayout`.
 *
 * ### Selecting a Tab
 *
 * There are different ways you can select a specific tab from the tabs
 * component. You can use the `selectedIndex` property to set the index
 * on the `<ion-tabs>` element, or you can call `select()` from the `Tabs`
 * instance after creation. See [usage](#usage) below for more information.
 *
 * @usage
 *
 * You can add a basic tabs template to a `@Component` using the following
 * template:
 *
 * ```html
 * <ion-tabs>
 *   <ion-tab [root]="tab1Root"></ion-tab>
 *   <ion-tab [root]="tab2Root"></ion-tab>
 *   <ion-tab [root]="tab3Root"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * Where `tab1Root`, `tab2Root`, and `tab3Root` are each a page:
 *
 *```ts
 * @Component({
 *   templateUrl: 'build/pages/tabs/tabs.html'
 * })
 * export class TabsPage {
 *   // this tells the tabs component which Pages
 *   // should be each tab's root Page
 *   tab1Root = Page1;
 *   tab2Root = Page2;
 *   tab3Root = Page3;
 *
 *   constructor() {
 *
 *   }
 * }
 *```
 *
 * By default, the first tab will be selected upon navigation to the
 * Tabs page. We can change the selected tab by using `selectedIndex`
 * on the `<ion-tabs>` element:
 *
 * ```html
 * <ion-tabs selectedIndex="2">
 *   <ion-tab [root]="tab1Root"></ion-tab>
 *   <ion-tab [root]="tab2Root"></ion-tab>
 *   <ion-tab [root]="tab3Root"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * Since the index starts at `0`, this will select the 3rd tab which has
 * root set to `tab3Root`. If you wanted to change it dynamically from
 * your class, you could use [property binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding).
 *
 * Alternatively, you can grab the `Tabs` instance and call the `select()`
 * method. This requires the `<ion-tabs>` element to have an `id`. For
 * example, set the value of `id` to `myTabs`:
 *
 * ```html
 * <ion-tabs #myTabs>
 *   <ion-tab [root]="tab1Root"></ion-tab>
 *   <ion-tab [root]="tab2Root"></ion-tab>
 *   <ion-tab [root]="tab3Root"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * Then in your class you can grab the `Tabs` instance and call `select()`,
 * passing the index of the tab as the argument. Here we're grabbing the tabs
 * by using ViewChild.
 *
 *```ts
 * export class TabsPage {
 *
 * @ViewChild('myTabs') tabRef: Tabs;
 *
 * ionViewDidEnter() {
 *   this.tabRef.select(2);
 *  }
 *
 * }
 *```
 *
 * You can also switch tabs from a child component by calling `select()` on the
 * parent view using the `NavController` instance. For example, assuming you have
 * a `TabsPage` component, you could call the following from any of the child
 * components to switch to `TabsRoot3`:
 *
 *```ts
 * switchTabs() {
 *   this.navCtrl.parent.select(2);
 * }
 *```
 * @demo /docs/demos/src/tabs/
 *
 * @see {@link /docs/components#tabs Tabs Component Docs}
 * @see {@link ../Tab Tab API Docs}
 * @see {@link ../../config/Config Config API Docs}
 *
 */
export var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(parent, viewCtrl, _app, config, elementRef, _platform, renderer, _linker) {
        _super.call(this, config, elementRef, renderer, 'tabs');
        this.viewCtrl = viewCtrl;
        this._app = _app;
        this._platform = _platform;
        this._linker = _linker;
        /** @internal */
        this._ids = -1;
        /** @internal */
        this._tabs = [];
        /** @internal */
        this._selectHistory = [];
        /**
         * @input {any} Expression to evaluate when the tab changes.
         */
        this.ionChange = new EventEmitter();
        this.parent = parent;
        this.id = 't' + (++tabIds);
        this._sbPadding = config.getBoolean('statusbarPadding');
        this.tabsHighlight = config.getBoolean('tabsHighlight');
        if (this.parent) {
            // this Tabs has a parent Nav
            this.parent.registerChildNav(this);
        }
        else if (viewCtrl && viewCtrl.getNav()) {
            // this Nav was opened from a modal
            this.parent = viewCtrl.getNav();
            this.parent.registerChildNav(this);
        }
        else if (this._app) {
            // this is the root navcontroller for the entire app
            this._app._setRootNav(this);
        }
        // Tabs may also be an actual ViewController which was navigated to
        // if Tabs is static and not navigated to within a NavController
        // then skip this and don't treat it as it's own ViewController
        if (viewCtrl) {
            viewCtrl._setContent(this);
            viewCtrl._setContentRef(elementRef);
        }
    }
    Object.defineProperty(Tabs.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (value) {
            this._setColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Tabs.prototype.ngOnDestroy = function () {
        this.parent.unregisterChildNav(this);
    };
    /**
     * @internal
     */
    Tabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._setConfig('tabsPlacement', 'bottom');
        this._setConfig('tabsLayout', 'icon-top');
        this._setConfig('tabsHighlight', this.tabsHighlight);
        if (this.tabsHighlight) {
            this._platform.onResize(function () {
                _this._highlight.select(_this.getSelected());
            });
        }
        this.initTabs();
    };
    /**
     * @internal
     */
    Tabs.prototype.initTabs = function () {
        // get the selected index from the input
        // otherwise default it to use the first index
        var selectedIndex = (isBlank(this.selectedIndex) ? 0 : parseInt(this.selectedIndex, 10));
        // now see if the deep linker can find a tab index
        var tabsSegment = this._linker.initNav(this);
        if (tabsSegment && isBlank(tabsSegment.component)) {
            // we found a segment which probably represents which tab to select
            selectedIndex = this._linker.getSelectedTabIndex(this, tabsSegment.name, selectedIndex);
        }
        // get the selectedIndex and ensure it isn't hidden or disabled
        var selectedTab = this._tabs.find(function (t, i) { return i === selectedIndex && t.enabled && t.show; });
        if (!selectedTab) {
            // wasn't able to select the tab they wanted
            // try to find the first tab that's available
            selectedTab = this._tabs.find(function (t) { return t.enabled && t.show; });
        }
        if (selectedTab) {
            // we found a tab to select
            // get the segment the deep linker says this tab should load with
            var pageId = null;
            if (tabsSegment) {
                var selectedTabSegment = this._linker.initNav(selectedTab);
                if (selectedTabSegment && selectedTabSegment.component) {
                    selectedTab.root = selectedTabSegment.component;
                    selectedTab.rootParams = selectedTabSegment.data;
                    pageId = selectedTabSegment.id;
                }
            }
            this.select(selectedTab, {
                id: pageId
            });
        }
        // set the initial href attribute values for each tab
        this._tabs.forEach(function (t) {
            t.updateHref(t.root, t.rootParams);
        });
    };
    /**
     * @internal
     */
    Tabs.prototype._setConfig = function (attrKey, fallback) {
        var val = this[attrKey];
        if (isBlank(val)) {
            val = this._config.get(attrKey, fallback);
        }
        this.setElementAttribute(attrKey, val);
    };
    /**
     * @private
     */
    Tabs.prototype.add = function (tab) {
        this._tabs.push(tab);
        return this.id + '-' + (++this._ids);
    };
    /**
     * @param {number|Tab} tabOrIndex Index, or the Tab instance, of the tab to select.
     */
    Tabs.prototype.select = function (tabOrIndex, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        var selectedTab = (typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex);
        if (isBlank(selectedTab)) {
            return;
        }
        var deselectedTab = this.getSelected();
        if (selectedTab === deselectedTab) {
            // no change
            return this._touchActive(selectedTab);
        }
        var deselectedPage;
        if (deselectedTab) {
            deselectedPage = deselectedTab.getActive();
            deselectedPage && deselectedPage._willLeave(false);
        }
        opts.animate = false;
        var selectedPage = selectedTab.getActive();
        selectedPage && selectedPage._willEnter();
        selectedTab.load(opts, function (alreadyLoaded) {
            selectedTab.ionSelect.emit(selectedTab);
            _this.ionChange.emit(selectedTab);
            if (selectedTab.root) {
                // only show the selectedTab if it has a root
                // it's possible the tab is only for opening modal's or signing out
                // and doesn't actually have content. In the case there's no content
                // for a tab then do nothing and leave the current view as is
                _this._tabs.forEach(function (tab) {
                    tab.setSelected(tab === selectedTab);
                });
                if (_this.tabsHighlight) {
                    _this._highlight.select(selectedTab);
                }
                if (opts.updateUrl !== false) {
                    _this._linker.navChange(DIRECTION_SWITCH);
                }
            }
            selectedPage && selectedPage._didEnter();
            deselectedPage && deselectedPage._didLeave();
            // track the order of which tabs have been selected, by their index
            // do not track if the tab index is the same as the previous
            if (_this._selectHistory[_this._selectHistory.length - 1] !== selectedTab.id) {
                _this._selectHistory.push(selectedTab.id);
            }
        });
    };
    /**
     * Get the previously selected Tab which is currently not disabled or hidden.
     * @param {boolean} trimHistory If the selection history should be trimmed up to the previous tab selection or not.
     * @returns {Tab}
     */
    Tabs.prototype.previousTab = function (trimHistory) {
        var _this = this;
        if (trimHistory === void 0) { trimHistory = true; }
        // walk backwards through the tab selection history
        // and find the first previous tab that is enabled and shown
        console.debug('run previousTab', this._selectHistory);
        for (var i = this._selectHistory.length - 2; i >= 0; i--) {
            var tab = this._tabs.find(function (t) { return t.id === _this._selectHistory[i]; });
            if (tab && tab.enabled && tab.show) {
                if (trimHistory) {
                    this._selectHistory.splice(i + 1);
                }
                return tab;
            }
        }
        return null;
    };
    /**
     * @param {number} index Index of the tab you want to get
     * @returns {Tab} Returns the tab who's index matches the one passed
     */
    Tabs.prototype.getByIndex = function (index) {
        return this._tabs[index];
    };
    /**
     * @return {Tab} Returns the currently selected tab
     */
    Tabs.prototype.getSelected = function () {
        for (var i = 0; i < this._tabs.length; i++) {
            if (this._tabs[i].isSelected) {
                return this._tabs[i];
            }
        }
        return null;
    };
    /**
     * @internal
     */
    Tabs.prototype.getActiveChildNav = function () {
        return this.getSelected();
    };
    /**
     * @internal
     */
    Tabs.prototype.getIndex = function (tab) {
        return this._tabs.indexOf(tab);
    };
    /**
     * @internal
     */
    Tabs.prototype.length = function () {
        return this._tabs.length;
    };
    /**
     * "Touch" the active tab, going back to the root view of the tab
     * or optionally letting the tab handle the event
     */
    Tabs.prototype._touchActive = function (tab) {
        var active = tab.getActive();
        if (active) {
            if (active._cmp && active._cmp.instance.ionSelected) {
                // if they have a custom tab selected handler, call it
                active._cmp.instance.ionSelected();
            }
            else if (tab.length() > 1) {
                // if we're a few pages deep, pop to root
                tab.popToRoot();
            }
            else if (getComponent(this._linker, tab.root) !== active.component) {
                // Otherwise, if the page we're on is not our real root, reset it to our
                // default root type
                tab.setRoot(tab.root);
            }
        }
    };
    /**
     * @internal
     * DOM WRITE
     */
    Tabs.prototype.setTabbarPosition = function (top, bottom) {
        if (this._top !== top || this._bottom !== bottom) {
            var tabbarEle = this._tabbar.nativeElement;
            tabbarEle.style.top = (top > -1 ? top + 'px' : '');
            tabbarEle.style.bottom = (bottom > -1 ? bottom + 'px' : '');
            tabbarEle.classList.add('show-tabbar');
            this._top = top;
            this._bottom = bottom;
        }
    };
    Tabs.decorators = [
        { type: Component, args: [{
                    selector: 'ion-tabs',
                    template: '<div class="tabbar" role="tablist" #tabbar>' +
                        '<a *ngFor="let t of _tabs" [tab]="t" class="tab-button" [class.tab-disabled]="!t.enabled" [class.tab-hidden]="!t.show" role="tab" href="#" (ionSelect)="select($event)">' +
                        '<ion-icon *ngIf="t.tabIcon" [name]="t.tabIcon" [isActive]="t.isSelected" class="tab-button-icon"></ion-icon>' +
                        '<span *ngIf="t.tabTitle" class="tab-button-text">{{t.tabTitle}}</span>' +
                        '<ion-badge *ngIf="t.tabBadge" class="tab-badge" [color]="t.tabBadgeStyle">{{t.tabBadge}}</ion-badge>' +
                        '<div class="button-effect"></div>' +
                        '</a>' +
                        '<div class="tab-highlight"></div>' +
                        '</div>' +
                        '<ng-content></ng-content>' +
                        '<div #portal tab-portal></div>',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Tabs.ctorParameters = [
        { type: NavController, decorators: [{ type: Optional },] },
        { type: ViewController, decorators: [{ type: Optional },] },
        { type: App, },
        { type: Config, },
        { type: ElementRef, },
        { type: Platform, },
        { type: Renderer, },
        { type: DeepLinker, },
    ];
    Tabs.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'selectedIndex': [{ type: Input },],
        'tabsLayout': [{ type: Input },],
        'tabsPlacement': [{ type: Input },],
        'tabsHighlight': [{ type: Input },],
        'ionChange': [{ type: Output },],
        '_highlight': [{ type: ViewChild, args: [TabHighlight,] },],
        '_tabbar': [{ type: ViewChild, args: ['tabbar',] },],
        'portal': [{ type: ViewChild, args: ['portal', { read: ViewContainerRef },] },],
    };
    return Tabs;
}(Ion));
var tabIds = -1;
//# sourceMappingURL=tabs.js.map