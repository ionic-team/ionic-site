export var ActivatorBase = (function () {
    function ActivatorBase() {
    }
    return ActivatorBase;
}());
export function isActivatedDisabled(ev, activatableEle) {
    if (!activatableEle || !activatableEle.parentNode) {
        return true;
    }
    if (!ev) {
        return false;
    }
    if (ev.defaultPrevented) {
        return true;
    }
    var targetEle = ev.target;
    for (var i = 0; i < 4; i++) {
        if (!targetEle) {
            break;
        }
        if (targetEle.hasAttribute('disable-activated')) {
            return true;
        }
        targetEle = targetEle.parentElement;
    }
    return false;
}
//# sourceMappingURL=activator-base.js.map