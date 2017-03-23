---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "camera"
title: "Camera"
header_sub_title: "Class in module "
doc: "Camera"
docType: "class"
---







<h1 class="api-title">
  
  Camera
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/camera/index.ts#L85">
  Improve this doc
</a>



<!-- decorators -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Camera, CameraOptions } from &#39;@ionic-native/camera&#39;;

constructor(private camera: Camera) { }

...


const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) =&gt; {
 // imageData is either a base64 encoded string or a file URI
 // If it&#39;s base64:
 let base64Image = &#39;data:image/jpeg;base64,&#39; + imageData;
}, (err) =&gt; {
 // Handle error
});
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="DestinationType"></div>
<h3>
  <code>DestinationType()</code>
  

</h3>
Constant for possible destination types



<div id="EncodingType"></div>
<h3>
  <code>EncodingType()</code>
  

</h3>
Convenience constant



<div id="MediaType"></div>
<h3>
  <code>MediaType()</code>
  

</h3>
Convenience constant



<div id="PictureSourceType"></div>
<h3>
  <code>PictureSourceType()</code>
  

</h3>
Convenience constant



<div id="PopoverArrowDirection"></div>
<h3>
  <code>PopoverArrowDirection()</code>
  

</h3>
Convenience constant



<div id="Direction"></div>
<h3>
  <code>Direction()</code>
  

</h3>
Convenience constant



<div id="getPicture"></div>
<h3>
  <code>getPicture(options)</code>
  

</h3>
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
      options
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
</div><div id="cleanup"></div>
<h3>
  <code>cleanup()</code>
  

</h3>
Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
     DATA_URL : 0,   Return image as base64-encoded string,
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





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

