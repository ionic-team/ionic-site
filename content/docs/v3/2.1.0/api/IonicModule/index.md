---
layout: "fluid/docs_base"
version: "2.1.0"
versionHref: "/docs/v3/2.1.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/index.ts#L260">
Improve this doc
</a>






<p>IonicModule is an NgModule that helps bootstrap a whole Ionic App. By passing a root component, IonicModule will make sure that all the components and directives from the framework are provided. This includes components such as Tabs, Menus, and Slides, as well as classes like AlertController.</p>
<p>We&#39;re also able to pass any configuration to our app as a second argument for <code>.forRoot</code>. This is any valid config property from <a href="/docs//api/config/Config/">the Config Class</a>.</p>
<p>The last functionality that IonicModule allows you to configure is optional routes for DeepLinker. For more information on DeepLinker, please see the <a href="/docs//api/navigation/DeepLinker/">DeepLinker Docs</a></p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

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
    IonicModule.forRoot(MyApp)
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
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<div id="forRoot"></div>
<h3><a class="anchor" name="forRoot" href="#forRoot"></a><code>forRoot(appRoot,&nbsp;config,&nbsp;deepLinkConfig)</code>
  
</h3>

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

