---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Id | slugify}}"
title: "Id"
header_sub_title: "Class in module "
doc: "Id"
docType: "class"

---









<h1 class="api-title">


Id






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/app/id.ts#L2'>
Improve this doc
</a>






<!-- description -->

<p>IdRef is an easy way to identify unique components in an app and access them
no matter where in the UI heirarchy you are. For example, this makes toggling
a global side menu feasible from any place in the application.</p>
<p>See the <a href="http://ionicframework.com/docs/v2/components/#menus">Menu section</a> of
the Component docs for an example of how Menus rely on ID&#39;s.</p>


<h3>Directive</h3>
<h3>selector: <code>[id]</code></h3>
<!-- @usage tag -->

<h3 style="margin-bottom: 7px">Usage</h3>


<p>To give any component an ID, simply set its <code>id</code> property:</p>
<pre><code class="lang-html">&lt;ion-checkbox id=&quot;myCheckbox&quot;&gt;&lt;/ion-checkbox&gt;
</code></pre>
<p>To get a reference to the registered component, inject the <a href="../app/IonicApp/">IonicApp</a>
service:</p>
<pre><code class="lang-ts">constructor(app: IonicApp) {
   this.app = app
}
ngAfterViewInit{
 var checkbox = this.app.getComponent(&quot;myCheckbox&quot;);
 if (checkbox.checked) {
   console.log(&#39;checkbox is checked&#39;);
 }
}
</code></pre>
<p><em>NOTE:</em> It is not recommended to use ID&#39;s across Pages, as there is often no
guarantee that the registered component has not been destroyed if its Page
has been navigated away from.</p>




<!-- @property tags -->


<!-- methods on the class -->

<h3>Methods</h3>

<div id="component"></div>

<h3>
<code>component()</code>
  

</h3>












<div id="id"></div>

<h3>
<code>id()</code>
  

</h3>










<!-- related link --><!-- end content block -->


<!-- end body block -->

