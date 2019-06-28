import '../../stencil.core';
export declare class IonicSlider {
    slideCount: number;
    timer: any;
    old: any;
    upcoming: any;
    slideDelay: number;
    current: number;
    status: any[];
    ticker: number;
    constructor();
    componentDidLoad(): void;
    next: () => void;
    goTo: (slide: number) => void;
    deactivate: () => void;
    activate: () => void;
    getClasses(item: any): string;
    render(): JSX.Element[];
}
