import { TemplateRef, ViewContainerRef } from '@angular/core';
import { VirtualContext } from './virtual-util';
/**
 * @private
 */
export declare class VirtualHeader {
    templateRef: TemplateRef<VirtualContext>;
    constructor(templateRef: TemplateRef<VirtualContext>);
}
/**
 * @private
 */
export declare class VirtualFooter {
    templateRef: TemplateRef<VirtualContext>;
    constructor(templateRef: TemplateRef<VirtualContext>);
}
/**
 * @private
 */
export declare class VirtualItem {
    templateRef: TemplateRef<VirtualContext>;
    viewContainer: ViewContainerRef;
    constructor(templateRef: TemplateRef<VirtualContext>, viewContainer: ViewContainerRef);
}
