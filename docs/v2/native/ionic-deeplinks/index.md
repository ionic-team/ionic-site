---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ionic-deeplinks"
title: "Ionic Deeplinks"
header_sub_title: "Class in module "
doc: "Ionic Deeplinks"
docType: "class"
---








<h1 class="api-title">

  
  Ionic Deeplinks
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/deeplinks.ts#L21">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add ionic-plugin-deeplinks</code></pre>
<p>Repo:
  <a href="https://github.com/driftyco/ionic-plugin-deeplinks">
    https://github.com/driftyco/ionic-plugin-deeplinks
  </a>
</p>

<!-- description -->

<p>This plugin handles deeplinks on iOS and Android for both custom URL scheme links
and Universal App Links.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
  
  <li>Android</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { IonicDeeplinks } from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="route"></div>
<h3><code>route(Define)</code>
  
</h3>



Define a set of paths to match against incoming deeplinks.



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
      Define
      
      
    </td>
    <td>
      
<code>paths</code>
    </td>
    <td>
      <p>a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves when a deeplink comes through, and
is rejected if a deeplink comes through that does not match a given path.
</div>



<div id="routeWithNavController"></div>
<h3><code>routeWithNavController(Define)</code>
  
</h3>



This is a convenience version of `route` that takes a reference to a NavController
from Ionic 2, or a custom class that conforms to this protocol:

NavController.push = function(View, Params){}

This handler will automatically navigate when a route matches. If you need finer-grained
control over the behavior of a matching deeplink, use the plain `route` method.



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
      Define
      
      
    </td>
    <td>
      
<code>paths</code>
    </td>
    <td>
      <p>a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves when a deeplink comes through, and
is rejected if a deeplink comes through that does not match a given path.
</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

