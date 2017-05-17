---
layout: "fluid/docs_base"
version: "3.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "filewriter"
title: "FileWriter"
header_sub_title: "Class in module "
doc: "FileWriter"
docType: "class"
---

<h1 class="api-title">FileWriter</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file/index.ts#L488">
  Improve this doc
</a>











<h2>Instance Members</h2>
<h3><a class="anchor" name="position" href="#position"></a><code>position</code></h3>

The byte offset at which the next write to the file will occur. This must be no greater than length.
A newly-created FileWriter must have position set to 0.



<h3><a class="anchor" name="length" href="#length"></a><code>length</code></h3>

The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.



<h3><a class="anchor" name="write" href="#write"></a><code>write(data)</code></h3>

Write the supplied data to the file at position.
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
      data</td>
    <td>
      
    </td>
    <td>
      <p>The blob to write.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="seek" href="#seek"></a><code>seek(offset)</code></h3>

Seek sets the file position at which the next write will occur.
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
      offset</td>
    <td>
      
    </td>
    <td>
      <p>If nonnegative, an absolute byte offset into the file. If negative, an offset back from the end of the file.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="truncate" href="#truncate"></a><code>truncate(size)</code></h3>

Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.
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
      size</td>
    <td>
      
    </td>
    <td>
      <p>The size to which the length of the file is to be adjusted, measured in bytes.</p>
</td>
  </tr>
  </tbody>
</table>







