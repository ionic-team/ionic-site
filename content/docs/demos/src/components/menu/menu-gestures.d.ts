import { Menu } from './menu';
import { SlideEdgeGesture } from '../../gestures/slide-edge-gesture';
import { SlideData } from '../../gestures/slide-gesture';
import { GestureController } from '../../gestures/gesture-controller';
import { DomController } from '../../util/dom-controller';
/**
 * Gesture attached to the content which the menu is assigned to
 */
export declare class MenuContentGesture extends SlideEdgeGesture {
    menu: Menu;
    constructor(menu: Menu, gestureCtrl: GestureController, domCtrl: DomController);
    canStart(ev: any): boolean;
    onSlideBeforeStart(ev: any): void;
    onSlideStart(): void;
    onSlide(slide: SlideData, ev: any): void;
    onSlideEnd(slide: SlideData, ev: any): void;
    getElementStartPos(slide: SlideData, ev: any): number;
    getSlideBoundaries(): {
        min: number;
        max: number;
    };
}
