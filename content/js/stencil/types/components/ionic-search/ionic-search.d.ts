import '../../stencil.core';
import 'ionicons';
export declare class IonicSearch {
    active: boolean;
    query: string;
    pending: number;
    results: Array<any>;
    dragStyles: {};
    mobile: boolean;
    el: any;
    dragY: number;
    startY: number;
    screenHeight: number;
    urls: any;
    URLS: () => {
        autocomplete: (query: any) => string;
        search: (query: any) => string;
    };
    constructor();
    activate(): void;
    close(): void;
    onKeyUp(e: any): Promise<void>;
    touchStart(e: any): void;
    touchMove(e: any): void;
    isFirefox(): boolean;
    touchEnd(): void;
    render(): JSX.Element[];
}
