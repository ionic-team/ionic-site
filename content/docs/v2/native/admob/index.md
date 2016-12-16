---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/admob.ts#L78">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-admobpro</code></pre>
<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-admob-pro">
    https://github.com/floatinghotpot/cordova-admob-pro
  </a>
</p>

<!-- description -->

<p>Plugin for Google Ads, including AdMob / DFP (doubleclick for publisher) and mediations to other Ad networks.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { AdMob } from &#39;ionic-native&#39;;

ionViewDidLoad() {
  AdMob.onAdDismiss()
    .subscribe(() =&gt; { console.log(&#39;User dismissed ad&#39;); });
}

onClick() {
  AdMob.prepareInterstitial(&#39;YOUR_ADID&#39;)
    .then(() =&gt; { AdMob.showInterstitial(); });
}
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="createBanner"></div>
<h3><code>createBanner(adIdOrOptions)</code>
  
</h3>


Create a banner


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
      
<code>string</code>|<code>AdMobOptions</code>
    </td>
    <td>
      <p>Ad ID or Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the banner is created
</div>



<div id="removeBanner"></div>
<h3><code>removeBanner()</code>
  
</h3>




Destroy the banner, remove it from screen.










<div id="showBanner"></div>
<h3><code>showBanner(position)</code>
  
</h3>




Show banner at position


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
      
<code>number</code>
    </td>
    <td>
      <p>Position. Use <code>AdMob.AD_POSITION</code> to set values.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="showBannerAtXY"></div>
<h3><code>showBannerAtXY(x,&nbsp;y)</code>
  
</h3>




Show banner at custom position


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
      
<code>number</code>
    </td>
    <td>
      <p>Offset from screen left.</p>

      
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
      <p>Offset from screen top.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="hideBanner"></div>
<h3><code>hideBanner()</code>
  
</h3>




Hide the banner, remove it from screen, but can show it later










<div id="prepareInterstitial"></div>
<h3><code>prepareInterstitial(adIdOrOptions)</code>
  
</h3>


Prepare interstitial banner


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
      
<code>string</code>|<code>AdMobOptions</code>
    </td>
    <td>
      <p>Ad ID or Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when interstitial is prepared
</div>



<div id="showInterstitial"></div>
<h3><code>showInterstitial()</code>
  
</h3>




Show interstitial ad when it's ready










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
      
<code>string</code>|<code>AdMobOptions</code>
    </td>
    <td>
      <p>Ad ID or Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the ad is prepared
</div>



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
      
<code>AdMobOptions</code>
    </td>
    <td>
      <p>Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the options have been set
</div>



<div id="getAdSettings"></div>
<h3><code>getAdSettings()</code>
  
</h3>


Get user ad settings






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves with the ad settings
</div>



<div id="onAdFailLoad"></div>
<h3><code>onAdFailLoad()</code>
  
</h3>




Triggered when failed to receive Ad






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onAdLoaded"></div>
<h3><code>onAdLoaded()</code>
  
</h3>




Triggered when Ad received






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onAdPresent"></div>
<h3><code>onAdPresent()</code>
  
</h3>




Triggered when Ad will be showed on screen






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onAdLeaveApp"></div>
<h3><code>onAdLeaveApp()</code>
  
</h3>




Triggered when user click the Ad, and will jump out of your App






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onAdDismiss"></div>
<h3><code>onAdDismiss()</code>
  
</h3>




Triggered when dismiss the Ad and back to your App






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="AdMobOptions" href="#AdMobOptions"></a>AdMobOptions</h2>


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
      adSize
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>AdMobAdSize</code>
    </td>
    <td>
      <p>Banner Ad Size, defaults to <code>SMART_BANNER</code>. IT can be: <code>SMART_BANNER</code>, <code>BANNER</code>, <code>MEDIUM_RECTANGLE</code>, <code>FULL_BANNER</code>, <code>LEADERBOARD</code>, <code>SKYSCRAPER</code>, or <code>CUSTOM</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      width
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Banner width, valid when <code>adSize</code> is set to <code>CUSTOM</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      height
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Banner height, valid when <code>adSize</code> is set to <code>CUSTOM</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      overlap
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Allow banner to overlap webview, or else it will push webview up or down to avoid overlap. Defaults to false.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      position
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Position of banner ad. Defaults to <code>TOP_CENTER</code>. You can use the <code>AdMob.AD_POSITION</code> property to select other values.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      x
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>X in pixels. Valid when <code>position</code> is set to <code>POS_XY</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      y
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Y in pixels. Valid when <code>position</code> is set to <code>POS_XY</code></p>

    </td>
  </tr>
  
  <tr>
    <td>
      isTesting
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to receive test ad for testing purposes</p>

    </td>
  </tr>
  
  <tr>
    <td>
      autoShow
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Auto show interstitial ad when loaded. Set to false if hope to control the show timing with prepareInterstitial/showInterstitial</p>

    </td>
  </tr>
  
  <tr>
    <td>
      orientationRenew
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Re-create the banner on web view orientation change (not screen orientation), or else just move the banner. Default:true.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      adExtras
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>AdMobAdExtras</code>
    </td>
    <td>
      <p>Set extra color style for Ad</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="AdMobAdExtras" href="#AdMobAdExtras"></a>AdMobAdExtras</h2>


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
      color_bg
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color_bg_top
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color_border
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color_link
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color_text
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color_url
      
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

