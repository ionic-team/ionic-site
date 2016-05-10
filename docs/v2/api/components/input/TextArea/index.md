---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "textarea"
title: "TextArea"
header_sub_title: "Ionic API Documentation"
doc: "TextArea"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/textarea/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="text-area" href="#text-area"></a>

TextArea






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/input/input.ts#L104">
Improve this doc
</a>






<p><code>ion-textarea</code> is is used for multi-line text inputs. Ionic still
uses an actual <code>&lt;textarea&gt;</code> HTML element within the component;
however, with Ionic wrapping the native HTML text area element, Ionic
is able to better handle the user experience and interactivity.</p>
<p>Not that <code>&lt;ion-textarea&gt;</code> must load its value from the <code>value</code> or
<code>[(ngModel)]</code> attribute. Unlike the native <code>&lt;textarea&gt;</code> element,
<code>&lt;ion-textarea&gt;</code> does not support loading its value from the
textarea&#39;s inner content.</p>
<p>When requiring only a single-line text input, we recommend using
<code>&lt;ion-input&gt;</code> instead.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-textarea</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item&gt;
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
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

