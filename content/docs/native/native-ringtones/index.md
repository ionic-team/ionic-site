---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "native-ringtones"
title: "Native Ringtones"
header_sub_title: "Class in module "
doc: "Native Ringtones"
docType: "class"
---

<h1 class="api-title">Native Ringtones<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/native-ringtones/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/TongZhangzt/cordova-plugin-native-ringtones/issues">plugin repo</a>.
</p>




<p>The plugin helps get the native ringtones list on Android or IOS devices.
And you can also use this plugin to play or stop the native ringtones and custom ringtones(added in the www folder).</p>


<p>Repo:
  <a href="https://github.com/TongZhangzt/cordova-plugin-native-ringtones">
    https://github.com/TongZhangzt/cordova-plugin-native-ringtones
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-native-ringtones
$ npm install --save @ionic-native/native-ringtones
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { NativeRingtones } from &#39;@ionic-native/native-ringtones&#39;;


constructor(private ringtones: NativeRingtones) { }

...
this.ringtones.getRingtone().then((ringtones) =&gt; { console.log(ringtones); });

this.ringtones.playRingtone(&#39;assets/ringtones/sound_1.caf&#39;);

this.ringtones.stopRingtone(&#39;assets/ringtones/sound_1.caf&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getRingtone" href="#getRingtone"></a><code>getRingtone()</code></h3>


Get the ringtone list of the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when ringtones found successfully
</div><h3><a class="anchor" name="playRingtone" href="#playRingtone"></a><code>playRingtone(ringtoneUri)</code></h3>


This function starts playing the ringtone
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
      ringtoneUri</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to the ringtone file</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="stopRingtone" href="#stopRingtone"></a><code>stopRingtone(ringtoneUri)</code></h3>


This function stops playing the ringtone
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
      ringtoneUri</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to the ringtone file</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





