import { Directive, ElementRef, forwardRef, Inject, Renderer } from '@angular/core';
import { App } from '../components/app/app';
import { clearNativeTimeout, nativeTimeout } from './dom';
import { Config } from '../config/config';
/**
 * @private
 */
export var ClickBlock = (function () {
    function ClickBlock(app, config, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showing = false;
        app._clickBlock = this;
        var enabled = this.isEnabled = config.getBoolean('clickBlock', true);
        if (enabled) {
            this._setElementClass('click-block-enabled', true);
        }
    }
    ClickBlock.prototype.activate = function (shouldShow, expire) {
        if (expire === void 0) { expire = 100; }
        if (this.isEnabled) {
            clearNativeTimeout(this._tmr);
            if (shouldShow) {
                this._activate(true);
            }
            this._tmr = nativeTimeout(this._activate.bind(this, false), expire);
        }
    };
    /** @internal */
    ClickBlock.prototype._activate = function (shouldShow) {
        if (this._showing !== shouldShow) {
            this._setElementClass('click-block-active', shouldShow);
            this._showing = shouldShow;
        }
    };
    ClickBlock.prototype._setElementClass = function (className, add) {
        this.renderer.setElementClass(this.elementRef.nativeElement, className, add);
    };
    ClickBlock.decorators = [
        { type: Directive, args: [{
                    selector: '.click-block'
                },] },
    ];
    /** @nocollapse */
    ClickBlock.ctorParameters = [
        { type: App, decorators: [{ type: Inject, args: [forwardRef(function () { return App; }),] },] },
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    return ClickBlock;
}());
//# sourceMappingURL=click-block.js.map