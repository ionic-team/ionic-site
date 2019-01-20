---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "adjust"
title: "Adjust"
header_sub_title: "Class in module "
doc: "Adjust"
docType: "class"
---

<h1 class="api-title">Adjust</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/adjust/index.ts#L254">
  Improve this doc
</a>







<p>This is the Ionic Cordova SDK of Adjust™. You can read more about Adjust™ at adjust.com.</p>
<p>Requires Cordova plugin: <code>com.adjust.sdk</code>. For more info, please see the <a href="https://github.com/adjust/cordova_sdk">Adjust Cordova SDK</a></p>


<p>Repo:
  <a href="https://github.com/adjust/cordova_sdk">
    https://github.com/adjust/cordova_sdk
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com.adjust.sdk
$ npm install --save @ionic-native/adjust
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Adjust, AdjustConfig, AdjustEnvironment } from &#39;@ionic-native/adjust&#39;;

constructor(private adjust: Adjust) { }

...

const config = new AdjustConfig(&#39;APP-TOKEN-HERE&#39;, AdjustEnvironment.Sandbox);
config.logLevel = AdjustLogLevel.Verbose;
// Set other config properties.
adjust.create(config);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(config)</code></h3>




This method initializes Adjust SDK
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
      config</td>
    <td>
      <code>AdjustConig</code>
    </td>
    <td>
      <p>Adjust config object used as starting options</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="trackEvent" href="#trackEvent"></a><code>trackEvent(event)</code></h3>




This method tracks an event
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
      event</td>
    <td>
      <code>AdjustEvent</code>
    </td>
    <td>
      <p>Adjust event object to be tracked</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setOfflineMode" href="#setOfflineMode"></a><code>setOfflineMode(enabled)</code></h3>




This method sets offline mode on or off
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
      <p>set to true for offline mode on</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="appWillOpenUrl" href="#appWillOpenUrl"></a><code>appWillOpenUrl(url)</code></h3>




By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of the deeplink</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setEnabled" href="#setEnabled"></a><code>setEnabled(enabled)</code></h3>




You can disable/enable the Adjust SDK from tracking by invoking this method
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
      <p>set to false to disable SDK</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setPushToken" href="#setPushToken"></a><code>setPushToken(pushToken)</code></h3>




To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
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
      pushToken</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>push token value</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>


Check if the Adjust SDK is currently enabled by calling this function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="gdprForgetMe" href="#gdprForgetMe"></a><code>gdprForgetMe()</code></h3>




In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend



<h3><a class="anchor" name="getGoogleAdId" href="#getGoogleAdId"></a><code>getGoogleAdId()</code></h3>


Function used to get Google AdId


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise with google AdId value
</div><h3><a class="anchor" name="getAmazonAdId" href="#getAmazonAdId"></a><code>getAmazonAdId()</code></h3>


If you need to obtain the Amazon Advertising ID, you can make a call to this function.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise with anazib adv. ID
</div><h3><a class="anchor" name="getIdfa" href="#getIdfa"></a><code>getIdfa()</code></h3>


To obtain the IDFA, call this function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise with IDFA string value
</div><h3><a class="anchor" name="getAdid" href="#getAdid"></a><code>getAdid()</code></h3>


For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
In order to obtain this identifier, call this function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise with adid value
</div><h3><a class="anchor" name="getAttribution" href="#getAttribution"></a><code>getAttribution()</code></h3>


If you want to access information about a user's current attribution whenever you need it, you can make a call to this function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AdjustAttribution&gt;</code> Returns a promise with AdjustAttribution object
</div><h3><a class="anchor" name="getSdkVersion" href="#getSdkVersion"></a><code>getSdkVersion()</code></h3>


Get the information about version of the SDK used


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise with sdk version information
</div><h3><a class="anchor" name="addSessionCallbackParameter" href="#addSessionCallbackParameter"></a><code>addSessionCallbackParameter(key,&nbsp;value)</code></h3>




Method used to add session callback parameters
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
      
    </td>
    <td>
      <p>key</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      
    </td>
    <td>
      <p>value</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="removeSessionCallbackParameter" href="#removeSessionCallbackParameter"></a><code>removeSessionCallbackParameter(key)</code></h3>




Remove a specific session callback parameter by passing the desiring key to this method
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
      
    </td>
    <td>
      <p>key</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="resetSessionCallbackParameters" href="#resetSessionCallbackParameters"></a><code>resetSessionCallbackParameters()</code></h3>




If all keys and values from the session callback parameters have to be removed, call this method



<h3><a class="anchor" name="addSessionPartnerParameter" href="#addSessionPartnerParameter"></a><code>addSessionPartnerParameter(key,&nbsp;value)</code></h3>




Method used to add session partner parameters
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
      
    </td>
    <td>
      <p>key</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      
    </td>
    <td>
      <p>value</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="removeSessionPartnerParameter" href="#removeSessionPartnerParameter"></a><code>removeSessionPartnerParameter(key)</code></h3>




Remove a specific session partner parameter by passing the desiring key to this method
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
      
    </td>
    <td>
      <p>key</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="resetSessionPartnerParameters" href="#resetSessionPartnerParameters"></a><code>resetSessionPartnerParameters()</code></h3>




If all keys and values from the session partner parameters have to be removed, call this method



<h3><a class="anchor" name="sendFirstPackages" href="#sendFirstPackages"></a><code>sendFirstPackages()</code></h3>




This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.





<h2><a class="anchor" name="AdjustEvent" href="#AdjustEvent"></a>AdjustEvent</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setRevenue" href="#setRevenue"></a><code>setRevenue()</code></h3>




<h3><a class="anchor" name="addCallbackParameter" href="#addCallbackParameter"></a><code>addCallbackParameter()</code></h3>




<h3><a class="anchor" name="addPartnerParameter" href="#addPartnerParameter"></a><code>addPartnerParameter()</code></h3>




<h3><a class="anchor" name="setTransactionId" href="#setTransactionId"></a><code>setTransactionId()</code></h3>




<h3><a class="anchor" name="setCallbackId" href="#setCallbackId"></a><code>setCallbackId()</code></h3>




<h2><a class="anchor" name="AdjustConfig" href="#AdjustConfig"></a>AdjustConfig</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setAppSecret" href="#setAppSecret"></a><code>setAppSecret()</code></h3>




<h3><a class="anchor" name="setDelayStart" href="#setDelayStart"></a><code>setDelayStart()</code></h3>




<h3><a class="anchor" name="setLogLevel" href="#setLogLevel"></a><code>setLogLevel()</code></h3>




<h3><a class="anchor" name="setDefaultTracker" href="#setDefaultTracker"></a><code>setDefaultTracker()</code></h3>




<h3><a class="anchor" name="setSendInBackground" href="#setSendInBackground"></a><code>setSendInBackground()</code></h3>




<h3><a class="anchor" name="setShouldLaunchDeeplink" href="#setShouldLaunchDeeplink"></a><code>setShouldLaunchDeeplink()</code></h3>




<h3><a class="anchor" name="setEventBufferingEnabled" href="#setEventBufferingEnabled"></a><code>setEventBufferingEnabled()</code></h3>




<h3><a class="anchor" name="setUserAgent" href="#setUserAgent"></a><code>setUserAgent()</code></h3>




<h3><a class="anchor" name="setDeviceKnown" href="#setDeviceKnown"></a><code>setDeviceKnown()</code></h3>




<h3><a class="anchor" name="setProcessName" href="#setProcessName"></a><code>setProcessName()</code></h3>




<h3><a class="anchor" name="setAttributionCallbackListener" href="#setAttributionCallbackListener"></a><code>setAttributionCallbackListener()</code></h3>




<h3><a class="anchor" name="setEventTrackingSucceededCallbackListener" href="#setEventTrackingSucceededCallbackListener"></a><code>setEventTrackingSucceededCallbackListener()</code></h3>




<h3><a class="anchor" name="setEventTrackingFailedCallbackListener" href="#setEventTrackingFailedCallbackListener"></a><code>setEventTrackingFailedCallbackListener()</code></h3>




<h3><a class="anchor" name="setSessionTrackingSucceededCallbackListener" href="#setSessionTrackingSucceededCallbackListener"></a><code>setSessionTrackingSucceededCallbackListener()</code></h3>




<h3><a class="anchor" name="setSessionTrackingFailedCallbackListener" href="#setSessionTrackingFailedCallbackListener"></a><code>setSessionTrackingFailedCallbackListener()</code></h3>




<h3><a class="anchor" name="setDeferredDeeplinkCallbackListener" href="#setDeferredDeeplinkCallbackListener"></a><code>setDeferredDeeplinkCallbackListener()</code></h3>








<h2><a class="anchor" name="AdjustAttribution" href="#AdjustAttribution"></a>AdjustAttribution</h2>

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
      trackerToken
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      trackerName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      network
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      campaign
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adgroup
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      creative
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      clickLabel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdjustSessionSuccess" href="#AdjustSessionSuccess"></a>AdjustSessionSuccess</h2>

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
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      jsonResponse
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdjustSessionFailure" href="#AdjustSessionFailure"></a>AdjustSessionFailure</h2>

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
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      willRetry
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      jsonResponse
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdjustEventSuccess" href="#AdjustEventSuccess"></a>AdjustEventSuccess</h2>

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
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      eventToken
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      callbackId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      jsonResponse
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdjustEventFailure" href="#AdjustEventFailure"></a>AdjustEventFailure</h2>

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
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      eventToken
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      willRetry
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      callbackId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      jsonResponse
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





