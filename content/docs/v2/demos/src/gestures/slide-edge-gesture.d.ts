import { SlideGesture } from './slide-gesture';
/**
 * @private
 */
export declare class SlideEdgeGesture extends SlideGesture {
    edges: Array<string>;
    maxEdgeStart: any;
    private _d;
    constructor(element: HTMLElement, opts?: any);
    canStart(ev: any): boolean;
    getContainerDimensions(): {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    _checkEdge(edge: string, pos: any): boolean;
}
