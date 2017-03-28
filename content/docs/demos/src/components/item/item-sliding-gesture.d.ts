import { List } from '../list/list';
import { GestureController } from '../../gestures/gesture-controller';
import { PanGesture } from '../../gestures/drag-gesture';
import { DomController } from '../../util/dom-controller';
/**
 * @private
 */
export declare class ItemSlidingGesture extends PanGesture {
    list: List;
    private preSelectedContainer;
    private selectedContainer;
    private openContainer;
    private firstCoordX;
    private firstTimestamp;
    constructor(list: List, gestureCtrl: GestureController, domCtrl: DomController);
    canStart(ev: any): boolean;
    onDragStart(ev: any): void;
    onDragMove(ev: any): void;
    onDragEnd(ev: any): void;
    notCaptured(ev: any): void;
    closeOpened(): boolean;
    destroy(): void;
}
