---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "tts"
title: "TTS"
header_sub_title: "Class in module "
doc: "TTS"
docType: "class"
---








<h1 class="api-title">

  
  TTS
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/text-to-speech.ts#L9">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-tts</code></pre>
<p>Repo:
  <a href="https://github.com/vilic/cordova-plugin-tts">
    https://github.com/vilic/cordova-plugin-tts
  </a>
</p>

<!-- description -->

<p>Text to Speech plugin</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {TTS} from &#39;ionic-native&#39;;

TTS.speak(&#39;Hello World&#39;)
  .then(() =&gt; console.log(&#39;Success&#39;))
  .catch((reason: any) =&gt; console.log(reason));
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="speak"></div>
<h3><code>speak(options)</code>
  
</h3>



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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the speaking finishes
</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

