import { isArray, isPresent } from '../util/util';
import { isViewController, ViewController } from './view-controller';
export function getComponent(linker, nameOrPageOrView) {
    if (typeof nameOrPageOrView === 'function') {
        return nameOrPageOrView;
    }
    if (typeof nameOrPageOrView === 'string') {
        return linker.getComponentFromName(nameOrPageOrView);
    }
    return null;
}
export function convertToView(linker, nameOrPageOrView, params) {
    if (nameOrPageOrView) {
        if (isViewController(nameOrPageOrView)) {
            // is already a ViewController
            return nameOrPageOrView;
        }
        var component = getComponent(linker, nameOrPageOrView);
        if (component) {
            return new ViewController(component, params);
        }
    }
    console.error("invalid page component: " + nameOrPageOrView);
    return null;
}
export function convertToViews(linker, pages) {
    var views = [];
    if (isArray(pages)) {
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page) {
                if (isViewController(page)) {
                    views.push(page);
                }
                else if (page.page) {
                    views.push(convertToView(linker, page.page, page.params));
                }
                else {
                    views.push(convertToView(linker, page, null));
                }
            }
        }
    }
    return views;
}
var portalZindex = 9999;
export function setZIndex(nav, enteringView, leavingView, direction, renderer) {
    if (enteringView) {
        if (nav._isPortal) {
            enteringView._setZIndex(nav._zIndexOffset + portalZindex, renderer);
            portalZindex++;
            return;
        }
        leavingView = leavingView || nav.getPrevious(enteringView);
        if (leavingView && isPresent(leavingView._zIndex)) {
            if (direction === DIRECTION_BACK) {
                enteringView._setZIndex(leavingView._zIndex - 1, renderer);
            }
            else {
                enteringView._setZIndex(leavingView._zIndex + 1, renderer);
            }
        }
        else {
            enteringView._setZIndex(INIT_ZINDEX + nav._zIndexOffset, renderer);
        }
    }
}
export function isTabs(nav) {
    // Tabs (ion-tabs)
    return !!nav && !!nav.getSelected;
}
export function isTab(nav) {
    // Tab (ion-tab)
    return !!nav && isPresent(nav._tabId);
}
export function isNav(nav) {
    // Nav (ion-nav), Tab (ion-tab), Portal (ion-portal)
    return !!nav && !!nav.push;
}
/**
 * @private
 */
export var DeepLinkMetadata = (function () {
    function DeepLinkMetadata() {
    }
    return DeepLinkMetadata;
}());
/**
 * @private
 */
export var DeepLink;
export var ViewState;
(function (ViewState) {
    ViewState[ViewState["INITIALIZED"] = 0] = "INITIALIZED";
    ViewState[ViewState["PRE_RENDERED"] = 1] = "PRE_RENDERED";
    ViewState[ViewState["LOADED"] = 2] = "LOADED";
})(ViewState || (ViewState = {}));
export var INIT_ZINDEX = 100;
export var DIRECTION_BACK = 'back';
export var DIRECTION_FORWARD = 'forward';
export var DIRECTION_SWITCH = 'switch';
//# sourceMappingURL=nav-util.js.map