---
layout: "fluid/docs_base"
version: "4.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "appodeal"
title: "Appodeal"
header_sub_title: "Class in module "
doc: "Appodeal"
docType: "class"
---

<h1 class="api-title">Appodeal</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/appodeal/index.ts#L2">
  Improve this doc
</a>







<p>Plugin to serve ads through native Appodeal SDKs</p>


<p>Repo:
  <a href="https://github.com/appodeal/appodeal-cordova-plugin">
    https://github.com/appodeal/appodeal-cordova-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/appodeal/appodeal-cordova-plugin.git
$ npm install --save @ionic-native/appodeal
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Appodeal } from &#39;@ionic-native/appodeal&#39;;

constructor(private appodeal: Appodeal) {

   const appKey = &#39;&lt;your app key&gt;&#39;;
   appodeal.initialize(appKey, appodeal.AD_TYPES.REWARDED_VIDEO);
   appodeal.show(appodeal.AD_TYPES.REWARDED_VIDEO);

}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="readonly" href="#readonly"></a><code>readonly</code></h3>




<h3><a class="anchor" name="initialize" href="#initialize"></a><code>initialize(appKey,&nbsp;adType)</code></h3>


initialize Appodeal SDK
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
      appKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isInitialized" href="#isInitialized"></a><code>isInitialized()</code></h3>


check if SDK has been initialized


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show(adType)</code></h3>


show ad of specified type
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="showWithPlacement" href="#showWithPlacement"></a><code>showWithPlacement(adType,&nbsp;placement)</code></h3>


show ad of specified type with placement options
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      placement</td>
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
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide(adType)</code></h3>


hide ad of specified type
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="canShow" href="#canShow"></a><code>canShow(adType)</code></h3>


confirm use of ads of specified type
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isLoaded" href="#isLoaded"></a><code>isLoaded(adType)</code></h3>


check if ad of specified type has been loaded
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isPrecache" href="#isPrecache"></a><code>isPrecache(adType)</code></h3>


check if ad of specified
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="setAutoCache" href="#setAutoCache"></a><code>setAutoCache(adType,&nbsp;autoCache)</code></h3>



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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      autoCache</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="cache" href="#cache"></a><code>cache(adType)</code></h3>


forcefully cache an ad by type
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
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setTriggerOnLoadedOnPrecache" href="#setTriggerOnLoadedOnPrecache"></a><code>setTriggerOnLoadedOnPrecache(set)</code></h3>



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
      set</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setSmartBanners" href="#setSmartBanners"></a><code>setSmartBanners(enabled)</code></h3>


enable or disable Smart Banners
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

<h3><a class="anchor" name="setBannerBackground" href="#setBannerBackground"></a><code>setBannerBackground(enabled)</code></h3>


enable or disable banner backgrounds
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

<h3><a class="anchor" name="setBannerAnimation" href="#setBannerAnimation"></a><code>setBannerAnimation(enabled)</code></h3>


enable or disable banner animations
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

<h3><a class="anchor" name="set728x90Banners" href="#set728x90Banners"></a><code>set728x90Banners(value)</code></h3>



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
      value</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setLogLevel" href="#setLogLevel"></a><code>setLogLevel(logging)</code></h3>


enable or disable logging
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
      logging</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setTesting" href="#setTesting"></a><code>setTesting(testing)</code></h3>


enable or disable testing mode
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
      testing</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="resetUUID" href="#resetUUID"></a><code>resetUUID()</code></h3>


reset device ID



<h3><a class="anchor" name="getVersion" href="#getVersion"></a><code>getVersion()</code></h3>


get version of Appdeal SDK



<h3><a class="anchor" name="disableNetwork" href="#disableNetwork"></a><code>disableNetwork(network,&nbsp;adType)</code></h3>



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
      network</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="disableNetworkType" href="#disableNetworkType"></a><code>disableNetworkType(network,&nbsp;adType)</code></h3>



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
      network</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      adType</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="disableLocationPermissionCheck" href="#disableLocationPermissionCheck"></a><code>disableLocationPermissionCheck()</code></h3>


disable Location permissions for Appodeal SDK



