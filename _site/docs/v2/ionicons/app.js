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
               callback(xobj.responseText);
             }
       };
       xobj.send(null);  
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
        alert(iconElement.className + " already exists");
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
