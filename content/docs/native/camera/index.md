---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "camera"
title: "Camera"
header_sub_title: "Class in module "
doc: "Camera"
docType: "class"
---

<h1 class="api-title">Camera</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/camera/index.ts#L121">
  Improve this doc
</a>







<p>Take a photo or capture video.</p>
<p>Requires the Cordova plugin: <code>cordova-plugin-camera</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-camera">Cordova Camera Plugin Docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-camera">
    https://github.com/apache/cordova-plugin-camera
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-camera
$ npm install --save @ionic-native/camera
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Camera, CameraOptions } from &#39;@ionic-native/camera&#39;;

constructor(private camera: Camera) { }

...


const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) =&gt; {
 // imageData is either a base64 encoded string or a file URI
 // If it&#39;s base64 (DATA_URL):
 let base64Image = &#39;data:image/jpeg;base64,&#39; + imageData;
}, (err) =&gt; {
 // Handle error
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="DestinationType" href="#DestinationType"></a><code>DestinationType</code></h3>

Constant for possible destination types



<h3><a class="anchor" name="EncodingType" href="#EncodingType"></a><code>EncodingType</code></h3>

Convenience constant



<h3><a class="anchor" name="MediaType" href="#MediaType"></a><code>MediaType</code></h3>

Convenience constant



<h3><a class="anchor" name="PictureSourceType" href="#PictureSourceType"></a><code>PictureSourceType</code></h3>

Convenience constant



<h3><a class="anchor" name="PopoverArrowDirection" href="#PopoverArrowDirection"></a><code>PopoverArrowDirection</code></h3>

Convenience constant



<h3><a class="anchor" name="Direction" href="#Direction"></a><code>Direction</code></h3>

Convenience constant



<h3><a class="anchor" name="getPicture" href="#getPicture"></a><code>getPicture(options)</code></h3>




Take a picture or video, or load one from the library.
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
      <code>CameraOptions</code>
    </td>
    <td>
      <p>Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the <a href="https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-">Cordova plugin docs</a>.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
</div><h3><a class="anchor" name="cleanup" href="#cleanup"></a><code>cleanup()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="CameraOptions" href="#CameraOptions"></a>CameraOptions</h2>

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
      <p>Picture quality in range 0-100. Default is 50</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      destinationType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the format of the return value.
Defined in Camera.DestinationType. Default is FILE_URI.
     DATA_URL : 0,   Return image as base64-encoded string (DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible),
     FILE_URI : 1,   Return image file URI,
     NATIVE_URI : 2  Return image native URI
         (e.g., assets-library:// on iOS or content:// on Android)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sourceType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the source of the picture.
Defined in Camera.PictureSourceType. Default is CAMERA.
     PHOTOLIBRARY : 0,
     CAMERA : 1,
     SAVEDPHOTOALBUM : 2</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      allowEdit
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Allow simple editing of image before selection.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      encodingType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the returned image file&#39;s encoding.
Defined in Camera.EncodingType. Default is JPEG
     JPEG : 0    Return JPEG encoded image
     PNG : 1     Return PNG encoded image</p>

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
      <p>Width in pixels to scale image. Must be used with targetHeight.
Aspect ratio remains constant.</p>

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
      <p>Height in pixels to scale image. Must be used with targetWidth.
Aspect ratio remains constant.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mediaType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the type of media to select from. Only works when PictureSourceType
is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType
     PICTURE: 0      allow selection of still pictures only. DEFAULT.
         Will return format specified via DestinationType
     VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     ALLMEDIA : 2    allow selection from all media types</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      correctOrientation
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Rotate the image to correct for the orientation of the device during capture.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      saveToPhotoAlbum
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Save the image to the photo album on the device after capture.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cameraDirection
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the camera to use (front- or back-facing).
Defined in Camera.Direction. Default is BACK.
     BACK: 0
     FRONT: 1</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      popoverOptions
    </td>
    <td>
      <code>CameraPopoverOptions</code>
    </td>
    <td>
      <p>iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CameraPopoverOptions" href="#CameraPopoverOptions"></a>CameraPopoverOptions</h2>

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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      arrowDir
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
Matches iOS UIPopoverArrowDirection constants.
     ARROW_UP : 1,
     ARROW_DOWN : 2,
     ARROW_LEFT : 4,
     ARROW_RIGHT : 8,
     ARROW_ANY : 15</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





