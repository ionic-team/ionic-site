---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "3d-touch"
title: "3D Touch"
header_sub_title: "Class in module "
doc: "3D Touch"
docType: "class"
---

<h1 class="api-title">3D Touch</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/three-dee-touch/index.ts#L55">
  Improve this doc
</a>







<p>The 3D Touch plugin adds 3D Touch capabilities to your Cordova app.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-3dtouch</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-3dtouch">3D Touch plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-3dtouch">
    https://github.com/EddyVerbruggen/cordova-plugin-3dtouch
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-3dtouch
$ npm install --save @ionic-native/three-dee-touch
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>Please do refer to the original plugin&#39;s repo for detailed usage. The usage example here might not be sufficient.</p>
<pre><code class="lang-typescript">import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from &#39;@ionic-native/three-dee-touch&#39;;

constructor(private threeDeeTouch: ThreeDeeTouch) { }

...

this.threeDeeTouch.isAvailable().then(isAvailable =&gt; console.log(&#39;3D Touch available? &#39; + isAvailable));

this.threeDeeTouch.watchForceTouches()
  .subscribe(
    (data: ThreeDeeTouchForceTouch) =&gt; {
      console.log(&#39;Force touch %&#39; + data.force);
      console.log(&#39;Force touch timestamp: &#39; + data.timestamp);
      console.log(&#39;Force touch x: &#39; + data.x);
      console.log(&#39;Force touch y: &#39; + data.y);
    }
  );


let actions: Array&lt;ThreeDeeTouchQuickAction&gt; = [
  {
    type: &#39;checkin&#39;,
    title: &#39;Check in&#39;,
    subtitle: &#39;Quickly check in&#39;,
    iconType: &#39;Compose&#39;
  },
  {
    type: &#39;share&#39;,
    title: &#39;Share&#39;,
    subtitle: &#39;Share like you care&#39;,
    iconType: &#39;Share&#39;
  },
  {
    type: &#39;search&#39;,
    title: &#39;Search&#39;,
    iconType: &#39;Search&#39;
  },
  {
    title: &#39;Show favorites&#39;,
    iconTemplate: &#39;HeartTemplate&#39;
  }
];

this.threeDeeTouch.configureQuickActions(actions);

this.threeDeeTouch.onHomeIconPressed().subscribe(
 (payload) =&gt; {
   // returns an object that is the button you presed
   console.log(&#39;Pressed the ${payload.title} button&#39;)
   console.log(payload.type)

 }
)
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> returns a promise that resolves with a boolean that indicates whether the plugin is available or not
</div><h3><a class="anchor" name="watchForceTouches" href="#watchForceTouches"></a><code>watchForceTouches()</code></h3>




You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;ThreeDeeTouchForceTouch&gt;</code> Returns an observable that sends a `ThreeDeeTouchForceTouch` object
</div><h3><a class="anchor" name="configureQuickActions" href="#configureQuickActions"></a><code>configureQuickActions(type,&nbsp;title,&nbsp;subtitle,&nbsp;iconType,&nbsp;iconTemplate)</code></h3>




setup the 3D-touch actions, takes an array of objects with the following
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(optional) A type that can be used <code>onHomeIconPressed</code> callback</p>
</td>
  </tr>
  
  <tr>
    <td>
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Title for your action</p>
</td>
  </tr>
  
  <tr>
    <td>
      subtitle</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(optional) A short description for your action</p>
</td>
  </tr>
  
  <tr>
    <td>
      iconType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update</p>
</td>
  </tr>
  
  <tr>
    <td>
      iconTemplate</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(optional) Can be used to provide your own icon</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="onHomeIconPressed" href="#onHomeIconPressed"></a><code>onHomeIconPressed()</code></h3>


When a home icon is pressed, your app launches and this JS callback is invoked.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> returns an observable that notifies you when he user presses on the home screen icon
</div><h3><a class="anchor" name="enableLinkPreview" href="#enableLinkPreview"></a><code>enableLinkPreview()</code></h3>




Enable Link Preview.
UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.



<h3><a class="anchor" name="disableLinkPreview" href="#disableLinkPreview"></a><code>disableLinkPreview()</code></h3>




Disabled the link preview feature, if enabled.









<h2><a class="anchor" name="ThreeDeeTouchQuickAction" href="#ThreeDeeTouchQuickAction"></a>ThreeDeeTouchQuickAction</h2>

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
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Type that can be used in the onHomeIconPressed callback</p>

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
      <p>Title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      subtitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Subtitle</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      iconType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Icon type. Case insensitive</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      iconTemplate
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Icon template</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="ThreeDeeTouchForceTouch" href="#ThreeDeeTouchForceTouch"></a>ThreeDeeTouchForceTouch</h2>

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
      force
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Touch force</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Timestamp of action</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>X coordinate of action</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Y coordinate of action</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





