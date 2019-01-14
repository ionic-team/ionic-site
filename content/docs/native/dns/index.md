---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "dns"
title: "DNS"
header_sub_title: "Class in module "
doc: "DNS"
docType: "class"
---

<h1 class="api-title">DNS</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/dns/index.ts#L1">
  Improve this doc
</a>







<p>A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device&#39;s DNS server configuration.</p>


<p>Repo:
  <a href="https://bitbucket.org/zegeba/cordova-plugin-dns">
    https://bitbucket.org/zegeba/cordova-plugin-dns
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-dns
$ npm install --save @ionic-native/dns
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DNS } from &#39;@ionic-native/dns&#39;;


constructor(private dns: DNS) { }

...
this.dns.resolve(hostname)
  .then(
    address =&gt; console.log(&#39;Resolved &#39; + hostname + &#39; to &#39; + address),
    error =&gt; console.log(&#39;Failed to resolve &#39; + hostname + &#39;: &#39; + error)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="resolve" href="#resolve"></a><code>resolve(hostname)</code></h3>


Resolve hostnames into an underlying network address.
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
      hostname</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves with the resolution.
</div>





