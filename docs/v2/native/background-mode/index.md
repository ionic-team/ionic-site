---
layout: "v2_fluid/docs_base"
version: "1.2.4"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "background-mode"
title: "Background Mode"
header_sub_title: "Class in module "
doc: "Background Mode"
docType: "class"
---








<h1 class="api-title">

  
  Background Mode
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/-native/src/plugins/backgroundmode.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add de.appplant.cordova.plugin.background-mode</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-background-mode">
    https://github.com/katzer/cordova-plugin-background-mode
  </a>
</p>

<!-- description -->

<p>Cordova plugin to prevent the app from going to sleep while in background.
 Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: <a href="https://github.com/katzer/cordova-plugin-background-mode#android-customization">https://github.com/katzer/cordova-plugin-background-mode#android-customization</a></p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<p>```js
import {BackgroundMode} from &#39;ionic-native&#39;;</p>
<p>BackgroundMode.enable();</p>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="enable"></div>
<h3><code>enable()</code>

</h3>



Enable the background mode.
Once called, prevents the app from being paused while in background.










<div id="disable"></div>
<h3><code>disable()</code>

</h3>

Disable the background mode.
Once the background mode has been disabled, the app will be paused when in background.










<div id="isEnabled"></div>
<h3><code>isEnabled()</code>

</h3>

Checks if background mode is enabled or not.










<div id="isActive"></div>
<h3><code>isActive()</code>

</h3>

Can be used to get the information if the background mode is active.










<div id="setDefaults"></div>
<h3><code>setDefaults()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;


Override the default title, ticker and text.
Available only for Android platform.










<div id="update"></div>
<h3><code>update()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;


Modify the displayed information.
Available only for Android platform.










<div id="on"></div>
<h3><code>on(eventName)</code>

</h3>



Sets a callback for a specific event
Can be used to get notified or run function when the background mode has been activated, deactivated or failed.


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
      eventName
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The name of the event. Available events: activate, deactivate, failure</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

