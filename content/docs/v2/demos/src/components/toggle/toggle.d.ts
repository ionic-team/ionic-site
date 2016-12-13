import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { Item } from '../item/item';
import { ToggleGesture } from './toggle-gesture';
import { GestureController } from '../../gestures/gesture-controller';
import { Haptic } from '../../util/haptic';
import { Form, IonicTapInput } from '../../util/form';
import { DomController } from '../../util/dom-controller';
export declare const TOGGLE_VALUE_ACCESSOR: any;
/**
 * @name Toggle
 * @description
 * A toggle technically is the same thing as an HTML checkbox input,
 * except it looks different and is easier to use on a touch device.
 * Toggles can also have colors assigned to them, by adding any color
 * attribute.
 *
 * See the [Angular 2 Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more info on forms and inputs.
 *
 * @usage
 * ```html
 *
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Pepperoni</ion-label>
 *      <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Sausage</ion-label>
 *      <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Mushrooms</ion-label>
 *      <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * @demo /docs/v2/demos/src/toggle/
 * @see {@link /docs/v2/components#toggle Toggle Component Docs}
 */
export declare class Toggle extends Ion implements IonicTapInput, AfterContentInit, ControlValueAccessor, OnDestroy {
    _form: Form;
    private _haptic;
    _item: Item;
    private _gestureCtrl;
    private _domCtrl;
    _checked: boolean;
    _init: boolean;
    _disabled: boolean;
    _labelId: string;
    _activated: boolean;
    _startX: number;
    _msPrv: number;
    _fn: Function;
    _gesture: ToggleGesture;
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
     * @output {Toggle} expression to evaluate when the toggle value changes
     */
    ionChange: EventEmitter<Toggle>;
    constructor(_form: Form, config: Config, elementRef: ElementRef, renderer: Renderer, _haptic: Haptic, _item: Item, _gestureCtrl: GestureController, _domCtrl: DomController);
    /**
     * @private
     */
    ngAfterContentInit(): void;
    /**
     * @private
     */
    _onDragStart(startX: number): void;
    /**
     * @private
     */
    _onDragMove(currentX: number): void;
    /**
     * @private
     */
    _onDragEnd(endX: number): void;
    /**
     * @input {boolean} whether the toggle it toggled or not
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
     * @input {boolean} whether the toggle is disabled or not
     */
    disabled: boolean;
    /**
     * @private
     */
    onChange(isChecked: boolean): void;
    /**
     * @private
     */
    onTouched(): void;
    /**
     * @private
     */
    _keyup(ev: KeyboardEvent): void;
    /**
     * @private
     */
    initFocus(): void;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
