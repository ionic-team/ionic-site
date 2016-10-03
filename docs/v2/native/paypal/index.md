---
layout: "v2_fluid/docs_base"
version: "2.1.1"
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

<pre><code>import {PayPal} from &#39;ionic-native&#39;;

PayPal.init({
     &quot;PayPalEnvironmentProduction&quot;: &quot;YOUR_PRODUCTION_CLIENT_ID&quot;,
       &quot;PayPalEnvironmentSandbox&quot;: &quot;YOUR_SANDBOX_CLIENT_ID&quot;
       })
  .then(onSuccess)
  .catch(onError);
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="init"></div>
<h3><code>init(environment:,&nbsp;configuration:)</code>
  
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
      <p>For Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="version"></div>
<h3><code>version()</code>
  
</h3>

Retreive the version of PayPal iOS SDK Library.










<div id="renderSinglePaymentUI"></div>
<h3><code>renderSinglePaymentUI(payment:)</code>
  
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
      payment:
      
      
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










<div id="renderFuturePaymentUI"></div>
<h3><code>renderFuturePaymentUI()</code>
  
</h3>

Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments










<div id="renderProfileSharingUI"></div>
<h3><code>renderProfileSharingUI(scopes:)</code>
  
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
      scopes:
      
      
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








<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

