---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "in-app-browser"
title: "In App Browser"
header_sub_title: "Class in module "
doc: "In App Browser"
docType: "class"
---

<h1 class="api-title">In App Browser</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/in-app-browser/index.ts#L156">
  Improve this doc
</a>







<p>Launches in app Browser</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-inappbrowser">
    https://github.com/apache/cordova-plugin-inappbrowser
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>AmazonFire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>macOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { InAppBrowser } from &#39;@ionic-native/in-app-browser&#39;;

constructor(private iab: InAppBrowser) { }


...


const browser = this.iab.create(&#39;https://ionicframework.com/&#39;);

browser.executeScript(...);

browser.insertCSS(...);
browser.on(&#39;loadstop&#39;).subscribe(event =&gt; {
   browser.insertCSS({ code: &quot;body{color: red;&quot; });
});

browser.close();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(url,&nbsp;target,&nbsp;options)</code></h3>

Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL to load.</p>
</td>
  </tr>
  
  <tr>
    <td>
      target</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The target in which to load the URL, an optional parameter that defaults to _self.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Options for the InAppBrowser. Optional, defaulting to: location=yes.
                The options string must not contain any blank space, and each feature&#39;s
                name/value pairs must be separated by a comma. Feature names are case insensitive.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>InAppBrowserObject</code> 
</div>

<h2><a class="anchor" name="InAppBrowserObject" href="#InAppBrowserObject"></a>InAppBrowserObject</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Displays an InAppBrowser window that was opened hidden. Calling this has no effect
if the InAppBrowser was already visible.



<h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>




Closes the InAppBrowser window.



<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hides an InAppBrowser window that is currently shown. Calling this has no effect
if the InAppBrowser was already hidden.



<h3><a class="anchor" name="executeScript" href="#executeScript"></a><code>executeScript(script)</code></h3>


Injects JavaScript code into the InAppBrowser window.
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
      script</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="insertCSS" href="#insertCSS"></a><code>insertCSS(css)</code></h3>


Injects CSS into the InAppBrowser window.
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
      css</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="on" href="#on"></a><code>on(event)</code></h3>


A method that allows you to listen to events happening in the browser.
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
      event</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the event</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;InAppBrowserEvent&gt;</code> Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
</div>



<h2><a class="anchor" name="InAppBrowserEvent" href="#InAppBrowserEvent"></a>InAppBrowserEvent</h2>

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
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the eventname, either loadstart, loadstop, loaderror, or exit.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the URL that was loaded.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      code
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>the error code, only in the case of loaderror.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the error message, only in the case of loaderror.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="InAppBrowserOptions" href="#InAppBrowserOptions"></a>InAppBrowserOptions</h2>

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
      location
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes or no to turn the InAppBrowser&#39;s location bar on or off.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hidden
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to create the browser and load the page, but not show it. The loadstop event fires when loading is complete.
Omit or set to no (default) to have the browser open and load normally.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clearcache
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>Set to yes to have the browser&#39;s cookie cache cleared before the new window is opened.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clearsessioncache
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>Set to yes to have the session cookie cache cleared before the new window is opened.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      zoom
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(Android Only) set to yes to show Android browser&#39;s zoom controls, set to no to hide them. Default value is yes.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hardwareback
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to use the hardware back button to navigate backwards through the InAppBrowser&#39;s history.
If there is no previous page, the InAppBrowser will close. The default value is yes, so you must set it to no if you want the back button to simply close the InAppBrowser.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mediaPlaybackRequiresUserAction
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to prevent HTML5 audio or video from autoplaying (defaults to no).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      shouldPauseOnSuspend
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(Android Only) Set to yes to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      footer
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(Android Only) Set to yes to show a close button in the footer similar to the iOS Done button. The close button will appear the same as for the header hence use closebuttoncaption and closebuttoncolor to set its properties</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      footercolor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(Android Only) Set to a valid hex color string, for example #00ff00 or #CC00ff00 (#aarrggbb) , and it will change the footer color from default. Only has effect if user has footer set to yes</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      closebuttoncaption
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(iOS Only) Set to a string to use as the Done button&#39;s caption. Note that you need to localize this value yourself.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disallowoverscroll
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no (default is no). Turns on/off the UIWebViewBounce property.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      toolbar
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to turn the toolbar on or off for the InAppBrowser (defaults to yes)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableViewportScale
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only)  Set to yes or no to prevent viewport scaling through a meta tag (defaults to no).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      allowInlineMediaPlayback
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface.
The HTML&#39;s video element must also include the webkit-playsinline attribute (defaults to no)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      keyboardDisplayRequiresUserAction
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript&#39;s focus() call (defaults to yes).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      suppressesIncrementalRendering
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to wait until all new view content is received before being rendered (defaults to no).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      presentationstyle
    </td>
    <td>
      <code>&#39;pagesheet&#39; | &#39;formsheet&#39; | &#39;fullscreen&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      transitionstyle
    </td>
    <td>
      <code>&#39;fliphorizontal&#39; | &#39;crossdissolve&#39; | &#39;coververtical&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to fliphorizontal, crossdissolve or coververtical to set the transition style (defaults to coververtical).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      toolbarposition
    </td>
    <td>
      <code>&#39;top&#39; | &#39;bottom&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to top or bottom (default is bottom). Causes the toolbar to be at the top or bottom of the window.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hidespinner
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to change the visibility of the loading indicator (defaults to no).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fullscreen
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>(Windows only) Set to yes to create the browser control without a border around it.
Please note that if location=no is also specified, there will be no control presented to user to close IAB window.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





