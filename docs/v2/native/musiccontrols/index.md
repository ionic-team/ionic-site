---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "musiccontrols"
title: "MusicControls"
header_sub_title: "Class in module "
doc: "MusicControls"
docType: "class"
---







<h1 class="api-title">
  
  MusicControls
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/music-controls.ts#L1">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-music-controls</code></pre>
<p>Repo:
  <a href="https://github.com/homerours/cordova-music-controls-plugin">
    https://github.com/homerours/cordova-music-controls-plugin
  </a>
</p>

<!-- description -->

<p>Music controls for Cordova applications.
Display a &#39;media&#39; notification with play/pause, previous, next buttons, allowing the user to control the play.
Handle also headset event (plug, unplug, headset button).</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {MusicControls} from &#39;ionic-native&#39;;

MusicControls.create({
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

  // Android only, optional
  // text displayed in the status bar when the notification (and the ticker) are updated
  ticker    : &#39;Now playing &quot;Time is Running Out&quot;&#39;
 });

 MusicControls.subscribe().subscribe(action =&gt; {

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

 MusicControls.listen(); // activates the observable above

 MusicControls.updateIsPlaying(true);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="create"></div>
<h3><code>create(options)</code>
  
</h3>


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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="destroy"></div>
<h3><code>destroy()</code>
  
</h3>


Destroy the media controller






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="subscribe"></div>
<h3><code>subscribe()</code>
  
</h3>




Subscribe to the events of the media controller






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="listen"></div>
<h3><code>listen()</code>
  
</h3>




Start listening for events, this enables the Observable from the subscribe method










<div id="updateIsPlaying"></div>
<h3><code>updateIsPlaying(isPlaying)</code>
  
</h3>




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
      isPlaying
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

