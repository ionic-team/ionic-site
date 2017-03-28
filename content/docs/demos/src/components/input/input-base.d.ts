import { ElementRef, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { App } from '../app/app';
import { PointerCoordinates } from '../../util/dom';
import { Config } from '../../config/config';
import { Content, ContentDimensions, ScrollEvent } from '../content/content';
import { DomController } from '../../util/dom-controller';
import { Form, IonicFormInput } from '../../util/form';
import { Ion } from '../ion';
import { Item } from '../item/item';
import { NativeInput, NextInput } from './native-input';
import { NavController } from '../../navigation/nav-controller';
import { NavControllerBase } from '../../navigation/nav-controller-base';
import { Platform } from '../../platform/platform';
/**
 * @private
 * Hopefully someday a majority of the auto-scrolling tricks can get removed.
 */
export declare class InputBase extends Ion implements IonicFormInput {
    protected _form: Form;
    protected _item: Item;
    protected _app: App;
    protected _platform: Platform;
    protected _content: Content;
    protected _dom: DomController;
    _coord: PointerCoordinates;
    _disabled: boolean;
    _keyboardHeight: number;
    _type: string;
    _useAssist: boolean;
    _usePadding: boolean;
    _value: any;
    _isTouch: boolean;
    _autoFocusAssist: string;
    _autoComplete: string;
    _autoCorrect: string;
    _nav: NavControllerBase;
    _native: NativeInput;
    _scrollStart: any;
    _scrollEnd: any;
    _clearOnEdit: boolean;
    _didBlurAfterEdit: boolean;
    inputControl: NgControl;
    constructor(config: Config, _form: Form, _item: Item, _app: App, _platform: Platform, elementRef: ElementRef, renderer: Renderer, _content: Content, nav: NavController, ngControl: NgControl, _dom: DomController);
    scrollHideFocus(ev: ScrollEvent, shouldHideFocus: boolean): void;
    setItemInputControlCss(): void;
    setControlCss(element: any, control: NgControl): void;
    setValue(val: any): void;
    setType(val: string): void;
    setDisabled(val: boolean): void;
    setClearOnEdit(val: boolean): void;
    /**
    * Check if we need to clear the text input if clearOnEdit is enabled
    * @private
    */
    checkClearOnEdit(inputValue: string): void;
    /**
     * Overriden in child input
     * @private
     */
    clearTextInput(): void;
    /**
     * @private
     */
    setNativeInput(nativeInput: NativeInput): void;
    /**
     * @private
     */
    setNextInput(nextInput: NextInput): void;
    /**
     * @private
     * Angular2 Forms API method called by the model (Control) on change to update
     * the checked value.
     * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
     */
    writeValue(val: any): void;
    /**
     * @private
     */
    onChange(val: any): void;
    /**
     * onKeydown handler for clearOnEdit
     * @private
     */
    onKeydown(val: any): void;
    /**
     * @private
     */
    onTouched(val: any): void;
    /**
     * @private
     */
    hasFocus(): boolean;
    /**
     * @private
     */
    hasValue(): boolean;
    /**
     * @private
     */
    checkHasValue(inputValue: any): void;
    /**
     * @private
     */
    focusChange(inputHasFocus: boolean): void;
    pointerStart(ev: any): void;
    pointerEnd(ev: any): void;
    /**
     * @private
     */
    initFocus(): void;
    /**
     * @private
     */
    setFocus(): void;
    /**
     * @private
     * Angular2 Forms API method called by the view (formControlName) to register the
     * onChange event handler that updates the model (Control).
     * @param {Function} fn  the onChange event handler.
     */
    registerOnChange(fn: any): void;
    /**
     * @private
     * Angular2 Forms API method called by the view (formControlName) to register
     * the onTouched event handler that marks model (Control) as touched.
     * @param {Function} fn  onTouched event handler.
     */
    registerOnTouched(fn: any): void;
    focusNext(): void;
}
/**
 * @private
 */
export declare function getScrollData(inputOffsetTop: number, inputOffsetHeight: number, scrollViewDimensions: ContentDimensions, keyboardHeight: number, plaformHeight: number): ScrollData;
export interface ScrollData {
    scrollAmount: number;
    scrollTo: number;
    scrollPadding: number;
    inputSafeY: number;
}
