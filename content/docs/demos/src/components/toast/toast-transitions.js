var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../../animations/animation';
import { Transition } from '../../transitions/transition';
export var ToastSlideIn = (function (_super) {
    __extends(ToastSlideIn, _super);
    function ToastSlideIn() {
        _super.apply(this, arguments);
    }
    ToastSlideIn.prototype.init = function () {
        // DOM READS
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            // by default, it is -100% hidden (above the screen)
            // so move from that to 10px below top: 0px;
            wrapper.fromTo('translateY', '-100%', 10 + "px");
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            var topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = topPosition + "px";
            wrapper.fromTo('opacity', 0.01, 1);
        }
        else {
            // bottom
            // by default, it is 100% hidden (below the screen),
            // so move from that to 10 px above bottom: 0px
            wrapper.fromTo('translateY', '100%', (0 - 10) + "px");
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(wrapper);
    };
    return ToastSlideIn;
}(Transition));
export var ToastSlideOut = (function (_super) {
    __extends(ToastSlideOut, _super);
    function ToastSlideOut() {
        _super.apply(this, arguments);
    }
    ToastSlideOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', 10 + "px", '-100%');
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', (0 - 10) + "px", '100%');
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(300).add(wrapper);
    };
    return ToastSlideOut;
}(Transition));
export var ToastMdSlideIn = (function (_super) {
    __extends(ToastMdSlideIn, _super);
    function ToastMdSlideIn() {
        _super.apply(this, arguments);
    }
    ToastMdSlideIn.prototype.init = function () {
        // DOM reads
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            // by default, it is -100% hidden (above the screen)
            // so move from that to top: 0px;
            wrapper.fromTo('translateY', '-100%', "0%");
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            var topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = topPosition + "px";
            wrapper.fromTo('opacity', 0.01, 1);
        }
        else {
            // bottom
            // by default, it is 100% hidden (below the screen),
            // so move from that to bottom: 0px
            wrapper.fromTo('translateY', '100%', "0%");
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(wrapper);
    };
    return ToastMdSlideIn;
}(Transition));
export var ToastMdSlideOut = (function (_super) {
    __extends(ToastMdSlideOut, _super);
    function ToastMdSlideOut() {
        _super.apply(this, arguments);
    }
    ToastMdSlideOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', 0 + "%", '-100%');
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('translateY', 0 + "%", '100%');
        }
        this.easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(wrapper);
    };
    return ToastMdSlideOut;
}(Transition));
export var ToastWpPopIn = (function (_super) {
    __extends(ToastWpPopIn, _super);
    function ToastWpPopIn() {
        _super.apply(this, arguments);
    }
    ToastWpPopIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_TOP) {
            // top
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        else if (this.enteringView.data && this.enteringView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just center it and fade it in
            var topPosition = Math.floor(ele.clientHeight / 2 - wrapperEle.clientHeight / 2);
            // DOM WRITE
            wrapperEle.style.top = topPosition + "px";
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        else {
            // bottom
            wrapper.fromTo('opacity', 0.01, 1);
            wrapper.fromTo('scale', 1.3, 1);
        }
        this.easing('cubic-bezier(0,0,0.05,1)').duration(200).add(wrapper);
    };
    return ToastWpPopIn;
}(Transition));
export var ToastWpPopOut = (function (_super) {
    __extends(ToastWpPopOut, _super);
    function ToastWpPopOut() {
        _super.apply(this, arguments);
    }
    ToastWpPopOut.prototype.init = function () {
        // DOM reads
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapperEle = ele.querySelector('.toast-wrapper');
        var wrapper = new Animation(wrapperEle);
        if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_TOP) {
            // top
            // reverse arguments from enter transition
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        else if (this.leavingView.data && this.leavingView.data.position === TOAST_POSITION_MIDDLE) {
            // Middle
            // just fade it out
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        else {
            // bottom
            // reverse arguments from enter transition
            wrapper.fromTo('opacity', 0.99, 0);
            wrapper.fromTo('scale', 1, 1.3);
        }
        // DOM writes
        var EASE = 'ease-out';
        var DURATION = 150;
        this.easing(EASE).duration(DURATION).add(wrapper);
    };
    return ToastWpPopOut;
}(Transition));
var TOAST_POSITION_TOP = 'top';
var TOAST_POSITION_MIDDLE = 'middle';
//# sourceMappingURL=toast-transitions.js.map