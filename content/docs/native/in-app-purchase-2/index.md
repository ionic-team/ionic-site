---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "in-app-purchase-2"
title: "In App Purchase 2"
header_sub_title: "Class in module "
doc: "In App Purchase 2"
docType: "class"
---

<h1 class="api-title">In App Purchase 2</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/in-app-purchase-2/index.ts#L177">
  Improve this doc
</a>









<p>Repo:
  <a href="https://github.com/j3k0/cordova-plugin-purchase">
    https://github.com/j3k0/cordova-plugin-purchase
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY&gt;"
$ npm install --save @ionic-native/in-app-purchase-2
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { InAppPurchase2 } from &#39;@ionic-native/in-app-purchase-2&#39;;


constructor(private inAppPurchase2: InAppPurchase2) { }

...
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="QUIET" href="#QUIET"></a><code>QUIET</code></h3>





<h3><a class="anchor" name="ERROR" href="#ERROR"></a><code>ERROR</code></h3>





<h3><a class="anchor" name="WARNING" href="#WARNING"></a><code>WARNING</code></h3>





<h3><a class="anchor" name="INFO" href="#INFO"></a><code>INFO</code></h3>





<h3><a class="anchor" name="DEBUG" href="#DEBUG"></a><code>DEBUG</code></h3>





<h3><a class="anchor" name="verbosity" href="#verbosity"></a><code>verbosity</code></h3>


Debug level. Use QUIET, ERROR, WARNING, INFO or DEBUG constants



<h3><a class="anchor" name="sandbox" href="#sandbox"></a><code>sandbox</code></h3>


Set to true to invoke the platform purchase sandbox. (Windows only)



<h3><a class="anchor" name="FREE_SUBSCRIPTION" href="#FREE_SUBSCRIPTION"></a><code>FREE_SUBSCRIPTION</code></h3>





<h3><a class="anchor" name="PAID_SUBSCRIPTION" href="#PAID_SUBSCRIPTION"></a><code>PAID_SUBSCRIPTION</code></h3>





<h3><a class="anchor" name="NON_RENEWING_SUBSCRIPTION" href="#NON_RENEWING_SUBSCRIPTION"></a><code>NON_RENEWING_SUBSCRIPTION</code></h3>





<h3><a class="anchor" name="CONSUMABLE" href="#CONSUMABLE"></a><code>CONSUMABLE</code></h3>





<h3><a class="anchor" name="NON_CONSUMABLE" href="#NON_CONSUMABLE"></a><code>NON_CONSUMABLE</code></h3>





<h3><a class="anchor" name="ERR_SETUP" href="#ERR_SETUP"></a><code>ERR_SETUP</code></h3>





<h3><a class="anchor" name="ERR_LOAD" href="#ERR_LOAD"></a><code>ERR_LOAD</code></h3>





<h3><a class="anchor" name="ERR_PURCHASE" href="#ERR_PURCHASE"></a><code>ERR_PURCHASE</code></h3>





<h3><a class="anchor" name="ERR_LOAD_RECEIPTS" href="#ERR_LOAD_RECEIPTS"></a><code>ERR_LOAD_RECEIPTS</code></h3>





<h3><a class="anchor" name="ERR_CLIENT_INVALID" href="#ERR_CLIENT_INVALID"></a><code>ERR_CLIENT_INVALID</code></h3>





<h3><a class="anchor" name="ERR_PAYMENT_CANCELLED" href="#ERR_PAYMENT_CANCELLED"></a><code>ERR_PAYMENT_CANCELLED</code></h3>





<h3><a class="anchor" name="ERR_PAYMENT_INVALID" href="#ERR_PAYMENT_INVALID"></a><code>ERR_PAYMENT_INVALID</code></h3>





<h3><a class="anchor" name="ERR_PAYMENT_NOT_ALLOWED" href="#ERR_PAYMENT_NOT_ALLOWED"></a><code>ERR_PAYMENT_NOT_ALLOWED</code></h3>





<h3><a class="anchor" name="ERR_UNKNOWN" href="#ERR_UNKNOWN"></a><code>ERR_UNKNOWN</code></h3>





<h3><a class="anchor" name="ERR_REFRESH_RECEIPTS" href="#ERR_REFRESH_RECEIPTS"></a><code>ERR_REFRESH_RECEIPTS</code></h3>





<h3><a class="anchor" name="ERR_INVALID_PRODUCT_ID" href="#ERR_INVALID_PRODUCT_ID"></a><code>ERR_INVALID_PRODUCT_ID</code></h3>





<h3><a class="anchor" name="ERR_FINISH" href="#ERR_FINISH"></a><code>ERR_FINISH</code></h3>





<h3><a class="anchor" name="ERR_COMMUNICATION" href="#ERR_COMMUNICATION"></a><code>ERR_COMMUNICATION</code></h3>





