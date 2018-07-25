---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "app-center-analytics"
title: "App Center Analytics"
header_sub_title: "Class in module "
doc: "App Center Analytics"
docType: "class"
---

<h1 class="api-title">App Center Analytics</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-center-analytics/index.ts#L5">
  Improve this doc
</a>







<p>App Center Analytics helps you understand user behavior and customer engagement to improve your app.
The SDK automatically captures session count and device properties like model, OS version, etc.
You can define your own custom events to measure things that matter to you.
All the information captured is available in the App Center portal for you to analyze the data.</p>
<p>For more info, please see <a href="https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova">https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova</a></p>


<p>Repo:
  <a href="https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics">
    https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-appcenter-analytics
$ npm install --save @ionic-native/app-center-analytics
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppCenterAnalytics } from &#39;@ionic-native/app-center-analytics&#39;;


constructor(private appCenterAnalytics: AppCenterAnalytics) { }

...

this.appCenterAnalytics.setEnabled(true).then(() =&gt; {
   this.appCenterAnalytics.trackEvent(&#39;My Event&#39;, { TEST: &#39;HELLO_WORLD&#39; }).then(() =&gt; {
       console.log(&#39;Custom event tracked&#39;);
   });
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="trackEvent" href="#trackEvent"></a><code>trackEvent(eventName,&nbsp;properties)</code></h3>


Tracks an custom event.
You can send up to 200 distinct event names. Also, there is a maximum limit of 256 characters per event name
and 64 characters per event property name and event property value.
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Event name</p>
</td>
  </tr>
  
  <tr>
    <td>
      properties</td>
    <td>
      <code>StringMap</code>
    </td>
    <td>
      <p>Event properties</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>


Check if App Center Analytics is enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="setEnabled" href="#setEnabled"></a><code>setEnabled(shouldEnable)</code></h3>


Enable or disable App Center Analytics at runtime
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
      shouldEnable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set value</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





<h2><a class="anchor" name="StringMap" href="#StringMap"></a>StringMap</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  </tbody>
</table>





