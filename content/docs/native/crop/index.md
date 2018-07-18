---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "crop"
title: "Crop"
header_sub_title: "Class in module "
doc: "Crop"
docType: "class"
---

<h1 class="api-title">Crop</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/crop/index.ts#L7">
  Improve this doc
</a>







<p>Crops images</p>


<p>Repo:
  <a href="https://github.com/jeduan/cordova-plugin-crop">
    https://github.com/jeduan/cordova-plugin-crop
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-crop
$ npm install --save @ionic-native/crop
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Crop } from &#39;@ionic-native/crop&#39;;

constructor(private crop: Crop) { }

...

this.crop.crop(&#39;path/to/image.jpg&#39;, {quality: 75})
  .then(
    newImage =&gt; console.log(&#39;new image path is: &#39; + newImage),
    error =&gt; console.error(&#39;Error cropping image&#39;, error)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="crop" href="#crop"></a><code>crop(pathToImage,&nbsp;options)</code></h3>




Crops an image
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
      pathToImage</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>CropOptions</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves with the new image path, or rejects if failed to crop.
</div>





<h2><a class="anchor" name="CropOptions" href="#CropOptions"></a>CropOptions</h2>

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
      quality
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      targetHeight
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      targetWidth
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





