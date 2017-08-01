var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Optional, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { Content } from '../content/content';
import { DomController } from '../../util/dom-controller';
import { Form } from '../../util/form';
import { InputBase } from './input-base';
import { isTrueProperty } from '../../util/util';
import { Item } from '../item/item';
import { NativeInput, NextInput } from './native-input';
import { NavController } from '../../navigation/nav-controller';
import { Platform } from '../../platform/platform';
/**
 * @name Input
 * @description
 *
 * `ion-input` is meant for text type inputs only, such as `text`,
 * `password`, `email`, `number`, `search`, `tel`, and `url`. Ionic
 * still uses an actual `<input type="text">` HTML element within the
 * component, however, with Ionic wrapping the native HTML input
 * element it's able to better handle the user experience and
 * interactivity.
 *
 * Similarily, `<ion-textarea>` should be used in place of `<textarea>`.
 *
 * An `ion-input` is **not** used for non-text type inputs, such as a
 * `checkbox`, `radio`, `toggle`, `range`, `select`, etc.
 *
 *
 * @usage
 * ```html
 * <ion-list>
 *   <ion-item>
 *     <ion-label color="primary">Inline Label</ion-label>
 *     <ion-input placeholder="Text Input"></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label color="primary" fixed>Fixed Label</ion-label>
 *     <ion-input type="tel" placeholder="Tel Input"></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-input type="number" placeholder="Number Input with no label"></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label color="primary" stacked>Stacked Label</ion-label>
 *     <ion-input type="email" placeholder="Email Input"></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label color="primary" stacked>Stacked Label</ion-label>
 *     <ion-input type="password" placeholder="Password Input"></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label color="primary" floating>Floating Label</ion-label>
 *     <ion-input></ion-input>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-input placeholder="Clear Input" clearInput></ion-input>
 *   </ion-item>
 * </ion-list>
 * ```
 *
 * @demo /docs/demos/src/input/
 */
