import { Config } from '../config/config';
import { Transition } from './transition';
export declare function registerTransitions(config: Config): () => void;
export declare function createTransition(config: Config, transitionName: string, enteringView: any, leavingView: any, opts: any): Transition;
