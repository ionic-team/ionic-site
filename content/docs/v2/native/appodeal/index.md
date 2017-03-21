---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "appodeal"
title: "Appodeal"
header_sub_title: "Class in module "
doc: "Appodeal"
docType: "class"
---







<h1 class="api-title">
  
  Appodeal
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/appodeal/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add https://github.com/appodeal/appodeal-cordova-plugin
$ npm install --save @ionic-native/appodeal
</code></pre>
<p>Repo:
  <a href="https://github.com/appodeal/appodeal-cordova-plugin.git">
    https://github.com/appodeal/appodeal-cordova-plugin.git
  </a>
</p>

<!-- description -->

<p>Plugin to serve ads through native Appodeal SDKs</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>ios</li><li>android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Appodeal } from &#39;@ionic-native/appodeal&#39;;

constructor(private appodeal: Appodeal) {

   const appKey = &#39;&lt;your app key&gt;&#39;;
   appodeal.initialize(appKey, appodeal.AD_TYPES.REWARDED_VIDEO);
   appodeal.show(appodeal.AD_TYPES.REWARDED_VIDEO);

}
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="readonly"></div>
<h3>
  <code>readonly</code>
  

</h3>



<div id="initialize"></div>
<h3>
  <code>initialize(appKey,&nbsp;adType)</code>
  

</h3>
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
      appKey
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="isInitialized"></div>
<h3>
  <code>isInitialized()</code>
  

</h3>
check if SDK has been initialized


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="show"></div>
<h3>
  <code>show(adType)</code>
  

</h3>
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
      adType
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="showWithPlacement"></div>
<h3>
  <code>showWithPlacement(adType,&nbsp;placement)</code>
  

</h3>
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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      placement
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="hide"></div>
<h3>
  <code>hide(adType)</code>
  

</h3>
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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="confirm"></div>
<h3>
  <code>confirm(adType)</code>
  

</h3>
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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="isLoaded"></div>
<h3>
  <code>isLoaded(adType)</code>
  

</h3>
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
      adType
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="isPrecache"></div>
<h3>
  <code>isPrecache(adType)</code>
  

</h3>
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
      adType
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="setAutoCache"></div>
<h3>
  <code>setAutoCache(adType,&nbsp;autoCache)</code>
  

</h3>

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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      autoCache
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="cache"></div>
<h3>
  <code>cache(adType)</code>
  

</h3>
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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setOnLoadedTriggerBoth"></div>
<h3>
  <code>setOnLoadedTriggerBoth(set)</code>
  