export var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(config, form, item, app, platform, elementRef, renderer, scrollView, nav, ngControl, dom) {
        _super.call(this, config, form, item, app, platform, elementRef, renderer, scrollView, nav, ngControl, dom);
        /**
         * @private
         */
        this._clearInput = false;
        /**
         * @input {string} The placeholder for the input
         */
        this.placeholder = '';
        /**
         * @output {event} Expression to call when the input no longer has focus
         */
        this.blur = new EventEmitter();
        /**
         * @output {event} Expression to call when the input has focus
         */
        this.focus = new EventEmitter();
        this.mode = config.get('mode');
    }
    Object.defineProperty(TextInput.prototype, "clearInput", {
        /**
         * @input {bool} A clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        get: function () {
            return this._clearInput;
        },
        set: function (val) {
            this._clearInput = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "value", {
        /**
         * @input {string} The text value of the input
         */
        get: function () {
            return this._value;
        },
        set: function (val) {
            _super.prototype.setValue.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "type", {
        /**
         * @input {string} The HTML input type (text, password, email, number, search, tel, or url)
         */
        get: function () {
            return this._type;
        },
        set: function (val) {
            _super.prototype.setType.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "disabled", {
        /**
         * @input {bool} If the input should be disabled or not
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            _super.prototype.setDisabled.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "clearOnEdit", {
        /**
         * @input {boolean} whether to clear the input upon editing or not
         */
        get: function () {
            return this._clearOnEdit;
        },
        set: function (val) {
            _super.prototype.setClearOnEdit.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "_nativeInput", {
        /**
         * @private
         */
        set: function (nativeInput) {
            _super.prototype.setNativeInput.call(this, nativeInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "_nextInput", {
        /**
         * @private
         */
        set: function (nextInput) {
            _super.prototype.setNextInput.call(this, nextInput);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    TextInput.prototype.inputBlurred = function (ev) {
        this.blur.emit(ev);
    };
    /**
     * @private
     */
    TextInput.prototype.inputFocused = function (ev) {
        this.focus.emit(ev);
    };
    /**
     * @private
     */
    TextInput.prototype.ngOnInit = function () {
        if (this._item) {
            this._item.setElementClass('item-input', true);
            this._item.registerInput(this._type);
        }
        // By default, password inputs clear after focus when they have content
        if (this.type === 'password' && this.clearOnEdit !== false) {
            this.clearOnEdit = true;
        }
    };
    /**
     * @private
     */
    TextInput.prototype.ngAfterContentChecked = function () {
        this.setItemInputControlCss();
    };
    /**
     * @private
     */
    TextInput.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
        // only stop listening to content scroll events if there is content
        if (this._content) {
            this._scrollStart.unsubscribe();
            this._scrollEnd.unsubscribe();
        }
    };
    /**
     * @private
     */
    TextInput.prototype.clearTextInput = function () {
        console.debug('Should clear input');
        this._value = '';
        this.onChange(this._value);
        this.writeValue(this._value);
    };
    TextInput.decorators = [
        { type: Component, args: [{
                    selector: 'ion-input',
                    template: '<input [type]="type" [(ngModel)]="_value" (blur)="inputBlurred($event)" (focus)="inputFocused($event)" [placeholder]="placeholder" class="text-input" [ngClass]="\'text-input-\' + _mode">' +
                        '<input [type]="type" aria-hidden="true" next-input *ngIf="_useAssist">' +
                        '<button ion-button clear [hidden]="!clearInput" type="button" class="text-input-clear-icon" (click)="clearTextInput()" (mousedown)="clearTextInput()"></button>' +
                        '<div (touchstart)="pointerStart($event)" (touchend)="pointerEnd($event)" (mousedown)="pointerStart($event)" (mouseup)="pointerEnd($event)" class="input-cover" tappable *ngIf="_useAssist"></div>',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    TextInput.ctorParameters = [
        { type: Config, },
        { type: Form, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: App, },
        { type: Platform, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: Content, decorators: [{ type: Optional },] },
        { type: NavController, decorators: [{ type: Optional },] },
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: DomController, },
    ];
    TextInput.propDecorators = {
        'placeholder': [{ type: Input },],
        'clearInput': [{ type: Input },],
        'value': [{ type: Input },],
        'type': [{ type: Input },],
        'disabled': [{ type: Input },],
        'mode': [{ type: Input },],
        'clearOnEdit': [{ type: Input },],
        '_nativeInput': [{ type: ViewChild, args: [NativeInput,] },],
        '_nextInput': [{ type: ViewChild, args: [NextInput,] },],
        'blur': [{ type: Output },],
        'focus': [{ type: Output },],
    };
    return TextInput;
}(InputBase));
/**
 * @name TextArea
 * @description
 *
 * `ion-textarea` is is used for multi-line text inputs. Ionic still
 * uses an actual `<textarea>` HTML element within the component;
 * however, with Ionic wrapping the native HTML text area element, Ionic
 * is able to better handle the user experience and interactivity.
 *
 * Note that `<ion-textarea>` must load its value from the `value` or
 * `[(ngModel)]` attribute. Unlike the native `<textarea>` element,
 * `<ion-textarea>` does not support loading its value from the
 * textarea's inner content.
 *
 * When requiring only a single-line text input, we recommend using
 * `<ion-input>` instead.
 *
 * @usage
 * ```html
 *  <ion-item>
 *    <ion-label>Comments</ion-label>
 *    <ion-textarea></ion-textarea>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label stacked>Message</ion-label>
 *    <ion-textarea [(ngModel)]="msg"></ion-textarea>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label floating>Description</ion-label>
 *    <ion-textarea></ion-textarea>
 *  </ion-item>
 *
 * <ion-item>
 *    <ion-label>Long Description</ion-label>
 *    <ion-textarea rows="6" placeholder="enter long description here..."></ion-textarea>
 *  </ion-item>
 * ```
 *
 * @demo /docs/demos/src/textarea/
 */
export var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(config, form, item, app, platform, elementRef, renderer, scrollView, nav, ngControl, dom) {
        _super.call(this, config, form, item, app, platform, elementRef, renderer, scrollView, nav, ngControl, dom);
        /**
         * @input {string} The placeholder for the textarea
         */
        this.placeholder = '';
        /**
         * @output {event} Expression to call when the textarea no longer has focus
         */
        this.blur = new EventEmitter();
        /**
         * @output {event} Expression to call when the textarea has focus
         */
        this.focus = new EventEmitter();
        this.mode = config.get('mode');
    }
    Object.defineProperty(TextArea.prototype, "value", {
        /**
         * @input {string} The value of the textarea
         */
        get: function () {
            return this._value;
        },
        set: function (val) {
            _super.prototype.setValue.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextArea.prototype, "disabled", {
        /**
         * @input {bool} Whether the textarea should be disabled or not
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            _super.prototype.setDisabled.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextArea.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextArea.prototype, "_nativeInput", {
        /**
         * @private
         */
        set: function (nativeInput) {
            _super.prototype.setNativeInput.call(this, nativeInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextArea.prototype, "_nextInput", {
        /**
         * @private
         */
        set: function (nextInput) {
            _super.prototype.setNextInput.call(this, nextInput);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    TextArea.prototype.ngOnInit = function () {
        if (this._item) {
            this._item.setElementClass('item-textarea', true);
            this._item.setElementClass('item-input', true);
            this._item.registerInput(this._type);
        }
    };
    /**
     * @private
     */
    TextArea.prototype.ngAfterContentChecked = function () {
        this.setItemInputControlCss();
    };
    /**
     * @private
     */
    TextArea.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
        // only stop listening to content scroll events if there is content
        if (this._content) {
            this._scrollStart.unsubscribe();
            this._scrollEnd.unsubscribe();
        }
    };
    /**
     * @private
     */
    TextArea.prototype.inputBlurred = function (ev) {
        this.blur.emit(ev);
    };
    /**
     * @private
     */
    TextArea.prototype.inputFocused = function (ev) {
        this.focus.emit(ev);
    };
    TextArea.decorators = [
        { type: Component, args: [{
                    selector: 'ion-textarea',
                    template: '<textarea [(ngModel)]="_value" (blur)="inputBlurred($event)" (focus)="inputFocused($event)" [placeholder]="placeholder" class="text-input" [ngClass]="\'text-input-\' + _mode"></textarea>' +
                        '<input type="text" aria-hidden="true" next-input *ngIf="_useAssist">' +
                        '<div (touchstart)="pointerStart($event)" (touchend)="pointerEnd($event)" (mousedown)="pointerStart($event)" (mouseup)="pointerEnd($event)" class="input-cover" tappable *ngIf="_useAssist"></div>',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    TextArea.ctorParameters = [
        { type: Config, },
        { type: Form, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: App, },
        { type: Platform, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: Content, decorators: [{ type: Optional },] },
        { type: NavController, decorators: [{ type: Optional },] },
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: DomController, },
    ];
    TextArea.propDecorators = {
        'placeholder': [{ type: Input },],
        'value': [{ type: Input },],
        'disabled': [{ type: Input },],
        'mode': [{ type: Input },],
        '_nativeInput': [{ type: ViewChild, args: [NativeInput,] },],
        '_nextInput': [{ type: ViewChild, args: [NextInput,] },],
        'blur': [{ type: Output },],
        'focus': [{ type: Output },],
    };
    return TextArea;
}(InputBase));
//# sourceMappingURL=input.js.map