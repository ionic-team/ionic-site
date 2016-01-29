---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.43"
versionHref: "/docs/v2/2.0.0-alpha.43"
path: ""
category: api
id: "app"
title: "App"
header_sub_title: "Function in module "
doc: "App"
docType: "function"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/config/decorators/app.ts#L4'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/config/decorators/app.ts#L4'>
Improve this doc
</a>
</div>





<h1 class="api-title">


App






</h1>






<!-- description -->
<h2>Description</h2>

<p>App is an Ionic decorator that bootstraps an application. It can be passed a number of arguments, that act as global config variables for the app.
App can accept a <code>template</code> property that has an inline template or a <code>templateUrl</code> property that points to an external html template.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {App} from &#39;ionic/ionic&#39;;

@App({
  templateUrl: &#39;app/app.html&#39;
})

export class MyApp{
  // Anything we would want to do at the root of our app
}
</code></pre>




<!-- @property tags -->


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

