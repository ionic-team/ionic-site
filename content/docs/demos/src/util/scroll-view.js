import { Subject } from 'rxjs/Subject';
import { assert } from './util';
import { CSS, nativeRaf, pointerCoord, rafFrames } from './dom';
import { eventOptions, listenEvent } from './ui-event-manager';
export var ScrollView = (function () {
    function ScrollView(_dom) {
        this._dom = _dom;
        this.isScrolling = false;
        this.scrollStart = new Subject();
        this.scroll = new Subject();
        this.scrollEnd = new Subject();
        this._t = 0;
        this._l = 0;
        this.ev = {
            timeStamp: 0,
            scrollTop: 0,
            scrollLeft: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            contentHeight: 0,
            contentWidth: 0,
            contentTop: 0,
            contentBottom: 0,
            startY: 0,
            startX: 0,
            deltaY: 0,
            deltaX: 0,
            velocityY: 0,
            velocityX: 0,
            directionY: 'down',
            directionX: null,
            domWrite: function (fn, ctx) {
                _dom.write(fn, ctx);
            }
        };
    }
    ScrollView.prototype.init = function (ele, contentTop, contentBottom) {
        if (!this.initialized) {
            this.initialized = true;
            assert(ele, 'scroll-view, element can not be null');
            this._el = ele;
            if (this._js) {
                this.enableJsScroll(contentTop, contentBottom);
            }
            else {
                this.enableNativeScrolling();
            }
        }
    };
    ScrollView.prototype.enableNativeScrolling = function () {
        this._js = false;
        if (!this._el) {
            return;
        }
        console.debug("ScrollView, enableNativeScrolling");
        var self = this;
        var ev = self.ev;
        var positions = [];
        function scrollCallback(scrollEvent) {
            ev.timeStamp = scrollEvent.timeStamp;
            // get the current scrollTop
            // ******** DOM READ ****************
            ev.scrollTop = self.getTop();
            // get the current scrollLeft
            // ******** DOM READ ****************
            ev.scrollLeft = self.getLeft();
            if (!self.isScrolling) {
                // currently not scrolling, so this is a scroll start
                self.isScrolling = true;
                // remember the start positions
                ev.startY = ev.scrollTop;
                ev.startX = ev.scrollLeft;
                // new scroll, so do some resets
                ev.velocityY = ev.velocityX = 0;
                ev.deltaY = ev.deltaX = 0;
                positions.length = 0;
                // emit only on the first scroll event
                self.scrollStart.next(ev);
            }
            // actively scrolling
            positions.push(ev.scrollTop, ev.scrollLeft, ev.timeStamp);
            if (positions.length > 3) {
                // we've gotten at least 2 scroll events so far
                ev.deltaY = (ev.scrollTop - ev.startY);
                ev.deltaX = (ev.scrollLeft - ev.startX);
                var endPos = (positions.length - 1);
                var startPos = endPos;
                var timeRange = (ev.timeStamp - 100);
                // move pointer to position measured 100ms ago
                for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 3) {
                    startPos = i;
                }
                if (startPos !== endPos) {
                    // compute relative movement between these two points
                    var timeOffset = (positions[endPos] - positions[startPos]);
                    var movedTop = (positions[startPos - 2] - positions[endPos - 2]);
                    var movedLeft = (positions[startPos - 1] - positions[endPos - 1]);
                    // based on XXms compute the movement to apply for each render step
                    ev.velocityY = ((movedTop / timeOffset) * FRAME_MS);
                    ev.velocityX = ((movedLeft / timeOffset) * FRAME_MS);
                    // figure out which direction we're scrolling
                    ev.directionY = (movedTop > 0 ? 'up' : 'down');
                    ev.directionX = (movedLeft > 0 ? 'left' : 'right');
                }
            }
            // emit on each scroll event
            self.scroll.next(ev);
            // debounce for a moment after the last scroll event
            self._endTmr && self._endTmr();
            self._endTmr = rafFrames(6, function scrollEnd() {
                // haven't scrolled in a while, so it's a scrollend
                self.isScrolling = false;
                // reset velocity, do not reset the directions or deltas
                ev.velocityY = ev.velocityX = 0;
                // emit that the scroll has ended
                self.scrollEnd.next(ev);
            });
        }
        ;
        // clear out any existing listeners (just to be safe)
        self._lsn && self._lsn();
        // assign the raw scroll listener
        // note that it does not have a wrapping requestAnimationFrame on purpose
        // a scroll event callback will always be right before the raf callback
        // so there's little to no value of using raf here since it'll all ways immediately
        // call the raf if it was set within the scroll event, so this will save us some time
        var opts = eventOptions(false, false);
        self._lsn = listenEvent(self._el, 'scroll', false, opts, scrollCallback);
    };
    /**
     * @private
     * JS Scrolling has been provided only as a temporary solution
     * until iOS apps can take advantage of scroll events at all times.
     * The goal is to eventually remove JS scrolling entirely. When we
     * no longer have to worry about iOS not firing scroll events during
     * inertia then this can be burned to the ground. iOS's more modern
     * WKWebView does not have this issue, only UIWebView does.
     */
    ScrollView.prototype.enableJsScroll = function (contentTop, contentBottom) {
        var self = this;
        self._js = true;
        var ele = self._el;
        if (!ele) {
            return;
        }
        console.debug("ScrollView, enableJsScroll");
        var ev = self.ev;
        var positions = [];
        var rafCancel;
        var max;
        function setMax() {
            if (!max) {
                // ******** DOM READ ****************
                max = ele.scrollHeight - ele.parentElement.offsetHeight + contentTop + contentBottom;
            }
        }
        ;
        function jsScrollDecelerate(timeStamp) {
            ev.timeStamp = timeStamp;
            console.debug("scroll-view, decelerate, velocity: " + ev.velocityY);
            if (ev.velocityY) {
                ev.velocityY *= DECELERATION_FRICTION;
                // update top with updated velocity
                // clamp top within scroll limits
                // ******** DOM READ ****************
                setMax();
                self._t = Math.min(Math.max(self._t + ev.velocityY, 0), max);
                ev.scrollTop = self._t;
                // emit on each scroll event
                self.scroll.next(ev);
                self._dom.write(function () {
                    // ******** DOM WRITE ****************
                    self.setTop(self._t);
                    if (self._t > 0 && self._t < max && Math.abs(ev.velocityY) > MIN_VELOCITY_CONTINUE_DECELERATION) {
                        rafCancel = self._dom.read(function (rafTimeStamp) {
                            jsScrollDecelerate(rafTimeStamp);
                        });
                    }
                    else {
                        // haven't scrolled in a while, so it's a scrollend
                        self.isScrolling = false;
                        // reset velocity, do not reset the directions or deltas
                        ev.velocityY = ev.velocityX = 0;
                        // emit that the scroll has ended
                        self.scrollEnd.next(ev);
                    }
                });
            }
        }
        function jsScrollTouchStart(touchEvent) {
            positions.length = 0;
            max = null;
            self._dom.cancel(rafCancel);
            positions.push(pointerCoord(touchEvent).y, touchEvent.timeStamp);
        }
        function jsScrollTouchMove(touchEvent) {
            if (!positions.length) {
                return;
            }
            ev.timeStamp = touchEvent.timeStamp;
            var y = pointerCoord(touchEvent).y;
            // ******** DOM READ ****************
            setMax();
            self._t -= (y - positions[positions.length - 2]);
            self._t = Math.min(Math.max(self._t, 0), max);
            positions.push(y, ev.timeStamp);
            if (!self.isScrolling) {
                // remember the start position
                ev.startY = self._t;
                // new scroll, so do some resets
                ev.velocityY = ev.deltaY = 0;
                self.isScrolling = true;
                // emit only on the first scroll event
                self.scrollStart.next(ev);
            }
            self._dom.write(function () {
                // ******** DOM WRITE ****************
                self.setTop(self._t);
            });
        }
        function jsScrollTouchEnd(touchEvent) {
            // figure out what the scroll position was about 100ms ago
            self._dom.cancel(rafCancel);
            if (!positions.length && self.isScrolling) {
                self.isScrolling = false;
                ev.velocityY = ev.velocityX = 0;
                self.scrollEnd.next(ev);
                return;
            }
            var y = pointerCoord(touchEvent).y;
            positions.push(y, touchEvent.timeStamp);
            var endPos = (positions.length - 1);
            var startPos = endPos;
            var timeRange = (touchEvent.timeStamp - 100);
            // move pointer to position measured 100ms ago
            for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 2) {
                startPos = i;
            }
            if (startPos !== endPos) {
                // compute relative movement between these two points
                var timeOffset = (positions[endPos] - positions[startPos]);
                var movedTop = (positions[startPos - 1] - positions[endPos - 1]);
                // based on XXms compute the movement to apply for each render step
                ev.velocityY = ((movedTop / timeOffset) * FRAME_MS);
                // verify that we have enough velocity to start deceleration
                if (Math.abs(ev.velocityY) > MIN_VELOCITY_START_DECELERATION) {
                    // ******** DOM READ ****************
                    setMax();
                    rafCancel = self._dom.read(function (rafTimeStamp) {
                        jsScrollDecelerate(rafTimeStamp);
                    });
                }
            }
            else {
                self.isScrolling = false;
                ev.velocityY = 0;
                self.scrollEnd.next(ev);
            }
            positions.length = 0;
        }
        var opts = eventOptions(false, true);
        var unRegStart = listenEvent(ele, 'touchstart', false, opts, jsScrollTouchStart);
        var unRegMove = listenEvent(ele, 'touchmove', false, opts, jsScrollTouchMove);
        var unRegEnd = listenEvent(ele, 'touchend', false, opts, jsScrollTouchEnd);
        ele.parentElement.classList.add('js-scroll');
        // stop listening for actual scroll events
        self._lsn && self._lsn();
        // create an unregister for all of these events
        self._lsn = function () {
            unRegStart();
            unRegMove();
            unRegEnd();
            ele.parentElement.classList.remove('js-scroll');
        };
    };
    /**
     * DOM READ
     */
    ScrollView.prototype.getTop = function () {
        if (this._js) {
            return this._t;
        }
        return this._t = this._el.scrollTop;
    };
    /**
     * DOM READ
     */
    ScrollView.prototype.getLeft = function () {
        if (this._js) {
            return 0;
        }
        return this._l = this._el.scrollLeft;
    };
    /**
     * DOM WRITE
     */
    ScrollView.prototype.setTop = function (top) {
        this._t = top;
        if (this._js) {
            this._el.style[CSS.transform] = "translate3d(" + this._l * -1 + "px," + top * -1 + "px,0px)";
        }
        else {
            this._el.scrollTop = top;
        }
    };
    /**
     * DOM WRITE
     */
    ScrollView.prototype.setLeft = function (left) {
        this._l = left;
        if (this._js) {
            this._el.style[CSS.transform] = "translate3d(" + left * -1 + "px," + this._t * -1 + "px,0px)";
        }
        else {
            this._el.scrollLeft = left;
        }
    };
    ScrollView.prototype.scrollTo = function (x, y, duration, done) {
        // scroll animation loop w/ easing
        // credit https://gist.github.com/dezinezync/5487119
        var promise;
        if (done === undefined) {
            // only create a promise if a done callback wasn't provided
            // done can be a null, which avoids any functions
            promise = new Promise(function (resolve) {
                done = resolve;
            });
        }
        var self = this;
        if (!self._el) {
            // invalid element
            done();
            return promise;
        }
        x = x || 0;
        y = y || 0;
        var fromY = self._el.scrollTop;
        var fromX = self._el.scrollLeft;
        var maxAttempts = (duration / 16) + 100;
        var startTime;
        var attempts = 0;
        // scroll loop
        function step(timeStamp) {
            attempts++;
            if (!self._el || !self.isScrolling || attempts > maxAttempts) {
                self.isScrolling = false;
                self._el.style[CSS.transform] = '';
                done();
                return;
            }
            var time = Math.min(1, ((timeStamp - startTime) / duration));
            // where .5 would be 50% of time on a linear scale easedT gives a
            // fraction based on the easing method
            var easedT = (--time) * time * time + 1;
            if (fromY !== y) {
                self.setTop((easedT * (y - fromY)) + fromY);
            }
            if (fromX !== x) {
                self.setLeft(Math.floor((easedT * (x - fromX)) + fromX));
            }
            if (easedT < 1) {
                // do not use DomController here
                // must use nativeRaf in order to fire in the next frame
                nativeRaf(step);
            }
            else {
                self.isScrolling = false;
                self._el.style[CSS.transform] = '';
                done();
            }
        }
        // start scroll loop
        self.isScrolling = true;
        // chill out for a frame first
        rafFrames(2, function (timeStamp) {
            startTime = timeStamp;
            step(timeStamp);
        });
        return promise;
    };
    ScrollView.prototype.scrollToTop = function (duration) {
        return this.scrollTo(0, 0, duration);
    };
    ScrollView.prototype.scrollToBottom = function (duration) {
        var y = 0;
        if (this._el) {
            y = this._el.scrollHeight - this._el.clientHeight;
        }
        return this.scrollTo(0, y, duration);
    };
    ScrollView.prototype.stop = function () {
        this.isScrolling = false;
    };
    /**
     * @private
     */
    ScrollView.prototype.destroy = function () {
        this.scrollStart.unsubscribe();
        this.scroll.unsubscribe();
        this.scrollEnd.unsubscribe();
        this.stop();
        this._endTmr && this._endTmr();
        this._lsn && this._lsn();
        var ev = this.ev;
        ev.domWrite = ev.contentElement = ev.fixedElement = ev.scrollElement = ev.headerElement = null;
        this._lsn = this._el = this._dom = this.ev = ev = null;
    };
    return ScrollView;
}());
var MIN_VELOCITY_START_DECELERATION = 4;
var MIN_VELOCITY_CONTINUE_DECELERATION = 0.12;
var DECELERATION_FRICTION = 0.97;
var FRAME_MS = (1000 / 60);
//# sourceMappingURL=scroll-view.js.map