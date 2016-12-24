---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "streamingmedia"
title: "StreamingMedia"
header_sub_title: "Class in module "
doc: "StreamingMedia"
docType: "class"
---







<h1 class="api-title">
  
  StreamingMedia
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/streaming-media.ts#L15">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-streaming-media</code></pre>
<p>Repo:
  <a href="https://github.com/nchutchind/cordova-plugin-streaming-media">
    https://github.com/nchutchind/cordova-plugin-streaming-media
  </a>
</p>

<!-- description -->

<p>This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {StreamingMedia, StreamingVideoOptions} from &#39;ionic-native&#39;;

let options: StreamingVideoOptions = {
  successCallback: () =&gt; { console.log(&#39;Video played&#39;) },
  errorCallback: (e) =&gt; { console.log(&#39;Error streaming&#39;) },
  orientation: &#39;landscape&#39;
};

StreamingMedia.(&#39;https://path/to/video/stream&#39;, options);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="playVideo"></div>
<h3><code>playVideo(videoUrl,&nbsp;options)</code>
  
</h3>




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
      videoUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The URL of the video</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>StreamingVideoOptions</code>
    </td>
    <td>
      <p>Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="playAudio"></div>
<h3><code>playAudio(audioUrl,&nbsp;options)</code>
  
</h3>




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
      audioUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The URL of the audio stream</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>StreamingAudioOptions</code>
    </td>
    <td>
      <p>Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="stopAudio"></div>
<h3><code>stopAudio()</code>
  
</h3>




Stops streaming audio










<div id="pauseAudio"></div>
<h3><code>pauseAudio()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Pauses streaming audio










<div id="resumeAudio"></div>
<h3><code>resumeAudio()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Resumes streaming audio











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      orientation
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bgImage
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bgImageScale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      initFullscreen
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      successCallback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

