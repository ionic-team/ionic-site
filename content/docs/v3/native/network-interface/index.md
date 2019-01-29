---
layout: "fluid/docs_base"
version: "4.20.0"
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
$ npm install --save @ionic-native/network-interface@4
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

constructor( private networkInterface: NetworkInterface ) {

  this.networkInterface.getWiFiIPAddress()
    .then(address =&gt; console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error =&gt; console.error(`Unable to get IP: ${error}`));

  this.networkInterface.getCarrierIPAddress()
    .then(address =&gt; console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error =&gt; console.error(`Unable to get IP: ${error}`));

  const url = &#39;www.github.com&#39;;
  this.networkInterface.getHttpProxyInformation(url)
    .then(proxy =&gt; console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
    .catch(error =&gt; console.error(`Unable to get proxy info: ${error}`));
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getWiFiIPAddress" href="#getWiFiIPAddress"></a><code>getWiFiIPAddress()</code></h3>


Gets the WiFi IP address


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the IP address information.
</div><h3><a class="anchor" name="getCarrierIPAddress" href="#getCarrierIPAddress"></a><code>getCarrierIPAddress()</code></h3>


Gets the wireless carrier IP address


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the IP address information.
</div><h3><a class="anchor" name="getHttpProxyInformation" href="#getHttpProxyInformation"></a><code>getHttpProxyInformation(message)</code></h3>


Gets the relevant proxies for the passed URL in order of application
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
      message</td>
    <td>
      <code>url</code>
    </td>
    <td>
      <p>The message to display.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the proxy information.
</div>





