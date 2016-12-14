import { Directive, HostListener, Optional } from '@angular/core';
import { DeepLinker } from '../../navigation/deep-linker';
import { NavController } from '../../navigation/nav-controller';
import { ViewController } from '../../navigation/view-controller';
/**
 * @name NavPop
 * @description
 * Directive to declaratively pop the current page off from the
 * navigation stack.
 *
 * @usage
 * ```html
 * <ion-content>
 *
 *  <button ion-button navPop>Go Back</button>
 *
 * </ion-content>
 * ```
 *
 * Similar to {@link /docs/v2/api/components/nav/NavPush/ `NavPush` }
 * @demo /docs/v2/demos/src/navigation/
 * @see {@link /docs/v2/components#navigation Navigation Component Docs}
 * @see {@link ../NavPush NavPush API Docs}
 */
export var NavPop = (function () {
    function NavPop(_nav) {
        this._nav = _nav;
        if (!_nav) {
            console.error('navPop must be within a NavController');
        }
    }
    /**
     * @private
     */
    NavPop.prototype.onClick = function () {
        // If no target, or if target is _self, prevent default browser behavior
        if (this._nav) {
            this._nav.pop(null, null);
            return false;
        }
        return true;
    };
    NavPop.decorators = [
        { type: Directive, args: [{
                    selector: '[navPop]'
                },] },
    ];
    /** @nocollapse */
    NavPop.ctorParameters = [
        { type: NavController, decorators: [{ type: Optional },] },
    ];
    NavPop.propDecorators = {
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
    return NavPop;
}());
/**
 * @private
 */
export var NavPopAnchor = (function () {
    function NavPopAnchor(host, linker, viewCtrl) {
        this.host = host;
        this.linker = linker;
        this.viewCtrl = viewCtrl;
    }
    NavPopAnchor.prototype.updateHref = function () {
        if (this.host && this.viewCtrl) {
            var previousView = this.host._nav.getPrevious(this.viewCtrl);
            this._href = (previousView && this.linker.createUrl(this.host._nav, this.viewCtrl.component, this.viewCtrl.data)) || '#';
        }
        else {
            this._href = '#';
        }
    };
    NavPopAnchor.prototype.ngAfterContentInit = function () {
        this.updateHref();
    };
    NavPopAnchor.decorators = [
        { type: Directive, args: [{
                    selector: 'a[navPop]',
                    host: {
                        '[attr.href]': '_href'
                    }
                },] },
    ];
    /** @nocollapse */
    NavPopAnchor.ctorParameters = [
        { type: NavPop, decorators: [{ type: Optional },] },
        { type: DeepLinker, },
        { type: ViewController, decorators: [{ type: Optional },] },
    ];
    return NavPopAnchor;
}());
//# sourceMappingURL=nav-pop.js.map