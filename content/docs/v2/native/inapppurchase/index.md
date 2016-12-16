---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "inapppurchase"
title: "InAppPurchase"
header_sub_title: "Class in module "
doc: "InAppPurchase"
docType: "class"
---







<h1 class="api-title">
  
  InAppPurchase
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/inapppurchase.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-inapppurchase</code></pre>
<p>Repo:
  <a href="https://github.com/AlexDisler/cordova-plugin-inapppurchase">
    https://github.com/AlexDisler/cordova-plugin-inapppurchase
  </a>
</p>

<!-- description -->

<p>A lightweight Cordova plugin for in app purchases on iOS/Android.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {InAppPurchase} from &#39;ionic-native&#39;;

InAppPurchase
 .getProducts([&#39;com.yourapp.prod1&#39;, &#39;com.yourapp.prod2&#39;, ...])
 .then((products) =&gt; {
   console.log(products);
    //  [{ productId: &#39;com.yourapp.prod1&#39;, &#39;title&#39;: &#39;...&#39;, description: &#39;...&#39;, price: &#39;...&#39; }, ...]
 })
 .catch((err) =&gt; {
   console.log(err);
 });


InAppPurchase
  .buy(&#39;com.yourapp.prod1&#39;)
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




<!-- @property tags -->


<h2>Static Members</h2>

<div id="getProducts"></div>
<h3><code>getProducts(productId)</code>
  
</h3>




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
      productId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves with an array of objects.
</div>



<div id="buy"></div>
<h3><code>buy(productId)</code>
  
</h3>




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
      productId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{transactionId: string, receipt: string, signature: string, productType: string}&gt;</code> Returns a Promise that resolves with the transaction details.
</div>



<div id="subscribe"></div>
<h3><code>subscribe(productId)</code>
  
</h3>




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
      productId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{transactionId: string, receipt: string, signature: string, productType: string}&gt;</code> Returns a Promise that resolves with the transaction details.
</div>



<div id="consume"></div>
<h3><code>consume(productType,&nbsp;receipt,&nbsp;signature)</code>
  
</h3>




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
      productType
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      receipt
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      signature
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="restorePurchases"></div>
<h3><code>restorePurchases()</code>
  
</h3>




Restore all purchases from the store






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise with an array of purchases.
</div>



<div id="getReceipt"></div>
<h3><code>getReceipt()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Get the receipt.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that contains the string for the receipt
</div>




<!-- methods on the class -->

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<pre><code class="lang-ts">// fist buy the product...
InAppPurchase
  .buy(&#39;com.yourapp.consumable_prod1&#39;)
  .then(data =&gt; InAppPurchase.consume(data.productType, data.receipt, data.signature))
  .then(() =&gt; console.log(&#39;product was successfully consumed!&#39;))
  .catch( err=&gt; console.log(err))
</code></pre>


<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

