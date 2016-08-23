---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "pin-dialog"
title: "Pin Dialog"
header_sub_title: "Class in module "
doc: "Pin Dialog"
docType: "class"
---








<h1 class="api-title">

  
  Pin Dialog
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/pin-dialog.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-pin-dialog</code></pre>
<p>Repo:
  <a href="https://github.com/Paldom/PinDialog">
    https://github.com/Paldom/PinDialog
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { PinDialog } from &#39;ionic-native&#39;;


PinDialog.prompt(&#39;Enter your PIN&#39;, &#39;Verify PIN&#39;, [&#39;OK&#39;, &#39;Cancel&#39;])
  .then(
    (result: any) =&gt; {
      if (result.buttonIndex == 1) console.log(&#39;User clicked OK, value is: &#39;, result.input1);
      else if(result.buttonIndex == 2) console.log(&#39;User cancelled&#39;);
    }
  );
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="prompt"></div>
<h3><code>prompt(message,&nbsp;title,&nbsp;buttons)</code>
  
</h3>



Show pin dialog


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
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Message to show the user</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Title of the dialog</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      buttons
      
      
    </td>
    <td>
      
<code>string[]</code>
    </td>
    <td>
      <p>Buttons to show</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

