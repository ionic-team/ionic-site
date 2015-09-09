import {Promise} from 'angular2/src/facade/async';
const nativeRaf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
const nativeCancelRaf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;
export const raf = nativeRaf || function(callback) {
  let timeCurrent = (new Date()).getTime(),
      timeDelta;
  timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
  timeLast = timeCurrent + timeDelta;
  return setTimeout(function() {
    callback(timeCurrent + timeDelta);
  }, timeDelta);
};
export const rafCancel = nativeRaf ? nativeCancelRaf : function(id) {
  return window.cancelTimeout(id);
};
export function rafPromise() {
  return new Promise((resolve) => raf(resolve));
}
export let CSS = {};
(function() {
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
export function transitionEnd(el) {
  return cssPromise(el, CSS.transitionEnd);
}
Object.defineProperty(transitionEnd, "parameters", {get: function() {
    return [[Element]];
  }});
export function animationStart(el, animationName) {
  return cssPromise(el, CSS.animationStart, animationName);
}
Object.defineProperty(animationStart, "parameters", {get: function() {
    return [[Element], []];
  }});
export function animationEnd(el, animationName) {
  return cssPromise(el, CSS.animationEnd, animationName);
}
Object.defineProperty(animationEnd, "parameters", {get: function() {
    return [[Element], []];
  }});
function cssPromise(el, eventNames, animationName) {
  return new Promise((resolve) => {
    eventNames.split(' ').forEach((eventName) => {
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
      eventNames.split(' ').forEach((eventName) => {
        el.removeEventListener(eventName, onEvent);
      });
      resolve(ev);
    }
  });
}
Object.defineProperty(cssPromise, "parameters", {get: function() {
    return [[Element], [], []];
  }});
export function ready() {
  return new Promise((resolve) => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve();
    } else {
      function completed() {
        document.removeEventListener('DOMContentLoaded', completed, false);
        window.removeEventListener('load', completed, false);
        resolve();
      }
      document.addEventListener('DOMContentLoaded', completed, false);
      window.addEventListener('load', completed, false);
    }
  });
}
export function windowLoad() {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      function completed() {
        window.removeEventListener('load', completed, false);
        resolve();
      }
      window.addEventListener('load', completed, false);
    }
  });
}
