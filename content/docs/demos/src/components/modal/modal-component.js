import { Component, ComponentFactoryResolver, HostListener, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { Key } from '../../util/key';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { GestureController, GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE } from '../../gestures/gesture-controller';
import { assert } from '../../util/util';
/**
 * @private
 */
export var ModalCmp = (function () {
    function ModalCmp(_cfr, _renderer, _navParams, _viewCtrl, gestureCtrl) {
        this._cfr = _cfr;
        this._renderer = _renderer;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        var opts = _navParams.get('opts');
        assert(opts, 'modal data must be valid');
        this._gestureBlocker = gestureCtrl.createBlocker({
            disable: [GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE]
        });
        this._bdDismiss = opts.enableBackdropDismiss;
    }
    ModalCmp.prototype.ionViewPreLoad = function () {
        this._load(this._navParams.data.component);
    };
    /** @private */
    ModalCmp.prototype._load = function (component) {
        if (component) {
            var componentFactory = this._cfr.resolveComponentFactory(component);
            // ******** DOM WRITE ****************
            var componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
            this._viewCtrl._setInstance(componentRef.instance);
            this._setCssClass(componentRef, 'ion-page');
            this._setCssClass(componentRef, 'show-page');
            this._enabled = true;
            this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
            this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
        }
    };
    ModalCmp.prototype._viewWillEnter = function () {
        this._gestureBlocker.block();
    };
    ModalCmp.prototype._viewDidLeave = function () {
        this._gestureBlocker.unblock();
    };
    /** @private */
    ModalCmp.prototype._setCssClass = function (componentRef, className) {
        this._renderer.setElementClass(componentRef.location.nativeElement, className, true);
    };
    ModalCmp.prototype._bdClick = function () {
        if (this._enabled && this._bdDismiss) {
            return this._viewCtrl.dismiss(null, 'backdrop').catch(function () {
                console.debug('Dismiss modal by clicking backdrop was cancelled');
            });
        }
    };
    ModalCmp.prototype._keyUp = function (ev) {
        if (this._enabled && this._viewCtrl.isLast() && ev.keyCode === Key.ESCAPE) {
            this._bdClick();
        }
    };
    ModalCmp.prototype.ngOnDestroy = function () {
        assert(this._gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this._gestureBlocker.destroy();
    };
    ModalCmp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-modal',
                    template: '<ion-backdrop (click)="_bdClick()" [class.backdrop-no-tappable]="!_bdDismiss"></ion-backdrop>' +
                        '<div class="modal-wrapper">' +
                        '<div #viewport nav-viewport></div>' +
                        '</div>'
                },] },
    ];
    /** @nocollapse */
    ModalCmp.ctorParameters = [
        { type: ComponentFactoryResolver, },
        { type: Renderer, },
        { type: NavParams, },
        { type: ViewController, },
        { type: GestureController, },
    ];
    ModalCmp.propDecorators = {
        '_viewport': [{ type: ViewChild, args: ['viewport', { read: ViewContainerRef },] },],
        '_keyUp': [{ type: HostListener, args: ['body:keyup', ['$event'],] },],
    };
    return ModalCmp;
}());
//# sourceMappingURL=modal-component.js.map