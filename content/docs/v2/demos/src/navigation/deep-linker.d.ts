import { Location } from '@angular/common';
import { App } from '../components/app/app';
import { NavSegment } from './nav-util';
import { NavController } from './nav-controller';
import { Tab } from '../components/tabs/tab';
import { Tabs } from '../components/tabs/tabs';
import { UrlSerializer } from './url-serializer';
import { ViewController } from './view-controller';
/**
 * @name DeepLinker
 * @description
 * DeepLinker handles registering and displaying specific views based on URLs. It's used
 * underneath NavController so you'll never have to interact with it directly. When a new
 * view is push'ed with NavController, the URL is updated to match the path back to this
 * page.
 *
 * Unlike traditional web apps, URLs don't dictate navigation in Ionic apps.
 * Instead, URLs help us link to specific pieces of content as a breadcrumb.
 * We keep the current URL updated as we navigate, but we use the NavController's
 * push and pop, or navPush to move around. This makes it much easier
 * to handle the kinds of complicated nested navigation native apps are known for.
 *
 * We refer to our URL system as a Deep Link system instead of a Router to encourage
 * Ionic developers to think of URLs as a breadcrumb rather than as the source of
 * truth in navigation. This encourages flexible navigation design and happy apps all
 * over the world.
 *
 *
 * @usage
 *
 * DeepLinker can be used in the `IonicModule.forRoot` method, as the third parameter
 *
 * ```ts
 *  imports: [
 *     IonicModule.forRoot(MyApp, {}, {
 *       links: []
 *    })
 *   ]
 * ```
 *
 * DeepLinker implements `DeepLinkerConfig`, which is an object with an array of links.
 * So for basic example based on the blank starter, a link setup like so:
 *
 * ```ts
 *  imports: [
 *     IonicModule.forRoot(MyApp, {}, {
 *       links: [
 *        { component: HomePage, name: 'Home', segment: 'home' }
 *      ]
 *    })
 *   ]
 * ```
 *
 * Since components/pages can be loaded anywhere in the app, DeepLinker lets you define their URL segment but
 * doesn't require a full URL route.
 *
 * So, at any point a Page becomes the active page, we just append the URL segment.
 *
 * ### Dynamic Links
 *
 * Since passing data around is common practice in an app, we can reflect that in our app's URL by
 * using the common `:param` syntax:
 *
 * ```ts
 *  links: [
 *    { component: HomePage, name: 'Home', segment: 'home' },
 *    { component: DetailPage, name: 'Detail', segment: 'detail/:userId' }
 *  ]
 *  ```
 *
 * In this case, when we `push` to a new instance of `DetailPage`, the `user` field of
 * the data we pass to `push` will be put into the URL.
 *
 * The property needs to be something that can be serialized into a string by the DeepLinker.
 *
 * So in a typical `navCtrl.push()` scenario, we'd do something like this:
 *
 * ```ts
 * pushPage(userInfo) {
 *   this.navCtrl.push(DetailPage, {
 *     'userId': userInfo.id
 *   })
 * }
 * ```
 *
 *
 *
 * ### Default History
 *
 * While pages can be navigated to anywhere and loaded at any time, what happens when an app is launched from a deeplink while cold or suspended?
 *
 * By default, the page would be navigated to in the root NavController, but often the history stack is a UX design issue that you'll
 * want to tweak as you iterate on the UX of your app.
 *
 * An example here is the App Store app on iOS. If you navigate to an app link to the App Store app, the app decides to show
 * a single page for the app detail, and no back button. In constrast, opening an instagram link shows a back button that
 * goes back to the profile page of the user. The point is: this back button experience is totally up to you as the designer
 * of the app experience.
 *
 * This is where `defaultHistory` comes in.
 *
 * The `defaultHistory` property takes an array of components to create the initial history stack if none exists.
 *
 * ```ts
 *  links: [
 *    { component: HomePage, name: 'Home', segment: 'home' },
 *    { component: DetailPage, name: 'Detail', segment: 'detail/:userId', defaultHistory: [HomePage] }
 *  ]
 *  ```
 *
 * In this example above, if we launch the app at myapp.com/detail/4, then the user will see the DetailPage and then the back button will
 * go to the HomePage.
 */
export declare class DeepLinker {
    _app: App;
    _serializer: UrlSerializer;
    _location: Location;
    /**
     * @internal
     */
    segments: NavSegment[];
    /**
     * @internal
     */
    history: string[];
    /**
     * @internal
     */
    indexAliasUrl: string;
    constructor(_app: App, _serializer: UrlSerializer, _location: Location);
    /**
     * @internal
     */
    init(): void;
    /**
     * The browser's location has been updated somehow.
     * @internal
     */
    urlChange(browserUrl: string): void;
    /**
     * Update the deep linker using the NavController's current active view.
     * @internal
     */
    navChange(direction: string): void;
    /**
     * @internal
     */
    updateLocation(browserUrl: string, direction: string): void;
    /**
     * @internal
     */
    getComponentFromName(componentName: any): any;
    /**
     * @internal
     */
    createUrl(nav: any, nameOrComponent: any, data: any, prepareExternalUrl?: boolean): string;
    /**
     * Build a browser URL out of this NavController. Climbs up the tree
     * of NavController's to create a string representation of all the
     * NavControllers state.
     *
     * @internal
     */
    pathFromNavs(nav: NavController, component?: any, data?: any): NavSegment[];
    /**
     * @internal
     */
    getTabSelector(tab: Tab): string;
    /**
     * @internal
     */
    getSelectedTabIndex(tabsNav: Tabs, pathName: string, fallbackIndex?: number): number;
    /**
     * Each NavController will call this method when it initializes for
     * the first time. This allows each NavController to figure out
     * where it lives in the path and load up the correct component.
     * @internal
     */
    initNav(nav: any): NavSegment;
    /**
     * @internal
     */
    initViews(segment: NavSegment): ViewController[];
    /**
     * Using the known Path of Segments, walk down all descendents
     * from the root NavController and load each NavController according
     * to each Segment. This is usually called after a browser URL and
     * Path changes and needs to update all NavControllers to match
     * the new browser URL. Because the URL is already known, it will
     * not update the browser's URL when transitions have completed.
     *
     * @internal
     */
    loadNavFromPath(nav: NavController, done?: Function): void;
    /**
     * @internal
     */
    loadViewFromSegment(navInstance: any, done: Function): void;
    /**
     * @internal
     */
    isBackUrl(browserUrl: string): boolean;
    /**
     * @internal
     */
    isCurrentUrl(browserUrl: string): boolean;
    /**
     * @internal
     */
    historyPush(browserUrl: string): void;
    /**
     * @internal
     */
    historyPop(): void;
}
export declare function setupDeepLinker(app: App, serializer: UrlSerializer, location: Location): DeepLinker;
export declare function normalizeUrl(browserUrl: string): string;
