import { ComponentRef, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { Footer, Header } from '../components/toolbar/toolbar';
import { Navbar } from '../components/navbar/navbar';
import { NavController } from './nav-controller';
import { NavOptions, ViewState } from './nav-util';
import { NavParams } from './nav-params';
import { Content } from '../components/content/content';
/**
 * @name ViewController
 * @description
 * Access various features and information about the current view.
 * @usage
 *  ```ts
 * import { Component } from '@angular/core';
 * import { ViewController } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyPage{
 *
 *   constructor(public viewCtrl: ViewController) {}
 *
 * }
 * ```
 */
export declare class ViewController {
    component: any;
    private _cntDir;
    private _cntRef;
    private _ionCntDir;
    private _ionCntRef;
    private _hdrDir;
    private _ftrDir;
    private _isHidden;
    private _leavingOpts;
    private _nb;
    private _onDidDismiss;
    private _onWillDismiss;
    private _dismissData;
    private _dismissRole;
    private _detached;
    _cmp: ComponentRef<any>;
    _nav: NavController;
    _zIndex: number;
    _state: ViewState;
    _cssClass: string;
    /**
     * Observable to be subscribed to when the current component will become active
     * @returns {Observable} Returns an observable
     */
    willEnter: EventEmitter<any>;
    /**
     * Observable to be subscribed to when the current component has become active
     * @returns {Observable} Returns an observable
     */
    didEnter: EventEmitter<any>;
    /**
     * Observable to be subscribed to when the current component will no longer be active
     * @returns {Observable} Returns an observable
     */
    willLeave: EventEmitter<any>;
    /**
     * Observable to be subscribed to when the current component is no long active
     * @returns {Observable} Returns an observable
     */
    didLeave: EventEmitter<any>;
    /**
     * Observable to be subscribed to when the current component has been destroyed
     * @returns {Observable} Returns an observable
     */
    willUnload: EventEmitter<any>;
    /** @private */
    data: any;
    /** @private */
    instance: any;
    /** @private */
    id: string;
    /** @private */
    isOverlay: boolean;
    /** @private */
    private _emitter;
    constructor(component?: any, data?: any, rootCssClass?: string);
    /**
     * @private
     */
    init(componentRef: ComponentRef<any>): void;
    _setNav(navCtrl: NavController): void;
    _setInstance(instance: any): void;
    /**
     * @private
     */
    subscribe(generatorOrNext?: any): any;
    /**
     * @private
     */
    emit(data?: any): void;
    /**
     * Called when the current viewController has be successfully dismissed
     */
    onDidDismiss(callback: Function): void;
    /**
     * Called when the current viewController will be dismissed
     */
    onWillDismiss(callback: Function): void;
    /**
     * Dismiss the current viewController
     * @param {any} [data] Data that you want to return when the viewController is dismissed.
     * @param {any} [role ]
     * @param {NavOptions} NavOptions Options for the dismiss navigation.
     * @returns {any} data Returns the data passed in, if any.
     */
    dismiss(data?: any, role?: any, navOptions?: NavOptions): Promise<any>;
    /**
     * @private
     */
    getNav(): NavController;
    /**
     * @private
     */
    getTransitionName(direction: string): string;
    /**
     * @private
     */
    getNavParams(): NavParams;
    /**
     * @private
     */
    setLeavingOpts(opts: NavOptions): void;
    /**
     * Check to see if you can go back in the navigation stack.
     * @returns {boolean} Returns if it's possible to go back from this Page.
     */
    enableBack(): boolean;
    /**
     * @private
     */
    readonly name: string;
    /**
     * Get the index of the current component in the current navigation stack.
     * @returns {number} Returns the index of this page within its `NavController`.
     */
    readonly index: number;
    /**
     * @returns {boolean} Returns if this Page is the first in the stack of pages within its NavController.
     */
    isFirst(): boolean;
    /**
     * @returns {boolean} Returns if this Page is the last in the stack of pages within its NavController.
     */
    isLast(): boolean;
    /**
     * @private
     * DOM WRITE
     */
    _domShow(shouldShow: boolean, renderer: Renderer): void;
    /**
     * @private
     */
    getZIndex(): number;
    /**
     * @private
     * DOM WRITE
     */
    _setZIndex(zIndex: number, renderer: Renderer): void;
    /**
     * @returns {ElementRef} Returns the Page's ElementRef.
     */
    pageRef(): ElementRef;
    _setContent(directive: any): void;
    /**
     * @returns {component} Returns the Page's Content component reference.
     */
    getContent(): any;
    _setContentRef(elementRef: ElementRef): void;
    /**
     * @returns {ElementRef} Returns the Content's ElementRef.
     */
    contentRef(): ElementRef;
    _setIONContent(content: Content): void;
    /**
     * @private
     */
    getIONContent(): Content;
    _setIONContentRef(elementRef: ElementRef): void;
    /**
     * @private
     */
    getIONContentRef(): ElementRef;
    _setHeader(directive: Header): void;
    /**
     * @private
     */
    getHeader(): Header;
    _setFooter(directive: Footer): void;
    /**
     * @private
     */
    getFooter(): Footer;
    _setNavbar(directive: Navbar): void;
    /**
     * @private
     */
    getNavbar(): Navbar;
    /**
     * Find out if the current component has a NavBar or not. Be sure
     * to wrap this in an `ionViewWillEnter` method in order to make sure
     * the view has rendered fully.
     * @returns {boolean} Returns a boolean if this Page has a navbar or not.
     */
    hasNavbar(): boolean;
    /**
     * Change the title of the back-button. Be sure to call this
     * after `ionViewWillEnter` to make sure the  DOM has been rendered.
     * @param {string} backButtonText Set the back button text.
     */
    setBackButtonText(val: string): void;
    /**
     * Set if the back button for the current view is visible or not. Be sure to call this
     * after `ionViewWillEnter` to make sure the  DOM has been rendered.
     * @param {boolean} Set if this Page's back button should show or not.
     */
    showBackButton(shouldShow: boolean): void;
    _preLoad(): void;
    /**
     * @private
     * The view has loaded. This event only happens once per view will be created.
     * This event is fired before the component and his children have been initialized.
     */
    _willLoad(): void;
    /**
     * @private
     * The view has loaded. This event only happens once per view being
     * created. If a view leaves but is cached, then this will not
     * fire again on a subsequent viewing. This method is a good place
     * to put your setup code for the view; however, it is not the
     * recommended method to use when a view becomes active.
     */
    _didLoad(): void;
    /**
     * @private
     * The view is about to enter and become the active view.
     */
    _willEnter(): void;
    /**
     * @private
     * The view has fully entered and is now the active view. This
     * will fire, whether it was the first load or loaded from the cache.
     */
    _didEnter(): void;
    /**
     * @private
     * The view has is about to leave and no longer be the active view.
     */
    _willLeave(willUnload: boolean): void;
    /**
     * @private
     * The view has finished leaving and is no longer the active view. This
     * will fire, whether it is cached or unloaded.
     */
    _didLeave(): void;
    /**
     * @private
     */
    _willUnload(): void;
    /**
     * @private
     * DOM WRITE
     */
    _destroy(renderer: Renderer): void;
    /**
     * @private
     */
    _lifecycleTest(lifecycle: string): boolean | Promise<any>;
    _lifecycle(lifecycle: string): void;
}
export declare function isViewController(viewCtrl: any): boolean;
