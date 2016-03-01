---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.2"
versionHref: "/docs/v2/2.0.0-beta.2"
path: ""
category: api
id: "app"
title: "App"
header_sub_title: "Function in module "
doc: "App"
docType: "function"

---









<h1 class="api-title">


App






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/decorators/app.ts#L34'>
Improve this doc
</a>






<p>App is an Ionic decorator that bootstraps an application. It can be passed a
number of arguments that act as global config variables for the app.
<code>@App</code> is similar to Angular&#39;s <code>@Component</code> in which it can accept a <code>template</code>
property that has an inline template, or a <code>templateUrl</code> property that points
to an external html template.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {App} from &#39;ionic-angular&#39;;

@App({
  templateUrl: &#39;app/app.html&#39;,
  providers: [DataService]
})

export class MyApp{
  // Anything we would want to do at the root of our app
}
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
config
</td>


<td>
object
</td>


<td>
the app's <a href='/docs/v2/api/config/Config/'>Config</a> object.
</td>
</tr>

<tr>
<td>
prodMode
</td>


<td>
boolean
</td>


<td>
Enable Angular's production mode, which turns off assertions and other checks within the framework. Additionally, this config sets the return value of `isProd()` which is on the `IonicApp` instance. Defaults to `false`.
</td>
</tr>

<tr>
<td>
pipes
</td>


<td>
array
</td>


<td>
any pipes for your app.
</td>
</tr>

<tr>
<td>
providers
</td>


<td>
array
</td>


<td>
any providers for your app.
</td>
</tr>

<tr>
<td>
template
</td>


<td>
string
</td>


<td>
the template to use for the app root.
</td>
</tr>

<tr>
<td>
templateUrl
</td>


<td>
string
</td>


<td>
a relative URL pointing to the template to use for the app root.
</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

