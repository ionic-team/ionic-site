System.register('ionic/util/dom', ['angular2/src/facade/async'], function (_export) {
  'use strict';

  var Promise, nativeRaf, nativeCancelRaf, raf, rafCancel, CSS;

  _export('rafPromise', rafPromise);

  _export('transitionEnd', transitionEnd);

  _export('animationStart', animationStart);

  _export('animationEnd', animationEnd);

  _export('ready', ready);

  _export('windowLoad', windowLoad);

  function rafPromise() {
    return new Promise(function (resolve) {
      return raf(resolve);
    });
  }

  function transitionEnd(el) {
    return cssPromise(el, CSS.transitionEnd);
  }

  function animationStart(el, animationName) {
    return cssPromise(el, CSS.animationStart, animationName);
  }

  function animationEnd(el, animationName) {
    return cssPromise(el, CSS.animationEnd, animationName);
  }

  function cssPromise(el, eventNames, animationName) {
    return new Promise(function (resolve) {
      eventNames.split(' ').forEach(function (eventName) {
        el.addEventListener(eventName, onEvent);
      });
      function onEvent(ev) {
        if (ev.animationName && animationName) {
          if (ev.animationName !== animationName) {
            return;
          }
        } else if (ev.target !== el) {
          return;
        }
        ev.stopPropagation();
        eventNames.split(' ').forEach(function (eventName) {
          el.removeEventListener(eventName, onEvent);
        });
        resolve(ev);
      }
    });
  }

  function ready() {
    return new Promise(function (resolve) {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        resolve();
      } else {
        (function () {
          var completed = function () {
            document.removeEventListener('DOMContentLoaded', completed, false);
            window.removeEventListener('load', completed, false);
            resolve();
          };

          document.addEventListener('DOMContentLoaded', completed, false);
          window.addEventListener('load', completed, false);
        })();
      }
    });
  }

  function windowLoad() {
    return new Promise(function (resolve) {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        (function () {
          var completed = function () {
            window.removeEventListener('load', completed, false);
            resolve();
          };

          window.addEventListener('load', completed, false);
        })();
      }
    });
  }

  return {
    setters: [function (_angular2SrcFacadeAsync) {
      Promise = _angular2SrcFacadeAsync.Promise;
    }],
    execute: function () {
      nativeRaf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      nativeCancelRaf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;

      raf = nativeRaf || function (callback) {
        var timeCurrent = new Date().getTime(),
            timeDelta = undefined;
        timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
        timeLast = timeCurrent + timeDelta;
        return setTimeout(function () {
          callback(timeCurrent + timeDelta);
        }, timeDelta);
      };

      _export('raf', raf);

      rafCancel = nativeRaf ? nativeCancelRaf : function (id) {
        return window.cancelTimeout(id);
      };

      _export('rafCancel', rafCancel);

      CSS = {};

      _export('CSS', CSS);

      (function () {
        var i,
            keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform', '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
        for (i = 0; i < keys.length; i++) {
          if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transform = keys[i];
            break;
          }
        }
        keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
        for (i = 0; i < keys.length; i++) {
          if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transition = keys[i];
            break;
          }
        }
        var isWebkit = CSS.transition.indexOf('webkit') > -1;
        CSS.prefix = isWebkit ? '-webkit-' : '';
        CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
        CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
      })();
      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        CSS.animation = 'WebkitAnimation';
        CSS.animationStart = 'webkitAnimationStart animationstart';
        CSS.animationEnd = 'webkitAnimationEnd animationend';
      } else {
        CSS.animation = 'animation';
        CSS.animationStart = 'animationstart';
        CSS.animationEnd = 'animationend';
      }

      Object.defineProperty(transitionEnd, 'parameters', { get: function get() {
          return [[Element]];
        } });

      Object.defineProperty(animationStart, 'parameters', { get: function get() {
          return [[Element], []];
        } });

      Object.defineProperty(animationEnd, 'parameters', { get: function get() {
          return [[Element], []];
        } });Object.defineProperty(cssPromise, 'parameters', { get: function get() {
          return [[Element], [], []];
        } });
    }
  };
});