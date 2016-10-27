---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/backgroundmode.ts#L2">
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
 Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: <a href="https://github.com/katzer/cordova-plugin-background-mode#android-customization">https://github.com/katzer/cordova-plugin-background-mode#android-customization</a></p>


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
<code>boolean</code> returns a true of false if the background mode is enabled.
</div>



<div id="isActive"></div>
<h3><code>isActive()</code>
  
</h3>


Can be used to get the information if the background mode is active.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>boolean</code> returns tru or flase if the background mode is active.
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










<div id="ondeactivate"></div>
<h3><code>ondeactivate()</code>
  
</h3>


Called when background mode is deactivated.










<div id="onfailure"></div>
<h3><code>onfailure()</code>
  
</h3>


Called when background mode fails











<!-- methods on the class -->

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Configuration options</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td><code>string</code></td>
<td>Title of the background task. Optional</td>
</tr>
<tr>
<td>ticker</td>
<td><code>string</code></td>
<td>The text that scrolls itself on the statusbar. Optional</td>
</tr>
<tr>
<td>text</td>
<td><code>string</code></td>
<td>Description of the background task. Optional</td>
</tr>
<tr>
<td>silent</td>
<td><code>boolean</code></td>
<td>If the plugin will display a notification or not. Default is false. Optional</td>
</tr>
<tr>
<td>resume</td>
<td><code>boolean</code></td>
<td>Bring the app into the foreground if the notification is tapped. Optional</td>
</tr>
</tbody>
</table>


<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

