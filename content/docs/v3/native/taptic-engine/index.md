---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "taptic-engine"
title: "Taptic Engine"
header_sub_title: "Class in module "
doc: "Taptic Engine"
docType: "class"
---

<h1 class="api-title">Taptic Engine</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/taptic-engine/index.ts#L1">
  Improve this doc
</a>







<p>An Ionic plugin to use Taptic Engine API on iPhone 7, 7 Plus or newer.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine">
    https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-taptic-engine
$ npm install --save @ionic-native/taptic-engine
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { TapticEngine } from &#39;@ionic-native/taptic-engine&#39;;

...

constructor(private taptic: TapticEngine) { }

...

this.taptic.selection();

this.taptic.notification();

this.taptic.impact();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="selection" href="#selection"></a><code>selection()</code></h3>


Use selection feedback generators to indicate a change in selection.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves on success and rejects on error
</div><h3><a class="anchor" name="notification" href="#notification"></a><code>notification(options,&nbsp;options.type)</code></h3>


Use this to indicate success/failure/warning to the user.
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
      <code>Object</code>
    </td>
    <td>
      <p>should be of the type { type: &#39;success&#39; } (or &#39;warning&#39;/&#39;error&#39;)</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.type</td>
    <td>
      <code>&#39;success&#39;</code>|<code>&#39;warning&#39;</code>|<code>&#39;error&#39;</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves on success and rejects on error
</div><h3><a class="anchor" name="impact" href="#impact"></a><code>impact(options,&nbsp;options.type)</code></h3>


Use this to indicate success/failure/warning to the user.
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
      <code>Object</code>
    </td>
    <td>
      <p>should be of the type { style: &#39;light&#39; } (or &#39;medium&#39;/&#39;heavy&#39;)</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.type</td>
    <td>
      <code>&#39;light&#39;</code>|<code>&#39;medium&#39;</code>|<code>&#39;heavy&#39;</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves on success and rejects on error
</div><h3><a class="anchor" name="gestureSelectionStart" href="#gestureSelectionStart"></a><code>gestureSelectionStart()</code></h3>


Tell the taptic engine that a gesture for a selection change is starting.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="gestureSelectionChanged" href="#gestureSelectionChanged"></a><code>gestureSelectionChanged()</code></h3>


Tell the taptic engine that a selection changed during a gesture.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="gestureSelectionEnd" href="#gestureSelectionEnd"></a><code>gestureSelectionEnd()</code></h3>


Tell the taptic engine we are done with a gesture. This needs to be called lest resources are not properly recycled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





