---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "mediaplugin"
title: "MediaPlugin"
header_sub_title: "Class in module "
doc: "MediaPlugin"
docType: "class"
---








<h1 class="api-title">

  
  MediaPlugin
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/media.ts#L1'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-media</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-media">
    https://github.com/apache/cordova-plugin-media
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {MediaPlugin} from &#39;ionic-native&#39;;


...


// Playing a file
var file = new MediaPlugin(&quot;path/to/file.mp3&quot;);

// play the file
file.play();

// skip to 10 seconds
file.seekTo(10000);

// stop plying the file
file.stop();


...

// Recording to a file
var newFile = new MediaPlugin(&quot;path/to/file.mp3&quot;);
newFile.startRecord();

newFile.stopRecord();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="MEDIA_NONE"></div>
<h3><code>MEDIA_NONE()</code>

</h3>









<div id="MEDIA_STARTING"></div>
<h3><code>MEDIA_STARTING()</code>

</h3>









<div id="MEDIA_RUNNING"></div>
<h3><code>MEDIA_RUNNING()</code>

</h3>









<div id="MEDIA_PAUSED"></div>
<h3><code>MEDIA_PAUSED()</code>

</h3>









<div id="MEDIA_STOPPED"></div>
<h3><code>MEDIA_STOPPED()</code>

</h3>










<!-- methods on the class -->

<h2>Instance Methods</h2>

<div id="getCurrentAmplitude"></div>

<h3>
  <code>getCurrentAmplitude()</code>


</h3>

Returns the current amplitude of the current recording.











<div id="getCurrentPosition"></div>

<h3>
  <code>getCurrentPosition()</code>


</h3>

Returns the current position within an audio file. Also updates the Media object's position parameter.











<div id="getDuration"></div>

<h3>
  <code>getDuration()</code>


</h3>

Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.











<div id="play"></div>

<h3>
  <code>play()</code>


</h3>

Starts or resumes playing an audio file.











<div id="pause"></div>

<h3>
  <code>pause()</code>


</h3>

Pauses playing an audio file.











<div id="release"></div>

<h3>
  <code>release()</code>


</h3>

Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.











<div id="seekTo"></div>

<h3>
  <code>seekTo(milliseconds)</code>


</h3>

Sets the current position within an audio file.


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
      milliseconds
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="setVolume"></div>

<h3>
  <code>setVolume(volume)</code>


</h3>

Set the volume for an audio file.


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
      

    </td>
    <td>
      <p>The volume to set for playback. The value must be within the range of 0.0 to 1.0.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="startRecord"></div>

<h3>
  <code>startRecord()</code>


</h3>

Starts recording an audio file.











<div id="stopRecord"></div>

<h3>
  <code>stopRecord()</code>


</h3>

Stops recording











<div id="stop"></div>

<h3>
  <code>stop()</code>


</h3>

Stops playing an audio file.









<!-- related link --><!-- end content block -->


<!-- end body block -->

