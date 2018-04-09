---
layout: "fluid/docs_base"
version: "4.7.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/alipay/index.ts#L59">
  Improve this doc
</a>







<p>This plugin is used for Alipay APP support. Integrated with the latest SDK.</p>
<p>Requires Cordova plugin: <code>cordova-alipay-base</code>. For more info, please see the <a href="https://github.com/xueron/cordova-alipay-base">Alipay plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/xueron/cordova-alipay-base">
    https://github.com/xueron/cordova-alipay-base
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-alipay-base --variable ALI_PID=your_app_id
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
<pre><code class="lang-typescript">import { Alipay, AlipayOrder } from &#39;@ionic-native/alipay&#39;;

constructor(private alipay: Alipay) {

// Should get from server side with sign.
const alipayOrder: AlipayOrder = {
      ...
    };


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
      <code>AlipayOrder</code>|<code>string</code>
    </td>
    <td>
      <p>alipay options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div>





<h2><a class="anchor" name="AlipayOrder" href="#AlipayOrder"></a>AlipayOrder</h2>

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
      app_id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>appId assigned by Alipay</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      method
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Api name.
Should be: alipay.trade.app.pay</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      format
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Data format
Default: &quot;JSON&quot;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      charset
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Charset
Possible values: &quot;UTF-8&quot;, &quot;GBK&quot;
Default: &quot;UTF-8&quot;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sign_type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sign method
Default: &#39;RSA&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sign
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sign value. Should be got from server side.
Default: &#39;RSA&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Timestamp, formated like &quot;yyyy-MM-dd HH:mm:ss&quot;, e.g. 2014-07-24 03:07:50</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      version
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Api version. Fixed value &#39;1.0&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notify_url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Notify url.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      biz_content
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>biz content. formated in json. see alipay doc for detail.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





