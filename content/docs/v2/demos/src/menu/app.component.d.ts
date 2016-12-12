import { MenuController } from 'ionic-angular';
export declare class ApiDemoPage {
    menu: MenuController;
    activeMenu: string;
    constructor(menu: MenuController);
    menu1Active(): void;
    menu2Active(): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
