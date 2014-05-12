---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
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





On both Android and iOS, Ionic will attempt to prevent the keyboard from obscuring inputs and 
focusable elements when it appears by scrolling them into view.  In order for this to work,
any focusable elements must be within a [Scroll View](http://ionicframework.com/docs/api/directive/ionScroll/)
or a directive such as [Content](http://ionicframework.com/docs/api/directive/ionContent/) that has a Scroll View.

It will also attempt to prevent the native overflow scrolling on focus, which can cause layout issues such as 
pushing headers up and out of view.

The keyboard fixes work best in conjunction with the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugins-keyboard),
although it will perform reasonably well without.  However, if you are using Cordova there is no reason not to use the plugin.

### Hide when keyboard shows

To hide an element when the keyboard is open, add the class `hide-on-keyboard-open`.

```html
<div class="hide-on-keyboard-open">
  <div id="google-map"></div>
</div>
```


### Android Notes
- If your app is running in fullscreen, i.e. you have `<preference name="Fullscreen" value="true" />` in your `config.xml` file
you will need to set `ionic.Platform.isFullScreen = true` manually.

- If you are not using the keyboard plugin, it may be necessary to set `android:windowSoftInputMode="adjustResize"` to
your activity in `AndroidManifest.xml` to get things working properly.

### iOS Notes
- if you are not using the keyboard plugin, switching to inputs below the keyboard using the accessory bar will automatically use the native browser's
overflow scrolling and push headers out of view










  

  
  
  






