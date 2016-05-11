---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "google-analytics"
title: "Google Analytics"
header_sub_title: "Class in module "
doc: "Google Analytics"
docType: "class"
---








<h1 class="api-title">

  
  Google Analytics
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/googleanalytics.ts#L2'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-google-analytics</code></pre>
<p>Repo:
  <a href="https://github.com/danwilson/google-analytics-plugin">
    https://github.com/danwilson/google-analytics-plugin
  </a>
</p>

<!-- description -->

<p>This plugin connects to Google&#39;s native Universal Analytics SDK
Prerequisites:</p>
<ul>
<li>A Cordova 3.0+ project for iOS and/or Android</li>
<li>A Mobile App property through the Google Analytics Admin Console</li>
<li>(Android) Google Play Services SDK installed via <a href="https://developer.android.com/sdk/installing/adding-packages.html">Android SDK Manager</a></li>
</ul>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="startTrackerWithId"></div>
<h3><code>startTrackerWithId(id)</code>

</h3>

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
      id
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Your Google Analytics Mobile App property</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="trackView"></div>
<h3><code>trackView(title)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Screen title</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="trackEvent"></div>
<h3><code>trackEvent(category,&nbsp;action,&nbsp;label,&nbsp;value)</code>

</h3>

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
      category
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      action
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      label
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="trackException"></div>
<h3><code>trackException(description,&nbsp;fatal)</code>

</h3>

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
      description
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      fatal
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="trackTiming"></div>
<h3><code>trackTiming(category,&nbsp;intervalInMilliseconds,&nbsp;variable,&nbsp;label)</code>

</h3>

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
      category
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      intervalInMilliseconds
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      variable
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      label
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="addTransaction"></div>
<h3><code>addTransaction(id,&nbsp;affiliation,&nbsp;revenue,&nbsp;tax,&nbsp;shipping,&nbsp;currencyCode)</code>

</h3>

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
      affiliation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      revenue
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      tax
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      shipping
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      currencyCode
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="addTransactionItem"></div>
<h3><code>addTransactionItem(id,&nbsp;name,&nbsp;sku,&nbsp;category,&nbsp;price,&nbsp;quantity,&nbsp;currencyCode)</code>

</h3>

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
      name
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      sku
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      category
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      price
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      quantity
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      currencyCode
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="addCustomDimension"></div>
<h3><code>addCustomDimension(key,&nbsp;value)</code>

</h3>

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
      key
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setUserId"></div>
<h3><code>setUserId(id)</code>

</h3>

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
      id
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="debugMode"></div>
<h3><code>debugMode()</code>

</h3>

Enable verbose logging










<div id="enableUncaughtExceptionReporting"></div>
<h3><code>enableUncaughtExceptionReporting(shouldEnable)</code>

</h3>

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
      shouldEnable
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

