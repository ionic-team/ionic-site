---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "nfc"
title: "NFC"
header_sub_title: "Class in module "
doc: "NFC"
docType: "class"
---

<h1 class="api-title">NFC</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/nfc/index.ts#L24">
  Improve this doc
</a>







<p>The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.</p>
<p>Use to</p>
<ul>
<li>read data from NFC tags</li>
<li>write data to NFC tags</li>
<li>send data to other NFC enabled devices</li>
<li>receive data from NFC devices</li>
</ul>
<p>This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.</p>


<p>Repo:
  <a href="https://github.com/chariotsolutions/phonegap-nfc">
    https://github.com/chariotsolutions/phonegap-nfc
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add phonegap-nfc
$ npm install --save @ionic-native/nfc
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NFC, Ndef } from &#39;@ionic-native/nfc&#39;;

constructor(private nfc: NFC, private ndef: Ndef) { }

...

this.nfc.addNdefListener(() =&gt; {
  console.log(&#39;successfully attached ndef listener&#39;);
}, (err) =&gt; {
  console.log(&#39;error attaching ndef listener&#39;, err);
}).subscribe((event) =&gt; {
  console.log(&#39;received ndef message. the tag contains: &#39;, event.tag);
  console.log(&#39;decoded tag id&#39;, this.nfc.bytesToHexString(event.tag.id));

  let message = this.ndef.textRecord(&#39;Hello world&#39;);
  this.nfc.share([message]).then(onSuccess).catch(onError);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="beginSession" href="#beginSession"></a><code>beginSession(onSuccess,&nbsp;onFailure)</code></h3>




Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
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
      onSuccess</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addNdefListener" href="#addNdefListener"></a><code>addNdefListener(onSuccess,&nbsp;onFailure)</code></h3>




Registers an event listener for any NDEF tag.
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
      onSuccess</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addTagDiscoveredListener" href="#addTagDiscoveredListener"></a><code>addTagDiscoveredListener(onSuccess,&nbsp;onFailure)</code></h3>




Registers an event listener for tags matching any tag type.
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
      onSuccess</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addMimeTypeListener" href="#addMimeTypeListener"></a><code>addMimeTypeListener(mimeType,&nbsp;onSuccess,&nbsp;onFailure)</code></h3>




Registers an event listener for NDEF tags matching a specified MIME type.
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
      mimeType</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onSuccess</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addNdefFormatableListener" href="#addNdefFormatableListener"></a><code>addNdefFormatableListener(onSuccess,&nbsp;onFailure)</code></h3>




Registers an event listener for formatable NDEF tags.
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
      onSuccess</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      onFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="write" href="#write"></a><code>write(message)</code></h3>


Writes an NdefMessage(array of ndef records) to a NFC tag.
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
      message</td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="makeReadyOnly" href="#makeReadyOnly"></a><code>makeReadyOnly()</code></h3>


Makes a NFC tag read only. **Warning** this is permanent.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="share" href="#share"></a><code>share(message)</code></h3>


Shares an NDEF Message(array of ndef records) via peer-to-peer.
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
      message</td>
    <td>
      
    </td>
    <td>
      <p>An array of NDEF Records.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unshare" href="#unshare"></a><code>unshare()</code></h3>


Stop sharing NDEF data via peer-to-peer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="erase" href="#erase"></a><code>erase()</code></h3>


Erase a NDEF tag



<h3><a class="anchor" name="handover" href="#handover"></a><code>handover(uris)</code></h3>


Send a file to another device via NFC handover.
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
      uris</td>
    <td>
      
    </td>
    <td>
      <p>A URI as a String, or an array of URIs.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopHandover" href="#stopHandover"></a><code>stopHandover()</code></h3>


Stop sharing NDEF data via NFC handover.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="showSettings" href="#showSettings"></a><code>showSettings()</code></h3>


Opens the device's NFC settings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enabled" href="#enabled"></a><code>enabled()</code></h3>


Check if NFC is available and enabled on this device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="bytesToString" href="#bytesToString"></a><code>bytesToString(bytes)</code></h3>





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
      bytes</td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="stringToBytes" href="#stringToBytes"></a><code>stringToBytes(str)</code></h3>




Convert string to byte array.
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
      str</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number[]</code> 
</div><h3><a class="anchor" name="bytesToHexString" href="#bytesToHexString"></a><code>bytesToHexString(bytes)</code></h3>




Convert byte array to hex string

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
      bytes</td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div>





