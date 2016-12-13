/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
export declare function clamp(min: number, n: number, max: number): number;
/**
 * The assign() method is used to copy the values of all enumerable own
 * properties from one or more source objects to a target object. It will
 * return the target object. When available, this method will use
 * `Object.assign()` under-the-hood.
 * @param target  The target object
 * @param source(s)  The source object
 */
export declare function assign(...args: any[]): any;
/**
 * Do a deep extend (merge).
 * @param dst the destination
 * @param ... the param objects
 */
export declare function merge(dst: any, ...args: any[]): any;
export declare function debounce(fn: Function, wait: number, immediate?: boolean): any;
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */
export declare function defaults(dest: any, ...args: any[]): any;
export declare const isBoolean: (val: any) => boolean;
export declare const isString: (val: any) => boolean;
export declare const isNumber: (val: any) => boolean;
export declare const isFunction: (val: any) => boolean;
export declare const isDefined: (val: any) => boolean;
export declare const isUndefined: (val: any) => boolean;
export declare const isPresent: (val: any) => boolean;
export declare const isBlank: (val: any) => boolean;
export declare const isObject: (val: any) => boolean;
export declare const isArray: (arg: any) => arg is any[];
export declare const isPrimitive: (val: any) => boolean;
export declare const isTrueProperty: (val: any) => boolean;
export declare const isCheckedProperty: (a: any, b: any) => boolean;
/**
 * @private
 */
export declare function reorderArray(array: any[], indexes: {
    from: number;
    to: number;
}): any[];
/**
 * @private
 */
export declare function removeArrayItem(array: any[], item: any): boolean;
/**
 * @private
 */
export declare function swipeShouldReset(isResetDirection: boolean, isMovingFast: boolean, isOnResetZone: boolean): boolean;
/**
 * @private
 */
declare function _runInDev(fn: Function): any;
declare function _assert(actual: any, reason?: string): void;
export { _assert as assert };
export { _runInDev as runInDev };
