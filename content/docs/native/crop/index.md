---
layout: "fluid/docs_base"
version: "3.4.4"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/crop/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-crop
$ npm install --save @ionic-native/crop
</code></pre>
<p>Repo:
  <a href="https://github.com/jeduan/cordova-plugin-crop">
    https://github.com/jeduan/cordova-plugin-crop
  </a>
</p>


<p>Crops images</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code>import {Crop} from &#39;@ionic-native/crop&#39;;

constructor(private crop: Crop) { }

...

this.crop.crop(&#39;path/to/image.jpg&#39;, {quality: 75})
  .then(
    newImage =&gt; console.log(&quot;new image path is: &quot; + newImage),
    error =&gt; console.error(&quot;Error cropping image&quot;, error)
  );
</code></pre>








<h2>Instance Members</h2>
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
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves with the new image path, or rejects if failed to crop.
</div>





