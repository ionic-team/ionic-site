---
layout: "v2_fluid/docs_base"
version: "1.3.20"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "canvascamera"
title: "CanvasCamera"
header_sub_title: "Class in module "
doc: "CanvasCamera"
docType: "class"
---








<h1 class="api-title">

  
  CanvasCamera
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/canvas-camera.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add com.keith.cordova.plugin.canvascamera</code></pre>
<p>Repo:
  <a href="https://github.com/donaldp24/CanvasCameraPlugin">
    https://github.com/donaldp24/CanvasCameraPlugin
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {CanvasCamera} from &#39;ionic-native&#39;;

let object = document.getElementById(&#39;myDiv&#39;);
// or
@ViewChild(&#39;myDiv&#39;) object;

CanvasCamera.initialize(object);

CanvasCamera.start();

CanvasCamera.takePicture().then(picture =&gt; { });
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="DestinationType"></div>
<h3><code>DestinationType()</code>
  
</h3>









<div id="PictureSourceType"></div>
<h3><code>PictureSourceType()</code>
  
</h3>









<div id="EncodingType"></div>
<h3><code>EncodingType()</code>
  
</h3>









<div id="CameraPosition"></div>
<h3><code>CameraPosition()</code>
  
</h3>









<div id="FlashMode"></div>
<h3><code>FlashMode()</code>
  
</h3>









<div id="initialize"></div>
<h3><code>initialize(htmlElement)</code>
  
</h3>



Initialize the Camera


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
      htmlElement
      
      
    </td>
    <td>
      
<code>HTMLElement</code>
    </td>
    <td>
      <p>The HTML Element to preview the camera in</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="start"></div>
<h3><code>start(options)</code>
  
</h3>



Start capture video as images from camera to preview camera on web page.


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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="takePicture"></div>
<h3><code>takePicture()</code>
  
</h3>

Takes a photo






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="setFlashMode"></div>
<h3><code>setFlashMode(flashMode)</code>
  
</h3>



Sets the flash mode


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
      flashMode
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Flash mode, use CanvasCamera.FlashMode constant to set</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setCameraPosition"></div>
<h3><code>setCameraPosition(cameraPosition)</code>
  
</h3>



Set camera position


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
      cameraPosition
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Camera Position, use CanvasCamera.CameraPosition constant</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

