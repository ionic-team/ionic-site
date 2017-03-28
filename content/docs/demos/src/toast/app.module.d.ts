import { ToastController } from '../';
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
export declare class AppModule {
}
