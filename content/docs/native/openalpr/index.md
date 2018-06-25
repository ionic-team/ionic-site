---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "openalpr"
title: "OpenALPR"
header_sub_title: "Class in module "
doc: "OpenALPR"
docType: "class"
---

<h1 class="api-title">OpenALPR</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/openalpr/index.ts#L16">
  Improve this doc
</a>







<p>This Cordova plugin adds support for the OpenALPR (Automatic License Plate Recognition) library, which provides support for retrieving the license plate from a picture.</p>


<p>Repo:
  <a href="https://github.com/iMicknl/cordova-plugin-openalpr">
    https://github.com/iMicknl/cordova-plugin-openalpr
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-openalpr
$ npm install --save @ionic-native/openalpr
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { OpenALPR, OpenALPROptions, OpenALPRResult } from &#39;@ionic-native/openalpr&#39;;


constructor(private openALPR: OpenALPR) { }

const scanOptions: OpenALPROptions = {
   country: this.openALPR.Country.EU,
   amount: 3
}

// To get imageData, you can use the @ionic-native/camera module for example. It works with DestinationType.FILE_URI and DATA_URL

this.openALPR.scan(imageData, scanOptions)
  .then((res: [OpenALPRResult]) =&gt; console.log(res))
  .catch((error: Error) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Country" href="#Country"></a><code>Country</code></h3>




<h3><a class="anchor" name="scan" href="#scan"></a><code>scan(imageData,&nbsp;options)</code></h3>


This function does something
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
      imageData</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Base64 encoding of the image data or the image file URI</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>OpenALPROptions</code>
    </td>
    <td>
      <p>Options to pass to the OpenALPR scanner</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





