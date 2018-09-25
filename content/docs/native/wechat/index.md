---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "wechat"
title: "Wechat"
header_sub_title: "Class in module "
doc: "Wechat"
docType: "class"
---

<h1 class="api-title">Wechat</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/wechat/index.ts#L1">
  Improve this doc
</a>







<p>A cordova plugin, a JS version of Wechat SDK</p>


<p>Repo:
  <a href="https://github.com/xu-li/cordova-plugin-wechat.git">
    https://github.com/xu-li/cordova-plugin-wechat.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID
$ npm install --save @ionic-native/wechat
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Wechat } from &#39;@ionic-native/wechat&#39;;


constructor(private wechat: Wechat) { }

...


this.wechat.functionName(&#39;Hello&#39;, 123)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Scene" href="#Scene"></a><code>Scene</code></h3>




<h3><a class="anchor" name="Type" href="#Type"></a><code>Type</code></h3>




<h3><a class="anchor" name="isInstalled" href="#isInstalled"></a><code>isInstalled()</code></h3>





<h3><a class="anchor" name="share" href="#share"></a><code>share()</code></h3>


Share a message to wechat app



<h3><a class="anchor" name="auth" href="#auth"></a><code>auth()</code></h3>

Sending an auth request to Wechat



<h3><a class="anchor" name="sendPaymentRequest" href="#sendPaymentRequest"></a><code>sendPaymentRequest()</code></h3>

Send a payment request



<h3><a class="anchor" name="jumpToWechat" href="#jumpToWechat"></a><code>jumpToWechat()</code></h3>

jumpToBizProfile （跳转到某个微信公众号）2016-11-11 测试是失效的，囧



<h3><a class="anchor" name="chooseInvoiceFromWX" href="#chooseInvoiceFromWX"></a><code>chooseInvoiceFromWX()</code></h3>

chooseInvoiceFromWX exq:choose invoices from Wechat card list









