---
layout: "v2_fluid/docs_base"
version: "2.6.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "backgroundfetch"
title: "BackgroundFetch"
header_sub_title: "Class in module "
doc: "BackgroundFetch"
docType: "class"
---







<h1 class="api-title">
  
  BackgroundFetch
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/background-fetch.ts#L11">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-background-fetch</code></pre>
<p>Repo:
  <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch">
    https://github.com/transistorsoft/cordova-plugin-background-fetch
  </a>
</p>

<!-- description -->

<p>iOS Background Fetch Implementation. See: <a href="https://developer.apple.com/reference/uikit/uiapplication#1657399">https://developer.apple.com/reference/uikit/uiapplication#1657399</a>
iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user&#39;s prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
For more detail, please see <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch">https://github.com/transistorsoft/cordova-plugin-background-fetch</a></p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BackgroundFetch } from &#39;ionic-native&#39;;


// When device is ready :
platform.ready().then(() =&gt; {

  let config = {
    stopOnTerminate: false, // Set true to cease background-fetch from operating after user &quot;closes&quot; the app. Defaults to true.
  };

  BackgroundFetch.configure(() =&gt; {
       console.log(&#39;[js] BackgroundFetch initiated&#39;);

       // perform some ajax request to server here

       You MUST called #finish so that native-side can signal completion of the background-thread to the os.
       BackgroundFetch.finish();

  }, (error) =&gt; {
    console.log(&#39;- BackgroundFetch failed&#39;, error);
  }, config);

});

// Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
BackgroundFetch.start();

// Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
BackgroundFetch.stop();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="configure"></div>
<h3><code>configure(callbackFn,&nbsp;errorCallback,&nbsp;config)</code>
  
</h3>




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
      callbackFn
      
      
    </td>
    <td>
      
<code>Function</code>
    </td>
    <td>
      <p>This callback will fire each time an iOS background-fetch event occurs (typically every 15 min).</p>

      
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
      <p>The failureFn will be called if the device doesn&#39;t support background-fetch.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      config
      
      
    </td>
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
  <b>Returns:</b> 
 Location object, which tries to mimic w3c Coordinates interface.
See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
Callback to be executed every time a geolocation is recorded in the background.


</div>



<div id="start"></div>
<h3><code>start()</code>
  
</h3>


Start the background-fetch API.
Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="stop"></div>
<h3><code>stop()</code>
  
</h3>


Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="finish"></div>
<h3><code>finish()</code>
  
</h3>


You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true to cease background-fetch from operating after user &quot;closes&quot; the app. Defaults to true.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

