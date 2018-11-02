---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "tealiumadidentifier"
title: "TealiumAdIdentifier"
header_sub_title: "Class in module "
doc: "TealiumAdIdentifier"
docType: "class"
---

<h1 class="api-title">TealiumAdIdentifier<span class="paid" title="paid">Paid</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/tealium-adidentifier/index.ts#L1">
  Improve this doc
</a>





<p class="paid-notice">
  This plugin might require a paid license, or might take a share of your app's earnings.
  Check the <a target="_blank" rel="nofollow" href="https://github.com/Tealium/cordova-plugin">plugin's repo</a> for more information.
</p>



<p>This module depends on the <a href="https://github.com/tealium/cordova-plugin">Tealium Cordova Plugin</a>. Without it, this module will not do anything.
Makes the IDFA and Google Ad Identifier available in the Tealium data layer.</p>


<p>Repo:
  <a href="https://github.com/Tealium/cordova-plugin">
    https://github.com/Tealium/cordova-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ''
$ npm install --save @ionic-native/tealium-adidentifier
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { TealiumAdIdentifier } from &#39;@ionic-native/tealium-adidentifier&#39;;


constructor(private adIdentifier: TealiumAdIdentifier) { }

...


this.adIdentifier.setPersistent(&quot;main&quot;);
this.adIdentifier.setVolatile(&quot;main&quot;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setPersistent" href="#setPersistent"></a><code>setPersistent(instanceName)</code></h3>


This function stores the ad identifier information as persistent data
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
      instanceName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your arbitrary Tealium instance name provided at init time</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="setVolatile" href="#setVolatile"></a><code>setVolatile(instanceName)</code></h3>


This function stores the ad identifier information as volatile data
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
      instanceName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your arbitrary Tealium instance name provided at init time</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





