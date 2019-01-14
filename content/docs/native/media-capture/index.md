---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "media-capture"
title: "Media Capture"
header_sub_title: "Class in module "
doc: "Media Capture"
docType: "class"
---

<h1 class="api-title">Media Capture</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/media-capture/index.ts#L112">
  Improve this doc
</a>







<p>This plugin provides access to the device&#39;s audio, image, and video capture capabilities.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-media-capture</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-media-capture">Media Capture plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-media-capture">
    https://github.com/apache/cordova-plugin-media-capture
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-media-capture
$ npm install --save @ionic-native/media-capture
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from &#39;@ionic-native/media-capture&#39;;


constructor(private mediaCapture: MediaCapture) { }

...


let options: CaptureImageOptions = { limit: 3 };
this.mediaCapture.captureImage(options)
  .then(
    (data: MediaFile[]) =&gt; console.log(data),
    (err: CaptureError) =&gt; console.error(err)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="supportedImageModes" href="#supportedImageModes"></a><code>supportedImageModes</code></h3>


The recording image sizes and formats supported by the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>ConfigurationData[]</code> 
</div><h3><a class="anchor" name="supportedAudioModes" href="#supportedAudioModes"></a><code>supportedAudioModes</code></h3>


The audio recording formats supported by the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>ConfigurationData[]</code> 
</div><h3><a class="anchor" name="supportedVideoModes" href="#supportedVideoModes"></a><code>supportedVideoModes</code></h3>


The recording video resolutions and formats supported by the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>ConfigurationData[]</code> 
</div><h3><a class="anchor" name="captureAudio" href="#captureAudio"></a><code>captureAudio(options)</code></h3>




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
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MediaFile[]&gt;</code> 
</div><h3><a class="anchor" name="captureImage" href="#captureImage"></a><code>captureImage(options)</code></h3>




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
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MediaFile[]&gt;</code> 
</div><h3><a class="anchor" name="captureVideo" href="#captureVideo"></a><code>captureVideo(options)</code></h3>




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
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MediaFile[]&gt;</code> 
</div><h3><a class="anchor" name="onPendingCaptureResult" href="#onPendingCaptureResult"></a><code>onPendingCaptureResult()</code></h3>




is fired if the capture call is successful


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;MediaFile[]&gt;</code> 
</div><h3><a class="anchor" name="onPendingCaptureError" href="#onPendingCaptureError"></a><code>onPendingCaptureError()</code></h3>




is fired if the capture call is unsuccessful


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;CaptureError&gt;</code> 
</div>





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
      <code>void</code>
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
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of audio clips. Defaults to 1.
On iOS you can only record one file.</p>

      <em>(optional)</em>
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
      <p>Maximum duration of an audio sound clip, in seconds. This does not work on Android devices.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation.</p>

      <em>(optional)</em>
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
      <p>Maximum duration per video clip. This will be ignored on BlackBerry.</p>

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
      <p>Quality of the video. This parameter can only be used with Android.</p>

      <em>(optional)</em>
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





