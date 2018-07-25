---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "qqsdk"
title: "QQSDK"
header_sub_title: "Class in module "
doc: "QQSDK"
docType: "class"
---

<h1 class="api-title">QQSDK</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/qqsdk/index.ts#L50">
  Improve this doc
</a>







<p>This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-qqsdk</code>. For more info, please see the <a href="https://github.com/iVanPan/Cordova_QQ">QQSDK plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/iVanPan/Cordova_QQ">
    https://github.com/iVanPan/Cordova_QQ
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID
$ npm install --save @ionic-native/qqsdk
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { QQSDK, QQShareOptions } from &#39;@ionic-native/qqsdk&#39;;

constructor(private qq: QQSDK) { }

...


const options: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  scene: this.qq.Scene.QQ,
  title: &#39;This is a title for cordova-plugin-qqsdk&#39;,
  url: &#39;https://cordova.apache.org/&#39;,
  image: &#39;https://cordova.apache.org/static/img/cordova_bot.png&#39;,
  description: &#39;This is  Cordova QQ share description&#39;,
  flashUrl:  &#39;http://stream20.qqmusic.qq.com/30577158.mp3&#39;,
};

const clientOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
};

const shareTextOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  text: &#39;This is Share Text&#39;,
  scene: this.qq.Scene.QQ,
};

this.qq.ssoLogin(clientOptions)
   .then(result =&gt; {
      // Success
      console.log(&#39;token is &#39; + result.access_token);
      console.log(&#39;userid is &#39; + result.userid);
      console.log(&#39;expires_time is &#39; + new Date(parseInt(result.expires_time)) + &#39; TimeStamp is &#39; + result.expires_time);
   })
   .catch(error =&gt; {
      console.log(error); // Failed
   });

this.qq.logout()
   .then(() =&gt; {
      console.log(&#39;logout success&#39;);
   })
   .catch(error =&gt; {
      console.log(error);
   });

this.qq.checkClientInstalled(clientOptions)
   .then(() =&gt; {
      console.log(&#39;Installed&#39;);
   })
   .catch(() =&gt; {
      console.log(&#39;Not Installed&#39;);
   });

this.qq.shareText(shareTextOptions)
   .then(() =&gt; {
      console.log(&#39;shareText success&#39;);
   })
   .catch(error =&gt; {
      console.log(error);
   });

this.qq.shareImage(options)
   .then(() =&gt; {
      console.log(&#39;shareImage success&#39;);
   })
   .catch(error =&gt; {
      console.log(error);
   });
}

this.qq.shareNews(options)
   .then(() =&gt; {
      console.log(&#39;shareNews success&#39;);
   })
   .catch(error =&gt; {
      console.log(error);
   });
}

this.qq.shareAudio(options)
   .then(() =&gt; {
      console.log(&#39;shareAudio success&#39;);
   })
   .catch(error =&gt; {
      console.log(error);
   });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Scene" href="#Scene"></a><code>Scene</code></h3>

QQ Share Scene



<h3><a class="anchor" name="ClientType" href="#ClientType"></a><code>ClientType</code></h3>

client type:  QQ application or TIM application



<h3><a class="anchor" name="ssoLogin" href="#ssoLogin"></a><code>ssoLogin(options)</code></h3>




open QQ or TIM client perform ssoLogin
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div><h3><a class="anchor" name="logout" href="#logout"></a><code>logout()</code></h3>







<h3><a class="anchor" name="checkClientInstalled" href="#checkClientInstalled"></a><code>checkClientInstalled()</code></h3>




Detect if the QQ application or TIM application is installed on the device.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div><h3><a class="anchor" name="shareText" href="#shareText"></a><code>shareText(options)</code></h3>




shareText
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div><h3><a class="anchor" name="shareImage" href="#shareImage"></a><code>shareImage(options)</code></h3>




shareImage
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div><h3><a class="anchor" name="shareNews" href="#shareNews"></a><code>shareNews(options)</code></h3>




shareNews
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div><h3><a class="anchor" name="shareAudio" href="#shareAudio"></a><code>shareAudio(options)</code></h3>




shareAudio
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div>





<h2><a class="anchor" name="QQShareOptions" href="#QQShareOptions"></a>QQShareOptions</h2>

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
      client
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The clinet type, QQ or TIM
Default is QQ</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      scene
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The Share Sence
Default is QQ</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The text for shareText</p>

      <em>(optional)</em>
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
      <p>The url for share news or audio</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The title for share image,news or audio</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      description
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The description for share image,news or audio</p>

      <em>(optional)</em>
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
      <p>The image for share image,news or audio
Image supports three types:</p>
<ol>
<li>Network URL</li>
<li>Base64</li>
<li>Absolute file path</li>
</ol>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      flashUrl
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL for audio</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





