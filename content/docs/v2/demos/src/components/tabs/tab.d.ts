import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, NgZone, Renderer, ViewContainerRef } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DeepLinker } from '../../navigation/deep-linker';
import { GestureController } from '../../gestures/gesture-controller';
import { Keyboard } from '../../util/keyboard';
import { NavControllerBase } from '../../navigation/nav-controller-base';
import { NavOptions } from '../../navigation/nav-util';
import { TabButton } from './tab-button';
import { Tabs } from './tabs';
import { TransitionController } from '../../transitions/transition-controller';
import { ViewController } from '../../navigation/view-controller';
import { DomController } from '../../util/dom-controller';
/**
 * @name Tab
 * @description
 * The Tab component, written `<ion-tab>`, is styled based on the mode and should
 * be used in conjunction with the [Tabs](../Tabs/) component.
 *
 * Each `ion-tab` is a declarative component for a [NavController](../../../navigation/NavController/).
 * Basically, each tab is a `NavController`. For more information on using
 * navigation controllers take a look at the [NavController API Docs](../../../navigation/NavController/).
 *
 * See the [Tabs API Docs](../Tabs/) for more details on configuring Tabs.
 *
 * @usage
 *
 * To add a basic tab, you can use the following markup where the `root` property
 * is the page you want to load for that tab, `tabTitle` is the optional text to
 * display on the tab, and `tabIcon` is the optional [icon](../../icon/Icon/).
 *
 * ```html
 * <ion-tabs>
 *  <ion-tab [root]="chatRoot" tabTitle="Chat" tabIcon="chat"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * Then, in your class you can set `chatRoot` to an imported class:
 *
 * ```ts
 * import { ChatPage } from '../chat/chat';
 *
 * export class Tabs {
 *   // here we'll set the property of chatRoot to
 *   // the imported class of ChatPage
 *   chatRoot = ChatPage;
 *
 *   constructor() {
 *
 *   }
 * }
 * ```
 *
 * You can also pass some parameters to the root page of the tab through
 * `rootParams`. Below we pass `chatParams` to the Chat tab:
 *
 * ```html
 * <ion-tabs>
 *  <ion-tab [root]="chatRoot" [rootParams]="chatParams" tabTitle="Chat" tabIcon="chat"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * export class Tabs {
 *   chatRoot = ChatPage;
 *
 *   // set some user information on chatParams
 *   chatParams = {
 *     user1: "admin",
 *     user2: "ionic"
 *   };
 *
 *   constructor() {
 *
 *   }
 * }
 * ```
 *
 * And in `ChatPage` you can get the data from `NavParams`:
 *
 * ```ts
 * export class ChatPage {
 *   constructor(navParams: NavParams) {
 *     console.log("Passed params", navParams.data);
 *   }
 * }
 * ```
 *
 * Sometimes you may want to call a method instead of navigating to a new
 * page. You can use the `(ionSelect)` event to call a method on your class when
 * the tab is selected. Below is an example of presenting a modal from one of
 * the tabs.
 *
 * ```html
 * <ion-tabs>
 *   <ion-tab (ionSelect)="chat()" tabTitle="Show Modal"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * export class Tabs {
 *   constructor(public modalCtrl: ModalController) {
 *
 *   }
 *
 *   chat() {
 *     let modal = this.modalCtrl.create(ChatPage);
 *     modal.present();
 *   }
 * }
 * ```
 *
 *
 * @demo /docs/v2/demos/src/tabs/
 * @see {@link /docs/v2/components#tabs Tabs Component Docs}
 * @see {@link ../../tabs/Tabs Tabs API Docs}
 * @see {@link ../../nav/Nav Nav API Docs}
 * @see {@link ../../nav/NavController NavController API Docs}
 */
export declare class Tab extends NavControllerBase {
    private _cd;
    private linker;
    /**
     * @private
     */
    _isInitial: boolean;
    /**
     * @private
     */
    _isEnabled: boolean;
    /**
     * @private
     */
    _isShown: boolean;
    /**
     * @private
     */
    _tabId: string;
    /**
     * @private
     */
    _btnId: string;
    /**
     * @private
     */
    _loaded: boolean;
    /**
     * @private
     */
    isSelected: boolean;
    /**
     * @private
     */
    btn: TabButton;
    /**
     * @private
     */
    _tabsHideOnSubPages: boolean;
    /**
     * @input {Page} Set the root page for this tab.
     */
    root: any;
    /**
     * @input {object} Any nav-params to pass to the root page of this tab.
     */
    rootParams: any;
    /**
     * @input {string} The URL path name to represent this tab within the URL.
     */
    tabUrlPath: string;
    /**
     * @input {string} The title of the tab button.
     */
    tabTitle: string;
    /**
     * @input {string} The icon for the tab button.
     */
    tabIcon: string;
    /**
     * @input {string} The badge for the tab button.
     */
    tabBadge: string;
    /**
     * @input {string} The badge color for the tab button.
     */
    tabBadgeStyle: string;
    /**
     * @input {boolean} If the tab is enabled or not. If the tab
     * is not enabled then the tab button will still show, however,
     * the button will appear grayed out and will not be clickable.
     * Defaults to `true`.
     */
    enabled: boolean;
    /**
     * @input {boolean} If the tab button is visible within the
     * tabbar or not. Defaults to `true`.
     */
    show: boolean;
    /**
     * @input {boolean} Whether it's possible to swipe-to-go-back on this tab or not.
     */
    swipeBackEnabled: boolean;
    /**
     * @input {boolean} Whether it's possible to swipe-to-go-back on this tab or not.
     */
    tabsHideOnSubPages: boolean;
    /**
     * @output {Tab} Method to call when the current tab is selected
     */
    ionSelect: EventEmitter<Tab>;
    constructor(parent: Tabs, app: App, config: Config, keyboard: Keyboard, elementRef: ElementRef, zone: NgZone, renderer: Renderer, cfr: ComponentFactoryResolver, _cd: ChangeDetectorRef, gestureCtrl: GestureController, transCtrl: TransitionController, linker: DeepLinker, domCtrl: DomController);
    /**
     * @private
     */
    _vp: ViewContainerRef;
    /**
     * @private
     */
    ngOnInit(): void;
    /**
     * @private
     */
    load(opts: NavOptions, done?: Function): void;
    /**
     * @private
     */
    _viewAttachToDOM(viewCtrl: ViewController, componentRef: ComponentRef<any>, viewport: ViewContainerRef): void;
    /**
     * @private
     */
    setSelected(isSelected: boolean): void;
    /**
     * @private
     */
    readonly index: number;
    /**
     * @private
     */
    updateHref(component: any, data: any): void;
    /**
     * @private
     */
    destroy(): void;
}
