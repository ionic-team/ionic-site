---
layout: "v2_fluid/docs_base"
version: "1.3.7"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/camera-preview.ts#L27">
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
<p>Requires <a href='module:driftyco/ionic-native'>ionic-native</a> and the Cordova plugin: <code>cordova-plugin-camera-preview</code>. For more info, please see the <a href="https://github.com/westonganger/cordova-plugin-camera-preview">Cordova Camera Preview Plugin Docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Members</h2>
<div id="startCamera"></div>
<h3><code>startCamera(options)</code>
  
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
      options
      
      
    </td>
    <td>
      
<code>CameraPreviewOptions</code>
    </td>
    <td>
      <p>for the preview</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="stopCamera"></div>
<h3><code>stopCamera()</code>
  
</h3>



Stops the camera preview instance.










<div id="takePicture"></div>
<h3><code>takePicture()</code>
  
</h3>



Take the picture, the parameter size is optional










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










<div id="setFlashMode"></div>
<h3><code>setFlashMode()</code>
  
</h3>



Set the default mode for the Flash.










<div id="setColorEffect"></div>
<h3><code>setColorEffect()</code>
  
</h3>



Set camera color effect.











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

