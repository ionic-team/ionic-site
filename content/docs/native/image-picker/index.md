---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "image-picker"
title: "Image Picker"
header_sub_title: "Class in module "
doc: "Image Picker"
docType: "class"
---

<h1 class="api-title">Image Picker</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/image-picker/index.ts#L36">
  Improve this doc
</a>







<p>Cordova Plugin For Multiple Image Selection</p>
<p>Requires Cordova plugin: <code>cordova-plugin-image-picker</code>.
For more info, please see the <a href="https://github.com/wymsee/cordova-imagePicker">https://github.com/wymsee/cordova-imagePicker</a></p>


<p>Repo:
  <a href="https://github.com/Telerik-Verified-Plugins/ImagePicker">
    https://github.com/Telerik-Verified-Plugins/ImagePicker
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"
$ npm install --save @ionic-native/image-picker
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ImagePicker } from &#39;@ionic-native/image-picker&#39;;


constructor(private imagePicker: ImagePicker) { }

...

this.imagePicker.getPictures(options).then((results) =&gt; {
  for (var i = 0; i &lt; results.length; i++) {
      console.log(&#39;Image URI: &#39; + results[i]);
  }
}, (err) =&gt; { });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getPictures" href="#getPictures"></a><code>getPictures(options)</code></h3>




Pick pictures from the library.
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
      options</td>
    <td>
      <code>ImagePickerOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves the image file URI
otherwise rejects with an error.
</div><h3><a class="anchor" name="hasReadPermission" href="#hasReadPermission"></a><code>hasReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Check if we have permission to read images


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that indicates whether we have permission
</div><h3><a class="anchor" name="requestReadPermission" href="#requestReadPermission"></a><code>requestReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Request permission to read images


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="ImagePickerOptions" href="#ImagePickerOptions"></a>ImagePickerOptions</h2>

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
      maximumImagesCount
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>max images to be selected, defaults to 15. If this is set to 1, upon selection of a single image, the plugin will return it. (Android only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Max width to allow images to be</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Max height to allow images to be</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      quality
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Quality of images, defaults to 100</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      outputType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the format of the return value.
Defined in ImagePicker.OutputType. Default is FILE_URI.
     FILE_URI : 0,   Return image file URI,
     DATA_URL : 1,   Return image as base64-encoded string</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





