import { Events, Nav } from '../';
export declare class Login {
    private events;
    user: {
        name: string;
        username: string;
    };
    constructor(events: Events);
    login(): void;
}
export declare class Logout {
    private events;
    constructor(events: Events);
    logout(): void;
}
export declare class ApiDemoApp {
    private events;
    nav: Nav;
    root: typeof Login;
    loggedIn: boolean;
    loggedInPages: {
        title: string;
        component: typeof Logout;
    }[];
    loggedOutPages: {
        title: string;
        component: typeof Login;
    }[];
    constructor(events: Events);
    openPage(menu: any, page: any): void;
    listenToLoginEvents(): void;
}
export declare class AppModule {
}
