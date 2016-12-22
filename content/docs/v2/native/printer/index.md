---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "printer"
title: "Printer"
header_sub_title: "Class in module "
doc: "Printer"
docType: "class"
---







<h1 class="api-title">
  
  Printer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/printer.ts#L41">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add de.appplant.cordova.plugin.printer</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-printer.git">
    https://github.com/katzer/cordova-plugin-printer.git
  </a>
</p>

<!-- description -->

<p>Prints documents or HTML rendered content</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {Printer, PrintOptions} from &#39;ionic-native&#39;;

Printer.isAvailable().then(onSuccess, onError);

let options: PrintOptions = {
     name: &#39;MyDocument&#39;,
     printerId: &#39;printer007&#39;,
     duplex: true,
     landscape: true,
     grayscale: true
   };

Printer.print(content, options).then(onSuccess, onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Checks whether to device is capable of printing.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="print"></div>
<h3><code>print(content,&nbsp;options)</code>
  
</h3>


Sends content to the printer.


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
      content
      
      
    </td>
    <td>
      
<code>string</code>|<code>HTMLElement</code>
    </td>
    <td>
      <p>The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>PrintOptions</code>
    </td>
    <td>
      <p>optional. The options to pass to the printer</p>

      
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

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="PrintOptions" href="#PrintOptions"></a>PrintOptions</h2>


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the print job and the document</p>

    </td>
  </tr>
  
  <tr>
    <td>
      printerId
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The network URL of the printer.
Only supported on iOS.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      duplex
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Specifies the duplex mode to use for the print job.
Either double-sided (duplex:true) or single-sided (duplex:false).
Double-sided by default.
Only supported on iOS</p>

    </td>
  </tr>
  
  <tr>
    <td>
      landscape
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The orientation of the printed content, portrait or landscape
Portrait by default.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      grayscale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If your application only prints black text, setting this property to true can result in better performance in many cases.
False by default.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      bounds
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number[] | any</code>
    </td>
    <td>
      <p>The Size and position of the print view</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

