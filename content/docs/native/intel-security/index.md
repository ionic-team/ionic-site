---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "intel-security"
title: "Intel Security"
header_sub_title: "Class in module "
doc: "Intel Security"
docType: "class"
---

<h1 class="api-title">Intel Security</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/intel-security/index.ts#L28">
  Improve this doc
</a>







<p>The App Security API enables the use of security properties and capabilities on the platform, using a new set of API defined for application developers. You are not required to be a security expert to make good use of the API. Key elements, such as encryption of data and establishments of capabilities, is abstracted and done by the API implementation, for you.</p>
<p>For example:</p>
<ul>
<li>Use the API to store (E.g. cache) data locally, using the device non-volatile storage. Data protection/encryption will be done for you by the API implementation</li>
<li>Establish a connection with remote server (E.g. XHR) using a protected channel. SSL/TLS establishment and usage will be done for you by the API implementation</li>
</ul>
<p>For more information please visit the <a href="https://software.intel.com/en-us/app-security-api/api">API documentation</a>.</p>


<p>Repo:
  <a href="https://github.com/AppSecurityApi/com-intel-security-cordova-plugin">
    https://github.com/AppSecurityApi/com-intel-security-cordova-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com-intel-security-cordova-plugin
$ npm install --save @ionic-native/intel-security
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { IntelSecurity } from &#39;@ionic-native/intel-security&#39;;
...
constructor(private intelSecurity: IntelSecurity) { }
...

let storageID = &#39;id&#39;;

this.intelSecurity.data.createFromData({ data: &#39;Sample Data&#39; })
  .then((instanceID: Number) =&gt; this.intelSecurity.storage.write({ id: storageId, instanceID: instanceID }))
  .catch((error: any) =&gt; console.log(error));

this.intelSecurity.storage.read({id: storageID })
  .then((instanceID: number) =&gt; this.intelSecurity.data.getData(instanceID))
  .then((data: string) =&gt; console.log(data)) // Resolves to &#39;Sample Data&#39;
  .catch((error: any) =&gt; console.log(error));

this.intelSecurity.storage.delete({ id: storageID })
  .then(() =&gt; console.log(&#39;Deleted Successfully&#39;))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="storage" href="#storage"></a><code>storage</code></h3>

returns an IntelSecurityStorage object


<h3><a class="anchor" name="data" href="#data"></a><code>data</code></h3>

Returns an IntelSecurityData object




<h2><a class="anchor" name="IntelSecurityData" href="#IntelSecurityData"></a>IntelSecurityData</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="createFromData" href="#createFromData"></a><code>createFromData(options)</code></h3>




This creates a new instance of secure data using plain-text data.
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
      <code>IntelSecurityDataOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
</div><h3><a class="anchor" name="createFromSealedData" href="#createFromSealedData"></a><code>createFromSealedData(options,&nbsp;options.sealedData)</code></h3>




This creates a new instance of secure data (using sealed data)
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options.sealedData</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sealed data in string format.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
</div><h3><a class="anchor" name="getData" href="#getData"></a><code>getData(instanceID)</code></h3>




This returns the plain-text data of the secure data instance.
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
      instanceID</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves to the data as plain-text, or rejects with an error.
</div><h3><a class="anchor" name="getSealedData" href="#getSealedData"></a><code>getSealedData(instanceID)</code></h3>




This returns the sealed chunk of a secure data instance.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves to the sealed data, or rejects with an error.
</div><h3><a class="anchor" name="getTag" href="#getTag"></a><code>getTag(instanceID)</code></h3>




This returns the tag of the secure data instance.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves to the tag, or rejects with an error.
</div><h3><a class="anchor" name="getPolicy" href="#getPolicy"></a><code>getPolicy(instanceID)</code></h3>




This returns the data policy of the secure data instance.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves to the policy object, or rejects with an error.
</div><h3><a class="anchor" name="getOwners" href="#getOwners"></a><code>getOwners(instanceID)</code></h3>




This returns an array of the data owners unique IDs.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&gt;</code> Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
</div><h3><a class="anchor" name="getCreator" href="#getCreator"></a><code>getCreator(instanceID)</code></h3>




This returns the data creator unique ID.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Number&gt;</code> Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
</div><h3><a class="anchor" name="getWebOwners" href="#getWebOwners"></a><code>getWebOwners(instanceID)</code></h3>




This returns an array of the trusted web domains of the secure data instance.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&gt;</code> Returns a promise that resolves to a list of web owners, or rejects with an error.
</div><h3><a class="anchor" name="changeExtraKey" href="#changeExtraKey"></a><code>changeExtraKey(options,&nbsp;options.instanceID,&nbsp;options.extraKey)</code></h3>




This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options.instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.extraKey</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Extra sealing secret for secure data instance.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with no parameters, or rejects with an error.
</div><h3><a class="anchor" name="destroy" href="#destroy"></a><code>destroy(instanceID)</code></h3>




This releases a secure data instance.
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
      instanceID</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resovles with no parameters, or rejects with an error.
</div><h2><a class="anchor" name="IntelSecurityStorage" href="#IntelSecurityStorage"></a>IntelSecurityStorage</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="delete" href="#delete"></a><code>delete(options,&nbsp;options.id,&nbsp;options.storageType)</code></h3>




This deletes a secure storage resource (indicated by id).
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options.id</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Storage resource identifier.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.storageType</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Storage type.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with no parameters, or rejects with an error.
</div><h3><a class="anchor" name="read" href="#read"></a><code>read(options,&nbsp;options.id,&nbsp;options.storageType,&nbsp;options.extraKey)</code></h3>




This reads the data from secure storage (indicated by id) and creates a new secure data instance.
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options.id</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Storage resource identifier.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.storageType</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Storage type.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.extraKey</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Valid secure data instance ID.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Number&gt;</code> Returns a Promise that resolves with the instance ID of the created secure data instance, or rejects with an error.
</div><h3><a class="anchor" name="write" href="#write"></a><code>write(options,&nbsp;options.id,&nbsp;options.instanceID,&nbsp;options.storageType)</code></h3>




This writes the data contained in a secure data instance into secure storage.
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options.id</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Storage resource identifier.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.instanceID</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Valid secure data instance ID</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.storageType</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Storage type.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with no parameters, or rejects with an error.
</div>



<h2><a class="anchor" name="IntelSecurityDataOptions" href="#IntelSecurityDataOptions"></a>IntelSecurityDataOptions</h2>

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
      <code>String</code>
    </td>
    <td>
      <p>Non-empty string. *</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      tag
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Tag text.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      extraKey
    </td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Valid secure data instance ID.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      appAccessControl
    </td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Application access control policy.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      deviceLocality
    </td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Device locality policy.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sensitivityLevel
    </td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Sensitivity level policy.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      noStore
    </td>
    <td>
      <code>Boolean</code>
    </td>
    <td>
      <p>Disallow sealed blob access.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      noRead
    </td>
    <td>
      <code>Boolean</code>
    </td>
    <td>
      <p>Disallow plain-text data access.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      creator
    </td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>Creator unique ID.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      owners
    </td>
    <td>
      <code>Number[]</code>
    </td>
    <td>
      <p>Array of owners unique IDs.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      webOwners
    </td>
    <td>
      <code>String[]</code>
    </td>
    <td>
      <p>List of trusted web domains.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





