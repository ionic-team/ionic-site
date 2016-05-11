---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "image-picker"
title: "Image Picker"
header_sub_title: "Class in module "
doc: "Image Picker"
docType: "class"
---








<h1 class="api-title">

  
  Image Picker
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/imagepicker.ts#L17'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-image-picker</code></pre>
<p>Repo:
  <a href="https://github.com/wymsee/cordova-imagePicker">
    https://github.com/wymsee/cordova-imagePicker
  </a>
</p>

<!-- description -->

<p>Cordova Plugin For Multiple Image Selection</p>
<p>Requires Cordova plugin: <code>cordova-plugin-image-picker</code>.
For more info, please see the <a href="https://github.com/wymsee/cordova-imagePicker">https://github.com/wymsee/cordova-imagePicker</a></p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {ImagePicker} from &#39;ionic-native&#39;;



ImagePicker.getPictures(options).then((results) =&gt; {
  for (var i = 0; i &lt; results.length; i++) {
      console.log(&#39;Image URI: &#39; + results[i]);
  }
}, (err) =&gt; {
});
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="getPictures"></div>
<h3><code>getPictures(options)</code>

</h3>



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
      options
      
      
    </td>
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
  <b>Returns:</b> 
 Returns a Promise that resolves the image file URI
otherwise rejects with an error.


</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

