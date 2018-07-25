---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "app-center-crashes"
title: "App Center Crashes"
header_sub_title: "Class in module "
doc: "App Center Crashes"
docType: "class"
---

<h1 class="api-title">App Center Crashes</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-center-crashes/index.ts#L28">
  Improve this doc
</a>







<p>App Center Analytics helps you understand user behavior and customer engagement to improve your app.
The SDK automatically captures session count and device properties like model, OS version, etc.
You can define your own custom events to measure things that matter to you.
All the information captured is available in the App Center portal for you to analyze the data.</p>
<p>For more info, please see <a href="https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova">https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova</a></p>


<p>Repo:
  <a href="https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes">
    https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-appcenter-crashes
$ npm install --save @ionic-native/app-center-crashes
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppCenterCrashes } from &#39;@ionic-native/app-center-crashes&#39;;


constructor(private AppCenterCrashes: AppCenterCrashes) { }

...

this.AppCenterCrashes.setEnabled(true).then(() =&gt; {
   this.AppCenterCrashes.lastSessionCrashReport().then(report =&gt; {
       console.log(&#39;Crash report&#39;, report);
   });
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="generateTestCrash" href="#generateTestCrash"></a><code>generateTestCrash()</code></h3>


App Center Crashes provides you with an API to generate a test crash for easy testing of the SDK.
This API can only be used in test/beta apps and won't do anything in production apps.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  void

</div><h3><a class="anchor" name="hasCrashedInLastSession" href="#hasCrashedInLastSession"></a><code>hasCrashedInLastSession()</code></h3>


At any time after starting the SDK, you can check if the app crashed in the previous launch


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="lastSessionCrashReport" href="#lastSessionCrashReport"></a><code>lastSessionCrashReport()</code></h3>


Details about the last crash


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AppCenterCrashReport&gt;</code> 
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>


Check if App Center Crashes is enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="setEnabled" href="#setEnabled"></a><code>setEnabled(shouldEnable)</code></h3>


Enable or disable App Center Crashes at runtime
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





<h2><a class="anchor" name="AppCenterCrashReport" href="#AppCenterCrashReport"></a>AppCenterCrashReport</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      device
    </td>
    <td>
      <code>AppCenterCrashReportDevice</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      appStartTime
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      appErrorTime
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      signal
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      appProcessIdentifier
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AppCenterCrashReportDevice" href="#AppCenterCrashReportDevice"></a>AppCenterCrashReportDevice</h2>

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
      oem_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      os_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      app_version
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      time_zone_offset
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      carrier_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      screen_size
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      locale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      sdk_version
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      carrier_country
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      os_build
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      app_namespace
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      os_version
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      sdk_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      model
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      app_build
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





