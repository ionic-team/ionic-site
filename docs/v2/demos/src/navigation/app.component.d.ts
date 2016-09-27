import { NavController } from 'ionic-angular';
export declare class ApiDemoPage {
    navCtrl: NavController;
    constructor(navCtrl: NavController);
    push(): void;
}
export declare class PushPage {
    navCtrl: NavController;
    pageNum: number;
    constructor(navCtrl: NavController);
    push(): void;
    pop(): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
