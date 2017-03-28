var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { SlideEdgeGesture } from '../../gestures/slide-edge-gesture';
import { GESTURE_MENU_SWIPE } from '../../gestures/gesture-controller';
/**
 * Gesture attached to the content which the menu is assigned to
 */
export var MenuContentGesture = (function (_super) {
    __extends(MenuContentGesture, _super);
    function MenuContentGesture(menu, gestureCtrl, domCtrl) {
        _super.call(this, document.body, {
            direction: 'x',
            edge: menu.side,
            threshold: 5,
            maxEdgeStart: menu.maxEdgeStart || 50,
            zone: false,
            passive: true,
            domController: domCtrl,
            gesture: gestureCtrl.createGesture({
                name: GESTURE_MENU_SWIPE,
                priority: 10 /* MenuSwipe */,
                disableScroll: true
            })
        });
        this.menu = menu;
    }
    MenuContentGesture.prototype.canStart = function (ev) {
        var menu = this.menu;
        if (!menu.canSwipe()) {
            return false;
        }
        if (menu.isOpen) {
            return true;
        }
        else if (menu.getMenuController().getOpen()) {
            return false;
        }
        return _super.prototype.canStart.call(this, ev);
    };
    // Set CSS, then wait one frame for it to apply before sliding starts
    MenuContentGesture.prototype.onSlideBeforeStart = function (ev) {
        console.debug('menu gesture, onSlideBeforeStart', this.menu.side);
        this.menu._swipeBeforeStart();
    };
    MenuContentGesture.prototype.onSlideStart = function () {
        console.debug('menu gesture, onSlideStart', this.menu.side);
        this.menu._swipeStart();
    };
    MenuContentGesture.prototype.onSlide = function (slide, ev) {
        var z = (this.menu.side === 'right' ? slide.min : slide.max);
        var stepValue = (slide.distance / z);
        this.menu._swipeProgress(stepValue);
    };
    MenuContentGesture.prototype.onSlideEnd = function (slide, ev) {
        var z = (this.menu.side === 'right' ? slide.min : slide.max);
        var currentStepValue = (slide.distance / z);
        var velocity = slide.velocity;
        z = Math.abs(z * 0.5);
        var shouldCompleteRight = (velocity >= 0)
            && (velocity > 0.2 || slide.delta > z);
        var shouldCompleteLeft = (velocity <= 0)
            && (velocity < -0.2 || slide.delta < -z);
        console.debug('menu gesture, onSlideEnd', this.menu.side, 'distance', slide.distance, 'delta', slide.delta, 'velocity', velocity, 'min', slide.min, 'max', slide.max, 'shouldCompleteLeft', shouldCompleteLeft, 'shouldCompleteRight', shouldCompleteRight, 'currentStepValue', currentStepValue);
        this.menu._swipeEnd(shouldCompleteLeft, shouldCompleteRight, currentStepValue, velocity);
    };
    MenuContentGesture.prototype.getElementStartPos = function (slide, ev) {
        if (this.menu.side === 'right') {
            return this.menu.isOpen ? slide.min : slide.max;
        }
        // left menu
        return this.menu.isOpen ? slide.max : slide.min;
    };
    MenuContentGesture.prototype.getSlideBoundaries = function () {
        if (this.menu.side === 'right') {
            return {
                min: -this.menu.width(),
                max: 0
            };
        }
        // left menu
        return {
            min: 0,
            max: this.menu.width()
        };
    };
    return MenuContentGesture;
}(SlideEdgeGesture));
//# sourceMappingURL=menu-gestures.js.map