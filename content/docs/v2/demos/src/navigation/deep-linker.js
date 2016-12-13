import { convertToViews, isNav, isTab, isTabs, DIRECTION_BACK } from './nav-util';
import { isArray, isPresent } from '../util/util';
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
export var DeepLinker = (function () {
    function DeepLinker(_app, _serializer, _location) {
        this._app = _app;
        this._serializer = _serializer;
        this._location = _location;
        /**
         * @internal
         */
        this.segments = [];
        /**
         * @internal
         */
        this.history = [];
    }
    /**
     * @internal
     */
    DeepLinker.prototype.init = function () {
        var _this = this;
        // scenario 1: Initial load of all navs from the initial browser URL
        var browserUrl = normalizeUrl(this._location.path());
        console.debug("DeepLinker, init load: " + browserUrl);
        // update the Path from the browser URL
        this.segments = this._serializer.parse(browserUrl);
        // remember this URL in our internal history stack
        this.historyPush(browserUrl);
        // listen for browser URL changes
        this._location.subscribe(function (locationChg) {
            _this.urlChange(normalizeUrl(locationChg.url));
        });
    };
    /**
     * The browser's location has been updated somehow.
     * @internal
     */
    DeepLinker.prototype.urlChange = function (browserUrl) {
        // do nothing if this url is the same as the current one
        if (!this.isCurrentUrl(browserUrl)) {
            if (this.isBackUrl(browserUrl)) {
                // scenario 2: user clicked the browser back button
                // scenario 4: user changed the browser URL to what was the back url was
                // scenario 5: user clicked a link href that was the back url
                console.debug("DeepLinker, browser urlChange, back to: " + browserUrl);
                this.historyPop();
            }
            else {
                // scenario 3: user click forward button
                // scenario 4: user changed browser URL that wasn't the back url
                // scenario 5: user clicked a link href that wasn't the back url
                console.debug("DeepLinker, browser urlChange, forward to: " + browserUrl);
                this.historyPush(browserUrl);
            }
            // get the app's root nav
            var appRootNav = this._app.getRootNav();
            if (appRootNav) {
                if (browserUrl === '/') {
                    // a url change to the index url
                    if (isPresent(this.indexAliasUrl)) {
                        // we already know the indexAliasUrl
                        // update the url to use the know alias
                        browserUrl = this.indexAliasUrl;
                    }
                    else {
                        // the url change is to the root but we don't
                        // already know the url used. So let's just
                        // reset the root nav to its root page
                        appRootNav.goToRoot({
                            updateUrl: false,
                            isNavRoot: true
                        });
                        return;
                    }
                }
                // normal url
                this.segments = this._serializer.parse(browserUrl);
                this.loadNavFromPath(appRootNav);
            }
        }
    };
    /**
     * Update the deep linker using the NavController's current active view.
     * @internal
     */
    DeepLinker.prototype.navChange = function (direction) {
        // all transitions completed
        if (direction) {
            // get the app's active nav, which is the lowest level one being viewed
            var activeNav = this._app.getActiveNav();
            if (activeNav) {
                // build up the segments of all the navs from the lowest level
                this.segments = this.pathFromNavs(activeNav);
                // build a string URL out of the Path
                var browserUrl = this._serializer.serialize(this.segments);
                // update the browser's location
                this.updateLocation(browserUrl, direction);
            }
        }
    };
    /**
     * @internal
     */
    DeepLinker.prototype.updateLocation = function (browserUrl, direction) {
        if (this.indexAliasUrl === browserUrl) {
            browserUrl = '/';
        }
        if (direction === DIRECTION_BACK && this.isBackUrl(browserUrl)) {
            // this URL is exactly the same as the back URL
            // it's safe to use the browser's location.back()
            console.debug("DeepLinker, location.back(), url: '" + browserUrl + "'");
            this.historyPop();
            this._location.back();
        }
        else if (!this.isCurrentUrl(browserUrl)) {
            // probably navigating forward
            console.debug("DeepLinker, location.go('" + browserUrl + "')");
            this.historyPush(browserUrl);
            this._location.go(browserUrl);
        }
    };
    /**
     * @internal
     */
    DeepLinker.prototype.getComponentFromName = function (componentName) {
        var segment = this._serializer.createSegmentFromName(componentName);
        if (segment && segment.component) {
            return segment.component;
        }
        return null;
    };
    /**
     * @internal
     */
    DeepLinker.prototype.createUrl = function (nav, nameOrComponent, data, prepareExternalUrl) {
        if (prepareExternalUrl === void 0) { prepareExternalUrl = true; }
        // create a segment out of just the passed in name
        var segment = this._serializer.createSegmentFromName(nameOrComponent);
        if (segment) {
            var path = this.pathFromNavs(nav, segment.component, data);
            // serialize the segments into a browser URL
            // and prepare the URL with the location and return
            var url = this._serializer.serialize(path);
            return prepareExternalUrl ? this._location.prepareExternalUrl(url) : url;
        }
        return '';
    };
    /**
     * Build a browser URL out of this NavController. Climbs up the tree
     * of NavController's to create a string representation of all the
     * NavControllers state.
     *
     * @internal
     */
    DeepLinker.prototype.pathFromNavs = function (nav, component, data) {
        var segments = [];
        var view;
        var segment;
        var tabSelector;
        // recursivly climb up the nav ancestors
        // and set each segment's data
        while (nav) {
            // this could be an ion-nav, ion-tab or ion-portal
            // if a component and data was already passed in then use it
            // otherwise get this nav's active view controller
            if (!component && isNav(nav)) {
                view = nav.getActive(true);
                if (view) {
                    component = view.component;
                    data = view.data;
                }
            }
            // the ion-nav or ion-portal has an active view
            // serialize the component and its data to a NavSegment
            segment = this._serializer.serializeComponent(component, data);
            // reset the component/data
            component = data = null;
            if (!segment) {
                break;
            }
            // add the segment to the path
            segments.push(segment);
            if (isTab(nav)) {
                // this nav is a Tab, which is a child of Tabs
                // add a segment to represent which Tab is the selected one
                tabSelector = this.getTabSelector(nav);
                segments.push({
                    id: tabSelector,
                    name: tabSelector,
                    component: null,
                    data: null
                });
                // a parent to Tab is a Tabs
                // we should skip over any Tabs and go to the next parent
                nav = nav.parent && nav.parent.parent;
            }
            else {
                // this is an ion-nav
                // climb up to the next parent
                nav = nav.parent;
            }
        }
        // segments added from bottom to top, so Ti esrever dna ti pilf
        return segments.reverse();
    };
    /**
     * @internal
     */
    DeepLinker.prototype.getTabSelector = function (tab) {
        if (isPresent(tab.tabUrlPath)) {
            return tab.tabUrlPath;
        }
        if (isPresent(tab.tabTitle)) {
            return this._serializer.formatUrlPart(tab.tabTitle);
        }
        return "tab-" + tab.index;
    };
    /**
     * @internal
     */
    DeepLinker.prototype.getSelectedTabIndex = function (tabsNav, pathName, fallbackIndex) {
        var _this = this;
        if (fallbackIndex === void 0) { fallbackIndex = 0; }
        // we found a segment which probably represents which tab to select
        var indexMatch = pathName.match(/tab-(\d+)/);
        if (indexMatch) {
            // awesome, the segment name was something "tab-0", and
            // the numbe represents which tab to select
            return parseInt(indexMatch[1], 10);
        }
        // wasn't in the "tab-0" format so maybe it's using a word
        var tab = tabsNav._tabs.find(function (t) {
            return (isPresent(t.tabUrlPath) && t.tabUrlPath === pathName) ||
                (isPresent(t.tabTitle) && _this._serializer.formatUrlPart(t.tabTitle) === pathName);
        });
        return isPresent(tab) ? tab.index : fallbackIndex;
    };
    /**
     * Each NavController will call this method when it initializes for
     * the first time. This allows each NavController to figure out
     * where it lives in the path and load up the correct component.
     * @internal
     */
    DeepLinker.prototype.initNav = function (nav) {
        var path = this.segments;
        if (nav && path.length) {
            if (!nav.parent) {
                // a nav without a parent is always the first nav segment
                path[0].navId = nav.id;
                return path[0];
            }
            for (var i = 1; i < path.length; i++) {
                if (path[i - 1].navId === nav.parent.id) {
                    // this nav's parent segment is the one before this segment's index
                    path[i].navId = nav.id;
                    return path[i];
                }
            }
        }
        return null;
    };
    /**
     * @internal
     */
    DeepLinker.prototype.initViews = function (segment) {
        var views;
        if (isArray(segment.defaultHistory)) {
            views = convertToViews(this, segment.defaultHistory);
        }
        else {
            views = [];
        }
        var view = new ViewController(segment.component, segment.data);
        view.id = segment.id;
        views.push(view);
        return views;
    };
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
    DeepLinker.prototype.loadNavFromPath = function (nav, done) {
        var _this = this;
        if (!nav) {
            done && done();
        }
        else {
            this.loadViewFromSegment(nav, function () {
                _this.loadNavFromPath(nav.getActiveChildNav(), done);
            });
        }
    };
    /**
     * @internal
     */
    DeepLinker.prototype.loadViewFromSegment = function (navInstance, done) {
        // load up which nav ids belong to its nav segment
        var segment = this.initNav(navInstance);
        if (!segment) {
            done();
            return;
        }
        if (isTabs(navInstance)) {
            navInstance.select(this.getSelectedTabIndex(navInstance, segment.name), {
                updateUrl: false,
                animate: false
            });
            done();
            return;
        }
        var nav = navInstance;
        // walk backwards to see if the exact view we want to show here
        // is already in the stack that we can just pop back to
        var view;
        var count = nav.length() - 1;
        for (var i = count; i >= 0; i--) {
            view = nav.getByIndex(i);
            if (view && view.id === segment.id) {
                // hooray! we've already got a view loaded in the stack
                // matching the view they wanted to show
                if (i === count) {
                    // this is the last view in the stack and it's the same
                    // as the segment so there's no change needed
                    done();
                }
                else {
                    // it's not the exact view as the end
                    // let's have this nav go back to this exact view
                    nav.popTo(view, {
                        animate: false,
                        updateUrl: false,
                    }, done);
                }
                return;
            }
        }
        // ok, so they must be pushing a new view to the stack
        // since we didn't find this same component already in the stack
        nav.push(segment.component, segment.data, {
            id: segment.id, animate: false, updateUrl: false
        }, done);
    };
    /**
     * @internal
     */
    DeepLinker.prototype.isBackUrl = function (browserUrl) {
        return (browserUrl === this.history[this.history.length - 2]);
    };
    /**
     * @internal
     */
    DeepLinker.prototype.isCurrentUrl = function (browserUrl) {
        return (browserUrl === this.history[this.history.length - 1]);
    };
    /**
     * @internal
     */
    DeepLinker.prototype.historyPush = function (browserUrl) {
        if (!this.isCurrentUrl(browserUrl)) {
            this.history.push(browserUrl);
            if (this.history.length > 30) {
                this.history.shift();
            }
        }
    };
    /**
     * @internal
     */
    DeepLinker.prototype.historyPop = function () {
        this.history.pop();
        if (!this.history.length) {
            this.historyPush(this._location.path());
        }
    };
    return DeepLinker;
}());
export function setupDeepLinker(app, serializer, location) {
    var deepLinker = new DeepLinker(app, serializer, location);
    deepLinker.init();
    return deepLinker;
}
export function normalizeUrl(browserUrl) {
    browserUrl = browserUrl.trim();
    if (browserUrl.charAt(0) !== '/') {
        // ensure first char is a /
        browserUrl = '/' + browserUrl;
    }
    if (browserUrl.length > 1 && browserUrl.charAt(browserUrl.length - 1) === '/') {
        // ensure last char is not a /
        browserUrl = browserUrl.substr(0, browserUrl.length - 1);
    }
    return browserUrl;
}
//# sourceMappingURL=deep-linker.js.map