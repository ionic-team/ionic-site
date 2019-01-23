import { NgZone } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { PointerEventType } from '../../util/ui-event-manager';
import { GestureController } from '../../gestures/gesture-controller';
/**
 * @private
 */
export declare class TapClick {
    private app;
    private gestureCtrl;
    private disableClick;
    private usePolyfill;
    private activator;
    private startCoord;
    private events;
    private pointerEvents;
    private lastTouchEnd;
    private dispatchClick;
    constructor(config: Config, app: App, zone: NgZone, gestureCtrl: GestureController);
    pointerStart(ev: any): boolean;
    pointerMove(ev: UIEvent): void;
    pointerEnd(ev: any, type: PointerEventType): void;
    pointerCancel(ev: UIEvent): void;
    shouldCancelEvent(ev: UIEvent): boolean;
    click(ev: any): void;
    private shouldCancelClick(ev);
    private profileClickDelay(ev);
    handleTapPolyfill(ev: any): void;
    isDisabledNativeClick(): boolean;
}
/**
 * @private
 */
export declare const isActivatable: (ele: HTMLElement) => boolean;
export declare function setupTapClick(config: Config, app: App, zone: NgZone, gestureCtrl: GestureController): () => TapClick;
