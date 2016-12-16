---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "launch-navigator"
title: "Launch Navigator"
header_sub_title: "Class in module "
doc: "Launch Navigator"
docType: "class"
---







<h1 class="api-title">
  
  Launch Navigator
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/launchnavigator.ts#L57">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add uk.co.workingedge.phonegap.plugin.launchnavigator</code></pre>
<p>Repo:
  <a href="https://github.com/dpa99c/phonegap-launch-navigator.git">
    https://github.com/dpa99c/phonegap-launch-navigator.git
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the <a href="https://github.com/dpa99c/phonegap-launch-navigator">LaunchNavigator plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<p>Please refer to the plugin&#39;s repo for detailed usage. This docs page only explains the Native wrapper.</p>
<pre><code class="lang-typescript">import { LaunchNavigator, LaunchNavigatorOptions } from &#39;ionic-native&#39;;

let options: LaunchNavigatorOptions = {
  start: &#39;London, ON&#39;,
  app: LaunchNavigator.APPS.UBER
};

LaunchNavigator.navigate(&#39;Toronto, ON&#39;, options)
  .then(
    success =&gt; console.log(&#39;Launched navigator&#39;),
    error =&gt; console.log(&#39;Error launching navigator&#39;, error)
  );
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="navigate"></div>
<h3><code>navigate(destination,&nbsp;options)</code>
  
</h3>




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
      destination
      
      
    </td>
    <td>
      
<code>string</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      <p>Location name or coordinates (as string or array)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isAppAvailable"></div>
<h3><code>isAppAvailable(app)</code>
  
</h3>


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
      app
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="availableApps"></div>
<h3><code>availableApps()</code>
  
</h3>


Returns a list indicating which apps are installed and available on the current device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string[]&gt;</code> 
</div>



<div id="getAppDisplayName"></div>
<h3><code>getAppDisplayName(app)</code>
  
</h3>




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
      app
      
      
    </td>
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
  <b>Returns:</b> 
<code>string</code> 
</div>



<div id="getAppsForPlatform"></div>
<h3><code>getAppsForPlatform(platform)</code>
  
</h3>




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
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>string[]</code> 
</div>



<div id="supportsTransportMode"></div>
<h3><code>supportsTransportMode(app,&nbsp;platform)</code>
  
</h3>




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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>specified as a string, you can use one of the constants, e.g <code>LaunchNavigator.APP.GOOGLE_MAPS</code></p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="getTransportModes"></div>
<h3><code>getTransportModes(app,&nbsp;platform)</code>
  
</h3>




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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>string[]</code> 
</div>



<div id="supportsLaunchMode"></div>
<h3><code>supportsLaunchMode(app,&nbsp;platform)</code>
  
</h3>




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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="supportsStart"></div>
<h3><code>supportsStart(app,&nbsp;platform)</code>
  
</h3>




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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="supportsStartName"></div>
<h3><code>supportsStartName(app,&nbsp;platform)</code>
  
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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="supportsDestName"></div>
<h3><code>supportsDestName(app,&nbsp;platform)</code>
  
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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      platform
      
      
    </td>
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
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="userSelect"></div>
<h3><code>userSelect(destination,&nbsp;options)</code>
  
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
      destination
      
      
    </td>
    <td>
      
<code>string</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>LaunchNavigatorOptions</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="APP"></div>
<h3><code>APP()</code>
  
</h3>











<div id="TRANSPORT_MODE"></div>
<h3><code>TRANSPORT_MODE()</code>
  
</h3>












<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>name of the navigation app to use for directions. Specify using launchnavigator.APP constants. If not specified, defaults to User Selection.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      destinationName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>nickname to display in app for destination. e.g. &quot;Bob&#39;s House&quot;.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      start
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string | number[]</code>
    </td>
    <td>
      <p>Start point of the navigation</p>

    </td>
  </tr>
  
  <tr>
    <td>
      startName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>nickname to display in app for start . e.g. &quot;My House&quot;.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      transportMode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Transportation mode for navigation: &quot;driving&quot;, &quot;walking&quot; or &quot;transit&quot;. Defaults to &quot;driving&quot; if not specified.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      enableDebug
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If true, debug log output will be generated by the plugin. Defaults to false.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      extras
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>a key/value map of extra app-specific parameters. For example, to tell Google Maps on Android to display Satellite view in &quot;maps&quot; launch mode: <code>{&quot;t&quot;: &quot;k&quot;}</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      launchMode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(Android only) mode in which to open Google Maps app: &quot;maps&quot; or &quot;turn-by-turn&quot;. Defaults to &quot;maps&quot; if not specified. Specify using launchnavigator.LAUNCH_MODE constants.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      appSelectionDialogHeader
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display in the native picker which enables user to select which navigation app to launch. Defaults to &quot;Select app for navigation&quot; if not specified.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      appSelectionCancelButton
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display for the cancel button in the native picker which enables user to select which navigation app to launch. Defaults to &quot;Cancel&quot; if not specified.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      successCallback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

