---
layout: "v2_fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Page | slugify}}"
title: "Page"
header_sub_title: "Function in module "
doc: "Page"
docType: "function"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/config/decorators.ts#L4'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/config/decorators.ts#L4'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Page



</h1>





<p>_For more information on how pages are created, see the <a href="../../Nav/NavController/#creating_pages">NavController API
reference</a>._</p>
<p>The Page decorator indicates that the decorated class is an Ionic
navigation component, meaning it can be navigated to using a NavController.</p>
<p>Pages have all <a href="../IONIC_DIRECTIVES/">IONIC_DIRECTIVES</a>, which include
all Ionic components and directives, as well as Angular&#39;s <a href="https://angular.io/docs/js/latest/api/core/CORE_DIRECTIVES-const.html">CORE_DIRECTIVES</a>
and <a href="https://angular.io/docs/js/latest/api/core/FORM_DIRECTIVES-const.html">FORM_DIRECTIVES</a>,
already provided to them, so you only need to supply custom components and
directives to your pages:</p>
<pre><code class="lang-ts">@Page({
  template: `
    &lt;ion-checkbox my-custom-dir&gt;
    &lt;/ion-checkbox&gt;`
  directives: [MyCustomDirective]
})
class MyPage {}
</code></pre>
<p>Here <a href="../../../components/checkbox/Checkbox/">Checkbox</a> will load because
it is in IONIC_DIRECTIVES, so there is no need to add it to the <code>directives</code>
array.</p>
<p>For custom components that use Ionic components, you will need to include
IONIC_DIRECTIVES in the <code>directives</code> array:</p>
<pre><code class="lang-ts">import {IONIC_DIRECTIVES} from &#39;ionic/ionic&#39;;
@Component({
  selector: &#39;my-component&#39;
  template: `&lt;div class=&quot;my-style&quot;&gt;
                            &lt;ion-checkbox&gt;&lt;/ion-checkbox&gt;
                          &lt;/div&gt;`,
  directives: [IONIC_DIRECTIVES]
})
class MyCustomCheckbox {}
</code></pre>
<p>Alternatively, you could:</p>
<pre><code class="lang-ts">import {Checkbox, Icon} from &#39;ionic/ionic&#39;
</code></pre>
<p>along with any other components and add them individually:</p>
<pre><code>@Component({
  ...
  directives: [Checkbox, Icon]
})
</code></pre>
<p>However, using IONIC_DIRECTIVES will always <em>Just Work</em> with no
performance overhead, so there is really no reason to not always use it.</p>
<p>Pages have their content automatically wrapped in <code>&lt;ion-view&gt;</code>, so although
you may see these tags if you inspect your markup, you don&#39;t need to include
them in your templates.</p>


<h1 class="class export">Page <span class="type">function</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/config/decorators.ts#L5-L78">ionic/config/decorators.ts (line 5)</a>
</p>

