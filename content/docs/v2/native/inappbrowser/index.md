---
layout: "v2_fluid/docs_base"
version: "2.6.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "inappbrowser"
title: "InAppBrowser"
header_sub_title: "Class in module "
doc: "InAppBrowser"
docType: "class"
---







<h1 class="api-title">
  
  InAppBrowser
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/inappbrowser.ts#L58">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-inappbrowser</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-inappbrowser">
    https://github.com/apache/cordova-plugin-inappbrowser
  </a>
</p>

<!-- description -->

<p>Launches in app Browser</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {InAppBrowser} from &#39;ionic-native&#39;;


...


let browser = new InAppBrowser(&#39;https://ionic.io&#39;, &#39;_system&#39;);
browser.executeScript(...);
browser.insertCSS(...);
browser.close();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Displays an InAppBrowser window that was opened hidden. Calling this has no effect
if the InAppBrowser was already visible.




<div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>
Closes the InAppBrowser window.




<div id="hide"></div>
<h3>
  <code>hide()</code>
  

</h3>
Hides an InAppBrowser window that is currently shown. Calling this has no effect
if the InAppBrowser was already hidden.




<div id="executeScript"></div>
<h3>
  <code>executeScript(script)</code>
  

</h3>
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
      script
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="insertCSS"></div>
<h3>
  <code>insertCSS(css)</code>
  

</h3>
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
      css
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="on"></div>
<h3>
  <code>on(name)</code>
  

</h3>
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
      name
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>of the event</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;InAppBrowserEvent&gt;</code> Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes or no to ruen the InAppBrowser&#39;s location bar on or off.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      hidden
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to create the browser and load the page, but not show it. The loadstop event fires when loading is complete.
Omit or set to no (default) to have the browser open and load normally.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      clearcache
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>Set to yes to have the browser&#39;s cookie cache cleared before the new window is opened.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      clearsessioncache
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>Set to yes to have the session cookie cache cleared before the new window is opened.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      zoom
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(Android Only) set to yes to show Android browser&#39;s zoom controls, set to no to hide them. Default value is yes.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      hardwareback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to use the hardware back button to navigate backwards through the InAppBrowser&#39;s history.
If there is no previous page, the InAppBrowser will close. The default value is yes, so you must set it to no if you want the back button to simply close the InAppBrowser.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      mediaPlaybackRequiresUserAction
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>Set to yes to prevent HTML5 audio or video from autoplaying (defaults to no).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      shouldPauseOnSuspend
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(Android Only) Set to yes to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      closebuttoncaption
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(iOS Only) Set to a string to use as the Done button&#39;s caption. Note that you need to localize this value yourself.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      disallowoverscroll
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no (default is no). Turns on/off the UIWebViewBounce property.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      toolbar
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to turn the toolbar on or off for the InAppBrowser (defaults to yes)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      enableViewportScale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only)  Set to yes or no to prevent viewport scaling through a meta tag (defaults to no).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      allowInlineMediaPlayback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface.
The HTML&#39;s video element must also include the webkit-playsinline attribute (defaults to no)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      keyboardDisplayRequiresUserAction
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript&#39;s focus() call (defaults to yes).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      suppressesIncrementalRendering
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39; | &#39;no&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to yes or no to wait until all new view content is received before being rendered (defaults to no).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      presentationstyle
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;pagesheet&#39; | &#39;formsheet&#39; | &#39;fullscreen&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      transitionstyle
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;fliphorizontal&#39; | &#39;crossdissolve&#39; | &#39;coververtical&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to fliphorizontal, crossdissolve or coververtical to set the transition style (defaults to coververtical).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      toolbarposition
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;top&#39; | &#39;bottom&#39;</code>
    </td>
    <td>
      <p>(iOS Only) Set to top or bottom (default is bottom). Causes the toolbar to be at the top or bottom of the window.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      fullscreen
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>&#39;yes&#39;</code>
    </td>
    <td>
      <p>(Windows only) Set to yes to create the browser control without a border around it.
Please note that if location=no is also specified, there will be no control presented to user to close IAB window.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

