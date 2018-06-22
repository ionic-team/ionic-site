---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-preferences"
title: "App Preferences"
header_sub_title: "Class in module "
doc: "App Preferences"
docType: "class"
---

<h1 class="api-title">App Preferences</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-preferences/index.ts#L2">
  Improve this doc
</a>







<p>This plugin allows you to read and write app preferences</p>


<p>Repo:
  <a href="https://github.com/apla/me.apla.cordova.app-preferences">
    https://github.com/apla/me.apla.cordova.app-preferences
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-app-preferences
$ npm install --save @ionic-native/app-preferences
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>iOS</li><li>macOS</li><li>Windows 8</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppPreferences } from &#39;@ionic-native/app-preferences&#39;;

constructor(private appPreferences: AppPreferences) { }

...

this.appPreferences.fetch(&#39;key&#39;).then((res) =&gt; { console.log(res); });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="fetch" href="#fetch"></a><code>fetch(dict,&nbsp;key)</code></h3>




Get a preference value

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
      dict</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>
</td>
  </tr>
  
  <tr>
    <td>
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Key</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="store" href="#store"></a><code>store(dict,&nbsp;key,&nbsp;value)</code></h3>




Set a preference value

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
      dict</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>
</td>
  </tr>
  
  <tr>
    <td>
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Key</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Value</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove(dict,&nbsp;key)</code></h3>




Remove value from preferences

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
      dict</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>
</td>
  </tr>
  
  <tr>
    <td>
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Key</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="clearAll" href="#clearAll"></a><code>clearAll()</code></h3>




Clear preferences



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Show native preferences interface



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="watch" href="#watch"></a><code>watch(subscribe)</code></h3>




Show native preferences interface

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
      subscribe</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>true value to subscribe, false - unsubscribe</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable
</div><h3><a class="anchor" name="suite" href="#suite"></a><code>suite(suiteName)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Return named configuration context
In iOS you'll get a suite configuration, on Android — named file
Supports: Android, iOS
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
      suiteName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>suite name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> Custom object, bound to that suite
</div><h3><a class="anchor" name="iosSuite" href="#iosSuite"></a><code>iosSuite()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>





<h3><a class="anchor" name="cloudSync" href="#cloudSync"></a><code>cloudSync()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;<strong class="tag">Windows Phone 8</strong>&nbsp;</p>


Return cloud synchronized configuration context
Currently supports Windows and iOS/macOS


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> Custom object, bound to that suite
</div><h3><a class="anchor" name="defaults" href="#defaults"></a><code>defaults()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;<strong class="tag">Windows Phone 8</strong>&nbsp;</p>


Return default configuration context
Currently supports Windows and iOS/macOS


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> Custom Object, bound to that suite
</div>





