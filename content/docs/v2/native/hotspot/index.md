---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "hotspot"
title: "Hotspot"
header_sub_title: "Class in module "
doc: "Hotspot"
docType: "class"
---







<h1 class="api-title">
  
  Hotspot
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/hotspot.ts#L102">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-hotspot</code></pre>
<p>Repo:
  <a href="https://github.com/hypery2k/cordova-hotspot-plugin">
    https://github.com/hypery2k/cordova-hotspot-plugin
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Hotspot, Network } from &#39;ionic-native&#39;;


Hotspot.scanWifi().then((networks: Array&lt;Network&gt;) =&gt; {
    console.log(networks);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="toggleWifi"></div>
<h3><code>toggleWifi()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="createHotspot"></div>
<h3><code>createHotspot(SSID,&nbsp;mode,&nbsp;password)</code>
  
</h3>


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
      SSID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>SSID of your new Access Point</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      mode
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>encryption mode (Open, WEP, WPA, WPA_PSK)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      password
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> - Promise to call once hotspot is started, or reject upon failure
</div>



<div id="startHotspot"></div>
<h3><code>startHotspot()</code>
  
</h3>


Turns on Access Point







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> - true if AP is started
</div>



<div id="configureHotspot"></div>
<h3><code>configureHotspot(SSID,&nbsp;mode,&nbsp;password)</code>
  
</h3>


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
      SSID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>SSID of your new Access Point</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      mode
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>encryption mode (Open, WEP, WPA, WPA_PSK)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      password
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> - Promise to call when hotspot is configured, or reject upon failure
</div>



<div id="stopHotspot"></div>
<h3><code>stopHotspot()</code>
  
</h3>


Turns off Access Point







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> - Promise to turn off the hotspot, true on success, false on failure
</div>



<div id="isHotspotEnabled"></div>
<h3><code>isHotspotEnabled()</code>
  
</h3>


Checks if hotspot is enabled







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> - Promise that hotspot is enabled, rejected if it is not enabled
</div>



<div id="getAllHotspotDevices"></div>
<h3><code>getAllHotspotDevices()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;HotspotDevice&gt;&gt;</code> 
</div>



<div id="connectToWifi"></div>
<h3><code>connectToWifi(ssid,&nbsp;password)</code>
  
</h3>


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
      ssid
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>SSID to connect</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      password
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Promise that connection to the WiFi network was successfull, rejected if unsuccessful
</div>



<div id="connectToWifiAuthEncrypt"></div>
<h3><code>connectToWifiAuthEncrypt(ssid,&nbsp;password,&nbsp;authentication,&nbsp;encryption)</code>
  
</h3>


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
      ssid
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>SSID to connect</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      password
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Password to use</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      authentication
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Authentication modes to use (LEAP, SHARED, OPEN)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      encryption
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Promise that connection to the WiFi network was successfull, rejected if unsuccessful
</div>



<div id="addWifiNetwork"></div>
<h3><code>addWifiNetwork(ssid,&nbsp;mode,&nbsp;password)</code>
  
</h3>


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
      ssid
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>SSID of network</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      mode
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Authentication mode of (Open, WEP, WPA, WPA_PSK)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      password
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Promise that adding the WiFi network was successfull, rejected if unsuccessful
</div>



<div id="removeWifiNetwork"></div>
<h3><code>removeWifiNetwork(ssid)</code>
  
</h3>


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
      ssid
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Promise that removing the WiFi network was successfull, rejected if unsuccessful
</div>



<div id="isConnectedToInternet"></div>
<h3><code>isConnectedToInternet()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isConnectedToInternetViaWifi"></div>
<h3><code>isConnectedToInternetViaWifi()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isWifiOn"></div>
<h3><code>isWifiOn()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isWifiSupported"></div>
<h3><code>isWifiSupported()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isWifiDirectSupported"></div>
<h3><code>isWifiDirectSupported()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="scanWifi"></div>
<h3><code>scanWifi()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;HotspotNetwork&gt;&gt;</code> 
</div>



<div id="scanWifiByLevel"></div>
<h3><code>scanWifiByLevel()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;HotspotNetwork&gt;&gt;</code> 
</div>



<div id="startWifiPeriodicallyScan"></div>
<h3><code>startWifiPeriodicallyScan()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="stopWifiPeriodicallyScan"></div>
<h3><code>stopWifiPeriodicallyScan()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getNetConfig"></div>
<h3><code>getNetConfig()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;HotspotNetworkConfig&gt;</code> 
</div>



<div id="getConnectionInfo"></div>
<h3><code>getConnectionInfo()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;HotspotConnectionInfo&gt;</code> 
</div>



<div id="pingHost"></div>
<h3><code>pingHost()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>



<div id="getMacAddressOfHost"></div>
<h3><code>getMacAddressOfHost(ip)</code>
  
</h3>


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
      ip
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> - A Promise for the MAC Address
</div>



<div id="isDnsLive"></div>
<h3><code>isDnsLive(ip)</code>
  
</h3>


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
      ip
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> - A Promise for whether the IP Address is reachable
</div>



<div id="isPortLive"></div>
<h3><code>isPortLive(ip)</code>
  
</h3>


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
      ip
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> - A Promise for whether the IP Address is reachable
</div>



<div id="isRooted"></div>
<h3><code>isRooted()</code>
  
</h3>


Checks if device is rooted







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> - A Promise for whether the device is rooted
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <p>ip
     Hotspot IP Address</p>

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
      <p>mac
     Hotspot MAC Address</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

