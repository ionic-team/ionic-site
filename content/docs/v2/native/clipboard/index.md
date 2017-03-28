---
layout: "v2_fluid/docs_base"
version: "3.4.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "clipboard"
title: "Clipboard"
header_sub_title: "Class in module "
doc: "Clipboard"
docType: "class"
---

<h1 class="api-title">Clipboard</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/clipboard/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add https://github.com/VersoSolutions/CordovaClipboard.git
$ npm install --save @ionic-native/clipboard
</code></pre>
<p>Repo:
  <a href="https://github.com/VersoSolutions/CordovaClipboard">
    https://github.com/VersoSolutions/CordovaClipboard
  </a>
</p>


<p>Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.</p>
<p>Requires Cordova plugin: <a href="https://github.com/VersoSolutions/CordovaClipboard">https://github.com/VersoSolutions/CordovaClipboard</a>
For more info, please see the <a href="https://github.com/VersoSolutions/CordovaClipboard.git">Clipboard plugin docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>iOS</li><li>Android</li><li>BlackBerry 10</li><li>Windows Phone 7</li><li>Windows Phone 8</li><li>Windows</li><li>Firefox OS</li><li>Browser</li>
</ul>






<h2>Usage</h2>
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
</code></pre>








<h2>Instance Members</h2>
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
</div>





