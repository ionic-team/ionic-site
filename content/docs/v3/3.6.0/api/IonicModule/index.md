---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/v3/3.6.0"
path: ""
category: api
id: "ionicmodule"
title: "IonicModule"
header_sub_title: "Ionic API Documentation"
doc: "IonicModule"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="ionic-module" href="#ionic-module"></a>

IonicModule





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/module.ts#L139">
Improve this doc
</a>






<p>IonicModule is an <a href="https://angular.io/docs/ts/latest/guide/ngmodule.html">NgModule</a> that bootstraps
an Ionic App. By passing a root component, IonicModule will make sure that all of the components,
directives, and providers from the framework are imported.</p>
<p>Any configuration for the app can be passed as the second argument to <code>forRoot</code>. This can be any
valid property from the <a href="/docs/v3/api/config/Config/">Config</a>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">import { NgModule } from &#39;@angular/core&#39;;

import { IonicApp, IonicModule } from &#39;ionic-angular&#39;;

import { MyApp } from &#39;./app.component&#39;;
import { HomePage } from &#39;../pages/home/home&#39;;

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members">Static Members</a></h2>
<div id="forRoot"></div>
<h3><a class="anchor" name="forRoot" href="#forRoot"><code>forRoot(appRoot,&nbsp;config,&nbsp;deepLinkConfig)</code>
  
</a></h3>

Set the root app component for you IonicModule


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
        appRoot
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>The root AppComponent for this app.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        config
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>Config Options for the app. Accepts any config property.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        deepLinkConfig
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>Any configuration needed for the Ionic Deeplinker.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

