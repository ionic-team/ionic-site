---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "admob-pro"
title: "AdMob Pro"
header_sub_title: "Class in module "
doc: "AdMob Pro"
docType: "class"
---

<h1 class="api-title">AdMob Pro<span class="paid" title="paid">Paid</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/admob-pro/index.ts#L97">
  Improve this doc
</a>





<p class="paid-notice">
  This plugin might require a paid license, or might take a share of your app's earnings.
  Check the <a target="_blank" rel="nofollow" href="https://github.com/floatinghotpot/cordova-admob-pro">plugin's repo</a> for more information.
</p>



<p>Plugin for Google Ads, including AdMob / DFP (DoubleClick for publisher) and mediations to other Ad networks.</p>
<p>IMPORTANT NOTICE: this plugin takes a percentage out of your earnings if you profit more than $1,000. Read more about this on the plugin&#39;s repo. For a completely free alternative, see <a href="../admob-free">AdMobPro Free</a>.</p>


<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-admob-pro">
    https://github.com/floatinghotpot/cordova-admob-pro
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-admobpro
$ npm install --save @ionic-native/admob-pro
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AdMobPro } from &#39;@ionic-native/admob-pro&#39;;
import { Platform } from &#39;ionic-angular&#39;;

constructor(private admob: AdMobPro, private platform: Platform ) { }

ionViewDidLoad() {
  this.admob.onAdDismiss()
    .subscribe(() =&gt; { console.log(&#39;User dismissed ad&#39;); });
}

onClick() {
  let adId;
  if(this.platform.is(&#39;android&#39;)) {
    adId = &#39;YOUR_ADID_ANDROID&#39;;
  } else if (this.platform.is(&#39;ios&#39;)) {
    adId = &#39;YOUR_ADID_IOS&#39;;
  }
  this.admob.prepareInterstitial({adId: adId})
    .then(() =&gt; { this.admob.showInterstitial(); });
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="AD_POSITION" href="#AD_POSITION"></a><code>AD_POSITION</code></h3>




<h3><a class="anchor" name="createBanner" href="#createBanner"></a><code>createBanner(adIdOrOptions)</code></h3>


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
      adIdOrOptions</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the banner is created
</div><h3><a class="anchor" name="removeBanner" href="#removeBanner"></a><code>removeBanner()</code></h3>




Destroy the banner, remove it from screen.



<h3><a class="anchor" name="showBanner" href="#showBanner"></a><code>showBanner(position)</code></h3>




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
      position</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Position. Use <code>AdMobPro.AD_POSITION</code> to set values.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="showBannerAtXY" href="#showBannerAtXY"></a><code>showBannerAtXY(x,&nbsp;y)</code></h3>




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
      x</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Offset from screen left.</p>
</td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Offset from screen top.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="hideBanner" href="#hideBanner"></a><code>hideBanner()</code></h3>




Hide the banner, remove it from screen, but can show it later



<h3><a class="anchor" name="prepareInterstitial" href="#prepareInterstitial"></a><code>prepareInterstitial(adIdOrOptions)</code></h3>


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
      adIdOrOptions</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when interstitial is prepared
</div><h3><a class="anchor" name="showInterstitial" href="#showInterstitial"></a><code>showInterstitial()</code></h3>




Show interstitial ad when it's ready



<h3><a class="anchor" name="prepareRewardVideoAd" href="#prepareRewardVideoAd"></a><code>prepareRewardVideoAd(adIdOrOptions)</code></h3>


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
      adIdOrOptions</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the ad is prepared
</div><h3><a class="anchor" name="showRewardVideoAd" href="#showRewardVideoAd"></a><code>showRewardVideoAd()</code></h3>




Show a reward video ad



<h3><a class="anchor" name="setOptions" href="#setOptions"></a><code>setOptions(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the options have been set
</div><h3><a class="anchor" name="getAdSettings" href="#getAdSettings"></a><code>getAdSettings()</code></h3>


Get user ad settings


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with the ad settings
</div><h3><a class="anchor" name="onAdFailLoad" href="#onAdFailLoad"></a><code>onAdFailLoad()</code></h3>




Triggered when failed to receive Ad


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onAdLoaded" href="#onAdLoaded"></a><code>onAdLoaded()</code></h3>




Triggered when Ad received


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onAdPresent" href="#onAdPresent"></a><code>onAdPresent()</code></h3>




Triggered when Ad will be showed on screen


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onAdLeaveApp" href="#onAdLeaveApp"></a><code>onAdLeaveApp()</code></h3>




Triggered when user click the Ad, and will jump out of your App


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onAdDismiss" href="#onAdDismiss"></a><code>onAdDismiss()</code></h3>




Triggered when dismiss the Ad and back to your App


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div>





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
      adId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Banner ad ID</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      adSize
    </td>
    <td>
      <code>AdSize</code>
    </td>
    <td>
      <p>Banner Ad Size, defaults to <code>SMART_BANNER</code>. IT can be: <code>SMART_BANNER</code>, <code>BANNER</code>, <code>MEDIUM_RECTANGLE</code>, <code>FULL_BANNER</code>, <code>LEADERBOARD</code>, <code>SKYSCRAPER</code>, or <code>CUSTOM</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Banner width, valid when <code>adSize</code> is set to <code>CUSTOM</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Banner height, valid when <code>adSize</code> is set to <code>CUSTOM</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      overlap
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Allow banner to overlap webview, or else it will push webview up or down to avoid overlap. Defaults to false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      position
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Position of banner ad. Defaults to <code>TOP_CENTER</code>. You can use the <code>AdMobPro.AD_POSITION</code> property to select other values.</p>

      <em>(optional)</em>
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
      <p>X in pixels. Valid when <code>position</code> is set to <code>POS_XY</code></p>

      <em>(optional)</em>
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
      <p>Y in pixels. Valid when <code>position</code> is set to <code>POS_XY</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isTesting
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to receive test ad for testing purposes</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoShow
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Auto show interstitial ad when loaded. Set to false if hope to control the show timing with prepareInterstitial/showInterstitial</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      orientationRenew
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Re-create the banner on web view orientation change (not screen orientation), or else just move the banner. Default:true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      adExtras
    </td>
    <td>
      <code>AdExtras</code>
    </td>
    <td>
      <p>Set extra color style for Ad</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      license
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>License key for the plugin</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      offsetTopBar
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set offset</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdExtras" href="#AdExtras"></a>AdExtras</h2>

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





