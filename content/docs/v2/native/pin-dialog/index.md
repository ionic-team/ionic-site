---
layout: "v2_fluid/docs_base"
version: "3.1.0"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/pin-dialog/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>
  $ ionic plugin add cordova-plugin-pin-dialog
  $ npm install --save @ionic-native/plugins.pinDialog
</code></pre>
<p>Repo:
  <a href="https://github.com/Paldom/PinDialog">
    https://github.com/Paldom/PinDialog
  </a>
</p>

<!-- description -->




<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { PinDialog } from &#39;@ionic-native/pin-dialog&#39;;


constructor(private pinDialog: PinDialog) { }

...

this.pinDialog.prompt(&#39;Enter your PIN&#39;, &#39;Verify PIN&#39;, [&#39;OK&#39;, &#39;Cancel&#39;])
  .then(
    (result: any) =&gt; {
      if (result.buttonIndex == 1) console.log(&#39;User clicked OK, value is: &#39;, result.input1);
      else if(result.buttonIndex == 2) console.log(&#39;User cancelled&#39;);
    }
  );
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="prompt"></div>
<h3>
  <code>prompt(message,&nbsp;title,&nbsp;buttons)</code>
  

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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;{ buttonIndex: number, input1: string }&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

