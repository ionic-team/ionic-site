var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, ElementRef, Input, Optional, NgZone, Renderer, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DeepLinker } from '../../navigation/deep-linker';
import { GestureController } from '../../gestures/gesture-controller';
import { isTrueProperty } from '../../util/util';
import { Keyboard } from '../../util/keyboard';
import { NavController } from '../../navigation/nav-controller';
import { NavControllerBase } from '../../navigation/nav-controller-base';
import { TransitionController } from '../../transitions/transition-controller';
import { ViewController } from '../../navigation/view-controller';
import { DomController } from '../../util/dom-controller';
/**
 * @name Nav
 * @description
 *
 * `ion-nav` is the declarative component for a [NavController](../../../navigation/NavController/).
 *
 * For more information on using nav controllers like Nav or [Tab](../../Tabs/Tab/),
 * take a look at the [NavController API Docs](../../../navigation/NavController/).
 *
 *
 * @usage
 * You must set a root page to be loaded initially by any Nav you create, using
 * the 'root' property:
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { GettingStartedPage } from './getting-started';
 *
 * @Component({
 *   template: `<ion-nav [root]="root"></ion-nav>`
 * })
 * class MyApp {
 *   root = GettingStartedPage;
 *
 *   constructor(){
 *   }
 * }
 * ```
 *
 * @demo /docs/v2/demos/src/navigation/
 * @see {@link /docs/v2/components#navigation Navigation Component Docs}
 */
export var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(viewCtrl, parent, app, config, keyboard, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl) {
        _super.call(this, parent, app, config, keyboard, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl);
        this._hasInit = false;
        if (viewCtrl) {
            // an ion-nav can also act as an ion-page within a parent ion-nav
            // this would happen when an ion-nav nests a child ion-nav.
            viewCtrl._setContent(this);
        }
        if (parent) {
            // this Nav has a parent Nav
            parent.registerChildNav(this);
        }
        else if (viewCtrl && viewCtrl.getNav()) {
            // this Nav was opened from a modal
            this.parent = viewCtrl.getNav();
            this.parent.registerChildNav(this);
        }
        else if (app && !app.getRootNav()) {
            // a root nav has not been registered yet with the app
            // this is the root navcontroller for the entire app
            app._setRootNav(this);
        }
    }
    Object.defineProperty(Nav.prototype, "_vp", {
        /**
         * @private
         */
        set: function (val) {
            this.setViewport(val);
        },
        enumerable: true,
        configurable: true
    });
    Nav.prototype.ngAfterViewInit = function () {
        this._hasInit = true;
        var navSegment = this._linker.initNav(this);
        if (navSegment && navSegment.component) {
            // there is a segment match in the linker
            this.setPages(this._linker.initViews(navSegment), null, null);
        }
        else if (this._root) {
            // no segment match, so use the root property
            this.push(this._root, this.rootParams, {
                isNavRoot: (this._app.getRootNav() === this)
            }, null);
        }
    };
    Nav.prototype.goToRoot = function (opts) {
        this.setRoot(this._root, this.rootParams, opts, null);
    };
    Object.defineProperty(Nav.prototype, "root", {
        /**
         * @input {Page} The Page component to load as the root page within this nav.
         */
        get: function () {
            return this._root;
        },
        set: function (page) {
            this._root = page;
            if (this._hasInit) {
                this.setRoot(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav.prototype, "swipeBackEnabled", {
        /**
         * @input {boolean} Whether it's possible to swipe-to-go-back on this nav controller or not.
         */
        get: function () {
            return this._sbEnabled;
        },
        set: function (val) {
            this._sbEnabled = isTrueProperty(val);
            this._swipeBackCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Nav.prototype.destroy = function () {
        this.destroy();
    };
    Nav.decorators = [
        { type: Component, args: [{
                    selector: 'ion-nav',
                    template: '<div #viewport nav-viewport></div>' +
                        '<div class="nav-decor"></div>',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Nav.ctorParameters = [
        { type: ViewController, decorators: [{ type: Optional },] },
        { type: NavController, decorators: [{ type: Optional },] },
        { type: App, },
        { type: Config, },
        { type: Keyboard, },
        { type: ElementRef, },
        { type: NgZone, },
        { type: Renderer, },
        { type: ComponentFactoryResolver, },
        { type: GestureController, },
        { type: TransitionController, },
        { type: DeepLinker, decorators: [{ type: Optional },] },
        { type: DomController, },
    ];
    Nav.propDecorators = {
        '_vp': [{ type: ViewChild, args: ['viewport', { read: ViewContainerRef },] },],
        'root': [{ type: Input },],
        'rootParams': [{ type: Input },],
        'swipeBackEnabled': [{ type: Input },],
    };
    return Nav;
}(NavControllerBase));
//# sourceMappingURL=nav.js.map