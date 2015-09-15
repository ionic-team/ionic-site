---
layout: v2/docs_base
id: resources
title: Ionic 2 Resources | Developer Tips
header_title: Developer Tips - Ionic 2 Resources
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

# Ionic Developer Tips

<div id="what-is">

  <section id="using-debugger">
    <h3><a href="#using-debugger">Using a Debugger</code></a></h3>
    <p>The <code>debugger</code> keyword can be used to debug your application. When most browsers encounters a `debugger` statement, execution of Javascript is stopped, and your browser will load its debugger. This can be used to set "breakpoints" in your application. For example, if you write a function that is not returning what you expect it to, you can add a debugger statement to the first line of the function:</p>
    <code class="language-js" data-lang="js">
      function myBrokenFunction() {
        debugger;
        // do other stuff
      }
    </code>
    <p>When your application runs, it will pause at this function. From there, you can use your browser's developer tools to only execute Javascript step-by-step. This allows you to see exactly which line or function call is causing your function to break.</p>
  </section>

  <section id="changing-the-platform">
    <h3><a href="#changing-the-platform">Changing the Platform</a></h3>
    <p>By default, when you view your app in the browser, Ionic will apply the iOS theme. However, since Ionic components adapt according to their platform, it is helpful to be able to view what your app looks like on Android. To do this, simply add <code>?ionicplatform=android</code> to the URL where your app is being served: <code>http://localhost:8100/?ionicplatform=android</code>. This will change how Ionic sees which platform you are on.</p>
    <p>However, this will not change how the browser sees which platform you are on. To change how the browser sees which platform and device you are on, you must change the user-agent. To do this, open up Chrome DevTools, and toggle device mode on with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> (<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> on Mac).</p>
    <img class="docs-screenshot" src="/img/docs/change-device-platform.png">
    <p>Selecting devices from the device dropdown will change the user-agent, as well as the dimensions of the viewport.</p>
  </section>

  <section id="using-ios-simulator">
    <h3><a href="#using-ios-simulator">Using the iOS Simulator</a></h3>
    <p>TODO</p>
  </section>

  <section id="debugging-ios-safari">
    <h3><a href="#debugging-ios-safari">Debugging iOS with Safari</a></h3>
    <p>TODO</p>
  </section>

  <section id="using-genymotion-android">
    <h3><a href="#using-genymotion-android">Using the Genymotion Android Emulator</a></h3>
    <p>TODO</p>
  </section>

  <section id="debugging-ios-safari">
    <h3><a href="#debugging-ios-safari">Debugging Android with Chrome DevTools</a></h3>
    <p>TODO</p>
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
