---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.7"
versionHref: "/docs/v2/2.0.0-beta.7"
path: ""
category: api
id: "page"
title: "Page"
header_sub_title: "Ionic API Documentation"
doc: "Page"
docType: "function"

---









<h1 class="api-title">
<a class="anchor" name="page" href="#page"></a>

Page






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/decorators/page.ts#L27">
Improve this doc
</a>






<p>The Page decorator indicates that the decorated class is an Ionic
navigation component, meaning it can be navigated to using a
<a href="../../nav/NavController">NavController</a>.</p>
<p>Since the app has already been bootstrapped with Ionic&#39;s core directives, it
is not needed to include <code>IONIC_DIRECTIVES</code> in the directives property. Additionally,
Angular&#39;s <a href="https://angular.io/docs/ts/latest/api/common/CORE_DIRECTIVES-let.html">CORE_DIRECTIVES</a>
and <a href="https://angular.io/docs/ts/latest/api/common/FORM_DIRECTIVES-let.html">FORM_DIRECTIVES</a>,
are also already provided, so you only need to supply any custom components and directives
to your pages:</p>

<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">@Page({
  template: `
   &lt;ion-content&gt;
     I am a page!
   &lt;/ion-content&gt;
  `
})
class MyPage {}
</code></pre>
<p>Pages have their content automatically wrapped in <code>&lt;ion-page&gt;</code>, so although
you may see these tags if you inspect your markup, you don&#39;t need to include
them in your templates.</p>
<p>For more information on how pages are created, see the <a href="../../components/nav/NavController/#creating_pages">NavController API Docs</a></p>




<!-- @property tags -->



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

