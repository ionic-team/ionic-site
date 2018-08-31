---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "index-app-content"
title: "Index App Content"
header_sub_title: "Class in module "
doc: "Index App Content"
docType: "class"
---

<h1 class="api-title">Index App Content</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/index-app-content/index.ts#L24">
  Improve this doc
</a>







<p>This plugin gives you a Javascript API to interact with Core Spotlight on iOS (=&gt; iOS 9).
You can add, update and delete items to the spotlight search index.
Spotlight Search will include these items in the result list. You can deep-link the search results with your app.</p>


<p>Repo:
  <a href="https://github.com/johanblomgren/cordova-plugin-indexappcontent">
    https://github.com/johanblomgren/cordova-plugin-indexappcontent
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-indexappcontent
$ npm install --save @ionic-native/index-app-content
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { IndexAppContent } from &#39;@ionic-native/index-app-content&#39;;


constructor(private indexAppContent: IndexAppContent) { }

...

var items = [
     {
       domain: &#39;com.my.domain&#39;,
       identifier: &#39;88asdf7dsf&#39;,
       title: &#39;Foo&#39;,
       description: &#39;Bar&#39;,
       url: &#39;http://location/of/my/image.jpg&#39;,
   },
   {
       domain: &#39;com.other.domain&#39;,
       identifier: &#39;9asd67g6a&#39;,
       title: &#39;Baz&#39;,
       description: &#39;Woot&#39;,
       url: &#39;http://location/of/my/image2.jpg&#39;,
    }
];

this.indexAppContent.setItems(items)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isIndexingAvailable" href="#isIndexingAvailable"></a><code>isIndexingAvailable()</code></h3>


The option to index app content might not be available at all due to device limitations or user settings.
Therefore it's highly recommended to check upfront if indexing is possible.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with true if indexing is available, false if not
</div><h3><a class="anchor" name="setItems" href="#setItems"></a><code>setItems(Array)</code></h3>


Add or change items to spotlight index
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
      Array</td>
    <td>
      <code>Array&lt;IndexItem&gt;</code>
    </td>
    <td>
      <p>of items to index</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns if index set was successful
</div><h3><a class="anchor" name="clearItemsForDomains" href="#clearItemsForDomains"></a><code>clearItemsForDomains(Array)</code></h3>


Clear all items stored for a given array of domains
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
      Array</td>
    <td>
      <code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>of domains to clear</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolve if successful
</div><h3><a class="anchor" name="clearItemsForIdentifiers" href="#clearItemsForIdentifiers"></a><code>clearItemsForIdentifiers(Array)</code></h3>


Clear all items stored for a given array of identifiers
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
      Array</td>
    <td>
      <code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>of identifiers to clear</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolve if successful
</div><h3><a class="anchor" name="onItemPressed" href="#onItemPressed"></a><code>onItemPressed()</code></h3>


If user taps on a search result in spotlight then the app will be launched.
You can register a Javascript handler to get informed when this happens.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> returns an observable that notifies you when he user presses on the home screen icon
</div><h3><a class="anchor" name="setIndexingInterval" href="#setIndexingInterval"></a><code>setIndexingInterval(Numeric)</code></h3>


You might want to avoid to update spotlight index too frequently.
Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
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
      Numeric</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>value =&gt; 0</p>
</td>
  </tr>
  </tbody>
</table>







