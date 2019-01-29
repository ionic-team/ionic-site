---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "answers"
title: "Answers"
header_sub_title: "Class in module "
doc: "Answers"
docType: "class"
---

<h1 class="api-title">Answers</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/fabric/index.ts#L133">
  Improve this doc
</a>







<p>API for interacting with the Answers kit.</p>
<p><a href="https://docs.fabric.io/crashlytics/index.html">https://docs.fabric.io/crashlytics/index.html</a></p>


<p>Repo:
  <a href="https://www.npmjs.com/package/cordova-fabric-plugin">
    https://www.npmjs.com/package/cordova-fabric-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx
$ npm install --save @ionic-native/fabric@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Answers } from &#39;@ionic-native/fabric&#39;;


constructor(private answers: Answers) { }

...

this.answers.sendCustomEvent(&#39;SomeCustomEvent&#39;, { some: &quot;attributes&quot; })
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="sendPurchase" href="#sendPurchase"></a><code>sendPurchase(itemPrice,&nbsp;currency,&nbsp;success,&nbsp;itemName,&nbsp;itemType,&nbsp;itemId,&nbsp;attributes)</code></h3>




Sends the Purchase tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#purchase

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
      itemPrice</td>
    <td>
      
    </td>
    <td>
      <p>The item&#39;s amount in the currency specified.</p>
</td>
  </tr>
  
  <tr>
    <td>
      currency</td>
    <td>
      
    </td>
    <td>
      <p>The ISO4217 currency code.</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      
    </td>
    <td>
      <p>Was the purchase completed succesfully?</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemName</td>
    <td>
      
    </td>
    <td>
      <p>The human-readable name for the item.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemType</td>
    <td>
      
    </td>
    <td>
      <p>The category the item falls under.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemId</td>
    <td>
      
    </td>
    <td>
      <p>A unique identifier used to track the item.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendAddToCart" href="#sendAddToCart"></a><code>sendAddToCart(itemPrice,&nbsp;currency,&nbsp;itemName,&nbsp;itemType,&nbsp;itemId,&nbsp;attributes)</code></h3>




Sends the Add To Cart tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#add-to-cart

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
      itemPrice</td>
    <td>
      
    </td>
    <td>
      <p>The item&#39;s amount in the currency specified.</p>
</td>
  </tr>
  
  <tr>
    <td>
      currency</td>
    <td>
      
    </td>
    <td>
      <p>The ISO4217 currency code.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemName</td>
    <td>
      
    </td>
    <td>
      <p>The human-readable name for the item.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemType</td>
    <td>
      
    </td>
    <td>
      <p>The category the item falls under.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemId</td>
    <td>
      
    </td>
    <td>
      <p>A unique identifier used to track the item.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendStartCheckout" href="#sendStartCheckout"></a><code>sendStartCheckout(totalPrice,&nbsp;currency,&nbsp;itemCount,&nbsp;attributes)</code></h3>




Sends the Start Checkout tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#start-checkout

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
      totalPrice</td>
    <td>
      
    </td>
    <td>
      <p>The total price of all items in cart in the currency specified.</p>
</td>
  </tr>
  
  <tr>
    <td>
      currency</td>
    <td>
      
    </td>
    <td>
      <p>The ISO4217 currency code.</p>
</td>
  </tr>
  
  <tr>
    <td>
      itemCount</td>
    <td>
      
    </td>
    <td>
      <p>The count of items in cart.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendSearch" href="#sendSearch"></a><code>sendSearch(query,&nbsp;attributes)</code></h3>




Sends the Search tracking event.

https://docs.fabric.io/android/answers/answers-events.html#search

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
      <p>What the user is searching for.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendShare" href="#sendShare"></a><code>sendShare(method,&nbsp;contentName,&nbsp;contentType,&nbsp;contentId,&nbsp;attributes)</code></h3>




Sends the Share tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#share

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
      method</td>
    <td>
      
    </td>
    <td>
      <p>The method used to share content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentName</td>
    <td>
      
    </td>
    <td>
      <p>The description of the content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentType</td>
    <td>
      
    </td>
    <td>
      <p>The type or genre of content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentId</td>
    <td>
      
    </td>
    <td>
      <p>A unique key identifying the content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendRatedContent" href="#sendRatedContent"></a><code>sendRatedContent(rating,&nbsp;contentName,&nbsp;contentType,&nbsp;contentId,&nbsp;attributes)</code></h3>




Sends the Rated Content tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#rated-content

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
      rating</td>
    <td>
      
    </td>
    <td>
      <p>An integer rating of the content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentName</td>
    <td>
      
    </td>
    <td>
      <p>The human-readable name of content.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentType</td>
    <td>
      
    </td>
    <td>
      <p>The category your item falls under.</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentId</td>
    <td>
      
    </td>
    <td>
      <p>A unique identifier used to track the item.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendSignUp" href="#sendSignUp"></a><code>sendSignUp(method,&nbsp;success,&nbsp;attributes)</code></h3>




Sends the Sign Up tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#sign-up

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
      method</td>
    <td>
      
    </td>
    <td>
      <p>An optional description of the sign up method (Twitter, Facebook, etc.); defaults to &quot;Direct&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      
    </td>
    <td>
      <p>An optional flag that indicates sign up success; defaults to true.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendLogIn" href="#sendLogIn"></a><code>sendLogIn(method,&nbsp;success,&nbsp;attributes)</code></h3>




Sends the Log In tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#log-in

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
      method</td>
    <td>
      
    </td>
    <td>
      <p>An optional description of the sign in method (Twitter, Facebook, etc.); defaults to &quot;Direct&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      
    </td>
    <td>
      <p>An optional flag that indicates sign in success; defaults to true.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendInvite" href="#sendInvite"></a><code>sendInvite(method,&nbsp;attributes)</code></h3>




Sends the Invite tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#invite

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
      method</td>
    <td>
      
    </td>
    <td>
      <p>An optional description of the sign in method (Twitter, Facebook, etc.); defaults to &quot;Direct&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendLevelStart" href="#sendLevelStart"></a><code>sendLevelStart(levelName,&nbsp;attributes)</code></h3>




Sends the Level Start tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#level-start

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
      levelName</td>
    <td>
      
    </td>
    <td>
      <p>String key describing the level.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendLevelEnd" href="#sendLevelEnd"></a><code>sendLevelEnd(levelName,&nbsp;score,&nbsp;success,&nbsp;attributes)</code></h3>




Sends the Level End tracking event.

All parameters are optional.

https://docs.fabric.io/android/answers/answers-events.html#level-end

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
      levelName</td>
    <td>
      
    </td>
    <td>
      <p>String key describing the level.</p>
</td>
  </tr>
  
  <tr>
    <td>
      score</td>
    <td>
      
    </td>
    <td>
      <p>The score for this level.</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      
    </td>
    <td>
      <p>Completed the level or failed trying.</p>
</td>
  </tr>
  
  <tr>
    <td>
      attributes</td>
    <td>
      
    </td>
    <td>
      <p>Any additional user-defined attributes to be logged.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendContentView" href="#sendContentView"></a><code>sendContentView()</code></h3>




Send the Content View tracking event.

https://docs.fabric.io/android/answers/answers-events.html#content-view



<h3><a class="anchor" name="sendScreenView" href="#sendScreenView"></a><code>sendScreenView()</code></h3>




Shortcut for sendContentView(...) using type of "Screen".



<h3><a class="anchor" name="sendCustomEvent" href="#sendCustomEvent"></a><code>sendCustomEvent()</code></h3>




Send a custom tracking event with the given name.

https://docs.fabric.io/android/answers/answers-events.html#custom-event









