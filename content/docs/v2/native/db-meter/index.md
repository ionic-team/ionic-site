---
layout: "v2_fluid/docs_base"
version: "3.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "db-meter"
title: "DB Meter"
header_sub_title: "Class in module "
doc: "DB Meter"
docType: "class"
---







<h1 class="api-title">
  
  DB Meter
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/db-meter/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-dbmeter
$ npm install --save @ionic-native/db-meter
</code></pre>
<p>Repo:
  <a href="https://github.com/akofman/cordova-plugin-dbmeter">
    https://github.com/akofman/cordova-plugin-dbmeter
  </a>
</p>

<!-- description -->

<p>This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { DBMeter } from &#39;@ionic-native/db-meter&#39;;

constructor(private dbMeter: DBMeter) { }

...


// Start listening
let subscription = this.dbMeter.start().subscribe(
  data =&gt; console.log(data)
);

// Check if we are listening
this.dbMeter.isListening().then(
  (isListening: boolean) =&gt; console.log(isListening)
);

// Stop listening
subscription.unsubscribe();

// Delete DBMeter instance from memory
this.dbMeter.delete().then(
  () =&gt; console.log(&#39;Deleted DB Meter instance&#39;),
  error =&gt; console.log(&#39;Error occurred while deleting DB Meter instance&#39;)
);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="start"></div>
<h3>
  <code>start()</code>
  

</h3>
Starts listening


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
</div><div id="isListening"></div>
<h3>
  <code>isListening()</code>
  

</h3>
Check if the DB Meter is listening


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
</div><div id="delete"></div>
<h3>
  <code>delete()</code>
  

</h3>
Delete the DB Meter instance


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

