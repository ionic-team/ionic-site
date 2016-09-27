import { Platform, NavController } from 'ionic-angular';
export declare class TabPage {
    tabOne: typeof ApiDemoPage;
}
export declare class ApiDemoPage {
    platform: Platform;
    navCtrl: NavController;
    config: any;
    initialConfig: any;
    constructor(platform: Platform, navCtrl: NavController);
    load(): void;
    push(): void;
}
export declare class PushPage {
    navCtrl: NavController;
    constructor(navCtrl: NavController);
    pop(): void;
}
export declare class ApiDemoApp {
    root: typeof TabPage;
}
