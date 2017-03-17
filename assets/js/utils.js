// sidebar toggle for mobile views
var sidebarToggleEl = document.getElementById('sidebar-toggle');
if (sidebarToggleEl) {
  sidebarToggleEl.onclick = function() {
    document.getElementById('side-nav').classList.toggle('shown');
    this.classList.toggle('active');
  };
}

$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
  $('#collapse-toggle').unbind().click(function() {
    $('#navbar-collapse').collapse('toggle');
    var ariaVal = $('#collapse-toggle').attr('aria-expanded');
    ariaVal = ariaVal === 'false' ? 'true' : 'false';
    $('#collapse-toggle').attr('aria-expanded', ariaVal);
  });
});

window.tocToggle = function(btnEl) {
  btnEl.parentElement.classList.toggle('collapsed');
};

$('[data-toggle="tooltip"]').tooltip({container: 'body'});

// since we don't use mixpanel on every page
if (!window.mixpanel) {
  window.mixpanel = {
    track: function() { console.error('Mixpanel not enabled on this page'); }
  }
}
// optional shorthand
window.t = mixpanel.track;


// highlight.js syntax highlighting
hljs.initHighlightingOnLoad();

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                                  window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());
