import { ItemReorder } from '../item/item-reorder';
/**
 * @private
 */
export declare class ItemReorderGesture {
    reorderList: ItemReorder;
    private selectedItemEle;
    private selectedItemHeight;
    private offset;
    private lastToIndex;
    private lastYcoord;
    private lastScrollPosition;
    private emptyZone;
    private windowHeight;
    private events;
    constructor(reorderList: ItemReorder);
    private onDragStart(ev);
    private onDragMove(ev);
    private onDragEnd(ev);
    private itemForCoord(coord);
    private scroll(posY);
    /**
     * @private
     */
    destroy(): void;
}
