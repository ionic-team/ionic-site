---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "native-audio"
title: "Native Audio"
header_sub_title: "Class in module "
doc: "Native Audio"
docType: "class"
---

<h1 class="api-title">Native Audio</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/native-audio/index.ts#L1">
  Improve this doc
</a>







<p>Native Audio Playback</p>


<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-plugin-nativeaudio">
    https://github.com/floatinghotpot/cordova-plugin-nativeaudio
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-nativeaudio
$ npm install --save @ionic-native/native-audio@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NativeAudio } from &#39;@ionic-native/native-audio&#39;;

constructor(private nativeAudio: NativeAudio) { }

...

this.nativeAudio.preloadSimple(&#39;uniqueId1&#39;, &#39;path/to/file.mp3&#39;).then(onSuccess, onError);
this.nativeAudio.preloadComplex(&#39;uniqueId2&#39;, &#39;path/to/file2.mp3&#39;, 1, 1, 0).then(onSuccess, onError);

this.nativeAudio.play(&#39;uniqueId1&#39;).then(onSuccess, onError);

// can optionally pass a callback to be called when the file is done playing
this.nativeAudio.play(&#39;uniqueId1&#39;, () =&gt; console.log(&#39;uniqueId1 is done playing&#39;));

this.nativeAudio.loop(&#39;uniqueId2&#39;).then(onSuccess, onError);

this.nativeAudio.setVolumeForComplexAsset(&#39;uniqueId2&#39;, 0.6).then(onSuccess,onError);

this.nativeAudio.stop(&#39;uniqueId1&#39;).then(onSuccess,onError);

this.nativeAudio.unload(&#39;uniqueId1&#39;).then(onSuccess,onError);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="preloadSimple" href="#preloadSimple"></a><code>preloadSimple(id,&nbsp;assetPath)</code></h3>


Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  
  <tr>
    <td>
      assetPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the relative path or absolute URL (inluding http://) to the audio asset.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="preloadComplex" href="#preloadComplex"></a><code>preloadComplex(id,&nbsp;assetPath,&nbsp;volume,&nbsp;voices,&nbsp;delay)</code></h3>


Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  
  <tr>
    <td>
      assetPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the relative path or absolute URL (inluding http://) to the audio asset.</p>
</td>
  </tr>
  
  <tr>
    <td>
      volume</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>the volume of the preloaded sound (0.1 to 1.0)</p>
</td>
  </tr>
  
  <tr>
    <td>
      voices</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>the number of multichannel voices available</p>
</td>
  </tr>
  
  <tr>
    <td>
      delay</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="play" href="#play"></a><code>play(id,&nbsp;completeCallback)</code></h3>




Plays an audio asset
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  
  <tr>
    <td>
      completeCallback</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>optional. Callback to be invoked when audio is done playing</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop(id)</code></h3>


Stops playing an audio
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="loop" href="#loop"></a><code>loop(id)</code></h3>


Loops an audio asset infinitely, this only works for complex assets
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unload" href="#unload"></a><code>unload(id)</code></h3>


Unloads an audio file from memory
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setVolumeForComplexAsset" href="#setVolumeForComplexAsset"></a><code>setVolumeForComplexAsset(id,&nbsp;volume)</code></h3>


Changes the volume for preloaded complex assets.
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
      id</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>
</td>
  </tr>
  
  <tr>
    <td>
      volume</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>the volume of the audio asset (0.1 to 1.0)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





