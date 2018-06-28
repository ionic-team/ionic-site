---
layout: "fluid/docs_base"
version: "4.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "httpd"
title: "Httpd"
header_sub_title: "Class in module "
doc: "Httpd"
docType: "class"
---

<h1 class="api-title">Httpd</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/httpd/index.ts#L20">
  Improve this doc
</a>







<p>Embedded httpd for Cordova apps. Light weight HTTP server.</p>


<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-httpd">
    https://github.com/floatinghotpot/cordova-httpd
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-httpd
$ npm install --save @ionic-native/httpd
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>macOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Httpd, HttpdOptions } from &#39;@ionic-native/httpd&#39;;

constructor(private httpd: Httpd) { }

...


let options: HttpdOptions = {
     www_root: &#39;httpd_root&#39;, // relative path to app&#39;s www directory
     port: 80,
     localhost_only: false
 };

this.httpd.startServer(options).subscribe((data) =&gt; {
 console.log(&#39;Server is live&#39;);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startServer" href="#startServer"></a><code>startServer(options)</code></h3>




Starts a web server.
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
      options</td>
    <td>
      <code>HttpdOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;string&gt;</code> Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
</div><h3><a class="anchor" name="getUrl" href="#getUrl"></a><code>getUrl()</code></h3>


Gets the URL of the running server


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves with the URL of the web server.
</div><h3><a class="anchor" name="getLocalPath" href="#getLocalPath"></a><code>getLocalPath()</code></h3>


Get the local path of the running webserver


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves with the local path of the web server.
</div>





<h2><a class="anchor" name="HttpdOptions" href="#HttpdOptions"></a>HttpdOptions</h2>

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
      www_root
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The public root directory for your web server. This path is relative to your app&#39;s www directory.
Default is current directory.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      port
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The port number to use.
Default is 8888</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      localhost_only
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Setting this option to false will allow remote access to your web server (over any IP).
Default is false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





