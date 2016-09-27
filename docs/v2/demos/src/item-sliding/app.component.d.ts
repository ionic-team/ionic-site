import { ItemSliding, ToastController } from 'ionic-angular';
export declare class ApiDemoPage {
    private toastCtrl;
    chats: any[];
    logins: any[];
    constructor(toastCtrl: ToastController);
    more(item: ItemSliding): void;
    delete(item: ItemSliding): void;
    mute(item: ItemSliding): void;
    archive(item: ItemSliding): void;
    download(item: ItemSliding): void;
    expandAction(item: ItemSliding, action: string, text: string): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
