---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "photo-library"
title: "Photo Library"
header_sub_title: "Class in module "
doc: "Photo Library"
docType: "class"
---

<h1 class="api-title">Photo Library</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/photo-library/index.ts#L69">
  Improve this doc
</a>







<p>The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
Saving photos and videos to the library is also supported.
cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.</p>


<p>Repo:
  <a href="https://github.com/terikon/cordova-plugin-photo-library">
    https://github.com/terikon/cordova-plugin-photo-library
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"
$ npm install --save @ionic-native/photo-library
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { PhotoLibrary } from &#39;@ionic-native/photo-library&#39;;

constructor(private photoLibrary: PhotoLibrary) { }

this.photoLibrary.requestAuthorization().then(() =&gt; {
  this.photoLibrary.getLibrary().subscribe({
    next: library =&gt; {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err =&gt; { console.log(&#39;could not get photos&#39;); },
    complete: () =&gt; { console.log(&#39;done getting photos&#39;); }
  });
})
.catch(err =&gt; console.log(&#39;permissions weren\&#39;t granted&#39;));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getLibrary" href="#getLibrary"></a><code>getLibrary(options)</code></h3>




Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
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
      options</td>
    <td>
      <code>GetLibraryOptions</code>
    </td>
    <td>
      <p>Optional, like thumbnail size and chunks settings.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;LibraryItem[]&gt;</code> Returns library items. If appropriate option was set, will be returned by chunks.
</div><h3><a class="anchor" name="requestAuthorization" href="#requestAuthorization"></a><code>requestAuthorization(options)</code></h3>




Asks user permission to access photo library.
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
      options</td>
    <td>
      <code>RequestAuthorizationOptions</code>
    </td>
    <td>
      <p>Optional, like whether only read access needed or read/write.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise that resolves when permissions are granted, and fails when not.
</div><h3><a class="anchor" name="getAlbums" href="#getAlbums"></a><code>getAlbums()</code></h3>




Returns list of photo albums on device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AlbumItem[]&gt;</code> Resolves to list of albums.
</div><h3><a class="anchor" name="getThumbnailURL" href="#getThumbnailURL"></a><code>getThumbnailURL(photo,&nbsp;options)</code></h3>




Provides means to request URL of thumbnail, with specified size or quality.
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
      photo</td>
    <td>
      <code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id of photo, or LibraryItem.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size or quality.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Resolves to URL of cdvphotolibrary schema.
</div><h3><a class="anchor" name="getPhotoURL" href="#getPhotoURL"></a><code>getPhotoURL(photo,&nbsp;options)</code></h3>




Provides means to request photo URL by id.
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
      photo</td>
    <td>
      <code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>GetPhotoOptions</code>
    </td>
    <td>
      <p>Optional options.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Resolves to URL of cdvphotolibrary schema.
</div><h3><a class="anchor" name="getThumbnail" href="#getThumbnail"></a><code>getThumbnail(photo,&nbsp;options)</code></h3>




Returns thumbnail as Blob.
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
      photo</td>
    <td>
      <code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size or quality.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Blob&gt;</code> Resolves requested thumbnail as blob.
</div><h3><a class="anchor" name="getPhoto" href="#getPhoto"></a><code>getPhoto(photo,&nbsp;options)</code></h3>




Returns photo as Blob.
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
      photo</td>
    <td>
      <code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>GetPhotoOptions</code>
    </td>
    <td>
      <p>Optional options.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Blob&gt;</code> Resolves requested photo as blob.
</div><h3><a class="anchor" name="saveImage" href="#saveImage"></a><code>saveImage(url,&nbsp;album,&nbsp;options)</code></h3>




Saves image to specified album. Album will be created if not exists.
LibraryItem that represents saved image is returned.
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of a file, or DataURL.</p>
</td>
  </tr>
  
  <tr>
    <td>
      album</td>
    <td>
      <code>AlbumItem</code>|<code>string</code>
    </td>
    <td>
      <p>Name of an album or AlbumItem object.</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size for resulting LibraryItem.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LibraryItem&gt;</code> Resolves to LibraryItem that represents saved image.
</div><h3><a class="anchor" name="saveVideo" href="#saveVideo"></a><code>saveVideo(url,&nbsp;album)</code></h3>




Saves video to specified album. Album will be created if not exists.
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of a file, or DataURL.</p>
</td>
  </tr>
  
  <tr>
    <td>
      album</td>
    <td>
      <code>AlbumItem</code>|<code>string</code>
    </td>
    <td>
      <p>Name of an album or AlbumItem object.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Resolves when save operation completes.
</div>





