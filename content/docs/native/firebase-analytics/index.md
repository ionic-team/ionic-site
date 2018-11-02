---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase-analytics"
title: "Firebase Analytics"
header_sub_title: "Class in module "
doc: "Firebase Analytics"
docType: "class"
---

<h1 class="api-title">Firebase Analytics<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase-analytics/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/chemerisuk/cordova-plugin-firebase-analytics/issues">plugin repo</a>.
</p>




<p>Cordova plugin for Firebase Analytics</p>
<p>Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.</p>
<p>NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.</p>


<p>Repo:
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-analytics">
    https://github.com/chemerisuk/cordova-plugin-firebase-analytics
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase-analytics
$ npm install --save @ionic-native/firebase-analytics
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FirebaseAnalytics } from &#39;@ionic-native/firebase-analytics&#39;;


constructor(private firebaseAnalytics: FirebaseAnalytics) { }

...

this.firebaseAnalytics.logEvent(&#39;page_view&#39;, {page: &quot;dashboard&quot;})
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(name,&nbsp;params)</code></h3>




Logs an app event.
Be aware of automatically collected events.
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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Some param to configure something</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setUserId" href="#setUserId"></a><code>setUserId(id)</code></h3>




Sets the user ID property.
This feature must be used in accordance with Google's Privacy Policy.
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user ID</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setUserProperty" href="#setUserProperty"></a><code>setUserProperty(name,&nbsp;value)</code></h3>




This feature must be used in accordance with Google's Privacy Policy.
Be aware of automatically collected user properties.
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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The property name</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The property value</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setEnabled" href="#setEnabled"></a><code>setEnabled(enabled)</code></h3>




Sets whether analytics collection is enabled for this app on this device.
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
      enabled</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setCurrentScreen" href="#setCurrentScreen"></a><code>setCurrentScreen(name)</code></h3>




Sets the current screen name, which specifies the current visual context in your app.
This helps identify the areas in your app where users spend their time and how they interact with your app.
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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the screen</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





