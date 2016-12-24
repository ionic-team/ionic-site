import { App } from '../app/app';
import { Config } from '../../config/config';
import { PointerCoordinates } from '../../util/dom';
import { ActivatorBase } from './activator-base';
export declare class Activator implements ActivatorBase {
    protected app: App;
    protected _queue: HTMLElement[];
    protected _active: HTMLElement[];
    protected _activeRafDefer: Function;
    protected _clearRafDefer: Function;
    _css: string;
    activatedDelay: number;
    clearDelay: number;
    constructor(app: App, config: Config);
    clickAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    downAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    upAction(ev: UIEvent, activatableEle: HTMLElement, startCoord: PointerCoordinates): void;
    _scheduleClear(): void;
    unscheduleClear(): void;
    clearState(animated: boolean): void;
    deactivate(animated: boolean): void;
    _clearDeferred(): void;
}
