---
layout: "fluid/docs_base"
version: "4.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "stripe"
title: "Stripe"
header_sub_title: "Class in module "
doc: "Stripe"
docType: "class"
---

<h1 class="api-title">Stripe</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/stripe/index.ts#L104">
  Improve this doc
</a>







<p>A plugin that allows you to use Stripe&#39;s Native SDKs for Android and iOS.</p>


<p>Repo:
  <a href="https://github.com/zyramedia/cordova-plugin-stripe">
    https://github.com/zyramedia/cordova-plugin-stripe
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-stripe
$ npm install --save @ionic-native/stripe
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Stripe } from &#39;@ionic-native/stripe&#39;;

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
   .then(token =&gt; console.log(token.id))
   .catch(error =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setPublishableKey" href="#setPublishableKey"></a><code>setPublishableKey(publishableKey)</code></h3>


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
      publishableKey</td>
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
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="createCardToken" href="#createCardToken"></a><code>createCardToken(params)</code></h3>


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
      params</td>
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
  <b>Returns:</b> <code>Promise&lt;StripeCardTokenRes&gt;</code> returns a promise that resolves with the token object, or rejects with an error
</div><h3><a class="anchor" name="createBankAccountToken" href="#createBankAccountToken"></a><code>createBankAccountToken(params)</code></h3>


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
      params</td>
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
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> returns a promise that resolves with the token, or rejects with an error
</div><h3><a class="anchor" name="validateCardNumber" href="#validateCardNumber"></a><code>validateCardNumber(cardNumber)</code></h3>


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
      cardNumber</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves if the number is valid, and rejects if it's invalid
</div><h3><a class="anchor" name="validateCVC" href="#validateCVC"></a><code>validateCVC(cvc)</code></h3>


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
      cvc</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves if the number is valid, and rejects if it's invalid
</div><h3><a class="anchor" name="validateExpiryDate" href="#validateExpiryDate"></a><code>validateExpiryDate(expMonth,&nbsp;expYear)</code></h3>


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
      expMonth</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>expiry month</p>
</td>
  </tr>
  
  <tr>
    <td>
      expYear</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves if the date is valid, and rejects if it's invalid
</div><h3><a class="anchor" name="getCardType" href="#getCardType"></a><code>getCardType(cardNumber)</code></h3>


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
      cardNumber</td>
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
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> returns a promise that resolves with the credit card type
</div>





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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Postal code / ZIP Code</p>

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





