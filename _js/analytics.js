var _sf_async_config = { uid: 54141, domain: 'ionicframework.com', useCanonical: true };
(function() {
  function loadChartbeat() {
    window._sf_endpt = (new Date()).getTime();
    var e = document.createElement('script');
    e.setAttribute('language', 'javascript');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
    document.body.appendChild(e);
  };
  var oldonload = window.onload;
  window.onload = (typeof window.onload != 'function') ?
    loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44023830-1', 'ionicframework.com');
ga('send', 'pageview');
