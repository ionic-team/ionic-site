---
layout: "fluid/docs_base"
version: "4.12.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/launch-navigator/index.ts#L237">
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
<h3><a class="anchor" name="APP" href="#APP"></a><code>APP</code></h3>




<h3><a class="anchor" name="TRANSPORT_MODE" href="#TRANSPORT_MODE"></a><code>TRANSPORT_MODE</code></h3>




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

<h3><a class="anchor" name="appSelection" href="#appSelection"></a><code>appSelection</code></h3>










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
      successCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A callback to invoke when the navigation app is successfully launched.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
    </td>
    <td>
      <code>(error: string) =&gt; void</code>
    </td>
    <td>
      <p>A callback to invoke if an error is encountered while launching the app.
A single string argument containing the error message will be passed in.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      app
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>name of the navigation app to use for directions.
Specify using launchnavigator.APP constants.
e.g. <code>launchnavigator.APP.GOOGLE_MAPS</code>.
If not specified, defaults to User Selection.</p>

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
      <p>Start point of the navigation.
If not specified, the current device location will be used.
Either:</p>
<ul>
<li>a {string} containing the address. e.g. &quot;Buckingham Palace, London&quot;</li>
<li>a {string} containing a latitude/longitude coordinate. e.g. &quot;50.1. -4.0&quot;</li>
<li>an {array}, where the first element is the latitude and the second element is a longitude, as decimal numbers. e.g. [50.1, -4.0]</li>
</ul>

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
      launchModeGoogleMaps
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(Android only) mode in which to open Google Maps app.
<code>launchnavigator.LAUNCH_MODE.MAPS</code> or <code>launchnavigator.LAUNCH_MODE.TURN_BY_TURN</code>
Defaults to <code>launchnavigator.LAUNCH_MODE.MAPS</code> if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      launchModeAppleMaps
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(iOS only) method to use to open Apple Maps app.
<code>launchnavigator.LAUNCH_MODE.URI_SCHEME</code> or <code>launchnavigator.LAUNCH_MODE.MAPKIT</code>
Defaults to <code>launchnavigator.LAUNCH_MODE.URI_SCHEME</code> if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableGeolocation
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If true, and input location type(s) doesn&#39;t match those required by the app, use geocoding to obtain the address/coords as required. Defaults to true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      appSelection
    </td>
    <td>
      <code>AppSelectionOptions</code>
    </td>
    <td>
      <p>options related to the default native actionsheet picker which enables user to select which navigation app to launch if <code>app</code> is not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PromptsOptions" href="#PromptsOptions"></a>PromptsOptions</h2>

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
      callback
    </td>
    <td>
      <code>(rememberChoice: boolean) =&gt; void</code>
    </td>
    <td>
      <p>a function to pass the user&#39;s decision whether to remember their choice of app.
This will be passed a single boolean value indicating the user&#39;s decision.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      headerText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display in the native prompt header asking user whether to remember their choice.
Defaults to &quot;Remember your choice?&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bodyText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display in the native prompt body asking user whether to remember their choice.
Defaults to &quot;Use the same app for navigating next time?&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      yesButtonText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display for the Yes button.
Defaults to &quot;Yes&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      noButtonText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display for the No button.
Defaults to &quot;No&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="RememberChoiceOptions" href="#RememberChoiceOptions"></a>RememberChoiceOptions</h2>

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
      enabled
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>whether to remember user choice of app for next time, instead of asking again for user choice.
<code>&quot;prompt&quot;</code> - Prompt user to decide whether to remember choice.</p>
<ul>
<li>Default value if unspecified.</li>
<li>If <code>promptFn</code> is defined, this will be used for user confirmation.</li>
<li>Otherwise (by default), a native dialog will be displayed to ask user.
<code>false</code> - Do not remember user choice.
<code>true</code> - Remember user choice.</li>
</ul>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      promptFn
    </td>
    <td>
      <code>(callback: (rememberChoice: boolean) =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>a function which asks the user whether to remember their choice of app.
If this is defined, then the default dialog prompt will not be shown, allowing for a custom UI for asking the user.
This will be passed a callback function which should be invoked with a single boolean argument which indicates the user&#39;s decision to remember their choice.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      prompt
    </td>
    <td>
      <code>PromptsOptions</code>
    </td>
    <td>
      <p>options related to the default dialog prompt used to ask the user whether to remember their choice of app.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AppSelectionOptions" href="#AppSelectionOptions"></a>AppSelectionOptions</h2>

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
      dialogHeaderText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display in the native picker which enables user to select which navigation app to launch.
Defaults to &quot;Select app for navigation&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cancelButtonText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to display for the cancel button in the native picker which enables user to select which navigation app to launch.
Defaults to &quot;Cancel&quot; if not specified.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      list
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of apps, defined as <code>launchnavigator.APP</code> constants, which should be displayed in the picker if the app is available.
This can be used to restrict which apps are displayed, even if they are installed.
By default, all available apps will be displayed.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      callback
    </td>
    <td>
      <code>(app: string) =&gt; void</code>
    </td>
    <td>
      <p>Callback to invoke when the user selects an app in the native picker.
A single string argument is passed which is the app what was selected defined as a <code>launchnavigator.APP</code> constant.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      androidTheme
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>(Android only) native picker theme. Specify using <code>actionsheet.ANDROID_THEMES</code> constants.
Default <code>actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      rememberChoice
    </td>
    <td>
      <code>RememberChoiceOptions</code>
    </td>
    <td>
      <p>options related to whether to remember user choice of app for next time, instead of asking again for user choice.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="UserChoice" href="#UserChoice"></a>UserChoice</h2>

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
      exists
    </td>
    <td>
      <code>(callback: (exists: boolean) =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Indicates whether a user choice exists for a preferred navigator app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      get
    </td>
    <td>
      <code>(callback: (app: string) =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Returns current user choice of preferred navigator app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      set
    </td>
    <td>
      <code>(app: string, callback: () =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Sets the current user choice of preferred navigator app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      clear
    </td>
    <td>
      <code>(callback: () =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Clears the current user choice of preferred navigator app.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="UserPrompted" href="#UserPrompted"></a>UserPrompted</h2>

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
      get
    </td>
    <td>
      <code>(callback: (exists: boolean) =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Indicates whether user has already been prompted whether to remember their choice a preferred navigator app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      set
    </td>
    <td>
      <code>( callback: () =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Sets flag indicating user has already been prompted whether to remember their choice a preferred navigator app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      clear
    </td>
    <td>
      <code>( callback: () =&gt; void) =&gt; void</code>
    </td>
    <td>
      <p>Clears flag which indicates if user has already been prompted whether to remember their choice a preferred navigator app.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AppSelection" href="#AppSelection"></a>AppSelection</h2>

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
      userChoice
    </td>
    <td>
      <code>UserChoice</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      userPrompted
    </td>
    <td>
      <code>UserPrompted</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





