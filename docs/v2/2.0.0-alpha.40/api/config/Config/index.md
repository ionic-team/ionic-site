---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.40"
versionHref: "/docs/v2/2.0.0-alpha.40"
path: ""
category: api
id: "config"
title: "Config"
header_sub_title: "Class in module "
doc: "Config"
docType: "class"

---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/config/config.ts#L9'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/config/config.ts#L9'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


Config






</h1>






<h2>Description</h2>

<p>Config lets you change multiple or a single value in an apps mode configuration. Things such as tab placement, icon changes, and view animations can be set here.</p>
<pre><code class="lang-ts">@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    backButtonText: &#39;Go Back&#39;,
    iconMode: &#39;ios&#39;,
    modalEnter: &#39;modal-slide-in&#39;,
    modalLeave: &#39;modal-slide-out&#39;,
    tabbarPlacement: &#39;bottom&#39;,
    pageTransition: &#39;ios&#39;,
  }
})
</code></pre>
<p>Config can be overwritting at multiple levels, allowing deeper configuration. Taking the example from earlier, we can override any setting we want based on a platform.</p>
<pre><code class="lang-ts">@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    tabbarPlacement: &#39;bottom&#39;,
    platforms: {
     ios: {
       tabbarPlacement: &#39;top&#39;,
     }
    }
  }
})
</code></pre>
<p>We could also configure these values at a component level. Take <code>tabbarPlacement</code>, we can configure this as a property on our <code>ion-tabs</code>.</p>
<pre><code class="lang-html">&lt;ion-tabs tabbar-placement=&quot;top&quot;&gt;
  &lt;ion-tab tab-title=&quot;Dash&quot; tab-icon=&quot;pulse&quot; [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>The property will override anything else set in the apps.</p>
<p>The last way we could configure is through URL query strings. This is useful for testing while in the browser.
Simply add <code>?ionic&lt;PROPERTYNAME&gt;=&lt;value&gt;</code> to the url.</p>
<pre><code class="lang-bash">http://localhost:8100/?ionicTabbarPlacement=bottom
</code></pre>
<p>A config value can come from anywhere and be anything, but there are a default set of values.</p>
<pre><code class="lang-javascript">// iOS
activator: &#39;highlight&#39;,
actionSheetEnter: &#39;action-sheet-slide-in&#39;,
actionSheetLeave: &#39;action-sheet-slide-out&#39;,
actionSheetCancelIcon: &#39;&#39;,
actionSheetDestructiveIcon: &#39;&#39;,
backButtonText: &#39;Back&#39;,
backButtonIcon: &#39;ion-ios-arrow-back&#39;,
iconMode: &#39;ios&#39;,
menuType: &#39;reveal&#39;,
modalEnter: &#39;modal-slide-in&#39;,
modalLeave: &#39;modal-slide-out&#39;,
pageTransition: &#39;ios-transition&#39;,
pageTransitionDelay: 16,
popupEnter: &#39;popup-pop-in&#39;,
popupLeave: &#39;popup-pop-out&#39;,
tabbarPlacement: &#39;bottom&#39;,

// MD
activator: &#39;ripple&#39;,
actionSheetEnter: &#39;action-sheet-md-slide-in&#39;,
actionSheetLeave: &#39;action-sheet-md-slide-out&#39;,
actionSheetCancelIcon: &#39;ion-md-close&#39;,
actionSheetDestructiveIcon: &#39;ion-md-trash&#39;,
backButtonText: &#39;&#39;,
backButtonIcon: &#39;ion-md-arrow-back&#39;,
iconMode: &#39;md&#39;,
menuType: &#39;overlay&#39;,
modalEnter: &#39;modal-md-slide-in&#39;,
modalLeave: &#39;modal-md-slide-out&#39;,
pageTransition: &#39;md-transition&#39;,
pageTransitionDelay: 120,
popupEnter: &#39;popup-md-pop-in&#39;,
popupLeave: &#39;popup-md-pop-out&#39;,
tabbarHighlight: true,
tabbarPlacement: &#39;top&#39;,
tabSubPages: true,
</code></pre>




<!-- end content block -->


<!-- end body block -->

