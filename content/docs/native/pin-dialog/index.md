---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "pin-dialog"
title: "Pin Dialog"
header_sub_title: "Class in module "
doc: "Pin Dialog"
docType: "class"
---

<h1 class="api-title">Pin Dialog</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/pin-dialog/index.ts#L1">
  Improve this doc
</a>







<p>PhoneGap numeric password dialog plugin for Android and iOS.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-pin-dialog</code>. For more info, please see the <a href="https://github.com/Paldom/PinDialog">Pin Dialog plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/Paldom/PinDialog">
    https://github.com/Paldom/PinDialog
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-pin-dialog
$ npm install --save @ionic-native/pin-dialog
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="prompt" href="#prompt"></a><code>prompt(message,&nbsp;title,&nbsp;buttons)</code></h3>




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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Message to show the user</p>
</td>
  </tr>
  
  <tr>
    <td>
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Title of the dialog</p>
</td>
  </tr>
  
  <tr>
    <td>
      buttons</td>
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
  <b>Returns:</b> <code>Promise&lt;{ buttonIndex: number, input1: string }&gt;</code> 
</div>





