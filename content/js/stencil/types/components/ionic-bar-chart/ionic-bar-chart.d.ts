import '../../stencil.core';
export declare class IonicBarChart {
    data: string;
    color: string;
    constructor();
    componentWillLoad(): void;
    componentDidLoad(): void;
    hexToRgb(hex: any): string;
    prepareData(): {
        styles: {
            bar: {
                width: string;
                background: string;
            };
            text: {
                color: string;
            };
        };
        name: string;
        value: number;
    }[];
    render(): JSX.Element[];
}
