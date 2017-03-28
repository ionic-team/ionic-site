---
layout: "v2_fluid/docs_base"
version: "3.3.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "printer"
title: "Printer"
header_sub_title: "Class in module "
doc: "Printer"
docType: "class"
---

<h1 class="api-title">Printer</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/printer/index.ts#L42">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add de.appplant.cordova.plugin.printer
$ npm install --save @ionic-native/printer
</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-printer.git">
    https://github.com/katzer/cordova-plugin-printer.git
  </a>
</p>


<p>Prints documents or HTML rendered content</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Printer, PrintOptions } from &#39;@ionic-native/printer&#39;;

constructor(private printer: Printer) { }

...

this.printer.isAvailable().then(onSuccess, onError);

let options: PrintOptions = {
     name: &#39;MyDocument&#39;,
     printerId: &#39;printer007&#39;,
     duplex: true,
     landscape: true,
     grayscale: true
   };

this.p.print(content, options).then(onSuccess, onError);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Checks whether to device is capable of printing.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="print" href="#print"></a><code>print(content,&nbsp;options)</code></h3>


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
      content</td>
    <td>
      <code>string</code>|<code>HTMLElement</code>
    </td>
    <td>
      <p>The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the print job and the document</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      printerId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The network URL of the printer.
Only supported on iOS.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      duplex
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Specifies the duplex mode to use for the print job.
Either double-sided (duplex:true) or single-sided (duplex:false).
Double-sided by default.
Only supported on iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      landscape
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The orientation of the printed content, portrait or landscape
Portrait by default.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      grayscale
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If your application only prints black text, setting this property to true can result in better performance in many cases.
False by default.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bounds
    </td>
    <td>
      <code>number[] | any</code>
    </td>
    <td>
      <p>The Size and position of the print view</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





