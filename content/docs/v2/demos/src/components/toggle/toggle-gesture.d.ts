import { GestureController } from '../../gestures/gesture-controller';
import { PanGesture } from '../../gestures/drag-gesture';
import { DomController } from '../../util/dom-controller';
import { Toggle } from './toggle';
/**
 * @private
 */
export declare class ToggleGesture extends PanGesture {
    toogle: Toggle;
    constructor(toogle: Toggle, gestureCtrl: GestureController, domCtrl: DomController);
    canStart(ev: any): boolean;
    onDragStart(ev: any): void;
    onDragMove(ev: any): void;
    onDragEnd(ev: any): void;
}
