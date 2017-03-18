---
layout: "v2_fluid/docs_base"
version: "2.9.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "gyroscope"
title: "Gyroscope"
header_sub_title: "Class in module "
doc: "Gyroscope"
docType: "class"
---







<h1 class="api-title">
  
  Gyroscope
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/gyroscope.ts#L38">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-gyroscope</code></pre>
<p>Repo:
  <a href="https://github.com/NeoLSN/cordova-plugin-gyroscope">
    https://github.com/NeoLSN/cordova-plugin-gyroscope
  </a>
</p>

<!-- description -->

<p>Read Gyroscope sensor data</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from &#39;ionic-native&#39;;


let options: GyroscopeOptions = {
   frequency: 1000
};

Gyroscope.getCurrent(options)
  .then((orientation: GyroscopeOrientation) =&gt; {
     console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   })
  .catch()


Gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) =&gt; {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="watch"></div>
<h3><code>watch(options)</code>
  
</h3>

Watching for gyroscope sensor changes


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
      options
      
      
    </td>
    <td>
      
<code>GyroscopeOptions</code>
    </td>
    <td>
      <p>(optional)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;GyroscopeOrientation&gt;</code> Returns an Observable that resolves GyroscopeOrientation
</div>



<div id="getCurrent"></div>
<h3><code>getCurrent(options)</code>
  
</h3>




Get current data from gyroscope sensor


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
      options
      
      
    </td>
    <td>
      
<code>GyroscopeOptions</code>
    </td>
    <td>
      <p>(optional)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;GyroscopeOrientation&gt;</code> Returns a promise that resolves GyroscopeOrientation
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

