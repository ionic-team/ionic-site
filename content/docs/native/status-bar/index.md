---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "status-bar"
title: "Status Bar"
header_sub_title: "Class in module "
doc: "Status Bar"
docType: "class"
---

<h1 class="api-title">Status Bar</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/status-bar/index.ts#L6">
  Improve this doc
</a>







<p>Manage the appearance of the native status bar.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-statusbar</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-statusbar">StatusBar plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-statusbar">
    https://github.com/apache/cordova-plugin-statusbar
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-statusbar
$ npm install --save @ionic-native/status-bar
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { StatusBar } from &#39;@ionic-native/status-bar&#39;;

constructor(private statusBar: StatusBar) { }

...

// let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString(&#39;#ffffff&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="overlaysWebView" href="#overlaysWebView"></a><code>overlaysWebView(doesOverlay)</code></h3>




Set whether the status bar overlays the main app view. The default
is true.

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
      doesOverlay</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Whether the status bar overlays the main app view.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="styleDefault" href="#styleDefault"></a><code>styleDefault()</code></h3>




Use the default statusbar (dark text, for light backgrounds).



<h3><a class="anchor" name="styleLightContent" href="#styleLightContent"></a><code>styleLightContent()</code></h3>




Use the lightContent statusbar (light text, for dark backgrounds).



<h3><a class="anchor" name="styleBlackTranslucent" href="#styleBlackTranslucent"></a><code>styleBlackTranslucent()</code></h3>




Use the blackTranslucent statusbar (light text, for dark backgrounds).



<h3><a class="anchor" name="styleBlackOpaque" href="#styleBlackOpaque"></a><code>styleBlackOpaque()</code></h3>




Use the blackOpaque statusbar (light text, for dark backgrounds).



<h3><a class="anchor" name="backgroundColorByName" href="#backgroundColorByName"></a><code>backgroundColorByName(colorName)</code></h3>




Set the status bar to a specific named color. Valid options:
black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

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
      colorName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the color (from above)</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="backgroundColorByHexString" href="#backgroundColorByHexString"></a><code>backgroundColorByHexString(hexString)</code></h3>




Set the status bar to a specific hex color (CSS shorthand supported!).

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

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
      hexString</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The hex value of the color.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hide the StatusBar



<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Show the StatusBar



<h3><a class="anchor" name="isVisible" href="#isVisible"></a><code>isVisible</code></h3>


Whether the StatusBar is currently visible or not.









