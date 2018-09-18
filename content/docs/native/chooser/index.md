---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "chooser"
title: "Chooser"
header_sub_title: "Class in module "
doc: "Chooser"
docType: "class"
---

<h1 class="api-title">Chooser</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/chooser/index.ts#L9">
  Improve this doc
</a>







<p>File chooser plugin for Cordova.</p>
<p>The following must be added to config.xml to prevent crashing when selecting large files on Android:</p>
<pre><code class="lang-xml">&lt;platform name=&quot;android&quot;&gt;
 &lt;edit-config
   file=&quot;app/src/main/AndroidManifest.xml&quot;
   mode=&quot;merge&quot;
   target=&quot;/manifest/application&quot;&gt;
   &lt;application android:largeHeap=&quot;true&quot; /&gt;
 &lt;/edit-config&gt;
&lt;/platform&gt;
</code></pre>


<p>Repo:
  <a href="https://github.com/cyph/cordova-plugin-chooser">
    https://github.com/cyph/cordova-plugin-chooser
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-chooser
$ npm install --save @ionic-native/chooser
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Chooser } from &#39;@ionic-native/chooser&#39;;


constructor(private chooser: Chooser) { }

...


this.chooser.getFile()
  .then(file =&gt; console.log(file ? file.name : &#39;canceled&#39;))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getFile" href="#getFile"></a><code>getFile(accept)</code></h3>


Displays native prompt for user to select a file.
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
      accept</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional MIME type filter (e.g. &#39;image/gif,video/*&#39;).<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Promise containing selected file's raw binary data,
base64-encoded data: URI, MIME type, display name, and original URI.
</div>





<h2><a class="anchor" name="ChooserResult" href="#ChooserResult"></a>ChooserResult</h2>

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
      data
    </td>
    <td>
      <code>Uint8Array</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      dataURI
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      mediaType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      uri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





