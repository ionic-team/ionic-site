---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "video-capture-plus"
title: "Video Capture Plus"
header_sub_title: "Class in module "
doc: "Video Capture Plus"
docType: "class"
---

<h1 class="api-title">Video Capture Plus<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/video-capture-plus/index.ts#L97">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/danielsogl/cordova-plugin-video-capture-plus/issues">plugin repo</a>.
</p>




<p>This plugin offers some useful extras on top of the default Media Capture Plugin capabilities:</p>
<ul>
<li>HD recording.</li>
<li>Starting with the front camera.</li>
<li>A custom overlay (currently iOS only).</li>
</ul>


<p>Repo:
  <a href="https://github.com/danielsogl/cordova-plugin-video-capture-plus">
    https://github.com/danielsogl/cordova-plugin-video-capture-plus
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-video-capture-plus
$ npm install --save @ionic-native/video-capture-plus
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from &#39;@ionic-native/video-capture-plus&#39;;


constructor(private videoCapturePlus: VideoCapturePlus) { }

...

const options: VideoCapturePlusOptions = {
   limit: 1,
   highquality: true,
   portraitOverlay: &#39;assets/img/camera/overlay/portrait.png&#39;,
   landscapeOverlay: &#39;assets/img/camera/overlay/landscape.png&#39;
}

this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] =&gt; console.log(mediafile), error =&gt; console.log(&#39;Something went wrong&#39;));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="captureVideo" href="#captureVideo"></a><code>captureVideo(options)</code></h3>




Starts recordings
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
      <code>VideoCapturePlusOptions</code>
    </td>
    <td>
      <p>Configure options<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MediaFile[]&gt;</code> 
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
      <code>any</code>
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


<h2><a class="anchor" name="VideoCapturePlusOptions" href="#VideoCapturePlusOptions"></a>VideoCapturePlusOptions</h2>

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
      <p>The number of videos to record, default 1 (on iOS always 1)</p>

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
      <p>Max duration in seconds, default 0, which is &#39;forever&#39;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      highquality
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to override the default low quality setting</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      frontcamera
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to override the default backfacing camera setting.
You&#39;ll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      portraitOverlay
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>put the png overlay in your assets folder</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      landscapeOverlay
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>not passing an overlay means no image is shown for the landscape orientation</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      overlayText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





