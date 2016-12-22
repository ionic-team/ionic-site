---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "shake"
title: "Shake"
header_sub_title: "Class in module "
doc: "Shake"
docType: "class"
---







<h1 class="api-title">
  
  Shake
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/shake.ts#L1">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-shake</code></pre>
<p>Repo:
  <a href="https://github.com/leecrossley/cordova-plugin-shake">
    https://github.com/leecrossley/cordova-plugin-shake
  </a>
</p>

<!-- description -->

<p>Handles shake gesture</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {Shake} from &#39;ionic-native&#39;;

let watch = Shake.startWatch(60).subscribe(() =&gt; {
  // do something
  });

watch.unsubscribe();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="startWatch"></div>
<h3><code>startWatch(sensitivity)</code>
  
</h3>




Watch for shake gesture


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
      sensitivity
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Optional sensitivity parameter. Defaults to 40</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

