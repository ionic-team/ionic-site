---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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










<div id="print"></div>
<h3><code>print(The,&nbsp;The)</code>
  
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
      The
      
      
    </td>
    <td>
      
<code>content</code>
    </td>
    <td>
      <p>content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      The
      
      
    </td>
    <td>
      
<code>options</code>
    </td>
    <td>
      <p>options to pass to the printer</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

