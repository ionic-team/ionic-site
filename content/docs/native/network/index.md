---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "network"
title: "Network"
header_sub_title: "Class in module "
doc: "Network"
docType: "class"
---

<h1 class="api-title">Network</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/network/index.ts#L11">
  Improve this doc
</a>







<p>Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the <a href="https://github.com/apache/cordova-plugin-network-information">Network plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-network-information">
    https://github.com/apache/cordova-plugin-network-information
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-network-information
$ npm install --save @ionic-native/network
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Network } from &#39;@ionic-native/network&#39;;

constructor(private network: Network) { }

...

// watch network for a disconnect
let disconnectSubscription = this.network.onDisconnect().subscribe(() =&gt; {
  console.log(&#39;network was disconnected :-(&#39;);
});

// stop disconnect watch
disconnectSubscription.unsubscribe();


// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() =&gt; {
  console.log(&#39;network connected!&#39;);
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() =&gt; {
    if (this.network.type === &#39;wifi&#39;) {
      console.log(&#39;we got a wifi connection, woohoo!&#39;);
    }
  }, 3000);
});

// stop connect watch
connectSubscription.unsubscribe();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="type" href="#type"></a><code>type</code></h3>


Connection type


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="downlinkMax" href="#downlinkMax"></a><code>downlinkMax</code></h3>


Downlink Max Speed


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="onchange" href="#onchange"></a><code>onchange()</code></h3>


Returns an observable to watch connection changes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onDisconnect" href="#onDisconnect"></a><code>onDisconnect()</code></h3>




Get notified when the device goes offline


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable.
</div><h3><a class="anchor" name="onConnect" href="#onConnect"></a><code>onConnect()</code></h3>




Get notified when the device goes online


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable.
</div>

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>The <code>type</code> property will return one of the following connection types: <code>unknown</code>, <code>ethernet</code>, <code>wifi</code>, <code>2g</code>, <code>3g</code>, <code>4g</code>, <code>cellular</code>, <code>none</code></p>




