---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Config | slugify}}"
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





<p>Config lets you change multiple or a single value in an apps mode configuration. Things such as tab placement, icon changes, and view animations can be set here.</p>
<pre><code class="lang-ts">import {Config} from &#39;ionic/ionic&#39;;
@App({
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
<pre><code class="lang-ts">import {Config} from &#39;ionic/ionic&#39;;
@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    tabbarPlacement: &#39;bottom&#39;,
    platform: {
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
<pre><code>http://localhost:8100/?ionicTabbarPlacement=bottom
</code></pre>


<h1 class="class export">Config <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/config/config.ts#L10-L259">ionic/config/config.ts (line 10)</a>
</p>

