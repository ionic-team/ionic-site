---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "appsflyer"
title: "Appsflyer"
header_sub_title: "Class in module "
doc: "Appsflyer"
docType: "class"
---

<h1 class="api-title">Appsflyer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/appsflyer/index.ts#L45">
  Improve this doc
</a>







<p>Appsflyer Cordova SDK support for Attribution</p>


<p>Repo:
  <a href="https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk">
    https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ Add to config.xml like stated on github and then start
$ npm install --save @ionic-native/appsflyer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Appsflyer } from &#39;@ionic-native/appsflyer&#39;;


constructor(private appsflyer: Appsflyer) { }

...


this.appsflyer.initSdk(options);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initSdk" href="#initSdk"></a><code>initSdk(options)</code></h3>


initialize the SDK
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
      options</td>
    <td>
      <code>AppsflyerOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackEvent" href="#trackEvent"></a><code>trackEvent(eventName,&nbsp;eventValues)</code></h3>




These in-app events help you track how loyal users discover your app, and attribute them to specific campaigns/media-sources. Please take the time define the event/s you want to measure to allow you to track ROI (Return on Investment) and LTV (Lifetime Value).
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
      <p>custom event name, is presented in your dashboard</p>
</td>
  </tr>
  
  <tr>
    <td>
      eventValues</td>
    <td>
      <code>AppsflyerEvent</code>
    </td>
    <td>
      <p>event details</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAppUserId" href="#setAppUserId"></a><code>setAppUserId(customerUserId)</code></h3>




Setting your own Custom ID enables you to cross-reference your own unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID is available in AppsFlyer CSV reports along with postbacks APIs for cross-referencing with you internal IDs.
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
      customerUserId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>user id</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="stopTracking" href="#stopTracking"></a><code>stopTracking(customerUserId)</code></h3>




Setting your own Custom ID enables you to cross-reference your own unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID is available in AppsFlyer CSV reports along with postbacks APIs for cross-referencing with you internal IDs.
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
      customerUserId</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>In some extreme cases you might want to shut down all SDK tracking due to legal and privacy compliance. This can be achieved with the isStopTracking API. Once this API is invoked, our SDK will no longer communicate with our servers and stop functioning.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="registerOnAppOpenAttribution" href="#registerOnAppOpenAttribution"></a><code>registerOnAppOpenAttribution()</code></h3>


Get the data from Attribution


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enableUninstallTracking" href="#enableUninstallTracking"></a><code>enableUninstallTracking(token)</code></h3>


Enables app uninstall tracking
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
      token</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>GCM/FCM ProjectNumber</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="updateServerUninstallToken" href="#updateServerUninstallToken"></a><code>updateServerUninstallToken(token)</code></h3>




Allows to pass GCM/FCM Tokens that where collected by third party plugins to the AppsFlyer server. Can be used for Uninstall Tracking.
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
      token</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>GCM/FCM ProjectNumber</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getAppsFlyerUID" href="#getAppsFlyerUID"></a><code>getAppsFlyerUID()</code></h3>


Get AppsFlyer’s proprietary Device ID. The AppsFlyer Device ID is the main ID used by AppsFlyer in Reports and APIs.



<h3><a class="anchor" name="deviceTrackingDisabled" href="#deviceTrackingDisabled"></a><code>deviceTrackingDisabled(disable)</code></h3>




End User Opt-Out (Optional) AppsFlyer provides you a method to opt‐out specific users from AppsFlyer analytics. This method complies with the latest privacy requirements and complies with Facebook data and privacy policies. Default is FALSE, meaning tracking is enabled by default.
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
      disable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to opt-out user from tracking</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAppInviteOneLinkID" href="#setAppInviteOneLinkID"></a><code>setAppInviteOneLinkID(oneLinkId)</code></h3>




Set AppsFlyer’s OneLink ID. Setting a valid OneLink ID will result in shortened User Invite links, when one is generated. The OneLink ID can be obtained on the AppsFlyer Dashboard.
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
      oneLinkId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>OneLink ID</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="generateInviteLink" href="#generateInviteLink"></a><code>generateInviteLink(options)</code></h3>


Allowing your existing users to invite their friends and contacts as new users to your app can be a key growth factor for your app. AppsFlyer allows you to track and attribute new installs originating from user invites within your app.
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
      options</td>
    <td>
      <code>AppsflyerInviteOptions</code>
    </td>
    <td>
      <p>Parameters for Invite link</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="trackCrossPromotionImpression" href="#trackCrossPromotionImpression"></a><code>trackCrossPromotionImpression(appId,&nbsp;campaign)</code></h3>




Use this call to track an impression use the following API call. Make sure to use the promoted App ID as it appears within the AppsFlyer dashboard.
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
      appId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Promoted Application ID</p>
</td>
  </tr>
  
  <tr>
    <td>
      campaign</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Promoted Campaign</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="trackAndOpenStore" href="#trackAndOpenStore"></a><code>trackAndOpenStore(appId,&nbsp;campaign,&nbsp;options)</code></h3>




Use this call to track the click and launch the app store's app page (via Browser)
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
      appId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Promoted Application ID</p>
</td>
  </tr>
  
  <tr>
    <td>
      campaign</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Promoted Campaign</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Additional Parameters to track</p>
</td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="AppsflyerOptions" href="#AppsflyerOptions"></a>AppsflyerOptions</h2>

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
      devKey
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Appsflyer Dev key</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      appId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Apple Application ID(for iOS only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isDebug
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>debug mode</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collectIMEI
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>optout of collection of IMEI</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collectAndroidID
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>optout of collection of collectAndroidID</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      onInstallConversionDataListener
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>default false     Accessing AppsFlyer Attribution / Conversion Data from the SDK (Deferred Deeplinking). Read more: Android, iOS. AppsFlyer plugin will return attribution data in onSuccess callback.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AppsflyerEvent" href="#AppsflyerEvent"></a>AppsflyerEvent</h2>

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


<h2><a class="anchor" name="AppsflyerInviteOptions" href="#AppsflyerInviteOptions"></a>AppsflyerInviteOptions</h2>

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
      channel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      userParams
    </td>
    <td>
      <code>{
    [x: string]: any;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





