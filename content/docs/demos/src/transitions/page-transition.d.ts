import { Animation } from '../animations/animation';
import { Transition } from './transition';
/**
 * @private
 */
export declare class PageTransition extends Transition {
    enteringPage: Animation;
    init(): void;
    /**
     * DOM READ
     */
    readDimensions(): void;
    /**
     * DOM WRITE
     */
    writeDimensions(): void;
    destroy(): void;
}
