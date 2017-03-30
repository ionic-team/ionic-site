---
layout: "fluid/docs_base"
version: "3.4.4"
versionHref: "/docs/native"
path: ""
category: native
id: "shake"
title: "Shake"
header_sub_title: "Class in module "
doc: "Shake"
docType: "class"
---

<h1 class="api-title">Shake</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/shake/index.ts#L2">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-shake
$ npm install --save @ionic-native/shake
</code></pre>
<p>Repo:
  <a href="https://github.com/leecrossley/cordova-plugin-shake">
    https://github.com/leecrossley/cordova-plugin-shake
  </a>
</p>


<p>Handles shake gesture</p>









<h2>Usage</h2>
<pre><code class="lang-typescript">import { Shake } from &#39;@ionic-native/shake&#39;;

constructor(private shake: Shake) { }

...

const watch = this.shake.startWatch(60).subscribe(() =&gt; {
  // do something
  });

watch.unsubscribe();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="startWatch" href="#startWatch"></a><code>startWatch(sensitivity)</code></h3>




Watch for shake gesture
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      sensitivity</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional sensitivity parameter. Defaults to 40</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div>





