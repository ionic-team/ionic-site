import { EventEmitter, NgZone, OpaqueToken } from '@angular/core';
import { QueryParams } from './query-params';
/**
 * @name Platform
 * @description
 * The Platform service can be used to get information about your current device.
 * You can get all of the platforms associated with the device using the [platforms](#platforms)
 * method, including whether the app is being viewed from a tablet, if it's
 * on a mobile device or browser, and the exact platform (iOS, Android, etc).
 * You can also get the orientation of the device, if it uses right-to-left
 * language direction, and much much more. With this information you can completely
 * customize your app to fit any device.
 *
 * @usage
 * ```ts
 * import { Platform } from 'ionic-angular';
 *
 * @Component({...})
 * export MyPage {
 *   constructor(platform: Platform) {
 *     this.platform = platform;
 *   }
 * }
 * ```
 * @demo /docs/v2/demos/src/platform/
 */
export declare class Platform {
    private _versions;
    private _dir;
    private _lang;
    private _ua;
    private _qp;
    private _bPlt;
    private _onResizes;
    private _readyPromise;
    private _readyResolve;
    private _resizeTm;
    private _bbActions;
    private _registry;
    private _default;
    private _pW;
    private _pH;
    private _lW;
    private _lH;
    private _isPortrait;
    /** @private */
    zone: NgZone;
    /** @private */
    _platforms: string[];
    constructor();
    /**
     * @private
     */
    setZone(zone: NgZone): void;
    /**
     * @returns {boolean} returns true/false based on platform.
     * @description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(platform: Platform) {
     *     this.platform = platform;
     *
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log("I'm an iOS device!");
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | core            | on a desktop device.               |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | mobile          | on a mobile device.                |
     * | mobileweb       | in a browser on a mobile device.   |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | windows         | on a device running Windows.       |
     *
     * @param {string} platformName
     */
    is(platformName: string): boolean;
    /**
     * @returns {array} the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(platform: Platform) {
     *     this.platform = platform;
     *
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
    platforms(): Array<string>;
    /**
     * Returns an object containing version information about all of the platforms.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(platform: Platform) {
     *     this.platform = platform;
     *
     *     // This will print an object containing
     *     // all of the platforms and their versions
     *     console.log(platform.versions());
     *   }
     * }
     * ```
     *
     * @returns {object} An object containing all of the platforms and their versions.
     */
    versions(): {
        [name: string]: PlatformVersion;
    };
    /**
     * @private
     */
    version(): PlatformVersion;
    /**
     * Returns a promise when the platform is ready and native functionality
     * can be called. If the app is running from within a web browser, then
     * the promise will resolve when the DOM is ready. When the app is running
     * from an application engine such as Cordova, then the promise will
     * resolve when Cordova triggers the `deviceready` event.
     *
     * The resolved value is the `readySource`, which states which platform
     * ready was used. For example, when Cordova is ready, the resolved ready
     * source is `cordova`. The default ready source value will be `dom`. The
     * `readySource` is useful if different logic should run depending on the
     * platform the app is running from. For example, only Cordova can execute
     * the status bar plugin, so the web should not run status bar plugin logic.
     *
     * ```
     * import { Component } from '@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyApp {
     *   constructor(platform: Platform) {
     *     platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     * @returns {promise}
     */
    ready(): Promise<string>;
    /**
     * @private
     * This should be triggered by the engine when the platform is
     * ready. If there was no custom prepareReady method from the engine,
     * such as Cordova or Electron, then it uses the default DOM ready.
     */
    triggerReady(readySource: string): void;
    /**
     * @private
     * This is the default prepareReady if it's not replaced by an engine,
     * such as Cordova or Electron. If there was no custom prepareReady
     * method from an engine then it uses the method below, which triggers
     * the platform ready on the DOM ready event, and the default resolved
     * value is `dom`.
     */
    prepareReady(): void;
    /**
     * Set the app's language direction, which will update the `dir` attribute
     * on the app's root `<html>` element. We recommend the app's `index.html`
     * file already has the correct `dir` attribute value set, such as
     * `<html dir="ltr">` or `<html dir="rtl">`. This method is useful if the
     * direction needs to be dynamically changed per user/session.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     * @param {string} dir  Examples: `rtl`, `ltr`
     */
    setDir(dir: string, updateDocument: boolean): void;
    /**
     * Returns app's language direction.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     * @returns {string}
     */
    dir(): string;
    /**
     * Returns if this app is using right-to-left language direction or not.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     * @returns {boolean}
     */
    isRTL(): boolean;
    /**
     * Set the app's language and optionally the country code, which will update
     * the `lang` attribute on the app's root `<html>` element.
     * We recommend the app's `index.html` file already has the correct `lang`
     * attribute value set, such as `<html lang="en">`. This method is useful if
     * the language needs to be dynamically changed per user/session.
     * [W3C: Declaring language in HTML](http://www.w3.org/International/questions/qa-html-language-declarations)
     * @param {string} language  Examples: `en-US`, `en-GB`, `ar`, `de`, `zh`, `es-MX`
     */
    setLang(language: string, updateDocument: boolean): void;
    /**
     * Returns app's language and optional country code.
     * We recommend the app's `index.html` file already has the correct `lang`
     * attribute value set, such as `<html lang="en">`.
     * [W3C: Declaring language in HTML](http://www.w3.org/International/questions/qa-html-language-declarations)
     * @returns {string}
     */
    lang(): string;
    /**
     * @private
     */
    exitApp(): void;
    /**
     * @private
     */
    backButton: EventEmitter<Event>;
    /**
     * The pause event emits when the native platform puts the application
     * into the background, typically when the user switches to a different
     * application. This event would emit when a Cordova app is put into
     * the background, however, it would not fire on a standard web browser.
     */
    pause: EventEmitter<Event>;
    /**
     * The resume event emits when the native platform pulls the application
     * out from the background. This event would emit when a Cordova app comes
     * out from the background, however, it would not fire on a standard web browser.
     */
    resume: EventEmitter<Event>;
    /**
     * The back button event is triggered when the user presses the native
     * platform's back button, also referred to as the "hardware" back button.
     * This event is only used within Cordova apps running on Android and
     * Windows platforms. This event is not fired on iOS since iOS doesn't come
     * with a hardware back button in the same sense an Android or Windows device
     * does.
     *
     * Registering a hardware back button action and setting a priority allows
     * apps to control which action should be called when the hardware back
     * button is pressed. This method decides which of the registered back button
     * actions has the highest priority and should be called.
     *
     * @param {Function} callback Called when the back button is pressed,
     * if this registered action has the highest priority.
     * @param {number} priority Set the priority for this action. Only the highest priority will execute. Defaults to `0`.
     * @returns {Function} A function that, when called, will unregister
     * the its back button action.
     */
    registerBackButtonAction(fn: Function, priority?: number): Function;
    /**
     * @private
     */
    runBackButtonAction(): void;
    /**
     * @private
     */
    setUserAgent(userAgent: string): void;
    /**
     * @private
     */
    setQueryParams(queryParams: QueryParams): void;
    /**
     * @private
     */
    userAgent(): string;
    /**
     * @private
     */
    setNavigatorPlatform(navigatorPlatform: string): void;
    /**
     * @private
     */
    navigatorPlatform(): string;
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     * Using this method is preferred since the dimension is a cached value,
     * which reduces the chance of multiple and expensive DOM reads.
     */
    width(): number;
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     * Using this method is preferred since the dimension is a cached value,
     * which reduces the chance of multiple and expensive DOM reads.
     */
    height(): number;
    /**
     * Returns `true` if the app is in portait mode.
     */
    isPortrait(): boolean;
    /**
     * Returns `true` if the app is in landscape mode.
     */
    isLandscape(): boolean;
    /**
     * @private
     */
    _calcDim(): void;
    /**
     * @private
     */
    windowResize(): void;
    /**
     * @private
     */
    onResize(cb: Function): Function;
    /**
     * @private
     */
    setPlatformConfigs(platformConfigs: {
        [key: string]: PlatformConfig;
    }): void;
    /**
     * @private
     */
    getPlatformConfig(platformName: string): PlatformConfig;
    /**
     * @private
     */
    registry(): {
        [name: string]: PlatformConfig;
    };
    /**
     * @private
     */
    setDefault(platformName: string): void;
    /**
     * @private
     */
    testQuery(queryValue: string, queryTestValue: string): boolean;
    /**
     * @private
     */
    testNavigatorPlatform(navigatorPlatformExpression: string): boolean;
    /**
     * @private
     */
    matchUserAgentVersion(userAgentExpression: RegExp): any;
    testUserAgent(expression: string): boolean;
    /**
     * @private
     */
    isPlatformMatch(queryStringName: string, userAgentAtLeastHas?: string[], userAgentMustNotHave?: string[]): boolean;
    /** @private */
    init(): void;
    /**
     * @private
     */
    private matchPlatform(platformName);
}
export interface PlatformConfig {
    isEngine?: boolean;
    initialize?: Function;
    isMatch?: Function;
    superset?: string;
    subsets?: string[];
    settings?: any;
    versionParser?: any;
}
export interface PlatformVersion {
    str?: string;
    num?: number;
    major?: number;
    minor?: number;
}
/**
 * @private
 */
export declare function setupPlatform(platformConfigs: {
    [key: string]: PlatformConfig;
}, queryParams: QueryParams, userAgent: string, navigatorPlatform: string, docDirection: string, docLanguage: string, zone: NgZone): Platform;
/**
 * @private
 */
export declare const UserAgentToken: OpaqueToken;
/**
 * @private
 */
export declare const NavigatorPlatformToken: OpaqueToken;
/**
 * @private
 */
export declare const DocumentDirToken: OpaqueToken;
/**
 * @private
 */
export declare const DocLangToken: OpaqueToken;
