---
layout: "fluid/docs_base"
version: "3.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "launch-navigator"
title: "Launch Navigator"
header_sub_title: "Class in module "
doc: "Launch Navigator"
docType: "class"
---

<h1 class="api-title">Launch Navigator</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/launch-navigator/index.ts#L58">
  Improve this doc
</a>






<p>Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the <a href="https://github.com/dpa99c/phonegap-launch-navigator">LaunchNavigator plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/dpa99c/phonegap-launch-navigator">
    https://github.com/dpa99c/phonegap-launch-navigator
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
$ npm install --save @ionic-native/launch-navigator
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>Please refer to the plugin&#39;s repo for detailed usage. This docs page only explains the Native wrapper.</p>
<pre><code class="lang-typescript">import { LaunchNavigator, LaunchNavigatorOptions } from &#39;@ionic-native/launch-navigator&#39;;

constructor(private launchNavigator: LaunchNavigator) { }

...

let options: LaunchNavigatorOptions = {
  start: &#39;London, ON&#39;,
  app: LaunchNavigator.APPS.UBER
};

this.launchNavigator.navigate(&#39;Toronto, ON&#39;, options)
  .then(
    success =&gt; console.log(&#39;Launched navigator&#39;),
    error =&gt; console.log(&#39;Error launching navigator&#39;, error)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="navigate" href="#navigate"></a><code>navigate(destination,&nbsp;options)</code></h3>




Launches navigator app
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
      destination</td>
    <td>
      <code>string</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      <p>Location name or coordinates (as string or array)</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>LaunchNavigatorOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isAppAvailable" href="#isAppAvailable"></a><code>isAppAvailable(app)</code></h3>


Determines if the given app is installed and available on the current device.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="availableApps" href="#availableApps"></a><code>availableApps()</code></h3>


Returns a list indicating which apps are installed and available on the current device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string[]&gt;</code> 
</div><h3><a class="anchor" name="getAppDisplayName" href="#getAppDisplayName"></a><code>getAppDisplayName(app)</code></h3>




Returns the display name of the specified app.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getAppsForPlatform" href="#getAppsForPlatform"></a><code>getAppsForPlatform(platform)</code></h3>




Returns list of supported apps on a given platform.
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
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string[]</code> 
</div><h3><a class="anchor" name="supportsTransportMode" href="#supportsTransportMode"></a><code>supportsTransportMode(app,&nbsp;platform)</code></h3>




Indicates if an app on a given platform supports specification of transport mode.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>specified as a string, you can use one of the constants, e.g <code>LaunchNavigator.APP.GOOGLE_MAPS</code></p>
</td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="getTransportModes" href="#getTransportModes"></a><code>getTransportModes(app,&nbsp;platform)</code></h3>




Returns the list of transport modes supported by an app on a given platform.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string[]</code> 
</div><h3><a class="anchor" name="supportsLaunchMode" href="#supportsLaunchMode"></a><code>supportsLaunchMode(app,&nbsp;platform)</code></h3>




Indicates if an app on a given platform supports specification of launch mode.
Note that currently only Google Maps on Android does.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="supportsStart" href="#supportsStart"></a><code>supportsStart(app,&nbsp;platform)</code></h3>




Indicates if an app on a given platform supports specification of start location.
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="supportsStartName" href="#supportsStartName"></a><code>supportsStartName(app,&nbsp;platform)</code></h3>





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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="supportsDestName" href="#supportsDestName"></a><code>supportsDestName(app,&nbsp;platform)</code></h3>





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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      platform</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="userSelect" href="#userSelect"></a><code>userSelect(destination,&nbsp;options)</code></h3>





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
      destination</td>
    <td>
      <code>string</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>LaunchNavigatorOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="APP" href="#APP"></a><code>APP</code></h3>




<h3><a class="anchor" name="TRANSPORT_MODE" href="#TRANSPORT_MODE"></a><code>TRANSPORT_MODE</code></h3>










<h2><a class="anchor" name="LaunchNavigatorOptions" href="#LaunchNavigatorOptions"></a>LaunchNavigatorOptions</h2>

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
      app
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>name of the navigation app to use for directions. Specify using launchnavigator.APP constants. If not specified, defaults to User Selection.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      destinationName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>nickname to display in app for destination. e.g. &quot;Bob&#39;s House&quot;.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      start
    </td>
    <td>
      <code>string | number[]</code>
    </td>
    <td>
      <p>Start point of the navigation</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      startName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>nickname to display in app for start . e.g. &quot;My House&quot;.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      transportMode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Transportation mode for navigation: &quot;driving&quot;, &quot;walking&quot; or &quot;transit&quot;. Defaults to &quot;driving&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableDebug
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If true, debug log output will be generated by the plugin. Defaults to false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      extras
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>a key/value map of extra app-specific parameters. For example, to tell Google Maps on Android to display Satellite view in &quot;maps&quot; launch mode: <code>{&quot;t&quot;: &quot;k&quot;}</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      launchMode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(Android only) mode in which to open Google Maps app: &quot;maps&quot; or &quot;turn-by-turn&quot;. Defaults to &quot;maps&quot; if not specified. Specify using launchnavigator.LAUNCH_MODE constants.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      appSelectionDialogHeader
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display in the native picker which enables user to select which navigation app to launch. Defaults to &quot;Select app for navigation&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      appSelectionCancelButton
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display for the cancel button in the native picker which enables user to select which navigation app to launch. Defaults to &quot;Cancel&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      successCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





