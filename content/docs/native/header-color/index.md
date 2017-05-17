---
layout: "fluid/docs_base"
version: "3.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "header-color"
title: "Header Color"
header_sub_title: "Class in module "
doc: "Header Color"
docType: "class"
---

<h1 class="api-title">Header Color</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/header-color/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-headercolor
$ npm install --save @ionic-native/header-color
</code></pre>
<p>Repo:
  <a href="https://github.com/tomloprod/cordova-plugin-headercolor">
    https://github.com/tomloprod/cordova-plugin-headercolor
  </a>
</p>


<p>Cordova plugin to change color of header in Android Multitask View</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { HeaderColor } from &#39;@ionic-native/header-color&#39;;

constructor(private headerColor: HeaderColor) { }

...

this.headerColor.tint(&#39;#becb29&#39;);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="tint" href="#tint"></a><code>tint(color)</code></h3>




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
      color</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





