---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.57"
versionHref: "/docs/v2/2.0.0-alpha.57"
path: ""
category: api
id: "searchbar"
title: "Searchbar"
header_sub_title: "Class in module ionic"
doc: "Searchbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/searchbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Searchbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/searchbar/searchbar.ts#L30'>
Improve this doc
</a>






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



<!-- instance methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#searchbar'>Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

