---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "youtube-video-player"
title: "Youtube Video Player"
header_sub_title: "Class in module "
doc: "Youtube Video Player"
docType: "class"
---

<h1 class="api-title">Youtube Video Player</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/youtube-video-player/index.ts#L1">
  Improve this doc
</a>







<p>Plays YouTube videos in Native YouTube App</p>


<p>Repo:
  <a href="https://github.com/ihadeed/CordovaYoutubeVideoPlayer">
    https://github.com/ihadeed/CordovaYoutubeVideoPlayer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-youtube-video-player
$ npm install --save @ionic-native/youtube-video-player
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>For Android 5.0+ you will need to add the following to config.xml</p>
<pre><code class="lang-xml">&lt;preference name=&quot;YouTubeDataApiKey&quot; value=&quot;[YOUR YOUTUBE API]&quot; /&gt;
</code></pre>
<p>For more information: <a href="https://developers.google.com/youtube/v3/getting-started">https://developers.google.com/youtube/v3/getting-started</a></p>
<pre><code class="lang-typescript">import { YoutubeVideoPlayer } from &#39;@ionic-native/youtube-video-player&#39;;

constructor(private youtube: YoutubeVideoPlayer) { }

...


this.youtube.openVideo(&#39;myvideoid&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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







