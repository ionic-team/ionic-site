import { Directive, ElementRef } from '@angular/core';
import { CSS, rafFrames } from '../../util/dom';
/**
 * @private
 */
export var TabHighlight = (function () {
    function TabHighlight(_elementRef) {
        this._elementRef = _elementRef;
    }
    TabHighlight.prototype.select = function (tab) {
        var _this = this;
        rafFrames(3, function () {
            var d = tab.btn.getDimensions();
            var ele = _this._elementRef.nativeElement;
            ele.style[CSS.transform] = "translate3d(" + d.left + "px,0,0) scaleX(" + d.width + ")";
            if (!_this._init) {
                _this._init = true;
                rafFrames(6, function () {
                    ele.classList.add('animate');
                });
            }
        });
    };
    TabHighlight.decorators = [
        { type: Directive, args: [{
                    selector: '.tab-highlight'
                },] },
    ];
    /** @nocollapse */
    TabHighlight.ctorParameters = [
        { type: ElementRef, },
    ];
    return TabHighlight;
}());
//# sourceMappingURL=tab-highlight.js.map