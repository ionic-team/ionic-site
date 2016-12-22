---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "inappbrowser"
title: "InAppBrowser"
header_sub_title: "Class in module "
doc: "InAppBrowser"
docType: "class"
---







<h1 class="api-title">
  
  InAppBrowser
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/inappbrowser.ts#L14">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-inappbrowser</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-inappbrowser">
    https://github.com/apache/cordova-plugin-inappbrowser
  </a>
</p>

<!-- description -->

<p>Launches in app Browser</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {InAppBrowser} from &#39;ionic-native&#39;;


...


let browser = new InAppBrowser(&#39;https://ionic.io&#39;, &#39;_system&#39;);
browser.executeScript(...);
browser.insertCSS(...);
browser.close();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Displays an InAppBrowser window that was opened hidden. Calling this has no effect
if the InAppBrowser was already visible.




<div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>
Closes the InAppBrowser window.




<div id="executeScript"></div>
<h3>
  <code>executeScript(script)</code>
  

</h3>
Injects JavaScript code into the InAppBrowser window.
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
      script
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="insertCss"></div>
<h3>
  <code>insertCss(Details)</code>
  

</h3>
Injects CSS into the InAppBrowser window.
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
      Details
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>of the script to run, specifying either a file or code key.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="on"></div>
<h3>
  <code>on(name)</code>
  

</h3>
A method that allows you to listen to events happening in the browser.
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
      name
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>of the event</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;InAppBrowserEvent&gt;</code> Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="InAppBrowserEvent" href="#InAppBrowserEvent"></a>InAppBrowserEvent</h2>


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
      type
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the eventname, either loadstart, loadstop, loaderror, or exit.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      url
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the URL that was loaded.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      code
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>the error code, only in the case of loaderror.</p>

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
      <p>the error message, only in the case of loaderror.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

