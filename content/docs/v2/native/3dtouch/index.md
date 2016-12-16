---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "3dtouch"
title: "3DTouch"
header_sub_title: "Class in module "
doc: "3DTouch"
docType: "class"
---







<h1 class="api-title">
  
  3DTouch
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/3dtouch.ts#L56">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-3dtouch</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-3dtouch">
    https://github.com/EddyVerbruggen/cordova-plugin-3dtouch
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<p>Please do refer to the original plugin&#39;s repo for detailed usage. The usage example here might not be sufficient.</p>
<pre><code>import { ThreeDeeTouch } from &#39;ionic-native&#39;;

// import for type completion on variables
import { ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from &#39;ionic-native&#39;;
...

ThreeDeeTouch.isAvailable().then(isAvailable =&gt; console.log(&quot;3D Touch available? &quot; + isAvailable));

ThreeDeeTouch.watchForceTouches()
  .subscribe(
    (data: ThreeDeeTouchForceTouch) =&gt; {
      console.log(&quot;Force touch %&quot; + data.force);
      console.log(&quot;Force touch timestamp: &quot; + data.timestamp);
      console.log(&quot;Force touch x: &quot; + data.x);
      console.log(&quot;Force touch y: &quot; + data.y);
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
ThreeDeeTouch.configureQuickActions(actions);

ThreeDeeTouch.onHomeIconPressed().subscribe(
 (payload) =&gt; {
   // returns an object that is the button you presed
   console.log(&#39;Pressed the ${payload.title} button&#39;)
   console.log(payload.type)

 }
)
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> returns a promise that resolves with a boolean that indicates whether the plugin is available or not
</div>



<div id="watchForceTouches"></div>
<h3><code>watchForceTouches()</code>
  
</h3>




You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;ThreeDeeTouchForceTouch&gt;</code> Returns an observable that sends a `ThreeDeeTouchForceTouch` object
</div>



<div id="configureQuickActions"></div>
<h3><code>configureQuickActions(type,&nbsp;title,&nbsp;subtitle,&nbsp;iconType,&nbsp;iconTemplate)</code>
  
</h3>




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
      type
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>(optional) A type that can be used <code>onHomeIconPressed</code> callback</p>

      
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
      <p>Title for your action</p>

      
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
      <p>(optional) A short description for your action</p>

      
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
      <p>(optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update</p>

      
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
      <p>(optional) Can be used to provide your own icon</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="onHomeIconPressed"></div>
<h3><code>onHomeIconPressed()</code>
  
</h3>

When a home icon is pressed, your app launches and this JS callback is invoked.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable that notifies you when he user presses on the home screen icon
</div>



<div id="enableLinkPreview"></div>
<h3><code>enableLinkPreview()</code>
  
</h3>




Enable Link Preview.
UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.










<div id="disableLinkPreview"></div>
<h3><code>disableLinkPreview()</code>
  
</h3>




Disabled the link preview feature, if enabled.











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Type that can be used in the onHomeIconPressed callback</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Subtitle</p>

    </td>
  </tr>
  
  <tr>
    <td>
      iconType
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Icon type. Case insensitive</p>

    </td>
  </tr>
  
  <tr>
    <td>
      iconTemplate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Icon template</p>

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





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

