import { OpaqueToken } from '@angular/core';
/**
 * @private
 */
export declare class QueryParams {
    data: {
        [key: string]: any;
    };
    constructor(url: string);
    get(key: string): any;
}
/**
 * @private
 */
export declare const UrlToken: OpaqueToken;
/**
 * @private
 */
export declare function setupQueryParams(url: string): QueryParams;
