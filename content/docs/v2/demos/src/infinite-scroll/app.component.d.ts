import { InfiniteScroll } from 'ionic-angular';
export declare class MockProvider {
    getData(): any[];
    getAsyncData(): Promise<any[]>;
    private _getRandomData();
    private _data;
}
export declare class ApiDemoApp {
    private mockProvider;
    items: string[];
    constructor(mockProvider: MockProvider);
    doInfinite(infiniteScroll: InfiniteScroll): void;
}
