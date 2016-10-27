---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/sms.ts#L24">
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
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { SMS } from &#39;ionic-native&#39;;


// Send a text message using default options
SMS.send(&#39;416123456&#39;, &#39;Hello world!&#39;);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

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



<div id="hasPermission"></div>
<h3><code>hasPermission()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



This function lets you know if the app has permission to send SMS






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> returns a promise that resolves with a boolean that indicates if we have permission
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

