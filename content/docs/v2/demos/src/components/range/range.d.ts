import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Config } from '../../config/config';
import { TimeoutDebouncer } from '../../util/debouncer';
import { Form } from '../../util/form';
import { Ion } from '../ion';
import { Item } from '../item/item';
import { PointerCoordinates } from '../../util/dom';
import { Haptic } from '../../util/haptic';
import { UIEventManager } from '../../util/ui-event-manager';
export declare const RANGE_VALUE_ACCESSOR: any;
/**
 * @private
 */
export declare class RangeKnob implements OnInit {
    range: Range;
    _ratio: number;
    _val: number;
    _x: string;
    _upper: boolean;
    pressed: boolean;
    upper: boolean;
    constructor(range: Range);
    ratio: number;
    value: number;
    position(): void;
    ngOnInit(): void;
}
/**
 * @name Range
 * @description
 * The Range slider lets users select from a range of values by moving
 * the slider knob. It can accept dual knobs, but by default one knob
 * controls the value of the range.
 *
 * ### Range Labels
 * Labels can be placed on either side of the range by adding the
 * `range-left` or `range-right` property to the element. The element
 * doesn't have to be an `ion-label`, it can be added to any element
 * to place it to the left or right of the range. See [usage](#usage)
 * below for examples.
 *
 *
 * ### Minimum and Maximum Values
 * Minimum and maximum values can be passed to the range through the `min`
 * and `max` properties, respectively. By default, the range sets the `min`
 * to `0` and the `max` to `100`.
 *
 *
 * ### Steps and Snaps
 * The `step` property specifies the value granularity of the range's value.
 * It can be useful to set the `step` when the value isn't in increments of `1`.
 * Setting the `step` property will show tick marks on the range for each step.
 * The `snaps` property can be set to automatically move the knob to the nearest
 * tick mark based on the step property value.
 *
 *
 * ### Dual Knobs
 * Setting the `dualKnobs` property to `true` on the range component will
 * enable two knobs on the range. If the range has two knobs, the value will
 * be an object containing two properties: `lower` and `upper`.
 *
 *
 * @usage
 * ```html
 * <ion-list>
 *   <ion-item>
 *     <ion-range [(ngModel)]="singleValue" color="danger" pin="true"></ion-range>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-range min="-200" max="200" [(ngModel)]="saturation" color="secondary">
 *       <ion-label range-left>-200</ion-label>
 *       <ion-label range-right>200</ion-label>
 *     </ion-range>
 *   </ion-item>
 *
 *  <ion-item>
 *    <ion-range min="20" max="80" step="2" [(ngModel)]="brightness">
 *      <ion-icon small range-left name="sunny"></ion-icon>
 *      <ion-icon range-right name="sunny"></ion-icon>
 *    </ion-range>
 *  </ion-item>
 *
 *   <ion-item>
 *     <ion-label>step=100, snaps, {{singleValue4}}</ion-label>
 *     <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary" [(ngModel)]="singleValue4"></ion-range>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>dual, step=3, snaps, {{dualValue2 | json}}</ion-label>
 *     <ion-range dualKnobs="true" [(ngModel)]="dualValue2" min="21" max="72" step="3" snaps="true"></ion-range>
 *   </ion-item>
 * </ion-list>
 * ```
 *
 *
 * @demo /docs/v2/demos/src/range/
 */
export declare class Range extends Ion implements AfterViewInit, ControlValueAccessor, OnDestroy {
    private _form;
    private _haptic;
    private _item;
    _dual: boolean;
    _pin: boolean;
    _disabled: boolean;
    _pressed: boolean;
    _labelId: string;
    _fn: Function;
    _active: RangeKnob;
    _start: PointerCoordinates;
    _rect: ClientRect;
    _ticks: any[];
    _barL: string;
    _barR: string;
    _min: number;
    _max: number;
    _step: number;
    _snaps: boolean;
    _debouncer: TimeoutDebouncer;
    _events: UIEventManager;
    /**
     * @private
     */
    value: any;
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    _bar: ElementRef;
    _slider: ElementRef;
    _knobs: QueryList<RangeKnob>;
    /**
     * @private
     */
    id: string;
    /**
     * @input {number} Minimum integer value of the range. Defaults to `0`.
     */
    min: number;
    /**
     * @input {number} Maximum integer value of the range. Defaults to `100`.
     */
    max: number;
    /**
     * @input {number} Specifies the value granularity. Defaults to `1`.
     */
    step: number;
    /**
     * @input {number} If true, the knob snaps to tick marks evenly spaced based on the step property value. Defaults to `false`.
     */
    snaps: boolean;
    /**
     * @input {number} If true, a pin with integer value is shown when the knob is pressed. Defaults to `false`.
     */
    pin: boolean;
    /**
     * @input {number} How long, in milliseconds, to wait to trigger the `ionChange`
     * event after each change in the range value. Default `0`.
     */
    debounce: number;
    /**
     * @input {boolean} Show two knobs. Defaults to `false`.
     */
    dualKnobs: boolean;
    /**
     * @output {Range} Expression to evaluate when the range value changes.
     */
    ionChange: EventEmitter<Range>;
    constructor(_form: Form, _haptic: Haptic, _item: Item, config: Config, elementRef: ElementRef, renderer: Renderer);
    /**
     * @private
     */
    ngAfterViewInit(): void;
    /**
     * @private
     */
    pointerDown(ev: UIEvent): boolean;
    /**
     * @private
     */
    pointerMove(ev: UIEvent): void;
    /**
     * @private
     */
    pointerUp(ev: UIEvent): void;
    /**
     * @private
     */
    setActiveKnob(current: PointerCoordinates, rect: ClientRect): void;
    /**
     * @private
     */
    updateKnob(current: PointerCoordinates, rect: ClientRect): void;
    /**
     * @private
     */
    updateBar(): void;
    /**
     * @private
     */
    createTicks(): void;
    /**
     * @private
     */
    updateTicks(): void;
    /**
     * @private
     */
    ratioToValue(ratio: number): number;
    /**
     * @private
     */
    valueToRatio(value: number): number;
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
     * @input {boolean} Whether or not the range is disabled. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Returns the ratio of the knob's is current location, which is a number between `0` and `1`.
     * If two knobs are used, this property represents the lower value.
     */
    readonly ratio: number;
    /**
     * Returns the ratio of the upper value's is current location, which is a number between `0` and `1`.
     * If there is only one knob, then this will return `null`.
     */
    readonly ratioUpper: number;
    /**
     * @private
     */
    onChange(val: any): void;
    /**
     * @private
     */
    onTouched(): void;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
export interface ClientRect {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    width?: number;
    height?: number;
    xOffset?: number;
    yOffset?: number;
}
