---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "media"
title: "Media"
header_sub_title: "Class in module "
doc: "Media"
docType: "class"
---







<h1 class="api-title">
  
  Media
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/media/index.ts#L126">
  Improve this doc
</a>



<!-- decorators -->





<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-media
$ npm install --save @ionic-native/media
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-media">
    https://github.com/apache/cordova-plugin-media
  </a>
</p>

<!-- description -->




<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { MediaPlugin, MediaObject } from &#39;@ionic-native/media&#39;;


constructor(private media: MediaPlugin) { }


...


// Create a MediaPlugin instance.  Expects path to file or url as argument
// We can optionally pass a second argument to track the status of the media

const onStatusUpdate = (status) =&gt; console.log(status);

this.media.create(&#39;path/to/file.mp3&#39;, onStatusUpdate)
  .then((file: MediaObject) =&gt; {

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

  })
  .catch(e =&gt; console.log(&#39;Error opening media file&#39;, e));


// Recording to a file
this.media.create(&#39;path/to/file.mp3&#39;)
  .then((file: MedieObject) =&gt; {

    file.startRecord();

    file.stopRecord();

  });
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="create"></div>
<h3>
  <code>create(src,&nbsp;onStatusUpdate)</code>
  

</h3>
Open a media file
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
      src
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>A URI containing the audio content.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onStatusUpdate
      
    </td>
    <td>
      
<code>Function</code>
    </td>
    <td>
      <p>A callback function to be invoked when the status of the file changes</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;MediaObject&gt;</code> 
</div>



<!-- other classes -->
<!--<h2><a class="anchor" name="related-classes" href="#related-classes"></a>Related Classes</h2>-->



<h2><a class="anchor" name="MediaObject" href="#MediaObject"></a>MediaObject</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getCurrentAmplitude"></div>
<h3>
  <code>getCurrentAmplitude()</code>
  

</h3>
Get the current amplitude of the current recording.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise with the amplitude of the current recording
</div><div id="getCurrentPosition"></div>
<h3>
  <code>getCurrentPosition()</code>
  

</h3>
Get the current position within an audio file. Also updates the Media object's position parameter.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise with the position of the current recording
</div><div id="getDuration"></div>
<h3>
  <code>getDuration()</code>
  

</h3>
Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> Returns a promise with the duration of the current recording
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
      
<code>number</code>
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



<div id="pauseRecord"></div>
<h3>
  <code>pauseRecord()</code>
  

</h3>
Pauses recording



<div id="resumeRecord"></div>
<h3>
  <code>resumeRecord()</code>
  

</h3>
Resumes recording



<div id="stop"></div>
<h3>
  <code>stop()</code>
  

</h3>
Stops playing an audio file.






<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

