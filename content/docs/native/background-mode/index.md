---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/native"
path: ""
category: native
id: "background-mode"
title: "Background Mode"
header_sub_title: "Class in module "
doc: "Background Mode"
docType: "class"
---

<h1 class="api-title">Background Mode</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/background-mode/index.ts#L46">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-background-mode
$ npm install --save @ionic-native/background-mode
</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-background-mode">
    https://github.com/katzer/cordova-plugin-background-mode
  </a>
</p>


<p>Cordova plugin to prevent the app from going to sleep while in background.
Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: <a href="https://github.com/katzer/cordova-plugin-background-mode">https://github.com/katzer/cordova-plugin-background-mode</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { BackgroundMode } from &#39;@ionic-native/background-mode&#39;;

constructor(private backgroundMode: BackgroundMode) { }

...

this.backgroundMode.enable();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="enable" href="#enable"></a><code>enable()</code></h3>




Enable the background mode.
Once called, prevents the app from being paused while in background.



<h3><a class="anchor" name="disable" href="#disable"></a><code>disable()</code></h3>


Disable the background mode.
Once the background mode has been disabled, the app will be paused when in background.



<h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>




Checks if background mode is enabled or not.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> returns a boolean that indicates if the background mode is enabled.
</div><h3><a class="anchor" name="isActive" href="#isActive"></a><code>isActive()</code></h3>




Can be used to get the information if the background mode is active.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> returns a boolean that indicates if the background mode is active.
</div><h3><a class="anchor" name="setDefaults" href="#setDefaults"></a><code>setDefaults(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


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
      options</td>
    <td>
      <code>Configure</code>
    </td>
    <td>
      <p>List of option to configure. See table below</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="configure" href="#configure"></a><code>configure(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


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
      options</td>
    <td>
      <code>Configure</code>
    </td>
    <td>
      <p>Any options you want to update. See table below.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="on" href="#on"></a><code>on(event)</code></h3>




Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
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
      <p>Event name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="moveToBackground" href="#moveToBackground"></a><code>moveToBackground()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Android allows to programmatically move from foreground to background.



<h3><a class="anchor" name="moveToForeground" href="#moveToForeground"></a><code>moveToForeground()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Android allows to programmatically move from background to foreground.



<h3><a class="anchor" name="overrideBackButton" href="#overrideBackButton"></a><code>overrideBackButton()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Override the back button on Android to go to background instead of closing the app.



<h3><a class="anchor" name="excludeFromTaskList" href="#excludeFromTaskList"></a><code>excludeFromTaskList()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Exclude the app from the recent task list works on Android 5.0+.



<h3><a class="anchor" name="isScreenOff" href="#isScreenOff"></a><code>isScreenOff()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


The method works async instead of isActive() or isEnabled().



<h3><a class="anchor" name="wakeUp" href="#wakeUp"></a><code>wakeUp()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Turn screen on



<h3><a class="anchor" name="unlock" href="#unlock"></a><code>unlock()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Turn screen on and show app even locked









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
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Title of the background task</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Description of background task</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>This will look for <icon name>.png in platforms/android/res/drawable|mipmap</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      resume
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hidden
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bigText
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ticker
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The text that scrolls itself on statusbar</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      silent
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>if true plugin will not display a notification. Default is false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





