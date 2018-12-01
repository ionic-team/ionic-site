---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "clipboard"
title: "Clipboard"
header_sub_title: "Class in module "
doc: "Clipboard"
docType: "class"
---

<h1 class="api-title">Clipboard</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/clipboard/index.ts#L1">
  Improve this doc
</a>







<p>Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.</p>


<p>Repo:
  <a href="https://github.com/ihadeed/cordova-clipboard">
    https://github.com/ihadeed/cordova-clipboard
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-clipboard
$ npm install --save @ionic-native/clipboard
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Clipboard } from &#39;@ionic-native/clipboard&#39;;

constructor(private clipboard: Clipboard) { }

...


this.clipboard.copy(&#39;Hello world&#39;);

this.clipboard.paste().then(
   (resolve: string) =&gt; {
      alert(resolve);
    },
    (reject: string) =&gt; {
      alert(&#39;Error: &#39; + reject);
    }
  );

this.clipboard.clear();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="copy" href="#copy"></a><code>copy(text)</code></h3>


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
      text</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise after the text has been copied
</div><h3><a class="anchor" name="paste" href="#paste"></a><code>paste()</code></h3>


Pastes the text stored in clipboard


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise after the text has been pasted
</div><h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>


Clear the text stored in clipboard


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise after the text has been cleaned
</div>





