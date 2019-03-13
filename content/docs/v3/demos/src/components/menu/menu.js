import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, NgZone, Output, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { App } from '../app/app';
import { Backdrop } from '../backdrop/backdrop';
import { Config } from '../../config/config';
import { isTrueProperty, assert } from '../../util/util';
import { Keyboard } from '../../util/keyboard';
import { MenuContentGesture } from './menu-gestures';
import { MenuController } from './menu-controller';
import { Platform } from '../../platform/platform';
import { GestureController, GESTURE_GO_BACK_SWIPE } from '../../gestures/gesture-controller';
import { UIEventManager } from '../../util/ui-event-manager';
import { Content } from '../content/content';
import { DomController } from '../../util/dom-controller';
/**
 * @name Menu
 * @description
 * The Menu component is a navigation drawer that slides in from the side of the current
 * view. By default, it slides in from the left, but the side can be overridden. The menu
 * will be displayed differently based on the mode, however the display type can be changed
 * to any of the available [menu types](#menu-types). The menu element should be a sibling
 * to the app's content element. There can be any number of menus attached to the content.
 * These can be controlled from the templates, or programmatically using the [MenuController](../MenuController).
 *
 *
 * ### Opening/Closing Menus
 *
 * There are several ways to open or close a menu. The menu can be **toggled** open or closed
 * from the template using the [MenuToggle](../MenuToggle) directive. It can also be
 * **closed** from the template using the [MenuClose](../MenuClose) directive. To display a menu
 * programmatically, inject the [MenuController](../MenuController) provider and call any of the
 * `MenuController` methods.
 *
 *
 * ### Menu Types
 *
 * The menu supports several display types: `overlay`, `reveal` and `push`. By default,
 * it will use the correct type based on the mode, but this can be changed. The default
 * type for both Material Design and Windows mode is `overlay`, and `reveal` is the default
 * type for iOS mode. The menu type can be changed in the app's [config](../../config/Config)
 * via the `menuType` property, or passed in the `type` property on the `<ion-menu>` element.
 * See [usage](#usage) below for examples of changing the menu type.
 *
 *
 * ### Navigation Bar Behavior
 *
 * If a [MenuToggle](../MenuToggle) button is added to the [Navbar](../../navbar/Navbar) of
 * a page, the button will only appear when the page it's in is currently a root page. The
 * root page is the initial page loaded in the app, or a page that has been set as the root
 * using the [setRoot](../../../navigation/NavController/#setRoot) method on the [NavController](../../../navigation/NavController).
 *
 * For example, say the application has two pages, `Page1` and `Page2`, and both have a
 * `MenuToggle` button in their navigation bars. Assume the initial page loaded into the app
 * is `Page1`, making it the root page. `Page1` will display the `MenuToggle` button, but once
 * `Page2` is pushed onto the navigation stack, the `MenuToggle` will not be displayed.
 *
 *
 * ### Persistent Menus
 *
 * Persistent menus display the [MenuToggle](../MenuToggle) button in the [Navbar](../../navbar/Navbar)
 * on all pages in the navigation stack. To make a menu persistent set `persistent` to `true` on the
 * `<ion-menu>` element. Note that this will only affect the `MenuToggle` button in the `Navbar` attached
 * to the `Menu` with `persistent` set to true, any other `MenuToggle` buttons will not be affected.
 *
 *
 * @usage
 *
 * To add a menu to an application, the `<ion-menu>` element should be added as a sibling to
 * the content it belongs to. A [local variable](https://angular.io/docs/ts/latest/guide/user-input.html#local-variables)
 * should be added to the content element and passed to the menu element in the `content` property.
 * This tells the menu which content it is attached to, so it knows which element to watch for
 * gestures. In the below example, `content` is using [property binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
 * because `mycontent` is a reference to the `<ion-nav>` element, and not a string.
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *     ...
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 *
 * <ion-nav #mycontent [root]="rootPage"></ion-nav>
 * ```
 *
 * ### Menu Side
 *
 * By default, menus slide in from the left, but this can be overridden by passing `right`
 * to the `side` property:
 *
 * ```html
 * <ion-menu side="right" [content]="mycontent">...</ion-menu>
 * ```
 *
 *
 * ### Menu Type
 *
 * The menu type can be changed by passing the value to `type` on the `<ion-menu>`:
 *
 * ```html
 * <ion-menu type="overlay" [content]="mycontent">...</ion-menu>
 * ```
 *
 * It can also be set in the app's config. The below will set the menu type to
 * `push` for all modes, and then set the type to `overlay` for the `ios` mode.
 *
 * ```ts
 * // in NgModules
 *
 * imports: [
 *   IonicModule.forRoot(MyApp,{
 *     menuType: 'push',
 *     platforms: {
 *       ios: {
 *         menuType: 'overlay',
 *       }
 *     }
 *   })
 * ],
 * ```
 *
 *
 * ### Displaying the Menu
 *
 * To toggle a menu from the template, add a button with the `menuToggle`
 * directive anywhere in the page's template:
 *
 * ```html
 * <button ion-button menuToggle>Toggle Menu</button>
 * ```
 *
 * To close a menu, add the `menuClose` button. It can be added anywhere
 * in the content, or even the menu itself. Below it is added to the menu's
 * content:
 *
 * ```html
 * <ion-menu [content]="mycontent">
 *   <ion-content>
 *     <ion-list>
 *       <button ion-button menuClose ion-item detail-none>Close Menu</button>
 *     </ion-list>
 *   </ion-content>
 * </ion-menu>
 * ```
 *
 * See the [MenuToggle](../MenuToggle) and [MenuClose](../MenuClose) docs
 * for more information on these directives.
 *
 * The menu can also be controlled from the Page by using the `MenuController`.
 * Inject the `MenuController` provider into the page and then call any of its
 * methods. In the below example, the `openMenu` method will open the menu
 * when it is called.
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { MenuController } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyPage {
 *  constructor(public menuCtrl: MenuController) {}
 *
 *  openMenu() {
 *    this.menuCtrl.open();
 *  }
 * }
 * ```
 *
 * See the [MenuController](../MenuController) API docs for all of the methods
 * and usage information.
 *
 *
 * @demo /docs/demos/src/menu/
 *
 * @see {@link /docs/components#menus Menu Component Docs}
 * @see {@link ../MenuController MenuController API Docs}
 * @see {@link ../../nav/Nav Nav API Docs}
 * @see {@link ../../../navigation/NavController NavController API Docs}
 */
