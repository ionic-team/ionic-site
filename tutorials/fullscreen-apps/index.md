---
layout: tutorial
title: Removing the iOS Status Bar
header_sub_title: Build great fullscreen apps
news: Checkout the <a href="/docs/components/">Components</a> section to see what Ionic already has
---

Fullscreen apps on iOS
====

<div class="row">
  <div class="col-sm-4">
    <img src="ss.jpg" alt="Fullscreen App" style="max-width: 100%">
    <p style="text-align: center; margin-top: 10px">
      <i>Screenshot from our <a href="https://github.com/driftyco/ionic-weather/">Ionic Weather</a> app</i>
    </p>
  </div>
  <div class="col-sm-8">
    <p>
      Many apps (not just games!) benefit from a fullscreen experience on the phone, and making your apps
      fullscreen in Ionic is simple!
    </p>
    <p>
      First, we need to note this only works on Cordova or another native UIWebView wrapper. If we use Cordova,
      we will need to install one plugin:
    </p>
    <p>
<code>
$ cordova plugin add org.apache.cordova.statusbar
</code>
    </p>
    <p>
      Then, we will use Ionic's <code>Platform</code> service to listen for the device ready event and remove the status bar:
    </p>
    <p>
{% highlight javascript %}
{% raw %}
angular.module('myApp', ['ionic'])

.controller('MyCtrl', function($scope, Platform) {
  Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });
});
{% endraw %}
{% endhighlight %}
    </p>
    <p>
      That's it! You've got your fullscreen app and you are now ready for party time.
    </p>
  </div>
</div>
