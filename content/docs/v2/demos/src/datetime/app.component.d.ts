export declare class ApiDemoPage {
    wwwReleased: string;
    netscapeReleased: string;
    operaReleased: string;
    webkitReleased: string;
    firefoxReleased: string;
    chromeReleased: string;
    tokyoTime: string;
    parisTime: string;
    madisonTime: string;
    alertTime: string;
    operaShortDay: string[];
    constructor();
    calculateTime(offset: any): string;
    stdTimezoneOffset(today: any): number;
    dst(today: any): boolean;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
