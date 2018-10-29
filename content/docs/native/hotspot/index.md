---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "hotspot"
title: "Hotspot"
header_sub_title: "Class in module "
doc: "Hotspot"
docType: "class"
---

<h1 class="api-title">Hotspot<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/hotspot/index.ts#L101">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/hypery2k/cordova-hotspot-plugin/issues">plugin repo</a>.
</p>




<p>A Cordova plugin for managing Hotspot networks on Android.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-hotspot</code>. For more info, please see the <a href="https://github.com/hypery2k/cordova-hotspot-plugin">Hotspot plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/hypery2k/cordova-hotspot-plugin">
    https://github.com/hypery2k/cordova-hotspot-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-hotspot
$ npm install --save @ionic-native/hotspot
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Hotspot, HotspotNetwork } from &#39;@ionic-native/hotspot&#39;;

constructor(private hotspot: Hotspot) { }

...


this.hotspot.scanWifi().then((networks: Array&lt;HotspotNetwork&gt;) =&gt; {
    console.log(networks);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="toggleWifi" href="#toggleWifi"></a><code>toggleWifi()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="createHotspot" href="#createHotspot"></a><code>createHotspot(SSID,&nbsp;mode,&nbsp;password)</code></h3>


Configures and starts hotspot with SSID and Password

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
      SSID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID of your new Access Point</p>
</td>
  </tr>
  
  <tr>
    <td>
      mode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>encryption mode (Open, WEP, WPA, WPA_PSK)</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>password for your new Access Point</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> - Promise to call once hotspot is started, or reject upon failure
</div><h3><a class="anchor" name="startHotspot" href="#startHotspot"></a><code>startHotspot()</code></h3>


Turns on Access Point



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> - true if AP is started
</div><h3><a class="anchor" name="configureHotspot" href="#configureHotspot"></a><code>configureHotspot(SSID,&nbsp;mode,&nbsp;password)</code></h3>


Configures hotspot with SSID and Password

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
      SSID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID of your new Access Point</p>
</td>
  </tr>
  
  <tr>
    <td>
      mode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>encryption mode (Open, WEP, WPA, WPA_PSK)</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>password for your new Access Point</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> - Promise to call when hotspot is configured, or reject upon failure
</div><h3><a class="anchor" name="stopHotspot" href="#stopHotspot"></a><code>stopHotspot()</code></h3>


Turns off Access Point



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> - Promise to turn off the hotspot, true on success, false on failure
</div><h3><a class="anchor" name="isHotspotEnabled" href="#isHotspotEnabled"></a><code>isHotspotEnabled()</code></h3>


Checks if hotspot is enabled



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> - Promise that hotspot is enabled, rejected if it is not enabled
</div><h3><a class="anchor" name="getAllHotspotDevices" href="#getAllHotspotDevices"></a><code>getAllHotspotDevices()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;HotspotDevice&gt;&gt;</code> 
</div><h3><a class="anchor" name="connectToWifi" href="#connectToWifi"></a><code>connectToWifi(ssid,&nbsp;password)</code></h3>


Connect to a WiFi network

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
      ssid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID to connect</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>password to use</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Promise that connection to the WiFi network was successfull, rejected if unsuccessful
</div><h3><a class="anchor" name="connectToWifiAuthEncrypt" href="#connectToWifiAuthEncrypt"></a><code>connectToWifiAuthEncrypt(ssid,&nbsp;password,&nbsp;authentication,&nbsp;encryption)</code></h3>


Connect to a WiFi network

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
      ssid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID to connect</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Password to use</p>
</td>
  </tr>
  
  <tr>
    <td>
      authentication</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Authentication modes to use (LEAP, SHARED, OPEN)</p>
</td>
  </tr>
  
  <tr>
    <td>
      encryption</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Encryption modes to use (CCMP, TKIP, WEP104, WEP40)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Promise that connection to the WiFi network was successfull, rejected if unsuccessful
</div><h3><a class="anchor" name="addWifiNetwork" href="#addWifiNetwork"></a><code>addWifiNetwork(ssid,&nbsp;mode,&nbsp;password)</code></h3>


Add a WiFi network

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
      ssid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID of network</p>
</td>
  </tr>
  
  <tr>
    <td>
      mode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Authentication mode of (Open, WEP, WPA, WPA_PSK)</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Password for network</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Promise that adding the WiFi network was successfull, rejected if unsuccessful
</div><h3><a class="anchor" name="removeWifiNetwork" href="#removeWifiNetwork"></a><code>removeWifiNetwork(ssid)</code></h3>


Remove a WiFi network

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
      ssid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SSID of network</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Promise that removing the WiFi network was successfull, rejected if unsuccessful
</div><h3><a class="anchor" name="isConnectedToInternet" href="#isConnectedToInternet"></a><code>isConnectedToInternet()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isConnectedToInternetViaWifi" href="#isConnectedToInternetViaWifi"></a><code>isConnectedToInternetViaWifi()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isWifiOn" href="#isWifiOn"></a><code>isWifiOn()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isWifiSupported" href="#isWifiSupported"></a><code>isWifiSupported()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isWifiDirectSupported" href="#isWifiDirectSupported"></a><code>isWifiDirectSupported()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="scanWifi" href="#scanWifi"></a><code>scanWifi()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;HotspotNetwork&gt;&gt;</code> 
</div><h3><a class="anchor" name="scanWifiByLevel" href="#scanWifiByLevel"></a><code>scanWifiByLevel()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;HotspotNetwork&gt;&gt;</code> 
</div><h3><a class="anchor" name="startWifiPeriodicallyScan" href="#startWifiPeriodicallyScan"></a><code>startWifiPeriodicallyScan()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopWifiPeriodicallyScan" href="#stopWifiPeriodicallyScan"></a><code>stopWifiPeriodicallyScan()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getNetConfig" href="#getNetConfig"></a><code>getNetConfig()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HotspotNetworkConfig&gt;</code> 
</div><h3><a class="anchor" name="getConnectionInfo" href="#getConnectionInfo"></a><code>getConnectionInfo()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HotspotConnectionInfo&gt;</code> 
</div><h3><a class="anchor" name="pingHost" href="#pingHost"></a><code>pingHost()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getMacAddressOfHost" href="#getMacAddressOfHost"></a><code>getMacAddressOfHost(ip)</code></h3>


Gets MAC Address associated with IP Address from ARP File

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
      ip</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>IP Address that you want the MAC Address of</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> - A Promise for the MAC Address
</div><h3><a class="anchor" name="isDnsLive" href="#isDnsLive"></a><code>isDnsLive(ip)</code></h3>


Checks if IP is live using DNS

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
      ip</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>IP Address you want to test</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> - A Promise for whether the IP Address is reachable
</div><h3><a class="anchor" name="isPortLive" href="#isPortLive"></a><code>isPortLive(ip)</code></h3>


Checks if IP is live using socket And PORT

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
      ip</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>IP Address you want to test</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> - A Promise for whether the IP Address is reachable
</div><h3><a class="anchor" name="isRooted" href="#isRooted"></a><code>isRooted()</code></h3>


Checks if device is rooted



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> - A Promise for whether the device is rooted
</div>





<h2><a class="anchor" name="HotspotConnectionInfo" href="#HotspotConnectionInfo"></a>HotspotConnectionInfo</h2>

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
      SSID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The service set identifier (SSID) of the current 802.11 network.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      BSSID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The basic service set identifier (BSSID) of the current access point.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      linkSpeed
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The current link speed in Mbps</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      IPAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The IP Address</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      networkID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Each configured network has a unique small integer ID, used to identify the network when performing operations on the supplicant.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HotspotNetwork" href="#HotspotNetwork"></a>HotspotNetwork</h2>

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
      SSID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Human readable network name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      BSSID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>MAC Address of the access point</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      frequency
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The primary 20 MHz frequency (in MHz) of the channel over which the client is communicating with the access point.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      level
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The detected signal level in dBm, also known as the RSSI.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Timestamp in microseconds (since boot) when this result was last seen.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      capabilities
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Describes the authentication, key management, and encryption schemes supported by the access point.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HotspotNetworkConfig" href="#HotspotNetworkConfig"></a>HotspotNetworkConfig</h2>

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
      deviceIPAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Device IP Address</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      deviceMacAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Device MAC Address</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      gatewayIPAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Gateway IP Address</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      gatewayMacAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Gateway MAC Address</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HotspotDevice" href="#HotspotDevice"></a>HotspotDevice</h2>

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
      ip
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hotspot IP Address</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      mac
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hotspot MAC Address</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





