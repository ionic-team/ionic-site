import { Platform } from '../';
export declare class ApiDemoPage {
    isIos: boolean;
    isAndroid: boolean;
    isWindows: boolean;
    constructor(platform: Platform);
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
export declare class AppModule {
}
