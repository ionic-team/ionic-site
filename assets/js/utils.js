// sidebar toggle for mobile views
var sidebarToggleEl = document.getElementById('sidebar-toggle');
if (sidebarToggleEl) {
  sidebarToggleEl.onclick = function() {
    document.getElementById('side-nav').classList.toggle('shown');
    this.classList.toggle('active');
  };
}

$(document).ready(function() {
  // activate dropdowns
  $('.dropdown-toggle').dropdown();
  // $(".navbar.transparent .dropdown").hover(
  //   function(){ $(this).addClass('open') },
  //   function(){ $(this).removeClass('open') }
  // );
  // Generic helper class for on-load animations
  $('.active-on-load').addClass('active');
  // activate collapseable ToCs
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

window.guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// add an .active class to elements w/ .activateOnScroll class on when they
// scroll in to view
window.activateOnScroll = Array.from(
  document.getElementsByClassName('activateOnScroll')
);
if (activateOnScroll.length) {
  $(window).on('scroll', checkForActivateOnScroll);
  checkForActivateOnScroll();
}

function checkForActivateOnScroll() {
  if (!activateOnScroll.length) return;
  var viewportHeight = window.innerHeight || 
                       document.documentElement.clientHeight || 
                       document.body.clientHeight;
  for (var i = 0; i < activateOnScroll.length; i++) {
    var elPos = activateOnScroll[i].getBoundingClientRect();
    if (
      (elPos.y < 0 && elPos.y + (elPos.height / 2) > 0) ||
      (elPos.y > 0 && elPos.y + (elPos.height / 2) < viewportHeight)
    ) {
      activateOnScroll[i].classList.add('active');
      delete activateOnScroll[i];
    }
  }
  // reset indexes
  activateOnScroll = activateOnScroll.filter(function(e){ return !!e; });
}

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

// Smooth Scroll To anchor links with the .anchor class
$('a.anchor[href*="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        var offset = event.target.dataset && event.target.dataset.offset 
          ? event.target.dataset.offset : 100
        $('html, body').animate({
          scrollTop: target.offset().top - offset // give 100px of headroom
        }, 1000);
      }
      return false;
    }
  });


window.scrollToEl = function(selector) {
  // if passed a string, query for the element
  // otherwise assume it's already and element
  if(typeof selector === 'string') {
    selector = document.querySelector(selector);
  }
  scrollToY(selector.offsetTop)
}

window.scrollToY = function(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimationFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}