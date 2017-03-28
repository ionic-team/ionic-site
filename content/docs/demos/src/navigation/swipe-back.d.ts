import { GestureController } from '../gestures/gesture-controller';
import { NavControllerBase } from './nav-controller-base';
import { SlideData } from '../gestures/slide-gesture';
import { SlideEdgeGesture } from '../gestures/slide-edge-gesture';
import { DomController } from '../util/dom-controller';
/**
 * @private
 */
export declare class SwipeBackGesture extends SlideEdgeGesture {
    private _nav;
    constructor(_nav: NavControllerBase, gestureCtlr: GestureController, domCtrl: DomController);
    canStart(ev: any): boolean;
    onSlideBeforeStart(ev: any): void;
    onSlide(slide: SlideData, ev: any): void;
    onSlideEnd(slide: SlideData, ev: any): void;
}
