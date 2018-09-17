---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "tealium"
title: "Tealium"
header_sub_title: "Class in module "
doc: "Tealium"
docType: "class"
---

<h1 class="api-title">Tealium<span class="paid" title="paid">Paid</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/tealium/index.ts#L36">
  Improve this doc
</a>





<p class="paid-notice">
  This plugin might require a paid license, or might take a share of your app's earnings.
  Check the <a target="_blank" rel="nofollow" href="https://github.com/Tealium/cordova-plugin">plugin's repo</a> for more information.
</p>



<p>This plugin provides a TypeScript wrapper around the <a href="https://www.tealium.com">Tealium</a> Cordova plugin for Ionic Native.</p>
<p>For full documentation, see <a href="https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618">https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618</a></p>


<p>Repo:
  <a href="https://github.com/Tealium/cordova-plugin">
    https://github.com/Tealium/cordova-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ''
$ npm install --save @ionic-native/tealium
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { Tealium, TealConfig } from &#39;@ionic-native/tealium&#39;;


constructor(private tealium: Tealium) { }

...

let tealConfig: TealConfig = {
 account: &quot;&lt;your-account&gt;&quot;,
 profile: &quot;&lt;your-profile&gt;&quot;,
 environment: &quot;&lt;your-environment&gt;&quot;, // usually &quot;dev&quot;, &quot;qa&quot; or &quot;prod&quot;
 isLifecycleEnabled: &quot;true&quot;, // pass &quot;false&quot; to disable lifecycle tracking
 isCrashReporterEnabled: &quot;false&quot;, // pass &quot;true&quot; to enable crash reporter (Android only)
 instance: &quot;&lt;your-instance-name&quot; // an arbitrary instance name. use the same instance name for all subsequent API calls
}

this.tealium.init(tealConfig).then(()=&gt;{
  this.tealium.trackView({&quot;screen_name&quot;: &quot;homescreen&quot;});
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="init" href="#init"></a><code>init(config)</code></h3>


This function initializes the Tealium Cordova plugin. 
This should usually be done inside the "deviceReady" handler.
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
      config</td>
    <td>
      <code>TealConfig</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="trackView" href="#trackView"></a><code>trackView(dataObject,&nbsp;instanceName)</code></h3>


This function tracks a view event in the Tealium Cordova plugin
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
      dataObject</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The JSON data object containing your key-value pairs</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="trackEvent" href="#trackEvent"></a><code>trackEvent(dataObject,&nbsp;instanceName)</code></h3>


This function tracks a link event in the Tealium Cordova plugin
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
      dataObject</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The JSON data object containing your key-value pairs</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="track" href="#track"></a><code>track(eventType,&nbsp;dataObject,&nbsp;instanceName)</code></h3>


This function tracks a custom event in the Tealium Cordova plugin
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
      eventType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event type, link or view</p>
</td>
  </tr>
  
  <tr>
    <td>
      dataObject</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The JSON data object containing your key-value pairs</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="addPersistent" href="#addPersistent"></a><code>addPersistent(keyName,&nbsp;value,&nbsp;instanceName)</code></h3>


This function adds data to the Tealium persistent data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will be stored under for later retrieval</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The value to be stored as persistent data</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="addVolatile" href="#addVolatile"></a><code>addVolatile(keyName,&nbsp;value,&nbsp;instanceName)</code></h3>


This function adds data to the Tealium volatile data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will be stored under for later retrieval</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The value to be stored as volatile data</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="removeVolatile" href="#removeVolatile"></a><code>removeVolatile(keyName,&nbsp;instanceName)</code></h3>


This function removes data from the Tealium volatile data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will removed from the Tealium data store</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="removePersistent" href="#removePersistent"></a><code>removePersistent(keyName,&nbsp;instanceName)</code></h3>


This function removes data from the Tealium persistent data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will removed from the Tealium data store</p>
</td>
  </tr>
  
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
</div><h3><a class="anchor" name="getPersistent" href="#getPersistent"></a><code>getPersistent(keyName,&nbsp;instanceName,&nbsp;callback)</code></h3>


This function retrieves a value from the Tealium Persistent data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will retrieved from the Tealium data store</p>
</td>
  </tr>
  
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
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>A callback function that will be called when the data has been retrieved</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="getVolatile" href="#getVolatile"></a><code>getVolatile(keyName,&nbsp;instanceName,&nbsp;callback)</code></h3>


This function retrieves a value from the Tealium Volatile data store
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
      keyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name that this data will retrieved from the Tealium data store</p>
</td>
  </tr>
  
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
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>A callback function that will be called when the data has been retrieved</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="addRemoteCommand" href="#addRemoteCommand"></a><code>addRemoteCommand(commandName,&nbsp;instanceName,&nbsp;callback)</code></h3>


This function adds a remote command for later execution 
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
      commandName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The command name for this Remote Command</p>
</td>
  </tr>
  
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
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>A callback function that will be called when the data has been retrieved</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="getVisitorId" href="#getVisitorId"></a><code>getVisitorId()</code></h3>


This function retrieves the Tealium Visitor ID


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





<h2><a class="anchor" name="TealConfig" href="#TealConfig"></a>TealConfig</h2>

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
      account
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your Tealium account name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      profile
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your Tealium profile name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      environment
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your Tealium environment name (dev, qa, prod)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      instance
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Arbitrary instance name string. Must be consistent for all calls to Tealium API.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isLifecycleEnabled
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Enables (&quot;true&quot;) or disables (&quot;false&quot;) lifecycle reporting. Default true if omitted.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collectDispatchURL
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Not usually required. Sets a custom URL override for dispatches to UDH.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collectDispatchProfile
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your Tealium UDH profile. Only active if you do not have collectDispatchURL set.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isCrashReporterEnabled
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Enables (&quot;true&quot;) or disables (&quot;false&quot;) Crash Reporter module for Android. Default false if omitted.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





