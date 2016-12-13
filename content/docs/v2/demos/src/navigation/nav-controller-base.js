var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { EventEmitter, NgZone, ReflectiveInjector } from '@angular/core';
import { convertToView, convertToViews, DIRECTION_BACK, DIRECTION_FORWARD, INIT_ZINDEX, ViewState } from './nav-util';
import { setZIndex } from './nav-util';
import { isBlank, isNumber, isPresent, assert, removeArrayItem } from '../util/util';
import { isViewController, ViewController } from './view-controller';
import { Ion } from '../components/ion';
import { NavController } from './nav-controller';
import { NavParams } from './nav-params';
import { SwipeBackGesture } from './swipe-back';
/**
 * @private
 * This class is for internal use only. It is not exported publicly.
 */
export var NavControllerBase = (function (_super) {
    __extends(NavControllerBase, _super);
    function NavControllerBase(parent, _app, config, _keyboard, elementRef, _zone, renderer, _cfr, _gestureCtrl, _trnsCtrl, _linker, _domCtrl) {
        _super.call(this, config, elementRef, renderer);
        this.parent = parent;
        this._app = _app;
        this.config = config;
        this._keyboard = _keyboard;
        this._zone = _zone;
        this._cfr = _cfr;
        this._gestureCtrl = _gestureCtrl;
        this._trnsCtrl = _trnsCtrl;
        this._linker = _linker;
        this._domCtrl = _domCtrl;
        this._children = [];
        this._ids = -1;
        this._init = false;
        this._queue = [];
        this._trnsId = null;
        this._trnsTm = false;
        this._views = [];
        this._zIndexOffset = 0;
        this.viewDidLoad = new EventEmitter();
        this.viewWillEnter = new EventEmitter();
        this.viewDidEnter = new EventEmitter();
        this.viewWillLeave = new EventEmitter();
        this.viewDidLeave = new EventEmitter();
        this.viewWillUnload = new EventEmitter();
        this._sbEnabled = config.getBoolean('swipeBackEnabled');
        this.id = 'n' + (++ctrlIds);
    }
    NavControllerBase.prototype.push = function (page, params, opts, done) {
        return this._queueTrns({
            insertStart: -1,
            insertViews: [convertToView(this._linker, page, params)],
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.insert = function (insertIndex, page, params, opts, done) {
        return this._queueTrns({
            insertStart: insertIndex,
            insertViews: [convertToView(this._linker, page, params)],
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.insertPages = function (insertIndex, insertPages, opts, done) {
        return this._queueTrns({
            insertStart: insertIndex,
            insertViews: convertToViews(this._linker, insertPages),
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.pop = function (opts, done) {
        return this._queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.popTo = function (indexOrViewCtrl, opts, done) {
        var config = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (isViewController(indexOrViewCtrl)) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (isNumber(indexOrViewCtrl)) {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this._queueTrns(config, done);
    };
    NavControllerBase.prototype.popToRoot = function (opts, done) {
        return this._queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.popAll = function () {
        var promises = [];
        for (var i = this._views.length - 1; i >= 0; i--) {
            promises.push(this.pop(null));
        }
        return Promise.all(promises);
    };
    NavControllerBase.prototype.remove = function (startIndex, removeCount, opts, done) {
        if (removeCount === void 0) { removeCount = 1; }
        return this._queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.removeView = function (viewController, opts, done) {
        return this._queueTrns({
            removeView: viewController,
            removeStart: 0,
            removeCount: 1,
            opts: opts,
        }, done);
    };
    NavControllerBase.prototype.setRoot = function (pageOrViewCtrl, params, opts, done) {
        var viewControllers = [convertToView(this._linker, pageOrViewCtrl, params)];
        return this._setPages(viewControllers, opts, done);
    };
    NavControllerBase.prototype.setPages = function (pages, opts, done) {
        var viewControllers = convertToViews(this._linker, pages);
        return this._setPages(viewControllers, opts, done);
    };
    NavControllerBase.prototype._setPages = function (viewControllers, opts, done) {
        if (isBlank(opts)) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animate !== true) {
            opts.animate = false;
        }
        return this._queueTrns({
            insertStart: 0,
            insertViews: viewControllers,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    };
    NavControllerBase.prototype._queueTrns = function (ti, done) {
        var _this = this;
        var promise;
        var resolve = done;
        var reject = done;
        if (done === undefined) {
            // only create a promise if a done callback wasn't provided
            // done can be a null, which avoids any functions
            promise = new Promise(function (res, rej) {
                resolve = res;
                reject = rej;
            });
        }
        ti.resolve = function (hasCompleted, isAsync, enteringName, leavingName, direction) {
            // transition has successfully resolved
            _this._trnsId = null;
            _this._init = true;
            resolve && resolve(hasCompleted, isAsync, enteringName, leavingName, direction);
            // let's see if there's another to kick off
            _this.setTransitioning(false);
            _this._swipeBackCheck();
            _this._nextTrns();
        };
        ti.reject = function (rejectReason, trns) {
            // rut row raggy, something rejected this transition
            _this._trnsId = null;
            _this._queue.length = 0;
            while (trns) {
                if (trns.enteringView && (trns.enteringView._state !== ViewState.LOADED)) {
                    // destroy the entering views and all of their hopes and dreams
                    _this._destroyView(trns.enteringView);
                }
                if (!trns.parent) {
                    break;
                }
            }
            if (trns) {
                _this._trnsCtrl.destroy(trns.trnsId);
            }
            reject && reject(false, false, rejectReason);
            // let's see if there's another to kick off
            _this.setTransitioning(false);
            _this._swipeBackCheck();
            _this._nextTrns();
        };
        if (ti.insertViews) {
            // ensure we've got good views to insert
            ti.insertViews = ti.insertViews.filter(function (v) { return v !== null; });
            if (ti.insertViews.length === 0) {
                ti.reject('invalid views to insert');
                return promise;
            }
        }
        else if (isPresent(ti.removeStart) && this._views.length === 0 && !this._isPortal) {
            ti.reject('no views in the stack to be removed');
            return promise;
        }
        this._queue.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this._nextTrns();
        // promise is undefined if a done callbacks was provided
        return promise;
    };
    NavControllerBase.prototype._nextTrns = function () {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning()) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        var ti = this._nextTI();
        if (!ti) {
            return false;
        }
        // Get entering and leaving views
        var leavingView = this.getActive();
        var enteringView = this._getEnteringView(ti, leavingView);
        if (!leavingView && !enteringView) {
            ti.reject('leavingView and enteringView are null. stack is already empty');
            return false;
        }
        // set that this nav is actively transitioning
        this.setTransitioning(true);
        // Initialize enteringView
        if (enteringView && isBlank(enteringView._state)) {
            // render the entering view, and all child navs and views
            // ******** DOM WRITE ****************
            this._viewInit(enteringView);
        }
        // Only test canLeave/canEnter if there is transition
        var requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        if (requiresTransition) {
            // views have been initialized, now let's test
            // to see if the transition is even allowed or not
            return this._viewTest(enteringView, leavingView, ti);
        }
        else {
            return this._postViewInit(enteringView, leavingView, ti);
        }
    };
    NavControllerBase.prototype._nextTI = function () {
        var ti = this._queue.shift();
        if (!ti) {
            return null;
        }
        var viewsLength = this._views.length;
        if (isPresent(ti.removeView)) {
            assert(isPresent(ti.removeStart), 'removeView needs removeStart');
            assert(isPresent(ti.removeCount), 'removeView needs removeCount');
            var index = this._views.indexOf(ti.removeView);
            if (index >= 0) {
                ti.removeStart += index;
            }
        }
        if (isPresent(ti.removeStart)) {
            if (ti.removeStart < 0) {
                ti.removeStart = (viewsLength - 1);
            }
            if (ti.removeCount < 0) {
                ti.removeCount = (viewsLength - ti.removeStart);
            }
            ti.leavingRequiresTransition = ((ti.removeStart + ti.removeCount) === viewsLength);
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = (ti.insertStart === viewsLength);
        }
        return ti;
    };
    NavControllerBase.prototype._getEnteringView = function (ti, leavingView) {
        var insertViews = ti.insertViews;
        if (insertViews) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        var removeStart = ti.removeStart;
        if (isPresent(removeStart)) {
            var views = this._views;
            var removeEnd = removeStart + ti.removeCount;
            var i;
            var view;
            for (i = views.length - 1; i >= 0; i--) {
                view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return null;
    };
    NavControllerBase.prototype._postViewInit = function (enteringView, leavingView, ti) {
        var _this = this;
        assert(leavingView || enteringView, 'Both leavingView and enteringView are null');
        assert(ti.resolve, 'resolve must be valid');
        assert(ti.reject, 'reject must be valid');
        var opts = ti.opts || {};
        var insertViews = ti.insertViews;
        var removeStart = ti.removeStart;
        var removeCount = ti.removeCount;
        var view;
        var i;
        var destroyQueue;
        // there are views to remove
        if (isPresent(removeStart)) {
            assert(removeStart >= 0, 'removeStart can not be negative');
            assert(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (i = 0; i < removeCount; i++) {
                view = this._views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || DIRECTION_BACK;
        }
        var finalBalance = this._views.length + (insertViews ? insertViews.length : 0) - (removeCount ? removeCount : 0);
        assert(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0 && !this._isPortal) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.getNativeElement());
            ti.reject('navigation stack needs at least one root page');
            return false;
        }
        // there are views to insert
        if (insertViews) {
            // manually set the new view's id if an id was passed in the options
            if (isPresent(opts.id)) {
                enteringView.id = opts.id;
            }
            // add the views to the
            for (i = 0; i < insertViews.length; i++) {
                view = insertViews[i];
                assert(view, 'view must be non null');
                this._insertViewAt(view, ti.insertStart + i);
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || DIRECTION_FORWARD;
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            this._zone.run(function () {
                for (i = 0; i < destroyQueue.length; i++) {
                    view = destroyQueue[i];
                    _this._willLeave(view, true);
                    _this._didLeave(view);
                    _this._willUnload(view);
                }
            });
            // once all lifecycle events has been delivered, we can safely detroy the views
            for (i = 0; i < destroyQueue.length; i++) {
                this._destroyView(destroyQueue[i]);
            }
        }
        if (ti.enteringRequiresTransition || ti.leavingRequiresTransition && enteringView !== leavingView) {
            // set which animation it should use if it wasn't set yet
            if (!opts.animation) {
                if (isPresent(ti.removeStart)) {
                    opts.animation = (leavingView || enteringView).getTransitionName(opts.direction);
                }
                else {
                    opts.animation = (enteringView || leavingView).getTransitionName(opts.direction);
                }
            }
            // huzzah! let us transition these views
            this._transition(enteringView, leavingView, opts, ti.resolve);
        }
        else {
            // they're inserting/removing the views somewhere in the middle or
            // beginning, so visually nothing needs to animate/transition
            // resolve immediately because there's no animation that's happening
            ti.resolve(true, false);
        }
        return true;
    };
    /**
     * DOM WRITE
     */
    NavControllerBase.prototype._viewInit = function (enteringView) {
        // entering view has not been initialized yet
        var componentProviders = ReflectiveInjector.resolve([
            { provide: NavController, useValue: this },
            { provide: ViewController, useValue: enteringView },
            { provide: NavParams, useValue: enteringView.getNavParams() }
        ]);
        var componentFactory = this._cfr.resolveComponentFactory(enteringView.component);
        var childInjector = ReflectiveInjector.fromResolvedProviders(componentProviders, this._viewport.parentInjector);
        // create ComponentRef and set it to the entering view
        enteringView.init(componentFactory.create(childInjector, []));
        enteringView._state = ViewState.INITIALIZED;
        this._preLoad(enteringView);
    };
    NavControllerBase.prototype._viewAttachToDOM = function (view, componentRef, viewport) {
        assert(view._state === ViewState.INITIALIZED, 'view state must be INITIALIZED');
        // fire willLoad before change detection runs
        this._willLoad(view);
        // render the component ref instance to the DOM
        // ******** DOM WRITE ****************
        viewport.insert(componentRef.hostView, viewport.length);
        view._state = ViewState.PRE_RENDERED;
        if (view._cssClass) {
            // the ElementRef of the actual ion-page created
            var pageElement = componentRef.location.nativeElement;
            // ******** DOM WRITE ****************
            this._renderer.setElementClass(pageElement, view._cssClass, true);
        }
        componentRef.changeDetectorRef.detectChanges();
        // successfully finished loading the entering view
        // fire off the "didLoad" lifecycle events
        this._zone.run(this._didLoad.bind(this, view));
    };
    NavControllerBase.prototype._viewTest = function (enteringView, leavingView, ti) {
        var _this = this;
        var promises = [];
        if (leavingView) {
            var leavingTestResult = leavingView._lifecycleTest('Leave');
            if (leavingTestResult === false) {
                // synchronous reject
                ti.reject((leavingTestResult !== false ? leavingTestResult : "ionViewCanLeave rejected"));
                return false;
            }
            else if (leavingTestResult instanceof Promise) {
                // async promise
                promises.push(leavingTestResult);
            }
        }
        if (enteringView) {
            var enteringTestResult = enteringView._lifecycleTest('Enter');
            if (enteringTestResult === false) {
                // synchronous reject
                ti.reject((enteringTestResult !== false ? enteringTestResult : "ionViewCanEnter rejected"));
                return false;
            }
            else if (enteringTestResult instanceof Promise) {
                // async promise
                promises.push(enteringTestResult);
            }
        }
        if (promises.length) {
            // darn, async promises, gotta wait for them to resolve
            Promise.all(promises).then(function (values) {
                if (values.some(function (result) { return result === false; })) {
                    ti.reject("ionViewCanEnter rejected");
                }
                else {
                    _this._postViewInit(enteringView, leavingView, ti);
                }
            }).catch(ti.reject);
            return true;
        }
        else {
            // synchronous and all tests passed! let's move on already
            return this._postViewInit(enteringView, leavingView, ti);
        }
    };
    NavControllerBase.prototype._transition = function (enteringView, leavingView, opts, resolve) {
        var _this = this;
        // figure out if this transition is the root one or a
        // child of a parent nav that has the root transition
        this._trnsId = this._trnsCtrl.getRootTrnsId(this);
        if (this._trnsId === null) {
            // this is the root transition, meaning all child navs and their views
            // should be added as a child transition to this one
            this._trnsId = this._trnsCtrl.nextId();
        }
        // create the transition options
        var animationOpts = {
            animation: opts.animation,
            direction: opts.direction,
            duration: (opts.animate === false ? 0 : opts.duration),
            easing: opts.easing,
            isRTL: this._config.platform.isRTL(),
            ev: opts.ev,
        };
        // create the transition animation from the TransitionController
        // this will either create the root transition, or add it as a child transition
        var transition = this._trnsCtrl.get(this._trnsId, enteringView, leavingView, animationOpts);
        // ensure any swipeback transitions are cleared out
        this._sbTrns && this._sbTrns.destroy();
        this._sbTrns = null;
        // swipe to go back root transition
        if (transition.isRoot() && opts.progressAnimation) {
            this._sbTrns = transition;
        }
        // transition start has to be registered before attaching the view to the DOM!
        transition.registerStart(function () {
            _this._trnsStart(transition, enteringView, leavingView, opts, resolve);
            if (transition.parent) {
                transition.parent.start();
            }
        });
        if (enteringView && enteringView._state === ViewState.INITIALIZED) {
            // render the entering component in the DOM
            // this would also render new child navs/views
            // which may have their very own async canEnter/Leave tests
            // ******** DOM WRITE ****************
            this._viewAttachToDOM(enteringView, enteringView._cmp, this._viewport);
        }
        else {
            console.debug('enteringView state is not INITIALIZED', enteringView);
        }
        if (!transition.hasChildren) {
            // lowest level transition, so kick it off and let it bubble up to start all of them
            transition.start();
        }
    };
    NavControllerBase.prototype._trnsStart = function (transition, enteringView, leavingView, opts, resolve) {
        var _this = this;
        assert(this.isTransitioning(), 'isTransitioning() has to be true');
        this._trnsId = null;
        // set the correct zIndex for the entering and leaving views
        // ******** DOM WRITE ****************
        setZIndex(this, enteringView, leavingView, opts.direction, this._renderer);
        // always ensure the entering view is viewable
        // ******** DOM WRITE ****************
        enteringView && enteringView._domShow(true, this._renderer);
        // always ensure the leaving view is viewable
        // ******** DOM WRITE ****************
        leavingView && leavingView._domShow(true, this._renderer);
        // initialize the transition
        transition.init();
        // we should animate (duration > 0) if the pushed page is not the first one (startup)
        // or if it is a portal (modal, actionsheet, etc.)
        var isFirstPage = !this._init && this._views.length === 1;
        var shouldNotAnimate = isFirstPage && !this._isPortal;
        var canNotAnimate = this._config.get('animate') === false;
        if (shouldNotAnimate || canNotAnimate) {
            opts.animate = false;
        }
        if (opts.animate === false) {
            // if it was somehow set to not animation, then make the duration zero
            transition.duration(0);
        }
        // create a callback that needs to run within zone
        // that will fire off the willEnter/Leave lifecycle events at the right time
        transition.beforeAddRead(this._viewsWillLifecycles.bind(this, enteringView, leavingView));
        // create a callback for when the animation is done
        transition.onFinish(function () {
            // transition animation has ended
            _this._zone.run(_this._trnsFinish.bind(_this, transition, opts, resolve));
        });
        // get the set duration of this transition
        var duration = transition.getDuration();
        if (transition.isRoot()) {
            // this is the top most, or only active transition, so disable the app
            // add XXms to the duration the app is disabled when the keyboard is open
            if (duration > DISABLE_APP_MINIMUM_DURATION && opts.disableApp !== false) {
                // if this transition has a duration and this is the root transition
                // then set that the app is actively disabled
                this._app.setEnabled(false, duration + ACTIVE_TRANSITION_OFFSET);
            }
            else {
                console.debug('transition is running but app has not been disabled');
            }
            // cool, let's do this, start the transition
            if (opts.progressAnimation) {
                // this is a swipe to go back, just get the transition progress ready
                // kick off the swipe animation start
                transition.progressStart();
            }
            else {
                // only the top level transition should actually start "play"
                // kick it off and let it play through
                // ******** DOM WRITE ****************
                transition.play();
            }
        }
    };
    NavControllerBase.prototype._viewsWillLifecycles = function (enteringView, leavingView) {
        var _this = this;
        if (enteringView || leavingView) {
            this._zone.run(function () {
                // Here, the order is important. WillLeave must called before WillEnter.
                leavingView && _this._willLeave(leavingView, !enteringView);
                enteringView && _this._willEnter(enteringView);
            });
        }
    };
    NavControllerBase.prototype._trnsFinish = function (transition, opts, resolve) {
        var hasCompleted = transition.hasCompleted;
        var enteringView = transition.enteringView;
        var leavingView = transition.leavingView;
        // mainly for testing
        var enteringName;
        var leavingName;
        if (hasCompleted) {
            // transition has completed (went from 0 to 1)
            if (enteringView) {
                enteringName = enteringView.name;
                this._didEnter(enteringView);
            }
            if (leavingView) {
                leavingName = leavingView.name;
                this._didLeave(leavingView);
            }
            this._cleanup(enteringView);
        }
        else {
            // If transition does not complete, we have to cleanup anyway, because
            // previous pages in the stack are not hidden probably.
            this._cleanup(leavingView);
        }
        if (transition.isRoot()) {
            // this is the root transition
            // it's save to destroy this transition
            this._trnsCtrl.destroy(transition.trnsId);
            // it's safe to enable the app again
            this._app.setEnabled(true);
            if (opts.updateUrl !== false) {
                // notify deep linker of the nav change
                // if a direction was provided and should update url
                this._linker.navChange(opts.direction);
            }
            if (opts.keyboardClose !== false) {
                // the keyboard is still open!
                // no problem, let's just close for them
                this._keyboard.close();
            }
        }
        // congrats, we did it!
        resolve(hasCompleted, true, enteringName, leavingName, opts.direction);
    };
    NavControllerBase.prototype._insertViewAt = function (view, index) {
        var existingIndex = this._views.indexOf(view);
        if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            this._views.splice(index, 0, this._views.splice(existingIndex, 1)[0]);
        }
        else {
            // this is a new view to add to the stack
            // create the new entering view
            view._setNav(this);
            // give this inserted view an ID
            this._ids++;
            if (!view.id) {
                view.id = this.id + "-" + this._ids;
            }
            // insert the entering view into the correct index in the stack
            this._views.splice(index, 0, view);
        }
    };
    NavControllerBase.prototype._removeView = function (view) {
        var views = this._views;
        var index = views.indexOf(view);
        assert(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    };
    NavControllerBase.prototype._destroyView = function (view) {
        view._destroy(this._renderer);
        this._removeView(view);
    };
    /**
     * DOM WRITE
     */
    NavControllerBase.prototype._cleanup = function (activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        var activeViewIndex = this.indexOf(activeView);
        var views = this._views;
        var reorderZIndexes = false;
        var view;
        var i;
        for (i = views.length - 1; i >= 0; i--) {
            view = views[i];
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                this._willUnload(view);
                this._destroyView(view);
            }
            else if (i < activeViewIndex && !this._isPortal) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                view._domShow(false, this._renderer);
            }
            if (view._zIndex <= 0) {
                reorderZIndexes = true;
            }
        }
        if (!this._isPortal && reorderZIndexes) {
            for (i = 0; i < views.length; i++) {
                view = views[i];
                // ******** DOM WRITE ****************
                view._setZIndex(view._zIndex + INIT_ZINDEX + 1, this._renderer);
            }
        }
    };
    NavControllerBase.prototype._preLoad = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        view._preLoad();
    };
    NavControllerBase.prototype._willLoad = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        view._willLoad();
    };
    NavControllerBase.prototype._didLoad = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._didLoad();
        this.viewDidLoad.emit(view);
        this._app.viewDidLoad.emit(view);
    };
    NavControllerBase.prototype._willEnter = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._willEnter();
        this.viewWillEnter.emit(view);
        this._app.viewWillEnter.emit(view);
    };
    NavControllerBase.prototype._didEnter = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._didEnter();
        this.viewDidEnter.emit(view);
        this._app.viewDidEnter.emit(view);
    };
    NavControllerBase.prototype._willLeave = function (view, willUnload) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._willLeave(willUnload);
        this.viewWillLeave.emit(view);
        this._app.viewWillLeave.emit(view);
    };
    NavControllerBase.prototype._didLeave = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._didLeave();
        this.viewDidLeave.emit(view);
        this._app.viewDidLeave.emit(view);
    };
    NavControllerBase.prototype._willUnload = function (view) {
        assert(this.isTransitioning(), 'nav controller should be transitioning');
        assert(NgZone.isInAngularZone(), 'callback should be zoned');
        view._willUnload();
        this.viewWillUnload.emit(view);
        this._app.viewWillUnload.emit(view);
    };
    NavControllerBase.prototype.getActiveChildNav = function () {
        return this._children[this._children.length - 1];
    };
    NavControllerBase.prototype.registerChildNav = function (nav) {
        this._children.push(nav);
    };
    NavControllerBase.prototype.unregisterChildNav = function (nav) {
        removeArrayItem(this._children, nav);
    };
    NavControllerBase.prototype.destroy = function () {
        var views = this._views;
        var view;
        for (var i = 0; i < views.length; i++) {
            view = views[i];
            view._willUnload();
            view._destroy(this._renderer);
        }
        // purge stack
        this._views.length = 0;
        // release swipe back gesture and transition
        this._sbGesture && this._sbGesture.destroy();
        this._sbTrns && this._sbTrns.destroy();
        this._sbGesture = this._sbTrns = null;
        // Unregister navcontroller
        if (this.parent && this.parent.unregisterChildNav) {
            this.parent.unregisterChildNav(this);
        }
    };
    NavControllerBase.prototype.swipeBackStart = function () {
        if (this.isTransitioning() || this._queue.length > 0) {
            return;
        }
        // default the direction to "back";
        var opts = {
            direction: DIRECTION_BACK,
            progressAnimation: true
        };
        this._queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts,
        }, null);
    };
    NavControllerBase.prototype.swipeBackProgress = function (stepValue) {
        if (this._sbTrns && this._sbGesture) {
            // continue to disable the app while actively dragging
            this._app.setEnabled(false, ACTIVE_TRANSITION_DEFAULT);
            this.setTransitioning(true);
            // set the transition animation's progress
            this._sbTrns.progressStep(stepValue);
        }
    };
    NavControllerBase.prototype.swipeBackEnd = function (shouldComplete, currentStepValue, velocity) {
        if (this._sbTrns && this._sbGesture) {
            // the swipe back gesture has ended
            var dur = this._sbTrns.getDuration() / (Math.abs(velocity) + 1);
            this._sbTrns.progressEnd(shouldComplete, currentStepValue, dur);
        }
    };
    NavControllerBase.prototype._swipeBackCheck = function () {
        if (this.canSwipeBack()) {
            if (!this._sbGesture) {
                this._sbGesture = new SwipeBackGesture(this, this._gestureCtrl, this._domCtrl);
            }
            this._sbGesture.listen();
        }
        else if (this._sbGesture) {
            this._sbGesture.unlisten();
        }
    };
    NavControllerBase.prototype.canSwipeBack = function () {
        return (this._sbEnabled &&
            !this._isPortal &&
            !this._children.length &&
            !this.isTransitioning() &&
            this._app.isEnabled() &&
            this.canGoBack());
    };
    NavControllerBase.prototype.canGoBack = function () {
        var activeView = this.getActive();
        return !!(activeView && activeView.enableBack());
    };
    NavControllerBase.prototype.isTransitioning = function () {
        return this._trnsTm;
    };
    NavControllerBase.prototype.setTransitioning = function (isTransitioning) {
        this._trnsTm = isTransitioning;
    };
    NavControllerBase.prototype.getActive = function () {
        return this._views[this._views.length - 1];
    };
    NavControllerBase.prototype.isActive = function (view) {
        return (view === this.getActive());
    };
    NavControllerBase.prototype.getByIndex = function (index) {
        return this._views[index];
    };
    NavControllerBase.prototype.getPrevious = function (view) {
        // returns the view controller which is before the given view controller.
        if (!view) {
            view = this.getActive();
        }
        return this._views[this.indexOf(view) - 1];
    };
    NavControllerBase.prototype.first = function () {
        // returns the first view controller in this nav controller's stack.
        return this._views[0];
    };
    NavControllerBase.prototype.last = function () {
        // returns the last page in this nav controller's stack.
        return this._views[this._views.length - 1];
    };
    NavControllerBase.prototype.indexOf = function (view) {
        // returns the index number of the given view controller.
        return this._views.indexOf(view);
    };
    NavControllerBase.prototype.length = function () {
        return this._views.length;
    };
    /**
     * Return the stack of views in this NavController.
     */
    NavControllerBase.prototype.getViews = function () {
        return this._views;
    };
    NavControllerBase.prototype.isSwipeBackEnabled = function () {
        return this._sbEnabled;
    };
    NavControllerBase.prototype.dismissPageChangeViews = function () {
        for (var _i = 0, _a = this._views; _i < _a.length; _i++) {
            var view = _a[_i];
            if (view.data && view.data.dismissOnPageChange) {
                view.dismiss();
            }
        }
    };
    NavControllerBase.prototype.setViewport = function (val) {
        this._viewport = val;
    };
    return NavControllerBase;
}(Ion));
var ctrlIds = -1;
var DISABLE_APP_MINIMUM_DURATION = 64;
var ACTIVE_TRANSITION_DEFAULT = 5000;
var ACTIVE_TRANSITION_OFFSET = 2000;
//# sourceMappingURL=nav-controller-base.js.map