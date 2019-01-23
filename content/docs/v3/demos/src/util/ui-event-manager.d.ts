import { ElementRef } from '@angular/core';
export interface PointerEventsConfig {
    element?: HTMLElement;
    elementRef?: ElementRef;
    pointerDown: (ev: any) => boolean;
    pointerMove?: (ev: any) => void;
    pointerUp?: (ev: any) => void;
    zone?: boolean;
    capture?: boolean;
    passive?: boolean;
}
export declare const enum PointerEventType {
    UNDEFINED = 0,
    MOUSE = 1,
    TOUCH = 2,
}
export declare function eventOptions(useCapture?: boolean, usePassive?: boolean): any;
/**
 * @private
 */
export declare class PointerEvents {
    private ele;
    private pointerDown;
    private pointerMove;
    private pointerUp;
    private zone;
    private option;
    private rmTouchStart;
    private rmTouchMove;
    private rmTouchEnd;
    private rmTouchCancel;
    private rmMouseStart;
    private rmMouseMove;
    private rmMouseUp;
    private bindTouchEnd;
    private bindMouseUp;
    private lastTouchEvent;
    mouseWait: number;
    lastEventType: PointerEventType;
    constructor(ele: any, pointerDown: any, pointerMove: any, pointerUp: any, zone: boolean, option: any);
    private handleTouchStart(ev);
    private handleMouseDown(ev);
    private handleTouchEnd(ev);
    private handleMouseUp(ev);
    private stopTouch();
    private stopMouse();
    stop(): void;
    destroy(): void;
}
/**
 * @private
 */
export declare class UIEventManager {
    zoneWrapped: boolean;
    private events;
    constructor(zoneWrapped?: boolean);
    pointerEvents(config: PointerEventsConfig): PointerEvents;
    listenRef(ref: ElementRef, eventName: string, callback: any, option?: any): Function;
    listen(element: any, eventName: string, callback: any, option?: any): Function;
    unlistenAll(): void;
}
export declare function listenEvent(ele: any, eventName: string, zoneWrapped: boolean, option: any, callback: any): Function;
