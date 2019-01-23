export declare class ImgLoader {
    private imgs;
    load(src: string, useCache: boolean, callback: ImgLoadCallback): void;
    abort(src: string): void;
}
export declare function onXhrLoad(callback: ImgLoadCallback, status: number, contentType: string, responseData: ArrayBuffer, useCache: boolean, img: ImgData, imgs: ImgData[]): any;
export declare function cleanCache(imgs: ImgData[], cacheLimit: number): void;
export interface ImgData {
    src: string;
    datauri?: string;
    len?: number;
    xhr?: XMLHttpRequest;
}
export declare type ImgLoadCallback = {
    (status: number, msg: string, datauri: string): void;
};
