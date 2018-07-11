---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "sqlite-porter"
title: "SQLite Porter"
header_sub_title: "Class in module "
doc: "SQLite Porter"
docType: "class"
---

<h1 class="api-title">SQLite Porter</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/sqlite-porter/index.ts#L1">
  Improve this doc
</a>







<p>This Cordova/Phonegap plugin can be used to import/export to/from a SQLite database using either SQL or JSON.</p>


<p>Repo:
  <a href="https://github.com/dpa99c/cordova-sqlite-porter">
    https://github.com/dpa99c/cordova-sqlite-porter
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
$ npm install --save @ionic-native/sqlite-porter
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>iOS</li><li>Tizen</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SQLitePorter } from &#39;@ionic-native/sqlite-porter&#39;;


constructor(private sqlitePorter: SQLitePorter) { }

...

let db = window.openDatabase(&#39;Test&#39;, &#39;1.0&#39;, &#39;TestDB&#39;, 1 * 1024);
// or we can use SQLite plugin
// we will assume that we injected SQLite into this component as sqlite
this.sqlite.create({
  name: &#39;data.db&#39;,
  location: &#39;default&#39;
})
  .then((db: any) =&gt; {
    let dbInstance = db._objectInstance;
    // we can pass db._objectInstance as the database option in all SQLitePorter methods
  });


let sql = &#39;CREATE TABLE Artist ([Id] PRIMARY KEY, [Title]);&#39; +
           &#39;INSERT INTO Artist(Id,Title) VALUES (&quot;1&quot;,&quot;Fred&quot;);&#39;;

this.sqlitePorter.importSqlToDb(db, sql)
  .then(() =&gt; console.log(&#39;Imported&#39;))
  .catch(e =&gt; console.error(e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="importSqlToDb" href="#importSqlToDb"></a><code>importSqlToDb(db,&nbsp;sql)</code></h3>




Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.
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
      db</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Database object</p>
</td>
  </tr>
  
  <tr>
    <td>
      sql</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>SQL statements to execute against the database</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="exportDbToSql" href="#exportDbToSql"></a><code>exportDbToSql(db)</code></h3>




Exports a SQLite DB as a set of SQL statements.
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
      db</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Database object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="importJsonToDb" href="#importJsonToDb"></a><code>importJsonToDb(db,&nbsp;json)</code></h3>




Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.
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
      db</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Database object</p>
</td>
  </tr>
  
  <tr>
    <td>
      json</td>
    <td>
      <code>Object</code>|<code>string</code>
    </td>
    <td>
      <p>JSON structure containing row data and/or table structure as either a JSON object or string</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="exportDbToJson" href="#exportDbToJson"></a><code>exportDbToJson(db)</code></h3>




Exports a SQLite DB as a JSON structure
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
      db</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Database object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="wipeDb" href="#wipeDb"></a><code>wipeDb(db)</code></h3>




Wipes all data from a database by dropping all existing tables
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
      db</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Database object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





