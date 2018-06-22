---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "braintree"
title: "Braintree"
header_sub_title: "Class in module "
doc: "Braintree"
docType: "class"
---

<h1 class="api-title">Braintree</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/braintree/index.ts#L134">
  Improve this doc
</a>







<p>This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).</p>
<p> Ionic Native utilizes <a href="https://github.com/taracque/cordova-plugin-braintree">a maintained fork</a> of the original <code>cordova-plugin-braintree</code></p>
<p> For information on how to use Apple Pay with this plugin, please refer to the <a href="https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only">plugin documentation</a></p>
<p><strong>NOTE</strong>: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
See the <a href="https://developers.braintreepayments.com/start/hello-server/node">Braintree Node server documentation</a> for details and a <a href="https://github.com/braintree/braintree_express_example">sample Express server</a> that implements the required functionality.</p>


<p>Repo:
  <a href="https://github.com/taracque/cordova-plugin-braintree">
    https://github.com/taracque/cordova-plugin-braintree
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/taracque/cordova-plugin-braintree
$ npm install --save @ionic-native/braintree
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Braintree, ApplePayOptions, PaymentUIOptions } from &#39;@ionic-native/braintree&#39;;

constructor(private braintree: Braintree) { }

...

// Your Braintree `Tokenization Key` from the Braintree dashboard.
// Alternatively you can also generate this token server-side
// using a client ID in order to allow users to use stored payment methods.
// See the [Braintree Client Token documentation](https://developers.braintreepayments.com/reference/request/client-token/generate/node#customer_id) for details.
const BRAINTREE_TOKEN = &#39;&lt;YOUR_BRAINTREE_TOKEN&gt;&#39;;

// NOTE: Do not provide this unless you have configured your Apple Developer account
// as well as your Braintree merchant account, otherwise the Braintree module will fail.
const appleOptions: ApplePayOptions = {
  merchantId: &#39;&lt;YOUR MERCHANT ID&gt;&#39;,
  currency: &#39;USD&#39;,
  country: &#39;US&#39;
};

const paymentOptions: PaymentUIOptions = {
  amount: &#39;14.99&#39;,
  primaryDescription: &#39;Your product or service (per /item, /month, /week, etc)&#39;,
};

this.braintree.initialize(BRAINTREE_TOKEN)
  .then(() =&gt; this.braintree.setupApplePay(appleOptions))
  .then(() =&gt; this.braintree.presentDropInPaymentUI(paymentOptions))
  .then((result: PaymentUIResult) =&gt; {
    if (result.userCancelled) {
      console.log(&quot;User cancelled payment dialog.&quot;);
    } else {
      console.log(&quot;User successfully completed payment!&quot;);
      console.log(&quot;Payment Nonce: &quot; + result.nonce);
      console.log(&quot;Payment Result.&quot;, result);
    }
  })
  .catch((error: string) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initialize" href="#initialize"></a><code>initialize(token)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Used to initialize the Braintree client. This function must be called before other methods can be used.
 As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.

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
      token</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The client token or tokenization key to use with the Braintree client.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;undefined | string&gt;</code> Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
</div><h3><a class="anchor" name="setupApplePay" href="#setupApplePay"></a><code>setupApplePay(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Used to configure Apple Pay on iOS.
 In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.

 Do not turn on Apple Pay in Braintree if you don't have Apple Pay entitlements - the Braintree module will reject the attempt to set up Apple Pay.
 Please refer to the [Braintree Merchant Documentation](https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4#apple-pay-certificate-request-and-provisioning) to set up a Merchant Account.

 Calling this function on Android is a `noop` so you can call it without having to check which cordova platform you are on! :D

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
      options</td>
    <td>
      <code>ApplePayOptions</code>
    </td>
    <td>
      <p>The options used to configure Apple Pay.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;undefined | string&gt;</code> Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
</div><h3><a class="anchor" name="presentDropInPaymentUI" href="#presentDropInPaymentUI"></a><code>presentDropInPaymentUI(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Shows Braintree's Drop-In Payments UI.
 Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.

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
      options</td>
    <td>
      <code>PaymentUIOptions</code>
    </td>
    <td>
      <p>An optional argument used to configure the payment UI; see type definition for parameters. If not provided, the UI will show &quot;0.00&quot; as the price and an empty description.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PaymentUIResult | string&gt;</code> Returns a promise that resolves with a PaymentUIResult object on successful payment (or the user cancels), or rejects with a string message describing the failure.
</div>





<h2><a class="anchor" name="ApplePayOptions" href="#ApplePayOptions"></a>ApplePayOptions</h2>

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
      merchantId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Apple Merchant ID - can be obtained from the Apple Developer Portal.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      currency
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The currency in which to receive payment.
This is a 3 letter currency code (ISO-4217) - e.g. &quot;GBP&quot;, &quot;USD&quot;, &quot;MXN&quot;, etc.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      country
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The locale in which payment is accepted.
This is a 2 letter country code (ISO-3166-1) - e.g. &quot;GB&quot;, &quot;US&quot;, &quot;MX&quot;</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PaymentUIOptions" href="#PaymentUIOptions"></a>PaymentUIOptions</h2>

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
      amount
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The amount of the transaction to show in the drop-in UI on the
summary row as well as the call-to-action button, as a string.
If not provided, this value will default to &quot;0.00&quot;, e.g. free.
Unless you are simply capturing authorizations, you probably
want to fill this value in!</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      primaryDescription
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The description of the transaction to show in the drop-in UI on the summary row.
Defaults to empty string.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PaymentUIResult" href="#PaymentUIResult"></a>PaymentUIResult</h2>

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
      userCancelled
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Indicates if the user used the cancel button to close the dialog without
completing the payment.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      nonce
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The nonce returned for the payment transaction (if a payment was completed).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The payment type (if a payment was completed) (credit card, check, paypal, etc).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      localizedDescription
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A description of the payment method (if a payment was completed).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      card
    </td>
    <td>
      <code>*
     * Can be one of the following values:
     *
     * BTCardNetworkUnknown
     * BTCardNetworkAMEX
     * BTCardNetworkDinersClub
     * BTCardNetworkDiscover
     * BTCardNetworkMasterCard
     * BTCardNetworkVisa
     * BTCardNetworkJCB
     * BTCardNetworkLaser
     * BTCardNetworkMaestro
     * BTCardNetworkUnionPay
     * BTCardNetworkSolo
     * BTCardNetworkSwitch
     * BTCardNetworkUKMaestro
     */
    network: string;
  }</code>
    </td>
    <td>
      <p>Information about the credit card used to complete a payment (if a credit card was used).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      payPalAccount
    </td>
    <td>
      <code>{
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    billingAddress: string;
    shippingAddress: string;
    clientMetadataId: string;
    payerId: string;
  }</code>
    </td>
    <td>
      <p>Information about the PayPal account used to complete a payment (if a PayPal account was used).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      applePaycard
    </td>
    <td>
      <code>{}</code>
    </td>
    <td>
      <p>Information about the Apple Pay card used to complete a payment (if Apple Pay was used).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      threeDSecureCard
    </td>
    <td>
      <code>{
    liabilityShifted: boolean;
    liabilityShiftPossible: boolean;
  }</code>
    </td>
    <td>
      <p>Information about 3D Secure card used to complete a payment (if 3D Secure was used).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      venmoAccount
    </td>
    <td>
      <code>{
    username: string;
  }</code>
    </td>
    <td>
      <p>Information about Venmo account used to complete a payment (if a Venmo account was used).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





