import { ActionSheetController, Platform } from '../';
export declare class ApiDemoPage {
    alertCtrl: ActionSheetController;
    platform: Platform;
    constructor(alertCtrl: ActionSheetController, platform: Platform);
    present(): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
export declare class AppModule {
}
