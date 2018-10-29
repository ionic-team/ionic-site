---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-center-push"
title: "App Center Push"
header_sub_title: "Class in module "
doc: "App Center Push"
docType: "class"
---

<h1 class="api-title">App Center Push</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-center-push/index.ts#L2">
  Improve this doc
</a>







<p>For more info, please see <a href="https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova">https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova</a></p>


<p>Repo:
  <a href="https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push">
    https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-appcenter-push
$ npm install --save @ionic-native/app-center-push
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppCenterPush } from &#39;@ionic-native/app-center-push&#39;;


constructor(private appCenterPush: AppCenterPush) { }

...

this.appCenterPush.setEnabled(true).then(() =&gt; {
   this.appCenterPush.addEventListener(&#39;My Event&#39;).subscribe(pushNotification =&gt; {
       console.log(&#39;Recived push notification&#39;, pushNotification);
   });
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="addEventListener" href="#addEventListener"></a><code>addEventListener(eventName)</code></h3>




Subscribe to an event
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
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>


Check if App Center Push is enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="setEnabled" href="#setEnabled"></a><code>setEnabled(shouldEnable)</code></h3>


Enable or disable App Center Push at runtime
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





