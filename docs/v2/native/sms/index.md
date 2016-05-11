---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "sms"
title: "SMS"
header_sub_title: "Class in module "
doc: "SMS"
docType: "class"
---








<h1 class="api-title">

  
  SMS
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/sms.ts#L23'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-sms-plugin</code></pre>
<p>Repo:
  <a href="https://github.com/cordova-sms/cordova-sms-plugin">
    https://github.com/cordova-sms/cordova-sms-plugin
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-sms. For more info, please see the <a href="https://github.com/cordova-sms/cordova-sms-plugin">SMS plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {SMS} from &#39;ionic-native&#39;;



// Send a text message using default options
SMS.send(&#39;416123456&#39;,&#39;Hello world!&#39;);
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="send"></div>
<h3><code>send(phoneNumber,&nbsp;message,&nbsp;options)</code>

</h3>

Sends sms to a number


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
      phoneNumber
      
      
    </td>
    <td>
      
<code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>Phone number</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Message</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>SmsOptions</code>
    </td>
    <td>
      <p>Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Resolves promise when the SMS has been sent
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

