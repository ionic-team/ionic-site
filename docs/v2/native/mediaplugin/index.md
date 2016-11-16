---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/media.ts#L7">
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

<pre><code class="lang-typescript">import { MediaPlugin } from &#39;ionic-native&#39;;



// Create a MediaPlugin instance.  Expects path to file or url as argument
var file = new MediaPlugin(&#39;path/to/file.mp3&#39;);

// Catch the Success &amp; Error Output
// Platform Quirks
// iOS calls success on completion of playback only
// Android calls success on completion of playback AND on release()
file.init.then(() =&gt; {
  console.log(&#39;Playback Finished&#39;);
}, (err) =&gt; {
  console.log(&#39;somthing went wrong! error code: &#39; + err.code + &#39; message: &#39; + err.message);
});

// play the file
file.play();

// pause the file
file.pause();

// get current playback position
file.getCurrentPosition().then((position) =&gt; {
  console.log(position);
});

// get file duration
file.getDuration().then((duration) =&gt; {
  console.log(position);
});

// skip to 10 seconds (expects int value in ms)
file.seekTo(10000);

// stop playing the file
file.stop();

// release the native audio resource
// Platform Quirks:
// iOS simply create a new instance and the old one will be overwritten
// Android you must call release() to destroy instances of media when you are done
file.release();

// Recording to a file
var newFile = new MediaPlugin(&#39;path/to/file.mp3&#39;);
newFile.startRecord();

newFile.stopRecord();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="init"></div>
<h3>
  <code>init</code>
  

</h3>




<div id="getCurrentAmplitude"></div>
<h3>
  <code>getCurrentAmplitude()</code>
  

</h3>
Get the current amplitude of the current recording.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise with the amplitude of the current recording
</div><div id="getCurrentPosition"></div>
<h3>
  <code>getCurrentPosition()</code>
  

</h3>
Get the current position within an audio file. Also updates the Media object's position parameter.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise with the position of the current recording
</div><div id="getDuration"></div>
<h3>
  <code>getDuration()</code>
  

</h3>
Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise with the duration of the current recording
</div><div id="play"></div>
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
      
<code>number</code>
    </td>
    <td>
      <p>The time position you want to set for the current audio file</p>

      
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








<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

