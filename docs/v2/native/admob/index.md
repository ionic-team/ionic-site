---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "admob"
title: "AdMob"
header_sub_title: "Class in module "
doc: "AdMob"
docType: "class"
---








<h1 class="api-title">

  
  AdMob
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/admob.ts#L1'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-admobpro</code></pre>
<p>Repo:
  <a href="https://github.com/floatinghotspot/cordova-admob-pro">
    https://github.com/floatinghotspot/cordova-admob-pro
  </a>
</p>

<!-- description -->




<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="createBanner"></div>
<h3><code>createBanner(adIdOrOptions)</code>

</h3>




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
      adIdOrOptions
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="removeBanner"></div>
<h3><code>removeBanner()</code>

</h3>














<div id="showBanner"></div>
<h3><code>showBanner(position)</code>

</h3>






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
      position
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="showBannerAtXY"></div>
<h3><code>showBannerAtXY(x,&nbsp;y)</code>

</h3>






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
      x
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      y
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="hideBanner"></div>
<h3><code>hideBanner()</code>

</h3>














<div id="prepareInterstitial"></div>
<h3><code>prepareInterstitial(adIdOrOptions)</code>

</h3>




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
      adIdOrOptions
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="showInterstitial"></div>
<h3><code>showInterstitial()</code>

</h3>



Show interstitial










<div id="isInterstitialReady"></div>
<h3><code>isInterstitialReady()</code>

</h3>












<div id="prepareRewardVideoAd"></div>
<h3><code>prepareRewardVideoAd(adIdOrOptions)</code>

</h3>

Prepare a reward video ad


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
      adIdOrOptions
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="showRewardVideoAd"></div>
<h3><code>showRewardVideoAd()</code>

</h3>



Show a reward video ad










<div id="setOptions"></div>
<h3><code>setOptions(options)</code>

</h3>

Sets the values for configuration and targeting


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
      

    </td>
    <td>
      <p>Returns a promise that resolves if the options are set successfully</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getAdSettings"></div>
<h3><code>getAdSettings()</code>

</h3>

Get user ad settings






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves with the ad settings
</div>



<div id="onBannerFailedToReceive"></div>
<h3><code>onBannerFailedToReceive()</code>

</h3>













<div id="onBannerReceive"></div>
<h3><code>onBannerReceive()</code>

</h3>













<div id="onBannerPresent"></div>
<h3><code>onBannerPresent()</code>

</h3>













<div id="onBannerLeaveApp"></div>
<h3><code>onBannerLeaveApp()</code>

</h3>













<div id="onBannerDismiss"></div>
<h3><code>onBannerDismiss()</code>

</h3>













<div id="onInterstitialFailedToReceive"></div>
<h3><code>onInterstitialFailedToReceive()</code>

</h3>













<div id="onInterstitialReceive"></div>
<h3><code>onInterstitialReceive()</code>

</h3>













<div id="onInterstitialPresent"></div>
<h3><code>onInterstitialPresent()</code>

</h3>













<div id="onInterstitialLeaveApp"></div>
<h3><code>onInterstitialLeaveApp()</code>

</h3>













<div id="onInterstitialDismiss"></div>
<h3><code>onInterstitialDismiss()</code>

</h3>














<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

