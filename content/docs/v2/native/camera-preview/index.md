---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "camera-preview"
title: "Camera Preview"
header_sub_title: "Class in module "
doc: "Camera Preview"
docType: "class"
---







<h1 class="api-title">
  
  Camera Preview
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/camera-preview/index.ts#L47">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-camera-preview
$ npm install --save @ionic-native/camera-preview
</code></pre>
<p>Repo:
  <a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview">
    https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview
  </a>
</p>

<!-- description -->

<p>Showing camera preview in HTML</p>
<p>Requires Cordova plugin: <code>https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git</code>. For more info, please see the <a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview">Cordova Camera Preview docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { CameraPreview, PictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from &#39;ionic-native&#39;;

constructor(private cameraPreview: CameraPreview) { }

...

// camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: &#39;rear&#39;,
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
};

// start camera
this.cameraPreview.startCamera(cameraPreviewOpts).then(
  (res) =&gt; {
    console.log(res)
  },
  (err) =&gt; {
    console.log(err)
  });

// Set the handler to run every time we take a picture
this.cameraPreview.setOnPictureTakenHandler().subscribe((result) =&gt; {
  console.log(result);
  // do something with the result
});


// picture options
const pictureOpts: PictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}

// take a picture
this.cameraPreview.takePicture(this.pictureOpts).then((imageData) =&gt; {
  this.picture = &#39;data:image/jpeg;base64,&#39; + imageData;
}, (err) =&gt; {
  console.log(err);
  this.picture = &#39;assets/img/test.jpg&#39;;
});


// Switch camera
this.cameraPreview.switchCamera();

// set color effect to negative
this.cameraPreview.setColorEffect(&#39;negative&#39;);

// Stop the camera preview
this.cameraPreview.stopCamera();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="startCamera"></div>
<h3>
  <code>startCamera(options)</code>
  

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
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="stopCamera"></div>
<h3>
  <code>stopCamera()</code>
  

</h3>
Stops the camera preview instance. (iOS & Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="switchCamera"></div>
<h3>
  <code>switchCamera()</code>
  

</h3>
Switch from the rear camera and front camera, if available.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="hide"></div>
<h3>
  <code>hide()</code>
  

</h3>
Hide the camera preview box.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Show the camera preview box.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="takePicture"></div>
<h3>
  <code>takePicture(options)</code>
  

</h3>
Take the picture (base64)
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
      
<code>CameraPreviewPictureOptions</code>
    </td>
    <td>
      <p>optional - size and quality of the picture to take</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setColorEffect"></div>
<h3>
  <code>setColorEffect(effect)</code>
  

</h3>
Set camera color effect.
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
      effect
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>name : &#39;none&#39; (iOS &amp; Android), &#39;aqua&#39; (Android), &#39;blackboard&#39; (Android), &#39;mono&#39; (iOS &amp; Android), &#39;negative&#39; (iOS &amp; Android), &#39;posterize&#39; (iOS &amp; Android), &#39;sepia&#39; (iOS &amp; Android), &#39;solarize&#39; (Android) or &#39;whiteboard&#39; (Android)</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setZoom"></div>
<h3>
  <code>setZoom(zoom)</code>
  

</h3>
Set the zoom (Android)
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
      zoom
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Zoom value</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setPreviewSize"></div>
<h3>
  <code>setPreviewSize(dimensions)</code>
  

</h3>
Set the preview Size
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
      dimensions
      
    </td>
    <td>
      
<code>CameraPreviewDimensions</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setFlashMode"></div>
<h3>
  <code>setFlashMode(flashMode)</code>
  

</h3>
Set the flashmode
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
      
<code>string</code>
    </td>
    <td>
      <p>&#39;off&#39; (iOS &amp; Android), &#39;on&#39; (iOS &amp; Android), &#39;auto&#39; (iOS &amp; Android), &#39;torch&#39; (Android)</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="CameraPreviewOptions" href="#CameraPreviewOptions"></a>CameraPreviewOptions</h2>


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
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The left edge in pixels, default 0</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The top edge in pixels, default 0</p>

      <strong class="tag">Optional</strong>
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
      <p>The width in pixels, default window.screen.width</p>

      <strong class="tag">Optional</strong>
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
      <p>The height in pixels, default window.screen.height</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      camera
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Choose the camera to use &#39;front&#39; or &#39;rear&#39;, default &#39;front&#39;</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      tapPhoto
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Tap to take a photo, default true (picture quality by default : 85)</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      previewDrag
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Preview box drag across the screen, default &#39;false&#39;</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      toBack
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Preview box to the back of the webview (true =&gt; back, false =&gt; front) , default false</p>

      <strong class="tag">Optional</strong>
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
      <p>Alpha channel of the preview box, float, [0,1], default 1</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CameraPreviewPictureOptions" href="#CameraPreviewPictureOptions"></a>CameraPreviewPictureOptions</h2>


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
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width in pixels, default 0</p>

      <strong class="tag">Optional</strong>
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
      <p>The height in pixels, default 0</p>

      <strong class="tag">Optional</strong>
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
      <p>The picture quality, 0 - 100, default 85</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CameraPreviewDimensions" href="#CameraPreviewDimensions"></a>CameraPreviewDimensions</h2>


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
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width of the camera preview, default to window.screen.width</p>

      <strong class="tag">Optional</strong>
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
      <p>The height of the camera preview, default to window.screen.height</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

