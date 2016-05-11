---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "network"
title: "Network"
header_sub_title: "Class in module "
doc: "Network"
docType: "class"
---








<h1 class="api-title">

  
  Network
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/network.ts#L3'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-network-information</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-network-information">
    https://github.com/apache/cordova-plugin-network-information
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the <a href="https://github.com/apache/cordova-plugin-network-information">Network plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Amazon Fire OS</li>
  
  <li>iOS</li>
  
  <li>Android</li>
  
  <li>BlackBerry 10</li>
  
  <li>Windows Phone 7</li>
  
  <li>Windows Phone 8</li>
  
  <li>Windows</li>
  
  <li>Firefox OS</li>
  
  <li>Browser</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Network, Connection} from &#39;ionic-native&#39;;

// watch network for a disconnect
let disconnectSubscription = Network.onDisconnect().subscribe(() =&gt; {
  console.log(&#39;network was disconnected :-( &#39;)
});

// stop disconnect watch
disconnectSubscription.unsubscribe();


// watch network for a connection
let connectSubscription = Network.onConnect().subscribe(() =&gt; {
  console.log(&#39;network connected!&#39;); 
  // We just got a connection but we need to wait briefly
 // before we determine the connection type.  Might need to wait 
  // prior to doing any api requests as well.
  setTimeout(() =&gt; {
    console.log(Network.connection);
    if (Network.connection === Connection.WIFI) {
      console.log(&#39;we got a wifi connection, woohoo!&#39;);
    }
  }, 3000);
});

// stop connect watch
connectSubscription.unsubscribe();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="connection"></div>
<h3><code>connection()</code>

</h3>

Return the network connection type










<div id="onDisconnect"></div>
<h3><code>onDisconnect()</code>

</h3>



Get notified when the device goes offline






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable.
</div>



<div id="onConnect"></div>
<h3><code>onConnect()</code>

</h3>



Get notified when the device goes online






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable.
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

