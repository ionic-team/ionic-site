---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "in-app-purchase"
title: "In App Purchase"
header_sub_title: "Class in module "
doc: "In App Purchase"
docType: "class"
---

<h1 class="api-title">In App Purchase</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/in-app-purchase/index.ts#L1">
  Improve this doc
</a>







<p>A lightweight Cordova plugin for in app purchases on iOS/Android.</p>


<p>Repo:
  <a href="https://github.com/AlexDisler/cordova-plugin-inapppurchase">
    https://github.com/AlexDisler/cordova-plugin-inapppurchase
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-inapppurchase
$ npm install --save @ionic-native/in-app-purchase
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { InAppPurchase } from &#39;@ionic-native/in-app-purchase&#39;;

constructor(private iap: InAppPurchase) { }

...

this.iap
 .getProducts([&#39;prod1&#39;, &#39;prod2&#39;, ...])
 .then((products) =&gt; {
   console.log(products);
    //  [{ productId: &#39;com.yourapp.prod1&#39;, &#39;title&#39;: &#39;...&#39;, description: &#39;...&#39;, price: &#39;...&#39; }, ...]
 })
 .catch((err) =&gt; {
   console.log(err);
 });


this.iap
  .buy(&#39;prod1&#39;)
  .then((data)=&gt; {
    console.log(data);
    // {
    //   transactionId: ...
    //   receipt: ...
    //   signature: ...
    // }
  })
  .catch((err)=&gt; {
    console.log(err);
  });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getProducts" href="#getProducts"></a><code>getProducts(productId)</code></h3>




Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
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
      productId</td>
    <td>
      <code>array&lt;string&gt;</code>
    </td>
    <td>
      <p>an array of product ids.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with an array of objects.
</div><h3><a class="anchor" name="buy" href="#buy"></a><code>buy(productId)</code></h3>




Buy a product that matches the productId.
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
      productId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that matches the product you want to buy.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{transactionId: string, receipt: string, signature: string, productType: string}&gt;</code> Returns a Promise that resolves with the transaction details.
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe(productId)</code></h3>




Same as buy, but for subscription based products.
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
      productId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that matches the product you want to subscribe to.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{transactionId: string, receipt: string, signature: string, productType: string}&gt;</code> Returns a Promise that resolves with the transaction details.
</div><h3><a class="anchor" name="consume" href="#consume"></a><code>consume(productType,&nbsp;receipt,&nbsp;signature)</code></h3>




Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
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
      productType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      receipt</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      signature</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="restorePurchases" href="#restorePurchases"></a><code>restorePurchases()</code></h3>




Restore all purchases from the store


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with an array of purchases.
</div><h3><a class="anchor" name="getReceipt" href="#getReceipt"></a><code>getReceipt()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Get the receipt.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that contains the string for the receipt
</div>

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<pre><code class="lang-typescript">// fist buy the product...
this.iap
  .buy(&#39;consumable_prod1&#39;)
  .then(data =&gt; this.iap.consume(data.productType, data.receipt, data.signature))
  .then(() =&gt; console.log(&#39;product was successfully consumed!&#39;))
  .catch( err=&gt; console.log(err))
</code></pre>




