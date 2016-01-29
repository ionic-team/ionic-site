---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "icon"
title: "Icon"
header_sub_title: "Class in module "
doc: "Icon"
docType: "class"

---









<h1 class="api-title">


Icon






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/icon/icon.ts#L2'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Icons can be used on their own, or inside of a number of Ionic components.
For a full list of available icons, check out the
<a href="../../../../resources/ionicons">Ionicons resource docs</a>.</p>
<p>One feature of Ionicons is that when icon names are set, the actual icon
which is rendered can change slightly depending on the mode the app is
running from. For example, by setting the icon name of <code>alarm</code>, on iOS the
icon will automatically apply <code>ios-alarm</code>, and on Material Design it will
automatically apply <code>md-alarm</code>. This allow the developer to write the
markup once, and let Ionic automatically apply the appropriate icon.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-icon,icon</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;!-- automatically uses the correct &quot;star&quot; icon depending on the mode --&gt;
&lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;

&lt;!-- explicity set the icon for each mode --&gt;
&lt;ion-icon ios=&quot;ios-home&quot; md=&quot;md-home&quot;&gt;&lt;/ion-icon&gt;

&lt;!-- always use the same icon, no matter what the mode --&gt;
&lt;ion-icon name=&quot;ios-clock&quot;&gt;&lt;/ion-icon&gt;
&lt;ion-icon name=&quot;logo-twitter&quot;&gt;&lt;/ion-icon&gt;
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
name
</td>


<td>
string
</td>


<td>
Use the appropriate icon for the mode.
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

<tr>
<td>
isActive
</td>


<td>
boolean
</td>


<td>
Whether or not the icon has an "active"
appearance. On iOS an active icon is filled in or full appearance, and an
inactive icon on iOS will use an outlined version of the icon same icon.
Material Design icons do not change appearance depending if they're active
or not. The `isActive` property is largely used by the tabbar.
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="mode"></div>

<h3>
<code>mode()</code>


</h3>












<div id="name"></div>

<h3>
<code>name()</code>


</h3>













<div id="ios"></div>

<h3>
<code>ios()</code>


</h3>













<div id="md"></div>

<h3>
<code>md()</code>


</h3>













<div id="isActive"></div>

<h3>
<code>isActive()</code>


</h3>











<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#icons'>Icon Component Docs</a><!-- end content block -->


<!-- end body block -->
