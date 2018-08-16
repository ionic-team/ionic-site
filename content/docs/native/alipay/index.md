---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "alipay"
title: "Alipay"
header_sub_title: "Class in module "
doc: "Alipay"
docType: "class"
---

<h1 class="api-title">Alipay</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/alipay/index.ts#L1">
  Improve this doc
</a>







<p>This plugin facilitates the usage of Alipay 支付宝 in an Ionic apps with the integrated AlipaySDK dated on 20180601.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-gubnoi-alipay</code>. For more info, please see <a href="https://github.com/jing-zhou/cordova-plugin-alipay">https://github.com/jing-zhou/cordova-plugin-alipay</a> .</p>


<p>Repo:
  <a href="https://github.com/jing-zhou/cordova-plugin-alipay">
    https://github.com/jing-zhou/cordova-plugin-alipay
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-gubnoi-alipay --variable APP_ID=your_app_id
$ npm install --save @ionic-native/alipay
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Alipay } from &#39;@ionic-native/alipay&#39;;

constructor(private alipay: Alipay) {

//alipayOrder is a string that has been generated and signed by the server side.
this.alipay.pay(alipayOrder)
   .then(result =&gt; {
      console.log(result); // Success
   })
   .catch(error =&gt; {
      console.log(error); // Failed
   });

}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="pay" href="#pay"></a><code>pay(order)</code></h3>


Open Alipay to perform App pay
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
      order</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>alipay order string</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div>





