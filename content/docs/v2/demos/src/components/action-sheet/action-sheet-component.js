import { Component, Renderer, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { focusOutActiveElement } from '../../util/dom';
import { Key } from '../../util/key';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { GestureController, BLOCK_ALL } from '../../gestures/gesture-controller';
import { assert } from '../../util/util';
/**
 * @private
 */
export var ActionSheetCmp = (function () {
    function ActionSheetCmp(_viewCtrl, config, _elementRef, gestureCtrl, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._elementRef = _elementRef;
        this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
        this.d = params.data;
        this.mode = config.get('mode');
        renderer.setElementClass(_elementRef.nativeElement, "action-sheet-" + this.mode, true);
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(function (cssClass) {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++actionSheetIds);
        if (this.d.title) {
            this.hdrId = 'acst-hdr-' + this.id;
        }
        if (this.d.subTitle) {
            this.descId = 'acst-subhdr-' + this.id;
        }
    }
    ActionSheetCmp.prototype.ionViewDidLoad = function () {
        var _this = this;
        // normalize the data
        var buttons = [];
        this.d.buttons.forEach(function (button) {
            if (typeof button === 'string') {
                button = { text: button };
            }
            if (!button.cssClass) {
                button.cssClass = '';
            }
            if (button.role === 'cancel') {
                _this.d.cancelButton = button;
            }
            else {
                if (button.role === 'destructive') {
                    button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-destructive';
                }
                else if (button.role === 'selected') {
                    button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-selected';
                }
                buttons.push(button);
            }
        });
        this.d.buttons = buttons;
    };
    ActionSheetCmp.prototype.ionViewWillEnter = function () {
        this.gestureBlocker.block();
    };
    ActionSheetCmp.prototype.ionViewDidLeave = function () {
        this.gestureBlocker.unblock();
    };
    ActionSheetCmp.prototype.ionViewDidEnter = function () {
        focusOutActiveElement();
        var focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
        this.enabled = true;
    };
    ActionSheetCmp.prototype.keyUp = function (ev) {
        if (this.enabled && this._viewCtrl.isLast()) {
            if (ev.keyCode === Key.ESCAPE) {
                console.debug('actionsheet, escape button');
                this.bdClick();
            }
        }
    };
    ActionSheetCmp.prototype.click = function (button) {
        if (!this.enabled) {
            return;
        }
        var shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            if (button.handler() === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss(button.role);
        }
    };
    ActionSheetCmp.prototype.bdClick = function () {
        if (this.enabled && this.d.enableBackdropDismiss) {
            if (this.d.cancelButton) {
                this.click(this.d.cancelButton);
            }
            else {
                this.dismiss('backdrop');
            }
        }
    };
    ActionSheetCmp.prototype.dismiss = function (role) {
        return this._viewCtrl.dismiss(null, role);
    };
    ActionSheetCmp.prototype.ngOnDestroy = function () {
        assert(this.gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
        this.gestureBlocker.destroy();
    };
    ActionSheetCmp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-action-sheet',
                    template: '<ion-backdrop (click)="bdClick()" [class.backdrop-no-tappable]="!d.enableBackdropDismiss"></ion-backdrop>' +
                        '<div class="action-sheet-wrapper">' +
                        '<div class="action-sheet-container">' +
                        '<div class="action-sheet-group">' +
                        '<div class="action-sheet-title" id="{{hdrId}}" *ngIf="d.title">{{d.title}}</div>' +
                        '<div class="action-sheet-sub-title" id="{{descId}}" *ngIf="d.subTitle">{{d.subTitle}}</div>' +
                        '<button ion-button="action-sheet-button" (click)="click(b)" *ngFor="let b of d.buttons" class="disable-hover" [attr.icon-left]="b.icon ? \'\' : null" [ngClass]="b.cssClass">' +
                        '<ion-icon [name]="b.icon" *ngIf="b.icon" class="action-sheet-icon"></ion-icon>' +
                        '{{b.text}}' +
                        '</button>' +
                        '</div>' +
                        '<div class="action-sheet-group" *ngIf="d.cancelButton">' +
                        '<button ion-button="action-sheet-button" (click)="click(d.cancelButton)" class="action-sheet-cancel disable-hover" [attr.icon-left]="d.cancelButton.icon ? \'\' : null" [ngClass]="d.cancelButton.cssClass">' +
                        '<ion-icon [name]="d.cancelButton.icon" *ngIf="d.cancelButton.icon" class="action-sheet-icon"></ion-icon>' +
                        '{{d.cancelButton.text}}' +
                        '</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>',
                    host: {
                        'role': 'dialog',
                        '[attr.aria-labelledby]': 'hdrId',
                        '[attr.aria-describedby]': 'descId'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    ActionSheetCmp.ctorParameters = [
        { type: ViewController, },
        { type: Config, },
        { type: ElementRef, },
        { type: GestureController, },
        { type: NavParams, },
        { type: Renderer, },
    ];
    ActionSheetCmp.propDecorators = {
        'keyUp': [{ type: HostListener, args: ['body:keyup', ['$event'],] },],
    };
    return ActionSheetCmp;
}());
var actionSheetIds = -1;
//# sourceMappingURL=action-sheet-component.js.map