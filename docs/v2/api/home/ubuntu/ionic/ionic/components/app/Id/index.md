---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "id"
title: "Id"
header_sub_title: "Class in module "
doc: "Id"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/id/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="id" href="#id"></a>

Id






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/app/id.ts#L2'>
Improve this doc
</a>






<p>The <code>id</code> attribute is an easy way to identify unique components in an app and access them
no matter where in the UI hierarchy you are. For example, this makes toggling
a global side menu possible from any place in the application.</p>


<h2><a class="anchor" name="Directive" href="#Directive"></a>Directive</h2>
<h3>selector: <code>[id]</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>To give any component an ID, simply set its <code>id</code> property:</p>
<pre><code class="lang-html">&lt;ion-checkbox id=&quot;myCheckbox&quot;&gt;&lt;/ion-checkbox&gt;
</code></pre>
<p>To get a reference to the registered component, inject the <a href="../IonicApp/">IonicApp</a>
service:</p>
<pre><code class="lang-ts">constructor(app: IonicApp) {
  this.app = app
}

ngAfterViewInit() {
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



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

