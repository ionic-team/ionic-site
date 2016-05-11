---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "social-sharing"
title: "Social Sharing"
header_sub_title: "Class in module "
doc: "Social Sharing"
docType: "class"
---








<h1 class="api-title">

  
  Social Sharing
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/socialsharing.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-x-socialsharing</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>Share text, files, images, and links via social networks, sms, and email.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
  
  <li>Android</li>
  
  <li>Windows Phone</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {SocialSharing} from &#39;ionic-native&#39;;

...
// TODO add usage info
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="share"></div>
<h3><code>share(message,&nbsp;subject,&nbsp;file,&nbsp;url)</code>

</h3>



Shares using the share sheet


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
      
<code>string</code>
    </td>
    <td>
      <p>The message you would like to share.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      subject
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The subject</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
    <td>
      
<code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.</p>

      
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
      <p>A URL to share</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="canShareVia"></div>
<h3><code>canShareVia(appName)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Checks if you can share via a specific app.


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
      appName
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>App name or package name. Examples: instagram or com.apple.social.facebook</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaTwitter"></div>
<h3><code>shareViaTwitter(message,&nbsp;image,&nbsp;url)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to Twitter


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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      url
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaFacebook"></div>
<h3><code>shareViaFacebook(message,&nbsp;image,&nbsp;url)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to Facebook


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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaFacebookWithPasteMessageHint"></div>
<h3><code>shareViaFacebookWithPasteMessageHint(message,&nbsp;image,&nbsp;url,&nbsp;pasteMessageHint)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to Facebook with a paste message hint


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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      pasteMessageHint
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaInstagram"></div>
<h3><code>shareViaInstagram(message,&nbsp;image)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to Instagram


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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaWhatsApp"></div>
<h3><code>shareViaWhatsApp(message,&nbsp;image,&nbsp;url)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to WhatsApp


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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaWhatsAppToReceiver"></div>
<h3><code>shareViaWhatsAppToReceiver(receiver,&nbsp;message,&nbsp;image,&nbsp;url)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Shares directly to a WhatsApp Contact


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
      receiver
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Pass phone number on Android, and Addressbook ID (abid) on iOS</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Message to send</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      image
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Image to send (does not work on iOS</p>

      
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
      <p>Link to send</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaSMS"></div>
<h3><code>shareViaSMS(messge,&nbsp;phoneNumber)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Share via SMS


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
      messge
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>message to send</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      phoneNumber
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Number or multiple numbers seperated by commas</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="shareViaEmail"></div>
<h3><code>shareViaEmail(message,&nbsp;subject,&nbsp;to,&nbsp;cc,&nbsp;bcc,&nbsp;files)</code>

</h3>


<b>Platforms:</b>
<code>iOS</code>&nbsp;

<code>Android</code>&nbsp;


Share via Email


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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      subject
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      to
      
      
    </td>
    <td>
      
<code>Array&lt;string&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      cc
      
      
    </td>
    <td>
      
<code>Array&lt;string&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      bcc
      
      
    </td>
    <td>
      
<code>Array&lt;string&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      files
      
      
    </td>
    <td>
      
<code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>URL or local path to file(s) to attach</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

