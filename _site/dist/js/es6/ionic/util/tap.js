import {dom} from 'ionic/util';
import {Platform} from 'ionic/platform/platform';
var tapDoc;
var tapActiveEle;
var tapEnabledTouchEvents;
var tapMouseResetTimer;
var tapPointerMoved;
var tapPointerStart;
var tapTouchFocusedInput;
var tapLastTouchTarget;
var tapTouchMoveListener = 'touchmove';
var TAP_RELEASE_TOLERANCE = 12;
var TAP_RELEASE_BUTTON_TOLERANCE = 50;
var tapEventListeners = {
  'click': tapClickGateKeeper,
  'mousedown': tapMouseDown,
  'mouseup': tapMouseUp,
  'mousemove': tapMouseMove,
  'touchstart': tapTouchStart,
  'touchend': tapTouchEnd,
  'touchcancel': tapTouchCancel,
  'touchmove': tapTouchMove,
  'pointerdown': tapTouchStart,
  'pointerup': tapTouchEnd,
  'pointercancel': tapTouchCancel,
  'pointermove': tapTouchMove,
  'MSPointerDown': tapTouchStart,
  'MSPointerUp': tapTouchEnd,
  'MSPointerCancel': tapTouchCancel,
  'MSPointerMove': tapTouchMove,
  'focusin': tapFocusIn,
  'focusout': tapFocusOut
};
export let Tap = {
  run: function() {
    dom.ready().then(() => {
      Tap.register(document);
    });
  },
  register: function(ele) {
    tapDoc = ele;
    tapEventListener('click', true, true);
    tapEventListener('mouseup');
    tapEventListener('mousedown');
    if (window.navigator.pointerEnabled) {
      tapEventListener('pointerdown');
      tapEventListener('pointerup');
      tapEventListener('pointcancel');
      tapTouchMoveListener = 'pointermove';
    } else if (window.navigator.msPointerEnabled) {
      tapEventListener('MSPointerDown');
      tapEventListener('MSPointerUp');
      tapEventListener('MSPointerCancel');
      tapTouchMoveListener = 'MSPointerMove';
    } else {
      tapEventListener('touchstart');
      tapEventListener('touchend');
      tapEventListener('touchcancel');
    }
    tapEventListener('focusin');
    tapEventListener('focusout');
    return function() {
      for (var type in tapEventListeners) {
        tapEventListener(type, false);
      }
      tapDoc = null;
      tapActiveEle = null;
      tapEnabledTouchEvents = false;
      tapPointerMoved = false;
      tapPointerStart = null;
    };
  },
  ignoreScrollStart: function(e) {
    return (e.defaultPrevented) || (/^(file|range)$/i).test(e.target.type) || (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute('data-prevent-scroll')) == 'true' || (!!(/^(object|embed)$/i).test(e.target.tagName)) || Tap.isElementTapDisabled(e.target);
  },
  isTextInput: function(ele) {
    return !!ele && (ele.tagName == 'TEXTAREA' || ele.contentEditable === 'true' || (ele.tagName == 'INPUT' && !(/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i).test(ele.type)));
  },
  isDateInput: function(ele) {
    return !!ele && (ele.tagName == 'INPUT' && (/^(date|time|datetime-local|month|week)$/i).test(ele.type));
  },
  isKeyboardElement: function(ele) {
    if (!Platform.is('ios') || Platform.isDevice('ipad')) {
      return Tap.isTextInput(ele) && !Tap.isDateInput(ele);
    } else {
      return Tap.isTextInput(ele) || (!!ele && ele.tagName == "SELECT");
    }
  },
  isLabelWithTextInput: function(ele) {
    var container = tapContainingElement(ele, false);
    return !!container && Tap.isTextInput(tapTargetElement(container));
  },
  containsOrIsTextInput: function(ele) {
    return Tap.isTextInput(ele) || Tap.isLabelWithTextInput(ele);
  },
  cloneFocusedInput: function(container) {
    if (Tap.hasCheckedClone)
      return;
    Tap.hasCheckedClone = true;
    dom.raf(function() {
      var focusInput = container.querySelector(':focus');
      if (Tap.isTextInput(focusInput)) {
        var clonedInput = focusInput.cloneNode(true);
        clonedInput.value = focusInput.value;
        clonedInput.classList.add('cloned-text-input');
        clonedInput.readOnly = true;
        if (focusInput.isContentEditable) {
          clonedInput.contentEditable = focusInput.contentEditable;
          clonedInput.innerHTML = focusInput.innerHTML;
        }
        focusInput.parentElement.insertBefore(clonedInput, focusInput);
        focusInput.classList.add('previous-input-focus');
        clonedInput.scrollTop = focusInput.scrollTop;
      }
    });
  },
  hasCheckedClone: false,
  removeClonedInputs: function(container) {
    Tap.hasCheckedClone = false;
    dom.raf(function() {
      var clonedInputs = container.querySelectorAll('.cloned-text-input');
      var previousInputFocus = container.querySelectorAll('.previous-input-focus');
      var x;
      for (x = 0; x < clonedInputs.length; x++) {
        clonedInputs[x].parentElement.removeChild(clonedInputs[x]);
      }
      for (x = 0; x < previousInputFocus.length; x++) {
        previousInputFocus[x].classList.remove('previous-input-focus');
        previousInputFocus[x].style.top = '';
      }
    });
  },
  requiresNativeClick: function(ele) {
    if (!ele || ele.disabled || (/^(file|range)$/i).test(ele.type) || (/^(object|video)$/i).test(ele.tagName) || Tap.isLabelContainingFileInput(ele)) {
      return true;
    }
    return Tap.isElementTapDisabled(ele);
  },
  isLabelContainingFileInput: function(ele) {
    var lbl = tapContainingElement(ele);
    if (lbl.tagName !== 'LABEL')
      return false;
    var fileInput = lbl.querySelector('input[type=file]');
    if (fileInput && fileInput.disabled === false)
      return true;
    return false;
  },
  isElementTapDisabled: function(ele) {
    if (ele && ele.nodeType === 1) {
      var element = ele;
      while (element) {
        if ((element.dataset ? element.dataset.tapDisabled : element.getAttribute('data-tap-disabled')) == 'true') {
          return true;
        }
        element = element.parentElement;
      }
    }
    return false;
  },
  setTolerance: function(releaseTolerance, releaseButtonTolerance) {
    TAP_RELEASE_TOLERANCE = releaseTolerance;
    TAP_RELEASE_BUTTON_TOLERANCE = releaseButtonTolerance;
  },
  cancelClick: function() {
    tapPointerMoved = true;
  },
  pointerCoord: function(event) {
    var c = {
      x: 0,
      y: 0
    };
    if (event) {
      var touches = event.touches && event.touches.length ? event.touches : [event];
      var e = (event.changedTouches && event.changedTouches[0]) || touches[0];
      if (e) {
        c.x = e.clientX || e.pageX || 0;
        c.y = e.clientY || e.pageY || 0;
      }
    }
    return c;
  }
};
function tapEventListener(type, enable, useCapture) {
  if (enable !== false) {
    tapDoc.addEventListener(type, tapEventListeners[type], useCapture);
  } else {
    tapDoc.removeEventListener(type, tapEventListeners[type]);
  }
}
function tapClick(e) {
  var container = tapContainingElement(e.target);
  var ele = tapTargetElement(container);
  if (Tap.requiresNativeClick(ele) || tapPointerMoved)
    return false;
  var c = Tap.pointerCoord(e);
  triggerMouseEvent('click', ele, c.x, c.y);
  tapHandleFocus(ele);
}
function triggerMouseEvent(type, ele, x, y) {
  var clickEvent = document.createEvent("MouseEvents");
  clickEvent.initMouseEvent(type, true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
  clickEvent.isIonicTap = true;
  ele.dispatchEvent(clickEvent);
}
function tapClickGateKeeper(e) {
  if (e.target.type == 'submit' && e.detail === 0) {
    return null;
  }
  if (!e.isIonicTap && !Tap.requiresNativeClick(e.target)) {
    e.stopPropagation();
    if (!Tap.isLabelWithTextInput(e.target)) {
      e.preventDefault();
    }
    return false;
  }
}
function tapMouseDown(e) {
  if (e.isIonicTap || tapIgnoreEvent(e))
    return null;
  if (tapEnabledTouchEvents) {
    console.log('mousedown', 'stop event');
    e.stopPropagation();
    if ((!Tap.isTextInput(e.target) || tapLastTouchTarget !== e.target) && !(/^(select|option)$/i).test(e.target.tagName)) {
      e.preventDefault();
    }
    return false;
  }
  tapPointerMoved = false;
  tapPointerStart = Tap.pointerCoord(e);
  tapEventListener('mousemove');
}
function tapMouseUp(e) {
  if (tapEnabledTouchEvents) {
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  if (tapIgnoreEvent(e) || (/^(select|option)$/i).test(e.target.tagName))
    return false;
  if (!tapHasPointerMoved(e)) {
    tapClick(e);
  }
  tapEventListener('mousemove', false);
  tapPointerMoved = false;
}
function tapMouseMove(e) {
  if (tapHasPointerMoved(e)) {
    tapEventListener('mousemove', false);
    tapPointerMoved = true;
    return false;
  }
}
function tapTouchStart(e) {
  if (tapIgnoreEvent(e))
    return;
  tapPointerMoved = false;
  tapEnableTouchEvents();
  tapPointerStart = Tap.pointerCoord(e);
  tapEventListener(tapTouchMoveListener);
  if (Platform.is('ios') && Tap.isLabelWithTextInput(e.target)) {
    var textInput = tapTargetElement(tapContainingElement(e.target));
    if (textInput !== tapActiveEle) {
      e.preventDefault();
    }
  }
}
function tapTouchEnd(e) {
  if (tapIgnoreEvent(e))
    return;
  tapEnableTouchEvents();
  if (!tapHasPointerMoved(e)) {
    tapClick(e);
    if ((/^(select|option)$/i).test(e.target.tagName)) {
      e.preventDefault();
    }
  }
  tapLastTouchTarget = e.target;
  tapTouchCancel();
}
function tapTouchMove(e) {
  if (tapHasPointerMoved(e)) {
    tapPointerMoved = true;
    tapEventListener(tapTouchMoveListener, false);
    return false;
  }
}
function tapTouchCancel() {
  tapEventListener(tapTouchMoveListener, false);
  tapPointerMoved = false;
}
function tapEnableTouchEvents() {
  tapEnabledTouchEvents = true;
  clearTimeout(tapMouseResetTimer);
  tapMouseResetTimer = setTimeout(function() {
    tapEnabledTouchEvents = false;
  }, 600);
}
function tapIgnoreEvent(e) {
  if (e.isTapHandled)
    return true;
  e.isTapHandled = true;
  if (Tap.containsOrIsTextInput(e.target)) {
    e.preventDefault();
    return true;
  }
}
function tapHandleFocus(ele) {
  tapTouchFocusedInput = null;
  var triggerFocusIn = false;
  if (ele.tagName == 'SELECT') {
    triggerMouseEvent('mousedown', ele, 0, 0);
    ele.focus && ele.focus();
    triggerFocusIn = true;
  } else if (tapActiveElement() === ele) {
    triggerFocusIn = true;
  } else if ((/^(input|textarea)$/i).test(ele.tagName) || ele.isContentEditable) {
    triggerFocusIn = true;
    ele.focus && ele.focus();
    ele.value = ele.value;
    if (tapEnabledTouchEvents) {
      tapTouchFocusedInput = ele;
    }
  } else {
    tapFocusOutActive();
  }
  if (triggerFocusIn) {
    tapActiveElement(ele);
  }
}
function tapFocusOutActive() {
  var ele = tapActiveElement();
  if (ele && ((/^(input|textarea|select)$/i).test(ele.tagName) || ele.isContentEditable)) {
    console.log('tapFocusOutActive', ele.tagName);
    ele.blur();
  }
  tapActiveElement(null);
}
function tapFocusIn(e) {
  if (tapEnabledTouchEvents && Tap.isTextInput(tapActiveElement()) && Tap.isTextInput(tapTouchFocusedInput) && tapTouchFocusedInput !== e.target) {
    console.log('focusin', 'tapTouchFocusedInput');
    tapTouchFocusedInput.focus();
    tapTouchFocusedInput = null;
  }
}
function tapFocusOut() {
  tapActiveElement(null);
}
function tapActiveElement(ele) {
  if (arguments.length) {
    tapActiveEle = ele;
  }
  return tapActiveEle || document.activeElement;
}
function tapHasPointerMoved(endEvent) {
  if (!endEvent || endEvent.target.nodeType !== 1 || !tapPointerStart || (tapPointerStart.x === 0 && tapPointerStart.y === 0)) {
    return false;
  }
  var endCoordinates = Tap.pointerCoord(endEvent);
  var hasClassList = !!(endEvent.target.classList && endEvent.target.classList.contains && typeof endEvent.target.classList.contains === 'function');
  var releaseTolerance = hasClassList && endEvent.target.classList.contains('button') ? TAP_RELEASE_BUTTON_TOLERANCE : TAP_RELEASE_TOLERANCE;
  return Math.abs(tapPointerStart.x - endCoordinates.x) > releaseTolerance || Math.abs(tapPointerStart.y - endCoordinates.y) > releaseTolerance;
}
function tapContainingElement(ele, allowSelf) {
  var climbEle = ele;
  for (var x = 0; x < 6; x++) {
    if (!climbEle)
      break;
    if (climbEle.tagName === 'LABEL')
      return climbEle;
    climbEle = climbEle.parentElement;
  }
  if (allowSelf !== false)
    return ele;
}
function tapTargetElement(ele) {
  if (ele && ele.tagName === 'LABEL') {
    if (ele.control)
      return ele.control;
    if (ele.querySelector) {
      var control = ele.querySelector('input,textarea,select');
      if (control)
        return control;
    }
  }
  return ele;
}
