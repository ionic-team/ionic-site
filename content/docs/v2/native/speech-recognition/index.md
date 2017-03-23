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







<h1 class="api-title">
  
  Speech Recognition
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/speech-recognition/index.ts#L43">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/pbakondy/cordova-plugin-speechrecognition/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-speechrecognition
$ npm install --save @ionic-native/Speech Recognition
</code></pre>
<p>Repo:
  <a href="https://github.com/pbakondy/cordova-plugin-speechrecognition">
    https://github.com/pbakondy/cordova-plugin-speechrecognition
  </a>
</p>

<!-- description -->

<p>This plugin does speech recognition using cloud services</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="isRecognitionAvailable"></div>
<h3>
  <code>isRecognitionAvailable()</code>
  

</h3>
Check feature available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="startListening"></div>
<h3>
  <code>startListening()</code>
  

</h3>
Start the recognition process


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt; Array&lt;string&gt; &gt;</code> list of recognized terms
</div><div id="stopListening"></div>
<h3>
  <code>stopListening()</code>
  

</h3>
Stop the recognition process



<div id="getSupportedLanguages"></div>
<h3>
  <code>getSupportedLanguages()</code>
  

</h3>
Get the list of supported languages


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt; Array&lt;string&gt; &gt;</code> list of languages
</div><div id="hasPermission"></div>
<h3>
  <code>hasPermission()</code>
  

</h3>
Check permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> has permission
</div><div id="requestPermission"></div>
<h3>
  <code>requestPermission()</code>
  

</h3>
Request permissions


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

