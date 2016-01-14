/*!
 * Ionic IO
 * Copyright 116 Drifty Co. http://drifty.com/
 */
(function() {
var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
  .controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.test = function() {
      console.log($scope);
    };
  }])
  .controller('ComponentsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.setPlatform = function(platform) {
      $scope.previewPlatform = platform;
      if (platform == 'ios') {
        $scope.iosActive = true;
        $scope.androidActive = false;
        $('#demo-device-android').css('display', 'none');
        $('#demo-device-ios').css('display', 'block');
        return;
      }
      $scope.iosActive = false;
      $scope.androidActive = true;
      $('#demo-device-ios').css('display', 'none');
      $('#demo-device-android').css('display', 'block');
    };

    var $androidIframe = $('iframe#demo-android');
    var $iosIframe = $('iframe#demo-ios');
    var $buttons = $('#components-buttons');
    var $cards = $('#components-cards');
    var $forms = $('#components-forms');
    var $lists = $('#components-lists');

    $scope.setPlatform('ios');

    var $scrollspy = $('body').scrollspy({
      target: '#components-index'
    });
    $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);

    (function setSubSections() {
      var sections = {
        'components-buttons': null,
        'components-cards': null,
        'components-forms': null,
        'components-lists': null
      };
      for (s in sections) {
        var subSections = document.getElementById(s).nextElementSibling.children;
        for (var i = subSections.length - 1; i >= 0; i--) {
          var subSectionName = subSections[i].children[0].href.split('#')[1];
          sections[subSectionName] = s;
        };
      };
      $scope.subSections = sections;
    }());


    function onScrollSpyChange(e) {

      if (e.target.id === 'components-index') {
        return;
      }
      var $hash;
      var $node;
      $hash = $('a[href^="#"]', e.target).attr('href').replace(/^#/, '');
      $node = $('#' + $hash);

      setActive($hash);

      if ($hash.indexOf('button') > -1) {
        $buttons.addClass('active');
      }
      if ($node.length) {
        $node.attr('id', '');
      }
      document.location.hash = $hash;
      $iosIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: $hash
      }), '*');
      $androidIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: $hash
      }), '*');

      if ($node.length) {
        return $node.attr('id', $hash);
      }
    }

    function setActive(hash) {
      // given a url hash, set the correct section to 'active'
      if (hash in $scope.subSections) {
        if ($scope.subSections[hash] === 'components-buttons') {
          $buttons.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-cards') {
          $cards.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-forms') {
          $forms.addClass('active');
        }
        if ($scope.subSections[hash] === 'components-lists') {
          $lists.addClass('active');
        }
      }
    }

    (function setUpListeners() {

      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

      // Listen to message from child window
      eventer(messageEvent, function(e) {
        sendCurrentHash(e.data);
      }, false);

      // Listen for scroll events on iframe - don't allow them to bubble to parent
      $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
        ev.preventDefault();
      });

    })();

    function sendCurrentHash(platform) {
      // send the initial hash if possible
      if (platform === 'ios') {
        $iosIframe[0].contentWindow.postMessage(JSON.stringify({
          hash: window.location.hash
        }), '*');
        return;
      }
      $androidIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: window.location.hash
      }), '*');
    };

    // positioning the platform preview appropriately on scroll
    var $platformPreview = $('#platform-preview');
    var $window = $(window);

    $window.scroll(fixyCheck);

    function fixyCheck(a, b, c) {
      if ($window.scrollTop() > 78) {
        $platformPreview.addClass('fixey');
      } else {
        $platformPreview.removeClass('fixey');
      }
    }
  }])
  .controller('APIDemoCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    var $platformPreview = $('#platform-preview');

    $scope.setPlatform = function(platform) {
      $scope.previewPlatform = platform;
      if (platform == 'ios') {
        $scope.iosActive = true;
        $scope.androidActive = false;
        $('#demo-device-android').css('display', 'none');
        $('#demo-device-ios').css('display', 'block');
        return;
      }
      $scope.iosActive = false;
      $scope.androidActive = true;
      $('#demo-device-ios').css('display', 'none');
      $('#demo-device-android').css('display', 'block');
    };

    $scope.setPlatform('ios');

    // Listen for scroll events on iframe - don't allow them to bubble to parent
    $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
      ev.preventDefault();
    });

    var $window = $(window);
    $window.scroll(fixyCheck);

    function fixyCheck(a, b, c) {
      if ($window.scrollTop() > 78) {
        $platformPreview.addClass('fixey');
      } else {
        $platformPreview.removeClass('fixey');
      }
    }
  }])

  .controller('IoniconDocsCtrl', ['$scope', function($scope) {
    document.addEventListener("dataLoaded", function(data){
      $scope.$apply(function(){
        $scope.icons = data['detail'];
      });
    });
    $scope.getIcon = function(iconObj, platform){
      if (iconObj.key.icons.length === 1 || platform === 'ios') {
        return iconObj.key.icons[0]['name']
      }
      if (iconObj.key.icons.length === 2) {
        return iconObj.key.icons[1]['name']
      }
      return iconObj.key.icons[2]['name']
    }
  }])

