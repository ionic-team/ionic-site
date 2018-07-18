---
layout: "fluid/docs_base"
version: "4.10.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/header-color/index.ts#L1">
  Improve this doc
</a>







<p>Cordova plugin to change color of header in Android Multitask View</p>


<p>Repo:
  <a href="https://github.com/tomloprod/cordova-plugin-headercolor">
    https://github.com/tomloprod/cordova-plugin-headercolor
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-headercolor
$ npm install --save @ionic-native/header-color
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { HeaderColor } from &#39;@ionic-native/header-color&#39;;

constructor(private headerColor: HeaderColor) { }

...

this.headerColor.tint(&#39;#becb29&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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





