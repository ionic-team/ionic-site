---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/backgroundmode.ts#L34">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-background-mode</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-background-mode">
    https://github.com/katzer/cordova-plugin-background-mode
  </a>
</p>

<!-- description -->

<p>Cordova plugin to prevent the app from going to sleep while in background.
Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: <a href="https://github.com/katzer/cordova-plugin-background-mode">https://github.com/katzer/cordova-plugin-background-mode</a></p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BackgroundMode } from &#39;ionic-native&#39;;

BackgroundMode.enable();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

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






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> returns a promise that resolves with boolean that indicates if the background mode is enabled.
</div>



<div id="isActive"></div>
<h3><code>isActive()</code>
  
</h3>


Can be used to get the information if the background mode is active.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> returns a promise that resolves with boolean that indicates if the background mode is active.
</div>



<div id="setDefaults"></div>
<h3><code>setDefaults(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Override the default title, ticker and text.
Available only for Android platform.


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
      options
      
      
    </td>
    <td>
      
<code>Configure</code>
    </td>
    <td>
      <p>List of option to configure. See table below</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="configure"></div>
<h3><code>configure(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Modify the displayed information.
Available only for Android platform.


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
      options
      
      
    </td>
    <td>
      
<code>Configure</code>
    </td>
    <td>
      <p>Any options you want to update. See table below.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="onactivate"></div>
<h3><code>onactivate()</code>
  
</h3>


Called when background mode is activated.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable that emits when background mode is activated
</div>



<div id="ondeactivate"></div>
<h3><code>ondeactivate()</code>
  
</h3>


Called when background mode is deactivated.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable that emits when background mode is deactivated
</div>



<div id="onfailure"></div>
<h3><code>onfailure()</code>
  
</h3>


Called when background mode fails






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable that emits when background mode fails
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="BackgroundModeConfiguration" href="#BackgroundModeConfiguration"></a>BackgroundModeConfiguration</h2>


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
      title
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Title of the background task</p>

    </td>
  </tr>
  
  <tr>
    <td>
      ticker
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The text that scrolls itself on statusbar</p>

    </td>
  </tr>
  
  <tr>
    <td>
      text
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Description of background task</p>

    </td>
  </tr>
  
  <tr>
    <td>
      silent
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>if true plugin will not display a notification. Default is false.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      resume
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

