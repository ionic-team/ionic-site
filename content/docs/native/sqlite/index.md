---
layout: "fluid/docs_base"
version: "3.4.4"
versionHref: "/docs/native"
path: ""
category: native
id: "sqlite"
title: "SQLite"
header_sub_title: "Class in module "
doc: "SQLite"
docType: "class"
---

<h1 class="api-title">SQLite</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/sqlite/index.ts#L141">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite
</code></pre>
<p>Repo:
  <a href="https://github.com/litehelpers/Cordova-sqlite-storage">
    https://github.com/litehelpers/Cordova-sqlite-storage
  </a>
</p>


<p>Access SQLite databases on the device.</p>









<h2>Usage</h2>
<pre><code class="lang-typescript">import { SQLite, SQLiteObject } from &#39;@ionic-native/sqlite&#39;;

constructor(private sqlite: SQLite) { }

...

this.sqlite.create({
  name: &#39;data.db&#39;,
  location: &#39;default&#39;
})
  .then((db: SQLiteObject) =&gt; {


    db.executeSql(&#39;create table danceMoves(name VARCHAR(32))&#39;, {})
      .then(() =&gt; console.log(&#39;Executed SQL&#39;))
      .catch(e =&gt; console.log(e));


  })
  .catch(e =&gt; console.log(e));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(config)</code></h3>


Open or create a SQLite database file.

See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database

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
      config</td>
    <td>
      <code>SQLiteDatabaseConfig</code>
    </td>
    <td>
      <p>database configuration</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<SQLiteObject>

</div><h3><a class="anchor" name="echoTest" href="#echoTest"></a><code>echoTest()</code></h3>


Verify that both the Javascript and native part of this plugin are installed in your application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="deleteDatabase" href="#deleteDatabase"></a><code>deleteDatabase(config)</code></h3>


Deletes a database
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
      config</td>
    <td>
      <code>SQLiteDatabaseConfig</code>
    </td>
    <td>
      <p>database configuration</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>

<h2><a class="anchor" name="SQLiteObject" href="#SQLiteObject"></a>SQLiteObject</h2>




<h2>Instance Members</h2>
<h3><a class="anchor" name="databaseFeatures" href="#databaseFeatures"></a><code>databaseFeatures()</code></h3>





<h3><a class="anchor" name="addTransaction" href="#addTransaction"></a><code>addTransaction()</code></h3>







<h3><a class="anchor" name="transaction" href="#transaction"></a><code>transaction(fn)</code></h3>





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
      fn</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="readTransaction" href="#readTransaction"></a><code>readTransaction(fn)</code></h3>



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
      fn</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startNextTransaction" href="#startNextTransaction"></a><code>startNextTransaction()</code></h3>







<h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="start" href="#start"></a><code>start()</code></h3>







<h3><a class="anchor" name="executeSql" href="#executeSql"></a><code>executeSql()</code></h3>


Execute SQL on the opened database. Note, you must call `create` first, and
ensure it resolved and successfully opened the database.



<h3><a class="anchor" name="addStatement" href="#addStatement"></a><code>addStatement(sql,&nbsp;values)</code></h3>



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
      sql</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      values</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sqlBatch" href="#sqlBatch"></a><code>sqlBatch(sqlStatements)</code></h3>



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
      sqlStatements</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="abortallPendingTransactions" href="#abortallPendingTransactions"></a><code>abortallPendingTransactions()</code></h3>







<h3><a class="anchor" name="handleStatementSuccess" href="#handleStatementSuccess"></a><code>handleStatementSuccess(handler,&nbsp;response)</code></h3>





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
      handler</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      response</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="handleStatementFailure" href="#handleStatementFailure"></a><code>handleStatementFailure(handler,&nbsp;response)</code></h3>





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
      handler</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      response</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="run" href="#run"></a><code>run()</code></h3>







<h3><a class="anchor" name="abort" href="#abort"></a><code>abort(txFailure)</code></h3>





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
      txFailure</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="finish" href="#finish"></a><code>finish()</code></h3>







<h3><a class="anchor" name="abortFromQ" href="#abortFromQ"></a><code>abortFromQ(sqlerror)</code></h3>





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
      sqlerror</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>





<h2><a class="anchor" name="SQLiteDatabaseConfig" href="#SQLiteDatabaseConfig"></a>SQLiteDatabaseConfig</h2>

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
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the database. Example: &#39;my.db&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Location of the database. Example: &#39;default&#39;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      iosDatabaseLocation
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>iOS Database Location. Example: &#39;Library&#39;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





