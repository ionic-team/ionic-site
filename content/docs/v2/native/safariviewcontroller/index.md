---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "safariviewcontroller"
title: "SafariViewController"
header_sub_title: "Class in module "
doc: "SafariViewController"
docType: "class"
---







<h1 class="api-title">
  
  SafariViewController
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/safari-view-controller.ts#L11">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-safariviewcontroller</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller">
    https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { SafariViewController } from &#39;ionic-native&#39;;


SafariViewController.isAvailable()
  .then(
    (available: boolean) =&gt; {
      if(available){

        SafariViewController.show({
          url: &#39;http://ionic.io&#39;,
          hidden: false,
          animated: false,
          transition: &#39;curl&#39;,
          enterReaderModeIfAvailable: true,
          tintColor: &#39;#ff0000&#39;
        })
        .then(
          (result: any) =&gt; {
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




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Checks if SafariViewController is available






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="show"></div>
<h3><code>show(options)</code>
  
</h3>


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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>


Hides Safari View Controller










<div id="connectToService"></div>
<h3><code>connectToService()</code>
  
</h3>


Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="warmUp"></div>
<h3><code>warmUp()</code>
  
</h3>


Call this method whenever there's a chance the user will open an external url.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="mayLaunchUrl"></div>
<h3><code>mayLaunchUrl(url)</code>
  
</h3>


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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      hidden
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      toolbarColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      animated
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      showDefaultShareMenuItem
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      enterReaderModeIfAvailable
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      tintColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      transition
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

