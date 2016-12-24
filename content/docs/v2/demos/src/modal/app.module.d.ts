import { ModalController, NavParams, ViewController } from '../';
export declare class ModalFirstPage {
    modalCtrl: ModalController;
    myParam: string;
    constructor(modalCtrl: ModalController);
    openBasicModal(): void;
    openModalWithParams(): void;
}
export declare class ModalContentPage {
    viewCtrl: ViewController;
    myParam: string;
    constructor(viewCtrl: ViewController, params: NavParams);
    dismiss(): void;
}
export declare class ApiDemoApp {
    root: typeof ModalFirstPage;
}
export declare class AppModule {
}
