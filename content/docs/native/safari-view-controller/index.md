---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "safari-view-controller"
title: "Safari View Controller"
header_sub_title: "Class in module "
doc: "Safari View Controller"
docType: "class"
---

<h1 class="api-title">Safari View Controller</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/safari-view-controller/index.ts#L15">
  Improve this doc
</a>







<p>For displaying read-only web content.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-safariviewcontroller</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller">Safari View Controller plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller">
    https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-safariviewcontroller
$ npm install --save @ionic-native/safari-view-controller
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SafariViewController } from &#39;@ionic-native/safari-view-controller&#39;;

constructor(private safariViewController: SafariViewController) { }

...

this.safariViewController.isAvailable()
  .then((available: boolean) =&gt; {
      if (available) {

        this.safariViewController.show({
          url: &#39;http://ionic.io&#39;,
          hidden: false,
          animated: false,
          transition: &#39;curl&#39;,
          enterReaderModeIfAvailable: true,
          tintColor: &#39;#ff0000&#39;
        })
        .subscribe((result: any) =&gt; {
            if(result.event === &#39;opened&#39;) console.log(&#39;Opened&#39;);
            else if(result.event === &#39;loaded&#39;) console.log(&#39;Loaded&#39;);
            else if(result.event === &#39;closed&#39;) console.log(&#39;Closed&#39;);
          },
          (error: any) =&gt; console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Checks if SafariViewController is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show(options)</code></h3>




Shows Safari View Controller
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
      <code>SafariViewControllerOptions</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>


Hides Safari View Controller



<h3><a class="anchor" name="connectToService" href="#connectToService"></a><code>connectToService()</code></h3>


Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="warmUp" href="#warmUp"></a><code>warmUp()</code></h3>


Call this method whenever there's a chance the user will open an external url.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="mayLaunchUrl" href="#mayLaunchUrl"></a><code>mayLaunchUrl(url)</code></h3>


For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="SafariViewControllerOptions" href="#SafariViewControllerOptions"></a>SafariViewControllerOptions</h2>

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
      animated
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      barColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      controlTintColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enterReaderModeIfAvailable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hidden
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      showDefaultShareMenuItem
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      tintColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      toolbarColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      transition
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





