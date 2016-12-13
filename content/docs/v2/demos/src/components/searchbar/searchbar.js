var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { isPresent, isTrueProperty } from '../../util/util';
import { TimeoutDebouncer } from '../../util/debouncer';
/**
 * @name Searchbar
 * @module ionic
 * @description
 * Manages the display of a Searchbar which can be used to search or filter items.
 *
 * @usage
 * ```html
 * <ion-searchbar
 *   [(ngModel)]="myInput"
 *   [showCancelButton]="shouldShowCancel"
 *   (ionInput)="onInput($event)"
 *   (ionCancel)="onCancel($event)">
 * </ion-searchbar>
 * ```
 *
 * @demo /docs/v2/demos/src/searchbar/
 * @see {@link /docs/v2/components#searchbar Searchbar Component Docs}
 */
export var Searchbar = (function (_super) {
    __extends(Searchbar, _super);
    function Searchbar(config, elementRef, renderer, ngControl) {
        _super.call(this, config, elementRef, renderer, 'searchbar');
        this._value = '';
        this._shouldBlur = true;
        this._shouldAlignLeft = true;
        this._isCancelVisible = false;
        this._spellcheck = false;
        this._autocomplete = 'off';
        this._autocorrect = 'off';
        this._isActive = false;
        this._debouncer = new TimeoutDebouncer(250);
        this._showCancelButton = false;
        this._animated = false;
        /**
         * @input {string} Set the the cancel button text. Default: `"Cancel"`.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * @input {string} Set the input's placeholder. Default `"Search"`.
         */
        this.placeholder = 'Search';
        /**
         * @input {string} Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
         */
        this.type = 'search';
        /**
         * @output {event} When the Searchbar input has changed including cleared.
         */
        this.ionInput = new EventEmitter();
        /**
         * @output {event} When the Searchbar input has blurred.
         */
        this.ionBlur = new EventEmitter();
        /**
         * @output {event} When the Searchbar input has focused.
         */
        this.ionFocus = new EventEmitter();
        /**
         * @output {event} When the cancel button is clicked.
         */
        this.ionCancel = new EventEmitter();
        /**
         * @output {event} When the clear input button is clicked.
         */
        this.ionClear = new EventEmitter();
        /**
         * @private
         */
        this.onChange = function (_) { };
        /**
         * @private
         */
        this.onTouched = function () { };
        // If the user passed a ngControl we need to set the valueAccessor
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(Searchbar.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "showCancelButton", {
        /**
         * @input {boolean} Whether to show the cancel button or not. Default: `"false"`.
         */
        get: function () {
            return this._showCancelButton;
        },
        set: function (val) {
            this._showCancelButton = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "debounce", {
        /**
         * @input {number} How long, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `250`.
         */
        get: function () {
            return this._debouncer.wait;
        },
        set: function (val) {
            this._debouncer.wait = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "autocomplete", {
        /**
         * @input {string} Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        set: function (val) {
            this._autocomplete = (val === '' || val === 'on') ? 'on' : this._config.get('autocomplete', 'off');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "autocorrect", {
        /**
         * @input {string} Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        set: function (val) {
            this._autocorrect = (val === '' || val === 'on') ? 'on' : this._config.get('autocorrect', 'off');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "spellcheck", {
        /**
         * @input {string|boolean} Set the input's spellcheck property. Values: `true`, `false`. Default `false`.
         */
        set: function (val) {
            this._spellcheck = (val === '' || val === 'true' || val === true) ? true : this._config.getBoolean('spellcheck', false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "animated", {
        /**
         * @input {boolean} Configures if the searchbar is animated or no. By default, animation is `false`.
         */
        get: function () {
            return this._animated;
        },
        set: function (val) {
            this._animated = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar.prototype, "value", {
        /**
         * @input {string} Set the input value.
         */
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this._searchbarInput) {
                var ele = this._searchbarInput.nativeElement;
                if (ele) {
                    ele.value = val;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * On Initialization check for attributes
     */
    Searchbar.prototype.ngOnInit = function () {
        var showCancelButton = this.showCancelButton;
        if (typeof showCancelButton === 'string') {
            this.showCancelButton = (showCancelButton === '' || showCancelButton === 'true');
        }
    };
    /**
     * @private
     * After View Checked position the elements
     */
    Searchbar.prototype.ngAfterContentInit = function () {
        this.positionElements();
    };
    /**
     * @private
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    Searchbar.prototype.positionElements = function () {
        var isAnimated = this._animated;
        var prevAlignLeft = this._shouldAlignLeft;
        var shouldAlignLeft = (!isAnimated || (this._value && this._value.toString().trim() !== '') || this._sbHasFocus === true);
        this._shouldAlignLeft = shouldAlignLeft;
        if (this._mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (isAnimated) {
            this.positionCancelButton();
        }
    };
    Searchbar.prototype.positionPlaceholder = function () {
        if (!this._searchbarInput || !this._searchbarIcon) {
            return;
        }
        var inputEle = this._searchbarInput.nativeElement;
        var iconEle = this._searchbarIcon.nativeElement;
        if (this._shouldAlignLeft) {
            inputEle.removeAttribute('style');
            iconEle.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            var tempSpan = document.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            document.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            var textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            // Set the input padding left
            var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            inputEle.style.paddingLeft = inputLeft;
            // Set the icon margin left
            var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            iconEle.style.marginLeft = iconLeft;
        }
    };
    /**
     * @private
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    Searchbar.prototype.positionCancelButton = function () {
        if (!this._cancelButton || !this._cancelButton.nativeElement) {
            return;
        }
        var showShowCancel = this._sbHasFocus;
        if (showShowCancel !== this._isCancelVisible) {
            var cancelStyleEle = this._cancelButton.nativeElement;
            var cancelStyle = cancelStyleEle.style;
            this._isCancelVisible = showShowCancel;
            if (showShowCancel) {
                cancelStyle.marginRight = '0';
            }
            else {
                var offset = cancelStyleEle.offsetWidth;
                if (offset > 0) {
                    cancelStyle.marginRight = -offset + 'px';
                }
            }
        }
    };
    /**
     * @private
     * Update the Searchbar input value when the input changes
     */
    Searchbar.prototype.inputChanged = function (ev) {
        var _this = this;
        this._value = ev.target.value;
        this._debouncer.debounce(function () {
            _this.onChange(_this._value);
            _this.ionInput.emit(ev);
        });
    };
    /**
     * @private
     * Sets the Searchbar to focused and active on input focus.
     */
    Searchbar.prototype.inputFocused = function (ev) {
        this.ionFocus.emit(ev);
        this._sbHasFocus = true;
        this._isActive = true;
        this.positionElements();
    };
    /**
     * @private
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    Searchbar.prototype.inputBlurred = function (ev) {
        // _shouldBlur determines if it should blur
        // if we are clearing the input we still want to stay focused in the input
        if (this._shouldBlur === false) {
            this._searchbarInput.nativeElement.focus();
            this._shouldBlur = true;
            return;
        }
        this.ionBlur.emit(ev);
        this._sbHasFocus = false;
        this.positionElements();
    };
    /**
     * @private
     * Clears the input field and triggers the control change.
     */
    Searchbar.prototype.clearInput = function (ev) {
        var _this = this;
        this.ionClear.emit(ev);
        // setTimeout() fixes https://github.com/driftyco/ionic/issues/7527
        // wait for 4 frames
        setTimeout(function () {
            var value = _this._value;
            if (isPresent(value) && value !== '') {
                _this.value = ''; // DOM WRITE
                _this.onChange(_this._value);
                _this.ionInput.emit(ev);
            }
        }, 16 * 4);
        this._shouldBlur = false;
    };
    /**
     * @private
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    Searchbar.prototype.cancelSearchbar = function (ev) {
        this.ionCancel.emit(ev);
        this.clearInput(ev);
        this._shouldBlur = true;
        this._isActive = false;
    };
    /**
     * @private
     * Write a new value to the element.
     */
    Searchbar.prototype.writeValue = function (val) {
        this.value = val;
        this.positionElements();
    };
    /**
     * @private
     * Set the function to be called when the control receives a change event.
     */
    Searchbar.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @private
     * Set the function to be called when the control receives a touch event.
     */
    Searchbar.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Searchbar.prototype.setFocus = function () {
        this._renderer.invokeElementMethod(this._searchbarInput.nativeElement, 'focus');
    };
    Searchbar.decorators = [
        { type: Component, args: [{
                    selector: 'ion-searchbar',
                    template: '<div class="searchbar-input-container">' +
                        '<button ion-button mode="md" (click)="cancelSearchbar($event)" (mousedown)="cancelSearchbar($event)" clear color="dark" class="searchbar-md-cancel" type="button">' +
                        '<ion-icon name="md-arrow-back"></ion-icon>' +
                        '</button>' +
                        '<div #searchbarIcon class="searchbar-search-icon"></div>' +
                        '<input #searchbarInput class="searchbar-input" (input)="inputChanged($event)" (blur)="inputBlurred($event)" (focus)="inputFocused($event)" ' +
                        '[attr.placeholder]="placeholder" ' +
                        '[attr.type]="type" ' +
                        '[attr.autocomplete]="_autocomplete" ' +
                        '[attr.autocorrect]="_autocorrect" ' +
                        '[attr.spellcheck]="_spellcheck">' +
                        '<button ion-button clear class="searchbar-clear-icon" [mode]="_mode" (click)="clearInput($event)" (mousedown)="clearInput($event)" type="button"></button>' +
                        '</div>' +
                        '<button ion-button #cancelButton mode="ios" [tabindex]="_isActive ? 1 : -1" clear (click)="cancelSearchbar($event)" (mousedown)="cancelSearchbar($event)" class="searchbar-ios-cancel" type="button">{{cancelButtonText}}</button>',
                    host: {
                        '[class.searchbar-animated]': '_animated',
                        '[class.searchbar-has-value]': '_value',
                        '[class.searchbar-active]': '_isActive',
                        '[class.searchbar-show-cancel]': '_showCancelButton',
                        '[class.searchbar-left-aligned]': '_shouldAlignLeft'
                    },
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Searchbar.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: NgControl, decorators: [{ type: Optional },] },
    ];
    Searchbar.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'cancelButtonText': [{ type: Input },],
        'showCancelButton': [{ type: Input },],
        'debounce': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'autocomplete': [{ type: Input },],
        'autocorrect': [{ type: Input },],
        'spellcheck': [{ type: Input },],
        'type': [{ type: Input },],
        'animated': [{ type: Input },],
        'ionInput': [{ type: Output },],
        'ionBlur': [{ type: Output },],
        'ionFocus': [{ type: Output },],
        'ionCancel': [{ type: Output },],
        'ionClear': [{ type: Output },],
        '_sbHasFocus': [{ type: HostBinding, args: ['class.searchbar-has-focus',] },],
        '_searchbarInput': [{ type: ViewChild, args: ['searchbarInput',] },],
        '_searchbarIcon': [{ type: ViewChild, args: ['searchbarIcon',] },],
        '_cancelButton': [{ type: ViewChild, args: ['cancelButton', { read: ElementRef },] },],
        'value': [{ type: Input },],
    };
    return Searchbar;
}(Ion));
//# sourceMappingURL=searchbar.js.map