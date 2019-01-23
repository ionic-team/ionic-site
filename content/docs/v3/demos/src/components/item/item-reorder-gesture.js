import { CSS, pointerCoord } from '../../util/dom';
import { indexForItem, findReorderItem } from '../item/item-reorder';
import { UIEventManager } from '../../util/ui-event-manager';
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_ACTIVE = 'reorder-active';
/**
 * @private
 */
export var ItemReorderGesture = (function () {
    function ItemReorderGesture(reorderList) {
        this.reorderList = reorderList;
        this.selectedItemEle = null;
        this.events = new UIEventManager(false);
        this.events.pointerEvents({
            element: this.reorderList.getNativeElement(),
            pointerDown: this.onDragStart.bind(this),
            pointerMove: this.onDragMove.bind(this),
            pointerUp: this.onDragEnd.bind(this)
        });
    }
    ItemReorderGesture.prototype.onDragStart = function (ev) {
        if (this.selectedItemEle) {
            return false;
        }
        var reorderElement = ev.target;
        if (reorderElement.nodeName !== 'ION-REORDER') {
            return false;
        }
        var reorderMark = reorderElement['$ionComponent'];
        if (!reorderMark) {
            console.error('ion-reorder does not contain $ionComponent');
            return false;
        }
        this.reorderList._reorderPrepare();
        var item = reorderMark.getReorderNode();
        if (!item) {
            console.error('reorder node not found');
            return false;
        }
        ev.preventDefault();
        // Preparing state
        this.selectedItemEle = item;
        this.selectedItemHeight = item.offsetHeight;
        this.lastYcoord = -100;
        this.lastToIndex = indexForItem(item);
        this.windowHeight = window.innerHeight - AUTO_SCROLL_MARGIN;
        this.lastScrollPosition = this.reorderList._scrollContent(0);
        this.offset = pointerCoord(ev);
        this.offset.y += this.lastScrollPosition;
        item.classList.add(ITEM_REORDER_ACTIVE);
        this.reorderList._reorderStart();
        return true;
    };
    ItemReorderGesture.prototype.onDragMove = function (ev) {
        var selectedItem = this.selectedItemEle;
        if (!selectedItem) {
            return;
        }
        ev.preventDefault();
        // Get coordinate
        var coord = pointerCoord(ev);
        var posY = coord.y;
        // Scroll if we reach the scroll margins
        var scrollPosition = this.scroll(posY);
        // Only perform hit test if we moved at least 30px from previous position
        if (Math.abs(posY - this.lastYcoord) > 30) {
            var overItem = this.itemForCoord(coord);
            if (overItem) {
                var toIndex = indexForItem(overItem);
                if (toIndex !== undefined && (toIndex !== this.lastToIndex || this.emptyZone)) {
                    var fromIndex = indexForItem(selectedItem);
                    this.lastToIndex = toIndex;
                    this.lastYcoord = posY;
                    this.emptyZone = false;
                    this.reorderList._reorderMove(fromIndex, toIndex, this.selectedItemHeight);
                }
            }
            else {
                this.emptyZone = true;
            }
        }
        // Update selected item position
        var ydiff = Math.round(posY - this.offset.y + scrollPosition);
        selectedItem.style[CSS.transform] = "translateY(" + ydiff + "px)";
    };
    ItemReorderGesture.prototype.onDragEnd = function (ev) {
        var _this = this;
        var selectedItem = this.selectedItemEle;
        if (!selectedItem) {
            return;
        }
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        var toIndex = this.lastToIndex;
        var fromIndex = indexForItem(selectedItem);
        var reorderInactive = function () {
            _this.selectedItemEle.style.transition = '';
            _this.selectedItemEle.classList.remove(ITEM_REORDER_ACTIVE);
            _this.selectedItemEle = null;
        };
        if (toIndex === fromIndex) {
            selectedItem.style.transition = 'transform 200ms ease-in-out';
            setTimeout(reorderInactive, 200);
        }
        else {
            reorderInactive();
        }
        this.reorderList._reorderEmit(fromIndex, toIndex);
    };
    ItemReorderGesture.prototype.itemForCoord = function (coord) {
        return itemForPosition(this.offset.x - 100, coord.y, this.reorderList.getNativeElement());
    };
    ItemReorderGesture.prototype.scroll = function (posY) {
        if (posY < AUTO_SCROLL_MARGIN) {
            this.lastScrollPosition = this.reorderList._scrollContent(-SCROLL_JUMP);
        }
        else if (posY > this.windowHeight) {
            this.lastScrollPosition = this.reorderList._scrollContent(SCROLL_JUMP);
        }
        return this.lastScrollPosition;
    };
    /**
     * @private
     */
    ItemReorderGesture.prototype.destroy = function () {
        this.onDragEnd(null);
        this.events.unlistenAll();
        this.events = null;
        this.reorderList = null;
    };
    return ItemReorderGesture;
}());
function itemForPosition(x, y, list) {
    var element = document.elementFromPoint(x, y);
    return findReorderItem(element, list);
}
//# sourceMappingURL=item-reorder-gesture.js.map