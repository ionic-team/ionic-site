---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "cardio"
title: "CardIO"
header_sub_title: "Class in module "
doc: "CardIO"
docType: "class"
---








<h1 class="api-title">

  
  CardIO
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/card-io.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/card-io/card.io-Cordova-Plugin</code></pre>
<p>Repo:
  <a href="https://github.com/card-io/card.io-Cordova-Plugin">
    https://github.com/card-io/card.io-Cordova-Plugin
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
  
  <li>Android</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { CardIO } from &#39;ionic-native&#39;;


CardIO.canScan()
  .then(
    (res: boolean) =&gt; {
      if(res){
        let options = {
          requireExpiry: true,
          requireCCV: false,
          requirePostalCode: false
        };
        CardIO.scan(options);
      }
    }
  );
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="canScan"></div>
<h3><code>canScan()</code>
  
</h3>

Check whether card scanning is currently available. (May vary by
device, OS version, network connectivity, etc.)










<div id="scan"></div>
<h3><code>scan(options)</code>
  
</h3>

Scan a credit card with card.io.


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
      options
      
      
    </td>
    <td>
      
<code>CardIOOptions</code>
    </td>
    <td>
      <p>Options for configuring the plugin</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="version"></div>
<h3><code>version()</code>
  
</h3>

Retrieve the version of the card.io library. Useful when contacting support.











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

