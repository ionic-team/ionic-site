---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "social-sharing"
title: "Social Sharing"
header_sub_title: "Class in module "
doc: "Social Sharing"
docType: "class"
---

<h1 class="api-title">Social Sharing</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/social-sharing/index.ts#L1">
  Improve this doc
</a>







<p>Share text, files, images, and links via social networks, sms, and email.</p>
<p>For Browser usage check out the Web Share API docs: <a href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api">https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api</a></p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-x-socialsharing
$ npm install --save @ionic-native/social-sharing
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SocialSharing } from &#39;@ionic-native/social-sharing&#39;;

constructor(private socialSharing: SocialSharing) { }

...

// Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() =&gt; {
  // Sharing via email is possible
}).catch(() =&gt; {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail(&#39;Body&#39;, &#39;Subject&#39;, [&#39;recipient@example.org&#39;]).then(() =&gt; {
  // Success!
}).catch(() =&gt; {
  // Error!
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="share" href="#share"></a><code>share(message,&nbsp;subject,&nbsp;file,&nbsp;url)</code></h3>




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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The message you would like to share.</p>
</td>
  </tr>
  
  <tr>
    <td>
      subject</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The subject</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.</p>
</td>
  </tr>
  
  <tr>
    <td>
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A URL to share</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareWithOptions" href="#shareWithOptions"></a><code>shareWithOptions(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
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
      <code>object</code>
    </td>
    <td>
      <p>The options object with the message, subject, files, url and chooserTitle properties.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="canShareVia" href="#canShareVia"></a><code>canShareVia(appName,&nbsp;message,&nbsp;subject,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      appName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>App name or package name. Examples: instagram or com.apple.social.facebook</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      subject</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaTwitter" href="#shareViaTwitter"></a><code>shareViaTwitter(message,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaFacebook" href="#shareViaFacebook"></a><code>shareViaFacebook(message,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaFacebookWithPasteMessageHint" href="#shareViaFacebookWithPasteMessageHint"></a><code>shareViaFacebookWithPasteMessageHint(message,&nbsp;image,&nbsp;url,&nbsp;pasteMessageHint)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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
      pasteMessageHint</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaInstagram" href="#shareViaInstagram"></a><code>shareViaInstagram(message,&nbsp;image)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaWhatsApp" href="#shareViaWhatsApp"></a><code>shareViaWhatsApp(message,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaWhatsAppToReceiver" href="#shareViaWhatsAppToReceiver"></a><code>shareViaWhatsAppToReceiver(receiver,&nbsp;message,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      receiver</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Pass phone number on Android, and Addressbook ID (abid) on iOS</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Message to send</p>
</td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Image to send (does not work on iOS</p>
</td>
  </tr>
  
  <tr>
    <td>
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Link to send</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaSMS" href="#shareViaSMS"></a><code>shareViaSMS(messge,&nbsp;phoneNumber)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      messge</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>message to send</p>
</td>
  </tr>
  
  <tr>
    <td>
      phoneNumber</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Number or multiple numbers seperated by commas</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="canShareViaEmail" href="#canShareViaEmail"></a><code>canShareViaEmail()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


Checks if you can share via email


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareViaEmail" href="#shareViaEmail"></a><code>shareViaEmail(message,&nbsp;subject,&nbsp;to,&nbsp;cc,&nbsp;bcc,&nbsp;files)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      subject</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      to</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      cc</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Optional</p>
</td>
  </tr>
  
  <tr>
    <td>
      bcc</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Optional</p>
</td>
  </tr>
  
  <tr>
    <td>
      files</td>
    <td>
      <code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>Optional URL or local path to file(s) to attach</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="shareVia" href="#shareVia"></a><code>shareVia(appName,&nbsp;message,&nbsp;subject,&nbsp;image,&nbsp;url)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


Share via AppName
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
      appName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>App name or package name. Examples: instagram or com.apple.social.facebook</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      subject</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setIPadPopupCoordinates" href="#setIPadPopupCoordinates"></a><code>setIPadPopupCoordinates(targetBounds)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


defines the popup position before call the share method.
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
      targetBounds</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>left, top, width, height</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="saveToPhotoAlbum" href="#saveToPhotoAlbum"></a><code>saveToPhotoAlbum(fileOrFileArray)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Save an array of images to the camera roll
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
      fileOrFileArray</td>
    <td>
      <code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>Single or multiple files</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





