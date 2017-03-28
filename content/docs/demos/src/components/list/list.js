var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { isTrueProperty } from '../../util/util';
import { ItemSlidingGesture } from '../item/item-sliding-gesture';
import { GestureController } from '../../gestures/gesture-controller';
import { DomController } from '../../util/dom-controller';
/**
 * The List is a widely used interface element in almost any mobile app,
 * and can include content ranging from basic text all the way to
 * buttons, toggles, icons, and thumbnails.
 *
 * Both the list, which contains items, and the list items themselves
 * can be any HTML element.
 *
 * Using the List and Item components make it easy to support various
 * interaction modes such as swipe to edit, drag to reorder, and
 * removing items.
 *
 * @demo /docs//demos/src/list/
 * @see {@link /docs//components#lists List Component Docs}
 * @advanced
 *
 * Enable the sliding items.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { List } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyClass {
 *   @ViewChild(List) list: List;
 *
 *   constructor() { }
 *
 *   stopSliding() {
 *     this.list.enableSlidingItems(false);
 *   }
 * }
 * ```
 *
 */
export var List = (function (_super) {
    __extends(List, _super);
    function List(config, elementRef, renderer, _gestureCtrl, _domCtrl) {
        _super.call(this, config, elementRef, renderer, 'list');
        this._gestureCtrl = _gestureCtrl;
        this._domCtrl = _domCtrl;
        this._enableSliding = true;
        this._containsSlidingItems = false;
    }
    Object.defineProperty(List.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "sliding", {
        /**
         * @input {boolean} shouldEnable whether the item-sliding should be enabled or not
         */
        get: function () {
            return this._enableSliding;
        },
        set: function (val) {
            this._enableSliding = isTrueProperty(val);
            this._updateSlidingState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    List.prototype.containsSlidingItem = function (contains) {
        this._containsSlidingItems = contains;
        this._updateSlidingState();
    };
    List.prototype._updateSlidingState = function () {
        var shouldSlide = this._enableSliding && this._containsSlidingItems;
        if (!shouldSlide) {
            this._slidingGesture && this._slidingGesture.destroy();
            this._slidingGesture = null;
        }
        else if (!this._slidingGesture) {
            console.debug('enableSlidingItems');
            this._slidingGesture = new ItemSlidingGesture(this, this._gestureCtrl, this._domCtrl);
            this._slidingGesture.listen();
        }
    };
    /**
     * Close any sliding items that are open.
     */
    List.prototype.closeSlidingItems = function () {
        this._slidingGesture && this._slidingGesture.closeOpened();
    };
    /**
     * @private
     */
    List.prototype.destroy = function () {
        this._slidingGesture && this._slidingGesture.destroy();
    };
    List.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-list',
                },] },
    ];
    /** @nocollapse */
    List.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: GestureController, },
        { type: DomController, },
    ];
    List.propDecorators = {
        'mode': [{ type: Input },],
        'sliding': [{ type: Input },],
    };
    return List;
}(Ion));
//# sourceMappingURL=list.js.map