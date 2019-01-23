---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/v3/3.6.0"
path: ""
category: api
id: "ionicpagemodule"
title: "IonicPageModule"
header_sub_title: "Ionic API Documentation"
doc: "IonicPageModule"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="ionic-page-module" href="#ionic-page-module"></a>

IonicPageModule





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/module.ts#L452">
Improve this doc
</a>






<p>IonicPageModule is an <a href="https://angular.io/docs/ts/latest/guide/ngmodule.html">NgModule</a> that
bootstraps a child <a href="../navigation/IonicPage/">IonicPage</a> in order to set up routing.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">import { NgModule } from &#39;@angular/core&#39;;

import { IonicPageModule } from &#39;ionic-angular&#39;;

import { HomePage } from &#39;./home&#39;;

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomePageModule { }
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members">Static Members</a></h2>
<div id="forChild"></div>
<h3><a class="anchor" name="forChild" href="#forChild"><code>forChild()</code>
  
</a></h3>












<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

