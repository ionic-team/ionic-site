import { App } from '../components/app/app';
/** @private */
export declare const GESTURE_GO_BACK_SWIPE: string;
/** @private */
export declare const GESTURE_MENU_SWIPE: string;
/** @private */
export declare const GESTURE_ITEM_SWIPE: string;
/** @private */
export declare const GESTURE_REFRESHER: string;
/** @private */
export declare const GESTURE_TOGGLE: string;
/**
* @private
*/
export declare const enum GesturePriority {
    Minimun = -10000,
    VeryLow = -20,
    Low = -10,
    Normal = 0,
    High = 10,
    VeryHigh = 20,
    VeryVeryHigh = 30,
    SlidingItem = -10,
    MenuSwipe = 10,
    GoBackSwipe = 20,
    Refresher = 0,
    Toggle = 30,
}
/**
* @private
*/
export interface GestureOptions {
    name: string;
    disableScroll?: boolean;
    priority?: number;
}
/**
* @private
*/
export interface BlockerOptions {
    disableScroll?: boolean;
    disable?: string[];
}
/**
* @private
*/
export declare const BLOCK_ALL: BlockerOptions;
/**
* @private
*/
export declare class GestureController {
    private _app;
    private id;
    private requestedStart;
    private disabledGestures;
    private disabledScroll;
    private capturedID;
    constructor(_app: App);
    createGesture(opts: GestureOptions): GestureDelegate;
    createBlocker(opts?: BlockerOptions): BlockerDelegate;
    newID(): number;
    start(gestureName: string, id: number, priority: number): boolean;
    capture(gestureName: string, id: number, priority: number): boolean;
    release(id: number): void;
    disableGesture(gestureName: string, id: number): void;
    enableGesture(gestureName: string, id: number): void;
    disableScroll(id: number): void;
    enableScroll(id: number): void;
    canStart(gestureName: string): boolean;
    isCaptured(): boolean;
    isScrollDisabled(): boolean;
    isDisabled(gestureName: string): boolean;
}
/**
* @private
*/
export declare class GestureDelegate {
    private name;
    private id;
    private controller;
    private priority;
    private disableScroll;
    constructor(name: string, id: number, controller: GestureController, priority: number, disableScroll: boolean);
    canStart(): boolean;
    start(): boolean;
    capture(): boolean;
    release(): void;
    destroy(): void;
}
/**
* @private
*/
export declare class BlockerDelegate {
    private id;
    private controller;
    private disable;
    private disableScroll;
    blocked: boolean;
    constructor(id: number, controller: GestureController, disable: string[], disableScroll: boolean);
    block(): void;
    unblock(): void;
    destroy(): void;
}
