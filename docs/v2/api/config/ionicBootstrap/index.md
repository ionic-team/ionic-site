---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.11"
versionHref: "/docs/v2/2.0.0-beta-11"
path: ""
category: api
id: "ionicbootstrap"
title: "ionicBootstrap"
header_sub_title: "Ionic API Documentation"
doc: "ionicBootstrap"
docType: "function"

---









<h1 class="api-title">
<a class="anchor" name="ionic-bootstrap" href="#ionic-bootstrap"></a>

ionicBootstrap





</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/config/bootstrap.ts#L8">
Improve this doc
</a>






<p><code>ionicBootstrap</code> allows you to bootstrap your entire application. Similar to Angular&#39;s <code>bootstrap</code>, <code>ionicBootstrap</code>
takes a root component in order to start the app. You can pass along any providers that you may want to inject into your
app as an array for the second argument. You can also pass a config object as the third argument to configure your app&#39;s settings.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { ionicBootstrap } from &#39;ionic-angular&#39;;
import { Component } from &#39;@angular/core&#39;;

@Component({
  templateUrl: &#39;build/app.html&#39;,
})
export class MyClass{}

ionicBootstrap(MyClass, null, {tabsPlacement: &#39;bottom&#39;})
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

