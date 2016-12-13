import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { RadioButton } from './radio-button';
export declare const RADIO_VALUE_ACCESSOR: any;
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
 * @demo /docs/v2/demos/src/radio/
 * @see {@link /docs/v2/components#radio Radio Component Docs}
 * @see {@link ../RadioButton RadioButton API Docs}
*/
export declare class RadioGroup {
    private _renderer;
    private _elementRef;
    /**
     * @private
     */
    _btns: RadioButton[];
    /**
     * @private
     */
    _fn: Function;
    /**
     * @private
     */
    _ids: number;
    /**
     * @private
     */
    _init: boolean;
    /**
     * @private
     */
    value: any;
    /**
     * @private
     */
    id: number;
    /**
     * @output {any} expression to be evaluated when selection has been changed
     */
    ionChange: EventEmitter<RadioGroup>;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    /**
     * @private
     */
    ngAfterContentInit(): void;
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
     * @private
     */
    _update(): void;
    /**
     * @private
     */
    _setActive(radioButton: RadioButton): void;
    /**
     * @private
     */
    add(button: RadioButton): string;
    /**
     * @private
     */
    remove(button: RadioButton): void;
    /**
     * @private
     */
    _header: any;
    /**
     * @private
     */
    onChange(val: any): void;
    /**
     * @private
     */
    onTouched(): void;
}
