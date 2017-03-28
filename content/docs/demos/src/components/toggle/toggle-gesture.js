var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { GESTURE_TOGGLE } from '../../gestures/gesture-controller';
import { PanGesture } from '../../gestures/drag-gesture';
import { pointerCoord } from '../../util/dom';
/**
 * @private
 */
export var ToggleGesture = (function (_super) {
    __extends(ToggleGesture, _super);
    function ToggleGesture(toogle, gestureCtrl, domCtrl) {
        _super.call(this, toogle.getNativeElement(), {
            threshold: 0,
            domController: domCtrl,
            gesture: gestureCtrl.createGesture({
                name: GESTURE_TOGGLE,
                priority: 30 /* Toggle */,
            })
        });
        this.toogle = toogle;
    }
    ToggleGesture.prototype.canStart = function (ev) {
        return true;
    };
    ToggleGesture.prototype.onDragStart = function (ev) {
        ev.preventDefault();
        this.toogle._onDragStart(pointerCoord(ev).x);
    };
    ToggleGesture.prototype.onDragMove = function (ev) {
        ev.preventDefault();
        this.toogle._onDragMove(pointerCoord(ev).x);
    };
    ToggleGesture.prototype.onDragEnd = function (ev) {
        ev.preventDefault();
        this.toogle._onDragEnd(pointerCoord(ev).x);
    };
    return ToggleGesture;
}(PanGesture));
//# sourceMappingURL=toggle-gesture.js.map