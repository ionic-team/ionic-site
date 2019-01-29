---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "deeplinks"
title: "Deeplinks"
header_sub_title: "Class in module "
doc: "Deeplinks"
docType: "class"
---

<h1 class="api-title">Deeplinks</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/deeplinks/index.ts#L30">
  Improve this doc
</a>







<p>This plugin handles deeplinks on iOS and Android for both custom URL scheme links
and Universal App Links.</p>


<p>Repo:
  <a href="https://github.com/ionic-team/ionic-plugin-deeplinks">
    https://github.com/ionic-team/ionic-plugin-deeplinks
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/
$ npm install --save @ionic-native/deeplinks@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Deeplinks } from &#39;@ionic-native/deeplinks&#39;;

constructor(private deeplinks: Deeplinks) { }

this.deeplinks.route({
     &#39;/about-us&#39;: AboutPage,
     &#39;/universal-links-test&#39;: AboutPage,
     &#39;/products/:productId&#39;: ProductPage
   }).subscribe(match =&gt; {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log(&#39;Successfully matched route&#39;, match);
   }, nomatch =&gt; {
     // nomatch.$link - the full link data
     console.error(&#39;Got a deeplink that didn\&#39;t match&#39;, nomatch);
   });
</code></pre>
<p>Alternatively, if you&#39;re using Ionic, there&#39;s a convenience method that takes a reference to a <code>NavController</code> and handles
the actual navigation for you:</p>
<pre><code class="lang-typescript">this.deeplinks.routeWithNavController(this.navController, {
  &#39;/about-us&#39;: AboutPage,
  &#39;/products/:productId&#39;: ProductPage
}).subscribe(match =&gt; {
    // match.$route - the route we matched, which is the matched entry from the arguments to route()
    // match.$args - the args passed in the link
    // match.$link - the full link data
    console.log(&#39;Successfully matched route&#39;, match);
  }, nomatch =&gt; {
    // nomatch.$link - the full link data
    console.error(&#39;Got a deeplink that didn\&#39;t match&#39;, nomatch);
  });
</code></pre>
<p>See the <a href="https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts">Ionic Deeplinks Demo</a> for an example of how to
retrieve the <code>NavController</code> reference at runtime.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="route" href="#route"></a><code>route(paths)</code></h3>




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
      paths</td>
    <td>
      <code>paths</code>
    </td>
    <td>
      <p>Define a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;DeeplinkMatch&gt;</code> Returns an Observable that is called each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.
</div><h3><a class="anchor" name="routeWithNavController" href="#routeWithNavController"></a><code>routeWithNavController(navController,&nbsp;paths,&nbsp;options)</code></h3>




This is a convenience version of `route` that takes a reference to a NavController
from Ionic, or a custom class that conforms to this protocol:

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
      navController</td>
    <td>
      <code>Nav</code>
    </td>
    <td>
      <p>Define a set of paths to match against incoming deeplinks.
paths takes an object of the form { &#39;path&#39;: data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</p>
</td>
  </tr>
  
  <tr>
    <td>
      paths</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>DeeplinkOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;DeeplinkMatch&gt;</code> Returns an Observable that resolves each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.
</div>





<h2><a class="anchor" name="DeeplinkMatch" href="#DeeplinkMatch"></a>DeeplinkMatch</h2>

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
      $route
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The route info for the matched route</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      $args
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Any arguments passed either through route parameters or GET parameters</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      $link
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The deeplink object processed from the plugin, along with any
any internal native data available as &quot;extras&quot; at the time
the route was matched (for example, Facebook sometimes adds extra data)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





