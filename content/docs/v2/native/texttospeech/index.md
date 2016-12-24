---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "texttospeech"
title: "TextToSpeech"
header_sub_title: "Class in module "
doc: "TextToSpeech"
docType: "class"
---







<h1 class="api-title">
  
  TextToSpeech
  

  

  

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

<pre><code>import {TextToSpeech} from &#39;ionic-native&#39;;

TextToSpeech.speak(&#39;Hello World&#39;)
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



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>a string like &#39;en-US&#39;, &#39;zh-CN&#39;, etc</p>

    </td>
  </tr>
  
  <tr>
    <td>
      rate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>speed rate, 0 ~ 1</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

