var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../animations/animation';
import { isPresent } from '../util/util';
import { PageTransition } from './page-transition';
var SHOW_BACK_BTN_CSS = 'show-back-button';
var SCALE_SMALL = .95;
export var WPTransition = (function (_super) {
    __extends(WPTransition, _super);
    function WPTransition() {
        _super.apply(this, arguments);
    }
    WPTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        // what direction is the transition going
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            if (backDirection) {
                this.duration(isPresent(opts.duration) ? opts.duration : 120).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.enteringPage.beforeClearStyles(['scale']);
            }
            else {
                this.duration(isPresent(opts.duration) ? opts.duration : 280).easing('cubic-bezier(0,0,0.05,1)');
                this.enteringPage
                    .fromTo('scale', SCALE_SMALL, 1, true)
                    .fromTo('opacity', 0.01, 1, true);
            }
            if (enteringView.hasNavbar()) {
                var enteringPageEle = enteringView.pageRef().nativeElement;
                var enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
                var enteringNavBar = new Animation(enteringNavbarEle);
                this.add(enteringNavBar);
                var enteringBackButton = new Animation(enteringNavbarEle.querySelector('.back-button'));
                this.add(enteringBackButton);
                if (enteringView.enableBack()) {
                    enteringBackButton.beforeAddClass(SHOW_BACK_BTN_CSS);
                }
                else {
                    enteringBackButton.beforeRemoveClass(SHOW_BACK_BTN_CSS);
                }
            }
        }
        // setup leaving view
        if (leavingView && backDirection) {
            // leaving content
            this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
            var leavingPage = new Animation(leavingView.pageRef());
            this.add(leavingPage.fromTo('scale', 1, SCALE_SMALL).fromTo('opacity', 0.99, 0));
        }
    };
    return WPTransition;
}(PageTransition));
//# sourceMappingURL=transition-wp.js.map