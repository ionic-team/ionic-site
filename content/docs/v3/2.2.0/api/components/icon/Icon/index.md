---
layout: "fluid/docs_base"
version: "2.2.0"
versionHref: "/docs/v3/2.2.0"
path: ""
category: api
id: "icon"
title: "Icon"
header_sub_title: "Ionic API Documentation"
doc: "Icon"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/icon/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="icon" href="#icon"></a>

Icon
<h3><code>ion-icon</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/icon/icon.ts#L4">
Improve this doc
</a>






<p>Icons can be used on their own, or inside of a number of Ionic components.
For a full list of available icons, check out the
<a href="../../../../../ionicons">Ionicons docs</a>.</p>
<p>One feature of Ionicons in Ionic is when icon names are set, the actual icon
which is rendered can change slightly depending on the mode the app is
running from. For example, by setting the icon name of <code>alarm</code>, on iOS the
icon will automatically apply <code>ios-alarm</code>, and on Material Design it will
automatically apply <code>md-alarm</code>. This allows the developer to write the
markup once while Ionic applies the appropriate icon based on the mode.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;!-- automatically uses the correct &quot;star&quot; icon depending on the mode --&gt;
&lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;

&lt;!-- explicity set the icon for each mode --&gt;
&lt;ion-icon ios=&quot;ios-home&quot; md=&quot;md-home&quot;&gt;&lt;/ion-icon&gt;

&lt;!-- always use the same icon, no matter what the mode --&gt;
&lt;ion-icon name=&quot;ios-clock&quot;&gt;&lt;/ion-icon&gt;
&lt;ion-icon name=&quot;logo-twitter&quot;&gt;&lt;/ion-icon&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The color to use from your Sass <code>$colors</code> map.
Default options are: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>, <code>&quot;light&quot;</code>, and <code>&quot;dark&quot;</code>.
For more information, see <a href="/docs//theming/theming-your-app">Theming your App</a>.</p>
</td>
    </tr>
    
    <tr>
      <td>ios</td>
      <td><code>string</code></td>
      <td><p> Specifies which icon to use on <code>ios</code> mode.</p>
</td>
    </tr>
    
    <tr>
      <td>isActive</td>
      <td><code>boolean</code></td>
      <td><p> If true, the icon is styled with an &quot;active&quot; appearance.
An active icon is filled in, and an inactive icon is the outline of the icon.
The <code>isActive</code> property is largely used by the tabbar. Only affects <code>ios</code> icons.</p>
</td>
    </tr>
    
    <tr>
      <td>md</td>
      <td><code>string</code></td>
      <td><p> Specifies which icon to use on <code>md</code> mode.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode determines which platform styles to use.
Possible values are: <code>&quot;ios&quot;</code>, <code>&quot;md&quot;</code>, or <code>&quot;wp&quot;</code>.
For more information, see <a href="/docs//theming/platform-specific-styles">Platform Styles</a>.</p>
</td>
    </tr>
    
    <tr>
      <td>name</td>
      <td><code>string</code></td>
      <td><p> Specifies which icon to use. The appropriate icon will be used based on the mode.
For more information, see <a href="/docs//ionicons/">Ionicons</a>.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs//components#icons'>Icon Component Docs</a><!-- end content block -->


<!-- end body block -->

