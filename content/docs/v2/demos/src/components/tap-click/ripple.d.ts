import { ActivatorBase } from './activator-base';
import { Activator } from './activator';
import { App } from '../app/app';
import { PointerCoordinates } from '../../util/dom';
import { Config } from '../../config/config';
/**
 * @private
 */
export declare class RippleActivator implements ActivatorBase {
    protected _queue: HTMLElement[];
    protected _active: HTMLElement[];
    protected highlight: Activator;
    constructor(app: App, config: Config);
    clickAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    downAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    upAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    clearState(animated: boolean): void;
    _downAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    _upAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    _clickAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    startRippleEffect(rippleEle: any, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
}
