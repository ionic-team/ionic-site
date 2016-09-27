import { NavController, NavParams } from 'ionic-angular';
export declare class ApiDemoPage {
    navCtrl: NavController;
    myParam: string;
    constructor(navCtrl: NavController);
    pushParams(): void;
}
export declare class PushPage {
    myParam: string;
    constructor(params: NavParams);
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
