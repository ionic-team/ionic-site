---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "locationaccuracy"
title: "LocationAccuracy"
header_sub_title: "Class in module "
doc: "LocationAccuracy"
docType: "class"
---







<h1 class="api-title">
  
  LocationAccuracy
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/location-accuracy.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-request-location-accuracy</code></pre>
<p>Repo:
  <a href="https://github.com/dpa99c/cordova-plugin-request-location-accuracy">
    https://github.com/dpa99c/cordova-plugin-request-location-accuracy
  </a>
</p>

<!-- description -->

<p>This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { LocationAccuracy } from &#39;ionic-native&#39;;

LocationAccuracy.canRequest().then((canRequest: boolean) =&gt; {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    LocationAccuracy.request(LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () =&gt; console.log(&#39;Request successful&#39;),
      error =&gt; console.log(&#39;Error requesting location permissions&#39;, error)
    );
  }

});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="canRequest"></div>
<h3><code>canRequest()</code>
  
</h3>


Indicates if you can request accurate location






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resovles with a boolean that indicates if you can request accurate location
</div>



<div id="isRequesting"></div>
<h3><code>isRequesting()</code>
  
</h3>


Indicates if a request is currently in progress






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that indicates if a request is currently in progress
</div>



<div id="request"></div>
<h3><code>request(accuracy)</code>
  
</h3>




Requests accurate location


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
      accuracy
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST<em>PRIORITY</em></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves on success and rejects if an error occurred
</div>



<div id="REQUEST_PRIORITY_NO_POWER"></div>
<h3><code>REQUEST_PRIORITY_NO_POWER()</code>
  
</h3>











<div id="REQUEST_PRIORITY_LOW_POWER"></div>
<h3><code>REQUEST_PRIORITY_LOW_POWER()</code>
  
</h3>











<div id="REQUEST_PRIORITY_BALANCED_POWER_ACCURACY"></div>
<h3><code>REQUEST_PRIORITY_BALANCED_POWER_ACCURACY()</code>
  
</h3>











<div id="REQUEST_PRIORITY_HIGH_ACCURACY"></div>
<h3><code>REQUEST_PRIORITY_HIGH_ACCURACY()</code>
  
</h3>











<div id="SUCCESS_SETTINGS_SATISFIED"></div>
<h3><code>SUCCESS_SETTINGS_SATISFIED()</code>
  
</h3>











<div id="SUCCESS_USER_AGREED"></div>
<h3><code>SUCCESS_USER_AGREED()</code>
  
</h3>











<div id="ERROR_ALREADY_REQUESTING"></div>
<h3><code>ERROR_ALREADY_REQUESTING()</code>
  
</h3>











<div id="ERROR_INVALID_ACTION"></div>
<h3><code>ERROR_INVALID_ACTION()</code>
  
</h3>











<div id="ERROR_INVALID_ACCURACY"></div>
<h3><code>ERROR_INVALID_ACCURACY()</code>
  
</h3>











<div id="ERROR_EXCEPTION"></div>
<h3><code>ERROR_EXCEPTION()</code>
  
</h3>











<div id="ERROR_CANNOT_CHANGE_ACCURACY"></div>
<h3><code>ERROR_CANNOT_CHANGE_ACCURACY()</code>
  
</h3>











<div id="ERROR_USER_DISAGREED"></div>
<h3><code>ERROR_USER_DISAGREED()</code>
  
</h3>











<div id="ERROR_GOOGLE_API_CONNECTION_FAILED"></div>
<h3><code>ERROR_GOOGLE_API_CONNECTION_FAILED()</code>
  
</h3>












<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

