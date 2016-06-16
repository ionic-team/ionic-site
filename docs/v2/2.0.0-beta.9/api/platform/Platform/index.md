---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.9"
versionHref: "/docs/v2/2.0.0-beta.9"
path: ""
category: api
id: "platform"
title: "Platform"
header_sub_title: "Ionic API Documentation"
doc: "Platform"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/platform/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="platform" href="#platform"></a>

Platform





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/platform/platform.ts#L4">
Improve this doc
</a>






<p>The Platform service can be used to get information about your current device.
You can get all of the platforms associated with the device using the <a href="#platforms">platforms</a>
method, including whether the app is being viewed from a tablet, if it&#39;s
on a mobile device or browser, and the exact platform (iOS, Android, etc).
You can also get the orientation of the device, if it uses right-to-left
language direction, and much much more. With this information you can completely
customize your app to fit any device.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import {Platform} from &#39;ionic-angular&#39;;

@Component({...})
export MyPage {
  constructor(platform: Platform) {
    this.platform = platform;
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="zone"></div>

<h3>
<a class="anchor" name="zone" href="#zone"></a>
<code>zone</code>
  

</h3>












<div id="is"></div>

<h3>
<a class="anchor" name="is" href="#is"></a>
<code>is(platformName)</code>
  

</h3>

Depending on the platform the user is on, `is(platformName)` will
return `true` or `false`. Note that the same app can return `true`
for more than one platform name. For example, an app running from
an iPad would return `true` for the platform names: `mobile`,
`ios`, `ipad`, and `tablet`. Additionally, if the app was running
from Cordova then `cordova` would be true, and if it was running
from a web browser on the iPad then `mobileweb` would be `true`.

```
import {Platform} from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(platform: Platform) {
    this.platform = platform;

    if (this.platform.is('ios')) {
      // This will only print when on iOS
      console.log("I'm an iOS device!");
    }
  }
}
```

| Platform Name   | Description                        |
|-----------------|------------------------------------|
| android         | on a device running Android.       |
| cordova         | on a device running Cordova.       |
| core            | on a desktop device.               |
| ios             | on a device running iOS.           |
| ipad            | on an iPad device.                 |
| iphone          | on an iPhone device.               |
| mobile          | on a mobile device.                |
| mobileweb       | in a browser on a mobile device.   |
| phablet         | on a phablet device.               |
| tablet          | on a tablet device.                |
| windows         | on a device running Windows.       |


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        platformName
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>returns true/false based on platform.</p>


</div>




<div id="platforms"></div>

<h3>
<a class="anchor" name="platforms" href="#platforms"></a>
<code>platforms()</code>
  

</h3>

Depending on what device you are on, `platforms` can return multiple values.
Each possible value is a hierarchy of platforms. For example, on an iPhone,
it would return `mobile`, `ios`, and `iphone`.

```
import {Platform} from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(platform: Platform) {
    this.platform = platform;

    // This will print an array of the current platforms
    console.log(this.platform.platforms());
  }
}
```






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>array</code> <p>the array of platforms</p>


</div>




<div id="versions"></div>

<h3>
<a class="anchor" name="versions" href="#versions"></a>
<code>versions()</code>
  

</h3>

Returns an object containing version information about all of the platforms.

```
import {Platform} from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(platform: Platform) {
    this.platform = platform;

    // This will print an object containing
    // all of the platforms and their versions
    console.log(platform.versions());
  }
}
```







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>object</code> <p>An object containing all of the platforms and their versions.</p>


</div>




<div id="ready"></div>

<h3>
<a class="anchor" name="ready" href="#ready"></a>
<code>ready()</code>
  

</h3>

Returns a promise when the platform is ready and native functionality
can be called. If the app is running from within a web browser, then
the promise will resolve when the DOM is ready. When the app is running
from an application engine such as Cordova, then the promise will
resolve when Cordova triggers the `deviceready` event.

The resolved value is the `readySource`, which states which platform
ready was used. For example, when Cordova is ready, the resolved ready
source is `cordova`. The default ready source value will be `dom`. The
`readySource` is useful if different logic should run depending on the
platform the app is running from. For example, only Cordova can execute
the status bar plugin, so the web should not run status bar plugin logic.

```
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({...})
export MyApp {
  constructor(platform: Platform) {
    platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
  }
}
```






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>promise</code> 

</div>




<div id="setDir"></div>

<h3>
<a class="anchor" name="setDir" href="#setDir"></a>
<code>setDir(dir)</code>
  

</h3>

Set the app's language direction, which will update the `dir` attribute
on the app's root `<html>` element. We recommend the app's `index.html`
file already has the correct `dir` attribute value set, such as
`<html dir="ltr">` or `<html dir="rtl">`. This method is useful if the
direction needs to be dynamically changed per user/session.
[W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        dir
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Examples: <code>rtl</code>, <code>ltr</code></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="dir"></div>

<h3>
<a class="anchor" name="dir" href="#dir"></a>
<code>dir()</code>
  

</h3>

Returns app's language direction.
We recommend the app's `index.html` file already has the correct `dir`
attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
[W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>string</code> 

</div>




<div id="isRTL"></div>

<h3>
<a class="anchor" name="isRTL" href="#isRTL"></a>
<code>isRTL()</code>
  

</h3>

Returns if this app is using right-to-left language direction or not.
We recommend the app's `index.html` file already has the correct `dir`
attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
[W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="setLang"></div>

<h3>
<a class="anchor" name="setLang" href="#setLang"></a>
<code>setLang(language)</code>
  

</h3>

Set the app's language and optionally the country code, which will update
the `lang` attribute on the app's root `<html>` element.
We recommend the app's `index.html` file already has the correct `lang`
attribute value set, such as `<html lang="en">`. This method is useful if
the language needs to be dynamically changed per user/session.
[W3C: Declaring language in HTML](http://www.w3.org/International/questions/qa-html-language-declarations)


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        language
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Examples: <code>en-US</code>, <code>en-GB</code>, <code>ar</code>, <code>de</code>, <code>zh</code>, <code>es-MX</code></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="lang"></div>

<h3>
<a class="anchor" name="lang" href="#lang"></a>
<code>lang()</code>
  

</h3>

Returns app's language and optional country code.
We recommend the app's `index.html` file already has the correct `lang`
attribute value set, such as `<html lang="en">`.
[W3C: Declaring language in HTML](http://www.w3.org/International/questions/qa-html-language-declarations)






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>string</code> 

</div>




<div id="pause"></div>

<h3>
<a class="anchor" name="pause" href="#pause"></a>
<code>pause</code>
  

</h3>

The pause event emits when the native platform puts the application
into the background, typically when the user switches to a different
application. This event would emit when a Cordova app is put into
the background, however, it would not fire on a standard web browser.











<div id="resume"></div>

<h3>
<a class="anchor" name="resume" href="#resume"></a>
<code>resume</code>
  

</h3>

The resume event emits when the native platform pulls the application
out from the background. This event would emit when a Cordova app comes
out from the background, however, it would not fire on a standard web browser.











<div id="registerBackButtonAction"></div>

<h3>
<a class="anchor" name="registerBackButtonAction" href="#registerBackButtonAction"></a>
<code>registerBackButtonAction(callback,&nbsp;priority)</code>
  

</h3>

The back button event is triggered when the user presses the native
platform's back button, also referred to as the "hardware" back button.
This event is only used within Cordova apps running on Android and
Windows platforms. This event is not fired on iOS since iOS doesn't come
with a hardware back button in the same sense an Android or Windows device
does.

Registering a hardware back button action and setting a priority allows
apps to control which action should be called when the hardware back
button is pressed. This method decides which of the registered back button
actions has the highest priority and should be called.



<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>Called when the back button is pressed,
if this registered action has the highest priority.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        priority
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Set the priority for this action. Only the highest priority will execute. Defaults to <code>0</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Function</code> <p>A function that, when called, will unregister
the its back button action.</p>


</div>




<div id="width"></div>

<h3>
<a class="anchor" name="width" href="#width"></a>
<code>width()</code>
  

</h3>

Gets the width of the platform's viewport using `window.innerWidth`.
Using this method is preferred since the dimension is a cached value,
which reduces the chance of multiple and expensive DOM reads.











<div id="height"></div>

<h3>
<a class="anchor" name="height" href="#height"></a>
<code>height()</code>
  

</h3>

Gets the height of the platform's viewport using `window.innerHeight`.
Using this method is preferred since the dimension is a cached value,
which reduces the chance of multiple and expensive DOM reads.











<div id="isPortrait"></div>

<h3>
<a class="anchor" name="isPortrait" href="#isPortrait"></a>
<code>isPortrait()</code>
  

</h3>

Returns `true` if the app is in portait mode.











<div id="isLandscape"></div>

<h3>
<a class="anchor" name="isLandscape" href="#isLandscape"></a>
<code>isLandscape()</code>
  

</h3>

Returns `true` if the app is in landscape mode.












<!-- related link --><!-- end content block -->


<!-- end body block -->

