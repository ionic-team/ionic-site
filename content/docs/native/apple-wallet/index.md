---
layout: "fluid/docs_base"
version: "4.17.0"
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


// Simple call to check whether the app can add cards to Apple Pay.
this.appleWallet.available()
 .then((res) =&gt; {
   // Apple Wallet is enabled and a supported card is setup. Expect:
   // boolean value, true or false
  })
 .catch((message) =&gt; {
   // Error message while trying to know if device is able to add to wallet
 });


...


// Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
// The encryption scheme, cardholder name, and primary account suffix are required for configuration.
// The configuration information is used for setup and display only. It should not contain any sensitive information.

let data: cardData = {
   cardholderName: &#39;Test User&#39;,
   primaryAccountNumberSuffix: &#39;1234&#39;,
   localizedDescription: &#39;Description of payment card&#39;,
   paymentNetwork: &#39;VISA&#39;
 }

this.appleWallet.startAddPaymentPass(data: cardData)
 .then((res) =&gt; {
   // User proceed and successfully asked to add card to his wallet
   // Use the callback response JSON payload to complete addition process
  })
 .catch((err) =&gt; {
   // Error or user cancelled.
 });

// You should expect the callback success response to be as follow

 // {
 //  data: {
 //    &quot;certificateSubCA&quot;: &quot;Base64 string represents certificateSubCA&quot;,
 //    &quot;certificateLeaf&quot;:&quot; Base64 string represents certificateLeaf&quot;
 //    &quot;nonce&quot;: &quot;Base64 string represents nonce&quot;,
 //    &quot;nonceSignature&quot;: &quot;Base64 string represents nonceSignature&quot;,
 //   }
 // }

// This method provides the data needed to create an add payment request.
// Pass the certificate chain to the issuer server. The server returns an encrypted JSON file containing the card data.
// After you receive the encrypted data, pass it to completeAddPaymentPass method


...


let data: encryptedCardData = {
   activationData: &#39;encoded Base64 activationData from your server&#39;,
   encryptedPassData: &#39;encoded Base64 encryptedPassData from your server&#39;,
   wrappedKey: &#39;encoded Base64 wrappedKey from your server&#39;,
 }

this.appleWallet.encryptedCardData(data: encryptedCardData)
 .then((res) =&gt; {
   // callback success response means card has been added successfully,
   // PKAddPaymentPassViewController will be dismissed
  })
 .catch((err) =&gt; {
   // Error and can not add the card, or something wrong happend
   // PKAddPaymentPassViewController will be dismissed
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





