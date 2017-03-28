import { ContentChild, Directive, ElementRef, EventEmitter, forwardRef, Output, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListHeader } from '../list/list-header';
import { isCheckedProperty } from '../../util/util';
export var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioGroup; }),
    multi: true
};
/**
 * @name RadioGroup
 * @description
 * A radio group is a group of [radio buttons](../RadioButton). It allows
 * a user to select at most one radio button from a set. Checking one radio
 * button that belongs to a radio group unchecks any previous checked
 * radio button within the same group.
 *
 * See the [Angular Forms Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more information on forms and inputs.
 *
 * @usage
 * ```html
 * <ion-list radio-group [(ngModel)]="autoManufacturers">
 *
 *   <ion-list-header>
 *     Auto Manufacturers
 *   </ion-list-header>
 *
 *   <ion-item>
 *     <ion-label>Cord</ion-label>
 *     <ion-radio value="cord"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Duesenberg</ion-label>
 *     <ion-radio value="duesenberg"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Hudson</ion-label>
 *     <ion-radio value="hudson"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Packard</ion-label>
 *     <ion-radio value="packard"></ion-radio>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>Studebaker</ion-label>
 *     <ion-radio value="studebaker"></ion-radio>
 *   </ion-item>
 *
 * </ion-list>
 * ```
 *
 * @demo /docs//demos/src/radio/
 * @see {@link /docs//components#radio Radio Component Docs}
 * @see {@link ../RadioButton RadioButton API Docs}
*/
export var RadioGroup = (function () {
    function RadioGroup(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @private
         */
        this._btns = [];
        /**
         * @private
         */
        this._ids = -1;
        /**
         * @private
         */
        this._init = false;
        /**
         * @output {any} expression to be evaluated when selection has been changed
         */
        this.ionChange = new EventEmitter();
        this.id = ++radioGroupIds;
    }
    /**
     * @private
     */
    RadioGroup.prototype.ngAfterContentInit = function () {
        var activeButton = this._btns.find(function (b) { return b.checked; });
        if (activeButton) {
            this._setActive(activeButton);
        }
    };
    /**
     * @private
     */
    RadioGroup.prototype.writeValue = function (val) {
        console.debug('radio group, writeValue', val);
        this.value = val;
        if (this._init) {
            this._update();
            this.onTouched();
            this.ionChange.emit(val);
        }
        this._init = true;
    };
    /**
     * @private
     */
    RadioGroup.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function (val) {
            // onChange used when there's an formControlName
            console.debug('radio group, onChange', val);
            fn(val);
            _this.value = val;
            _this._update();
            _this.onTouched();
            _this.ionChange.emit(val);
        };
    };
    /**
     * @private
     */
    RadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @private
     */
    RadioGroup.prototype._update = function () {
        var _this = this;
        // loop through each of the radiobuttons
        var hasChecked = false;
        this._btns.forEach(function (radioButton) {
            // check this radiobutton if its value is
            // the same as the radiogroups value
            radioButton.checked = isCheckedProperty(_this.value, radioButton.value) && !hasChecked;
            if (radioButton.checked) {
                // if this button is checked, then set it as
                // the radiogroup's active descendant
                _this._setActive(radioButton);
                hasChecked = true;
            }
        });
    };
    /**
     * @private
     */
    RadioGroup.prototype._setActive = function (radioButton) {
        this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-activedescendant', radioButton.id);
    };
    /**
     * @private
     */
    RadioGroup.prototype.add = function (button) {
        var _this = this;
        this._btns.push(button);
        // listen for radiobutton select events
        button.ionSelect.subscribe(function (val) {
            // this radiobutton has been selected
            _this.onChange(val);
        });
        return this.id + '-' + (++this._ids);
    };
    /**
     * @private
     */
    RadioGroup.prototype.remove = function (button) {
        var index = this._btns.indexOf(button);
        if (index > -1) {
            if (button.value === this.value) {
                this.value = null;
            }
            this._btns.splice(index, 1);
        }
    };
    Object.defineProperty(RadioGroup.prototype, "_header", {
        /**
         * @private
         */
        set: function (header) {
            if (header) {
                if (!header.id) {
                    header.id = 'rg-hdr-' + this.id;
                }
                this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', header.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    RadioGroup.prototype.onChange = function (val) {
        // onChange used when there is not an formControlName
        console.debug('radio group, onChange w/out formControlName', val);
        this.value = val;
        this._update();
        this.onTouched();
        this.ionChange.emit(val);
    };
    /**
     * @private
     */
    RadioGroup.prototype.onTouched = function () { };
    RadioGroup.decorators = [
        { type: Directive, args: [{
                    selector: '[radio-group]',
                    host: {
                        'role': 'radiogroup'
                    },
                    providers: [RADIO_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioGroup.ctorParameters = [
        { type: Renderer, },
        { type: ElementRef, },
    ];
    RadioGroup.propDecorators = {
        'ionChange': [{ type: Output },],
        '_header': [{ type: ContentChild, args: [ListHeader,] },],
    };
    return RadioGroup;
}());
var radioGroupIds = -1;
//# sourceMappingURL=radio-group.js.map