import { Component, Directive, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Renderer, Inject, Optional, Output } from '@angular/core';
import { Content } from '../content/content';
import { CSS, zoneRafFrames } from '../../util/dom';
import { Item } from './item';
import { ItemReorderGesture } from '../item/item-reorder-gesture';
import { isTrueProperty, reorderArray } from '../../util/util';
export var ReorderIndexes = (function () {
    function ReorderIndexes(from, to) {
        this.from = from;
        this.to = to;
    }
    ReorderIndexes.prototype.applyTo = function (array) {
        reorderArray(array, this);
    };
    return ReorderIndexes;
}());
/**
 * @name ItemReorder
 * @description
 * Item reorder adds the ability to change an item's order in a group.
 * It can be used within an `ion-list` or `ion-item-group` to provide a
 * visual drag and drop interface.
 *
 * ## Grouping Items
 *
 * All reorderable items must be grouped in the same element. If an item
 * should not be reordered, it shouldn't be included in this group. For
 * example, the following code works because the items are grouped in the
 * `<ion-list>`:
 *
 *  ```html
 *  <ion-list reorder="true">
 *    <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *  </ion-list>
 *  ```
 *
 * However, the below list includes a header that shouldn't be reordered:
 *
 *  ```html
 *  <ion-list reorder="true">
 *    <ion-list-header>Header</ion-list-header>
 *    <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *  </ion-list>
 *  ```
 *
 * In order to mix different sets of items, `ion-item-group` should be used to
 * group the reorderable items:
 *
 *  ```html
 *  <ion-list>
 *    <ion-list-header>Header</ion-list-header>
 *    <ion-item-group reorder="true">
 *      <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *    </ion-item-group>
 *  </ion-list>
 *  ```
 *
 * It's important to note that in this example, the `[reorder]` directive is applied to
 * the `<ion-item-group>` instead of the `<ion-list>`. This way makes it possible to
 * mix items that should and shouldn't be reordered.
 *
 *
 * ## Implementing the Reorder Function
 *
 * When the item is dragged and dropped into the new position, the `(ionItemReorder)` event is
 * emitted. This event provides the initial index (from) and the new index (to) of the reordered
 * item. For example, if the first item is dragged to the fifth position, the event will emit
 * `{from: 0, to: 4}`. Note that the index starts at zero.
 *
 * A function should be called when the event is emitted that handles the reordering of the items.
 * See [usage](#usage) below for some examples.
 *
 *
 * @usage
 *
 * ```html
 * <ion-list>
 *   <ion-list-header>Header</ion-list-header>
 *   <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">
 *     <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *   </ion-item-group>
 * </ion-list>
 * ```
 *
 * ```ts
 * class MyComponent {
 *   items = [];
 *
 *   constructor() {
 *     for (let x = 0; x < 5; x++) {
 *       this.items.push(x);
 *     }
 *   }
 *
 *   reorderItems(indexes) {
 *     let element = this.items[indexes.from];
 *     this.items.splice(indexes.from, 1);
 *     this.items.splice(indexes.to, 0, element);
 *   }
 * }
 * ```
 *
 * Ionic also provides a helper function called `reorderArray` to
 * reorder the array of items. This can be used instead:
 *
 * ```ts
 * import { reorderArray } from 'ionic-angular';
 *
 * class MyComponent {
 *   items = [];
 *
 *   constructor() {
 *     for (let x = 0; x < 5; x++) {
 *       this.items.push(x);
 *     }
 *   }
 *
 *   reorderItems(indexes) {
 *     this.items = reorderArray(this.items, indexes);
 *   }
 * }
 * ```
 * Alternatevely you can execute helper function inside template:
 *
 * ```html
 * <ion-list>
 *   <ion-list-header>Header</ion-list-header>
 *   <ion-item-group reorder="true" (ionItemReorder)="$event.applyTo(items)">
 *     <ion-item *ngFor="let item of items">{% raw %}{{ item }}{% endraw %}</ion-item>
 *   </ion-item-group>
 * </ion-list>
 * ```
 *
 * @demo /docs//demos/src/item-reorder/
 * @see {@link /docs//components#lists List Component Docs}
 * @see {@link ../../list/List List API Docs}
 * @see {@link ../Item Item API Docs}
 */
