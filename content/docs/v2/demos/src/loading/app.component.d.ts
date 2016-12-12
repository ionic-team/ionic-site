import { LoadingController, NavController } from 'ionic-angular';
export declare class Page1 {
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    constructor(loadingCtrl: LoadingController, navCtrl: NavController);
    presentLoadingIos(): void;
    presentLoadingDots(): void;
    presentLoadingBubbles(): void;
    presentLoadingCircles(): void;
    presentLoadingCrescent(): void;
    presentLoadingDefault(): void;
    presentLoadingCustom(): void;
    presentLoadingText(): void;
    goToPage2(): void;
}
export declare class Page2 {
}
export declare class ApiDemoApp {
    root: typeof Page1;
}
