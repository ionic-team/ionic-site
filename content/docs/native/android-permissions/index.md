---
layout: "fluid/docs_base"
version: "3.6.1"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/android-permissions/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-android-permissions
$ npm install --save @ionic-native/android-permissions
</code></pre>
<p>Repo:
  <a href="https://github.com/NeoLSN/cordova-plugin-android-permissions">
    https://github.com/NeoLSN/cordova-plugin-android-permissions
  </a>
</p>


<p>This plugin is designed for supporting Android new permissions checking mechanism.
YOur will find all permissions here: <a href="https://developer.android.com/reference/android/Manifest.permission.html">https://developer.android.com/reference/android/Manifest.permission.html</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code>import { AndroidPermissions } from &#39;@ionic-native/android-permissions&#39;;


constructor(private androidPermissions: AndroidPermissions) { }

...

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  success =&gt; console.log(&#39;Permission geranted&#39;),
  err =&gt; this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
</code></pre>








<h2>Instance Members</h2>
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
      <code>array</code>
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





