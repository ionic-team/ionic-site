import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { InfiniteScroll } from './infinite-scroll';
/**
 * @private
 */
export var InfiniteScrollContent = (function () {
    function InfiniteScrollContent(inf, _config) {
        this.inf = inf;
        this._config = _config;
    }
    /**
     * @private
     */
    InfiniteScrollContent.prototype.ngOnInit = function () {
        if (!this.loadingSpinner) {
            this.loadingSpinner = this._config.get('infiniteLoadingSpinner', this._config.get('spinner', 'ios'));
        }
    };
    InfiniteScrollContent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-infinite-scroll-content',
                    template: '<div class="infinite-loading">' +
                        '<div class="infinite-loading-spinner" *ngIf="loadingSpinner">' +
                        '<ion-spinner [name]="loadingSpinner"></ion-spinner>' +
                        '</div>' +
                        '<div class="infinite-loading-text" [innerHTML]="loadingText" *ngIf="loadingText"></div>' +
                        '</div>',
                    host: {
                        '[attr.state]': 'inf.state'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollContent.ctorParameters = [
        { type: InfiniteScroll, },
        { type: Config, },
    ];
    InfiniteScrollContent.propDecorators = {
        'loadingSpinner': [{ type: Input },],
        'loadingText': [{ type: Input },],
    };
    return InfiniteScrollContent;
}());
//# sourceMappingURL=infinite-scroll-content.js.map