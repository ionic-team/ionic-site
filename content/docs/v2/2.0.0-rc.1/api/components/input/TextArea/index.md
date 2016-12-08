---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "textarea"
title: "TextArea"
header_sub_title: "Ionic API Documentation"
doc: "TextArea"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/textarea/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="text-area" href="#text-area"></a>

TextArea
<h3><code>ion-textarea</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/input/input.ts#L234">
Improve this doc
</a>






<p><code>ion-textarea</code> is is used for multi-line text inputs. Ionic still
uses an actual <code>&lt;textarea&gt;</code> HTML element within the component;
however, with Ionic wrapping the native HTML text area element, Ionic
is able to better handle the user experience and interactivity.</p>
<p>Note that <code>&lt;ion-textarea&gt;</code> must load its value from the <code>value</code> or
<code>[(ngModel)]</code> attribute. Unlike the native <code>&lt;textarea&gt;</code> element,
<code>&lt;ion-textarea&gt;</code> does not support loading its value from the
textarea&#39;s inner content.</p>
<p>When requiring only a single-line text input, we recommend using
<code>&lt;ion-input&gt;</code> instead.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html"> &lt;ion-item&gt;
   &lt;ion-label&gt;Comments&lt;/ion-label&gt;
   &lt;ion-textarea&gt;&lt;/ion-textarea&gt;
 &lt;/ion-item&gt;

 &lt;ion-item&gt;
   &lt;ion-label stacked&gt;Message&lt;/ion-label&gt;
   &lt;ion-textarea [(ngModel)]=&quot;msg&quot;&gt;&lt;/ion-textarea&gt;
 &lt;/ion-item&gt;

 &lt;ion-item&gt;
   &lt;ion-label floating&gt;Description&lt;/ion-label&gt;
   &lt;ion-textarea&gt;&lt;/ion-textarea&gt;
 &lt;/ion-item&gt;

&lt;ion-item&gt;
   &lt;ion-label&gt;Long Description&lt;/ion-label&gt;
   &lt;ion-textarea rows=&quot;6&quot; placeholder=&quot;enter long description here...&quot;&gt;&lt;/ion-textarea&gt;
 &lt;/ion-item&gt;
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
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode to apply to this component.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link --><!-- end content block -->


<!-- end body block -->

