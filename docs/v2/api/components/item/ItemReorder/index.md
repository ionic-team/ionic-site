---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "itemreorder"
title: "ItemReorder"
header_sub_title: "Ionic API Documentation"
doc: "ItemReorder"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/item-reorder/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="item-reorder" href="#item-reorder"></a>

ItemReorder
<h3><code>[reorder]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/item/item-reorder.ts#L12">
Improve this doc
</a>






<p>ItemReorder can be used with <code>ion-list</code> or <code>ion-item-group</code> to provide a visual
drap and drop interface for reordering of items in a list.</p>
<h2 id="usage">Usage</h2>
<p>It is very important to follow the rules below in order to integrate reordering in your app.</p>
<h3 id="all-items-in-a-reorder-list-have-to-be-part-of-the-same-set">All items in a reorder list have to be part of the same set</h3>
<p>You can not have non-reorderable and reorderable items in the same list or item&#39;s group.</p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{{item.name}}&lt;/ion-item
&lt;/ion-list&gt;
</code></pre>
<p><strong>GOOD!</strong></p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-list-header&gt;HEADER&lt;/ion-list-header&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{{item.name}}&lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>
<p><strong>BAD!</strong> There is a <code>ion-list-header</code> that is not part of the same set.</p>
<p>In order to mix different sets of items, <code>ion-item-group</code> has to be used:</p>
<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;HEADER&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{{item.name}}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>
<p><strong>GOOD!</strong> It&#39;s important to notice that in this case, the <code>[reorder]</code> directive it applied to <code>ion-item-group</code> instead of
<code>ion-list</code>. This way we are able to have a list-header and satisfy the first gold rule at the same time.</p>
<h3 id="implement-a-reorder-function">Implement a reorder function</h3>
<p>Once the user drags an item and drops it in the new position, this directive fires the <code>(ionItemReorder)</code>
event providing the initial index (from) and the new index (to) of the reordered item.
For example, if an user drags the first item to the 5th position, <code>(ionItemReorder)</code> would fire
<code>{from:0, to: 4}</code> (note that the indices start at zero).</p>
<p>In order to integrate reordering in your app, it&#39;s a MUST to implement your own function that takes this indices and perform
the actual reordering of the data models. Here&#39;s is an example of how this can be done:</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">class E2EPage {
  items = [];

  constructor() {
    for (let x = 0; x &lt; 5; x++) {
      this.items.push(x);
    }
  }

  reorderItem(indices) {
    let element = this.items[indices.from];
    this.items.splice(indices.from, 1);
    this.items.splice(indices.to, 0, element);

    // For maximum convenience, ionic already provides an helper function:
    // import { reorderArray } from &#39;ionic-angular&#39;;
    // this.item = reorderArray(this.item, indices);
  }
}
</code></pre>
<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;HEADER&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot; (ionItemReorder)=&quot;reorderItem($event)&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;Number: {{item}}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
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
      <td>reorder</td>
      <td><code></code></td>
      <td></td>
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
      <td>ionItemReorder</td>
      <td></td>
    </tr>
    
  </tbody>
</table>


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>,
<a href='../../list/List'>List API Docs</a>,
<a href='../Item'>Item API Docs</a><!-- end content block -->


<!-- end body block -->

