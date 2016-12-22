---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "clipboard"
title: "Clipboard"
header_sub_title: "Class in module "
doc: "Clipboard"
docType: "class"
---







<h1 class="api-title">
  
  Clipboard
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/clipboard.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/VersoSolutions/CordovaClipboard.git</code></pre>
<p>Repo:
  <a href="https://github.com/VersoSolutions/CordovaClipboard">
    https://github.com/VersoSolutions/CordovaClipboard
  </a>
</p>

<!-- description -->

<p>Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.</p>
<p>Requires Cordova plugin: <a href="https://github.com/VersoSolutions/CordovaClipboard">https://github.com/VersoSolutions/CordovaClipboard</a>
For more info, please see the <a href="https://github.com/VersoSolutions/CordovaClipboard.git">Clipboard plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Amazon Fire OS</li><li>iOS</li><li>Android</li><li>BlackBerry 10</li><li>Windows Phone 7</li><li>Windows Phone 8</li><li>Windows</li><li>Firefox OS</li><li>Browser</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Clipboard } from &#39;ionic-native&#39;;


Clipboard.copy(&#39;Hello world&#39;);

Clipboard.paste().then(
   (resolve: string) =&gt; {
    alert(resolve);
    },
    (reject: string) =&gt; {
    alert(&#39;Error: &#39; + reject);
    }
    );
);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="copy"></div>
<h3><code>copy(text)</code>
  
</h3>


Copies the given text


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
      text
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Text that gets copied on the system clipboard</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise after the text has been copied
</div>



<div id="paste"></div>
<h3><code>paste()</code>
  
</h3>


Pastes the text stored in clipboard






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise after the text has been pasted
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

