---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "icon"
title: "Icon"
header_sub_title: "Class in module "
doc: "Icon"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/icon/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a name="icon"></a>

Icon






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/icon/icon.ts#L2'>
Improve this doc
</a>






<p>Icons can be used on their own, or inside of a number of Ionic components.
For a full list of available icons, check out the
<a href="../../../../resources/ionicons">Ionicons resource docs</a>.</p>
<p>One feature of Ionicons in Ionic is when icon names are set, the actual icon
which is rendered can change slightly depending on the mode the app is
running from. For example, by setting the icon name of <code>alarm</code>, on iOS the
icon will automatically apply <code>ios-alarm</code>, and on Material Design it will
automatically apply <code>md-alarm</code>. This allows the developer to write the
markup once while Ionic applies the appropriate icon based on the mode.</p>


<h2><a name="Directive"></a>Directive</h2>
<h3>selector: <code>ion-icon,icon</code></h3>
<!-- @usage tag -->

<h2><a name="usage"></a>Usage</h2>

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
<h2><a name="input-properties"></a>Input Properties</h2>
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
      <td>name</td>
      <td><code>string</code></td>
      <td><p> Icon to use. Will load the appropriate icon for each mode</p>
</td>
    </tr>
    
    <tr>
      <td>ios</td>
      <td><code>string</code></td>
      <td><p> Explicitly set the icon to use on iOS</p>
</td>
    </tr>
    
    <tr>
      <td>md</td>
      <td><code>string</code></td>
      <td><p> Explicitly set the icon to use on MD</p>
</td>
    </tr>
    
    <tr>
      <td>isActive</td>
      <td><code>bool</code></td>
      <td><p> Whether or not the icon has an &quot;active&quot; appearance. On iOS an active icon is filled in or full appearance, and an inactive icon on iOS will use an outlined version of the icon same icon. Material Design icons do not change appearance depending if they&#39;re active or not. The <code>isActive</code> property is largely used by the tabbar.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a name="related"></a>Related</h2>

<a href='/docs/v2/components#icons'>Icon Component Docs</a><!-- end content block -->


<!-- end body block -->

