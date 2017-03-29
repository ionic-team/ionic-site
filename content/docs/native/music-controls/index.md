---
layout: "fluid/docs_base"
version: "3.4.3"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/music-controls/index.ts#L17">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-music-controls
$ npm install --save @ionic-native/music-controls
</code></pre>
<p>Repo:
  <a href="https://github.com/homerours/cordova-music-controls-plugin">
    https://github.com/homerours/cordova-music-controls-plugin
  </a>
</p>


<p>Music controls for Cordova applications.
Display a &#39;media&#39; notification with play/pause, previous, next buttons, allowing the user to control the play.
Handle also headset event (plug, unplug, headset button).</p>









<h2>Usage</h2>
<pre><code>import { MusicControls } from &#39;@ionic-native/music-controls&#39;;

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
  album       : &#39;Absolution&#39;     // optional, default: &#39;&#39;
  duration : 60, // optional, default: 0
  elapsed : 10, // optional, default: 0

  // Android only, optional
  // text displayed in the status bar when the notification (and the ticker) are updated
  ticker    : &#39;Now playing &quot;Time is Running Out&quot;&#39;
 });

 this.musicControls.subscribe(action =&gt; {

   switch(action) {
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

       // Headset events (Android only)
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

 });

 this.musicControls.listen(); // activates the observable above

 this.musicControls.updateIsPlaying(true);
</code></pre>








<h2>Instance Members</h2>
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>





