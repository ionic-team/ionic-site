---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "base64"
title: "Base64"
header_sub_title: "Class in module "
doc: "Base64"
docType: "class"
---

<h1 class="api-title">Base64<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/base64/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/hazemhagrass/phonegap-base64/issues">plugin repo</a>.
</p>




<p>This Plugin is used to encode base64 of any file, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3</p>


<p>Repo:
  <a href="https://github.com/hazemhagrass/phonegap-base64">
    https://github.com/hazemhagrass/phonegap-base64
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com-badrit-base64
$ npm install --save @ionic-native/base64
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Base64 } from &#39;@ionic-native/base64&#39;;

constructor(private base64: Base64) { }

...

let filePath: string = &#39;file:///...&#39;;
this.base64.encodeFile(filePath).then((base64File: string) =&gt; {
  console.log(base64File);
}, (err) =&gt; {
  console.log(err);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="encodeFile" href="#encodeFile"></a><code>encodeFile(filePath)</code></h3>


This function encodes base64 of any file
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
      filePath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Absolute file path</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves when the file is successfully encoded
</div>





