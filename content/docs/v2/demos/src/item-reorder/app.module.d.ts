import { NavController } from '../';
export declare class ApiDemoPage {
    navCtrl: NavController;
    songs: any[];
    editButton: string;
    editing: boolean;
    constructor(navCtrl: NavController);
    toggleEdit(): void;
    reorderData(indexes: any): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
export declare class AppModule {
}
