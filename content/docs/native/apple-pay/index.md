---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "apple-pay"
title: "Apple Pay"
header_sub_title: "Class in module "
doc: "Apple Pay"
docType: "class"
---

<h1 class="api-title">Apple Pay</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/apple-pay/index.ts#L92">
  Improve this doc
</a>







<p>A dependency free Cordova plugin to provide Apple Pay functionality.</p>


<p>Repo:
  <a href="https://github.com/samkelleher/cordova-plugin-applepay">
    https://github.com/samkelleher/cordova-plugin-applepay
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-applepay
$ npm install --save @ionic-native/apple-pay
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ApplePay } from &#39;@ionic-native/apple-pay&#39;;


constructor(private applePay: ApplePay) { }

...
async applePay() {
  // This block is optional -- only if you need to update order items/shipping
  // methods in response to shipping method selections
  this.applePay.startListeningForShippingContactSelection()
    .subscribe(async selection =&gt; {
      try {
        await this.applePay.updateItemsAndShippingMethods({
          items: getFromSelection(selection),
          shippingMethods: getFromSelection(selection),
        });
      }
      catch {
        // handle update items error
      }
    });

  try {
    const applePayTransaction = await this.applePay.makePaymentRequest({
      items,
      shippingMethods,
      merchantIdentifier,
      currencyCode,
      countryCode,
      billingAddressRequirement: [&#39;name&#39;, &#39;email&#39;, &#39;phone&#39;],
      shippingAddressRequirement: &#39;none&#39;,
      shippingType: &#39;shipping&#39;
    });

    const transactionStatus = await completeTransactionWithMerchant(applePayTransaction);
    await this.applePay.completeLastTransaction(transactionStatus);
  } catch {
    // handle payment request error
    // Can also handle stop complete transaction but these should normally not occur
  }

  // only if you started listening before
  await this.applePay.stopListeningForShippingContactSelection();
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="canMakePayments" href="#canMakePayments"></a><code>canMakePayments()</code></h3>




Detects if the current device supports Apple Pay and has any capable cards registered.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IMakePayments&gt;</code> Returns a promise
</div><h3><a class="anchor" name="startListeningForShippingContactSelection" href="#startListeningForShippingContactSelection"></a><code>startListeningForShippingContactSelection()</code></h3>




Starts listening for shipping contact selection changes
Any time the user selects shipping contact, this callback will fire.
You *must* call `updateItemsAndShippingMethods` in response or else the
user will not be able to process payment.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;ISelectedShippingContact&gt;</code> emits with shipping contact information on
  shipping contact selection changes
</div><h3><a class="anchor" name="stopListeningForShippingContactSelection" href="#stopListeningForShippingContactSelection"></a><code>stopListeningForShippingContactSelection()</code></h3>




Stops listening for shipping contact selection changes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise</code> whether stop listening was successful. This should
  really only fail if this is called without starting listening
</div><h3><a class="anchor" name="updateItemsAndShippingMethods" href="#updateItemsAndShippingMethods"></a><code>updateItemsAndShippingMethods(list)</code></h3>




Update the list of pay sheet items and shipping methods in response to
a shipping contact selection event. This *must* be called in response to
any shipping contact selection event or else the user will not be able
to complete a transaction on the pay sheet. Do not call without
subscribing to shipping contact selection events first

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
      list</td>
    <td>
      <code>IOrderItemsAndShippingMethods</code>
    </td>
    <td>
      <p><code>items</code> and <code>shippingMethods</code> properties.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IUpdateItemsAndShippingStatus&gt;</code> 
</div><h3><a class="anchor" name="makePaymentRequest" href="#makePaymentRequest"></a><code>makePaymentRequest(order)</code></h3>




Request a payment with Apple Pay

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
      order</td>
    <td>
      <code>IOrder</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IPaymentResponse&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="completeLastTransaction" href="#completeLastTransaction"></a><code>completeLastTransaction(complete)</code></h3>




Once the makePaymentRequest has been resolved successfully, the device will be waiting for a completion event.
This means, that the application must proceed with the token authorization and return a success, failure,
or other validation error. Once this has been passed back, the Apple Pay sheet will be dismissed via an animation.

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
      complete</td>
    <td>
      <code>ITransactionStatus</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ICompleteTransaction&gt;</code> Returns a promise that resolves after confirmation of payment authorization completion
</div>





