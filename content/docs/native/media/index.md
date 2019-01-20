---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "media"
title: "Media"
header_sub_title: "Class in module "
doc: "Media"
docType: "class"
---

<h1 class="api-title">Media</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/media/index.ts#L182">
  Improve this doc
</a>







<p>This plugin provides the ability to record and play back audio files on a device.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-media">
    https://github.com/apache/cordova-plugin-media
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-media
$ npm install --save @ionic-native/media
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Media, MediaObject } from &#39;@ionic-native/media&#39;;


constructor(private media: Media) { }


...


// Create a Media instance.  Expects path to file or url as argument
// We can optionally pass a second argument to track the status of the media

const file: MediaObject = this.media.create(&#39;file.mp3&#39;);

// to listen to plugin events:

file.onStatusUpdate.subscribe(status =&gt; console.log(status)); // fires when file status changes

file.onSuccess.subscribe(() =&gt; console.log(&#39;Action is successful&#39;));

file.onError.subscribe(error =&gt; console.log(&#39;Error!&#39;, error));

// play the file
file.play();

// pause the file
file.pause();

// get current playback position
file.getCurrentPosition().then((position) =&gt; {
  console.log(position);
});

// get file duration
let duration = file.getDuration();
console.log(duration);

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
const file: MediaObject = this.media.create(&#39;path/to/file.mp3&#39;);

file.startRecord();

file.stopRecord();
</code></pre>
<p>Some hints if you are using iOS and recording doesn&#39;t work:
1.) Try to use a absolute file path but remove beginning &quot;file://&quot;.
Then it looks like: <code>/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a</code>
Example: <code>this.media.create(this.file.tempDirectory.replace(/^file:\/\//, &#39;&#39;) + &#39;my_file.m4a&#39;)</code>
2.) If that&#39;s not working, too, create the file before using.
Example:</p>
<pre><code class="lang-typescript">import { Media, MediaObject } from &#39;@ionic-native/media&#39;;
import { File } from &#39;@ionic-native/file&#39;;

...

constructor(private media: Media, private file: File) { }

...

this.file.createFile(this.file.tempDirectory, &#39;my_file.m4a&#39;, true).then(() =&gt; {
  let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, &#39;&#39;) + &#39;my_file.m4a&#39;);
  file.startRecord();
  window.setTimeout(() =&gt; file.stopRecord(), 10000);
});
</code></pre>
<p>You can find the reasons here: <a href="https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906">https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906</a></p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(src)</code></h3>

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
      src</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A URI containing the audio content.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>MediaObject</code> 
</div>

<h2><a class="anchor" name="MediaObject" href="#MediaObject"></a>MediaObject</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="onSuccess" href="#onSuccess"></a><code>onSuccess()</code></h3>

An observable that notifies you on actions success



<h3><a class="anchor" name="onError" href="#onError"></a><code>onError()</code></h3>

An observable that notifies you when an error occurs



<h3><a class="anchor" name="onStatusUpdate" href="#onStatusUpdate"></a><code>onStatusUpdate()</code></h3>

An observable that notifies you when the file status changes



<h3><a class="anchor" name="getCurrentAmplitude" href="#getCurrentAmplitude"></a><code>getCurrentAmplitude()</code></h3>


Get the current amplitude of the current recording.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with the amplitude of the current recording
</div><h3><a class="anchor" name="getCurrentPosition" href="#getCurrentPosition"></a><code>getCurrentPosition()</code></h3>


Get the current position within an audio file. Also updates the Media object's position parameter.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with the position of the current recording
</div><h3><a class="anchor" name="getDuration" href="#getDuration"></a><code>getDuration()</code></h3>




Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> Returns a promise with the duration of the current recording
</div><h3><a class="anchor" name="play" href="#play"></a><code>play()</code></h3>




Starts or resumes playing an audio file.



<h3><a class="anchor" name="pause" href="#pause"></a><code>pause()</code></h3>




Pauses playing an audio file.



<h3><a class="anchor" name="release" href="#release"></a><code>release()</code></h3>




Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.



<h3><a class="anchor" name="seekTo" href="#seekTo"></a><code>seekTo(milliseconds)</code></h3>




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
      milliseconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The time position you want to set for the current audio file</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setVolume" href="#setVolume"></a><code>setVolume(volume)</code></h3>




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
      volume</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The volume to set for playback. The value must be within the range of 0.0 to 1.0.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setRate" href="#setRate"></a><code>setRate()</code></h3>







<h3><a class="anchor" name="startRecord" href="#startRecord"></a><code>startRecord()</code></h3>




Starts recording an audio file.



<h3><a class="anchor" name="stopRecord" href="#stopRecord"></a><code>stopRecord()</code></h3>




Stops recording



<h3><a class="anchor" name="pauseRecord" href="#pauseRecord"></a><code>pauseRecord()</code></h3>




Pauses recording



<h3><a class="anchor" name="resumeRecord" href="#resumeRecord"></a><code>resumeRecord()</code></h3>




Resumes recording



<h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>




Stops playing an audio file.







<h2><a class="anchor" name="MediaError" href="#MediaError"></a>MediaError</h2>

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
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Error message</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      code
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Error code</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





