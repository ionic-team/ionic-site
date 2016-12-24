import { InfiniteScroll } from '../';
/**
 * Mock Data Access Object
 **/
export declare class MockProvider {
    getData(): any[];
    getAsyncData(): Promise<any[]>;
    private _getRandomData();
    private _data;
}
export declare class ApiDemoPage {
    private mockProvider;
    items: string[];
    constructor(mockProvider: MockProvider);
    doInfinite(infiniteScroll: InfiniteScroll): void;
}
export declare class ApiDemoApp {
    rootPage: typeof ApiDemoPage;
}
export declare class AppModule {
}
