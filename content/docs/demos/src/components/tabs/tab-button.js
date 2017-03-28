var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @private
 */
export var TabButton = (function (_super) {
    __extends(TabButton, _super);
    function TabButton(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer);
        this.ionSelect = new EventEmitter();
        this.disHover = (config.get('hoverCSS') === false);
        this.layout = config.get('tabsLayout');
    }
    TabButton.prototype.ngOnInit = function () {
        this.tab.btn = this;
        this.layout = this.tab.parent.tabsLayout || this.layout;
        this.hasTitle = !!this.tab.tabTitle;
        this.hasIcon = !!this.tab.tabIcon && this.layout !== 'icon-hide';
        this.hasTitleOnly = (this.hasTitle && !this.hasIcon);
        this.hasIconOnly = (this.hasIcon && !this.hasTitle);
        this.hasBadge = !!this.tab.tabBadge;
    };
    TabButton.prototype.onClick = function () {
        this.ionSelect.emit(this.tab);
        return false;
    };
    TabButton.prototype.updateHref = function (href) {
        this.setElementAttribute('href', href);
    };
    TabButton.decorators = [
        { type: Directive, args: [{
                    selector: '.tab-button',
                    host: {
                        '[attr.id]': 'tab._btnId',
                        '[attr.aria-controls]': 'tab._tabId',
                        '[attr.aria-selected]': 'tab.isSelected',
                        '[class.has-title]': 'hasTitle',
                        '[class.has-icon]': 'hasIcon',
                        '[class.has-title-only]': 'hasTitleOnly',
                        '[class.icon-only]': 'hasIconOnly',
                        '[class.has-badge]': 'hasBadge',
                        '[class.disable-hover]': 'disHover'
                    }
                },] },
    ];
    /** @nocollapse */
    TabButton.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    TabButton.propDecorators = {
        'tab': [{ type: Input },],
        'ionSelect': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
    return TabButton;
}(Ion));
//# sourceMappingURL=tab-button.js.map