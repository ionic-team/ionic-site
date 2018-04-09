---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "android-exoplayer"
title: "Android ExoPlayer"
header_sub_title: "Class in module "
doc: "Android ExoPlayer"
docType: "class"
---

<h1 class="api-title">Android ExoPlayer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/android-exoplayer/index.ts#L149">
  Improve this doc
</a>







<p>Cordova media player plugin using Google&#39;s ExoPlayer framework.</p>
<p><a href="https://github.com/google/ExoPlayer">https://github.com/google/ExoPlayer</a></p>


<p>Repo:
  <a href="https://github.com/frontyard/cordova-plugin-exoplayer">
    https://github.com/frontyard/cordova-plugin-exoplayer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-exoplayer
$ npm install --save @ionic-native/android-exoplayer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AndroidExoPlayer } from &#39;@ionic-native/android-exoplayer&#39;;

constructor(private androidExoPlayer: AndroidExoPlayer) { }

...

this.androidExoPlayer.show({url: &#39;http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube&#39;});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(parameters)</code></h3>




Show the player.
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
      parameters</td>
    <td>
      <code>AndroidExoPlayerParams</code>
    </td>
    <td>
      <p>Parameters</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;AndroidExoplayerState&gt;</code> 
</div><h3><a class="anchor" name="setStream" href="#setStream"></a><code>setStream(url,&nbsp;controller)</code></h3>


Switch stream without disposing of the player.
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The url of the new stream.</p>
</td>
  </tr>
  
  <tr>
    <td>
      controller</td>
    <td>
      <code>AndroidExoPlayerControllerConfig</code>
    </td>
    <td>
      <p>Configuration of the controller.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="playPause" href="#playPause"></a><code>playPause()</code></h3>


Will pause if playing and play if paused


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Stop playing.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="seekTo" href="#seekTo"></a><code>seekTo(milliseconds)</code></h3>


Jump to a particular position.
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
      milliseconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Position in stream in milliseconds</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="seekBy" href="#seekBy"></a><code>seekBy(milliseconds)</code></h3>


Jump to a particular time relative to the current position.
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
      milliseconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Time in milliseconds</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="getState" href="#getState"></a><code>getState()</code></h3>


Get the current player state.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AndroidExoplayerState&gt;</code> 
</div><h3><a class="anchor" name="showController" href="#showController"></a><code>showController()</code></h3>


Show the controller.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="hideController" href="#hideController"></a><code>hideController()</code></h3>


Hide the controller.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="setController" href="#setController"></a><code>setController(controller)</code></h3>


Update the controller configuration.
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
      controller</td>
    <td>
      <code>AndroidExoPlayerControllerConfig</code>
    </td>
    <td>
      <p>Configuration of the controller.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>


Close and dispose of player, call before destroy.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





<h2><a class="anchor" name="AndroidExoPlayerParams" href="#AndroidExoPlayerParams"></a>AndroidExoPlayerParams</h2>

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
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Url of the video to play.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      userAgent
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the user agent. Default is <code>ExoPlayerPlugin</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      aspectRatio
    </td>
    <td>
      <code>AndroidExoPlayerAspectRatio</code>
    </td>
    <td>
      <p>Set the player aspect ratio.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hideTimeout
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Hide controls after this many milliseconds, default is <code>5000</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoPlay
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>When set to false stream will not automatically start.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      seekTo
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Start playback at this many milliseconds into video, default is <code>0</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      forwardTime
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Amount of time in milliseconds to use when skipping forward, default is <code>1000</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      rewindTime
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Amount of time in milliseconds to use when skipping backward, default is <code>1000</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      audioOnly
    </td>
    <td>
      <code></code>
    </td>
    <td>
      <p>Only play audio in the backgroud, default is <code>false</code>.
If you pass in <code>audioOnly: true</code>, make sure to manually close the player on some event (like escape button) since the plugin won&#39;t be detecting keypresses when playing audio in the background.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      true
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      subtitleUrl
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional subtitle url to display over the video.
We currently support .srt and .vtt subtitle formats. Subtitles are not supported on all stream types, as ExoPlayer has requirement that both video and subtitle &quot;must have the same number of periods, and must not have any dynamic windows&quot;, which means for simple mp4s it should work, but on more complex HLS/Dash setups it might not.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      connectTimeout
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>okhttp connect timeout in milliseconds (default is <code>0</code>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      readTimeout
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>okhttp read timeout in milliseconds (default is <code>0</code>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      writeTimeout
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>okhttp write timeout in milliseconds (default is <code>0</code>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      pingInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>okhttp socket ping interval in milliseconds (default is <code>0</code> or disabled)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      retryCount
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Number of times datasource will retry the stream before giving up (default is <code>3</code>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      controller
    </td>
    <td>
      <code>AndroidExoPlayerControllerConfig</code>
    </td>
    <td>
      <p>If this object is not present controller will not be visible.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AndroidExoplayerState" href="#AndroidExoplayerState"></a>AndroidExoplayerState</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  </tbody>
</table>


<h2><a class="anchor" name="AndroidExoPlayerControllerConfig" href="#AndroidExoPlayerControllerConfig"></a>AndroidExoPlayerControllerConfig</h2>

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
      streamImage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Image in the controller.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      streamTitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      streamDescription
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      hideProgress
    </td>
    <td>
      <code></code>
    </td>
    <td>
      <p>Hide entire progress bar.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      true
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      hidePosition
    </td>
    <td>
      <code></code>
    </td>
    <td>
      <p>If progress bar is visible hide current position from it</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      false
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      hideDuration
    </td>
    <td>
      <code></code>
    </td>
    <td>
      <p>If progress bar is visible Hide stream duration from it</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      controlIcons
    </td>
    <td>
      <code>*/
    exo_ffwd: string;
  }</code>
    </td>
    <td>
      <p>Override the player control button icons.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





