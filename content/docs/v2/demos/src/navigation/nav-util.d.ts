import { Renderer, TypeDecorator } from '@angular/core';
import { DeepLinker } from './deep-linker';
import { ViewController } from './view-controller';
import { NavControllerBase } from './nav-controller-base';
import { Transition } from '../transitions/transition';
export declare function getComponent(linker: DeepLinker, nameOrPageOrView: any): any;
export declare function convertToView(linker: DeepLinker, nameOrPageOrView: any, params: any): ViewController;
export declare function convertToViews(linker: DeepLinker, pages: any[]): ViewController[];
export declare function setZIndex(nav: NavControllerBase, enteringView: ViewController, leavingView: ViewController, direction: string, renderer: Renderer): void;
export declare function isTabs(nav: any): boolean;
export declare function isTab(nav: any): boolean;
export declare function isNav(nav: any): boolean;
export interface DeepLinkMetadataType {
    name: string;
    segment?: string;
    defaultHistory?: any[];
}
/**
 * @private
 */
export declare class DeepLinkMetadata implements DeepLinkMetadataType {
    component: any;
    name: string;
    segment?: string;
    defaultHistory?: any[];
}
export interface DeepLinkDecorator extends TypeDecorator {
}
export interface DeepLinkMetadataFactory {
    (obj: DeepLinkMetadataType): DeepLinkDecorator;
    new (obj: DeepLinkMetadataType): DeepLinkMetadata;
}
/**
 * @private
 */
export declare var DeepLink: DeepLinkMetadataFactory;
/**
 * @private
 */
export interface DeepLinkConfig {
    links: DeepLinkMetadata[];
}
export interface NavLink {
    component: any;
    name?: string;
    segment?: string;
    parts?: string[];
    partsLen?: number;
    staticLen?: number;
    dataLen?: number;
    dataKeys?: {
        [key: string]: boolean;
    };
    defaultHistory?: any[];
}
export interface NavSegment {
    id: string;
    name: string;
    component: any;
    data: any;
    navId?: string;
    defaultHistory?: NavSegment[];
}
export interface NavOptions {
    animate?: boolean;
    animation?: string;
    direction?: string;
    duration?: number;
    easing?: string;
    id?: string;
    keyboardClose?: boolean;
    progressAnimation?: boolean;
    disableApp?: boolean;
    ev?: any;
    updateUrl?: boolean;
    isNavRoot?: boolean;
}
export interface TransitionResolveFn {
    (hasCompleted: boolean, requiresTransition: boolean, enteringName?: string, leavingName?: string, direction?: string): void;
}
export interface TransitionRejectFn {
    (rejectReason: any, transition?: Transition): void;
}
export interface TransitionInstruction {
    opts: NavOptions;
    insertStart?: number;
    insertViews?: ViewController[];
    removeView?: ViewController;
    removeStart?: number;
    removeCount?: number;
    resolve?: TransitionResolveFn;
    reject?: TransitionRejectFn;
    leavingRequiresTransition?: boolean;
    enteringRequiresTransition?: boolean;
}
export declare enum ViewState {
    INITIALIZED = 0,
    PRE_RENDERED = 1,
    LOADED = 2,
}
export declare const INIT_ZINDEX: number;
export declare const DIRECTION_BACK: string;
export declare const DIRECTION_FORWARD: string;
export declare const DIRECTION_SWITCH: string;
