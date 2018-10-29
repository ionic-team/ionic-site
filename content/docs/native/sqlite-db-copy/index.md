---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "sqlite-db-copy"
title: "Sqlite Db Copy"
header_sub_title: "Class in module "
doc: "Sqlite Db Copy"
docType: "class"
---

<h1 class="api-title">Sqlite Db Copy</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/sqlite-db-copy/index.ts#L1">
  Improve this doc
</a>







<p>This plugin does something</p>


<p>Repo:
  <a href="https://github.com/an-rahulpandey/cordova-plugin-dbcopy">
    https://github.com/an-rahulpandey/cordova-plugin-dbcopy
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-dbcopy
$ npm install --save @ionic-native/sqlite-db-copy
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SqliteDbCopy } from &#39;@ionic-native/sqlite-db-copy&#39;;


constructor(private sqliteDbCopy: SqliteDbCopy) { }

...


this.sqliteDbCopy.copy(&#39;sample.db&#39;, 0)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="copy" href="#copy"></a><code>copy(dbname,&nbsp;location)</code></h3>




Copy database from www directory to device SQLite DB location
(for ios only, use 0 for Android)
location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
or
location = 1; // If set will copy the database to Library folder instead of Documents folder.
or
location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
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
      dbname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Database file name available in www diretory with extension.The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin</p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location where to copy the database for app (only applicable for ios).For Android pass 0.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="checkDbOnStorage" href="#checkDbOnStorage"></a><code>checkDbOnStorage(dbname,&nbsp;source)</code></h3>




Check if database is available at external storage. Useful when trying to copying the database from device sdcard.
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
      dbname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the database file which is available on external or intenral storage</p>
</td>
  </tr>
  
  <tr>
    <td>
      source</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Full native path for the folder in which db file is present. The &quot;/&quot; must be added at the end of path. For.eg. /sdcard/mydb/. Should not include dbname.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="copyDbFromStorage" href="#copyDbFromStorage"></a><code>copyDbFromStorage(dbname,&nbsp;location,&nbsp;source,&nbsp;deleteolddb)</code></h3>




Copy database which is available on the device external/internal storage to app default db location
(for ios only, use 0 for Android)
location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
or
location = 1; // If set will copy the database to Library folder instead of Documents folder.
or
location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
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
      dbname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Is the name of the database you want to copy. The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin</p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location where to copy the database for app (only applicable for ios). For Android pass 0.</p>
</td>
  </tr>
  
  <tr>
    <td>
      source</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Source File location like /sdcard/mydb/db.db. Please provide a valid existing location and the dbname should be present in the path.</p>
</td>
  </tr>
  
  <tr>
    <td>
      deleteolddb</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value if set to true, will delete the existing db from the local app database folder before copying the new db. Please provide proper boolean value true or false;</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="copyDbToStorage" href="#copyDbToStorage"></a><code>copyDbToStorage(dbname,&nbsp;location,&nbsp;destination,&nbsp;overwrite)</code></h3>




Copy the app database to external/internal storage on the device.
(for ios only, use 0 for Android)
location = 0; //It will copy the database from Library/LocalDatabase location.
or
location = 1; // It will copy the database from Library folder instead.
or
location = 2; // It will copy the database from the default SQLite Database directory. This is the default location for database
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
      dbname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Is the name of the database you want to copy. The plugin will look for and copy the file according to the filename provided here. And the same file name should be used while opening the database via SQLitePlugin.</p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location where to copy the database for app (only applicable for ios). For Android pass 0.</p>
</td>
  </tr>
  
  <tr>
    <td>
      destination</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Destination File location like /sdcard/mydb/ Please provide a valid existing location and &quot;/&quot; should be present at the end of the path. Do not append db name in the path.</p>
</td>
  </tr>
  
  <tr>
    <td>
      overwrite</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set to true, then will replace the file at the destination. Otherwise will throw an error, if destination file already exists.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove(dbname,&nbsp;location)</code></h3>




This method allows you to remove the database from the apps default database storage location.
(for ios only, use 0 for Android)
location = 0; // (Disable iCloud Backup) If set will copy the database to Library/LocalDatabase. The database will not be synced by the iCloud Backup.
or
location = 1; // If set will copy the database to Library folder instead of Documents folder.
or
location = 2; // It will copy the database in the default SQLite Database directory. This is the default location for database
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
      dbname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Is the name of the database you want to remove. If the database file is having any extension, please provide that also.</p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Location where to copy the database for app (only applicable for ios).For Android pass 0.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





