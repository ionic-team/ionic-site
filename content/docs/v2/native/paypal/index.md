---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "paypal"
title: "PayPal"
header_sub_title: "Class in module "
doc: "PayPal"
docType: "class"
---







<h1 class="api-title">
  
  PayPal
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/pay-pal.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add com.paypal.cordova.mobilesdk</code></pre>
<p>Repo:
  <a href="https://github.com/paypal/PayPal-Cordova-Plugin">
    https://github.com/paypal/PayPal-Cordova-Plugin
  </a>
</p>

<!-- description -->

<p>PayPal plugin for Cordova/Ionic Applications</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {PayPal, PayPalPayment, PayPalConfiguration} from &quot;ionic-native&quot;;

PayPal.init({
  &quot;PayPalEnvironmentProduction&quot;: &quot;YOUR_PRODUCTION_CLIENT_ID&quot;,
  &quot;PayPalEnvironmentSandbox&quot;: &quot;YOUR_SANDBOX_CLIENT_ID&quot;
}).then(() =&gt; {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  PayPal.prepareToRender(&#39;PayPalEnvironmentSandbox&#39;, new PayPalConfiguration({
    // Only needed if you get an &quot;Internal Service Error&quot; after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() =&gt; {
    let payment = new PayPalPayment(&#39;3.33&#39;, &#39;USD&#39;, &#39;Description&#39;, &#39;sale&#39;);
    PayPal.renderSinglePaymentUI(payment).then(() =&gt; {
      // Successfully paid

      // Example sandbox response
      //
      // {
      //   &quot;client&quot;: {
      //     &quot;environment&quot;: &quot;sandbox&quot;,
      //     &quot;product_name&quot;: &quot;PayPal iOS SDK&quot;,
      //     &quot;paypal_sdk_version&quot;: &quot;2.16.0&quot;,
      //     &quot;platform&quot;: &quot;iOS&quot;
      //   },
      //   &quot;response_type&quot;: &quot;payment&quot;,
      //   &quot;response&quot;: {
      //     &quot;id&quot;: &quot;PAY-1AB23456CD789012EF34GHIJ&quot;,
      //     &quot;state&quot;: &quot;approved&quot;,
      //     &quot;create_time&quot;: &quot;2016-10-03T13:33:33Z&quot;,
      //     &quot;intent&quot;: &quot;sale&quot;
      //   }
      // }
    }, () =&gt; {
      // Error or render dialog closed without being successful
    });
  }, () =&gt; {
    // Error in configuration
  });
}, () =&gt; {
  // Error in initialization, maybe PayPal isn&#39;t supported or something else
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="version"></div>
<h3><code>version()</code>
  
</h3>


Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>



<div id="init"></div>
<h3><code>init(clientIdsForEnvironments:)</code>
  
</h3>


You must preconnect to PayPal to prepare the device for processing payments.
This improves the user experience, by making the presentation of the
UI faster. The preconnect is valid for a limited time, so
the recommended time to preconnect is on page load.



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
      clientIdsForEnvironments:
      
      
    </td>
    <td>
      
<code>PayPalEnvironment</code>
    </td>
    <td>
      <p>set of client ids for environments</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="prepareToRender"></div>
<h3><code>prepareToRender(environment:,&nbsp;configuration:)</code>
  
</h3>


You must preconnect to PayPal to prepare the device for processing payments.
This improves the user experience, by making the presentation of the UI faster.
The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.



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
      environment:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>available options are &quot;PayPalEnvironmentNoNetwork&quot;, &quot;PayPalEnvironmentProduction&quot; and &quot;PayPalEnvironmentSandbox&quot;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      configuration:
      
      
    </td>
    <td>
      
<code>PayPalConfiguration</code>
    </td>
    <td>
      <p>PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="renderSinglePaymentUI"></div>
<h3><code>renderSinglePaymentUI(payment)</code>
  
</h3>


Start PayPal UI to collect payment from the user.
See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
for more documentation of the params.



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
      payment
      
      
    </td>
    <td>
      
<code>PayPalPayment</code>
    </td>
    <td>
      <p>PayPalPayment object</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="clientMetadataID"></div>
<h3><code>clientMetadataID()</code>
  
</h3>


Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
payment is originating from a valid, user-consented device+application.
This helps reduce fraud and decrease declines.
This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
Pass the result to your server, to include in the payment request sent to PayPal.
Do not otherwise cache or store this value.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="renderFuturePaymentUI"></div>
<h3><code>renderFuturePaymentUI()</code>
  
</h3>


Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="renderProfileSharingUI"></div>
<h3><code>renderProfileSharingUI(scopes)</code>
  
</h3>


Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing



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
      scopes
      
      
    </td>
    <td>
      
<code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
See <a href="https://developer.paypal.com/docs/integration/direct/identity/attributes/">https://developer.paypal.com/docs/integration/direct/identity/attributes/</a> for more details</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->
<!--<h2><a class="anchor" name="related-classes" href="#related-classes"></a>Related Classes</h2>-->



<h2><a class="anchor" name="PayPalPayment" href="#PayPalPayment"></a>PayPalPayment</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="amount"></div>
<h3>
  <code>amount()</code>
  

</h3>
The amount of the payment.




<div id="currency"></div>
<h3>
  <code>currency()</code>
  

</h3>
The ISO 4217 currency for the payment.




<div id="shortDescription"></div>
<h3>
  <code>shortDescription()</code>
  

</h3>
A short description of the payment.




<div id="intent"></div>
<h3>
  <code>intent()</code>
  

</h3>
"Sale" for an immediate payment.




<div id="bnCode"></div>
<h3>
  <code>bnCode()</code>
  

</h3>
Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
for your tracking purposes.




<div id="invoiceNumber"></div>
<h3>
  <code>invoiceNumber()</code>
  

</h3>
Optional invoice number, for your tracking purposes. (up to 256 characters)




<div id="custom"></div>
<h3>
  <code>custom()</code>
  

</h3>
Optional text, for your tracking purposes. (up to 256 characters)




<div id="softDescriptor"></div>
<h3>
  <code>softDescriptor()</code>
  

</h3>
Optional text which will appear on the customer's credit card statement. (up to 22 characters)




<div id="items"></div>
<h3>
  <code>items()</code>
  

</h3>
Optional array of PayPalItem objects.




<div id="shippingAddress"></div>
<h3>
  <code>shippingAddress()</code>
  

</h3>
Optional customer shipping address, if your app wishes to provide this to the SDK.




<div id="details"></div>
<h3>
  <code>details()</code>
  

</h3>
Optional PayPalPaymentDetails object








<h2><a class="anchor" name="PayPalItem" href="#PayPalItem"></a>PayPalItem</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="name"></div>
<h3>
  <code>name()</code>
  

</h3>
Name of the item. 127 characters max




<div id="quantity"></div>
<h3>
  <code>quantity()</code>
  

</h3>
Number of units. 10 characters max.




<div id="price"></div>
<h3>
  <code>price()</code>
  

</h3>
Unit price for this item 10 characters max.




<div id="currency"></div>
<h3>
  <code>currency()</code>
  

</h3>
ISO standard currency code.




<div id="sku"></div>
<h3>
  <code>sku()</code>
  

</h3>
The stock keeping unit for this item. 50 characters max (optional)








<h2><a class="anchor" name="PayPalPaymentDetails" href="#PayPalPaymentDetails"></a>PayPalPaymentDetails</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="subtotal"></div>
<h3>
  <code>subtotal()</code>
  

</h3>
Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.




<div id="shipping"></div>
<h3>
  <code>shipping()</code>
  

</h3>
Amount charged for shipping. 10 characters max with support for 2 decimal places.




<div id="tax"></div>
<h3>
  <code>tax()</code>
  

</h3>
Amount charged for tax. 10 characters max with support for 2 decimal places.








<h2><a class="anchor" name="PayPalShippingAddress" href="#PayPalShippingAddress"></a>PayPalShippingAddress</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="recipientName"></div>
<h3>
  <code>recipientName()</code>
  

</h3>
Name of the recipient at this address. 50 characters max.




<div id="line1"></div>
<h3>
  <code>line1()</code>
  

</h3>
Line 1 of the address (e.g., Number, street, etc). 100 characters max.




<div id="line2"></div>
<h3>
  <code>line2()</code>
  

</h3>
Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.




<div id="city"></div>
<h3>
  <code>city()</code>
  

</h3>
City name. 50 characters max.




<div id="state"></div>
<h3>
  <code>state()</code>
  

</h3>
2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.




<div id="postalCode"></div>
<h3>
  <code>postalCode()</code>
  

</h3>
ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.




<div id="countryCode"></div>
<h3>
  <code>countryCode()</code>
  

</h3>
2-letter country code. 2 characters max.







<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="PayPalEnvironment" href="#PayPalEnvironment"></a>PayPalEnvironment</h2>


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
      PayPalEnvironmentProduction
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      PayPalEnvironmentSandbox
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="PayPalConfigurationOptions" href="#PayPalConfigurationOptions"></a>PayPalConfigurationOptions</h2>


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
      defaultUserEmail
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Will be overridden by email used in most recent PayPal login.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      defaultUserPhoneCountryCode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Will be overridden by phone country code used in most recent PayPal login</p>

    </td>
  </tr>
  
  <tr>
    <td>
      defaultUserPhoneNumber
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Will be overridden by phone number used in most recent PayPal login.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      merchantName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your company name, as it should be displayed to the user when requesting consent via a PayPalFuturePaymentViewController.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      merchantPrivacyPolicyURL
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of your company&#39;s privacy policy, which will be offered to the user when requesting consent via a PayPalFuturePaymentViewController.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      merchantUserAgreementURL
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of your company&#39;s user agreement, which will be offered to the user when requesting consent via a PayPalFuturePaymentViewController.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      acceptCreditCards
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set to NO, the SDK will only support paying with PayPal, not with credit cards.
This applies only to single payments (via PayPalPaymentViewController).
Future payments (via PayPalFuturePaymentViewController) always use PayPal.
Defaults to true</p>

    </td>
  </tr>
  
  <tr>
    <td>
      payPalShippingAddressOption
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>For single payments, options for the shipping address.</p>
<ul>
<li>0 - PayPalShippingAddressOptionNone: no shipping address applies.</li>
<li>1 - PayPalShippingAddressOptionProvided: shipping address will be provided by your app,
in the shippingAddress property of PayPalPayment.</li>
<li>2 - PayPalShippingAddressOptionPayPal: user will choose from shipping addresses on file
for their PayPal account.</li>
<li>3 - PayPalShippingAddressOptionBoth: user will choose from the shipping address provided by your app,
in the shippingAddress property of PayPalPayment, plus the shipping addresses on file for the user&#39;s PayPal account.
Defaults to 0 (PayPalShippingAddressOptionNone).</li>
</ul>

    </td>
  </tr>
  
  <tr>
    <td>
      rememberUser
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set to YES, then if the user pays via their PayPal account,
the SDK will remember the user&#39;s PayPal username or phone number;
if the user pays via their credit card, then the SDK will remember
the PayPal Vault token representing the user&#39;s credit card.</p>
<p>If set to NO, then any previously-remembered username, phone number, or
credit card token will be erased, and subsequent payment information will
not be remembered.</p>
<p>Defaults to YES.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      languageOrLocale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>If not set, or if set to nil, defaults to the device&#39;s current language setting.</p>
<p>Can be specified as a language code (&quot;en&quot;, &quot;fr&quot;, &quot;zh-Hans&quot;, etc.) or as a locale (&quot;en_AU&quot;, &quot;fr_FR&quot;, &quot;zh-Hant_HK&quot;, etc.).
If the library does not contain localized strings for a specified locale, then will fall back to the language. E.g., &quot;es_CO&quot; -&gt; &quot;es&quot;.
If the library does not contain localized strings for a specified language, then will fall back to American English.</p>
<p>If you specify only a language code, and that code matches the device&#39;s currently preferred language,
then the library will attempt to use the device&#39;s current region as well.
E.g., specifying &quot;en&quot; on a device set to &quot;English&quot; and &quot;United Kingdom&quot; will result in &quot;en_GB&quot;.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      disableBlurWhenBackgrounding
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Normally, the SDK blurs the screen when the app is backgrounded,
to obscure credit card or PayPal account details in the iOS-saved screenshot.
If your app already does its own blurring upon backgrounding, you might choose to disable this.
Defaults to NO.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      presentingInPopover
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If you will present the SDK&#39;s view controller within a popover, then set this property to YES.
Defaults to NO. (iOS only)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      forceDefaultsInSandbox
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Sandbox credentials can be difficult to type on a mobile device. Setting this flag to YES will
cause the sandboxUserPassword and sandboxUserPin to always be pre-populated into login fields.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      sandboxUserPassword
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Password to use for sandbox if &#39;forceDefaultsInSandbox&#39; is set.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      sandboxUserPin
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>PIN to use for sandbox if &#39;forceDefaultsInSandbox&#39; is set.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

