var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../../animations/animation';
import { Transition } from '../../transitions/transition';
/**
 * Animations for loading
 */
export var LoadingPopIn = (function (_super) {
    __extends(LoadingPopIn, _super);
    function LoadingPopIn() {
        _super.apply(this, arguments);
    }
    LoadingPopIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.3);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingPopIn;
}(Transition));
export var LoadingPopOut = (function (_super) {
    __extends(LoadingPopOut, _super);
    function LoadingPopOut() {
        _super.apply(this, arguments);
    }
    LoadingPopOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.3, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingPopOut;
}(Transition));
export var LoadingMdPopIn = (function (_super) {
    __extends(LoadingMdPopIn, _super);
    function LoadingMdPopIn() {
        _super.apply(this, arguments);
    }
    LoadingMdPopIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        backdrop.fromTo('opacity', 0.01, 0.5);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingMdPopIn;
}(Transition));
export var LoadingMdPopOut = (function (_super) {
    __extends(LoadingMdPopOut, _super);
    function LoadingMdPopOut() {
        _super.apply(this, arguments);
    }
    LoadingMdPopOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        backdrop.fromTo('opacity', 0.5, 0);
        this
            .easing('ease-in-out')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingMdPopOut;
}(Transition));
export var LoadingWpPopIn = (function (_super) {
    __extends(LoadingWpPopIn, _super);
    function LoadingWpPopIn() {
        _super.apply(this, arguments);
    }
    LoadingWpPopIn.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.3, 1);
        backdrop.fromTo('opacity', 0.01, 0.16);
        this
            .easing('cubic-bezier(0,0,0.05,1)')
            .duration(200)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingWpPopIn;
}(Transition));
export var LoadingWpPopOut = (function (_super) {
    __extends(LoadingWpPopOut, _super);
    function LoadingWpPopOut() {
        _super.apply(this, arguments);
    }
    LoadingWpPopOut.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new Animation(ele.querySelector('ion-backdrop'));
        var wrapper = new Animation(ele.querySelector('.loading-wrapper'));
        wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 1.3);
        backdrop.fromTo('opacity', 0.16, 0);
        this
            .easing('ease-out')
            .duration(150)
            .add(backdrop)
            .add(wrapper);
    };
    return LoadingWpPopOut;
}(Transition));
//# sourceMappingURL=loading-transitions.js.map