.directive('pre', [function() {
  return {
    restrict: 'E',
    terminal: true,
    priority: 1000
  }
}]);

IonicDocsModule;

if (window.isIoniconsPage) {
$(document).ready(function() {

  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  (function() {
    $.fn.modal.defaults = {
      overlay: "#000",        // Overlay color
      opacity: 0.75,          // Overlay opacity
      zIndex: 1,              // Overlay z-index.
      escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
      clickClose: true,       // Allows the user to close the modal by clicking the overlay
      closeText: 'Close',     // Text content for the close <a> tag.
      closeClass: '',         // Add additional class(es) to the close <a> tag.
      showClose: true,        // Shows a (X) icon/link in the top-right corner
      modalClass: "modal",    // CSS class added to the element being displayed in the modal.
      spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
      showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
      fadeDuration: null,     // Number of milliseconds the fade transition takes (null means no transition)
      fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    };

    function loadJSON(callback) {
       var xobj = new XMLHttpRequest();
           xobj.overrideMimeType("application/json");
           xobj.open('GET', 'site_data.json', true); // Replace 'my_data' with the path to your file
           xobj.onreadystatechange = function () {
             if (xobj.readyState == 4 && xobj.status == "200") {
               // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
               // console.log(xobj.responseText);
               callback(xobj.responseText);
             }
       };
       xobj.send(null);
    }

    function addModals(data) {
      var event = new CustomEvent('dataLoaded', { 'detail': data });
      document.dispatchEvent(event);
    }

    function addIcons(data) {
      var list = document.getElementById('icons');

        for (var iconGroup in data) {
          var group = (data[iconGroup]);
          var temp = document.createElement('a');
          temp.setAttribute('href', '#'+iconGroup);
          temp.setAttribute('rel', 'modal:open');
          var newUl = document.createElement('ul');
          var titleLi = document.createElement('li');
          titleLi.setAttribute('class', iconGroup);
          titleLi.innerHTML = iconGroup;
          newUl.appendChild(titleLi);

          (group['icons'].slice(0, 3)).forEach(function(icon, i) {

            // when a group has ios and md versions, but no outline,
            // add a blank <li> where the outline version would be
            if (i === 1 && group['icons'].length === 2) {
              var emptyOutlineLi = document.createElement('li');
              newUl.appendChild(emptyOutlineLi);
            }

            var newLi = document.createElement('li');
            if (group['tags']) {
              newLi.setAttribute('data-tags', group['tags'].join(', '));
              titleLi.setAttribute('data-tags', group['tags'].join(', '));
              titleLi.setAttribute('data-pack', 'default');
            }
            newLi.setAttribute('class', 'ion-'+group['icons'][i]['name']);
            newLi.setAttribute('code', group['icons'][i]['code']);
            newLi.setAttribute('data-pack', 'default');
            newUl.appendChild(newLi);
          });

          temp.appendChild(newUl);
          list.appendChild(temp);

       }
    }

    loadJSON(function(response) {
       var data = JSON.parse(response);
       addModals(data);
       addIcons(data);
       searchSetup();
    });

  }());


  function searchSetup() {

    // load up the icon object from whats in the DOM
    var
    x, l, y, t,
    iconElement,
    tags,
    pack,
    isResult,
    totalResults,
    clipboardTimer,
    icons = {},
    iconElements = $('section#icons li'),
    searchInput = document.getElementById("search-ionicons"),
    iconsUL = document.getElementById("icons");


    for(x = 0, l = iconElements.length; x < l; x++) {
      iconElement = iconElements[x];

      if(iconElement.className.length < 6) {
        continue;
      }

      if(icons[ iconElement.className ]) {
        continue;
      }

      tags = iconElement.getAttribute("data-tags");
      pack = iconElement.getAttribute("data-pack");

      iconElement.icon = icons[ iconElement.className ] = {
        name: iconElement.className,
        tags: (tags ? tags.split(',') : []),
        pack: (pack ? pack : 'default'),
        el: iconElement,
        show: true,
        animation: (iconElement.getAttribute("data-animation") === "true")
      };

      tags = iconElement.className.split('-');
      for(y = 0; y < tags.length; y++) {
        tags[y] = tags[y].trim().toLowerCase();
        if(tags[y].length > 0 && tags[y] !== "icon") {
          iconElement.icon.tags.push(tags[y]);
        }
      }
    }
    totalResults = icons.length;

    // search
    function onSearchFocus(){
      iconsUL.className = "search-init";
      searchInput.className = "has-text"
      this.placeholder = "";
      hideIconPanel();
    }
    addEvent(searchInput, "focus", onSearchFocus);
    function onSearchBlur(){
      iconsUL.className = "search-nil";
      this.placeholder = "Search";
      if(totalResults < 1 || this.value.trim() === "") {
        this.value = "";
        this.className = "";
        showAll();
      }
      hideIconPanel();
    }
    addEvent(searchInput, "blur", onSearchBlur);
    function onSearchKeyUp(e) {
      var keyCode = e.which || e.keyCode;
      if(keyCode === 27) {
        this.value = "";
        searchInput.className = "search-nil";
        this.blur();
      } else if(this.value.trim() === "") {
        showAll();
        this.value = "";
        iconsUL.className = "search-init";
        hideIconPanel();
      } else {
        hideIconPanel();
        iconsUL.className = "search-matches";
        searchQuery(this.value);
      }
    }
    addEvent(searchInput, "keyup", onSearchKeyUp);

    function searchQuery(query) {

      if(!query) return;

      totalResults = 0;

      query = query.trim().toLowerCase();

      var terms = query.split(' ');

      if(terms.length < 1) {
        showAll();
        iconsUL.className = "search-init";
        return;
      }

      iconsUL.className = "search-matches";
      searchInput.className = "has-text";

      // set all to show
      for(x in icons) {
        icons[x].show = true;
      }

      // filter down for each term in the query
      for(t = 0; t < terms.length; t++) {
        for(x in icons) {
          if(!icons[x].show) continue;
          isResult = false;
          for(y = 0; y < icons[x].tags.length; y++) {
            if( icons[x].tags[y].indexOf(terms[t]) > -1 ) {
              isResult = true;
              break;
            }
          }
          if(!isResult) {
            icons[x].show = false;
          }
        }
      }

      // show or hide
      for(x in icons) {

        var titleEle = icons[x].el.parentElement.parentElement;

        if(icons[x].show) {
          totalResults++;
          if(titleEle.style.display !== "block") {
            titleEle.style.display = "block";
          }
        } else {
          if(titleEle.style.display !== "none") {
            titleEle.style.display = "none";
          }
        }
      }
    }

    function showAll() {
      totalResults = icons.length;
      for(x in icons) {
        var titleEle = icons[x].el.parentElement.parentElement;
        icons[x].show = true;
        if(titleEle.style.display !== "block") {
          titleEle.style.display = "block";
        }
      }
    }

    function addEvent(el, ev, fn) {
      if (el.addEventListener) {
          el.addEventListener(ev, fn, false);
      } else if (el.attachEvent) {
          el.attachEvent('on' + ev, fn);
      } else {
          el['on' + ev] = fn;
      }
    }

    var iconPanel = document.getElementById("icon-panel");
    var iconName = document.getElementById("icon-name");
    var iconCode = document.getElementById("icon-code");
    var animateLink = document.getElementById("animate-link");


    function hideIconPanel() {
      for(x in icons) {
        if(icons[x].el.className.indexOf("active") > -1) {
          icons[x].el.className = icons[x].el.className.replace(" active", "");
        }
      }
    }
  }

  });
}


