import '../../stencil.core';
export declare class IonicAppflowActivator {
    $circles: any[];
    $lis: any[];
    screenshots: any[];
    active: any;
    el: any;
    duration: number;
    quickDuration: number;
    r: number;
    circumference: number;
    gsRefs: any[];
    scrollPause: any;
    constructor();
    componentDidLoad(): void;
    animationStart(index: any): void;
    animationSelect(index: any): void;
    animationRestart(index: any): void;
    animationStopOthers(index: any): void;
    circle(percent?: number): JSX.Element;
    render(): JSX.Element[];
}
