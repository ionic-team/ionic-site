---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "camera-preview"
title: "Camera Preview"
header_sub_title: "Class in module "
doc: "Camera Preview"
docType: "class"
---

<h1 class="api-title">Camera Preview<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/camera-preview/index.ts#L53">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview/issues">plugin repo</a>.
</p>




<p>Showing camera preview in HTML</p>
<p>Requires Cordova plugin: <code>https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git</code>. For more info, please see the <a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview">Cordova Camera Preview docs</a>.</p>


<p>Repo:
  <a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview">
    https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-camera-preview
$ npm install --save @ionic-native/camera-preview
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from &#39;@ionic-native/camera-preview&#39;;

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
const pictureOpts: CameraPreviewPictureOptions = {
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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="FOCUS_MODE" href="#FOCUS_MODE"></a><code>FOCUS_MODE</code></h3>




<h3><a class="anchor" name="EXPOSURE_MODE" href="#EXPOSURE_MODE"></a><code>EXPOSURE_MODE</code></h3>




<h3><a class="anchor" name="FLASH_MODE" href="#FLASH_MODE"></a><code>FLASH_MODE</code></h3>




<h3><a class="anchor" name="COLOR_EFFECT" href="#COLOR_EFFECT"></a><code>COLOR_EFFECT</code></h3>




<h3><a class="anchor" name="CAMERA_DIRECTION" href="#CAMERA_DIRECTION"></a><code>CAMERA_DIRECTION</code></h3>




<h3><a class="anchor" name="startCamera" href="#startCamera"></a><code>startCamera(options)</code></h3>




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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopCamera" href="#stopCamera"></a><code>stopCamera()</code></h3>


Stops the camera preview instance. (iOS & Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchCamera" href="#switchCamera"></a><code>switchCamera()</code></h3>


Switch from the rear camera and front camera, if available.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>


Hide the camera preview box.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>


Show the camera preview box.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="takePicture" href="#takePicture"></a><code>takePicture(options)</code></h3>




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
      options</td>
    <td>
      <code>CameraPreviewPictureOptions</code>
    </td>
    <td>
      <p>size and quality of the picture to take<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setColorEffect" href="#setColorEffect"></a><code>setColorEffect(effect)</code></h3>




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
      effect</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setZoom" href="#setZoom"></a><code>setZoom(zoom)</code></h3>




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
      zoom</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Zoom value<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getMaxZoom" href="#getMaxZoom"></a><code>getMaxZoom()</code></h3>


Get the maximum zoom (Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getZoom" href="#getZoom"></a><code>getZoom()</code></h3>


Get current zoom (Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setPreviewSize" href="#setPreviewSize"></a><code>setPreviewSize(dimensions)</code></h3>




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
      dimensions</td>
    <td>
      <code>CameraPreviewDimensions</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getFocusMode" href="#getFocusMode"></a><code>getFocusMode()</code></h3>


Get focus mode


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setFocusMode" href="#setFocusMode"></a><code>setFocusMode(focusMode)</code></h3>




Set the focus mode
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
      focusMode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>&#39;fixed&#39;, &#39;auto&#39;, &#39;continuous-picture&#39;, &#39;continuous-video&#39; (iOS &amp; Android), &#39;edof&#39;, &#39;infinity&#39;, &#39;macro&#39; (Android Only)<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getSupportedFocusModes" href="#getSupportedFocusModes"></a><code>getSupportedFocusModes()</code></h3>


Get supported focus modes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getFlashMode" href="#getFlashMode"></a><code>getFlashMode()</code></h3>


Get the current flash mode


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setFlashMode" href="#setFlashMode"></a><code>setFlashMode(flashMode)</code></h3>




Set the flash mode
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
      flashMode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>&#39;off&#39; (iOS &amp; Android), &#39;on&#39; (iOS &amp; Android), &#39;auto&#39; (iOS &amp; Android), &#39;torch&#39; (Android)<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getSupportedFlashModes" href="#getSupportedFlashModes"></a><code>getSupportedFlashModes()</code></h3>


Get supported flash modes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getSupportedPictureSizes" href="#getSupportedPictureSizes"></a><code>getSupportedPictureSizes()</code></h3>


Get supported picture sizes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getExposureMode" href="#getExposureMode"></a><code>getExposureMode()</code></h3>


Get exposure mode


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getExposureModes" href="#getExposureModes"></a><code>getExposureModes()</code></h3>


Get exposure modes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setExposureMode" href="#setExposureMode"></a><code>setExposureMode(lock)</code></h3>




Set exposure mode
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
      lock</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getExposureCompensation" href="#getExposureCompensation"></a><code>getExposureCompensation()</code></h3>


Get exposure compensation (Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setExposureCompensation" href="#setExposureCompensation"></a><code>setExposureCompensation(exposureCompensation)</code></h3>




Set exposure compensation (Android)
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
      exposureCompensation</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getExposureCompensationRange" href="#getExposureCompensationRange"></a><code>getExposureCompensationRange()</code></h3>


Get exposure compensation range (Android)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="tapToFocus" href="#tapToFocus"></a><code>tapToFocus(xPoint,&nbsp;yPoint)</code></h3>


Set specific focus point. Note, this assumes the camera is full-screen.
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
      xPoint</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      yPoint</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onBackButton" href="#onBackButton"></a><code>onBackButton()</code></h3>


Add a listener for the back event for the preview


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> if back button pressed
</div>





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

      <em>(optional)</em>
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
      <p>The width in pixels, default window.screen.width</p>

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
      <p>The height in pixels, default window.screen.height</p>

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      tapToFocus
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Tap to set specific focus point. Note, this assumes the camera is full-screen. default false</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableExifHeaderStripping
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>On Android disable automatic rotation of the image and stripping of Exit header. default false</p>

      <em>(optional)</em>
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
      <p>The height in pixels, default 0</p>

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
      <p>The picture quality, 0 - 100, default 85</p>

      <em>(optional)</em>
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
      <p>The height of the camera preview, default to window.screen.height</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





