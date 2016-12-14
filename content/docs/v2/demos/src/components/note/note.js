var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @private
  */
export var Note = (function (_super) {
    __extends(Note, _super);
    function Note(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'note');
    }
    Object.defineProperty(Note.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Note.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-note'
                },] },
    ];
    /** @nocollapse */
    Note.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Note.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return Note;
}(Ion));
//# sourceMappingURL=note.js.map