/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.5.8
*/
!function(a){var b=null;a.modal=function(c,d){a.modal.close();var e,f;if(this.$body=a("body"),this.options=a.extend({},a.modal.defaults,d),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),c.is("a"))if(f=c.attr("href"),/^#/.test(f)){if(this.$elm=a(f),1!==this.$elm.length)return null;this.open()}else this.$elm=a("<div>"),this.$body.append(this.$elm),e=function(a,b){b.elm.remove()},this.showSpinner(),c.trigger(a.modal.AJAX_SEND),a.get(f).done(function(d){b&&(c.trigger(a.modal.AJAX_SUCCESS),b.$elm.empty().append(d).on(a.modal.CLOSE,e),b.hideSpinner(),b.open(),c.trigger(a.modal.AJAX_COMPLETE))}).fail(function(){c.trigger(a.modal.AJAX_FAIL),b.hideSpinner(),c.trigger(a.modal.AJAX_COMPLETE)});else this.$elm=c,this.open()},a.modal.prototype={constructor:a.modal,open:function(){var b=this;this.options.doFade?(this.block(),setTimeout(function(){b.show()},this.options.fadeDuration*this.options.fadeDelay)):(this.block(),this.show()),this.options.escapeClose&&a(document).on("keydown.modal",function(b){27==b.which&&a.modal.close()}),this.options.clickClose&&this.blocker.click(a.modal.close)},close:function(){this.unblock(),this.hide(),a(document).off("keydown.modal")},block:function(){var b=this.options.doFade?0:this.options.opacity;this.$elm.trigger(a.modal.BEFORE_BLOCK,[this._ctx()]),this.blocker=a('<div class="jquery-modal blocker"></div>').css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",position:"fixed",zIndex:this.options.zIndex,background:this.options.overlay,opacity:b}),this.$body.append(this.blocker),this.options.doFade&&this.blocker.animate({opacity:this.options.opacity},this.options.fadeDuration),this.$elm.trigger(a.modal.BLOCK,[this._ctx()])},unblock:function(){this.options.doFade?this.blocker.fadeOut(this.options.fadeDuration,function(){a(this).remove()}):this.blocker.remove()},show:function(){this.$elm.trigger(a.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=a('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass+" current"),this.center(),this.options.doFade?this.$elm.fadeIn(this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(a.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(a.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove(),this.$elm.removeClass("current"),this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration):this.$elm.hide(),this.$elm.trigger(a.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||a('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},center:function(){this.$elm.css({position:"fixed",top:"50%",left:"50%",marginTop:-(this.$elm.outerHeight()/2),marginLeft:-(this.$elm.outerWidth()/2),zIndex:this.options.zIndex+1})},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}},a.modal.prototype.resize=a.modal.prototype.center,a.modal.close=function(a){if(b){a&&a.preventDefault(),b.close();var c=b.$elm;return b=null,c}},a.modal.resize=function(){b&&b.resize()},a.modal.isActive=function(){return b?!0:!1},a.modal.defaults={overlay:"#000",opacity:.75,zIndex:1,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},a.modal.BEFORE_BLOCK="modal:before-block",a.modal.BLOCK="modal:block",a.modal.BEFORE_OPEN="modal:before-open",a.modal.OPEN="modal:open",a.modal.BEFORE_CLOSE="modal:before-close",a.modal.CLOSE="modal:close",a.modal.AJAX_SEND="modal:ajax:send",a.modal.AJAX_SUCCESS="modal:ajax:success",a.modal.AJAX_FAIL="modal:ajax:fail",a.modal.AJAX_COMPLETE="modal:ajax:complete",a.fn.modal=function(c){return 1===this.length&&(b=new a.modal(this,c)),this},a(document).on("click.modal",'a[rel="modal:close"]',a.modal.close),a(document).on("click.modal",'a[rel="modal:open"]',function(b){b.preventDefault(),a(this).modal()})}(jQuery);
// sidebar toggle for mobile views
document.getElementById('sidebar-toggle').onclick = function(a,b,c) {
  document.getElementById('side-nav').classList.toggle('shown');
  this.classList.toggle('active')
};

// highlight.js syntax highlighting
hljs.initHighlightingOnLoad();

})();
