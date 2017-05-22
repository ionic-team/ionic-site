---
layout: "fluid/docs_base"
version: "3.10.2"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/http/index.ts#L20">
  Improve this doc
</a>






<p>Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.</p>
<p>Advantages over Javascript requests:</p>
<ul>
<li>Background threading - all requests are done in a background thread</li>
<li>SSL Pinning</li>
</ul>


<p>Repo:
  <a href="https://github.com/wymsee/cordova-HTTP">
    https://github.com/wymsee/cordova-HTTP
  </a>
</p>


<h2>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-http
$ npm install --save @ionic-native/http
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { HTTP } from &#39;@ionic-native/http&#39;;

constructor(private http: HTTP) { }

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








<h2>Instance Members</h2>
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
  <b>Returns:</b> <code>Object</code> an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64encodedusernameandpassword'}
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

<h3><a class="anchor" name="setHeader" href="#setHeader"></a><code>setHeader(header,&nbsp;value)</code></h3>




Set a header for all future requests. Takes a header and a value.
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

<h3><a class="anchor" name="enableSSLPinning" href="#enableSSLPinning"></a><code>enableSSLPinning(enable)</code></h3>


Enable or disable SSL Pinning. This defaults to false.

To use SSL pinning you must include at least one .cer SSL certificate in your app project. You can pin to your server certificate or to one of the issuing CA certificates. For ios include your certificate in the root level of your bundle (just add the .cer file to your project/target at the root level). For android include your certificate in your project's platforms/android/assets folder. In both cases all .cer files found will be loaded automatically. If you only have a .pem certificate see this stackoverflow answer. You want to convert it to a DER encoded certificate with a .cer extension.

As an alternative, you can store your .cer files in the www/certificates folder.
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
      enable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to enable</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> returns a promise that will resolve on success, and reject on failure
</div><h3><a class="anchor" name="acceptAllCerts" href="#acceptAllCerts"></a><code>acceptAllCerts(accept)</code></h3>


Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.
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
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to accept</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> returns a promise that will resolve on success, and reject on failure
</div><h3><a class="anchor" name="validateDomainName" href="#validateDomainName"></a><code>validateDomainName(validate)</code></h3>


Whether or not to validate the domain name in the certificate. This defaults to true.
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
      validate</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to validate</p>
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
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
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
      <p>The path to donwload the file to, including the file name.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HTTPResponse&gt;</code> returns a promise that resolve on success, and reject on failure
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





