---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "screen-orientation"
title: "Screen Orientation"
header_sub_title: "Class in module "
doc: "Screen Orientation"
docType: "class"
---

<h1 class="api-title">Screen Orientation</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/screen-orientation/index.ts#L2">
  Improve this doc
</a>







<p>Cordova plugin to set/lock the screen orientation in a common way.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-screen-orientation</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-screen-orientation">Screen Orientation plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-screen-orientation">
    https://github.com/apache/cordova-plugin-screen-orientation
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-screen-orientation
$ npm install --save @ionic-native/screen-orientation
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ScreenOrientation } from &#39;@ionic-native/screen-orientation&#39;;

constructor(private screenOrientation: ScreenOrientation) { }

...


// get current
console.log(this.screenOrientation.type); // logs the current orientation, example: &#39;landscape&#39;

// set to landscape
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
this.screenOrientation.unlock();

// detect orientation changes
this.screenOrientation.onChange().subscribe(
   () =&gt; {
       console.log(&quot;Orientation Changed&quot;);
   }
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="ORIENTATIONS" href="#ORIENTATIONS"></a><code>ORIENTATIONS</code></h3>

Convenience enum for possible orientations



<h3><a class="anchor" name="onChange" href="#onChange"></a><code>onChange()</code></h3>




Listen to orientation change event


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;void&gt;</code> 
</div><h3><a class="anchor" name="lock" href="#lock"></a><code>lock(orientation)</code></h3>




Lock the orientation to the passed value.
See below for accepted values
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
      orientation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The orientation which should be locked. Accepted values see table above.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unlock" href="#unlock"></a><code>unlock()</code></h3>




Unlock and allow all orientations.



<h3><a class="anchor" name="type" href="#type"></a><code>type</code></h3>


Get the current orientation of the device.





<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Accepted orientation values:</p>
<table>
<thead>
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>portrait-primary</td>
<td>The orientation is in the primary portrait mode.</td>
</tr>
<tr>
<td>portrait-secondary</td>
<td>The orientation is in the secondary portrait mode.</td>
</tr>
<tr>
<td>landscape-primary</td>
<td>The orientation is in the primary landscape mode.</td>
</tr>
<tr>
<td>landscape-secondary</td>
<td>The orientation is in the secondary landscape mode.</td>
</tr>
<tr>
<td>portrait</td>
<td>The orientation is either portrait-primary or portrait-secondary (sensor).</td>
</tr>
<tr>
<td>landscape</td>
<td>The orientation is either landscape-primary or landscape-secondary (sensor).</td>
</tr>
</tbody>
</table>




