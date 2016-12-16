---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "callnumber"
title: "CallNumber"
header_sub_title: "Class in module "
doc: "CallNumber"
docType: "class"
---







<h1 class="api-title">
  
  CallNumber
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/call-number.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add call-number</code></pre>
<p>Repo:
  <a href="https://github.com/Rohfosho/CordovaCallNumberPlugin">
    https://github.com/Rohfosho/CordovaCallNumberPlugin
  </a>
</p>

<!-- description -->

<p>Call a number directly from your Cordova/Ionic application.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {CallNumber} from &#39;ionic-native&#39;;

CallNumber.callNumber(18001010101, true)
  .then(() =&gt; console.log(&#39;Launched dialer!&#39;))
  .catch(() =&gt; console.log(&#39;Error launching dialer&#39;));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="callNumber"></div>
<h3><code>callNumber(numberToCall,&nbsp;bypassAppChooser)</code>
  
</h3>




Calls a phone number


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
      numberToCall
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The phone number to call as a string</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      bypassAppChooser
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>Set to true to bypass the app chooser and go directly to dialer</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

