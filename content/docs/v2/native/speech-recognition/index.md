---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "speech-recognition"
title: "Speech Recognition"
header_sub_title: "Class in module "
doc: "Speech Recognition"
docType: "class"
---

<h1 class="api-title">Speech Recognition<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/speech-recognition/index.ts#L43">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/pbakondy/cordova-plugin-speechrecognition/issues">plugin repo</a>.
</p>



<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-speechrecognition
$ npm install --save @ionic-native/speech-recognition
</code></pre>
<p>Repo:
  <a href="https://github.com/pbakondy/cordova-plugin-speechrecognition">
    https://github.com/pbakondy/cordova-plugin-speechrecognition
  </a>
</p>


<p>This plugin does speech recognition using cloud services</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code>import { SpeechRecognition } from &#39;@ionic-native/speech-recognition&#39;;

constructor(private speechRecognition: SpeechRecognition) { }

...



// Check feature available
this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) =&gt; console.log(available))

// Start the recognition process
this.speechRecognition.startListening(options)
  .subscribe(
    (matches: Array&lt;string&gt;) =&gt; console.log(matches),
    (onerror) =&gt; console.log(&#39;error:&#39;, onerror)
  )

// Stop the recognition process (iOS only)
this.speechRecognition.stopListening()

// Get the list of supported languages
this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: Array&lt;string&gt;) =&gt; console.log(languages),
    (error) =&gt; console.log(error)
  )

// Check permission
this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) =&gt; console.log(hasPermission))

// Request permissions
this.speechRecognition.requestPermission()
  .then(
    () =&gt; console.log(&#39;Granted&#39;),
    () =&gt; console.log(&#39;Denied&#39;)
  )
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="isRecognitionAvailable" href="#isRecognitionAvailable"></a><code>isRecognitionAvailable()</code></h3>


Check feature available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="startListening" href="#startListening"></a><code>startListening()</code></h3>




Start the recognition process


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt; Array&lt;string&gt; &gt;</code> list of recognized terms
</div><h3><a class="anchor" name="stopListening" href="#stopListening"></a><code>stopListening()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Stop the recognition process



<h3><a class="anchor" name="getSupportedLanguages" href="#getSupportedLanguages"></a><code>getSupportedLanguages()</code></h3>


Get the list of supported languages


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt; Array&lt;string&gt; &gt;</code> list of languages
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Check permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> has permission
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission()</code></h3>


Request permissions


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





