---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "video-player"
title: "Video Player"
header_sub_title: "Class in module "
doc: "Video Player"
docType: "class"
---

<h1 class="api-title">Video Player</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/video-player/index.ts#L17">
  Improve this doc
</a>







<p>A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.</p>
<p>Requires Cordova plugin: <code>com.moust.cordova.videoplayer</code>. For more info, please see the <a href="https://github.com/moust/cordova-plugin-videoplayer">VideoPlayer plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/moust/cordova-plugin-videoplayer">
    https://github.com/moust/cordova-plugin-videoplayer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/moust/cordova-plugin-videoplayer.git
$ npm install --save @ionic-native/video-player
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { VideoPlayer } from &#39;@ionic-native/video-player&#39;;

constructor(private videoPlayer: VideoPlayer) { }

...

// Playing a video.
this.videoPlayer.play(&#39;file:///android_asset/www/movie.mp4&#39;).then(() =&gt; {
 console.log(&#39;video completed&#39;);
}).catch(err =&gt; {
 console.log(err);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="play" href="#play"></a><code>play(fileUrl,&nbsp;options)</code></h3>


Plays the video from the passed url.
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
      fileUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>File url to the video.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>VideoOptions</code>
    </td>
    <td>
      <p>Optional video playback settings. See options above.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves promise when the video was played successfully.
</div><h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>




Stops the video playback immediatly.









<h2><a class="anchor" name="VideoOptions" href="#VideoOptions"></a>VideoOptions</h2>

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
      volume
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the initial volume of the video playback, where 0.0 is 0% volume and 1.0 is 100%.
For example: for a volume of 30% set the value to 0.3.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      scalingMode
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>There are two options for the scaling mode. SCALE_TO_FIT which is default and SCALE_TO_FIT_WITH_CROPPING.
These strings are the only ones which can be passed as option.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