<h3><a class="anchor" name="ERR_SUBSCRIPTIONS_NOT_AVAILABLE" href="#ERR_SUBSCRIPTIONS_NOT_AVAILABLE"></a><code>ERR_SUBSCRIPTIONS_NOT_AVAILABLE</code></h3>





<h3><a class="anchor" name="ERR_MISSING_TOKEN" href="#ERR_MISSING_TOKEN"></a><code>ERR_MISSING_TOKEN</code></h3>





<h3><a class="anchor" name="ERR_VERIFICATION_FAILED" href="#ERR_VERIFICATION_FAILED"></a><code>ERR_VERIFICATION_FAILED</code></h3>





<h3><a class="anchor" name="ERR_BAD_RESPONSE" href="#ERR_BAD_RESPONSE"></a><code>ERR_BAD_RESPONSE</code></h3>





<h3><a class="anchor" name="ERR_REFRESH" href="#ERR_REFRESH"></a><code>ERR_REFRESH</code></h3>





<h3><a class="anchor" name="ERR_PAYMENT_EXPIRED" href="#ERR_PAYMENT_EXPIRED"></a><code>ERR_PAYMENT_EXPIRED</code></h3>





<h3><a class="anchor" name="ERR_DOWNLOAD" href="#ERR_DOWNLOAD"></a><code>ERR_DOWNLOAD</code></h3>





<h3><a class="anchor" name="ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE" href="#ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"></a><code>ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE</code></h3>





<h3><a class="anchor" name="REGISTERED" href="#REGISTERED"></a><code>REGISTERED</code></h3>





<h3><a class="anchor" name="INVALID" href="#INVALID"></a><code>INVALID</code></h3>





<h3><a class="anchor" name="VALID" href="#VALID"></a><code>VALID</code></h3>





<h3><a class="anchor" name="REQUESTED" href="#REQUESTED"></a><code>REQUESTED</code></h3>





<h3><a class="anchor" name="INITIATED" href="#INITIATED"></a><code>INITIATED</code></h3>





<h3><a class="anchor" name="APPROVED" href="#APPROVED"></a><code>APPROVED</code></h3>





<h3><a class="anchor" name="FINISHED" href="#FINISHED"></a><code>FINISHED</code></h3>





<h3><a class="anchor" name="OWNED" href="#OWNED"></a><code>OWNED</code></h3>





<h3><a class="anchor" name="DOWNLOADING" href="#DOWNLOADING"></a><code>DOWNLOADING</code></h3>





<h3><a class="anchor" name="DOWNLOADED" href="#DOWNLOADED"></a><code>DOWNLOADED</code></h3>





<h3><a class="anchor" name="INVALID_PAYLOAD" href="#INVALID_PAYLOAD"></a><code>INVALID_PAYLOAD</code></h3>





<h3><a class="anchor" name="CONNECTION_FAILED" href="#CONNECTION_FAILED"></a><code>CONNECTION_FAILED</code></h3>





<h3><a class="anchor" name="PURCHASE_EXPIRED" href="#PURCHASE_EXPIRED"></a><code>PURCHASE_EXPIRED</code></h3>





<h3><a class="anchor" name="products" href="#products"></a><code>products</code></h3>





<h3><a class="anchor" name="validator" href="#validator"></a><code>validator</code></h3>





<h3><a class="anchor" name="log" href="#log"></a><code>log</code></h3>





<h3><a class="anchor" name="get" href="#get"></a><code>get(idOrAlias)</code></h3>




Get product by id or alias
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
      idOrAlias</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="error" href="#error"></a><code>error(onError)</code></h3>




Register error handler
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
      onError</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>function to call on error</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="register" href="#register"></a><code>register(product)</code></h3>




Add or register a product
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
      product</td>
    <td>
      <code>IAPProductOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="when" href="#when"></a><code>when(query,&nbsp;event,&nbsp;callback)</code></h3>





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
      query</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      event</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>IAPProductEvents</code> 
</div><h3><a class="anchor" name="once" href="#once"></a><code>once(query,&nbsp;event,&nbsp;callback)</code></h3>




Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
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
      query</td>
    <td>
      <code>string</code>|<code>IAPProduct</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      event</td>
    <td>
      <code>event</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>IAPQueryCallback</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>IAPProductEvents</code> 
</div><h3><a class="anchor" name="off" href="#off"></a><code>off(callback)</code></h3>




Unregister a callback. Works for callbacks registered with ready, when, once and error.
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
      callback</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="order" href="#order"></a><code>order()</code></h3>







<h3><a class="anchor" name="ready" href="#ready"></a><code>ready()</code></h3>





<h3><a class="anchor" name="refresh" href="#refresh"></a><code>refresh()</code></h3>













