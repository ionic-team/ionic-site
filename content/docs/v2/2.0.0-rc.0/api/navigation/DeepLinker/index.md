---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.0"
versionHref: "/docs/v2/2.0.0-rc.0"
path: ""
category: api
id: "deeplinker"
title: "DeepLinker"
header_sub_title: "Ionic API Documentation"
doc: "DeepLinker"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="deep-linker" href="#deep-linker"></a>

DeepLinker





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/navigation/deep-linker.ts#L10">
Improve this doc
</a>






<p>Deep Linking Scenarios:
1) Initialize all NavControllers using the initial browser URL
2) User clicks browser back button
3) User clicks browser forward button
4) User changes browser URL
5) User clicks link href
6) App uses NavController push/pop/setRoot/insert/remove</p>
<p>Terms:</p>
<ul>
<li>URL: The string value found in the browser&#39;s URL bar</li>
<li>Segment: Deep linker&#39;s data about each section between / in the URL</li>
<li>Path: Deep linker&#39;s array of segments</li>
<li>History: Deep linker&#39;s string array of internal URL history</li>
<li>Location: Angular&#39;s Location provider, which abstracts Hash/Path Location Strategies
DeepLinker handles registering and displaying specific views based on URLs. It&#39;s used
underneath NavController so you&#39;ll never have to interact with it directly. When a new
view is push&#39;ed with NavController, the URL is updated to match the path back to this
page.</li>
</ul>
<p>Unlike traditional web apps, URLs don&#39;t dictate navigation in Ionic apps.
Instead, URLs help us link to specific pieces of content as a breadcrumb.
We keep the current URL updated as we navigate, but we use the NavController&#39;s
push and pop, or navPush to move around. This makes it much easier
to handle the kinds of complicated nested navigation native apps are known for.</p>
<p>We refer to our URL system as a Deep Link system instead of a Router to encourage
Ionic developers to think of URLs as a breadcrumb rather than as the source of
truth in navigation. This encourages flexible navigation design and happy apps all
over the world.</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="segments"></div>

<h3>
<a class="anchor" name="segments" href="#segments"></a>
<code>segments</code>
  

</h3>












<div id="history"></div>

<h3>
<a class="anchor" name="history" href="#history"></a>
<code>history</code>
  

</h3>












<div id="indexAliasUrl"></div>

<h3>
<a class="anchor" name="indexAliasUrl" href="#indexAliasUrl"></a>
<code>indexAliasUrl</code>
  

</h3>












<div id="app"></div>

<h3>
<a class="anchor" name="app" href="#app"></a>
<code>app</code>
  

</h3>












<div id="serializer"></div>

<h3>
<a class="anchor" name="serializer" href="#serializer"></a>
<code>serializer</code>
  

</h3>












<div id="location"></div>

<h3>
<a class="anchor" name="location" href="#location"></a>
<code>location</code>
  

</h3>















<!-- related link --><!-- end content block -->


<!-- end body block -->

