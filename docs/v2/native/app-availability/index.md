---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "app-availability"
title: "App Availability"
header_sub_title: "Class in module "
doc: "App Availability"
docType: "class"
---








<h1 class="api-title">

  
  App Availability
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/appavailability.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-appavailability</code></pre>
<p>Repo:
  <a href="https://github.com/ohh2ahh/AppAvailability">
    https://github.com/ohh2ahh/AppAvailability
  </a>
</p>

<!-- description -->

<p>This plugin allows you to check if an app is installed on the user&#39;s device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.</p>
<p>Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the <a href="https://github.com/ohh2ahh/AppAvailability">AppAvailability plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {AppAvailability} from &#39;ionic-native&#39;;


var app;

if(device.platform === &#39;iOS&#39;) {
  app = &#39;twitter://&#39;;
}else if(device.platform === &#39;Android&#39;){
  app = &#39;com.twitter.android&#39;;
}

AppAvailability.check(app)
  .then(
    yes =&gt; console.log(app + &quot; is available&quot;),
    no =&gt; console.log(app + &quot; is NOT available&quot;)
  );
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="check"></div>
<h3><code>check(app)</code>

</h3>

Checks if an app is available on device


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
      

    </td>
    <td>
      <p>Package name on android, or URI scheme on iOS</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

