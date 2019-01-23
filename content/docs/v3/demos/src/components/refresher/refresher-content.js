import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { Refresher } from './refresher';
/**
 * @private
 */
export var RefresherContent = (function () {
    function RefresherContent(r, _config) {
        this.r = r;
        this._config = _config;
    }
    /**
     * @private
     */
    RefresherContent.prototype.ngOnInit = function () {
        if (!this.pullingIcon) {
            this.pullingIcon = this._config.get('ionPullIcon', 'arrow-down');
        }
        if (!this.refreshingSpinner) {
            this.refreshingSpinner = this._config.get('ionRefreshingSpinner', this._config.get('spinner', 'ios'));
        }
    };
    RefresherContent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-refresher-content',
                    template: '<div class="refresher-pulling">' +
                        '<div class="refresher-pulling-icon" *ngIf="pullingIcon">' +
                        '<ion-icon [name]="pullingIcon"></ion-icon>' +
                        '</div>' +
                        '<div class="refresher-pulling-text" [innerHTML]="pullingText" *ngIf="pullingText"></div>' +
                        '</div>' +
                        '<div class="refresher-refreshing">' +
                        '<div class="refresher-refreshing-icon">' +
                        '<ion-spinner [name]="refreshingSpinner"></ion-spinner>' +
                        '</div>' +
                        '<div class="refresher-refreshing-text" [innerHTML]="refreshingText" *ngIf="refreshingText"></div>' +
                        '</div>',
                    host: {
                        '[attr.state]': 'r.state'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    RefresherContent.ctorParameters = [
        { type: Refresher, },
        { type: Config, },
    ];
    RefresherContent.propDecorators = {
        'pullingIcon': [{ type: Input },],
        'pullingText': [{ type: Input },],
        'refreshingSpinner': [{ type: Input },],
        'refreshingText': [{ type: Input },],
    };
    return RefresherContent;
}());
//# sourceMappingURL=refresher-content.js.map