import { Directive, ElementRef, Renderer } from '@angular/core';
/**
 * @private
 */
export var Backdrop = (function () {
    function Backdrop(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    Backdrop.prototype.getNativeElement = function () {
        return this._elementRef.nativeElement;
    };
    Backdrop.prototype.setElementClass = function (className, add) {
        this._renderer.setElementClass(this._elementRef.nativeElement, className, add);
    };
    Backdrop.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-backdrop',
                    host: {
                        'role': 'presentation',
                        'tappable': '',
                        'disable-activated': ''
                    },
                },] },
    ];
    /** @nocollapse */
    Backdrop.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    return Backdrop;
}());
//# sourceMappingURL=backdrop.js.map