</h3>

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
      set
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setSmartBanners"></div>
<h3>
  <code>setSmartBanners(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setBannerBackground"></div>
<h3>
  <code>setBannerBackground(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setBannerAnimation"></div>
<h3>
  <code>setBannerAnimation(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="set728x90Banners"></div>
<h3>
  <code>set728x90Banners(value)</code>
  

</h3>

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
      value
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setLogging"></div>
<h3>
  <code>setLogging(logging)</code>
  

</h3>
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
      logging
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setTesting"></div>
<h3>
  <code>setTesting(testing)</code>
  

</h3>
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
      testing
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="resetUUID"></div>
<h3>
  <code>resetUUID()</code>
  

</h3>
reset device ID



<div id="getVersion"></div>
<h3>
  <code>getVersion()</code>
  

</h3>
get version of Appdeal SDK



<div id="disableNetwork"></div>
<h3>
  <code>disableNetwork(network,&nbsp;adType)</code>
  

</h3>

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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="disableNetworkType"></div>
<h3>
  <code>disableNetworkType(network,&nbsp;adType)</code>
  

</h3>

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
      adType
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="disableLocationPermissionCheck"></div>
<h3>
  <code>disableLocationPermissionCheck()</code>
  

</h3>
disable Location permissions for Appodeal SDK



<div id="disableWriteExternalStoragePermissionCheck"></div>
<h3>
  <code>disableWriteExternalStoragePermissionCheck()</code>
  

</h3>
disable Storage permissions for Appodeal SDK



<div id="enableInterstitialCallbacks"></div>
<h3>
  <code>enableInterstitialCallbacks(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="enableSkippableVideoCallbacks"></div>
<h3>
  <code>enableSkippableVideoCallbacks(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="enableNonSkippableVideoCallbacks"></div>
<h3>
  <code>enableNonSkippableVideoCallbacks(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="enableBannerCallbacks"></div>
<h3>
  <code>enableBannerCallbacks(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="enableRewardedVideoCallbacks"></div>
<h3>
  <code>enableRewardedVideoCallbacks(enabled)</code>
  

</h3>
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
      enabled
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setCustomBooleanRule"></div>
<h3>
  <code>setCustomBooleanRule(name,&nbsp;value)</code>
  

</h3>

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
      name
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>name of rule</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setCustomIntegerRule"></div>
<h3>
  <code>setCustomIntegerRule(name,&nbsp;value)</code>
  

</h3>

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
      name
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>name of rule</p>

      
      
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

<div id="setCustomDoubleRule"></div>
<h3>
  <code>setCustomDoubleRule(name,&nbsp;value)</code>
  

</h3>
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

<div id="setCustomStringRule"></div>
<h3>
  <code>setCustomStringRule(name,&nbsp;value)</code>
  

</h3>
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
      name
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>name of rule</p>

      
      
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
<h3>
  <code>setUserId(id)</code>
  

</h3>
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
      id
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setEmail"></div>
<h3>
  <code>setEmail(email)</code>
  

</h3>
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
      email
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setBirthday"></div>
<h3>
  <code>setBirthday(birthday)</code>
  

</h3>
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
      birthday
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setAge"></div>
<h3>
  <code>setAge(age)</code>
  

</h3>
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
      age
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setGender"></div>
<h3>
  <code>setGender(gender)</code>
  

</h3>
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
      gender
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setOccupation"></div>
<h3>
  <code>setOccupation(occupation)</code>
  

</h3>
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
      occupation
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setRelation"></div>
<h3>
  <code>setRelation(relation)</code>
  

</h3>
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
      relation
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setSmoking"></div>
<h3>
  <code>setSmoking(smoking)</code>
  

</h3>
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
      smoking
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setAlcohol"></div>
<h3>
  <code>setAlcohol(alcohol)</code>
  

</h3>
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
      alcohol
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setInterests"></div>
<h3>
  <code>setInterests(interests)</code>
  

</h3>
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
      interests
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="onInterstitialLoaded"></div>
<h3>
  <code>onInterstitialLoaded()</code>
  

</h3>



<div id="onInterstitialFailedToLoad"></div>
<h3>
  <code>onInterstitialFailedToLoad()</code>
  

</h3>



<div id="onInterstitialShown"></div>
<h3>
  <code>onInterstitialShown()</code>
  

</h3>



<div id="onInterstitialClicked"></div>
<h3>
  <code>onInterstitialClicked()</code>
  

</h3>



<div id="onInterstitialClosed"></div>
<h3>
  <code>onInterstitialClosed()</code>
  

</h3>



<div id="onSkippableVideoLoaded"></div>
<h3>
  <code>onSkippableVideoLoaded()</code>
  

</h3>



<div id="onSkippableVideoFailedToLoad"></div>
<h3>
  <code>onSkippableVideoFailedToLoad()</code>
  

</h3>



<div id="onSkippableVideoShown"></div>
<h3>
  <code>onSkippableVideoShown()</code>
  

</h3>



<div id="onSkippableVideoFinished"></div>
<h3>
  <code>onSkippableVideoFinished()</code>
  

</h3>



<div id="onSkippableVideoClosed"></div>
<h3>
  <code>onSkippableVideoClosed()</code>
  

</h3>



<div id="onRewardedVideoLoaded"></div>
<h3>
  <code>onRewardedVideoLoaded()</code>
  

</h3>



<div id="onRewardedVideoFailedToLoad"></div>
<h3>
  <code>onRewardedVideoFailedToLoad()</code>
  

</h3>



<div id="onRewardedVideoShown"></div>
<h3>
  <code>onRewardedVideoShown()</code>
  

</h3>



<div id="onRewardedVideoFinished"></div>
<h3>
  <code>onRewardedVideoFinished()</code>
  

</h3>



<div id="onRewardedVideoClosed"></div>
<h3>
  <code>onRewardedVideoClosed()</code>
  

</h3>



<div id="onNonSkippableVideoLoaded"></div>
<h3>
  <code>onNonSkippableVideoLoaded()</code>
  

</h3>



<div id="onNonSkippableVideoFailedToLoad"></div>
<h3>
  <code>onNonSkippableVideoFailedToLoad()</code>
  

</h3>



<div id="onNonSkippableVideoShown"></div>
<h3>
  <code>onNonSkippableVideoShown()</code>
  

</h3>



<div id="onNonSkippableVideoFinished"></div>
<h3>
  <code>onNonSkippableVideoFinished()</code>
  

</h3>



<div id="onNonSkippableVideoClosed"></div>
<h3>
  <code>onNonSkippableVideoClosed()</code>
  

</h3>



<div id="onBannerClicked"></div>
<h3>
  <code>onBannerClicked()</code>
  

</h3>



<div id="onBannerFailedToLoad"></div>
<h3>
  <code>onBannerFailedToLoad()</code>
  

</h3>



<div id="onBannerLoaded"></div>
<h3>
  <code>onBannerLoaded()</code>
  

</h3>



<div id="onBannerShown"></div>
<h3>
  <code>onBannerShown()</code>
  

</h3>







<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

