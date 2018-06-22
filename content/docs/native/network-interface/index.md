---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "network-interface"
title: "Network Interface"
header_sub_title: "Class in module "
doc: "Network Interface"
docType: "class"
---

<h1 class="api-title">Network Interface</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/network-interface/index.ts#L1">
  Improve this doc
</a>







<p>Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.</p>


<p>Repo:
  <a href="https://github.com/salbahra/cordova-plugin-networkinterface">
    https://github.com/salbahra/cordova-plugin-networkinterface
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-networkinterface
$ npm install --save @ionic-native/network-interface
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>iOS</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NetworkInterface } from &#39;@ionic-native/network-interface&#39;;


constructor(private networkInterface: NetworkInterface) { }

...

this.networkInterface.getWiFiIPAddress(function (ip) { alert(ip); });
this.networkInterface.getCarrierIPAddress(function (ip) { alert(ip); });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getIPAddress" href="#getIPAddress"></a><code>getIPAddress()</code></h3>





<h3><a class="anchor" name="getWiFiIPAddress" href="#getWiFiIPAddress"></a><code>getWiFiIPAddress(success,&nbsp;error)</code></h3>


Gets the WiFi IP address
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
      success</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Callback used when successful</p>
</td>
  </tr>
  
  <tr>
    <td>
      error</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Callback used when failure</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getCarrierIPAddress" href="#getCarrierIPAddress"></a><code>getCarrierIPAddress(success,&nbsp;error)</code></h3>


Gets the wireless carrier IP address
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
      success</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Callback used when successful</p>
</td>
  </tr>
  
  <tr>
    <td>
      error</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Callback used when failure</p>
</td>
  </tr>
  </tbody>
</table>







