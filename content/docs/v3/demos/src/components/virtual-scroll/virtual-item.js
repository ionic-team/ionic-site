import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * @private
 */
export var VirtualHeader = (function () {
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualHeader.decorators = [
        { type: Directive, args: [{ selector: '[virtualHeader]' },] },
    ];
    /** @nocollapse */
    VirtualHeader.ctorParameters = [
        { type: TemplateRef, },
    ];
    return VirtualHeader;
}());
/**
 * @private
 */
export var VirtualFooter = (function () {
    function VirtualFooter(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualFooter.decorators = [
        { type: Directive, args: [{ selector: '[virtualFooter]' },] },
    ];
    /** @nocollapse */
    VirtualFooter.ctorParameters = [
        { type: TemplateRef, },
    ];
    return VirtualFooter;
}());
/**
 * @private
 */
export var VirtualItem = (function () {
    function VirtualItem(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    VirtualItem.decorators = [
        { type: Directive, args: [{ selector: '[virtualItem]' },] },
    ];
    /** @nocollapse */
    VirtualItem.ctorParameters = [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ];
    return VirtualItem;
}());
//# sourceMappingURL=virtual-item.js.map