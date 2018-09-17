---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "video-editor"
title: "Video Editor"
header_sub_title: "Class in module "
doc: "Video Editor"
docType: "class"
---

<h1 class="api-title">Video Editor</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/video-editor/index.ts#L119">
  Improve this doc
</a>







<p>Edit videos using native device APIs</p>


<p>Repo:
  <a href="https://github.com/jbavari/cordova-plugin-video-editor">
    https://github.com/jbavari/cordova-plugin-video-editor
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-video-editor
$ npm install --save @ionic-native/video-editor
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { VideoEditor } from &#39;@ionic-native/video-editor&#39;;

constructor(private videoEditor: VideoEditor) { }

...

this.videoEditor.transcodeVideo({
  fileUri: &#39;/path/to/input.mov&#39;,
  outputFileName: &#39;output.mp4&#39;,
  outputFileType: VideoEditor.OutputFileType.MPEG4
})
.then((fileUri: string) =&gt; console.log(&#39;video transcode success&#39;, fileUri))
.catch((error: any) =&gt; console.log(&#39;video transcode error&#39;, error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="OptimizeForNetworkUse" href="#OptimizeForNetworkUse"></a><code>OptimizeForNetworkUse</code></h3>




<h3><a class="anchor" name="OutputFileType" href="#OutputFileType"></a><code>OutputFileType</code></h3>




<h3><a class="anchor" name="transcodeVideo" href="#transcodeVideo"></a><code>transcodeVideo(options)</code></h3>




Transcode a video
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
      <code>TranscodeOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path of the transcoded video
</div><h3><a class="anchor" name="trim" href="#trim"></a><code>trim(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Trim a video
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
      <code>TrimOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path of the trimmed video
</div><h3><a class="anchor" name="createThumbnail" href="#createThumbnail"></a><code>createThumbnail(options)</code></h3>




Create a JPEG thumbnail from a video
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
      <code>CreateThumbnailOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path to the jpeg image on the device
</div><h3><a class="anchor" name="getVideoInfo" href="#getVideoInfo"></a><code>getVideoInfo(options)</code></h3>




Get info on a video (width, height, orientation, duration, size, & bitrate)
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
      <code>GetVideoInfoOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;VideoInfo&gt;</code> Returns a promise that resolves to an object containing info on the video
</div>





<h2><a class="anchor" name="TranscodeOptions" href="#TranscodeOptions"></a>TranscodeOptions</h2>

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
      fileUri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to the video on the device.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      outputFileName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file name for the transcoded video</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      outputFileType
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Instructions on how to encode the video. Android is always mp4</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      optimizeForNetworkUse
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Should the video be processed with quailty or speed in mind. iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      saveToLibrary
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Save the new video the library. Not supported in windows. Defaults to true</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      deleteInputFile
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Delete the original video. Android only. Defaults to false</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      maintainAspectRatio
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>iOS only. Defaults to true</p>

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
      <p>Width of the result</p>

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
      <p>Height of the result</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      videoBitrate
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Bitrate in bits. Defaults to 1 megabit (1000000).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fps
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Frames per second of the result. Android only. Defaults to 24.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      audioChannels
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Number of audio channels. iOS only. Defaults to 2.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      audioSampleRate
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Sample rate for the audio. iOS only. Defaults to 44100</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      audioBitrate
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Sample rate for the audio. iOS only. Defaults to 128 kilobits (128000).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      progress
    </td>
    <td>
      <code>(info: number) =&gt; void</code>
    </td>
    <td>
      <p>Not supported in windows, progress on the transcode. info will be a number from 0 to 100</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="TrimOptions" href="#TrimOptions"></a>TrimOptions</h2>

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
      fileUri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Path to input video.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      trimStart
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Time to start trimming in seconds</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      trimEnd
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Time to end trimming in seconds</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      outputFileName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Output file name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      progress
    </td>
    <td>
      <code>(info: any) =&gt; void</code>
    </td>
    <td>
      <p>Progress on transcode. info will be a number from 0 to 100</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CreateThumbnailOptions" href="#CreateThumbnailOptions"></a>CreateThumbnailOptions</h2>

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
      fileUri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to the video on the device</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      outputFileName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file name for the JPEG image</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      atTime
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location in the video to create the thumbnail (in seconds)</p>

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
      <p>Width of the thumbnail.</p>

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
      <p>Height of the thumbnail.</p>

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
      <p>Quality of the thumbnail (between 1 and 100).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GetVideoInfoOptions" href="#GetVideoInfoOptions"></a>GetVideoInfoOptions</h2>

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
      fileUri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to the video on the device.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="VideoInfo" href="#VideoInfo"></a>VideoInfo</h2>

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
      <p>Width of the video in pixels.</p>

      
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
      <p>Height of the video in pixels.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      orientation
    </td>
    <td>
      <code>&#39;portrait&#39; | &#39;landscape&#39;</code>
    </td>
    <td>
      <p>Orientation of the video. Will be either portrait or landscape.</p>

      
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
      <p>Duration of the video in seconds.</p>

      
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
      <p>Size of the video in bytes.</p>

      
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
      <p>Bitrate of the video in bits per second.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





