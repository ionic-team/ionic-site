---
layout: "fluid/docs_base"
version: "3.0.1"
versionHref: "/docs/3.0.1"
path: ""
category: api
id: "showwhen"
title: "ShowWhen"
header_sub_title: "Ionic API Documentation"
doc: "ShowWhen"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/show-when/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="show-when" href="#show-when"></a>

ShowWhen
<h3><code>[showWhen]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/show-hide-when/show-when.ts#L4">
Improve this doc
</a>






<p>The <code>showWhen</code> attribute takes a string that represents a platform or screen orientation.
The element the attribute is added to will only be shown when that platform or screen orientation is active.</p>
<p>Complements the <a href="../HideWhen">hideWhen attribute</a>. If the <code>showWhen</code> attribute is used on an
element that also has the <code>hideWhen</code> attribute, the element will not show if <code>hideWhen</code> evaluates
to <code>true</code> or <code>showWhen</code> evaluates to <code>false</code>. If the <code>hidden</code> attribute is also added, the element
will not show if <code>hidden</code> evaluates to <code>true</code>.</p>
<p>View the <a href="../../../platform/Platform">Platform API docs</a> for more information on the different
platforms you can use.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;div showWhen=&quot;android&quot;&gt;
 I am visible on Android!
&lt;/div&gt;

&lt;div showWhen=&quot;ios&quot;&gt;
 I am visible on iOS!
&lt;/div&gt;

&lt;div showWhen=&quot;android,ios&quot;&gt;
 I am visible on Android and iOS!
&lt;/div&gt;

&lt;div showWhen=&quot;portrait&quot;&gt;
 I am visible on Portrait!
&lt;/div&gt;

&lt;div showWhen=&quot;landscape&quot;&gt;
 I am visible on Landscape!
&lt;/div&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="../HideWhen">HideWhen API Docs</a>,
<a href="../../../platform/Platform">Platform API Docs</a><!-- end content block -->


<!-- end body block -->

