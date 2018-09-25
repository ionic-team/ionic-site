---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "apple-wallet"
title: "Apple Wallet"
header_sub_title: "Class in module "
doc: "Apple Wallet"
docType: "class"
---

<h1 class="api-title">Apple Wallet</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/apple-wallet/index.ts#L14">
  Improve this doc
</a>







<p>A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.</p>


<p>Repo:
  <a href="https://github.com/tomavic/cordova-apple-wallet">
    https://github.com/tomavic/cordova-apple-wallet
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-apple-wallet
$ npm install --save @ionic-native/apple-wallet
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppleWallet } from &#39;@ionic-native/apple-wallet&#39;;


constructor(private appleWallet: AppleWallet) { }

...


this.appleWallet.available()
 .then((res) =&gt; {
   // res is a boolean value, either true or false
   console.log(&quot;Is Apple Wallet available? &quot;, res);
  })
 .catch((message) =&gt; {
   console.error(&quot;ERROR AVAILBLE&gt;&gt; &quot;, message);
 });

...

let data: cardData = {
   cardholderName: &#39;Test User&#39;,
   primaryAccountNumberSuffix: &#39;1234&#39;,
   localizedDescription: &#39;Description of payment card&#39;,
   paymentNetwork: &#39;VISA&#39;
 }

this.appleWallet.startAddPaymentPass(data: cardData)
 .then((res) =&gt; {
   console.log(&quot;startAddPaymentPass success response &quot;, res);
  })
 .catch((err) =&gt; {
   console.error(&quot;startAddPaymentPass ERROR response&quot;, err);
 });

...

let data: encryptedCardData = {
   activationData: &#39;encoded Base64 activationData from your server&#39;,
   encryptedPassData: &#39;encoded Base64 encryptedPassData from your server&#39;,
   wrappedKey: &#39;encoded Base64 wrappedKey from your server&#39;,
 }

this.appleWallet.encryptedCardData(data: encryptedCardData)
 .then((res) =&gt; {
   console.log(&quot;completeAddCardToAppleWallet success response &quot;, res);
  })
 .catch((err) =&gt; {
   console.error(&quot;completeAddCardToAppleWallet ERROR response&quot;, err);
 });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="available" href="#available"></a><code>available()</code></h3>


Detects if the current device supports Apple Wallet


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise
</div><h3><a class="anchor" name="startAddPaymentPass" href="#startAddPaymentPass"></a><code>startAddPaymentPass(data)</code></h3>


Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
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
      data</td>
    <td>
      <code>cardData</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="completeAddPaymentPass" href="#completeAddPaymentPass"></a><code>completeAddPaymentPass(data)</code></h3>


Simple call contains the card data needed to add a card to Apple Pay.
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
      data</td>
    <td>
      <code>encryptedCardData</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





