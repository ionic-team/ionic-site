import { ModuleWithProviders } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, PlatformLocation } from '@angular/common';
import { Config } from './config/config';
/**
 * Export Providers
 */
export { Config, setupConfig, ConfigToken } from './config/config';
export { DomController, DomCallback } from './util/dom-controller';
export { Platform, setupPlatform, UserAgentToken, DocumentDirToken, DocLangToken, NavigatorPlatformToken } from './platform/platform';
export { Haptic } from './util/haptic';
export { QueryParams, setupQueryParams, UrlToken } from './platform/query-params';
export { DeepLinker } from './navigation/deep-linker';
export { NavController } from './navigation/nav-controller';
export { NavParams } from './navigation/nav-params';
export { NavLink, NavOptions, DeepLink, DeepLinkConfig, DeepLinkMetadata, DeepLinkMetadataType } from './navigation/nav-util';
export { UrlSerializer, DeepLinkConfigToken } from './navigation/url-serializer';
export { ViewController } from './navigation/view-controller';
/**
 * @name IonicModule
 * @description
 * IonicModule is an NgModule that helps bootstrap a whole Ionic App. By passing a root component, IonicModule will make sure that all the components and directives from the framework are provided. This includes components such as Tabs, Menus, and Slides, as well as classes like AlertController.
 *
 *
 * We're also able to pass any configuration to our app as a second argument for `.forRoot`. This is any valid config property from [the Config Class](/docs/v2/api/config/Config/).
 *
 * The last functionality that IonicModule allows you to configure is optional routes for DeepLinker. For more information on DeepLinker, please see the [DeepLinker Docs](/docs/v2/api/navigation/DeepLinker/)
 *
 * @usage
 * ```ts
 * import { NgModule } from '@angular/core';
 * import { IonicApp, IonicModule } from 'ionic-angular';
 * import { MyApp } from './app.component';
 * import { HomePage } from '../pages/home/home';
 * @NgModule({
 *   declarations: [
 *     MyApp,
 *     HomePage
 *   ],
 *   imports: [
 *     IonicModule.forRoot(MyApp)
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     MyApp,
 *     HomePage
 *   ],
 *   providers: []
 * })
 * export class AppModule {}
 * ```
 */
export declare class IonicModule {
    /**
     * Set the root app component for you IonicModule
     * @param {any} appRoot The root AppComponent for this app.
     * @param {any} config Config Options for the app. Accepts any config property.
     * @param {any} deepLinkConfig Any configuration needed for the Ionic Deeplinker.
     */
    static forRoot(appRoot: any, config?: any, deepLinkConfig?: any): ModuleWithProviders;
}
/**
 * @private
 */
export declare function provideLocationStrategy(platformLocationStrategy: PlatformLocation, baseHref: string, config: Config): HashLocationStrategy | PathLocationStrategy;
/**
 * @private
 */
export declare function provideUserAgent(): string;
/**
 * @private
 */
export declare function provideNavigatorPlatform(): string;
/**
 * @private
 */
export declare function provideLocationHref(): string;
/**
 * @private
 */
export declare function provideDocumentDirection(): string;
/**
 * @private
 */
export declare function provideDocumentLang(): string;
