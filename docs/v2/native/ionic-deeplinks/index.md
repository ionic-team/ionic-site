---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ionic-deeplinks"
title: "Ionic Deeplinks"
header_sub_title: "Class in module "
doc: "Ionic Deeplinks"
docType: "class"
---







<h1 class="api-title">
  
  Ionic Deeplinks
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/deeplinks.ts#L21">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/</code></pre>
<p>Repo:
  <a href="https://github.com/driftyco/ionic-plugin-deeplinks">
    https://github.com/driftyco/ionic-plugin-deeplinks
  </a>
</p>

<!-- description -->

<p>This plugin handles deeplinks on iOS and Android for both custom URL scheme links
and Universal App Links.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Deeplinks } from &#39;ionic-native&#39;;

Deeplinks.route({
      &#39;/about-us&#39;: AboutPage,
      &#39;/universal-links-test&#39;: AboutPage,
      &#39;/products/:productId&#39;: ProductPage
    }).subscribe((match) =&gt; {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log(&#39;Successfully matched route&#39;, match);
    }, (nomatch) =&gt; {
      // nomatch.$link - the full link data
      console.error(&#39;Got a deeplink that didn\&#39;t match&#39;, nomatch);
    });
</code></pre>
<p>Alternatively, if you&#39;re using Ionic 2, there&#39;s a convenience method that takes a reference to a <code>NavController</code> and handles
the actual navigation for you:</p>
<pre><code class="lang-typescript">Deeplinks.routeWithNavController(this.navController, {
  &#39;/about-us&#39;: AboutPage,
  &#39;/products/:productId&#39;: ProductPage
});
</code></pre>
<p>See the <a href="https://github.com/driftyco/ionic2-deeplinks-demo/blob/master/app/app.ts">Ionic 2 Deeplinks Demo</a> for an example of how to
retrieve the <code>NavController</code> reference at runtime.</p>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="route"></div>
<h3><code>route(Define)</code>
  
</h3>




Define a set of paths to match against incoming deeplinks.



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
      Define
      
      
    </td>
    <td>
      
<code>paths</code>
    </td>
    <td>
      <p>a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that is called each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.
</div>



<div id="routeWithNavController"></div>
<h3><code>routeWithNavController(Define)</code>
  
</h3>




This is a convenience version of `route` that takes a reference to a NavController
from Ionic 2, or a custom class that conforms to this protocol:

NavController.push = function(View, Params){}

This handler will automatically navigate when a route matches. If you need finer-grained
control over the behavior of a matching deeplink, use the plain `route` method.



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
      Define
      
      
    </td>
    <td>
      
<code>paths</code>
    </td>
    <td>
      <p>a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that resolves each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

