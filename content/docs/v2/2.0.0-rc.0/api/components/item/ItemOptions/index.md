---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.0"
versionHref: "/docs/v2/2.0.0-rc.0"
path: ""
category: api
id: "itemoptions"
title: "ItemOptions"
header_sub_title: "Ionic API Documentation"
doc: "ItemOptions"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="item-options" href="#item-options"></a>

ItemOptions
<h3><code>ion-item-options</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/item/item-sliding.ts#L15">
Improve this doc
</a>






<p>The option buttons for an <code>ion-item-sliding</code>. These buttons can be placed either on the left or right side.
You can combine the <code>(ionSwipe)</code> event plus the <code>expandable</code> directive to create a full swipe action for the item.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item-sliding&gt;
  &lt;ion-item&gt;
    Item 1
  &lt;/ion-item&gt;
  &lt;ion-item-options side=&quot;right&quot; (ionSwipe)=&quot;saveItem(item)&quot;&gt;
    &lt;button ion-button expandable (click)=&quot;saveItem(item)&quot;&gt;
      &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-item-options&gt;
&lt;/ion-item-sliding&gt;
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
      <td>side</td>
      <td><code>string</code></td>
      <td><p> the side the option button should be on. Defaults to right
If you have multiple <code>ion-item-options</code>, a side must be provided for each.</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>ionSwipe</td>
      <td><p> Expression to evaluate when the item has been fully swiped.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link --><!-- end content block -->


<!-- end body block -->

