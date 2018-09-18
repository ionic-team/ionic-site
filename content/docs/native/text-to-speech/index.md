---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "text-to-speech"
title: "Text To Speech"
header_sub_title: "Class in module "
doc: "Text To Speech"
docType: "class"
---

<h1 class="api-title">Text To Speech</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/text-to-speech/index.ts#L10">
  Improve this doc
</a>







<p>Text to Speech plugin</p>


<p>Repo:
  <a href="https://github.com/vilic/cordova-plugin-tts">
    https://github.com/vilic/cordova-plugin-tts
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-tts
$ npm install --save @ionic-native/text-to-speech
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { TextToSpeech } from &#39;@ionic-native/text-to-speech&#39;;

constructor(private tts: TextToSpeech) { }

...

this.tts.speak(&#39;Hello World&#39;)
  .then(() =&gt; console.log(&#39;Success&#39;))
  .catch((reason: any) =&gt; console.log(reason));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="speak" href="#speak"></a><code>speak(textOrOptions)</code></h3>




This function speaks
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
      textOrOptions</td>
    <td>
      <code>string</code>|<code>TTSOptions</code>
    </td>
    <td>
      <p>Text to speak or TTSOptions</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the speaking finishes
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Stop any current TTS playback


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="TTSOptions" href="#TTSOptions"></a>TTSOptions</h2>

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
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>text to speak</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      locale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>a string like &#39;en-US&#39;, &#39;zh-CN&#39;, etc</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      rate
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>speed rate, 0 ~ 1</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





