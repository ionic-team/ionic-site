---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "select"
title: "Select"
header_sub_title: "Class in module "
doc: "Select"
docType: "class"

---









<h1 class="api-title">


Select






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/select/select.ts#L8'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>The <code>ion-select</code> component is similar to an HTML <code>&lt;select&gt;</code> element, however,
Ionic&#39;s select component makes it easier for users to sort through and select
the preferred option or options. When users tap the select component, a
dialog will appear with all of the options in a large, easy to select list
for users.</p>
<p>Under-the-hood the <code>ion-select</code> actually uses the
<a href='../../alert/Alert'>Alert API</a> to open up the overlay of options
which the user is presented with. Select can take numerous child
<code>ion-option</code> components. If <code>ion-option</code> is not given a <code>value</code> attribute
then it will use its text as the value.</p>
<h3 id="single-value-radio-buttons">Single Value: Radio Buttons</h3>
<p>The standard <code>ion-select</code> component allows the user to select only one
option. When selecting only one option the alert overlay presents users with
a radio button styled list of options. The <code>ion-select</code> component&#39;s value
receives the value of the selected option&#39;s value.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Gender&lt;/ion-label&gt;
  &lt;ion-select [(ngModel)]=&quot;gender&quot;&gt;
    &lt;ion-option value=&quot;f&quot; checked=&quot;true&quot;&gt;Female&lt;/ion-option&gt;
    &lt;ion-option value=&quot;m&quot;&gt;Male&lt;/ion-option&gt;
  &lt;/ion-select&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="multiple-value-checkboxes">Multiple Value: Checkboxes</h3>
<p>By adding the <code>multiple=&quot;true&quot;</code> attribute to <code>ion-select</code>, users are able
to select multiple options. When multiple options can be selected, the alert
overlay presents users with a checkbox styled list of options. The
<code>ion-select multiple=&quot;true&quot;</code> component&#39;s value receives an array of all the
selected option values. In the example below, because each option is not given
a <code>value</code>, then it&#39;ll use its text as the value instead.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Toppings&lt;/ion-label&gt;
  &lt;ion-select [(ngModel)]=&quot;toppings&quot; multiple=&quot;true&quot;&gt;
    &lt;ion-option&gt;Bacon&lt;/ion-option&gt;
    &lt;ion-option&gt;Black Olives&lt;/ion-option&gt;
    &lt;ion-option&gt;Extra Cheese&lt;/ion-option&gt;
    &lt;ion-option&gt;Mushrooms&lt;/ion-option&gt;
    &lt;ion-option&gt;Pepperoni&lt;/ion-option&gt;
    &lt;ion-option&gt;Sausage&lt;/ion-option&gt;
  &lt;/ion-select&gt;
&lt;ion-item&gt;
</code></pre>
<h3 id="alert-buttons">Alert Buttons</h3>
<p>By default, the two buttons read <code>Cancel</code> and <code>OK</code>. The each button&#39;s text
can be customized using the <code>cancelText</code> and <code>okText</code> attributes:</p>
<pre><code class="lang-html">&lt;ion-select okText=&quot;Okay&quot; cancelText=&quot;Dismiss&quot;&gt;
  ...
&lt;/ion-select&gt;
</code></pre>
<h3 id="alert-options">Alert Options</h3>
<p>Remember how <code>ion-select</code> is really just a wrapper to <code>Alert</code>? By using
the <code>alertOptions</code> property you can pass custom options to the alert
overlay. This would be useful if there is a custom alert title,
subtitle or message. <a href='../../alert/Alert'>Alert API</a></p>
<pre><code class="lang-html">&lt;ion-select [alertOptions]=&quot;alertOptions&quot;&gt;
  ...
&lt;/ion-select&gt;
</code></pre>
<pre><code class="lang-ts">this.alertOptions = {
  title: &#39;Pizza Toppings&#39;,
  subTitle: &#39;Select your toppings&#39;
};
</code></pre>


<h2>Component</h2>
<h3>selector: <code>ion-select</code></h3>
<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="cancelText"></div>

<h3>
<code>cancelText()</code>
  

</h3>












<div id="okText"></div>

<h3>
<code>okText()</code>
  

</h3>












<div id="alertOptions"></div>

<h3>
<code>alertOptions()</code>
  

</h3>












<div id="checked"></div>

<h3>
<code>checked()</code>
  

</h3>












<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>












<div id="multiple"></div>

<h3>
<code>multiple()</code>
  

</h3>













<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>













<div id="text"></div>

<h3>
<code>text()</code>
  

</h3>












<div id="options"></div>

<h3>
<code>options()</code>
  

</h3>












<div id="updateOptions"></div>

<h3>
<code>updateOptions()</code>
  

</h3>












<div id="ngAfterContentInit"></div>

<h3>
<code>ngAfterContentInit()</code>
  

</h3>












<div id="disabled"></div>

<h3>
<code>disabled()</code>
  

</h3>











<!-- related link --><!-- end content block -->


<!-- end body block -->

