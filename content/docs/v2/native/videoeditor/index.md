---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "videoeditor"
title: "VideoEditor"
header_sub_title: "Class in module "
doc: "VideoEditor"
docType: "class"
---







<h1 class="api-title">
  
  VideoEditor
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/video-editor.ts#L118">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-video-editor</code></pre>
<p>Repo:
  <a href="https://github.com/jbavari/cordova-plugin-video-editor">
    https://github.com/jbavari/cordova-plugin-video-editor
  </a>
</p>

<!-- description -->

<p>Edit videos using native device APIs</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {VideoEditor} from &#39;ionic-native&#39;;

VideoEditor.transcodeVideo({
  fileUri: &#39;/path/to/input.mov&#39;,
  outputFileName: &#39;output.mp4&#39;,
  outputFileType: VideoEditor.OutputFileType.MPEG4
})
.then((fileUri: string) =&gt; console.log(&#39;video transcode success&#39;, fileUri))
.catch((error: any) =&gt; console.log(&#39;video transcode error&#39;, error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="OptimizeForNetworkUse"></div>
<h3><code>OptimizeForNetworkUse()</code>
  
</h3>











<div id="OutputFileType"></div>
<h3><code>OutputFileType()</code>
  
</h3>











<div id="transcodeVideo"></div>
<h3><code>transcodeVideo(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path of the transcoded video
</div>



<div id="trim"></div>
<h3><code>trim(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path of the trimmed video
</div>



<div id="createThumbnail"></div>
<h3><code>createThumbnail(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves to the path to the jpeg image on the device
</div>



<div id="getVideoInfo"></div>
<h3><code>getVideoInfo(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;VideoInfo&gt;</code> Returns a promise that resolves to an object containing info on the video
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Instructions on how to encode the video. Android is always mp4</p>

    </td>
  </tr>
  
  <tr>
    <td>
      optimizeForNetworkUse
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Should the video be processed with quailty or speed in mind. iOS only</p>

    </td>
  </tr>
  
  <tr>
    <td>
      saveToLibrary
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Save the new video the library. Not supported in windows. Defaults to true</p>

    </td>
  </tr>
  
  <tr>
    <td>
      deleteInputFile
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Delete the original video. Android only. Defaults to false</p>

    </td>
  </tr>
  
  <tr>
    <td>
      maintainAspectRatio
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>iOS only. Defaults to true</p>

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
      <p>Width of the result</p>

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
      <p>Height of the result</p>

    </td>
  </tr>
  
  <tr>
    <td>
      videoBitrate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Bitrate in bits. Defaults to 1 megabit (1000000).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      fps
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Frames per second of the result. Android only. Defaults to 24.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      audioChannels
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Number of audio channels. iOS only. Defaults to 2.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      audioSampleRate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Sample rate for the audio. iOS only. Defaults to 44100</p>

    </td>
  </tr>
  
  <tr>
    <td>
      audioBitrate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Sample rate for the audio. iOS only. Defaults to 128 kilobits (128000).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      progress
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>(info: number) =&gt; void</code>
    </td>
    <td>
      <p>Not supported in windows, progress on the transcode. info will be a number from 0 to 100</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>(info: any) =&gt; void</code>
    </td>
    <td>
      <p>Progress on transcode. info will be a number from 0 to 100</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location in the video to create the thumbnail (in seconds)</p>

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
      <p>Width of the thumbnail.</p>

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
      <p>Height of the thumbnail.</p>

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
      <p>Quality of the thumbnail (between 1 and 100).</p>

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





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

