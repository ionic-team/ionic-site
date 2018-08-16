---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "streaming-media"
title: "Streaming Media"
header_sub_title: "Class in module "
doc: "Streaming Media"
docType: "class"
---

<h1 class="api-title">Streaming Media</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/streaming-media/index.ts#L46">
  Improve this doc
</a>







<p>This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.</p>


<p>Repo:
  <a href="https://github.com/nchutchind/cordova-plugin-streaming-media">
    https://github.com/nchutchind/cordova-plugin-streaming-media
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-streaming-media
$ npm install --save @ionic-native/streaming-media
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { StreamingMedia, StreamingVideoOptions } from &#39;@ionic-native/streaming-media&#39;;

constructor(private streamingMedia: StreamingMedia) { }

let options: StreamingVideoOptions = {
  successCallback: () =&gt; { console.log(&#39;Video played&#39;) },
  errorCallback: (e) =&gt; { console.log(&#39;Error streaming&#39;) },
  orientation: &#39;landscape&#39;,
  shouldAutoClose: true,
  controls: false
};

this.streamingMedia.playVideo(&#39;https://path/to/video/stream&#39;, options);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="playVideo" href="#playVideo"></a><code>playVideo(videoUrl,&nbsp;options)</code></h3>




Streams a video
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
      videoUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the video</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>StreamingVideoOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="playAudio" href="#playAudio"></a><code>playAudio(audioUrl,&nbsp;options)</code></h3>




Streams an audio
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
      audioUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the audio stream</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>StreamingAudioOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="stopAudio" href="#stopAudio"></a><code>stopAudio()</code></h3>




Stops streaming audio



<h3><a class="anchor" name="pauseAudio" href="#pauseAudio"></a><code>pauseAudio()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Pauses streaming audio



<h3><a class="anchor" name="resumeAudio" href="#resumeAudio"></a><code>resumeAudio()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Resumes streaming audio









<h2><a class="anchor" name="StreamingVideoOptions" href="#StreamingVideoOptions"></a>StreamingVideoOptions</h2>

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
      successCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Executes after success playing audio.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Executes after error playing video.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      orientation
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Force one orientation for playing video.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      shouldAutoClose
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should the video close after it&#39;s over. Defaults to true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      controls
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should the video have controls. Defaults to true. Android only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="StreamingAudioOptions" href="#StreamingAudioOptions"></a>StreamingAudioOptions</h2>

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
      bgColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Background color for audio player.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bgImage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Background image for audio player.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bgImageScale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Background image scale for audio player.
Valid values are: 
fit
stretch
aspectStretch.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      initFullscreen
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Start audio player in full screen. iOS only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      keepAwake
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Keeps the screen lit and stops it from locking 
while audio is playing. Android only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      successCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Executes after success playing audio.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Executes after error playing audio.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





