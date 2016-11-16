---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "nfc"
title: "NFC"
header_sub_title: "Class in module "
doc: "NFC"
docType: "class"
---







<h1 class="api-title">
  
  NFC
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/nfc.ts#L2">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add phonegap-nfc</code></pre>
<p>Repo:
  <a href="https://github.com/chariotsolutions/phonegap-nfc">
    https://github.com/chariotsolutions/phonegap-nfc
  </a>
</p>

<!-- description -->

<p>The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.</p>
<p>Use to</p>
<ul>
<li>read data from NFC tags</li>
<li>write data to NFC tags</li>
<li>send data to other NFC enabled devices</li>
<li>receive data from NFC devices</li>
</ul>
<p>This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {NFC, Ndef} from &#39;ionic-native&#39;;

let message = Ndef.textRecord(&#39;Hello world&#39;);
NFC.share([message]).then(onSuccess).catch(onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="addNdefListener"></div>
<h3><code>addNdefListener(onSuccess,&nbsp;onFailure)</code>
  
</h3>




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
      onSuccess
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      onFailure
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="addTagDiscoveredListener"></div>
<h3><code>addTagDiscoveredListener(mimeType,&nbsp;onSuccess,&nbsp;onFailure)</code>
  
</h3>




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
      mimeType
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      onSuccess
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      onFailure
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="addMimeTypeListener"></div>
<h3><code>addMimeTypeListener(onSuccess,&nbsp;onFailure)</code>
  
</h3>




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
      onSuccess
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      onFailure
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="addNdefFormatableListener"></div>
<h3><code>addNdefFormatableListener(onSuccess,&nbsp;onFailure)</code>
  
</h3>




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
      onSuccess
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      onFailure
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="write"></div>
<h3><code>write(message)</code>
  
</h3>


Qrites an NdefMessage to a NFC tag.


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
      message
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="makeReadyOnly"></div>
<h3><code>makeReadyOnly()</code>
  
</h3>


Makes a NFC tag read only. **Warning** this is permanent.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="share"></div>
<h3><code>share(message)</code>
  
</h3>


Shares an NDEF Message via peer-to-peer.


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
      message
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="unshare"></div>
<h3><code>unshare()</code>
  
</h3>


Stop sharing NDEF data via peer-to-peer.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="erase"></div>
<h3><code>erase()</code>
  
</h3>


Erase a NDEF tag










<div id="handover"></div>
<h3><code>handover(uris)</code>
  
</h3>


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
      uris
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="stopHandover"></div>
<h3><code>stopHandover()</code>
  
</h3>


Stop sharing NDEF data via NFC handover.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="showSettings"></div>
<h3><code>showSettings()</code>
  
</h3>


Show the NFC settings on the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="enabled"></div>
<h3><code>enabled()</code>
  
</h3>


Check if NFC is available and enabled on this device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

