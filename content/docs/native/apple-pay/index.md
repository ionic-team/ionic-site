---
layout: "fluid/docs_base"
version: "4.4.2"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/apple-pay/index.ts#L58">
  Improve this doc
</a>







<p>A dependency free Cordova plugin to provide Apple Pay functionality.</p>


<p>Repo:
  <a href="https://github.com/trueflywood/cordova-plugin-applepay">
    https://github.com/trueflywood/cordova-plugin-applepay
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


ApplePay.makePaymentRequest(
 {
       items: [
           {
               label: &#39;3 x Basket Items&#39;,
               amount: 49.99
           },
           {
               label: &#39;Next Day Delivery&#39;,
               amount: 3.99
           },
                   {
               label: &#39;My Fashion Company&#39;,
               amount: 53.98
           }
       ],
       shippingMethods: [
           {
               identifier: &#39;NextDay&#39;,
               label: &#39;NextDay&#39;,
               detail: &#39;Arrives tomorrow by 5pm.&#39;,
               amount: 3.99
           },
           {
               identifier: &#39;Standard&#39;,
               label: &#39;Standard&#39;,
               detail: &#39;Arrive by Friday.&#39;,
               amount: 4.99
           },
           {
               identifier: &#39;SaturdayDelivery&#39;,
               label: &#39;Saturday&#39;,
               detail: &#39;Arrive by 5pm this Saturday.&#39;,
               amount: 6.99
           }
       ],
       merchantIdentifier: &#39;merchant.apple.test&#39;,
       currencyCode: &#39;GBP&#39;,
       countryCode: &#39;GB&#39;,
       billingAddressRequirement: &#39;none&#39;,
       shippingAddressRequirement: &#39;none&#39;,
       shippingType: &#39;shipping&#39;
 })
 .then((paymentResponse) =&gt; {
        // The user has authorized the payment.

        // Handle the token, asynchronously, i.e. pass to your merchant bank to
        // action the payment, then once finished, depending on the outcome:

        // Here is an example implementation:

        // MyPaymentProvider.authorizeApplePayToken(token.paymentData)
        //    .then((captureStatus) =&gt; {
        //        // Displays the &#39;done&#39; green tick and closes the sheet.
        //        ApplePay.completeLastTransaction(&#39;success&#39;);
        //    })
        //    .catch((err) =&gt; {
        //        // Displays the &#39;failed&#39; red cross.
        //        ApplePay.completeLastTransaction(&#39;failure&#39;);
        //    });


    })
 .catch((e) =&gt; {
        // Failed to open the Apple Pay sheet, or the user cancelled the payment.
    })
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="canMakePayments" href="#canMakePayments"></a><code>canMakePayments()</code></h3>




Detects if the current device supports Apple Pay and has any capable cards registered.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IMakePayments&gt;</code> Returns a promise
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
This means, that the application must proceed with the token authorisation and return a success, failure,
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







