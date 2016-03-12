---
layout: "v2_fluid/docs_base"
version: "1.0.12"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master/src/plugins/sms.ts#L20'>
Improve this doc
</a>





<!-- decorators -->

<pre><code>$ ionic plugin add cordova-sms-plugin</code></pre>
<p>Repo:
<a href="https://github.com/cordova-sms/cordova-sms-plugin.git">
https://github.com/cordova-sms/cordova-sms-plugin.git
</a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-sms. For more info, please see the <a href="https://github.com/cordova-sms/cordova-sms-plugin">SMS plugin docs</a>.</p>
<pre><code class="lang-shell">cordova plugin add cordova-sms-plugin
</code></pre>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">// Send a text message using default options
SMS.send(&#39;416123456&#39;,&#39;Hello world!&#39;);
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="send"></div>
<h3><code>send(number,&nbsp;message,&nbsp;options,&nbsp;options.replaceLineBreaks,&nbsp;options.android.intent)</code>
  
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
        number
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>[string or array of strings] Phone number</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        message
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>[string] Message</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>[object] Options</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options.replaceLineBreaks
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>[boolean]  Set to true to replace \n by a new line. Default: false</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options.android.intent
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>[string] Set to &quot;INTENT&quot; to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

