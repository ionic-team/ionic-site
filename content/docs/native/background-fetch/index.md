---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "background-fetch"
title: "Background Fetch"
header_sub_title: "Class in module "
doc: "Background Fetch"
docType: "class"
---

<h1 class="api-title">Background Fetch</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/background-fetch/index.ts#L9">
  Improve this doc
</a>







<p>iOS Background Fetch Implementation. See: <a href="https://developer.apple.com/reference/uikit/uiapplication#1657399">https://developer.apple.com/reference/uikit/uiapplication#1657399</a>
iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user&#39;s prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
For more detail, please see <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch">https://github.com/transistorsoft/cordova-plugin-background-fetch</a></p>


<p>Repo:
  <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch">
    https://github.com/transistorsoft/cordova-plugin-background-fetch
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-background-fetch
$ npm install --save @ionic-native/background-fetch
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BackgroundFetch, BackgroundFetchConfig } from &#39;@ionic-native/background-fetch&#39;;


constructor(private backgroundFetch: BackgroundFetch) {

  const config: BackgroundFetchConfig = {
    stopOnTerminate: false, // Set true to cease background-fetch from operating after user &quot;closes&quot; the app. Defaults to true.
  };

  backgroundFetch.configure(config)
     .then(() =&gt; {
         console.log(&#39;Background Fetch initialized&#39;);

         this.backgroundFetch.finish();

     })
     .catch(e =&gt; console.log(&#39;Error initializing background fetch&#39;, e));

  // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
  backgroundFetch.start();

  // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
  backgroundFetch.stop();


}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="configure" href="#configure"></a><code>configure(config)</code></h3>




Configures the plugin's fetch callbackFn

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
      <code>BackgroundFetchConfig</code>
    </td>
    <td>
      <p>Configuration for plugin</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="start" href="#start"></a><code>start()</code></h3>


Start the background-fetch API.
Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="finish" href="#finish"></a><code>finish()</code></h3>




You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.



<h3><a class="anchor" name="status" href="#status"></a><code>status()</code></h3>


Return the status of the background-fetch


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="BackgroundFetchConfig" href="#BackgroundFetchConfig"></a>BackgroundFetchConfig</h2>

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
      stopOnTerminate
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true to cease background-fetch from operating after user &quot;closes&quot; the app. Defaults to true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





