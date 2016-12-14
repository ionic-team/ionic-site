import { nativeTimeout, nativeRaf } from '../util/dom';
import { ScrollView } from '../util/scroll-view';
/**
 * @name Events
 * @description
 * Events is a publish-subscribe style event system for sending and responding to application-level
 * events across your app.
 *
 * @usage
 * ```ts
 * import { Events } from 'ionic-angular';
 *
 * constructor(public events: Events) {}
 *
 * // first page (publish an event when a user is created)
 * function createUser(user) {
 *   console.log('User created!')
 *   events.publish('user:created', user, Date.now());
 * }
 *
 * // second page (listen for the user created event)
 * events.subscribe('user:created', (user, time) => {
 *   // user and time are the same arguments passed in `events.publish(user, time)`
 *   console.log('Welcome', user, 'at', time);
 * });
 *
 * ```
 * @demo /docs/v2/demos/src/events/
 */
export var Events = (function () {
    function Events() {
        this._channels = [];
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {string} topic the topic to subscribe to
     * @param {function} handler the event handler
     */
    Events.prototype.subscribe = function (topic) {
        var _this = this;
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach(function (handler) {
            _this._channels[topic].push(handler);
        });
    };
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {string} topic the topic to unsubscribe from
     * @param {function} handler the event handler
     *
     * @return true if a handler was removed
     */
    Events.prototype.unsubscribe = function (topic, handler) {
        if (handler === void 0) { handler = null; }
        var t = this._channels[topic];
        if (!t) {
            // Wasn't found, wasn't removed
            return false;
        }
        if (!handler) {
            // Remove all handlers for this topic
            delete this._channels[topic];
            return true;
        }
        // We need to find and remove a specific handler
        var i = t.indexOf(handler);
        if (i < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        t.splice(i, 1);
        // If the channel is empty now, remove it from the channel map
        if (!t.length) {
            delete this._channels[topic];
        }
        return true;
    };
    /**
     * Publish an event to the given topic.
     *
     * @param {string} topic the topic to publish to
     * @param {any} eventData the data to send as the event
     */
    Events.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var t = this._channels[topic];
        if (!t) {
            return null;
        }
        var responses = [];
        t.forEach(function (handler) {
            responses.push(handler.apply(void 0, args));
        });
        return responses;
    };
    return Events;
}());
/**
 * @private
 */
export function setupEvents(platform, dom) {
    var events = new Events();
    // start listening for resizes XXms after the app starts
    nativeTimeout(function () {
        window.addEventListener('online', function (ev) {
            events.publish('app:online', ev);
        }, false);
        window.addEventListener('offline', function (ev) {
            events.publish('app:offline', ev);
        }, false);
        window.addEventListener('orientationchange', function (ev) {
            events.publish('app:rotated', ev);
        });
        // When that status taps, we respond
        window.addEventListener('statusTap', function (ev) {
            // TODO: Make this more better
            var el = document.elementFromPoint(platform.width() / 2, platform.height() / 2);
            if (!el) {
                return;
            }
            var contentEle = el.closest('.scroll-content');
            if (contentEle) {
                var scroll = new ScrollView(dom);
                scroll.init(contentEle, 0, 0);
                // We need to stop scrolling if it's happening and scroll up
                contentEle.style['WebkitBackfaceVisibility'] = 'hidden';
                contentEle.style['WebkitTransform'] = 'translate3d(0,0,0)';
                nativeRaf(function () {
                    contentEle.style.overflow = 'hidden';
                    function finish() {
                        contentEle.style.overflow = '';
                        contentEle.style['WebkitBackfaceVisibility'] = '';
                        contentEle.style['WebkitTransform'] = '';
                    }
                    var didScrollTimeout = setTimeout(function () {
                        finish();
                    }, 400);
                    scroll.scrollTo(0, 0, 300).then(function () {
                        clearTimeout(didScrollTimeout);
                        finish();
                    });
                });
            }
        });
        window.addEventListener('resize', function () {
            platform.windowResize();
        });
    }, 2000);
    return events;
}
/**
 * @private
 */
export function setupProvideEvents(platform, dom) {
    return function () {
        return setupEvents(platform, dom);
    };
}
//# sourceMappingURL=events.js.map