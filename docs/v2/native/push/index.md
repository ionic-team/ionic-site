---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "push"
title: "Push"
header_sub_title: "Class in module "
doc: "Push"
docType: "class"
---








<h1 class="api-title">

  
  Push
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/push.ts#L245'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add phonegap-plugin-push</code></pre>
<p>Repo:
  <a href="https://github.com/phonegap/phonegap-plugin-push">
    https://github.com/phonegap/phonegap-plugin-push
  </a>
</p>

<!-- description -->

<p>Register and receive push notifications.</p>
<p>Requires Cordova plugin: <code>phonegap-plugin-push</code>. For more info, please see the <a href="https://github.com/phonegap/phonegap-plugin-push">Push plugin docs</a>.</p>
<p>For TypeScript users, see the <a href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md">Push plugin docs about using TypeScript for custom notifications</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Push} from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="init"></div>
<h3><code>init(options)</code>

</h3>



Initialize the plugin on the native side.

```
var push = Push.init({
   android: {
       senderID: "12345679"
   },
   ios: {
       alert: "true",
       badge: true,
       sound: 'false'
   },
   windows: {}
});
```



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
      
<code>PushOptions</code>
    </td>
    <td>
      <p>The Push <a href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#parameters">options</a>.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>PushNotification</code> Returns a new [PushNotification](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonevent-callback) object.
</div>



<div id="hasPermission"></div>
<h3><code>hasPermission()</code>

</h3>

Check whether the push notification permission has been granted.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

