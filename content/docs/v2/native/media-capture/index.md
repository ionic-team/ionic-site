---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/media-capture.ts#L108">
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

<pre><code class="lang-typescript">import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from &#39;ionic-native&#39;;


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


The recording image sizes and formats supported by the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>ConfigurationData[]</code> 
</div>



<div id="supportedAudioModes"></div>
<h3><code>supportedAudioModes()</code>
  
</h3>


The audio recording formats supported by the device.






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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;MediaFile[]&gt;</code> 
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;MediaFile[]&gt;</code> 
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;MediaFile[]&gt;</code> 
</div>



<div id="onPendingCaptureResult"></div>
<h3><code>onPendingCaptureResult()</code>
  
</h3>




is fired if the capture call is successful






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;MediaFile[]&gt;</code> 
</div>



<div id="onPendingCaptureError"></div>
<h3><code>onPendingCaptureError()</code>
  
</h3>




is fired if the capture call is unsuccessful






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;CaptureError&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="MediaFile" href="#MediaFile"></a>MediaFile</h2>


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
      name
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the file, without path information.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      fullPath
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The full path of the file, including the name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      type
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file&#39;s mime type</p>

    </td>
  </tr>
  
  <tr>
    <td>
      lastModifiedDate
      
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The date and time when the file was last modified.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      size
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The size of the file, in bytes.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      getFormatData
      
    </td>
    <td>
      <code></code>
    </td>
    <td>
      <p>Retrieves the format information of the media file.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="MediaFileData" href="#MediaFileData"></a>MediaFileData</h2>


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
      codecs
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The actual format of the audio and video content.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      bitrate
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The average bitrate of the content. The value is zero for images.</p>

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
      <p>The height of the image or video in pixels. The value is zero for audio clips.</p>

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
      <p>The width of the image or video in pixels. The value is zero for audio clips.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      duration
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The length of the video or sound clip in seconds. The value is zero for images.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CaptureError" href="#CaptureError"></a>CaptureError</h2>


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
      code
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CaptureAudioOptions" href="#CaptureAudioOptions"></a>CaptureAudioOptions</h2>


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
      limit
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of audio clips. Defaults to 1.
On iOS you can only record one file.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      duration
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum duration of an audio sound clip, in seconds. This does not work on Android devices.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CaptureImageOptions" href="#CaptureImageOptions"></a>CaptureImageOptions</h2>


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
      limit
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="CaptureVideoOptions" href="#CaptureVideoOptions"></a>CaptureVideoOptions</h2>


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
      limit
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      duration
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum duration per video clip. This will be ignored on BlackBerry.</p>

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
      <p>Quality of the video. This parameter can only be used with Android.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="ConfigurationData" href="#ConfigurationData"></a>ConfigurationData</h2>


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
      type
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ASCII-encoded lowercase string representing the media type.</p>

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
      <p>The height of the image or video in pixels. The value is zero for sound clips.</p>

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
      <p>The width of the image or video in pixels. The value is zero for sound clips.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

