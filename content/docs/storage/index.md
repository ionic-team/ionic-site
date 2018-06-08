---
layout: fluid/docs_base
version: "2.1.3"
category: storage
id: "storage"
title: "Storage - Ionic Framework"
---





<h1 class="api-title">
<a class="anchor" name="storage" href="#storage"></a>

Storage




</h1>

<a class="improve-docs" href="http://github.com/ionic-team/ionic/edit/master/src/storage.ts#L">
Improve this doc
</a>



<p>Storage is an easy way to store key/value pairs and JSON objects.
Storage uses a variety of storage engines underneath, picking the best one available
depending on the platform.</p>
<p>When running in a native app context, Storage will prioritize using SQLite, as it&#39;s one of
the most stable and widely used file-based databases, and avoids some of the
pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such
data in low disk-space situations.</p>
<p>When running in the web or as a Progressive Web App, Storage will attempt to use
IndexedDB, WebSQL, and localstorage, in that order.</p>



<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>First, if you&#39;d like to use SQLite, install the cordova-sqlite-storage plugin:</p>
<pre><code class="lang-bash">ionic cordova plugin add cordova-sqlite-storage
</code></pre>
<p>Next, install the package (comes by default for Ionic apps &gt; Ionic V1):</p>
<pre><code class="lang-bash">npm install --save @ionic/storage
</code></pre>
<p>Next, add it to the imports list in your <code>NgModule</code> declaration (for example, in <code>src/app/app.module.ts</code>):</p>
<pre><code class="lang-typescript">import { IonicStorageModule } from &#39;@ionic/storage&#39;;

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
</code></pre>
<p>Finally, inject it into any of your components or pages:</p>
<pre><code class="lang-typescript">import { Storage } from &#39;@ionic/storage&#39;;

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // set a key/value
  storage.set(&#39;name&#39;, &#39;Max&#39;);

  // Or to get a key/value pair
  storage.get(&#39;age&#39;).then((val) =&gt; {
    console.log(&#39;Your age is&#39;, val);
  });
}
</code></pre>
<h3 id="configuring-storage">Configuring Storage</h3>
<p>The Storage engine can be configured both with specific storage engine priorities, or custom configuration
options to pass to localForage. See the localForage config docs for possible options: <a href="https://github.com/localForage/localForage#configuration">https://github.com/localForage/localForage#configuration</a></p>
<p>Note: Any custom configurations will be merged with the default configuration</p>
<pre><code class="lang-typescript">import { IonicStorageModule } from &#39;@ionic/storage&#39;;

@NgModule({
  declarations: [...],
  imports: [
    IonicStorageModule.forRoot({
      name: &#39;__mydb&#39;,
         driverOrder: [&#39;indexeddb&#39;, &#39;sqlite&#39;, &#39;websql&#39;]
    })
  ],
  bootstrap: [...],
  entryComponents: [...],
   providers: [...]
})
export class AppModule { }
</code></pre>




<!-- @property tags -->


<!-- instance methods on the class -->
<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<div id="driver"></div>
<h3><a class="anchor" name="driver" href="#driver"></a><code>driver</code>
  
</h3>
Get the name of the driver being used.



<div class="return-value">
<b>Returns:</b> 
   <p>Name of the driver</p>


</div>


<div id="ready"></div>
<h3><a class="anchor" name="ready" href="#ready"></a><code>ready()</code>
  
</h3>
Reflect the readiness of the store.



<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves when the store is ready</p>


</div>


<div id="get"></div>
<h3><a class="anchor" name="get" href="#get"></a><code>get(key)</code>
  
</h3>
Get the value associated with the given key.
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
        key
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the key to identify this value</p>

        
      </td>
    </tr>
    
  </tbody>
</table>


<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise with the value of the given key</p>


</div>


<div id="set"></div>
<h3><a class="anchor" name="set" href="#set"></a><code>set(key,&nbsp;value)</code>
  
</h3>
Set the value for the given key.
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
        key
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the key to identify this value</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the value for this key</p>

        
      </td>
    </tr>
    
  </tbody>
</table>


<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves when the key and value are set</p>


</div>


<div id="remove"></div>
<h3><a class="anchor" name="remove" href="#remove"></a><code>remove(key)</code>
  
</h3>
Remove any value associated with this key.
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
        key
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the key to identify this value</p>

        
      </td>
    </tr>
    
  </tbody>
</table>


<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves when the value is removed</p>


</div>


<div id="clear"></div>
<h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code>
  
</h3>
Clear the entire key value store. WARNING: HOT!



<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves when the store is cleared</p>


</div>


<div id="length"></div>
<h3><a class="anchor" name="length" href="#length"></a><code>length()</code>
  
</h3>




<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves with the number of keys stored.</p>


</div>


<div id="keys"></div>
<h3><a class="anchor" name="keys" href="#keys"></a><code>keys()</code>
  
</h3>




<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves with the keys in the store.</p>


</div>


<div id="forEach"></div>
<h3><a class="anchor" name="forEach" href="#forEach"></a><code>forEach(iteratorCallback)</code>
  
</h3>
Iterate through each key,value pair.
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
        iteratorCallback
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>a callback of the form (value, key, iterationNumber)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>


<div class="return-value">
<b>Returns:</b> 
   <p>Returns a promise that resolves when the iteration has finished.</p>


</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

