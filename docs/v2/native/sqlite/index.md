---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "sqlite"
title: "SQLite"
header_sub_title: "Class in module "
doc: "SQLite"
docType: "class"
---







<h1 class="api-title">
  
  SQLite
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/sqlite.ts#L3">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-sqlite-storage</code></pre>
<p>Repo:
  <a href="https://github.com/litehelpers/Cordova-sqlite-storage">
    https://github.com/litehelpers/Cordova-sqlite-storage
  </a>
</p>

<!-- description -->

<p>Access SQLite databases on the device.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { SQLite } from &#39;ionic-native&#39;;

let db = new SQLite();
db.openDatabase({
  name: &#39;data.db&#39;,
  location: &#39;default&#39; // the location field is required
}).then(() =&gt; {
  db.executeSql(&#39;create table danceMoves(name VARCHAR(32))&#39;, {}).then(() =&gt; {

  }, (err) =&gt; {
    console.error(&#39;Unable to execute sql: &#39;, err);
  });
}, (err) =&gt; {
  console.error(&#39;Unable to open database: &#39;, err);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="echoTest"></div>
<h3><code>echoTest()</code>
  
</h3>












<div id="deleteDatabase"></div>
<h3><code>deleteDatabase()</code>
  
</h3>













<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="databaseFeatures"></div>
<h3>
  <code>databaseFeatures</code>
  

</h3>




<div id="openDatabase"></div>
<h3>
  <code>openDatabase(config)</code>
  

</h3>
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
      config
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>the config for opening the database.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="addTransaction"></div>
<h3>
  <code>addTransaction()</code>
  

</h3>




<div id="transaction"></div>
<h3>
  <code>transaction()</code>
  

</h3>




<div id="readTransaction"></div>
<h3>
  <code>readTransaction()</code>
  

</h3>




<div id="startNextTransaction"></div>
<h3>
  <code>startNextTransaction()</code>
  

</h3>




<div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>




<div id="start"></div>
<h3>
  <code>start()</code>
  

</h3>




<div id="executeSql"></div>
<h3>
  <code>executeSql()</code>
  

</h3>
Execute SQL on the opened database. Note, you must call `openDatabase` first, and
ensure it resolved and successfully opened the database.



<div id="addStatement"></div>
<h3>
  <code>addStatement()</code>
  

</h3>




<div id="sqlBatch"></div>
<h3>
  <code>sqlBatch()</code>
  

</h3>




<div id="abortallPendingTransactions"></div>
<h3>
  <code>abortallPendingTransactions()</code>
  

</h3>




<div id="handleStatementSuccess"></div>
<h3>
  <code>handleStatementSuccess()</code>
  

</h3>




<div id="handleStatementFailure"></div>
<h3>
  <code>handleStatementFailure()</code>
  

</h3>




<div id="run"></div>
<h3>
  <code>run()</code>
  

</h3>




<div id="abort"></div>
<h3>
  <code>abort()</code>
  

</h3>




<div id="finish"></div>
<h3>
  <code>finish()</code>
  

</h3>




<div id="abortFromQ"></div>
<h3>
  <code>abortFromQ()</code>
  

</h3>








<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

