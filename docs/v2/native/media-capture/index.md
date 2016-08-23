---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "media-capture"
title: "Media Capture"
header_sub_title: "Class in module "
doc: "Media Capture"
docType: "class"
---








<h1 class="api-title">

  
  Media Capture
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/media-capture.ts#L4">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-media-capture</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-media-capture">
    https://github.com/apache/cordova-plugin-media-capture
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { MediaCapture } from &#39;ionic-native&#39;;


let options: CaptureImageOptions = { limit: 3 };
MediaCapture.captureImage(options)
  .then(
    (data: MediaFile[]) =&gt; console.log(data),
    (err: CaptureError) =&gt; console.error(err)
  );
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="supportedImageModes"></div>
<h3><code>supportedImageModes()</code>
  
</h3>

The audio recording formats supported by the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>ConfigurationData[]</code> 
</div>



<div id="supportedAudioModes"></div>
<h3><code>supportedAudioModes()</code>
  
</h3>

The recording image sizes and formats supported by the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>ConfigurationData[]</code> 
</div>



<div id="supportedVideoModes"></div>
<h3><code>supportedVideoModes()</code>
  
</h3>

The recording video resolutions and formats supported by the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>ConfigurationData[]</code> 
</div>



<div id="captureAudio"></div>
<h3><code>captureAudio(options)</code>
  
</h3>



Start the audio recorder application and return information about captured audio clip files.


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







<div id="captureImage"></div>
<h3><code>captureImage(options)</code>
  
</h3>



Start the camera application and return information about captured image files.


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







<div id="captureVideo"></div>
<h3><code>captureVideo(options)</code>
  
</h3>



Start the video recorder application and return information about captured video clip files.


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







<div id="onPendingCaptureResult"></div>
<h3><code>onPendingCaptureResult()</code>
  
</h3>



is fired if the capture call is successful










<div id="onPendingCaptureError"></div>
<h3><code>onPendingCaptureError()</code>
  
</h3>



is fired if the capture call is unsuccessful











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

