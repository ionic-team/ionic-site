---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "speechkit"
title: "SpeechKit"
header_sub_title: "Class in module "
doc: "SpeechKit"
docType: "class"
---

<h1 class="api-title">SpeechKit</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/speechkit/index.ts#L1">
  Improve this doc
</a>







<p>Implementation of Nuance SpeechKit SDK on Ionic</p>


<p>Repo:
  <a href="https://github.com/Shmarkus/cordova-plugin-nuance-speechkit">
    https://github.com/Shmarkus/cordova-plugin-nuance-speechkit
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-nuance-speechkit
$ npm install --save @ionic-native/speechkit
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SpeechKit } from &#39;@ionic-native/speechkit&#39;;

constructor(private speechkit: SpeechKit) { }


// find voice names that match language from: https://developer.nuance.com/public/index.php?task=supportedLanguages
this.speechkit.tts(&#39;Text to be read out loud&#39;, &#39;ENG-GBR&#39;, &#39;Serena&#39;).then(
  (msg) =&gt; { console.log(msg); },
  (err) =&gt; { console.log(err); }
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="tts" href="#tts"></a><code>tts()</code></h3>


Speak text out loud in given language


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="asr" href="#asr"></a><code>asr()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Try to recognize what the user said


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





