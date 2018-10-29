---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "android-permissions"
title: "Android Permissions"
header_sub_title: "Class in module "
doc: "Android Permissions"
docType: "class"
---

<h1 class="api-title">Android Permissions</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/android-permissions/index.ts#L1">
  Improve this doc
</a>







<p>This plugin is designed to support Android new permissions checking mechanism.</p>
<p>You can find all permissions here: <a href="https://developer.android.com/reference/android/Manifest.permission.html">https://developer.android.com/reference/android/Manifest.permission.html</a></p>


<p>Repo:
  <a href="https://github.com/NeoLSN/cordova-plugin-android-permissions">
    https://github.com/NeoLSN/cordova-plugin-android-permissions
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-android-permissions
$ npm install --save @ionic-native/android-permissions
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { AndroidPermissions } from &#39;@ionic-native/android-permissions&#39;;


constructor(private androidPermissions: AndroidPermissions) { }

...

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result =&gt; console.log(&#39;Has permission?&#39;,result.hasPermission),
  err =&gt; this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
</code></pre>
<p>Android 26 and above: due to Android 26&#39;s changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then <code>requestPermission()</code> and <code>requestPermissions()</code> will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="PERMISSION" href="#PERMISSION"></a><code>PERMISSION</code></h3>




<h3><a class="anchor" name="checkPermission" href="#checkPermission"></a><code>checkPermission(permission)</code></h3>


Check permission
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
      permission</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the permission</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission(permission)</code></h3>


Request permission
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
      permission</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the permission to request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestPermissions" href="#requestPermissions"></a><code>requestPermissions(permissions)</code></h3>


Request permissions
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
      permissions</td>
    <td>
      <code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>An array with permissions</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission(permission)</code></h3>


This function still works now, will not support in the future.
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
      permission</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the permission</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





