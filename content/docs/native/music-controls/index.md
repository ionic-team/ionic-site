---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "music-controls"
title: "Music Controls"
header_sub_title: "Class in module "
doc: "Music Controls"
docType: "class"
---

<h1 class="api-title">Music Controls</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/music-controls/index.ts#L28">
  Improve this doc
</a>







<p>Music controls for Cordova applications.
Display a &#39;media&#39; notification with play/pause, previous, next buttons, allowing the user to control the play.
Handle also headset event (plug, unplug, headset button).</p>


<p>Repo:
  <a href="https://github.com/homerours/cordova-music-controls-plugin">
    https://github.com/homerours/cordova-music-controls-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-music-controls
$ npm install --save @ionic-native/music-controls
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { MusicControls } from &#39;@ionic-native/music-controls&#39;;

constructor(private musicControls: MusicControls) { }

...

this.musicControls.create({
  track       : &#39;Time is Running Out&#39;,        // optional, default : &#39;&#39;
  artist      : &#39;Muse&#39;,                       // optional, default : &#39;&#39;
  cover       : &#39;albums/absolution.jpg&#39;,      // optional, default : nothing
  // cover can be a local path (use fullpath &#39;file:///storage/emulated/...&#39;, or only &#39;my_image.jpg&#39; if my_image.jpg is in the www folder of your app)
  //           or a remote url (&#39;http://...&#39;, &#39;https://...&#39;, &#39;ftp://...&#39;)
  isPlaying   : true,                         // optional, default : true
  dismissable : true,                         // optional, default : false

  // hide previous/next/close buttons:
  hasPrev   : false,      // show previous button, optional, default: true
  hasNext   : false,      // show next button, optional, default: true
  hasClose  : true,       // show close button, optional, default: false

// iOS only, optional
  album       : &#39;Absolution&#39;,     // optional, default: &#39;&#39;
  duration : 60, // optional, default: 0
  elapsed : 10, // optional, default: 0
  hasSkipForward : true,  // show skip forward button, optional, default: false
  hasSkipBackward : true, // show skip backward button, optional, default: false
  skipForwardInterval: 15, // display number for skip forward, optional, default: 0
  skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
  hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional

  // Android only, optional
  // text displayed in the status bar when the notification (and the ticker) are updated, optional
  ticker    : &#39;Now playing &quot;Time is Running Out&quot;&#39;,
  // All icons default to their built-in android equivalents
 // The supplied drawable name, e.g. &#39;media_play&#39;, is the name of a drawable found under android/res/drawable* folders
  playIcon: &#39;media_play&#39;,
  pauseIcon: &#39;media_pause&#39;,
  prevIcon: &#39;media_prev&#39;,
  nextIcon: &#39;media_next&#39;,
  closeIcon: &#39;media_close&#39;,
  notificationIcon: &#39;notification&#39;
 });

 this.musicControls.subscribe().subscribe(action =&gt; {

   function events(action) {
     const message = JSON.parse(action).message;
         switch(message) {
             case &#39;music-controls-next&#39;:
                 // Do something
                 break;
             case &#39;music-controls-previous&#39;:
                 // Do something
                 break;
             case &#39;music-controls-pause&#39;:
                 // Do something
                 break;
             case &#39;music-controls-play&#39;:
                 // Do something
                 break;
             case &#39;music-controls-destroy&#39;:
                 // Do something
                 break;

         // External controls (iOS only)
         case &#39;music-controls-toggle-play-pause&#39; :
                 // Do something
                 break;
         case &#39;music-controls-seek-to&#39;:
           const seekToInSeconds = JSON.parse(action).position;
           this.musicControls.updateElapsed({
             elapsed: seekToInSeconds,
             isPlaying: true
           });
           // Do something
           break;
         case &#39;music-controls-skip-forward&#39;:
           // Do something
           break;
         case &#39;music-controls-skip-backward&#39;:
           // Do something
           break;

             // Headset events (Android only)
             // All media button events are listed below
             case &#39;music-controls-media-button&#39; :
                 // Do something
                 break;
             case &#39;music-controls-headset-unplugged&#39;:
                 // Do something
                 break;
             case &#39;music-controls-headset-plugged&#39;:
                 // Do something
                 break;
             default:
                 break;
         }
     }

 this.musicControls.listen(); // activates the observable above

 this.musicControls.updateIsPlaying(true);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(options)</code></h3>


Create the media controls
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
      options</td>
    <td>
      <code>MusicControlsOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="destroy" href="#destroy"></a><code>destroy()</code></h3>


Destroy the media controller


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe()</code></h3>




Subscribe to the events of the media controller


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="listen" href="#listen"></a><code>listen()</code></h3>




Start listening for events, this enables the Observable from the subscribe method



<h3><a class="anchor" name="updateIsPlaying" href="#updateIsPlaying"></a><code>updateIsPlaying(isPlaying)</code></h3>


Toggle play/pause:
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
      isPlaying</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="updateElapsed" href="#updateElapsed"></a><code>updateElapsed(args)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Update elapsed time, optionally toggle play/pause:
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
      args</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="updateDismissable" href="#updateDismissable"></a><code>updateDismissable(dismissable)</code></h3>


Toggle dismissable:
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
      dismissable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="MusicControlsOptions" href="#MusicControlsOptions"></a>MusicControlsOptions</h2>

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
      track
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      artist
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cover
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isPlaying
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      dismissable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasPrev
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasNext
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasSkipForward
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasSkipBackward
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      skipForwardInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      skipBackwardInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasScrubbing
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasClose
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      album
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      duration
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      elapsed
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ticker
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      playIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      pauseIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      prevIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      nextIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      closeIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





