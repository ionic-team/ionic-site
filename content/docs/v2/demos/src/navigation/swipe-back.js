var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { swipeShouldReset } from '../util/util';
import { GESTURE_GO_BACK_SWIPE } from '../gestures/gesture-controller';
import { SlideEdgeGesture } from '../gestures/slide-edge-gesture';
/**
 * @private
 */
export var SwipeBackGesture = (function (_super) {
    __extends(SwipeBackGesture, _super);
    function SwipeBackGesture(_nav, gestureCtlr, domCtrl) {
        _super.call(this, document.body, {
            direction: 'x',
            edge: 'left',
            maxEdgeStart: 75,
            threshold: 5,
            zone: false,
            domController: domCtrl,
            gesture: gestureCtlr.createGesture({
                name: GESTURE_GO_BACK_SWIPE,
                priority: 20 /* GoBackSwipe */,
                disableScroll: true
            })
        });
        this._nav = _nav;
    }
    SwipeBackGesture.prototype.canStart = function (ev) {
        // the gesture swipe angle must be mainly horizontal and the
        // gesture distance would be relatively short for a swipe back
        // and swipe back must be possible on this nav controller
        return (this._nav.canSwipeBack() &&
            _super.prototype.canStart.call(this, ev));
    };
    SwipeBackGesture.prototype.onSlideBeforeStart = function (ev) {
        this._nav.swipeBackStart();
    };
    SwipeBackGesture.prototype.onSlide = function (slide, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var stepValue = (slide.distance / slide.max);
        this._nav.swipeBackProgress(stepValue);
    };
    SwipeBackGesture.prototype.onSlideEnd = function (slide, ev) {
        var velocity = slide.velocity;
        var currentStepValue = (slide.distance / slide.max);
        var isResetDirecction = velocity < 0;
        var isMovingFast = Math.abs(slide.velocity) > 0.4;
        var isInResetZone = Math.abs(slide.delta) < Math.abs(slide.max) * 0.5;
        var shouldComplete = !swipeShouldReset(isResetDirecction, isMovingFast, isInResetZone);
        this._nav.swipeBackEnd(shouldComplete, currentStepValue, velocity);
    };
    return SwipeBackGesture;
}(SlideEdgeGesture));
//# sourceMappingURL=swipe-back.js.map