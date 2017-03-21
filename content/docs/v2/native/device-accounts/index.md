---
layout: "v2_fluid/docs_base"
version: "3.1.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "device-accounts"
title: "Device Accounts"
header_sub_title: "Class in module "
doc: "Device Accounts"
docType: "class"
---







<h1 class="api-title">
  
  Device Accounts
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/device-accounts/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add https://github.com/loicknuchel/cordova-device-accounts.git
$ npm install --save @ionic-native/device-accounts
</code></pre>
<p>Repo:
  <a href="https://github.com/loicknuchel/cordova-device-accounts">
    https://github.com/loicknuchel/cordova-device-accounts
  </a>
</p>

<!-- description -->

<p>Gets the Google accounts associated with the Android device</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { DeviceAccounts } from &#39;@ionic-native/device-accounts&#39;;

constructor(private deviceAccounts: DeviceAccounts) { }

...

this.deviceAccounts.get()
  .then(accounts =&gt; console.log(accounts))
  .catch(error =&gt; console.error(error));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="get"></div>
<h3>
  <code>get()</code>
  

</h3>
Gets all accounts registered on the Android Device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getByType"></div>
<h3>
  <code>getByType()</code>
  

</h3>
Get all accounts registered on Android device for requested type


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getEmails"></div>
<h3>
  <code>getEmails()</code>
  

</h3>
Get all emails registered on Android device (accounts with 'com.google' type)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getEmail"></div>
<h3>
  <code>getEmail()</code>
  

</h3>
Get the first email registered on Android device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

