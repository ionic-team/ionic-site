---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "camerapreview"
title: "CameraPreview"
header_sub_title: "Class in module "
doc: "CameraPreview"
docType: "class"
---







<h1 class="api-title">
  
  CameraPreview
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/camera-preview.ts#L14">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-camera-preview</code></pre>
<p>Repo:
  <a href="https://github.com/westonganger/cordova-plugin-camera-preview">
    https://github.com/westonganger/cordova-plugin-camera-preview
  </a>
</p>

<!-- description -->

<p>Showing camera preview in HTML</p>
<p>For more info, please see the <a href="https://github.com/westonganger/cordova-plugin-camera-preview">Cordova Camera Preview Plugin Docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { CameraPreview } from &#39;ionic-native&#39;;

// camera options (Size and location)
let cameraRect: CameraPreviewRect = {
  x: 100,
  y: 100,
  width: 200,
  height: 200
};


// start camera
CameraPreview.startCamera(
  cameraRect, // position and size of preview
  &#39;front&#39;, // default camera
  true, // tape to take picture
  false, // disable drag
  true // send the preview to the back of the screen so we can add overlaying elements
);

// Set the handler to run every time we take a picture
CameraPreview.setOnPictureTakenHandler().subscribe((result) =&gt; {
  console.log(result);
  // do something with the result
});


// take a picture
CameraPreview.takePicture({
  maxWidth: 640,
  maxHeight: 640
});

// Switch camera
CameraPreview.switchCamera();

// set color effect to negative
CameraPreview.setColorEffect(&#39;negative&#39;);

// Stop the camera preview
CameraPreview.stopCamera();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="startCamera"></div>
<h3><code>startCamera(position,&nbsp;which,&nbsp;enable,&nbsp;enable,&nbsp;send,&nbsp;alpha)</code>
  
</h3>




Starts the camera preview instance.


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
      position
      
      
    </td>
    <td>
      
<code>CameraPreviewRect</code>
    </td>
    <td>
      <p>and size of the preview window - {x: number, y: number, width: number, height: number}</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      which
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>camera to use - &#39;front&#39; | &#39;back&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      enable
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>tap to take picture</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      enable
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>preview box drag across the screen</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      send
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>preview box to the back of the webview</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      alpha
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>of the preview box</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="stopCamera"></div>
<h3><code>stopCamera()</code>
  
</h3>




Stops the camera preview instance.










<div id="takePicture"></div>
<h3><code>takePicture(optional)</code>
  
</h3>




Take the picture, the parameter size is optional


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
      optional
      
      
    </td>
    <td>
      
<code>CameraPreviewSize</code>
    </td>
    <td>
      <p>size of the picture to take</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setOnPictureTakenHandler"></div>
<h3><code>setOnPictureTakenHandler()</code>
  
</h3>




Register a callback function that receives the original picture and the image captured from the preview box.










<div id="switchCamera"></div>
<h3><code>switchCamera()</code>
  
</h3>




Switch from the rear camera and front camera, if available.










<div id="show"></div>
<h3><code>show()</code>
  
</h3>




Show the camera preview box.










<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>




Hide the camera preview box.










<div id="setColorEffect"></div>
<h3><code>setColorEffect()</code>
  
</h3>




Set camera color effect.











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

