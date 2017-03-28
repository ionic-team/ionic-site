import { isActivatedDisabled } from './activator-base';
import { Activator } from './activator';
import { CSS, hasPointerMoved, pointerCoord, rafFrames } from '../../util/dom';
/**
 * @private
 */
export var RippleActivator = (function () {
    function RippleActivator(app, config) {
        this._queue = [];
        this._active = [];
        this.highlight = new Activator(app, config);
    }
    RippleActivator.prototype.clickAction = function (ev, activatableEle, startCoord) {
        // Highlight
        this.highlight && this.highlight.clickAction(ev, activatableEle, startCoord);
        // Ripple
        this._clickAction(ev, activatableEle, startCoord);
    };
    RippleActivator.prototype.downAction = function (ev, activatableEle, startCoord) {
        // Highlight
        this.highlight && this.highlight.downAction(ev, activatableEle, startCoord);
        // Ripple
        this._downAction(ev, activatableEle, startCoord);
    };
    RippleActivator.prototype.upAction = function (ev, activatableEle, startCoord) {
        // Highlight
        this.highlight && this.highlight.upAction(ev, activatableEle, startCoord);
        // Ripple
        this._upAction(ev, activatableEle, startCoord);
    };
    RippleActivator.prototype.clearState = function (animated) {
        // Highlight
        this.highlight && this.highlight.clearState(animated);
    };
    RippleActivator.prototype._downAction = function (ev, activatableEle, startCoord) {
        if (isActivatedDisabled(ev, activatableEle)) {
            return;
        }
        this._active.push(activatableEle);
        var j = activatableEle.childElementCount;
        while (j--) {
            var rippleEle = activatableEle.children[j];
            if (rippleEle.classList.contains('button-effect')) {
                // DOM READ
                var clientRect = activatableEle.getBoundingClientRect();
                rippleEle.$top = clientRect.top;
                rippleEle.$left = clientRect.left;
                rippleEle.$width = clientRect.width;
                rippleEle.$height = clientRect.height;
                break;
            }
        }
    };
    RippleActivator.prototype._upAction = function (ev, activatableEle, startCoord) {
        if (!hasPointerMoved(6, startCoord, pointerCoord(ev))) {
            var i = activatableEle.childElementCount;
            while (i--) {
                var rippleEle = activatableEle.children[i];
                if (rippleEle.classList.contains('button-effect')) {
                    // DOM WRITE
                    this.startRippleEffect(rippleEle, activatableEle, startCoord);
                    break;
                }
            }
        }
    };
    RippleActivator.prototype._clickAction = function (ev, activatableEle, startCoord) {
        // NOTHING
    };
    RippleActivator.prototype.startRippleEffect = function (rippleEle, activatableEle, startCoord) {
        if (!startCoord) {
            return;
        }
        var clientPointerX = (startCoord.x - rippleEle.$left);
        var clientPointerY = (startCoord.y - rippleEle.$top);
        var x = Math.max(Math.abs(rippleEle.$width - clientPointerX), clientPointerX) * 2;
        var y = Math.max(Math.abs(rippleEle.$height - clientPointerY), clientPointerY) * 2;
        var diameter = Math.min(Math.max(Math.hypot(x, y), 64), 240);
        if (activatableEle.hasAttribute('ion-item')) {
            diameter = Math.min(diameter, 140);
        }
        clientPointerX -= diameter / 2;
        clientPointerY -= diameter / 2;
        clientPointerX = Math.round(clientPointerX);
        clientPointerY = Math.round(clientPointerY);
        diameter = Math.round(diameter);
        // Reset ripple
        // DOM WRITE
        rippleEle.style.opacity = '';
        rippleEle.style[CSS.transform] = "translate3d(" + clientPointerX + "px, " + clientPointerY + "px, 0px) scale(0.001)";
        rippleEle.style[CSS.transition] = '';
        // Start ripple animation
        var radius = Math.sqrt(rippleEle.$width + rippleEle.$height);
        var scaleTransitionDuration = Math.max(1600 * Math.sqrt(radius / TOUCH_DOWN_ACCEL) + 0.5, 260);
        var opacityTransitionDuration = Math.round(scaleTransitionDuration * 0.7);
        var opacityTransitionDelay = Math.round(scaleTransitionDuration - opacityTransitionDuration);
        scaleTransitionDuration = Math.round(scaleTransitionDuration);
        var transform = "translate3d(" + clientPointerX + "px, " + clientPointerY + "px, 0px) scale(1)";
        var transition = "transform " + scaleTransitionDuration + "ms,opacity " + opacityTransitionDuration + "ms " + opacityTransitionDelay + "ms";
        rafFrames(2, function () {
            // DOM WRITE
            rippleEle.style.width = rippleEle.style.height = diameter + 'px';
            rippleEle.style.opacity = '0';
            rippleEle.style[CSS.transform] = transform;
            rippleEle.style[CSS.transition] = transition;
        });
    };
    return RippleActivator;
}());
var TOUCH_DOWN_ACCEL = 300;
//# sourceMappingURL=ripple.js.map