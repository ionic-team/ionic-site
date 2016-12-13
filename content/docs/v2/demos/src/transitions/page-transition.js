var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Animation } from '../animations/animation';
import { Transition } from './transition';
/**
 * @private
 */
export var PageTransition = (function (_super) {
    __extends(PageTransition, _super);
    function PageTransition() {
        _super.apply(this, arguments);
    }
    PageTransition.prototype.init = function () {
        if (this.enteringView) {
            this.enteringPage = new Animation(this.enteringView.pageRef());
            this.add(this.enteringPage.beforeAddClass('show-page'));
            // Resize content before transition starts
            this.beforeAddRead(this.readDimensions.bind(this));
            this.beforeAddWrite(this.writeDimensions.bind(this));
        }
    };
    /**
     * DOM READ
     */
    PageTransition.prototype.readDimensions = function () {
        var content = this.enteringView.getIONContent();
        if (content) {
            content.readDimensions();
        }
    };
    /**
     * DOM WRITE
     */
    PageTransition.prototype.writeDimensions = function () {
        var content = this.enteringView.getIONContent();
        if (content) {
            content.writeDimensions();
        }
    };
    PageTransition.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.enteringPage = null;
    };
    return PageTransition;
}(Transition));
//# sourceMappingURL=page-transition.js.map