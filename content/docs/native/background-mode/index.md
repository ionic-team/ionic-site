---
layout: "fluid/docs_base"
version: "4.16.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/background-mode/index.ts#L50">
  Improve this doc
</a>







<p>Cordova plugin to prevent the app from going to sleep while in background.
Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, visit: <a href="https://github.com/katzer/cordova-plugin-background-mode">https://github.com/katzer/cordova-plugin-background-mode</a></p>


<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-background-mode">
    https://github.com/katzer/cordova-plugin-background-mode
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-background-mode
$ npm install --save @ionic-native/background-mode
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>AmazonFire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BackgroundMode } from &#39;@ionic-native/background-mode&#39;;

constructor(private backgroundMode: BackgroundMode) { }

...

this.backgroundMode.enable();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
      <code>BackgroundModeConfiguration</code>
    </td>
    <td>
      <p>List of option to configure. See table below</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="configure" href="#configure"></a><code>configure(options)</code></h3>



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
      <code>BackgroundModeConfiguration</code>
    </td>
    <td>
      <p>Any options you want to update. See table below.<strong class="tag">Optional</strong></p>
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



<h3><a class="anchor" name="disableWebViewOptimizations" href="#disableWebViewOptimizations"></a><code>disableWebViewOptimizations()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Enable GPS-tracking in background (Android).



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


Exclude the app from the recent task list. Works on Android 5.0+.



<h3><a class="anchor" name="isScreenOff" href="#isScreenOff"></a><code>isScreenOff()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


The method works async instead of isActive() or isEnabled().


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="wakeUp" href="#wakeUp"></a><code>wakeUp()</code></h3>



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
      <code>string</code>
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
      <code>string</code>
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
      <p>This will look for <code>&lt;icon name&gt;.png</code> in platforms/android/res/drawable|mipmap</p>

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
      <p>Set the background color of the notification circle</p>

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
      <p>By default the app will come to foreground when tapping on the notification. If false, plugin won&#39;t come to foreground when tapped.</p>

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
      <p>When set to false makes the notifications visible on lock screen (Android 5.0+)</p>

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
      <p>Big text</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ticker
    </td>
    <td>
      <code>string</code>
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





