---
layout: "docs_api"
version: "1.3.2"
versionHref: "/docs/v1/1.3.2"
path: "api/page/keyboard/"

title: "keyboard"
header_sub_title: "Page in module ionic"
doc: "keyboard"
docType: "page"
---

<div class="improve-docs">
<a href='https://github.com/ionic-team/ionic-v1/blob/master/js/utils/keyboard.js#L1'>
View Source
</a>
&nbsp;
<a href='http://github.com/ionic-team/ionic/edit/1.x/js/utils/keyboard.js#L1'>
Improve this doc
</a>
</div>




<h1 class="api-title">

keyboard



</h1>





On both Android and iOS, Ionic will attempt to prevent the keyboard from
obscuring inputs and focusable elements when it appears by scrolling them
into view.  In order for this to work, any focusable elements must be within
a [Scroll View](https://ionicframework.com/docs/v1/api/directive/ionScroll/)
or a directive such as [Content](https://ionicframework.com/docs/v1/api/directive/ionContent/)
that has a Scroll View.

It will also attempt to prevent the native overflow scrolling on focus,
which can cause layout issues such as pushing headers up and out of view.

The keyboard fixes work best in conjunction with the
[Ionic Keyboard Plugin](https://github.com/ionic-team/ionic-plugin-keyboard),
although it will perform reasonably well without.  However, if you are using
Cordova there is no reason not to use the plugin.

### Hide when keyboard shows

To hide an element when the keyboard is open, add the class `hide-on-keyboard-open`.

```html
<div class="hide-on-keyboard-open">
  <div id="google-map"></div>
</div>
```

Note: For performance reasons, elements will not be hidden for 400ms after the start of the `native.keyboardshow` event
from the Ionic Keyboard plugin. If you would like them to disappear immediately, you could do something
like:

```js
  window.addEventListener('native.keyboardshow', function(){
    document.body.classList.add('keyboard-open');
  });
```
This adds the same `keyboard-open` class that is normally added by Ionic 400ms after the keyboard
opens. However, bear in mind that adding this class to the body immediately may cause jank in any
animations on Android that occur when the keyboard opens (for example, scrolling any obscured inputs into view).

----------

### Plugin Usage
Information on using the plugin can be found at
[https://github.com/ionic-team/ionic-plugins-keyboard](https://github.com/ionic-team/ionic-plugin-keyboard).

----------

### Android Notes
- If your app is running in fullscreen, i.e. you have
  `<preference name="Fullscreen" value="true" />` in your `config.xml` file
  you will need to set `ionic.Platform.isFullScreen = true` manually.

- You can configure the behavior of the web view when the keyboard shows by setting
  [android:windowSoftInputMode](http://developer.android.com/reference/android/R.attr.html#windowSoftInputMode)
  to either `adjustPan`, `adjustResize` or `adjustNothing` in your app's
  activity in `AndroidManifest.xml`. `adjustResize` is the recommended setting
  for Ionic, but if for some reason you do use `adjustPan` you will need to
  set `ionic.Platform.isFullScreen = true`.

  ```xml
  <activity android:windowSoftInputMode="adjustResize">

  ```

### iOS Notes
- If the content of your app (including the header) is being pushed up and
  out of view on input focus, try setting `cordova.plugins.Keyboard.disableScroll(true)`.
  This does **not** disable scrolling in the Ionic scroll view, rather it
  disables the native overflow scrolling that happens automatically as a
  result of focusing on inputs below the keyboard.










  

  
  
  






