---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "zeroconf"
title: "Zeroconf"
header_sub_title: "Class in module "
doc: "Zeroconf"
docType: "class"
---

<h1 class="api-title">Zeroconf</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/zeroconf/index.ts#L18">
  Improve this doc
</a>







<p>This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.</p>


<p>Repo:
  <a href="https://github.com/becvert/cordova-plugin-zeroconf">
    https://github.com/becvert/cordova-plugin-zeroconf
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-zeroconf
$ npm install --save @ionic-native/zeroconf
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Zeroconf } from &#39;@ionic-native/zeroconf&#39;;

constructor(private zeroconf: Zeroconf) { }

...

// watch for services of a specified type
this.zeroconf.watch(&#39;_http._tcp.&#39;, &#39;local.&#39;).subscribe(result =&gt; {
  if (result.action == &#39;added&#39;) {
    console.log(&#39;service added&#39;, result.service);
  } else {
    console.log(&#39;service removed&#39;, result.service);
  }
});

// publish a zeroconf service of your own
this.zeroconf.register(&#39;_http._tcp.&#39;, &#39;local.&#39;, &#39;Becvert\&#39;s iPad&#39;, 80, {
  &#39;foo&#39;: &#39;bar&#39;
}).then(result =&gt; {
  console.log(&#39;Service registered&#39;, result.service);
});


// unregister your service
this.zeroconf.unregister(&#39;_http._tcp.&#39;, &#39;local.&#39;, &#39;Becvert\&#39;s iPad&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getHostname" href="#getHostname"></a><code>getHostname()</code></h3>


Returns this device's hostname.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="register" href="#register"></a><code>register(type,&nbsp;domain,&nbsp;name,&nbsp;port,&nbsp;txtRecord)</code></h3>


Publishes a new service.
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Service type name, e.g. &quot;_http._tcp&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      domain</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Domain scope of the service, typically &quot;local.&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Unqualified service instance name.</p>
</td>
  </tr>
  
  <tr>
    <td>
      port</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Local port on which the service runs.</p>
</td>
  </tr>
  
  <tr>
    <td>
      txtRecord</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Arbitrary key/value pairs describing the service.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ZeroconfResult&gt;</code> Returns a Promise that resolves with the registered service.
</div><h3><a class="anchor" name="unregister" href="#unregister"></a><code>unregister(type,&nbsp;domain,&nbsp;name)</code></h3>


Unregisters a service.
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Service type name, e.g. &quot;_http._tcp&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      domain</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Domain scope of the service, typically &quot;local.&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Unqualified service instance name.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Unregisters all published services.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="watch" href="#watch"></a><code>watch(type,&nbsp;domain)</code></h3>




Starts watching for services of the specified type.
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Service type name, e.g. &quot;_http._tcp&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      domain</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Domain scope of the service, typically &quot;local.&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;ZeroconfResult&gt;</code> Returns an Observable that notifies of each service added or removed.
</div><h3><a class="anchor" name="unwatch" href="#unwatch"></a><code>unwatch(type,&nbsp;domain)</code></h3>


Stops watching for services of the specified type.
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Service type name, e.g. &quot;_http._tcp&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      domain</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Domain scope of the service, typically &quot;local.&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>


Closes the service browser and stops watching.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="reInit" href="#reInit"></a><code>reInit()</code></h3>


Re-initializes the plugin to clean service & browser state.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="registerAddressFamily" href="#registerAddressFamily"></a><code>registerAddressFamily</code></h3>

Family of addresses to register: ipv4, ipv6 or any.



<h3><a class="anchor" name="watchAddressFamily" href="#watchAddressFamily"></a><code>watchAddressFamily</code></h3>

Family of addresses to watch for: ipv4, ipv6 or any.









