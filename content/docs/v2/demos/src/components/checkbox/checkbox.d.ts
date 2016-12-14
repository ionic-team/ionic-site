import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Config } from '../../config/config';
import { Form, IonicTapInput } from '../../util/form';
import { Ion } from '../ion';
import { Item } from '../item/item';
export declare const CHECKBOX_VALUE_ACCESSOR: any;
/**
 * @name Checkbox
 * @module ionic
 *
 * @description
 * The Checkbox is a simple component styled based on the mode. It can be
 * placed in an `ion-item` or used as a stand-alone checkbox.
 *
 * See the [Angular 2 Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more info on forms and inputs.
 *
 *
 * @usage
 * ```html
 *
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Pepperoni</ion-label>
 *      <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Sausage</ion-label>
 *      <ion-checkbox [(ngModel)]="sausage" disabled="true"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Mushrooms</ion-label>
 *      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * @demo /docs/v2/demos/src/checkbox/
 * @see {@link /docs/v2/components#checkbox Checkbox Component Docs}
 */
export declare class Checkbox extends Ion implements IonicTapInput, AfterContentInit, ControlValueAccessor, OnDestroy {
    private _form;
    private _item;
    /** @private */
    _checked: boolean;
    /** @private */
    _init: boolean;
    /** @private */
    _disabled: boolean;
    /** @private */
    _labelId: string;
    /** @private */
    _fn: Function;
    /** @private */
    id: string;
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    /**
     * @output {Checkbox} expression to evaluate when the checkbox value changes
     */
    ionChange: EventEmitter<Checkbox>;
    constructor(config: Config, _form: Form, _item: Item, elementRef: ElementRef, renderer: Renderer);
    /**
     * @private
     */
    _click(ev: UIEvent): void;
    /**
     * @input {boolean} whether or not the checkbox is checked (defaults to false)
     */
    checked: boolean;
    /**
     * @private
     */
    _setChecked(isChecked: boolean): void;
    /**
     * @private
     */
    writeValue(val: any): void;
    /**
     * @private
     */
    registerOnChange(fn: Function): void;
    /**
     * @private
     */
    registerOnTouched(fn: any): void;
    /**
     * @input {boolean} whether or not the checkbox is disabled or not.
     */
    disabled: boolean;
    /**
     * @private
     */
    onChange(isChecked: boolean): void;
    /**
     * @private
     */
    initFocus(): void;
    /**
     * @private
     */
    onTouched(): void;
    /**
     * @private
     */
    ngAfterContentInit(): void;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
