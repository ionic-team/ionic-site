var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../../animations/animation';
import { Transition } from '../../transitions/transition';
/**
 * Animations for pickers
 */
export var PickerSlideIn = (function (_super) {
    __extends(PickerSlideIn, _super);
    function PickerSlideIn() {
        _super.apply(this, arguments);
    }
    PickerSlideIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.picker-wrapper'));
        backdrop.fromTo('opacity', 0.01, 0.26);
        wrapper.fromTo('translateY', '100%', '0%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdrop).add(wrapper);
    };
    return PickerSlideIn;
}(Transition));
export var PickerSlideOut = (function (_super) {
    __extends(PickerSlideOut, _super);
    function PickerSlideOut() {
        _super.apply(this, arguments);
    }
    PickerSlideOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.picker-wrapper'));
        backdrop.fromTo('opacity', 0.26, 0);
        wrapper.fromTo('translateY', '0%', '100%');
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(backdrop).add(wrapper);
    };
    return PickerSlideOut;
}(Transition));
//# sourceMappingURL=picker-transitions.js.map