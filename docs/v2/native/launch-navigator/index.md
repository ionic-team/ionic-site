---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "launch-navigator"
title: "Launch Navigator"
header_sub_title: "Class in module "
doc: "Launch Navigator"
docType: "class"
---








<h1 class="api-title">

  
  Launch Navigator
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/launchnavigator.ts#L46'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add uk.co.workingedge.phonegap.plugin.launchnavigator</code></pre>
<p>Repo:
  <a href="https://github.com/dpa99c/phonegap-launch-navigator.git">
    https://github.com/dpa99c/phonegap-launch-navigator.git
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the <a href="https://github.com/dpa99c/phonegap-launch-navigator">LaunchNavigator plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {LaunchNavigator} from &#39;ionic-native&#39;;



LaunchNavigator.navigate(&quot;Toronto, ON&quot;, &quot;London, ON&quot;)
  .then(
    success =&gt; console.log(&quot;Launched navigator&quot;),
    error =&gt; console.log(&quot;Error launching navigator&quot;, error)
  );
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="navigate"></div>
<h3><code>navigate(destination,&nbsp;start,&nbsp;options)</code>

</h3>



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
      destination
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Location name or coordinates</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      start
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Location name or coordinates</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

