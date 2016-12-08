import { ToastController } from 'ionic-angular';
export declare class ApiDemoPage {
    private toastCtrl;
    constructor(toastCtrl: ToastController);
    showToast(position: string): void;
    showLongToast(): void;
    showDismissDurationToast(): void;
    showToastWithCloseButton(): void;
    private dismissHandler();
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
