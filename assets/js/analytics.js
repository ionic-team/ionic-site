// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKMGCBC');


// shorthand global analytics click event helper
window.c = function(cat, lbl, el, val) {
  if (typeof val === 'undefined') {
    var val = null;
  }
  ga('send', {
    hitType: 'event',
    eventCategory: cat,
    eventAction: 'Click',
    eventLabel: lbl,
    eventValue: val,
    hitCallback: function() {
      if (!!el) {
        console.log(!!el, el)
        //document.location = el.href;
      };
    }
  });
  // don't follow links until analytics is recieved
  if (!!el) {
    return false;
  }
};