export var ItemReorder = (function () {
    function ItemReorder(elementRef, _rendered, _zone, _content) {
        this._rendered = _rendered;
        this._zone = _zone;
        this._content = _content;
        this._enableReorder = false;
        this._visibleReorder = false;
        this._lastToIndex = -1;
        /**
         * @output {object} The expression to evaluate when the item is reordered. Emits an object
         * with `from` and `to` properties.
         */
        this.ionItemReorder = new EventEmitter();
        this._element = elementRef.nativeElement;
    }
    /**
     * @private
     */
    ItemReorder.prototype.ngOnDestroy = function () {
        this._element = null;
        this._reorderGesture && this._reorderGesture.destroy();
    };
    Object.defineProperty(ItemReorder.prototype, "reorder", {
        /**
         * @private
         */
        get: function () {
            return this._enableReorder;
        },
        set: function (val) {
            var _this = this;
            var enabled = isTrueProperty(val);
            if (!enabled && this._reorderGesture) {
                this._reorderGesture.destroy();
                this._reorderGesture = null;
                this._visibleReorder = false;
                setTimeout(function () { return _this._enableReorder = false; }, 400);
            }
            else if (enabled && !this._reorderGesture) {
                console.debug('enableReorderItems');
                this._reorderGesture = new ItemReorderGesture(this);
                this._enableReorder = true;
                zoneRafFrames(2, function () { return _this._visibleReorder = true; });
            }
        },
        enumerable: true,
        configurable: true
    });
    ItemReorder.prototype._reorderPrepare = function () {
        var ele = this._element;
        var children = ele.children;
        for (var i = 0, ilen = children.length; i < ilen; i++) {
            var child = children[i];
            child.$ionIndex = i;
            child.$ionReorderList = ele;
        }
    };
    ItemReorder.prototype._reorderStart = function () {
        this.setElementClass('reorder-list-active', true);
    };
    ItemReorder.prototype._reorderEmit = function (fromIndex, toIndex) {
        var _this = this;
        this._reorderReset();
        if (fromIndex !== toIndex) {
            this._zone.run(function () {
                var indexes = new ReorderIndexes(fromIndex, toIndex);
                _this.ionItemReorder.emit(indexes);
            });
        }
    };
    ItemReorder.prototype._scrollContent = function (scroll) {
        var scrollTop = this._content.scrollTop + scroll;
        if (scroll !== 0) {
            this._content.scrollTo(0, scrollTop, 0);
        }
        return scrollTop;
    };
    ItemReorder.prototype._reorderReset = function () {
        var children = this._element.children;
        var len = children.length;
        this.setElementClass('reorder-list-active', false);
        var transform = CSS.transform;
        for (var i = 0; i < len; i++) {
            children[i].style[transform] = '';
        }
        this._lastToIndex = -1;
    };
    ItemReorder.prototype._reorderMove = function (fromIndex, toIndex, itemHeight) {
        if (this._lastToIndex === -1) {
            this._lastToIndex = fromIndex;
        }
        var lastToIndex = this._lastToIndex;
        this._lastToIndex = toIndex;
        // TODO: I think both loops can be merged into a single one
        // but I had no luck last time I tried
        /********* DOM READ ********** */
        var children = this._element.children;
        /********* DOM WRITE ********* */
        var transform = CSS.transform;
        if (toIndex >= lastToIndex) {
            for (var i = lastToIndex; i <= toIndex; i++) {
                if (i !== fromIndex) {
                    children[i].style[transform] = (i > fromIndex)
                        ? "translateY(" + -itemHeight + "px)" : '';
                }
            }
        }
        if (toIndex <= lastToIndex) {
            for (var i = toIndex; i <= lastToIndex; i++) {
                if (i !== fromIndex) {
                    children[i].style[transform] = (i < fromIndex)
                        ? "translateY(" + itemHeight + "px)" : '';
                }
            }
        }
    };
    /**
     * @private
     */
    ItemReorder.prototype.setElementClass = function (classname, add) {
        this._rendered.setElementClass(this._element, classname, add);
    };
    /**
     * @private
     */
    ItemReorder.prototype.getNativeElement = function () {
        return this._element;
    };
    ItemReorder.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-list[reorder],ion-item-group[reorder]',
                    host: {
                        '[class.reorder-enabled]': '_enableReorder',
                        '[class.reorder-visible]': '_visibleReorder',
                    }
                },] },
    ];
    /** @nocollapse */
    ItemReorder.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
        { type: NgZone, },
        { type: Content, decorators: [{ type: Optional },] },
    ];
    ItemReorder.propDecorators = {
        'ionItemReorder': [{ type: Output },],
        'reorder': [{ type: Input },],
    };
    return ItemReorder;
}());
/**
 * @private
 */
export var Reorder = (function () {
    function Reorder(item, elementRef) {
        this.item = item;
        this.elementRef = elementRef;
        elementRef.nativeElement['$ionComponent'] = this;
    }
    Reorder.prototype.getReorderNode = function () {
        var node = this.item.getNativeElement();
        return findReorderItem(node, null);
    };
    Reorder.prototype.onClick = function (ev) {
        // Stop propagation if click event reaches ion-reorder
        ev.preventDefault();
        ev.stopPropagation();
    };
    Reorder.decorators = [
        { type: Component, args: [{
                    selector: 'ion-reorder',
                    template: "<ion-icon name=\"reorder\"></ion-icon>"
                },] },
    ];
    /** @nocollapse */
    Reorder.ctorParameters = [
        { type: ItemReorder, decorators: [{ type: Inject, args: [forwardRef(function () { return Item; }),] },] },
        { type: ElementRef, },
    ];
    Reorder.propDecorators = {
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return Reorder;
}());
/**
 * @private
 */
export function findReorderItem(node, listNode) {
    var nested = 0;
    while (node && nested < 4) {
        if (indexForItem(node) !== undefined) {
            if (listNode && node.parentNode !== listNode) {
                return null;
            }
            return node;
        }
        node = node.parentNode;
        nested++;
    }
    return null;
}
/**
 * @private
 */
export function indexForItem(element) {
    return element['$ionIndex'];
}
/**
 * @private
 */
export function reorderListForItem(element) {
    return element['$ionReorderList'];
}
//# sourceMappingURL=item-reorder.js.map