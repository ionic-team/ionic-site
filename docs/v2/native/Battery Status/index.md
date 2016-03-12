---
layout: "v2_fluid/docs_base"
version: "1.0.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "battery-status"
title: "Battery Status"
header_sub_title: "Class in module "
doc: "Battery Status"
docType: "class"
---








<h1 class="api-title">


Battery Status






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master/src/plugins/batterystatus.ts#L1'>
Improve this doc
</a>





<!-- decorators -->

<pre><code>$ ionic plugin add cordova-plugin-batterystatus</code></pre>
<p>Repo:
<a href="">

</a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the <a href="https://github.com/apache/cordova-plugin-battery-status">BatteryStatus plugin docs</a>.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">// watch change in battery status
let subscription = BatteryStatus.onChange().subscribe(
 status =&gt; {
   console.log(status.level, status.isPlugged);
 }
);

// stop watch
subscription.unsubscribe();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="onChange"></div>
<h3><code>onChange()</code>
  
</h3>

Watch the change in battery level






<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> Returns an observable that pushes a status object
</div>



<div id="onLow"></div>
<h3><code>onLow()</code>
  
</h3>

Watch when the battery level goes low






<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable&lt;StatusObject&gt;</code> Returns an observable that pushes a status object
</div>



<div id="onCritical"></div>
<h3><code>onCritical()</code>
  
</h3>

Watch when the battery level goes to critial






<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable&lt;StatusObject&gt;</code> Returns an observable that pushes a status object
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

