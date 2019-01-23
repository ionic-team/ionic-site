import { Component, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { isDefined, isUndefined, assert } from '../../util/util';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { GestureController, BLOCK_ALL } from '../../gestures/gesture-controller';
/**
* @private
*/
export var LoadingCmp = (function () {
    function LoadingCmp(_viewCtrl, _config, _elementRef, gestureCtrl, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        this._elementRef = _elementRef;
        assert(params.data, 'params data must be valid');
        this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
        this.d = params.data;
        renderer.setElementClass(_elementRef.nativeElement, "loading-" + _config.get('mode'), true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(function (cssClass) {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++loadingIds);
    }
    LoadingCmp.prototype.ngOnInit = function () {
        // If no spinner was passed in loading options we need to fall back
        // to the loadingSpinner in the app's config, then the mode spinner
        if (isUndefined(this.d.spinner)) {
            this.d.spinner = this._config.get('loadingSpinner', this._config.get('spinner', 'ios'));
        }
        // If the user passed hide to the spinner we don't want to show it
        this.showSpinner = isDefined(this.d.spinner) && this.d.spinner !== 'hide';
    };
    LoadingCmp.prototype.ionViewWillEnter = function () {
        this.gestureBlocker.block();
    };
    LoadingCmp.prototype.ionViewDidLeave = function () {
        this.gestureBlocker.unblock();
    };
    LoadingCmp.prototype.ionViewDidEnter = function () {
        var _this = this;
        var activeElement = document.activeElement;
        activeElement && activeElement.blur();
        // If there is a duration, dismiss after that amount of time
        if (this.d && this.d.duration) {
            this.durationTimeout = setTimeout(function () { return _this.dismiss('backdrop'); }, this.d.duration);
        }
    };
    LoadingCmp.prototype.dismiss = function (role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return this._viewCtrl.dismiss(null, role);
    };
    LoadingCmp.prototype.ngOnDestroy = function () {
        assert(this.gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this.gestureBlocker.destroy();
    };
    LoadingCmp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-loading',
                    template: '<ion-backdrop [hidden]="!d.showBackdrop"></ion-backdrop>' +
                        '<div class="loading-wrapper">' +
                        '<div *ngIf="showSpinner" class="loading-spinner">' +
                        '<ion-spinner [name]="d.spinner"></ion-spinner>' +
                        '</div>' +
                        '<div *ngIf="d.content" [innerHTML]="d.content" class="loading-content"></div>' +
                        '</div>',
                    host: {
                        'role': 'dialog'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    LoadingCmp.ctorParameters = [
        { type: ViewController, },
        { type: Config, },
        { type: ElementRef, },
        { type: GestureController, },
        { type: NavParams, },
        { type: Renderer, },
    ];
    return LoadingCmp;
}());
var loadingIds = -1;
//# sourceMappingURL=loading-component.js.map