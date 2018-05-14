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
  $(".navbar.transparent .dropdown").hover(
    function(){ $(this).addClass('open') },
    function(){ $(this).removeClass('open') }
  );
	$(".navbar.transparent .dropdown").click()
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

window.mobileAndTabletCheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

window.getCookie = function(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

window.tocToggle = function(btnEl) {
  btnEl.parentElement.classList.toggle('collapsed');
};

$('[data-toggle="tooltip"]').tooltip({container: 'body'});

// since we don't use mixpanel on every page
if (!window.mixpanel) {
  window.mixpanel = {
    track: function() { console.log('Mixpanel not enabled on this page'); }
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
$('a.anchor[href*="#"]').click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    if (!target.length) {
      target = $('[name="' + this.hash.substring(1) + '"]');
    }
    // Does a scroll target exist?
    if (target.length) {
      var offset = event.target.dataset && event.target.dataset.offset
        ? event.target.dataset.offset : 100
      $('html, body').animate({
        scrollTop: target.offset().top - offset // give 100px of headroom
      }, 600);
    } else {
      // otherwise scroll to the top of the page
      $('html, body').animate({
        scrollTop: 0
      }, 600);
    }
    history.pushState && history.pushState(null, null, this.hash)
    return false;
  }
});


window.scrollToEl = function(selector) {
  // if passed a string, query for the element
  // otherwise assume it's already and element
  if(typeof selector === 'string') {
    selector = document.querySelector(selector);
  }
  scrollToY(selector.offsetTop - 100)
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
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}


window.stickyNav = {
  init: function () {
    this.isShown = false;
    this.once = false;
    this.navBar = document.querySelector('.navbar');
    this.stickyNavBar = document.createElement("div");
    this.stickyNavBar.classList.add('navbar','navbar-default', 'light', 'navbar-sticky', 'navbar-sticky--hide');
    this.stickyNavBar.appendChild(this.navBar.querySelector('.container').cloneNode(true));
    this.stickyNavBar.style.visibility = 'hidden';
    document.body.appendChild(this.stickyNavBar);
    document.addEventListener('scroll', this.handleScroll.bind(this))
  },

  handleScroll: function () {
    var self = this;
    requestAnimationFrame(function(){
      if (window.scrollY > 120) {
        self.show();
      } else {
        self.hide();
      }
    });
  },

  show: function () {
    if (this.isShown) return;
    this.isShown = true;

    if (!this.once) {
      this.stickyNavBar.style.visibility = 'visible';
      this.once = true;
    }

    this.stickyNavBar.classList.add('navbar-sticky--show');
    this.stickyNavBar.classList.remove('navbar-sticky--hide');
  },

  hide: function () {
    if (!this.isShown) return;
    this.isShown = false;
    this.stickyNavBar.classList.add('navbar-sticky--hide');
    this.stickyNavBar.classList.remove('navbar-sticky--show');
  }
}

window.rafContext = function(drawFn) {
  var requestId;
  function render() {
    drawFn();
    requestId = requestAnimationFrame(render);
  }

  return {
    play: function() {
      if (!requestId) {
        render();
      }
    },
    stop: function() {
      if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = null;
      }
    }
  }
}

window.initAnimation = function(el, ctx, _options) {
  var options = _options || {};
  var breakpoint = (options.breakpoint) ?  options.breakpoint : 767;
  var once = options.once || false;
  var hasPlayed = options.playWhenInView ? false : true;
  var isPlaying = false;

  function firstPlay () {
    if (window.innerWidth < breakpoint) return;
    ctx.play();
    hasPlayed = true;
    isPlaying = true;
  }

  function play () {
    if (isPlaying || window.innerWidth < breakpoint) return;
    ctx.play();
    isPlaying = true;
  }

  function pause () {
    if (!isPlaying) return;
    ctx.stop();
    isPlaying = false;
  }

  function checkScroll() {
    if (once && hasPlayed) return;
    var winHeight = window.innerHeight;
    var bbox = el.getBoundingClientRect();
    var offset = 0.5;

    if (!hasPlayed && bbox.top < winHeight * offset && bbox.bottom > winHeight * offset ) firstPlay();
    if (!hasPlayed) return;
    if (!isPlaying && bbox.top < winHeight && bbox.bottom > 0) play();
    if (isPlaying && bbox.top > winHeight) pause();
    if (isPlaying && bbox.bottom < 0) pause();
    if (!isPlaying && bbox.bottom > 0 && bbox.top < winHeight) play();
  }

  function checkViewport() {
    if (window.innerWidth < breakpoint && isPlaying) pause();
  }

  checkScroll();
  window.addEventListener('scroll', function() { requestAnimationFrame(checkScroll) });
  window.addEventListener('resize', function() { requestAnimationFrame(checkViewport) });
}

window.pjx = {
  isAnimating: false,
  navLinks: null,

  init: function() {
    var self = this;
    this.navLinks = document.querySelectorAll('.pjxNavLink');

    var delegatorID = '#page-resource-center';
    document.querySelector(delegatorID).addEventListener('click', function(ev){
      var el = ev.target;
      while (el && !el.matches('a.pjxLink')) {
        el = el.parentNode;
        if (el.matches(delegatorID)) return;
      }
      ev.preventDefault();
      self.handleClick(el);
    });

    window.onpopstate = this.handlePopState.bind(this);
  },

  each: function(fn) {
    for (i = 0; i < this.navLinks.length; i++) {
      fn(this.navLinks[i], i);
    }
  },

  handleClick: function(el) {
    if (this.isAnimating) return;
    this.handleTransition(el.href, true)
  },

  handlePopState: function(ev) {
    if (this.isAnimating) {
      ev.preventDefault();
      return;
    }
    var direction = ev.state ? ev.state.direction : 1;
    this.handleTransition(document.location.href, false);
  },

  handleTransition: function (url, doPushState) {

    var self = this;
    var urlSplit = url.split('/')
    var slug ='/resources' + (urlSplit[urlSplit.indexOf('resources') + 1] ?  '/' + urlSplit[urlSplit.indexOf('resources') + 1] : '');

    this.each(function(el) {
      el.parentElement.classList.remove('active');
      if (el.href === url) {
        el.parentElement.classList.add('active');
      }
    });

    this.fetchContent(url , function(content){
      if (doPushState) self.updateHistory(slug);
      self.transition(content);
    });
  },

  transition: function(content) {
    this.isAnimating = true;

    var self = this;
    var parser = new DOMParser();
    var nextDoc = parser.parseFromString(content, "text/html");

    var nextBodyCards = nextDoc.querySelector('.transitionBody');
    var currBodyCards = document.querySelector('.transitionBody' );
    var currBody = currBodyCards.parentElement;
    TweenLite.to(currBodyCards, 0.3, {
      y: 10,
      opacity: 0,
      onComplete: function () {
        currBody.removeChild(currBodyCards)
        currBody.appendChild(nextBodyCards)
        TweenLite.set(nextBodyCards, {
          opacity: 0,
          y: -10
        })
        TweenLite.to(nextBodyCards, 0.6, {
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
          // delay: 0.125,
          onComplete: function () {
            self.isAnimating = false;
          }
        })
      }
    });
  },

  updateHistory: function(slug) {
    history.pushState({}, '', slug);
  },

  fetchContent: function(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          callback(xmlhttp.responseText);
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
}
