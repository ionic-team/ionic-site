import { Component, ComponentFactoryResolver, ElementRef, HostListener, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { Config } from '../../config/config';
import { Key } from '../../util/key';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { GestureController, BLOCK_ALL } from '../../gestures/gesture-controller';
import { assert } from '../../util/util';
/**
 * @private
 */
export var PopoverCmp = (function () {
    function PopoverCmp(_cfr, _elementRef, _renderer, _config, _navParams, _viewCtrl, gestureCtrl) {
        this._cfr = _cfr;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._config = _config;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        this._gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
        this.d = _navParams.data.opts;
        _renderer.setElementClass(_elementRef.nativeElement, "popover-" + _config.get('mode'), true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(function (cssClass) {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    _renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++popoverIds);
    }
    PopoverCmp.prototype.ionViewPreLoad = function () {
        var activeElement = document.activeElement;
        activeElement && activeElement.blur();
        this._load(this._navParams.data.component);
    };
    PopoverCmp.prototype._load = function (component) {
        if (component) {
            var componentFactory = this._cfr.resolveComponentFactory(component);
            // ******** DOM WRITE ****************
            var componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
            this._viewCtrl._setInstance(componentRef.instance);
            this._enabled = true;
            // Subscribe to events in order to block gestures
            // TODO, should we unsubscribe? memory leak?
            this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
            this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
        }
    };
    PopoverCmp.prototype._viewWillEnter = function () {
        this._gestureBlocker.block();
    };
    PopoverCmp.prototype._viewDidLeave = function () {
        this._gestureBlocker.unblock();
    };
    PopoverCmp.prototype._setCssClass = function (componentRef, className) {
        this._renderer.setElementClass(componentRef.location.nativeElement, className, true);
    };
    PopoverCmp.prototype._bdClick = function () {
        if (this._enabled && this.d.enableBackdropDismiss) {
            return this._viewCtrl.dismiss(null, 'backdrop');
        }
    };
    PopoverCmp.prototype._keyUp = function (ev) {
        if (this._enabled && ev.keyCode === Key.ESCAPE && this._viewCtrl.isLast()) {
            this._bdClick();
        }
    };
    PopoverCmp.prototype.ngOnDestroy = function () {
        assert(this._gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this._gestureBlocker.destroy();
    };
    PopoverCmp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-popover',
                    template: '<ion-backdrop (click)="_bdClick()" [hidden]="!d.showBackdrop"></ion-backdrop>' +
                        '<div class="popover-wrapper">' +
                        '<div class="popover-arrow"></div>' +
                        '<div class="popover-content">' +
                        '<div class="popover-viewport">' +
                        '<div #viewport nav-viewport></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                },] },
    ];
    /** @nocollapse */
    PopoverCmp.ctorParameters = [
        { type: ComponentFactoryResolver, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: Config, },
        { type: NavParams, },
        { type: ViewController, },
        { type: GestureController, },
    ];
    PopoverCmp.propDecorators = {
        '_viewport': [{ type: ViewChild, args: ['viewport', { read: ViewContainerRef },] },],
        '_keyUp': [{ type: HostListener, args: ['body:keyup', ['$event'],] },],
    };
    return PopoverCmp;
}());
var popoverIds = -1;
//# sourceMappingURL=popover-component.js.map