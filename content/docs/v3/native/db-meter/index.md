---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "db-meter"
title: "DB Meter"
header_sub_title: "Class in module "
doc: "DB Meter"
docType: "class"
---

<h1 class="api-title">DB Meter</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/db-meter/index.ts#L2">
  Improve this doc
</a>







<p>This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.</p>


<p>Repo:
  <a href="https://github.com/akofman/cordova-plugin-dbmeter">
    https://github.com/akofman/cordova-plugin-dbmeter
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-dbmeter
$ npm install --save @ionic-native/db-meter
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DBMeter } from &#39;@ionic-native/db-meter&#39;;

constructor(private dbMeter: DBMeter) { }

...


// Start listening
let subscription = this.dbMeter.start().subscribe(
  data =&gt; console.log(data)
);

// Check if we are listening
this.dbMeter.isListening().then(
  isListening =&gt; console.log(isListening)
);

// Stop listening
subscription.unsubscribe();

// Delete DBMeter instance from memory
this.dbMeter.delete().then(
  () =&gt; console.log(&#39;Deleted DB Meter instance&#39;),
  error =&gt; console.log(&#39;Error occurred while deleting DB Meter instance&#39;)
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="start" href="#start"></a><code>start()</code></h3>




Starts listening


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
</div><h3><a class="anchor" name="isListening" href="#isListening"></a><code>isListening()</code></h3>


Check if the DB Meter is listening


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
</div><h3><a class="anchor" name="delete" href="#delete"></a><code>delete()</code></h3>


Delete the DB Meter instance


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
</div>





