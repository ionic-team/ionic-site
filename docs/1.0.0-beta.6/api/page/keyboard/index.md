---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/page/keyboard/"

title: "keyboard"
header_sub_title: "Page in module ionic"
doc: "keyboard"
docType: "page"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/utils/keyboard.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  keyboard



</h1>





On both Android and iOS, Ionic will attempt to prevent the keyboard from
obscuring inputs and focusable elements when it appears by scrolling them
into view.  In order for this to work, any focusable elements must be within
a [Scroll View](http://ionicframework.com/docs/api/directive/ionScroll/)
or a directive such as [Content](http://ionicframework.com/docs/api/directive/ionContent/)
that has a Scroll View.

It will also attempt to prevent the native overflow scrolling on focus,
which can cause layout issues such as pushing headers up and out of view.

The keyboard fixes work best in conjunction with the 
[Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugins-keyboard),
although it will perform reasonably well without.  However, if you are using
Cordova there is no reason not to use the plugin.

### Hide when keyboard shows

To hide an element when the keyboard is open, add the class `hide-on-keyboard-open`.

```html
<div class="hide-on-keyboard-open">
  <div id="google-map"></div>
</div>
```
----------

### Plugin Usage
Information on using the plugin can be found at 
[https://github.com/driftyco/ionic-plugins-keyboard](https://github.com/driftyco/ionic-plugins-keyboard).

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










  

  
  
  






