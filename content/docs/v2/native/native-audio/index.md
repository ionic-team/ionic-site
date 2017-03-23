---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "native-audio"
title: "Native Audio"
header_sub_title: "Class in module "
doc: "Native Audio"
docType: "class"
---







<h1 class="api-title">
  
  Native Audio
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/native-audio/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-nativeaudio
$ npm install --save @ionic-native/native-audio
</code></pre>
<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-plugin-nativeaudio">
    https://github.com/floatinghotpot/cordova-plugin-nativeaudio
  </a>
</p>

<!-- description -->

<p>Native Audio Playback</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="preloadSimple"></div>
<h3>
  <code>preloadSimple(id,&nbsp;assetPath)</code>
  

</h3>
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
      id
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      assetPath
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="preloadComplex"></div>
<h3>
  <code>preloadComplex(id,&nbsp;assetPath,&nbsp;volume,&nbsp;voices,&nbsp;delay)</code>
  

</h3>
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
      id
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      assetPath
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>the relative path or absolute URL (inluding http://) to the audio asset.</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      volume
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>the volume of the preloaded sound (0.1 to 1.0)</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      voices
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>the number of multichannel voices available</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      delay
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="play"></div>
<h3>
  <code>play(id,&nbsp;completeCallback)</code>
  

</h3>
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
      id
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      completeCallback
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="stop"></div>
<h3>
  <code>stop(id)</code>
  

</h3>
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
      id
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="loop"></div>
<h3>
  <code>loop(id)</code>
  

</h3>
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
      id
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="unload"></div>
<h3>
  <code>unload(id)</code>
  

</h3>
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
      id
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setVolumeForComplexAsset"></div>
<h3>
  <code>setVolumeForComplexAsset(id,&nbsp;volume)</code>
  

</h3>
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
      id
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>unique ID for the audio file</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      volume
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

