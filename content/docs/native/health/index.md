---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "health"
title: "Health"
header_sub_title: "Class in module "
doc: "Health"
docType: "class"
---

<h1 class="api-title">Health</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/health/index.ts#L160">
  Improve this doc
</a>







<p>A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit.</p>


<p>Repo:
  <a href="https://github.com/dariosalvi78/cordova-plugin-health">
    https://github.com/dariosalvi78/cordova-plugin-health
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-health
$ npm install --save @ionic-native/health
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Health } from &#39;@ionic-native/health&#39;;


constructor(private health: Health) { }

...

this.health.isAvailable()
.then((available:boolean) =&gt; {
  console.log(available);
  this.health.requestAuthorization([
    &#39;distance&#39;, &#39;nutrition&#39;,  //read and write permissions
    {
      read: [&#39;steps&#39;],       //read only permission
      write: [&#39;height&#39;, &#39;weight&#39;]  //write only permission
    }
  ])
  .then(res =&gt; console.log(res))
  .catch(e =&gt; console.log(e));
})
.catch(e =&gt; console.log(e));
</code></pre>
<p>See description at <a href="https://github.com/dariosalvi78/cordova-plugin-health">https://github.com/dariosalvi78/cordova-plugin-health</a> for a full list of Datatypes and see examples.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>




Tells if either Google Fit or HealthKit are available.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="promptInstallFit" href="#promptInstallFit"></a><code>promptInstallFit()</code></h3>




Checks if recent Google Play Services and Google Fit are installed. If the play services are not installed,
or are obsolete, it will show a pop-up suggesting to download them. If Google Fit is not installed,
it will open the Play Store at the location of the Google Fit app.
The plugin does not wait until the missing packages are installed, it will return immediately.
If both Play Services and Google Fit are available, this function just returns without any visible effect.

This function is only available on Android.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestAuthorization" href="#requestAuthorization"></a><code>requestAuthorization(datatypes)</code></h3>


Requests read and/or write access to a set of data types. It is recommendable to always explain why the app
needs access to the data before asking the user to authorize it.
This function must be called before using the query and store functions, even if the authorization has already
been given at some point in the past.

Quirks of requestAuthorization()

In Android, it will try to get authorization from the Google Fit APIs.
It is necessary that the app's package name and the signing key are registered in the Google API console.
In Android, be aware that if the activity is destroyed (e.g. after a rotation) or is put in background,
the connection to Google Fit may be lost without any callback. Going through the authorization will ensure that
the app is connected again.
In Android 6 and over, this function will also ask for some dynamic permissions if needed
(e.g. in the case of "distance", it will need access to ACCESS_FINE_LOCATION).

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
      datatypes</td>
    <td>
      <code>Array&lt;string | HealthDataType&gt;</code>
    </td>
    <td>
      <p>a list of data types you want to be granted access to.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isAuthorized" href="#isAuthorized"></a><code>isAuthorized(datatypes)</code></h3>


Check if the app has authorization to read/write a set of datatypes.

Quirks of isAuthorized()

In iOS, this function will only check authorization status for writeable data.
Read-only data will always be considered as not authorized. This is an intended behaviour of HealthKit.

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
      datatypes</td>
    <td>
      <code>Array&lt;string | HealthDataType&gt;</code>
    </td>
    <td>
      <p>a list of data types you want to check access of, same as in requestAuthorization</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that indicates the authorization status
</div><h3><a class="anchor" name="query" href="#query"></a><code>query(queryOptions)</code></h3>


Gets all the data points of a certain data type within a certain time window.
Warning: if the time span is big, it can generate long arrays!

Quirks of query()

In iOS, the amount of datapoints is limited to 1000 by default.
You can override this by adding a limit: xxx to your query object.
In iOS, datapoints are ordered in an descending fashion (from newer to older).
You can revert this behaviour by adding ascending: true to your query object.
In Android, it is possible to query for "raw" steps or to select those as filtered by the Google Fit app.
In the latter case the query object must contain the field filtered: true.
In Google Fit, calories.basal is returned as an average per day, and usually is not available in all days.
In Google Fit, calories.active is computed by subtracting the basal calories from the total.
As basal energy expenditure, an average is computed from the week before endDate.
While Google Fit calculates basal and active calories automatically,
HealthKit needs an explicit input from some app.
When querying for activities, Google Fit is able to determine some activities automatically
(still, walking, running, biking, in vehicle), while HealthKit only relies on the input of
the user or of some external app.
When querying for activities, calories and distance are also provided in HealthKit (units are kcal and meters) and
never in Google Fit.
When querying for nutrition, Google Fit always returns all the nutrition elements it has,
while HealthKit returns only those that are stored as correlation. To be sure to get all stored the quantities
(regardless of they are stored as correlation or not), it's better to query single nutrients.
nutrition.vitamin_a is given in micrograms in HealthKit and International Unit in Google Fit.
Automatic conversion is not trivial and depends on the actual substance.

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
      queryOptions</td>
    <td>
      <code>HealthQueryOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HealthData[]&gt;</code> 
</div><h3><a class="anchor" name="queryAggregated" href="#queryAggregated"></a><code>queryAggregated(queryOptionsAggregated)</code></h3>


Gets aggregated data in a certain time window. Usually the sum is returned for the given quantity.

Quirks of queryAggregated()
In Android, to query for steps as filtered by the Google Fit app, the flag filtered:
true must be added into the query object.
When querying for activities, calories and distance are provided
when available in HealthKit and never in Google Fit.
In Android, the start and end dates returned are the date of the first and the last available samples.
If no samples are found, start and end may not be set.
When bucketing, buckets will include the whole hour / day / month / week / year where start and end times
fall into. For example, if your start time is 2016-10-21 10:53:34,
the first daily bucket will start at 2016-10-21 00:00:00.
Weeks start on Monday.
When querying for nutrition, HealthKit returns only those that are stored as correlation.
To be sure to get all the stored quantities, it's better to query single nutrients.
nutrition.vitamin_a is given in micrograms in HealthKit and International Unit in Google Fit.

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
      queryOptionsAggregated</td>
    <td>
      <code>HealthQueryOptionsAggregated</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HealthData[]&gt;</code> 
</div><h3><a class="anchor" name="store" href="#store"></a><code>store(storeOptions)</code></h3>


Stores a data point.

Quirks of store()

Google Fit doesn't allow you to overwrite data points that overlap with others already stored of the same type (see here). At the moment there is no support for update nor delete.
In iOS you cannot store the total calories, you need to specify either basal or active. If you use total calories, the active ones will be stored.
In Android you can only store active calories, as the basal are estimated automatically. If you store total calories, these will be treated as active.
In iOS distance is assumed to be of type WalkingRunning, if you want to explicitly set it to Cycling you need to add the field cycling: true.
In iOS storing the sleep activities is not supported at the moment.
Storing of nutrients is not supported at the moment.
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
      storeOptions</td>
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
</div>





<h2><a class="anchor" name="HealthQueryOptions" href="#HealthQueryOptions"></a>HealthQueryOptions</h2>

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
      startDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Start date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>End date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dataType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Datatype to be queried (see <a href="https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types">https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit the number of values returned. Defaults to 1000</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ascending
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional indicator to sort values ascending or descending</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      filtered
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>In Android, it is possible to query for &quot;raw&quot; steps or to select those as filtered by the Google Fit app.
In the latter case the query object must contain the field filtered: true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HealthQueryOptionsAggregated" href="#HealthQueryOptionsAggregated"></a>HealthQueryOptionsAggregated</h2>

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
      startDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Start date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>End date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dataType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Datatype to be queried (see <a href="https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types">https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      bucket
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>if specified, aggregation is grouped an array of &quot;buckets&quot; (windows of time),
supported values are: &#39;hour&#39;, &#39;day&#39;, &#39;week&#39;, &#39;month&#39;, &#39;year&#39;.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      filtered
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>In Android, it is possible to query for &quot;raw&quot; steps or to select those as filtered by the Google Fit app.
In the latter case the query object must contain the field filtered: true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HealthStoreOptions" href="#HealthStoreOptions"></a>HealthStoreOptions</h2>

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
      startDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Start date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>End date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dataType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Datatype to be queried (see <a href="https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types">https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Value of corresponding Datatype (see &quot;Overview of valid datatypes&quot;)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sourceName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The source that produced this data. In iOS this is ignored and
set automatically to the name of your app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sourceBundleId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The complete package of the source that produced this data.
In Android, if not specified, it&#39;s assigned to the package of the App. In iOS this is ignored and
set automatically to the bunde id of the app.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="HealthData" href="#HealthData"></a>HealthData</h2>

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
      startDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Start date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>End date from which to get data</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Value of corresponding Datatype (see <a href="https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types">https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      unit
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Unit of corresponding value of Datatype (see <a href="https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types">https://github.com/dariosalvi78/cordova-plugin-health#supported-data-types</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sourceName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The source that produced this data. In iOS this is ignored and
set automatically to the name of your app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sourceBundleId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The complete package of the source that produced this data.
In Android, if not specified, it&#39;s assigned to the package of the App. In iOS this is ignored and
set automatically to the bunde id of the app.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





