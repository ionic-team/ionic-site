var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { EventEmitter, Injectable, Output } from '@angular/core';
import { App } from '../app/app';
import { isPresent } from '../../util/util';
import { PickerCmp } from './picker-component';
import { ViewController } from '../../navigation/view-controller';
/**
 * @private
 */
export var Picker = (function (_super) {
    __extends(Picker, _super);
    function Picker(app, opts) {
        if (opts === void 0) { opts = {}; }
        opts.columns = opts.columns || [];
        opts.buttons = opts.buttons || [];
        opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        _super.call(this, PickerCmp, opts, null);
        this._app = app;
        this.isOverlay = true;
        this.ionChange = new EventEmitter();
    }
    /**
    * @private
    */
    Picker.prototype.getTransitionName = function (direction) {
        var key = (direction === 'back' ? 'pickerLeave' : 'pickerEnter');
        return this._nav && this._nav.config.get(key);
    };
    /**
     * @param {any} button Picker toolbar button
     */
    Picker.prototype.addButton = function (button) {
        this.data.buttons.push(button);
    };
    /**
     * @param {any} button Picker toolbar button
     */
    Picker.prototype.addColumn = function (column) {
        this.data.columns.push(column);
    };
    Picker.prototype.getColumns = function () {
        return this.data.columns;
    };
    Picker.prototype.refresh = function () {
        this._cmp && this._cmp.instance.refresh && this._cmp.instance.refresh();
    };
    /**
     * @param {string} cssClass CSS class name to add to the picker's outer wrapper.
     */
    Picker.prototype.setCssClass = function (cssClass) {
        this.data.cssClass = cssClass;
    };
    /**
     * Present the picker instance.
     *
     * @param {NavOptions} [opts={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    Picker.prototype.present = function (navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        return this._app.present(this, navOptions);
    };
    Picker.propDecorators = {
        'ionChange': [{ type: Output },],
    };
    return Picker;
}(ViewController));
/**
 * @private
 * @name PickerController
 * @description
 *
 */
export var PickerController = (function () {
    function PickerController(_app) {
        this._app = _app;
    }
    /**
     * Open a picker.
     */
    PickerController.prototype.create = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new Picker(this._app, opts);
    };
    PickerController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PickerController.ctorParameters = [
        { type: App, },
    ];
    return PickerController;
}());
//# sourceMappingURL=picker.js.map