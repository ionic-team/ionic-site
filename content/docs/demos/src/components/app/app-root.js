var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, ElementRef, Inject, OpaqueToken, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { App } from './app';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { OverlayPortal } from '../nav/overlay-portal';
import { Platform } from '../../platform/platform';
import { nativeTimeout } from '../../util/dom';
import { assert } from '../../util/util';
export var AppRootToken = new OpaqueToken('USERROOT');
/**
 * @private
 */
export var IonicApp = (function (_super) {
    __extends(IonicApp, _super);
    function IonicApp(_userCmp, _cfr, elementRef, renderer, config, _platform, app) {
        _super.call(this, config, elementRef, renderer);
        this._userCmp = _userCmp;
        this._cfr = _cfr;
        this._platform = _platform;
        // register with App that this is Ionic's appRoot component. tada!
        app._appRoot = this;
        this._stopScrollPlugin = window['IonicStopScroll'];
    }
    IonicApp.prototype.ngOnInit = function () {
        var _this = this;
        // load the user root component
        // into Ionic's root component
        var factory = this._cfr.resolveComponentFactory(this._userCmp);
        var componentRef = this._viewport.createComponent(factory);
        this._renderer.setElementClass(componentRef.location.nativeElement, 'app-root', true);
        componentRef.changeDetectorRef.detectChanges();
        // set the mode class name
        // ios/md/wp
        this.setElementClass(this._config.get('mode'), true);
        var versions = this._platform.versions();
        this._platform.platforms().forEach(function (platformName) {
            // platform-ios
            var platformClass = 'platform-' + platformName;
            _this.setElementClass(platformClass, true);
            var platformVersion = versions[platformName];
            if (platformVersion) {
                // platform-ios9
                platformClass += platformVersion.major;
                _this.setElementClass(platformClass, true);
                // platform-ios9_3
                _this.setElementClass(platformClass + '_' + platformVersion.minor, true);
            }
        });
        // touch devices should not use :hover CSS pseudo
        // enable :hover CSS when the "hoverCSS" setting is not false
        if (this._config.getBoolean('hoverCSS', true)) {
            this.setElementClass('enable-hover', true);
        }
        // sweet, the app root has loaded!
        // which means angular and ionic has fully loaded!
        // fire off the platform prepare ready, which could
        // have been switched out by any of the platform engines
        this._platform.prepareReady();
    };
    /**
     * @private
     */
    IonicApp.prototype._getPortal = function (portal) {
        if (portal === 2 /* LOADING */) {
            return this._loadingPortal;
        }
        if (portal === 3 /* TOAST */) {
            return this._toastPortal;
        }
        // Modals need their own overlay becuase we don't want an ActionSheet
        // or Alert to trigger lifecycle events inside a modal
        if (portal === 1 /* MODAL */) {
            return this._modalPortal;
        }
        return this._overlayPortal;
    };
    /**
     * @private
     */
    IonicApp.prototype._getActivePortal = function () {
        var defaultPortal = this._overlayPortal;
        var modalPortal = this._modalPortal;
        var hasModal = modalPortal.length() > 0;
        var hasDefault = defaultPortal.length() > 0;
        if (!hasModal && !hasDefault) {
            return null;
        }
        else if (hasModal && hasDefault) {
            var defaultIndex = defaultPortal.getActive().getZIndex();
            var modalIndex = modalPortal.getActive().getZIndex();
            if (defaultIndex > modalIndex) {
                return defaultPortal;
            }
            else {
                assert(modalIndex > defaultIndex, 'modal and default zIndex can not be equal');
                return modalPortal;
            }
        }
        if (hasModal) {
            return modalPortal;
        }
        else if (hasDefault) {
            return defaultPortal;
        }
    };
    /**
     * @private
     */
    IonicApp.prototype._disableScroll = function (shouldDisableScroll) {
        var _this = this;
        if (shouldDisableScroll) {
            this.stopScroll().then(function () {
                _this._rafId = nativeTimeout(function () {
                    console.debug('App Root: adding .disable-scroll');
                    _this.setElementClass('disable-scroll', true);
                }, 16 * 2);
            });
        }
        else {
            var plugin = this._stopScrollPlugin;
            if (plugin && plugin.cancel) {
                plugin.cancel();
            }
            clearTimeout(this._rafId);
            console.debug('App Root: removing .disable-scroll');
            this.setElementClass('disable-scroll', false);
        }
    };
    IonicApp.prototype.stopScroll = function () {
        var _this = this;
        if (this._stopScrollPlugin) {
            return new Promise(function (resolve, reject) {
                _this._stopScrollPlugin.stop(function () { return resolve(true); });
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    IonicApp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-app',
                    template: '<div #viewport app-viewport></div>' +
                        '<div #modalPortal overlay-portal></div>' +
                        '<div #overlayPortal overlay-portal></div>' +
                        '<div #loadingPortal class="loading-portal" overlay-portal></div>' +
                        '<div #toastPortal class="toast-portal" [overlay-portal]="10000"></div>' +
                        '<div class="click-block"></div>'
                },] },
    ];
    /** @nocollapse */
    IonicApp.ctorParameters = [
        { type: undefined, decorators: [{ type: Inject, args: [AppRootToken,] },] },
        { type: ComponentFactoryResolver, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: Config, },
        { type: Platform, },
        { type: App, },
    ];
    IonicApp.propDecorators = {
        '_viewport': [{ type: ViewChild, args: ['viewport', { read: ViewContainerRef },] },],
        '_modalPortal': [{ type: ViewChild, args: ['modalPortal', { read: OverlayPortal },] },],
        '_overlayPortal': [{ type: ViewChild, args: ['overlayPortal', { read: OverlayPortal },] },],
        '_loadingPortal': [{ type: ViewChild, args: ['loadingPortal', { read: OverlayPortal },] },],
        '_toastPortal': [{ type: ViewChild, args: ['toastPortal', { read: OverlayPortal },] },],
    };
    return IonicApp;
}(Ion));
;
//# sourceMappingURL=app-root.js.map