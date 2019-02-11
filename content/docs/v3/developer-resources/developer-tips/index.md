---
layout: fluid/docs_base
category: resources
id: developer-tips
title: Developer Tips
header_sub_title: Ionic Resources
---


# Ionic Developer Tips

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/resources/developer-tips/index.md'>
  Improve this doc
</a>

<div id="what-is">

  <section id="using-debugger">
    <h3><a href="#using-debugger">Using a Debugger</a></h3>
    <p>The <code>debugger</code> keyword can be used to debug your application. When most browsers encounters a `debugger` statement, execution of Javascript is stopped, and your browser will load its debugger. This can be used to set "breakpoints" in your application. For example, if you write a function that is not returning what you expect it to, you can add a debugger statement to the first line of the function:</p>

    {% highlight js %}
    function myBrokenFunction() {
      debugger;
      // do other stuff
    }
    {% endhighlight %}

    <p>When your application runs, it will pause at this function. From there, you can use your browser's developer tools to only execute Javascript step-by-step. This allows you to see exactly which line or function call is causing your function to break.</p>
  </section>

  <section id="changing-the-platform">
    <h3><a href="#changing-the-platform">Changing the Platform</a></h3>
    <p>By default, when you view your app in the browser, Ionic will apply the iOS theme. However, since Ionic components adapt according to their platform, it is helpful to be able to view what your app looks like on Android. To do this, simply add <code>?ionicplatform=android</code> to the URL where your app is being served: <code>http://localhost:8100/?ionicplatform=android</code>. This will change how Ionic sees which platform you are on.</p>
    <p>However, this will not change how the browser sees which platform you are on. To change how the browser sees which platform and device you are on, you must change the user-agent. To do this, open up Chrome DevTools, and toggle device mode on with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> (<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> on Mac).</p>
    <img class="docs-screenshot" src="/img/docs/change-device-platform.png">
    <p>Selecting devices from the device dropdown will change the user-agent, as well as the dimensions of the viewport. Between this and adding the <code>?ionicplatform=android</code> URL param, you can check out how your app will look on a wide number of devices.</p>
  </section>

  <section id="using-ios-simulator">
    <h3><a href="#using-ios-simulator">Using the iOS Simulator</a></h3>
    <p>The iOS simulator allows you to test and debug your app before running it on an actual device. Before it can be used, we need to install <a href="https://developer.apple.com/xcode/download/">Xcode</a>, Apple's IDE. The Ionic <a href="../developer-resources/what-is/#cli">CLI</a> can then be used to run the app in the current directory on the simulator:</p>

    {% highlight bash %}
    $ ionic cordova emulate ios -lc
    {% endhighlight %}
    <p>Passing in the <code>-lc</code> flag will enable livereload and log console output to your terminal.</p>
    <p>You can also use Xcode to launch the emulator and debug your app. Open up Xcode and open <code>../path-to-app/platforms/ios/myApp.xcodeproj</code>. After your app loads, you will be able to run it and see all console output inside of Xcode's output window.</p>

  </section>



  <section id="using-genymotion-android">
    <h3><a href="#using-genymotion-android">Using the Genymotion Android Emulator</a></h3>
    <p>While the Android SDK comes with a stock emulator, it can be very slow and unresponsive at times. <a href="https://www.genymotion.com">Genymotion</a> is an alternate emulator that is blazing fast, and allows you to emulate native functionality like GPS and camera.</p>
  </section>

  <section id="debugging-ios-safari">
    <h3><a href="#debugging-ios-safari">Remote Debugging - iOS and Safari</a></h3>
    <p>Safari can be used to debug an Ionic app on a connected iOS device. First, we need to enable Web Inspector on the connected device. Web Inspector can be found under <code>Settings > Safari > Advanced</code>. Next, head over to the Safari on your Mac and enable <b>Show Develop menu in menu bar</b> under <code>Safari > Preferences > Advanced</code>. The connected device should now appear in the <b>Develop</b> menu. From there, you can inspect it and use Safari's developer tools to debug your application!</p>
  </section>

  <section id="debugging-android-chrome">
    <h3><a href="#debugging-android-chrome">Remote Debugging - Android and Chrome</a></h3>
    <p><a href="https://developers.google.com/web/tools/setup/workspace/setup-devtools">Chrome DevTools</a> are a very powerful set of tools for debugging your application. When you use <code>ionic serve</code> to run your application in the browser, DevTools can be used to inspect elements, view console logs, profile your application, and much more.</p>
    <p>In addition to using DevTools to debug your app in the browser, DevTools can be used to debug a remote physical Android device, or even a Genymotion emulator running your app. First off, we will need to have <a href="http://developer.android.com/tools/help/adb.html">adb</a> installed. Once installed, if your device is connected, or an Android emulator is running, you should be able to see your device listed when you run the following command:</p>
    {% highlight bash %}
    $ adb devices
    {% endhighlight %}
    <p>Next, go to <code>chrome://inspect/#devices</code> in Chrome and inspect your Android device. Note: you may need to change the settings on your device to allow USB debugging. From there, you can use Chrome to debug your application just like it is in the browser!</p>
  </section>


  <section id="debugging-vscode">
    <h3><a href="#debugging-vscode">Remote Debugging - VS Code Plugin</a></h3>
    <p>VS Code has a dedicated plugin for debugging apps built with Cordova. The <a href="https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools">plugin</a> creates bridge between the device and the debugger and allows you to set break points in your editor directly.</p>
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
