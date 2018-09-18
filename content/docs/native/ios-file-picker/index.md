---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "ios-file-picker"
title: "iOS File Picker"
header_sub_title: "Class in module "
doc: "iOS File Picker"
docType: "class"
---

<h1 class="api-title">iOS File Picker</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/file-picker/index.ts#L8">
  Improve this doc
</a>







<p>Opens the file picker on iOS for the user to select a file, returns a file URI.</p>


<p>Repo:
  <a href="https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin">
    https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-filepicker
$ npm install --save @ionic-native/file-picker
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { IOSFilePicker } from &#39;@ionic-native/file-picker&#39;;

constructor(private filePicker: IOSFilePicker) { }

...

this.filePicker.pickFile()
  .then(uri =&gt; console.log(uri))
  .catch(err =&gt; console.log(&#39;Error&#39;, err));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="pickFile" href="#pickFile"></a><code>pickFile()</code></h3>




Open a file


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





<h2><a class="anchor" name="IOSFilePickerPosition" href="#IOSFilePickerPosition"></a>IOSFilePickerPosition</h2>

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
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





