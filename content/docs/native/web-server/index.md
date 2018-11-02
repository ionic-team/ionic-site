---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "web-server"
title: "Web Server"
header_sub_title: "Class in module "
doc: "Web Server"
docType: "class"
---

<h1 class="api-title">Web Server</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/web-server/index.ts#L17">
  Improve this doc
</a>







<p>This plugin allows you to start a local dynamic content web server for android and iOS devices.</p>


<p>Repo:
  <a href="https://github.com/bykof/cordova-plugin-webserver.git">
    https://github.com/bykof/cordova-plugin-webserver.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-webserver
$ npm install --save @ionic-native/web-server
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { WebServer } from &#39;@ionic-native/web-server&#39;;


constructor(private webServer: WebServer) { }

...

this.webServer.onRequest().subscribe(data =&gt; {
  console.log(data);
  const res: Response = {
    status: 200,
    body: &#39;&#39;,
    headers: {
      &#39;Content-Type&#39;: &#39;text/html&#39;
    }
  };

  this.webServer.sendResponse(data.requestId, res)
    .catch((error: any) =&gt; console.error(error));
});

this.webServer.start(80)
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="start" href="#start"></a><code>start(port)</code></h3>




This method will start your webserver.
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
      port</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Port number (default to 8080)</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


This method will stop your webserver.



<h3><a class="anchor" name="onRequest" href="#onRequest"></a><code>onRequest()</code></h3>




This method returns an observable that streams HTTP requests to an observer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;Request&gt;</code> Returns an observable to resolve as a Request object
</div><h3><a class="anchor" name="sendResponse" href="#sendResponse"></a><code>sendResponse(requestId,&nbsp;responseObject)</code></h3>


This method sends a response to a request.
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
      requestId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Request ID to respond to</p>
</td>
  </tr>
  
  <tr>
    <td>
      responseObject</td>
    <td>
      <code>Response</code>
    </td>
    <td>
      <p>Response object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





<h2><a class="anchor" name="Response" href="#Response"></a>Response</h2>

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
      status
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      body
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      headers
    </td>
    <td>
      <code>{ [key: string]: string}</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="Request" href="#Request"></a>Request</h2>

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
      requestId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      body
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      headers
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      method
    </td>
    <td>
      <code>&#39;POST&#39; | &#39;GET&#39; | &#39;PUT&#39; | &#39;PATCH&#39; | &#39;DELETE&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      path
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      query
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





