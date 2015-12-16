---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Config | slugify}}"
title: "Config"
header_sub_title: "Class in module "
doc: "Config"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/config/"
angular_controller: APIDemoCtrl 
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






<!-- description -->
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
<pre><code class="lang-html">&lt;ion-tabs tabbarPlacement=&quot;top&quot;&gt;
  &lt;ion-tab tabTitle=&quot;Dash&quot; tabIcon=&quot;pulse&quot; [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>The property will override anything else set in the apps.</p>
<p>The last way we could configure is through URL query strings. This is useful for testing while in the browser.
Simply add <code>?ionic&lt;PROPERTYNAME&gt;=&lt;value&gt;</code> to the url.</p>
<pre><code class="lang-bash">http://localhost:8100/?ionicTabbarPlacement=bottom
</code></pre>
<p>A config value can come from anywhere and be anything, but there are a default set of values.</p>
<table>
<thead>
<tr>
<th>Config property</th>
<th>Default iOS Value</th>
<th>Default MD Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>activator</td>
<td>highlight</td>
<td>ripple</td>
</tr>
<tr>
<td>actionSheetEnter</td>
<td>action-sheet-slide-in</td>
<td>action-sheet-md-slide-in</td>
</tr>
<tr>
<td>actionSheetLeave</td>
<td>action-sheet-slide-out</td>
<td>action-sheet-md-slide-out</td>
</tr>
<tr>
<td>actionSheetCancelIcon</td>
<td></td>
<td>ion-md-close</td>
</tr>
<tr>
<td>actionSheetDestructiveIcon</td>
<td></td>
<td>ion-md-trash</td>
</tr>
<tr>
<td>backButtonText</td>
<td>Back</td>
<td></td>
</tr>
<tr>
<td>backButtonIcon</td>
<td>ion-ios-arrow-back</td>
<td>ion-md-arrow-back</td>
</tr>
<tr>
<td>iconMode</td>
<td>ios</td>
<td>md</td>
</tr>
<tr>
<td>menuType</td>
<td>reveal</td>
<td>overlay</td>
</tr>
<tr>
<td>modalEnter</td>
<td>modal-slide-in</td>
<td>modal-md-slide-in</td>
</tr>
<tr>
<td>modalLeave</td>
<td>modal-slide-out</td>
<td>modal-md-slide-out</td>
</tr>
<tr>
<td>pageTransition</td>
<td>ios-transition</td>
<td>md-transition</td>
</tr>
<tr>
<td>pageTransitionDelay</td>
<td>16</td>
<td>120</td>
</tr>
<tr>
<td>popupEnter</td>
<td>popup-pop-in</td>
<td>popup-md-pop-in</td>
</tr>
<tr>
<td>popupLeave</td>
<td>popup-pop-out</td>
<td>popup-md-pop-out</td>
</tr>
<tr>
<td>tabbarPlacement</td>
<td>bottom</td>
<td>true</td>
</tr>
<tr>
<td>tabbarHighlight</td>
<td></td>
<td>top</td>
</tr>
<tr>
<td>tabSubPage</td>
<td></td>
<td>true</td>
</tr>
</tbody>
</table>

<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

