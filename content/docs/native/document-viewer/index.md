---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "document-viewer"
title: "Document Viewer"
header_sub_title: "Class in module "
doc: "Document Viewer"
docType: "class"
---

<h1 class="api-title">Document Viewer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/document-viewer/index.ts#L29">
  Improve this doc
</a>







<p>This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.</p>


<p>Repo:
  <a href="https://github.com/sitewaerts/cordova-plugin-document-viewer">
    https://github.com/sitewaerts/cordova-plugin-document-viewer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-document-viewer
$ npm install --save @ionic-native/document-viewer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DocumentViewer } from &#39;@ionic-native/document-viewer&#39;;


constructor(private document: DocumentViewer) { }

...
const options: DocumentViewerOptions = {
  title: &#39;My PDF&#39;
}

this.document.viewDocument(&#39;assets/myFile.pdf&#39;, &#39;application/pdf&#39;, options)
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getSupportInfo" href="#getSupportInfo"></a><code>getSupportInfo()</code></h3>


Displays the email composer pre-filled with data.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves promise when the EmailComposer has been opened
</div><h3><a class="anchor" name="canViewDocument" href="#canViewDocument"></a><code>canViewDocument(url,&nbsp;contentType,&nbsp;options,&nbsp;onPossible,&nbsp;onMissingApp,&nbsp;onImpossible,&nbsp;onError)</code></h3>




Check if the document can be shown

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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Url to the file</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Content type of the file</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>Array&lt;DocumentViewerOptions&gt;</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  
  <tr>
    <td>
      onPossible</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onMissingApp</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onImpossible</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onError</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="viewDocument" href="#viewDocument"></a><code>viewDocument(url,&nbsp;contentType,&nbsp;options,&nbsp;onShow,&nbsp;onClose,&nbsp;onMissingApp,&nbsp;onError)</code></h3>




Opens the file

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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Url to the file</p>
</td>
  </tr>
  
  <tr>
    <td>
      contentType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Content type of the file</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>DocumentViewerOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  
  <tr>
    <td>
      onShow</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onClose</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onMissingApp</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      onError</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="DocumentViewerOptions" href="#DocumentViewerOptions"></a>DocumentViewerOptions</h2>

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
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      documentView
    </td>
    <td>
      <code>{
    closeLabel: string;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      navigationView
    </td>
    <td>
      <code>{
    closeLabel: string;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      email
    </td>
    <td>
      <code>{
    enabled: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      print
    </td>
    <td>
      <code>{
    enabled: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      openWith
    </td>
    <td>
      <code>{
    enabled: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bookmarks
    </td>
    <td>
      <code>{
    enabled: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      search
    </td>
    <td>
      <code>{
    enabled: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoClose
    </td>
    <td>
      <code>{
    onPause: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





