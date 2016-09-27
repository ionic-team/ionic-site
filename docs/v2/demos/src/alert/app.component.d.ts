import { AlertController } from 'ionic-angular';
export declare class ApiDemoPage {
    alertCtrl: AlertController;
    testRadioOpen: boolean;
    testRadioResult: any;
    testCheckboxOpen: boolean;
    testCheckboxResult: any;
    constructor(alertCtrl: AlertController);
    doAlert(): void;
    doConfirm(): void;
    doPrompt(): void;
    doRadio(): void;
    doCheckbox(): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