<h3><a class="anchor" name="disableWriteExternalStoragePermissionCheck" href="#disableWriteExternalStoragePermissionCheck"></a><code>disableWriteExternalStoragePermissionCheck()</code></h3>


disable Storage permissions for Appodeal SDK



<h3><a class="anchor" name="enableInterstitialCallbacks" href="#enableInterstitialCallbacks"></a><code>enableInterstitialCallbacks(enabled)</code></h3>


enable event listeners
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

<h3><a class="anchor" name="enableSkippableVideoCallbacks" href="#enableSkippableVideoCallbacks"></a><code>enableSkippableVideoCallbacks(enabled)</code></h3>


enable event listeners
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

<h3><a class="anchor" name="enableNonSkippableVideoCallbacks" href="#enableNonSkippableVideoCallbacks"></a><code>enableNonSkippableVideoCallbacks(enabled)</code></h3>


enable event listeners
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

<h3><a class="anchor" name="enableBannerCallbacks" href="#enableBannerCallbacks"></a><code>enableBannerCallbacks(enabled)</code></h3>


enable event listeners
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

<h3><a class="anchor" name="enableRewardedVideoCallbacks" href="#enableRewardedVideoCallbacks"></a><code>enableRewardedVideoCallbacks(enabled)</code></h3>


enable event listeners
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

<h3><a class="anchor" name="setCustomBooleanRule" href="#setCustomBooleanRule"></a><code>setCustomBooleanRule(name,&nbsp;value)</code></h3>



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
      <p>name of rule</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCustomIntegerRule" href="#setCustomIntegerRule"></a><code>setCustomIntegerRule(name,&nbsp;value)</code></h3>



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
      <p>name of rule</p>
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
  </tbody>
</table>

<h3><a class="anchor" name="setCustomDoubleRule" href="#setCustomDoubleRule"></a><code>setCustomDoubleRule(name,&nbsp;value)</code></h3>


set rule with float value
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
  </tbody>
</table>

<h3><a class="anchor" name="setCustomStringRule" href="#setCustomStringRule"></a><code>setCustomStringRule(name,&nbsp;value)</code></h3>


set rule with string value
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
      <p>name of rule</p>
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

<h3><a class="anchor" name="setUserId" href="#setUserId"></a><code>setUserId(id)</code></h3>


set ID preference in Appodeal for current user
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setEmail" href="#setEmail"></a><code>setEmail(email)</code></h3>


set Email preference in Appodeal for current user
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
      email</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setBirthday" href="#setBirthday"></a><code>setBirthday(birthday)</code></h3>


set Birthday preference in Appodeal for current user
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
      birthday</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAge" href="#setAge"></a><code>setAge(age)</code></h3>


et Age preference in Appodeal for current user
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
      age</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setGender" href="#setGender"></a><code>setGender(gender)</code></h3>


set Gender preference in Appodeal for current user
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
      gender</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setOccupation" href="#setOccupation"></a><code>setOccupation(occupation)</code></h3>


set Occupation preference in Appodeal for current user
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
      occupation</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setRelation" href="#setRelation"></a><code>setRelation(relation)</code></h3>


set Relation preference in Appodeal for current user
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
      relation</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setSmoking" href="#setSmoking"></a><code>setSmoking(smoking)</code></h3>


set Smoking preference in Appodeal for current user
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
      smoking</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAlcohol" href="#setAlcohol"></a><code>setAlcohol(alcohol)</code></h3>


set Alcohol preference in Appodeal for current user
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
      alcohol</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setInterests" href="#setInterests"></a><code>setInterests(interests)</code></h3>


set Interests preference in Appodeal for current user
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
      interests</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="onInterstitialLoaded" href="#onInterstitialLoaded"></a><code>onInterstitialLoaded()</code></h3>







<h3><a class="anchor" name="onInterstitialFailedToLoad" href="#onInterstitialFailedToLoad"></a><code>onInterstitialFailedToLoad()</code></h3>







<h3><a class="anchor" name="onInterstitialShown" href="#onInterstitialShown"></a><code>onInterstitialShown()</code></h3>







<h3><a class="anchor" name="onInterstitialClicked" href="#onInterstitialClicked"></a><code>onInterstitialClicked()</code></h3>







