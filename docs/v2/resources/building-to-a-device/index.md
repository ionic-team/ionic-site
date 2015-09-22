---
layout: v2/docs_base
id: resources
title: Ionic 2 | Building to a Device
header_title: Developer Tips - Building to a Device
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

# Building to a Device

<div id="what-is">

<section id="overview">
<h3><a href="#overview">Overview</code></a></h3>
<p>
After you have gone through the <a href="../getting-started/">getting started</a> tutorial, we can build our app to a physical device. If you don't have a physical device on hand, you can still build to a device emulator. Check out the <a href="../developer-tips/#using-ios-simulator">iOS simulator</a> docs if you are on Mac, or the <a href="../developer-tips/#using-genymotion">Genymotion</a> docs if you are looking to emulate an Android device. We will also need <a href="../what-is/#cordova">Cordova</a> to run your app on a native device. To install Cordova, run:
</p>
{% highlight bash %}
$ sudo npm install -g cordova
{% endhighlight %}
<p>
Once you have Cordova installed, and a device or emulator ready to go, we can move on and begin building your app!
</p>
</section>

<section id="building-for-ios">
<h3><a href="#building-for-ios">Building for iOS</code></a></h3>
<p>To build for iOS, we need to add the iOS platform module to Cordova:</p>
{% highlight bash %}
$ ionic platform add ios
{% endhighlight %}
<p>
Next, we will need to install <a href="../what-is/#xcode">Xcode</a>. Xcode allows us to build compile to a target device running iOS. Once installed, if you plan on using the iOS emulator, we can safely install it using <a href="../what-is/#npm">npm</a>:
</p>
{% highlight bash %}
$ npm install ios-sim
{% endhighlight %}
<p>From there, we should be able to run the iOS emulator using the following command:</p>
{% highlight bash %}
$ ionic emulate ios
{% endhighlight %}

</section>


<section id="building-for-android">
<h3><a href="#building-for-android">Building for Android</code></a></h3>
<p>To build for Android, we need to add the Android platform module to Cordova:</p>
{% highlight bash %}
$ ionic platform add android
{% endhighlight %}
<p>
Next, we will need to install the <a href="../what-is/#android-sdk">Android SDK</a>. The Android SDK allows us to build compile to a target device running Android. Although the Android SDK comes with a stock emulator, <a href="../what-is/#genymotion">Genymotion</a> is recommended since is is much faster. Once installed, we can run an Android image and run:
</p>
{% highlight bash %}
$ ionic run android
{% endhighlight %}

</section>

</div>

<script>
$(document).ready(function() {
  $(function () {

      var setHash = function(urlHash) {
        window.location.hash = (urlHash);
        currentHash = urlHash;
      };

      var currentHash = "#"
      $(document).scroll(function () {
          $('section').each(function () {
              var top = window.pageYOffset;
              var distance = top - $(this).offset().top;
              var hash = '#' + $(this).attr('id');
              if (distance < 20 && distance > -20 && currentHash != hash) {
                setHash(hash);
              }
          });
      });
  });
});
</script>
