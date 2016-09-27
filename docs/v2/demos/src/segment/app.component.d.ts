export declare class ApiDemoPage {
    appType: string;
    safari: string;
    weather: string;
    apps: {
        'Paid': {
            name: string;
            price: string;
        }[];
        'Free': {
            name: string;
            price: string;
        }[];
        'Top': {
            name: string;
            price: string;
        }[];
    };
    items: {
        'Bookmarks': {
            name: string;
            icon: string;
        }[];
        'Reading List': {
            name: string;
            icon: string;
        }[];
        'Shared Links': {
            name: string;
            icon: string;
        }[];
    };
    getItems(type: any): any;
    getSafariItems(type: any): any;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
