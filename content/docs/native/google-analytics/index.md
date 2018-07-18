---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "google-analytics"
title: "Google Analytics"
header_sub_title: "Class in module "
doc: "Google Analytics"
docType: "class"
---

<h1 class="api-title">Google Analytics</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/google-analytics/index.ts#L1">
  Improve this doc
</a>







<p>This plugin connects to Google&#39;s native Universal Analytics SDK
Prerequisites:</p>
<ul>
<li>A Cordova 3.0+ project for iOS and/or Android</li>
<li>A Mobile App property through the Google Analytics Admin Console</li>
<li>(Android) Google Play Services SDK installed via <a href="https://developer.android.com/sdk/installing/adding-packages.html">Android SDK Manager</a></li>
</ul>


<p>Repo:
  <a href="https://github.com/danwilson/google-analytics-plugin">
    https://github.com/danwilson/google-analytics-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-google-analytics
$ npm install --save @ionic-native/google-analytics
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { GoogleAnalytics } from &#39;@ionic-native/google-analytics&#39;;

constructor(private ga: GoogleAnalytics) { }

...

this.ga.startTrackerWithId(&#39;YOUR_TRACKER_ID&#39;)
   .then(() =&gt; {
     console.log(&#39;Google analytics is ready now&#39;);
        this.ga.trackView(&#39;test&#39;);
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
   })
   .catch(e =&gt; console.log(&#39;Error starting GoogleAnalytics&#39;, e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startTrackerWithId" href="#startTrackerWithId"></a><code>startTrackerWithId(id,&nbsp;interval)</code></h3>




In your 'deviceready' handler, set up your Analytics tracker.
https://developers.google.com/analytics/devguides/collection/analyticsjs/
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
      <p>Your Google Analytics Mobile App property</p>
</td>
  </tr>
  
  <tr>
    <td>
      interval</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional dispatch period in seconds. Defaults to 30.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setAllowIDFACollection" href="#setAllowIDFACollection"></a><code>setAllowIDFACollection(allow)</code></h3>


Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
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
      allow</td>
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
</div><h3><a class="anchor" name="setUserId" href="#setUserId"></a><code>setUserId(id)</code></h3>


Set a UserId
https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
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
      <p>User ID</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setAnonymizeIp" href="#setAnonymizeIp"></a><code>setAnonymizeIp(anonymize)</code></h3>


Set a anonymize Ip address
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
      anonymize</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to anonymize the IP Address</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setAppVersion" href="#setAppVersion"></a><code>setAppVersion(appVersion)</code></h3>


Set the app version
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
      appVersion</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>App version</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getVar" href="#getVar"></a><code>getVar(key)</code></h3>


Get a variable
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Variable</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setVar" href="#setVar"></a><code>setVar(key,&nbsp;value)</code></h3>


Set a variable
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Variable</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Parameter</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setOptOut" href="#setOptOut"></a><code>setOptOut(optout)</code></h3>


Set OptOut
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
      optout</td>
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
</div><h3><a class="anchor" name="debugMode" href="#debugMode"></a><code>debugMode()</code></h3>


Enable verbose logging


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackMetric" href="#trackMetric"></a><code>trackMetric(key,&nbsp;value)</code></h3>




Track custom metric
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
      key</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackView" href="#trackView"></a><code>trackView(title,&nbsp;campaignUrl,&nbsp;newSession)</code></h3>




Track a screen
https://developers.google.com/analytics/devguides/collection/analyticsjs/screens

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Screen title</p>
</td>
  </tr>
  
  <tr>
    <td>
      campaignUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Campaign url for measuring referrals</p>
</td>
  </tr>
  
  <tr>
    <td>
      newSession</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to create a new session</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addCustomDimension" href="#addCustomDimension"></a><code>addCustomDimension(key,&nbsp;value)</code></h3>


Add a Custom Dimension
https://developers.google.com/analytics/devguides/platform/customdimsmets
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
      key</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackEvent" href="#trackEvent"></a><code>trackEvent(category,&nbsp;action,&nbsp;label,&nbsp;value,&nbsp;newSession)</code></h3>




Track an event
https://developers.google.com/analytics/devguides/collection/analyticsjs/events
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
      category</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      action</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      label</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      newSession</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to create a new session</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackException" href="#trackException"></a><code>trackException(description,&nbsp;fatal)</code></h3>


Track an exception
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
      description</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      fatal</td>
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
</div><h3><a class="anchor" name="trackTiming" href="#trackTiming"></a><code>trackTiming(category,&nbsp;intervalInMilliseconds,&nbsp;variable,&nbsp;label)</code></h3>


Track User Timing (App Speed)
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
      category</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      intervalInMilliseconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      variable</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      label</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addTransaction" href="#addTransaction"></a><code>addTransaction(id,&nbsp;affiliation,&nbsp;revenue,&nbsp;tax,&nbsp;shipping,&nbsp;currencyCode)</code></h3>


Add a Transaction (Ecommerce)
https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
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
      </td>
  </tr>
  
  <tr>
    <td>
      affiliation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      revenue</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      tax</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      shipping</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      currencyCode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addTransactionItem" href="#addTransactionItem"></a><code>addTransactionItem(id,&nbsp;name,&nbsp;sku,&nbsp;category,&nbsp;price,&nbsp;quantity,&nbsp;currencyCode)</code></h3>


Add a Transaction Item (Ecommerce)
https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
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
      </td>
  </tr>
  
  <tr>
    <td>
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      sku</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      category</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      price</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      quantity</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      currencyCode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enableUncaughtExceptionReporting" href="#enableUncaughtExceptionReporting"></a><code>enableUncaughtExceptionReporting(shouldEnable)</code></h3>


Enable/disable automatic reporting of uncaught exceptions
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
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="dispatch" href="#dispatch"></a><code>dispatch()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Manually dispatch any data


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





