---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Icon | slugify}}"
title: "Icon"
header_sub_title: "Class in module "
doc: "Icon"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/icon/icon.ts#L2'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/icon/icon.ts#L2'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Icon






</h1>






<!-- description -->
<h2>Description</h2>

<p>Icons can be used on their own, or inside of a number of Ionic components. For a full list of available icons,
check out the <a href="../../../../resources/ionicons">Ionicons resource docs</a>.</p>


<h2>Directive</h2>
<h3>selector: <code>icon</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;!-- use the appropriate home icon for ios and md --&gt;
&lt;icon home&gt;&lt;/icon&gt;

&lt;!-- explicity set the icon for each platform --&gt;
&lt;icon ios=&quot;ion-ios-home&quot; md=&quot;ion-md-home&quot;&gt;&lt;/icon&gt;
</code></pre>




<!-- @property tags -->

<h2>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>
















<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
isActive
</td>


<td>
boolean
</td>


<td>
Whether or not the icon is active. Icons that are not active will use an outlined version of the icon.
If there is not an outlined version for the particular icon, it will use the default (full) version.
</td>
</tr>

<tr>
<td>
ios
</td>


<td>
string
</td>


<td>
Explicitly set the icon to use on iOS.
</td>
</tr>

<tr>
<td>
md
</td>


<td>
string
</td>


<td>
Explicitly set the icon to use on Android.
</td>
</tr>

</tbody>
</table>


<!-- methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#icons'>Icon Component Docs</a><!-- end content block -->


<!-- end body block -->

