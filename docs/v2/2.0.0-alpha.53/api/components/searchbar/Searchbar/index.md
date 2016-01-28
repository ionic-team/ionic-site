---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "{{Searchbar | slugify}}"
title: "Searchbar"
header_sub_title: "Class in module ionic"
doc: "Searchbar"
docType: "class"

---









<h1 class="api-title">


Searchbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/searchbar/searchbar.ts#L30'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Manages the display of a Searchbar which can be used to search or filter items.</p>


<h2>Component</h2>
<h3>selector: <code>ion-searchbar</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-searchbar [(ngModel)]=&quot;defaultSearch&quot; (input)=&quot;triggerInput($event)&quot; (cancel)=&quot;onCancelSearchbar($event)&quot; (clear)=&quot;onClearSearchbar($event)&quot;&gt;&lt;/ion-searchbar&gt;
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
cancelButtonText
</td>


<td>
string
</td>


<td>
Sets the cancel button text to the value passed in
</td>
</tr>

<tr>
<td>
hideCancelButton
</td>


<td>
boolean
</td>


<td>
Hides the cancel button
</td>
</tr>

<tr>
<td>
placeholder
</td>


<td>
string
</td>


<td>
Sets input placeholder to the value passed in
</td>
</tr>

<tr>
<td>
input
</td>


<td>
Any
</td>


<td>
Expression to evaluate when the Searchbar input has changed including cleared
</td>
</tr>

<tr>
<td>
keydown
</td>


<td>
Any
</td>


<td>
Expression to evaluate when a key is pushed down in the Searchbar input
</td>
</tr>

<tr>
<td>
keypress
</td>


<td>
Any
</td>


<td>
Expression to evaluate when a character is inserted in the Searchbar input
</td>
</tr>

<tr>
<td>
keyup
</td>


<td>
Any
</td>


<td>
Expression to evaluate when a key is released in the Searchbar input
</td>
</tr>

<tr>
<td>
blur
</td>


<td>
Any
</td>


<td>
Expression to evaluate when the Searchbar input has blurred
</td>
</tr>

<tr>
<td>
focus
</td>


<td>
Any
</td>


<td>
Expression to evaluate when the Searchbar input has focused
</td>
</tr>

<tr>
<td>
cancel
</td>


<td>
Any
</td>


<td>
Expression to evaluate when the cancel button is clicked
</td>
</tr>

<tr>
<td>
clear
</td>


<td>
Any
</td>


<td>
Expression to evaluate when the clear input button is clicked
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="searchbarInput"></div>

<h3>
<code>searchbarInput()</code>
  

</h3>












<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>












<div id="blurInput"></div>

<h3>
<code>blurInput()</code>
  

</h3>












<div id="inputElement"></div>

<h3>
<code>inputElement()</code>
  

</h3>












<div id="searchIconElement"></div>

<h3>
<code>searchIconElement()</code>
  

</h3>












<div id="mode"></div>

<h3>
<code>mode()</code>
  

</h3>












<div id="isFocused"></div>

<h3>
<code>isFocused()</code>
  

</h3>












<div id="shouldLeftAlign"></div>

<h3>
<code>shouldLeftAlign()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#searchbar'>Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