<h3><a class="anchor" name="onInterstitialClosed" href="#onInterstitialClosed"></a><code>onInterstitialClosed()</code></h3>







<h3><a class="anchor" name="onSkippableVideoLoaded" href="#onSkippableVideoLoaded"></a><code>onSkippableVideoLoaded()</code></h3>







<h3><a class="anchor" name="onSkippableVideoFailedToLoad" href="#onSkippableVideoFailedToLoad"></a><code>onSkippableVideoFailedToLoad()</code></h3>







<h3><a class="anchor" name="onSkippableVideoShown" href="#onSkippableVideoShown"></a><code>onSkippableVideoShown()</code></h3>







<h3><a class="anchor" name="onSkippableVideoFinished" href="#onSkippableVideoFinished"></a><code>onSkippableVideoFinished()</code></h3>







<h3><a class="anchor" name="onSkippableVideoClosed" href="#onSkippableVideoClosed"></a><code>onSkippableVideoClosed()</code></h3>







<h3><a class="anchor" name="onRewardedVideoLoaded" href="#onRewardedVideoLoaded"></a><code>onRewardedVideoLoaded()</code></h3>







<h3><a class="anchor" name="onRewardedVideoFailedToLoad" href="#onRewardedVideoFailedToLoad"></a><code>onRewardedVideoFailedToLoad()</code></h3>







<h3><a class="anchor" name="onRewardedVideoShown" href="#onRewardedVideoShown"></a><code>onRewardedVideoShown()</code></h3>







<h3><a class="anchor" name="onRewardedVideoFinished" href="#onRewardedVideoFinished"></a><code>onRewardedVideoFinished()</code></h3>







<h3><a class="anchor" name="onRewardedVideoClosed" href="#onRewardedVideoClosed"></a><code>onRewardedVideoClosed()</code></h3>







<h3><a class="anchor" name="onNonSkippableVideoLoaded" href="#onNonSkippableVideoLoaded"></a><code>onNonSkippableVideoLoaded()</code></h3>







<h3><a class="anchor" name="onNonSkippableVideoFailedToLoad" href="#onNonSkippableVideoFailedToLoad"></a><code>onNonSkippableVideoFailedToLoad()</code></h3>







<h3><a class="anchor" name="onNonSkippableVideoShown" href="#onNonSkippableVideoShown"></a><code>onNonSkippableVideoShown()</code></h3>







<h3><a class="anchor" name="onNonSkippableVideoFinished" href="#onNonSkippableVideoFinished"></a><code>onNonSkippableVideoFinished()</code></h3>







<h3><a class="anchor" name="onNonSkippableVideoClosed" href="#onNonSkippableVideoClosed"></a><code>onNonSkippableVideoClosed()</code></h3>







<h3><a class="anchor" name="onBannerClicked" href="#onBannerClicked"></a><code>onBannerClicked()</code></h3>







<h3><a class="anchor" name="onBannerFailedToLoad" href="#onBannerFailedToLoad"></a><code>onBannerFailedToLoad()</code></h3>







<h3><a class="anchor" name="onBannerLoaded" href="#onBannerLoaded"></a><code>onBannerLoaded()</code></h3>







<h3><a class="anchor" name="onBannerShown" href="#onBannerShown"></a><code>onBannerShown()</code></h3>







<h3><a class="anchor" name="getRewardParametersForPlacement" href="#getRewardParametersForPlacement"></a><code>getRewardParametersForPlacement()</code></h3>





<h3><a class="anchor" name="getRewardParameters" href="#getRewardParameters"></a><code>getRewardParameters()</code></h3>





<h3><a class="anchor" name="canShowWithPlacement" href="#canShowWithPlacement"></a><code>canShowWithPlacement()</code></h3>





<h3><a class="anchor" name="showTestScreen" href="#showTestScreen"></a><code>showTestScreen()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>





<h3><a class="anchor" name="muteVideosIfCallsMuted" href="#muteVideosIfCallsMuted"></a><code>muteVideosIfCallsMuted()</code></h3>





<h3><a class="anchor" name="setChildDirectedTreatment" href="#setChildDirectedTreatment"></a><code>setChildDirectedTreatment()</code></h3>











