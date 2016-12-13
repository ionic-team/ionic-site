export declare type DomCallback = {
    (timeStamp?: number): void;
};
export declare class DomDebouncer {
    private dom;
    private writeTask;
    private readTask;
    constructor(dom: DomController);
    read(fn: DomCallback): Function;
    write(fn: DomCallback, ctx?: any): Function;
    cancel(): void;
}
export declare class DomController {
    private r;
    private w;
    private q;
    debouncer(): DomDebouncer;
    read(fn: DomCallback, ctx?: any): Function;
    write(fn: DomCallback, ctx?: any): Function;
    cancel(task: any): boolean;
    cancelW(task: any): boolean;
    cancelR(task: any): boolean;
    protected queue(): void;
    protected flush(timeStamp: number): void;
}
