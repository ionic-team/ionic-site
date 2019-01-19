---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "admob"
title: "AdMob"
header_sub_title: "Class in module "
doc: "AdMob"
docType: "class"
---

<h1 class="api-title">AdMob</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/admob-plus/index.ts#L66">
  Improve this doc
</a>









<p>Repo:
  <a href="https://github.com/admob-plus/admob-plus">
    https://github.com/admob-plus/admob-plus
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-admob-plus
$ npm install --save @ionic-native/admob-plus
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>












<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="banner" href="#banner"></a><code>banner</code></h3>




<h3><a class="anchor" name="interstitial" href="#interstitial"></a><code>interstitial</code></h3>




<h3><a class="anchor" name="rewardVideo" href="#rewardVideo"></a><code>rewardVideo</code></h3>




<h3><a class="anchor" name="setAppMuted" href="#setAppMuted"></a><code>setAppMuted()</code></h3>







<h3><a class="anchor" name="setAppVolume" href="#setAppVolume"></a><code>setAppVolume()</code></h3>







<h3><a class="anchor" name="on" href="#on"></a><code>on()</code></h3>











    // Admob options config
    const admobOptions: AdmobOptions = {
      publisherId: &#39;XXX-XXXX-XXXX&#39;,
      interstitialAdId: &#39;XXX-XXXX-XXXX&#39;,
      rewardedAdId: &#39;XXX-XXXX-XXXX&#39;,
      isTesting: true,
      autoShowBanner: false,
      autoShowInterstitial: false,
      autoShowRewarded: false,
      adSize: this.admob.AD_SIZE.BANNER
    };

    // Set admob options
    this.admob.setOptions(admobOptions)
      .then(() =&gt; console.log(&#39;Admob options have been successfully set&#39;))
      .catch(err =&gt; console.error(&#39;Error setting admob options:&#39;, err));
}



// (Optionally) Load banner ad, in order to have it ready to show
this.admob.createBannerView()
  .then(() =&gt; console.log(&#39;Banner ad loaded&#39;))
  .catch(err =&gt; console.error(&#39;Error loading banner ad:&#39;, err));


// Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
this.admob.onAdLoaded().subscribe((ad) =&gt; {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    this.admob.showBannerAd()
      .then(() =&gt; console.log(&#39;Banner ad shown&#39;))
      .catch(err =&gt; console.error(&#39;Error showing banner ad:&#39;, err));
  }
});


// Hide banner ad, but do not destroy it, so it can be shown later on
// See destroyBannerView in order to hide and destroy banner ad
this.admob.showBannerAd(false)
  .then(() =&gt; console.log(&#39;Banner ad hidden&#39;))
  .catch(err =&gt; console.error(&#39;Error hiding banner ad:&#39;, err));



// Request an interstitial ad, in order to be shown later on
// It is possible to autoshow it via options parameter, see docs
this.admob.requestInterstitialAd()
  .then(() =&gt; console.log(&#39;Interstitial ad loaded&#39;))
  .catch(err =&gt; console.error(&#39;Error loading interstitial ad:&#39;, err));


// Show an interstitial ad (requestInterstitialAd must be called before)
this.admob.onAdLoaded().subscribe((ad) =&gt; {
  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    this.admob.showInterstitialAd()
      .then(() =&gt; console.log(&#39;Interstitial ad shown&#39;))
      .catch(err =&gt; console.error(&#39;Error showing interstitial ad:&#39;, err));
  }
});


// Request a rewarded ad
this.admob.requestRewardedAd()
  .then(() =&gt; console.log(&#39;Rewarded ad loaded&#39;))
  .catch(err =&gt; console.error(&#39;Error loading rewarded ad:&#39;, err));


// Show rewarded ad (requestRewardedAd must be called before)
this.admob.onAdLoaded().subscribe((ad) =&gt; {
  if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    this.admob.showRewardedAd()
      .then(() =&gt; console.log(&#39;Rewarded ad shown&#39;))
      .catch(err =&gt; console.error(&#39;Error showing rewarded ad:&#39;, err));
  }
});


// Hide and destroy banner or interstitial ad
this.admob.destroyBannerView()
  .then(() =&gt; console.log(&#39;Banner or interstitial ad destroyed&#39;))
  .catch(err =&gt; console.error(&#39;Error destroying banner or interstitial ad:&#39;, err));



// On Ad loaded event
this.admob.onAdLoaded().subscribe((ad) =&gt; {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    console.log(&#39;Banner ad is loaded&#39;);
    this.admob.showBannerAd();
  } else if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    console.log(&#39;Interstitial ad is loaded&#39;);
    this.admob.showInterstitialAd();
  } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    console.log(&#39;Rewarded ad is loaded&#39;);
    this.admob.showRewardedAd();
  }
});



// On ad failed to load
this.admob.onAdFailedToLoad().subscribe(err =&gt; console.log(&#39;Error loading ad:&#39;, err));



// On interstitial ad opened
this.admob.onAdOpened().subscribe(() =&gt; console.log(&#39;Interstitial ad opened&#39;));



// On interstitial ad closed
this.admob.onAdClosed().subscribe(() =&gt; console.log(&#39;Interstitial ad closed&#39;));



// On ad clicked and left application
this.admob.onAdLeftApplication().subscribe(() =&gt; console.log(&#39;Ad lefted application&#39;));



// On user ad rewarded
this.admob.onRewardedAd().subscribe(() =&gt; console.log(&#39;The user has been rewarded&#39;));



// On rewarded ad video started
this.admob.onRewardedAdVideoStarted().subscribe(() =&gt; console.log(&#39;Rewarded ad vieo started&#39;));



// On rewarded ad video completed
this.admob.onRewardedAdVideoCompleted().subscribe(() =&gt; console.log(&#39;Rewarded ad video completed&#39;));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="readonly" href="#readonly"></a><code>readonly</code></h3>


This enum represents AdMob's supported ad sizes.
Use one of these constants as adSize option when calling createBannerView








