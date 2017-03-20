---
layout: "v2_fluid/docs_base"
version: "2.9.0"
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
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/camera-preview.ts#L47">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-camera-preview</code></pre>
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

<pre><code class="lang-typescript">import { CameraPreview, PictureOptions, CameraPreviewOptions, CameraPreviewDimensions, } from &#39;ionic-native&#39;;

// camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
public cameraPreviewOpts: CameraPreviewOptions = {
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
CameraPreview.startCamera(this.cameraPreviewOpts).then(
  (res) =&gt; {
    console.log(res)
  },
  (err) =&gt; {
    console.log(err)
  });


// picture options
public pictureOpts: PictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}

// take a picture
CameraPreview.takePicture(this.pictureOpts).then((imageData) =&gt; {            
  this.picture = &#39;data:image/jpeg;base64,&#39; + imageData;
}, (err) =&gt; {      
  console.log(err);
  this.picture = &#39;assets/img/test.jpg&#39;;
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
<h3><code>startCamera(options)</code>
  
</h3>




Starts the camera preview instance. (iOS & Android)


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







<div id="stopCamera"></div>
<h3><code>stopCamera()</code>
  
</h3>




Stops the camera preview instance. (iOS & Android)










<div id="switchCamera"></div>
<h3><code>switchCamera()</code>
  
</h3>




Switch from the rear camera and front camera, if available. (iOS & Android)










<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>




Hide the camera preview box. (iOS & Android)










<div id="show"></div>
<h3><code>show()</code>
  
</h3>




Show the camera preview box. (iOS & Android)










<div id="takePicture"></div>
<h3><code>takePicture(optional)</code>
  
</h3>




Take the picture (base64), the parameter size is optional (iOS & Android)


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
      
<code>PictureOptions</code>
    </td>
    <td>
      <p>size and quality of the picture to take</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setColorEffect"></div>
<h3><code>setColorEffect(effect)</code>
  
</h3>




Set camera color effect. (iOS partial & Android)


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







<div id="setZoom"></div>
<h3><code>setZoom(Zoom)</code>
  
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
      Zoom
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>value (integer)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setPreviewSize"></div>
<h3><code>setPreviewSize(dimensions)</code>
  
</h3>




Set the preview Size (Android)


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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setFlashMode"></div>
<h3><code>setFlashMode(flashMode)</code>
  
</h3>




Set the flashmode (iOS partial & Android)


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
      

    </td>
    <td>
      <p>&#39;off&#39; (iOS &amp; Android), &#39;on&#39; (iOS &amp; Android), &#39;auto&#39; (iOS &amp; Android), &#39;torch&#39; (Android)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The left edge in pixels, default 0</p>

    </td>
  </tr>
  
  <tr>
    <td>
      y
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The top edge in pixels, default 0</p>

    </td>
  </tr>
  
  <tr>
    <td>
      width
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width in pixels, default window.screen.width</p>

    </td>
  </tr>
  
  <tr>
    <td>
      height
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The height in pixels, default window.screen.height</p>

    </td>
  </tr>
  
  <tr>
    <td>
      camera
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Choose the camera to use &#39;front&#39; or &#39;rear&#39;, default &#39;front&#39;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      tapPhoto
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Tap to take a photo, default true (picture quality by default : 85)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      previewDrag
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Preview box drag across the screen, default &#39;false&#39;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      toBack
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Preview box to the back of the webview (true =&gt; back, false =&gt; front) , default false</p>

    </td>
  </tr>
  
  <tr>
    <td>
      alpha
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Alpha channel of the preview box, float, [0,1], default 1</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="PictureOptions" href="#PictureOptions"></a>PictureOptions</h2>


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width in pixels, default 0</p>

    </td>
  </tr>
  
  <tr>
    <td>
      height
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The height in pixels, default 0</p>

    </td>
  </tr>
  
  <tr>
    <td>
      quality
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The picture quality, 0 - 100, default 85</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width of the camera preview, default to window.screen.width</p>

    </td>
  </tr>
  
  <tr>
    <td>
      height
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The height of the camera preview, default to window.screen.height</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

