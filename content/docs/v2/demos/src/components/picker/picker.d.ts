import { EventEmitter } from '@angular/core';
import { App } from '../app/app';
import { NavOptions } from '../../navigation/nav-util';
import { PickerOptions, PickerColumn } from './picker-options';
import { ViewController } from '../../navigation/view-controller';
/**
 * @private
 */
export declare class Picker extends ViewController {
    private _app;
    ionChange: EventEmitter<any>;
    constructor(app: App, opts?: PickerOptions);
    /**
    * @private
    */
    getTransitionName(direction: string): any;
    /**
     * @param {any} button Picker toolbar button
     */
    addButton(button: any): void;
    /**
     * @param {any} button Picker toolbar button
     */
    addColumn(column: PickerColumn): void;
    getColumns(): PickerColumn[];
    refresh(): void;
    /**
     * @param {string} cssClass CSS class name to add to the picker's outer wrapper.
     */
    setCssClass(cssClass: string): void;
    /**
     * Present the picker instance.
     *
     * @param {NavOptions} [opts={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions?: NavOptions): Promise<any>;
}
/**
 * @private
 * @name PickerController
 * @description
 *
 */
export declare class PickerController {
    private _app;
    constructor(_app: App);
    /**
     * Open a picker.
     */
    create(opts?: PickerOptions): Picker;
}
