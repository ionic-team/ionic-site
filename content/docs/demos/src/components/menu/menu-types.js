var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../../animations/animation';
import { MenuController } from './menu-controller';
/**
 * @private
 * Menu Type
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
export var MenuType = (function () {
    function MenuType() {
        this.ani = new Animation();
        this.ani
            .easing('cubic-bezier(0.0, 0.0, 0.2, 1)')
            .easingReverse('cubic-bezier(0.4, 0.0, 0.6, 1)')
            .duration(280);
    }
    MenuType.prototype.setOpen = function (shouldOpen, animated, done) {
        var ani = this.ani
            .onFinish(done, true)
            .reverse(!shouldOpen);
        if (animated) {
            ani.play();
        }
        else {
            ani.play({ duration: 0 });
        }
    };
    MenuType.prototype.setProgressStart = function (isOpen) {
        this.isOpening = !isOpen;
        // the cloned animation should not use an easing curve during seek
        this.ani
            .reverse(isOpen)
            .progressStart();
    };
    MenuType.prototype.setProgessStep = function (stepValue) {
        // adjust progress value depending if it opening or closing
        this.ani.progressStep(stepValue);
    };
    MenuType.prototype.setProgressEnd = function (shouldComplete, currentStepValue, velocity, done) {
        var _this = this;
        var isOpen = (this.isOpening && shouldComplete);
        if (!this.isOpening && !shouldComplete) {
            isOpen = true;
        }
        this.ani.onFinish(function () {
            _this.isOpening = false;
            done(isOpen);
        }, true);
        var factor = 1 - Math.min(Math.abs(velocity) / 4, 0.7);
        var dur = this.ani.getDuration() * factor;
        this.ani.progressEnd(shouldComplete, currentStepValue, dur);
    };
    MenuType.prototype.destroy = function () {
        this.ani && this.ani.destroy();
    };
    return MenuType;
}());
/**
 * @private
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
var MenuRevealType = (function (_super) {
    __extends(MenuRevealType, _super);
    function MenuRevealType(menu, platform) {
        _super.call(this);
        var openedX = (menu.width() * (menu.side === 'right' ? -1 : 1)) + 'px';
        var contentOpen = new Animation(menu.getContentElement());
        contentOpen.fromTo('translateX', '0px', openedX);
        this.ani.add(contentOpen);
    }
    return MenuRevealType;
}(MenuType));
MenuController.registerType('reveal', MenuRevealType);
/**
 * @private
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
var MenuPushType = (function (_super) {
    __extends(MenuPushType, _super);
    function MenuPushType(menu, platform) {
        _super.call(this);
        var contentOpenedX, menuClosedX, menuOpenedX;
        if (menu.side === 'right') {
            // right side
            contentOpenedX = -menu.width() + 'px';
            menuClosedX = menu.width() + 'px';
            menuOpenedX = '0px';
        }
        else {
            contentOpenedX = menu.width() + 'px';
            menuOpenedX = '0px';
            menuClosedX = -menu.width() + 'px';
        }
        var menuAni = new Animation(menu.getMenuElement());
        menuAni.fromTo('translateX', menuClosedX, menuOpenedX);
        this.ani.add(menuAni);
        var contentApi = new Animation(menu.getContentElement());
        contentApi.fromTo('translateX', '0px', contentOpenedX);
        this.ani.add(contentApi);
    }
    return MenuPushType;
}(MenuType));
MenuController.registerType('push', MenuPushType);
/**
 * @private
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
var MenuOverlayType = (function (_super) {
    __extends(MenuOverlayType, _super);
    function MenuOverlayType(menu, platform) {
        _super.call(this);
        var closedX, openedX;
        if (menu.side === 'right') {
            // right side
            closedX = 8 + menu.width() + 'px';
            openedX = '0px';
        }
        else {
            // left side
            closedX = -(8 + menu.width()) + 'px';
            openedX = '0px';
        }
        var menuAni = new Animation(menu.getMenuElement());
        menuAni.fromTo('translateX', closedX, openedX);
        this.ani.add(menuAni);
        var backdropApi = new Animation(menu.getBackdropElement());
        backdropApi.fromTo('opacity', 0.01, 0.35);
        this.ani.add(backdropApi);
    }
    return MenuOverlayType;
}(MenuType));
MenuController.registerType('overlay', MenuOverlayType);
//# sourceMappingURL=menu-types.js.map