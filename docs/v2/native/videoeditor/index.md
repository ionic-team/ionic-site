---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
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

<!-- related link --><!-- end content block -->


<!-- end body block -->

