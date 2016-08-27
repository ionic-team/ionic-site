---
layout: "v2_fluid/docs_base"
version: "1.3.19"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "paypalpayment"
title: "PayPalPayment"
header_sub_title: "Class in module "
doc: "PayPalPayment"
docType: "class"
---








<h1 class="api-title">

  
  PayPalPayment
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/pay-pal.ts#L85">
  Improve this doc
</a>





<!-- decorators --><!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Instance Members</h2>

<div id="new"></div>

<h3>
  <code>new(amount:,&nbsp;currencyCode:,&nbsp;shortDescription:,&nbsp;intent:)</code>
  

</h3>

Convenience constructor.
Returns a PayPalPayment with the specified amount, currency code, and short description.


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
      amount:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>The amount of the payment.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      currencyCode:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>The ISO 4217 currency for the payment.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      shortDescription:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>A short descripton of the payment.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      intent:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>&quot;Sale&quot; for an immediate payment.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="invoiceNumber"></div>

<h3>
  <code>invoiceNumber(invoiceNumber:)</code>
  

</h3>

Optional invoice number, for your tracking purposes. (up to 256 characters)


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
      invoiceNumber:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>The invoice number for the payment.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="custom"></div>

<h3>
  <code>custom(custom:)</code>
  

</h3>

Optional text, for your tracking purposes. (up to 256 characters)


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
      custom:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>The custom text for the payment.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="softDescriptor"></div>

<h3>
  <code>softDescriptor(softDescriptor:)</code>
  

</h3>

Optional text which will appear on the customer's credit card statement. (up to 22 characters)


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
      softDescriptor:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>credit card text for payment</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="bnCode"></div>

<h3>
  <code>bnCode(bnCode:)</code>
  

</h3>

Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
for your tracking purposes.


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
      bnCode:
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>bnCode for payment</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="items"></div>

<h3>
  <code>items(items)</code>
  

</h3>

Optional array of PayPalItem objects. @see PayPalItem


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
      items
      
      
    </td>
    <td>
      
<code>Array&lt;PayPalItem&gt;</code>
    </td>
    <td>
      <p>Optional</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="shippingAddress"></div>

<h3>
  <code>shippingAddress(shippingAddress:)</code>
  

</h3>

Optional customer shipping address, if your app wishes to provide this to the SDK.


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
      shippingAddress:
      
      
    </td>
    <td>
      
<code>PayPalShippingAddress</code>
    </td>
    <td>
      <p>PayPalShippingAddress object</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- related link --><!-- end content block -->


<!-- end body block -->

