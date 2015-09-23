---
layout: "v2/docs_base"
version: "2.0.0"
versionHref: "/docs/v2"
path: ""
id: api
title: "AppLinks"
header_sub_title: "Class in module "
doc: "AppLinks"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/plugins/applinks/applinks.ts#L3'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/plugins/applinks/applinks.ts#L3'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  AppLinks



</h1>





<p>Open installed apps on the device. Note: Android and iOS have different ways of
opening and specifying launch params, so they have separate launch functions.</p>
<p>Example:</p>
<p>if(platform.is(&#39;ios&#39;) {
  AppLinks.check(&#39;twitter://&#39;).then((installed) =&gt; {
    AppLinks.openIOS(&#39;twitter://user?screen_name=ionicframework&#39;)
  }, (err) =&gt; {</p>
<p>  })
} else if(platform.is(&#39;android&#39;) {
  AppLinks.check(&#39;com.twitter.android&#39;).then((installed) =&gt; {
    AppLinks.openAndroid([[&quot;action&quot;, &quot;VIEW&quot;], [&#39;twitter://user?screen_name=ionicframework&#39;]])
  })
}</p>


<h1 class="class export">AppLinks <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/plugins/applinks/applinks.ts#L4-L71">ionic/plugins/applinks/applinks.ts (line 4)</a>
</p>
## Members

