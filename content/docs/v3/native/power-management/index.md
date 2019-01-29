---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "power-management"
title: "Power Management"
header_sub_title: "Class in module "
doc: "Power Management"
docType: "class"
---

<h1 class="api-title">Power Management</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/power-management/index.ts#L1">
  Improve this doc
</a>







<p>The PowerManagement plugin offers access to the devices power-management functionality.
It should be used for applications which keep running for a long time without any user interaction.</p>


<p>Repo:
  <a href="https://github.com/Viras-/cordova-plugin-powermanagement">
    https://github.com/Viras-/cordova-plugin-powermanagement
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-powermanagement-orig
$ npm install --save @ionic-native/power-management@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { PowerManagement } from &#39;@ionic-native/power-management&#39;;

constructor(private powerManagement: PowerManagement) { }

...

this.powerManagement.acquire()
  .then(onSuccess)
  .catch(onError);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="acquire" href="#acquire"></a><code>acquire()</code></h3>


Acquire a wakelock by calling this.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="dim" href="#dim"></a><code>dim()</code></h3>


This acquires a partial wakelock, allowing the screen to be dimmed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="release" href="#release"></a><code>release()</code></h3>


Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setReleaseOnPause" href="#setReleaseOnPause"></a><code>setReleaseOnPause(set)</code></h3>


By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
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
      set</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





