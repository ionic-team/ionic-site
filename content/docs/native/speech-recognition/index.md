---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "speech-recognition"
title: "Speech Recognition"
header_sub_title: "Class in module "
doc: "Speech Recognition"
docType: "class"
---

<h1 class="api-title">Speech Recognition</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/speech-recognition/index.ts#L50">
  Improve this doc
</a>







<p>This plugin does speech recognition using cloud services</p>


<p>Repo:
  <a href="https://github.com/pbakondy/cordova-plugin-speechrecognition">
    https://github.com/pbakondy/cordova-plugin-speechrecognition
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-speechrecognition
$ npm install --save @ionic-native/speech-recognition
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SpeechRecognition } from &#39;@ionic-native/speech-recognition&#39;;

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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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





