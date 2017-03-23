---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "broadcaster"
title: "Broadcaster"
header_sub_title: "Class in module "
doc: "Broadcaster"
docType: "class"
---







<h1 class="api-title">
  
  Broadcaster
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/broadcaster/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-broadcaster
$ npm install --save @ionic-native/broadcaster
</code></pre>
<p>Repo:
  <a href="https://github.com/bsorrentino/cordova-broadcaster">
    https://github.com/bsorrentino/cordova-broadcaster
  </a>
</p>

<!-- description -->

<p>This plugin adds exchanging events between native code and your app.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Broadcaster } from &#39;@ionic-native/broadcaster&#39;;

constructor(private broadcaster: Broadcaster) { }

...

// Listen to events from Native
this.broadcaster.addEventListener(&#39;eventName&#39;).then((event) =&gt; console.log(event));

// Send event to Native
this.broadcaster.fireNativeEvent(&#39;eventName&#39;, {}).then(() =&gt; console.log(&#39;success&#39;));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener(eventName)</code>
  

</h3>
This function listen to an event sent from the native code
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
      eventName
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable to watch when an event is received
</div><div id="fireNativeEvent"></div>
<h3>
  <code>fireNativeEvent(eventName,&nbsp;eventData)</code>
  

</h3>
This function sends data to the native code
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
      eventName
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      eventData
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when an event is successfully fired
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

