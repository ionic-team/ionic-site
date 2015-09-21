$(document).ready(function() {

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

         var group = data[iconGroup];
         var temp = document.createElement('a');
         temp.setAttribute('href', '#'+iconGroup);
         temp.setAttribute('rel', 'modal:open');
         var newUl = document.createElement('ul');
         var titleLi = document.createElement('li');
         titleLi.setAttribute('class', iconGroup);
         titleLi.innerHTML = iconGroup;
         newUl.appendChild(titleLi);

          for (var icon in group['icons']) {
            var newLi = document.createElement('li');
            if (group['tags']) {
              newLi.setAttribute('data-tags', group['tags'].join(', '));
              titleLi.setAttribute('data-tags', group['tags'].join(', '));
              titleLi.setAttribute('data-pack', 'default');
            }
            newLi.setAttribute('class', 'ion-'+group['icons'][icon]['name']);
            newLi.setAttribute('code', group['icons'][icon]['code']);
            newLi.setAttribute('data-pack', 'default');
            newUl.appendChild(newLi);
          }
          temp.appendChild(newUl);
          list.appendChild(temp);

       }
    } 


    loadJSON(function(response) {
       var data = JSON.parse(response);
       addIcons(data);
    });
    
    

});