export var Menu = (function () {
    function Menu(_menuCtrl, _elementRef, _config, _platform, _renderer, _keyboard, _zone, _gestureCtrl, _domCtrl, _app) {
        this._menuCtrl = _menuCtrl;
        this._elementRef = _elementRef;
        this._config = _config;
        this._platform = _platform;
        this._renderer = _renderer;
        this._keyboard = _keyboard;
        this._zone = _zone;
        this._gestureCtrl = _gestureCtrl;
        this._domCtrl = _domCtrl;
        this._app = _app;
        this._isEnabled = true;
        this._isSwipeEnabled = true;
        this._isAnimating = false;
        this._isPersistent = false;
        this._init = false;
        this._events = new UIEventManager();
        /**
         * @private
         */
        this.isOpen = false;
        /**
         * @output {event} When the menu is being dragged open.
         */
        this.ionDrag = new EventEmitter();
        /**
         * @output {event} When the menu has been opened.
         */
        this.ionOpen = new EventEmitter();
        /**
         * @output {event} When the menu has been closed.
         */
        this.ionClose = new EventEmitter();
        this._gestureBlocker = _gestureCtrl.createBlocker({
            disable: [GESTURE_GO_BACK_SWIPE]
        });
    }
    Object.defineProperty(Menu.prototype, "enabled", {
        /**
         * @input {boolean} Whether or not the menu should be enabled. Default `true`.
         */
        get: function () {
            return this._isEnabled;
        },
        set: function (val) {
            this._isEnabled = isTrueProperty(val);
            this._setListeners();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "swipeEnabled", {
        /**
         * @input {boolean} Whether or not swiping the menu should be enabled. Default `true`.
         */
        get: function () {
            return this._isSwipeEnabled;
        },
        set: function (val) {
            this._isSwipeEnabled = isTrueProperty(val);
            this._setListeners();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "persistent", {
        /**
         * @input {string} Whether or not the menu should persist on child pages. Default `false`.
         */
        get: function () {
            return this._isPersistent;
        },
        set: function (val) {
            this._isPersistent = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Menu.prototype.ngOnInit = function () {
        var _this = this;
        this._init = true;
        var content = this.content;
        this._cntEle = (content instanceof Node) ? content : content && content.getNativeElement && content.getNativeElement();
        // requires content element
        if (!this._cntEle) {
            return console.error('Menu: must have a [content] element to listen for drag events on. Example:\n\n<ion-menu [content]="content"></ion-menu>\n\n<ion-nav #content></ion-nav>');
        }
        // normalize the "side"
        if (this.side !== 'left' && this.side !== 'right') {
            this.side = 'left';
        }
        this.setElementAttribute('side', this.side);
        // normalize the "type"
        if (!this.type) {
            this.type = this._config.get('menuType');
        }
        this.setElementAttribute('type', this.type);
        // add the gestures
        this._gesture = new MenuContentGesture(this, this._gestureCtrl, this._domCtrl);
        // register listeners if this menu is enabled
        // check if more than one menu is on the same side
        var hasEnabledSameSideMenu = this._menuCtrl.getMenus().some(function (m) {
            return m.side === _this.side && m.enabled;
        });
        if (hasEnabledSameSideMenu) {
            // auto-disable if another menu on the same side is already enabled
            this._isEnabled = false;
        }
        this._setListeners();
        this._cntEle.classList.add('menu-content');
        this._cntEle.classList.add('menu-content-' + this.type);
        // register this menu with the app's menu controller
        this._menuCtrl.register(this);
    };
    /**
     * @private
     */
    Menu.prototype.onBackdropClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this._menuCtrl.close();
    };
    /**
     * @private
     */
    Menu.prototype._setListeners = function () {
        if (!this._init) {
            return;
        }
        var gesture = this._gesture;
        // only listen/unlisten if the menu has initialized
        if (this._isEnabled && this._isSwipeEnabled && !gesture.isListening) {
            // should listen, but is not currently listening
            console.debug('menu, gesture listen', this.side);
            gesture.listen();
        }
        else if (gesture.isListening && (!this._isEnabled || !this._isSwipeEnabled)) {
            // should not listen, but is currently listening
            console.debug('menu, gesture unlisten', this.side);
            gesture.unlisten();
        }
    };
    /**
     * @private
     */
    Menu.prototype._getType = function () {
        if (!this._type) {
            this._type = MenuController.create(this.type, this, this._platform);
            if (this._config.get('animate') === false) {
                this._type.ani.duration(0);
            }
        }
        return this._type;
    };
    /**
     * @private
     */
    Menu.prototype.setOpen = function (shouldOpen, animated) {
        var _this = this;
        if (animated === void 0) { animated = true; }
        // If the menu is disabled or it is currenly being animated, let's do nothing
        if ((shouldOpen === this.isOpen) || !this._isEnabled || this._isAnimating) {
            return Promise.resolve(this.isOpen);
        }
        this._before();
        return new Promise(function (resolve) {
            _this._getType().setOpen(shouldOpen, animated, function () {
                _this._after(shouldOpen);
                resolve(_this.isOpen);
            });
        });
    };
    /**
     * @private
     */
    Menu.prototype.canSwipe = function () {
        return this._isEnabled &&
            this._isSwipeEnabled &&
            !this._isAnimating &&
            this._app.isEnabled();
    };
    /**
     * @private
     */
    Menu.prototype.isAnimating = function () {
        return this._isAnimating;
    };
    Menu.prototype._swipeBeforeStart = function () {
        if (!this.canSwipe()) {
            assert(false, 'canSwipe() has to be true');
            return;
        }
        this._before();
    };
    Menu.prototype._swipeStart = function () {
        if (!this._isAnimating) {
            assert(false, '_isAnimating has to be true');
            return;
        }
        this._getType().setProgressStart(this.isOpen);
    };
    Menu.prototype._swipeProgress = function (stepValue) {
        if (!this._isAnimating) {
            assert(false, '_isAnimating has to be true');
            return;
        }
        this._getType().setProgessStep(stepValue);
        var ionDrag = this.ionDrag;
        if (ionDrag.observers.length > 0) {
            ionDrag.emit(stepValue);
        }
    };
    Menu.prototype._swipeEnd = function (shouldCompleteLeft, shouldCompleteRight, stepValue, velocity) {
        var _this = this;
        if (!this._isAnimating) {
            assert(false, '_isAnimating has to be true');
            return;
        }
        // user has finished dragging the menu
        var opening = !this.isOpen;
        var shouldComplete = false;
        if (opening) {
            shouldComplete = (this.side === 'right') ? shouldCompleteLeft : shouldCompleteRight;
        }
        else {
            shouldComplete = (this.side === 'right') ? shouldCompleteRight : shouldCompleteLeft;
        }
        this._getType().setProgressEnd(shouldComplete, stepValue, velocity, function (isOpen) {
            console.debug('menu, swipeEnd', _this.side);
            _this._after(isOpen);
        });
    };
    Menu.prototype._before = function () {
        assert(!this._isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.setElementClass('show-menu', true);
        this.backdrop.setElementClass('show-backdrop', true);
        this.menuContent && this.menuContent.resize();
        this._keyboard.close();
        this._isAnimating = true;
    };
    Menu.prototype._after = function (isOpen) {
        assert(this._isAnimating, '_before() should be called while animating');
        this._app.setEnabled(false, 100);
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this.isOpen = isOpen;
        this._isAnimating = false;
        this._events.unlistenAll();
        if (isOpen) {
            // Disable swipe to go back gesture
            this._gestureBlocker.block();
            this._cntEle.classList.add('menu-content-open');
            var callback = this.onBackdropClick.bind(this);
            this._events.listen(this._cntEle, 'click', callback, true);
            this._events.listen(this.backdrop.getNativeElement(), 'click', callback, true);
            this.ionOpen.emit(true);
        }
        else {
            // Enable swipe to go back gesture
            this._gestureBlocker.unblock();
            this._cntEle.classList.remove('menu-content-open');
            this.setElementClass('show-menu', false);
            this.backdrop.setElementClass('show-menu', false);
            this.ionClose.emit(true);
        }
    };
    /**
     * @private
     */
    Menu.prototype.open = function () {
        return this.setOpen(true);
    };
    /**
     * @private
     */
    Menu.prototype.close = function () {
        return this.setOpen(false);
    };
    /**
     * @private
     */
    Menu.prototype.toggle = function () {
        return this.setOpen(!this.isOpen);
    };
    /**
     * @private
     */
    Menu.prototype.enable = function (shouldEnable) {
        var _this = this;
        this.enabled = shouldEnable;
        if (!shouldEnable && this.isOpen) {
            // close if this menu is open, and should not be enabled
            this.close();
        }
        if (shouldEnable) {
            // if this menu should be enabled
            // then find all the other menus on this same side
            // and automatically disable other same side menus
            this._menuCtrl.getMenus()
                .filter(function (m) { return m.side === _this.side && m !== _this; })
                .map(function (m) { return m.enabled = false; });
        }
        // TODO
        // what happens if menu is disabled while swipping?
        return this;
    };
    /**
     * @private
     */
    Menu.prototype.swipeEnable = function (shouldEnable) {
        this.swipeEnabled = shouldEnable;
        // TODO
        // what happens if menu swipe is disabled while swipping?
        return this;
    };
    /**
     * @private
     */
    Menu.prototype.getNativeElement = function () {
        return this._elementRef.nativeElement;
    };
    /**
     * @private
     */
    Menu.prototype.getMenuElement = function () {
        return this.getNativeElement().querySelector('.menu-inner');
    };
    /**
     * @private
     */
    Menu.prototype.getContentElement = function () {
        return this._cntEle;
    };
    /**
     * @private
     */
    Menu.prototype.getBackdropElement = function () {
        return this.backdrop.getNativeElement();
    };
    /**
     * @private
     */
    Menu.prototype.width = function () {
        return this.getMenuElement().offsetWidth;
    };
    /**
     * @private
     */
    Menu.prototype.getMenuController = function () {
        return this._menuCtrl;
    };
    /**
     * @private
     */
    Menu.prototype.setElementClass = function (className, add) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
    };
    /**
     * @private
     */
    Menu.prototype.setElementAttribute = function (attributeName, value) {
        this._renderer.setElementAttribute(this._elementRef.nativeElement, attributeName, value);
    };
    /**
     * @private
     */
    Menu.prototype.ngOnDestroy = function () {
        this._menuCtrl.unregister(this);
        this._events.unlistenAll();
        this._gesture && this._gesture.destroy();
        this._type && this._type.destroy();
        this._gesture = null;
        this._type = null;
        this._cntEle = null;
    };
    Menu.decorators = [
        { type: Component, args: [{
                    selector: 'ion-menu',
                    template: '<div class="menu-inner"><ng-content></ng-content></div>' +
                        '<ion-backdrop></ion-backdrop>',
                    host: {
                        'role': 'navigation'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Menu.ctorParameters = [
        { type: MenuController, },
        { type: ElementRef, },
        { type: Config, },
        { type: Platform, },
        { type: Renderer, },
        { type: Keyboard, },
        { type: NgZone, },
        { type: GestureController, },
        { type: DomController, },
        { type: App, },
    ];
    Menu.propDecorators = {
        'backdrop': [{ type: ViewChild, args: [Backdrop,] },],
        'menuContent': [{ type: ContentChild, args: [Content,] },],
        'content': [{ type: Input },],
        'id': [{ type: Input },],
        'side': [{ type: Input },],
        'type': [{ type: Input },],
        'enabled': [{ type: Input },],
        'swipeEnabled': [{ type: Input },],
        'persistent': [{ type: Input },],
        'maxEdgeStart': [{ type: Input },],
        'ionDrag': [{ type: Output },],
        'ionOpen': [{ type: Output },],
        'ionClose': [{ type: Output },],
    };
    return Menu;
}());
//# sourceMappingURL=menu.js.map