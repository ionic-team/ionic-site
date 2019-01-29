---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "http"
title: "HTTP"
header_sub_title: "Class in module "
doc: "HTTP"
docType: "class"
---

<h1 class="api-title">HTTP</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/http/index.ts#L24">
  Improve this doc
</a>







<p>Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.</p>
<p>Advantages over Javascript requests:</p>
<ul>
<li>Background threading - all requests are done in a background thread</li>
<li>SSL Pinning</li>
</ul>


<p>Repo:
  <a href="https://github.com/silkimen/cordova-plugin-advanced-http">
    https://github.com/silkimen/cordova-plugin-advanced-http
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-advanced-http
$ npm install --save @ionic-native/http@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { HTTP } from &#39;@ionic-native/http&#39;;

constructor(private http: HTTP) {}

...

this.http.get(&#39;http://ionic.io&#39;, {}, {})
  .then(data =&gt; {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error =&gt; {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getBasicAuthHeader" href="#getBasicAuthHeader"></a><code>getBasicAuthHeader(username,&nbsp;password)</code></h3>




This returns an object representing a basic HTTP Authorization header of the form.
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
      username</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Username</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Password</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
</div><h3><a class="anchor" name="useBasicAuth" href="#useBasicAuth"></a><code>useBasicAuth(username,&nbsp;password)</code></h3>




This sets up all future requests to use Basic HTTP authentication with the given username and password.
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
      username</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Username</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Password</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getHeaders" href="#getHeaders"></a><code>getHeaders(host)</code></h3>




Get all headers defined for a given hostname.
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
      host</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The hostname</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> return all headers defined for the hostname
</div><h3><a class="anchor" name="setHeader" href="#setHeader"></a><code>setHeader(host,&nbsp;header,&nbsp;value)</code></h3>




Set a header for all future requests. Takes a hostname, a header and a value.
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
      host</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The hostname to be used for scoping this header</p>
</td>
  </tr>
  
  <tr>
    <td>
      header</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the header</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The value of the header</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getDataSerializer" href="#getDataSerializer"></a><code>getDataSerializer()</code></h3>




Get the name of the data serializer which will be used for all future POST and PUT requests.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> returns the name of the configured data serializer
</div><h3><a class="anchor" name="setDataSerializer" href="#setDataSerializer"></a><code>setDataSerializer(serializer)</code></h3>




Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
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
      serializer</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the serializer. Can be urlencoded, utf8 or json</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCookie" href="#setCookie"></a><code>setCookie(url,&nbsp;cookie)</code></h3>




Add a custom cookie.
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
      <p>Scope of the cookie</p>
</td>
  </tr>
  
  <tr>
    <td>
      cookie</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>RFC compliant cookie string</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="clearCookies" href="#clearCookies"></a><code>clearCookies()</code></h3>




Clear all cookies.



<h3><a class="anchor" name="removeCookies" href="#removeCookies"></a><code>removeCookies(url,&nbsp;cb)</code></h3>




Remove cookies for given URL.
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
      </td>
  </tr>
  
  <tr>
    <td>
      cb</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getCookieString" href="#getCookieString"></a><code>getCookieString(url)</code></h3>




Resolve cookie string for given URL.
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
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getRequestTimeout" href="#getRequestTimeout"></a><code>getRequestTimeout()</code></h3>




Get global request timeout value in seconds.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> returns the global request timeout value
</div><h3><a class="anchor" name="setRequestTimeout" href="#setRequestTimeout"></a><code>setRequestTimeout(timeout)</code></h3>




Set global request timeout value in seconds.
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
      timeout</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The timeout in seconds. Default 60</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setSSLCertMode" href="#setSSLCertMode"></a><code>setSSLCertMode(mode)</code></h3>


Set SSL Cert handling mode, being one of the following values
default: default SSL cert handling using system's CA certs
nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
pinned: trust only provided certs
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
      mode</td>
    <td>
      <code>&#39;default&#39;</code>|<code>&#39;nocheck&#39;</code>|<code>&#39;pinned&#39;</code>
    </td>
    <td>
      <p>SSL Cert handling mode</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="disableRedirect" href="#disableRedirect"></a><code>disableRedirect(disable)</code></h3>


Disable following redirects automatically.
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
      disable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to disable following redirects automatically</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> returns a promise that will resolve on success, and reject on failure
</div><h3><a class="anchor" name="post" href="#post"></a><code>post(url,&nbsp;body,&nbsp;headers)</code></h3>


Make a POST request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      body</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The body of the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="get" href="#get"></a><code>get(url,&nbsp;parameters,&nbsp;headers)</code></h3>


Make a GET request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      parameters</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Parameters to send with the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="put" href="#put"></a><code>put(url,&nbsp;body,&nbsp;headers)</code></h3>


Make a PUT request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      body</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The body of the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="patch" href="#patch"></a><code>patch(url,&nbsp;body,&nbsp;headers)</code></h3>


Make a PATCH request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      body</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The body of the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="delete" href="#delete"></a><code>delete(url,&nbsp;parameters,&nbsp;headers)</code></h3>


Make a DELETE request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      parameters</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Parameters to send with the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="head" href="#head"></a><code>head(url,&nbsp;parameters,&nbsp;headers)</code></h3>


Make a HEAD request
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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      parameters</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Parameters to send with the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="uploadFile" href="#uploadFile"></a><code>uploadFile(url,&nbsp;body,&nbsp;headers,&nbsp;filePath,&nbsp;name)</code></h3>



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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      body</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The body of the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  
  <tr>
    <td>
      filePath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The local path of the file to upload</p>
</td>
  </tr>
  
  <tr>
    <td>
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the parameter to pass the file along as</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a FileEntry promise that resolve on success, and reject on failure
</div><h3><a class="anchor" name="downloadFile" href="#downloadFile"></a><code>downloadFile(url,&nbsp;body,&nbsp;headers,&nbsp;filePath)</code></h3>



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
      <p>The url to send the request to</p>
</td>
  </tr>
  
  <tr>
    <td>
      body</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The body of the request</p>
</td>
  </tr>
  
  <tr>
    <td>
      headers</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The headers to set for this request</p>
</td>
  </tr>
  
  <tr>
    <td>
      filePath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path to download the file to, including the file name.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a FileEntry promise that resolve on success, and reject on failure
</div>





<h2><a class="anchor" name="HTTPResponse" href="#HTTPResponse"></a>HTTPResponse</h2>

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
      <p>The status number of the response</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      headers
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The headers of the response</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the response. This property will be the final URL obtained after any redirects.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      data
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The data that is in the response. This property usually exists when a promise returned by a request method resolves.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      error
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Error response from the server. This property usually exists when a promise returned by a request method rejects.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





