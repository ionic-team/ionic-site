---
layout: "v2_fluid/docs_base"
version: "3.2.1"
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
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/stripe/index.ts#L79">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-stripe
$ npm install --save @ionic-native/stripe
</code></pre>
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

<pre><code>import { Stripe } from &#39;@ionic-native/stripe&#39;;

constructor(private stripe: Stripe) { }

...

this.stripe.setPublishableKey(&#39;my_publishable_key&#39;);

let card = {
 number: &#39;4242424242424242&#39;,
 expMonth: 12,
 expYear: 2020,
 cvc: &#39;220&#39;
};

this.stripe.createCardToken(card)
   .then(token =&gt; console.log(token))
   .catch(error =&gt; console.error(error));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="setPublishableKey"></div>
<h3>
  <code>setPublishableKey(publishableKey)</code>
  

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
</div><div id="createCardToken"></div>
<h3>
  <code>createCardToken(params)</code>
  

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
<code>Promise&lt;string&gt;</code> returns a promise that resolves with the token, or rejects with an error
</div><div id="createBankAccountToken"></div>
<h3>
  <code>createBankAccountToken(params)</code>
  

</h3>
Create a bank account token
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
      
<code>StripeBankAccountParams</code>
    </td>
    <td>
      <p>Bank account information</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> returns a promise that resolves with the token, or rejects with an error
</div><div id="validateCardNumber"></div>
<h3>
  <code>validateCardNumber(cardNumber)</code>
  

</h3>
Validates a credit card number
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
      cardNumber
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Credit card number</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise that resolves if the number is valid, and rejects if it's invalid
</div><div id="validateCVC"></div>
<h3>
  <code>validateCVC(cvc)</code>
  

</h3>
Validates a CVC number
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
      cvc
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>CVC number</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise that resolves if the number is valid, and rejects if it's invalid
</div><div id="validateExpiryDate"></div>
<h3>
  <code>validateExpiryDate(expMonth,&nbsp;expYear)</code>
  

</h3>
Validates an expiry date
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
      expMonth
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>expiry month</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      expYear
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>expiry year</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise that resolves if the date is valid, and rejects if it's invalid
</div><div id="getCardType"></div>
<h3>
  <code>getCardType(cardNumber)</code>
  

</h3>
Get a card type from card number
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
      cardNumber
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Card number</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> returns a promise that resolves with the credit card type
</div>



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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>CVC / CVV</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Cardholder name</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      address_line1
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Address line 1</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      address_line2
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Address line 2</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      address_city
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>City</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      address_state
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>State / Province</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      address_country
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Country</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      postal_code
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Postal code / ZIP Code</p>

      <strong class="tag">Optional</strong>
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
      <p>3-letter ISO code for currency</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

