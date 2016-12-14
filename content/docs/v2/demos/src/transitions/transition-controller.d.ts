import { AnimationOptions } from '../animations/animation';
import { Config } from '../config/config';
import { NavControllerBase } from '../navigation/nav-controller-base';
import { Transition } from './transition';
import { ViewController } from '../navigation/view-controller';
/**
 * @private
 */
export declare class TransitionController {
    private _config;
    private _ids;
    private _trns;
    constructor(_config: Config);
    getRootTrnsId(nav: NavControllerBase): number;
    nextId(): number;
    get(trnsId: number, enteringView: ViewController, leavingView: ViewController, opts: AnimationOptions): Transition;
    destroy(trnsId: number): void;
}
