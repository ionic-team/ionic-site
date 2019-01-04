---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "couchbase-lite"
title: "Couchbase Lite"
header_sub_title: "Class in module "
doc: "Couchbase Lite"
docType: "class"
---

<h1 class="api-title">Couchbase Lite</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/couchbase-lite/index.ts#L1">
  Improve this doc
</a>







<p>Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android</p>


<p>Repo:
  <a href="https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin">
    https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add couchbase-lite-phonegap-plugin
$ npm install --save @ionic-native/couchbase-lite
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CouchbaseLite } from &#39;@ionic-native/couchbase-lite&#39;;
import { Http } from &#39;@angular/http&#39;;
import { Observable } from &#39;rxjs/Observable&#39;
constructor(private couchbase: CouchbaseLite, private platform:Platform,private _http:Http) {
   this.initMethod();
}
url:string;
initMethod() {
   this.couchbase.getURL().then((url)=&gt; {
       this.url = url;
   })
}
getUrl() {
     return this.url;
}
// DATABASES //
createDatabase(database_name:string) {
     let url = this.getUrl();
     url = url+database_name;
     return this._http
       .put(url)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
        })
 }
deleteDatabase(database_name:string) {
     let url = this.getUrl();
     url = url+database_name;
     return this._http
       .delete(url)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })
}
getAllDbs() {
     let url = this.getUrl();
     url = url+&#39;_all_dbs&#39;;
     return this._http
       .get(url)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })
}
// DOCUMENTS //
getAllDocuments(database_name:string){
     let url = this.getUrl();
     // include_docs=true will include a doc inside response, it is false by default
     url = url + database_name + &#39;/_all_docs?include_docs=true&#39;;
     return this._http
       .get(url)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })        .
}
createDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name;
     return this._http
       .post(url,document)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })        .
}
let document = {
   _id:&#39;You can either specify the document ID (must be string) else couchbase generates one for your doc&#39;,
   data:{name:&#39;sandman&#39;,age:25,city:pune}
 }
createDocument(&#39;justbe&#39;, document);
// successful response
{ &quot;id&quot;: &quot;string&quot;,&quot;rev&quot;: &quot;string&quot;,&quot;ok&quot;: true }
updateDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name + &#39;/&#39; + document._id;
     return this._http
       .put(url,document)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })        .
}
// for updation of document your document must contain most recent rev(revision) id.
// for each updation of document new rev id is get generated
// successful response
{ &quot;id&quot;: &quot;string&quot;,&quot;rev&quot;: &quot;string(new revision id)&quot;,&quot;ok&quot;: true }
deleteDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name + &#39;/&#39; + document._id +&#39;?rev=&#39;+doc._rev;
     return this._http
       .delete(url)
       .map(data =&gt; { this.results = data[&#39;results&#39;] })
       .catch((error:any) =&gt; {
          return Observable.throw(error.json() || &#39;Couchbase Lite error&#39;);
       })        .
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getURL" href="#getURL"></a><code>getURL()</code></h3>




Get the database url


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with the local database url
</div>





