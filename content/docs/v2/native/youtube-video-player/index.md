---
layout: "v2_fluid/docs_base"
version: "3.2.3"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "youtube-video-player"
title: "Youtube Video Player"
header_sub_title: "Class in module "
doc: "Youtube Video Player"
docType: "class"
---

<h1 class="api-title">Youtube Video Player</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/youtube-video-player/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git
$ npm install --save @ionic-native/youtube-video-player
</code></pre>
<p>Repo:
  <a href="https://github.com/Glitchbone/CordovaYoutubeVideoPlayer">
    https://github.com/Glitchbone/CordovaYoutubeVideoPlayer
  </a>
</p>


<p>Plays YouTube videos in Native YouTube App</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code>import { YoutubeVideoPlayer } from &#39;@ionic-native/youtube-video-player&#39;;

constructor(private youtube: YoutubeVideoPlayer) { }

...


this.youtube.openVideo(&#39;myvideoid&#39;);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="openVideo" href="#openVideo"></a><code>openVideo(videoId)</code></h3>




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
      videoId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Video ID</p>
</td>
  </tr>
  </tbody>
</table>







