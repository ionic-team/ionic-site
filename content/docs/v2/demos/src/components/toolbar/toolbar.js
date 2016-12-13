var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { ViewController } from '../../navigation/view-controller';
/**
 * @name Header
 * @description
 * Header is a parent component that holds the navbar and toolbar component.
 * It's important to note that `ion-header` needs to be the one of the three root elements of a page
 *
 * @usage
 *
 * ```html
 * <ion-header>
 *   <ion-navbar>
 *     <ion-title>Page1</ion-title>
 *   </ion-navbar>
 *
 *   <ion-toolbar>
 *     <ion-title>Subheader</ion-title>
 *   </ion-toolbar>
 * </ion-header>
 *
 * <ion-content></ion-content>
 * ```
 *
 */
export var Header = (function (_super) {
    __extends(Header, _super);
    function Header(config, elementRef, renderer, viewCtrl) {
        _super.call(this, config, elementRef, renderer, 'header');
        viewCtrl && viewCtrl._setHeader(this);
    }
    Header.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-header'
                },] },
    ];
    /** @nocollapse */
    Header.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: ViewController, decorators: [{ type: Optional },] },
    ];
    return Header;
}(Ion));
/**
 * @name Footer
 * @description
 * Footer is a root component of a page that sits at the bottom of the page.
 * Footer can be a wrapper for `ion-toolbar` to make sure the content area is sized correctly.
 *
 * @usage
 *
 * ```html
 * <ion-content></ion-content>
 *
 * <ion-footer>
 *   <ion-toolbar>
 *     <ion-title>Footer</ion-title>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 *
 */
export var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer(config, elementRef, renderer, viewCtrl) {
        _super.call(this, config, elementRef, renderer, 'footer');
        viewCtrl && viewCtrl._setFooter(this);
    }
    Footer.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-footer'
                },] },
    ];
    /** @nocollapse */
    Footer.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: ViewController, decorators: [{ type: Optional },] },
    ];
    return Footer;
}(Ion));
/**
 * @private
 */
export var ToolbarBase = (function (_super) {
    __extends(ToolbarBase, _super);
    function ToolbarBase(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'toolbar');
    }
    /**
     * @private
     */
    ToolbarBase.prototype._setTitle = function (titleCmp) {
        this._title = titleCmp;
    };
    /**
     * @private
     * Returns the toolbar title text if it exists or an empty string
     */
    ToolbarBase.prototype.getTitleText = function () {
        return (this._title && this._title.getTitleText()) || '';
    };
    return ToolbarBase;
}(Ion));
/**
 * @name Toolbar
 * @description
 * A Toolbar is a generic bar that is positioned above or below content.
 * Unlike a [Navbar](../../navbar/Navbar), a toolbar can be used as a subheader.
 * When toolbars are placed within an `<ion-header>` or `<ion-footer>`,
 * the toolbars stay fixed in their respective location. When placed within
 * `<ion-content>`, toolbars will scroll with the content.
 *
 *
 * ### Buttons in a Toolbar
 * Buttons placed in a toolbar should be placed inside of the `<ion-buttons>`
 * element. An exception to this is a [menuToggle](../../menu/MenuToggle) button.
 * It should not be placed inside of the `<ion-buttons>` element. Both the
 * `<ion-buttons>` element and the `menuToggle` can be positioned inside of the
 * toolbar using different properties. The below chart has a description of each
 * property.
 *
 * | Property    | Description                                                                                                           |
 * |-------------|-----------------------------------------------------------------------------------------------------------------------|
 * | `start`     | Positions element to the left of the content in `ios` mode, and directly to the right in `md` and `wp` mode.    |
 * | `end`       | Positions element to the right of the content in `ios` mode, and to the far right in `md` and `wp` mode.        |
 * | `left`      | Positions element to the left of all other elements.                                                            |
 * | `right`     | Positions element to the right of all other elements.                                                           |
 *
 *
 * ### Header / Footer Box Shadow and Border
 * In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the
 * `<ion-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<ion-header>`
 * will receive a border on the bottom, and the `<ion-footer>` will receive a border on the
 * top. Both the `md` box-shadow and the `ios` border can be removed by adding the `no-border`
 * attribute to the element.
 *
 * ```html
 * <ion-header no-border>
 *   <ion-toolbar>
 *     <ion-title>Header</ion-title>
 *   </ion-toolbar>
 * </ion-header>
 *
 * <ion-content>
 * </ion-content>
 *
 * <ion-footer no-border>
 *   <ion-toolbar>
 *     <ion-title>Footer</ion-title>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 *
 * @usage
 *
 * ```html
 *
 * <ion-header no-border>
 *
 *   <ion-toolbar>
 *     <ion-title>My Toolbar Title</ion-title>
 *   </ion-toolbar>
 *
 *   <ion-toolbar>
 *     <ion-title>I'm a subheader</ion-title>
 *   </ion-toolbar>
 *
 * <ion-header>
 *
 *
 * <ion-content>
 *
 *   <ion-toolbar>
 *     <ion-title>Scrolls with the content</ion-title>
 *   </ion-toolbar>
 *
 * </ion-content>
 *
 *
 * <ion-footer no-border>
 *
 *   <ion-toolbar>
 *     <ion-title>I'm a footer</ion-title>
 *   </ion-toolbar>
 *
 * </ion-footer>
 *  ```
 *
 * @demo /docs/v2/demos/src/toolbar/
 * @see {@link ../../navbar/Navbar/ Navbar API Docs}
 */
export var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(viewCtrl, config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer);
        this._sbPadding = config.getBoolean('statusbarPadding');
    }
    Object.defineProperty(Toolbar.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Toolbar.decorators = [
        { type: Component, args: [{
                    selector: 'ion-toolbar',
                    template: '<div class="toolbar-background" [ngClass]="\'toolbar-background-\' + _mode"></div>' +
                        '<ng-content select="[menuToggle],ion-buttons[left]"></ng-content>' +
                        '<ng-content select="ion-buttons[start]"></ng-content>' +
                        '<ng-content select="ion-buttons[end],ion-buttons[right]"></ng-content>' +
                        '<div class="toolbar-content" [ngClass]="\'toolbar-content-\' + _mode">' +
                        '<ng-content></ng-content>' +
                        '</div>',
                    host: {
                        'class': 'toolbar',
                        '[class.statusbar-padding]': '_sbPadding'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    Toolbar.ctorParameters = [
        { type: ViewController, decorators: [{ type: Optional },] },
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Toolbar.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return Toolbar;
}(ToolbarBase));
//# sourceMappingURL=toolbar.js.map