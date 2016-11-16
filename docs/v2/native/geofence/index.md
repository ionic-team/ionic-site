---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "geofence"
title: "Geofence"
header_sub_title: "Class in module "
doc: "Geofence"
docType: "class"
---







<h1 class="api-title">
  
  Geofence
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/geofence.ts#L73">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-geofence</code></pre>
<p>Repo:
  <a href="https://github.com/cowbell/cordova-plugin-geofence/">
    https://github.com/cowbell/cordova-plugin-geofence/
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li><li>Windows Phone</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->


<h2>Static Members</h2>

<div id="TransitionType"></div>
<h3><code>TransitionType()</code>
  
</h3>











<div id="onTrasitionReceived"></div>
<h3><code>onTrasitionReceived()</code>
  
</h3>











<div id="initialize"></div>
<h3><code>initialize()</code>
  
</h3>


Initializes the plugin. User will be prompted to allow the app to use location and notifications.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="addOrUpdate"></div>
<h3><code>addOrUpdate()</code>
  
</h3>


Adds a new geofence or array of geofences. For geofence object, see above.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="remove"></div>
<h3><code>remove()</code>
  
</h3>


Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
geofence was created.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="removeAll"></div>
<h3><code>removeAll()</code>
  
</h3>


Removes all geofences.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getWatched"></div>
<h3><code>getWatched()</code>
  
</h3>


Returns an array of geofences currently being monitored.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;string&gt;&gt;</code> 
</div>



<div id="onTransitionReceived"></div>
<h3><code>onTransitionReceived()</code>
  
</h3>

Called when a geofence is crossed in the direction specified by `TransitType`.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="onNotificationClicked"></div>
<h3><code>onNotificationClicked()</code>
  
</h3>

Called when the user clicks a geofence notification. iOS and Android only.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Object&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

