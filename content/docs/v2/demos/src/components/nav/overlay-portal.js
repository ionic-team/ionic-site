var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ComponentFactoryResolver, Directive, ElementRef, forwardRef, Inject, Input, NgZone, Optional, Renderer, ViewContainerRef } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DeepLinker } from '../../navigation/deep-linker';
import { GestureController } from '../../gestures/gesture-controller';
import { Keyboard } from '../../util/keyboard';
import { NavControllerBase } from '../../navigation/nav-controller-base';
import { TransitionController } from '../../transitions/transition-controller';
import { DomController } from '../../util/dom-controller';
/**
 * @private
 */
export var OverlayPortal = (function (_super) {
    __extends(OverlayPortal, _super);
    function OverlayPortal(app, config, keyboard, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, viewPort, domCtrl) {
        _super.call(this, null, app, config, keyboard, elementRef, zone, renderer, cfr, gestureCtrl, transCtrl, linker, domCtrl);
        this._isPortal = true;
        this._init = true;
        this.setViewport(viewPort);
        // on every page change make sure the portal has
        // dismissed any views that should be auto dismissed on page change
        app.viewDidLeave.subscribe(this.dismissPageChangeViews.bind(this));
    }
    Object.defineProperty(OverlayPortal.prototype, "_overlayPortal", {
        set: function (val) {
            this._zIndexOffset = (val || 0);
        },
        enumerable: true,
        configurable: true
    });
    OverlayPortal.decorators = [
        { type: Directive, args: [{
                    selector: '[overlay-portal]',
                },] },
    ];
    /** @nocollapse */
    OverlayPortal.ctorParameters = [
        { type: App, decorators: [{ type: Inject, args: [forwardRef(function () { return App; }),] },] },
        { type: Config, },
        { type: Keyboard, },
        { type: ElementRef, },
        { type: NgZone, },
        { type: Renderer, },
        { type: ComponentFactoryResolver, },
        { type: GestureController, },
        { type: TransitionController, },
        { type: DeepLinker, decorators: [{ type: Optional },] },
        { type: ViewContainerRef, },
        { type: DomController, },
    ];
    OverlayPortal.propDecorators = {
        '_overlayPortal': [{ type: Input, args: ['overlay-portal',] },],
    };
    return OverlayPortal;
}(NavControllerBase));
//# sourceMappingURL=overlay-portal.js.map