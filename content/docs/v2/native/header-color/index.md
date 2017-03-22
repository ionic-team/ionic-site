---
layout: "v2_fluid/docs_base"
version: "3.2.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "header-color"
title: "Header Color"
header_sub_title: "Class in module "
doc: "Header Color"
docType: "class"
---







<h1 class="api-title">
  
  Header Color
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/header-color/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-headercolor
$ npm install --save @ionic-native/header-color
</code></pre>
<p>Repo:
  <a href="https://github.com/tomloprod/cordova-plugin-headercolor">
    https://github.com/tomloprod/cordova-plugin-headercolor
  </a>
</p>

<!-- description -->

<p>Cordova plugin to change color of header in multitask view</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { HeaderColor } from &#39;@ionic-native/header-color&#39;;

constructor(private headerColor: HeaderColor) { }

...

this.headerColor.tint(&quot;#becb29&quot;);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="tint"></div>
<h3>
  <code>tint(color)</code>
  

</h3>
Set a color to the task header
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
      color
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The hex value of the color</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

