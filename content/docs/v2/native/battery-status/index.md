---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/batterystatus.ts#L15">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-battery-status</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-battery-status">
    https://github.com/apache/cordova-plugin-battery-status
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the <a href="https://github.com/apache/cordova-plugin-battery-status">BatteryStatus plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Amazon Fire OS</li><li>iOS</li><li>Android</li><li>BlackBerry 10</li><li>Windows Phone 7</li><li>Windows Phone 8</li><li>Windows</li><li>Firefox OS</li><li>Browser</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BatteryStatus } from &#39;ionic-native&#39;;


// watch change in battery status
let subscription = BatteryStatus.onChange().subscribe(
 (status: StatusObject) =&gt; {
   console.log(status.level, status.isPlugged);
 }
);

// stop watch
subscription.unsubscribe();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="onChange"></div>
<h3><code>onChange()</code>
  
</h3>




Watch the change in battery level






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div>



<div id="onLow"></div>
<h3><code>onLow()</code>
  
</h3>




Watch when the battery level goes low






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div>



<div id="onCritical"></div>
<h3><code>onCritical()</code>
  
</h3>




Watch when the battery level goes to critial






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="BatteryStatusResponse" href="#BatteryStatusResponse"></a>BatteryStatusResponse</h2>


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
      level
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The battery charge percentage</p>

    </td>
  </tr>
  
  <tr>
    <td>
      isPlugged
      
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean that indicates whether the device is plugged in</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

