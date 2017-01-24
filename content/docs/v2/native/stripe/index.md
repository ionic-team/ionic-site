---
layout: "v2_fluid/docs_base"
version: "2.3.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "stripe"
title: "Stripe"
header_sub_title: "Class in module "
doc: "Stripe"
docType: "class"
---







<h1 class="api-title">
  
  Stripe
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/stripe.ts#L51">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/zyramedia/cordova-plugin-stripe/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-stripe</code></pre>
<p>Repo:
  <a href="https://github.com/zyramedia/cordova-plugin-stripe">
    https://github.com/zyramedia/cordova-plugin-stripe
  </a>
</p>

<!-- description -->

<p>A plugin that allows you to use Stripe&#39;s Native SDKs for Android and iOS.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Stripe } from &#39;ionic-native&#39;;

Stripe.setPublishableKey(&#39;my_publishable_key&#39;);

let card = {
 number: &#39;4242424242424242&#39;,
 expMonth: 12,
 expYear: 2020,
 cvc: 220
};

Stripe.createToken(card)
   .then(token =&gt; console.log(token))
   .catch(error =&gt; console.error(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="setPublishableKey"></div>
<h3><code>setPublishableKey(publishableKey)</code>
  
</h3>


Set publishable key


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
      publishableKey
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Publishable key</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<div id="createCardToken"></div>
<h3><code>createCardToken(params)</code>
  
</h3>


Create Credit Card Token


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
      params
      
      
    </td>
    <td>
      
<code>StripeCardTokenParams</code>
    </td>
    <td>
      <p>Credit card information</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> returns a promise that resolves with the token, or reject with an error
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="StripeCardTokenParams" href="#StripeCardTokenParams"></a>StripeCardTokenParams</h2>


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
      number
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Card number</p>

    </td>
  </tr>
  
  <tr>
    <td>
      expMonth
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Expiry month</p>

    </td>
  </tr>
  
  <tr>
    <td>
      expYear
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Expiry year</p>

    </td>
  </tr>
  
  <tr>
    <td>
      cvc
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>CVC / CVV</p>

    </td>
  </tr>
  
  <tr>
    <td>
      name
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Cardholder name</p>

    </td>
  </tr>
  
  <tr>
    <td>
      address_line1
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Address line 1</p>

    </td>
  </tr>
  
  <tr>
    <td>
      address_line2
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Address line 2</p>

    </td>
  </tr>
  
  <tr>
    <td>
      address_city
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>City</p>

    </td>
  </tr>
  
  <tr>
    <td>
      address_state
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>State / Province</p>

    </td>
  </tr>
  
  <tr>
    <td>
      address_country
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Country</p>

    </td>
  </tr>
  
  <tr>
    <td>
      postal_code
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Postal code / ZIP Code</p>

    </td>
  </tr>
  
  <tr>
    <td>
      currency
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>3-letter ISO code for currency</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

