---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{App | slugify}}"
title: "App"
header_sub_title: "Function in module "
doc: "App"
docType: "function"

---









<h1 class="api-title">


App






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/decorators/app.ts#L6'>
Improve this doc
</a>






<!-- description -->

<p>App is an Ionic decorator that bootstraps an application. It can be passed a number of arguments, that act as global config variables for the app.
App can accept a <code>template</code> property that has an inline template or a <code>templateUrl</code> property that points to an external html template.</p>

<!-- @usage tag -->

<h3 style="margin-bottom: 7px">Usage</h3>


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

