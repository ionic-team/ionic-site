---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "youtube-video-player"
title: "Youtube Video Player"
header_sub_title: "Class in module "
doc: "Youtube Video Player"
docType: "class"
---







<h1 class="api-title">
  
  Youtube Video Player
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/youtube-video-player/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git
$ npm install --save @ionic-native/
</code></pre>
<p>Repo:
  <a href="https://github.com/Glitchbone/CordovaYoutubeVideoPlayer">
    https://github.com/Glitchbone/CordovaYoutubeVideoPlayer
  </a>
</p>

<!-- description -->

<p>Plays YouTube videos in Native YouTube App</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { YoutubeVideoPlayer } from &#39;@ionic-native/youtube-video-player&#39;;

constructor(private youtube: YoutubeVideoPlayer) { }

...


this.youtube.openVideo(&#39;myvideoid&#39;);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="openVideo"></div>
<h3>
  <code>openVideo(videoId)</code>
  

</h3>
Plays a YouTube video
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
      videoId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Video ID</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

